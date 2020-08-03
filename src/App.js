import React, { useState, useEffect } from "react";
import * as idb from "idb-keyval";

async function fetchData(size, onProgress) {
  const url = `https://cellular-speedtest.s3.eu-central-1.amazonaws.com/download/${size}mb`;
  console.log("feching", url);

  const res = await fetch(url);
  if (!res.ok) {
    throw Error(res.status + " " + res.statusText);
  }

  if (!res.body) {
    throw Error("ReadableStream not supported in this browser.");
  }

  const contentEncoding = res.headers.get("content-encoding");
  const contentLength =
    res.headers.get(contentEncoding ? "x-file-size" : "content-length") || size;

  const total = parseInt(contentLength, 10);
  let loaded = 0;

  const response = new Response(
    new ReadableStream({
      start(controller) {
        const reader = res.body.getReader();

        read();
        function read() {
          reader
            .read()
            .then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              loaded += value.byteLength;
              onProgress({ loaded, total });
              controller.enqueue(value);
              read();
            })
            .catch((error) => {
              console.error(error);
              controller.error(error);
            });
        }
      },
    })
  );

  return response.blob();
}

function Download({ id, size, onComplete }) {
  const [progress, setProgress] = useState();
  return (
    <p>
      <button
        onClick={async () => {
          await idb.set(id.toString(), await fetchData(size, setProgress));
          onComplete();
          setProgress(null);
        }}
      >
        Download {size} MB
      </button>
      {progress && (
        <progress max={progress.total} value={progress.loaded}>
          {progress.loaded}%
        </progress>
      )}
    </p>
  );
}
function App() {
  const [keys, setKeys] = useState([]);
  const updateKeys = () => void idb.keys().then(setKeys);
  useEffect(updateKeys, []);
  return (
    <>
      <h1>IndexedDB Memory Usage Test</h1>
      {keys.map((id) => (
        <div key={id}>
          Blob {id}
          <button onClick={() => idb.del(id).then(updateKeys)}>Remove</button>
        </div>
      ))}
      <Download
        id={Math.max(0, ...keys) + 1}
        size={500}
        onComplete={updateKeys}
      />
    </>
  );
}

export default App;
