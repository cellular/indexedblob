(this.webpackJsonpindexedblob=this.webpackJsonpindexedblob||[]).push([[0],{10:function(e,n,t){e.exports=t(17)},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(8),c=t.n(a),i=(t(15),t(9)),s=t(2),l=t.n(s),u=t(6),d=t(5),f=t(4);function h(e,n){return p.apply(this,arguments)}function p(){return(p=Object(d.a)(l.a.mark((function e(n,t){var o,r,a,c,i,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="https://cellular-speedtest.s3.eu-central-1.amazonaws.com/download/".concat(n,"mb"),console.log("feching",o),e.next=4,fetch(o);case 4:if((r=e.sent).ok){e.next=7;break}throw Error(r.status+" "+r.statusText);case 7:if(r.body){e.next=9;break}throw Error("ReadableStream not supported in this browser.");case 9:return a=r.headers.get("content-encoding"),c=r.headers.get(a?"x-file-size":"content-length")||n,i=parseInt(c,10),s=0,u=new Response(new ReadableStream({start:function(e){var n=r.body.getReader();!function o(){n.read().then((function(n){var r=n.done,a=n.value;r?e.close():(s+=a.byteLength,t({loaded:s,total:i}),e.enqueue(a),o())})).catch((function(n){console.error(n),e.error(n)}))}()}})),e.abrupt("return",u.blob());case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){var n=e.id,t=e.size,a=e.onComplete,c=Object(o.useState)(),i=Object(u.a)(c,2),s=i[0],p=i[1];return r.a.createElement("p",null,r.a.createElement("button",{onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.t1=n.toString(),e.next=4,h(t,p);case 4:return e.t2=e.sent,e.next=7,e.t0.set.call(e.t0,e.t1,e.t2);case 7:a(),p(null);case 9:case"end":return e.stop()}}),e)})))},"Download ",t," MB"),s&&r.a.createElement("progress",{max:s.total,value:s.loaded},s.loaded,"%"))}var w=function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],c=function(){f.keys().then(a)};return Object(o.useEffect)(c,[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"IndexedDB Memory Usage Test"),t.map((function(e){return r.a.createElement("div",{key:e},"Blob ",e,r.a.createElement("button",{onClick:function(){return f.del(e).then(c)}},"Remove"))})),r.a.createElement(b,{id:Math.max.apply(Math,[0].concat(Object(i.a)(t)))+1,size:500,onComplete:c}))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/indexedblob",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/indexedblob","/service-worker.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(n,e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.b121fa7a.chunk.js.map