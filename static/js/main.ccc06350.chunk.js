(this["webpackJsonpsubstrate-front-end-template"]=this["webpackJsonpsubstrate-front-end-template"]||[]).push([[0],{1167:function(e){e.exports=JSON.parse('{"PROVIDER_SOCKET":"wss://dev-node.substrate.dev"}')},1173:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(134),l=n.n(c),u=n(1193),o=n(1185),i=n(1194),s=n(1189),E=n(1186),p=(n(541),n(69)),m=n(17),f=n.n(m),O=n(34),d=n(35),b=n(331),v=n.n(b),C=n(517),S=n.n(C),N=n(333),R=n(200),y=n(270),j=n.n(y),_=n(521),h=n(1167),T=["REACT_APP_PROVIDER_SOCKET","REACT_APP_DEVELOPMENT_KEYRING"].reduce((function(e,t){return void 0!==Object({NODE_ENV:"production",PUBLIC_URL:"/Front-end-challenge",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})[t]&&(e[t.slice(10)]=Object({NODE_ENV:"production",PUBLIC_URL:"/Front-end-challenge",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})[t]),e}),{}),g=Object(d.a)(Object(d.a)(Object(d.a)({},_),h),T),w=S.a.parse(window.location.search).rpc||g.PROVIDER_SOCKET;console.log("Connected socket: ".concat(w));var k={socket:w,jsonrpc:Object(d.a)(Object(d.a)({},v.a),g.RPC),types:g.CUSTOM_TYPES,keyring:null,keyringState:null,api:null,apiError:null,apiState:null},P=function(e,t){switch(t.type){case"CONNECT_INIT":return Object(d.a)(Object(d.a)({},e),{},{apiState:"CONNECT_INIT"});case"CONNECT":return Object(d.a)(Object(d.a)({},e),{},{api:t.payload,apiState:"CONNECTING"});case"CONNECT_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{apiState:"READY"});case"CONNECT_ERROR":return Object(d.a)(Object(d.a)({},e),{},{apiState:"ERROR",apiError:t.payload});case"LOAD_KEYRING":return Object(d.a)(Object(d.a)({},e),{},{keyringState:"LOADING"});case"SET_KEYRING":return Object(d.a)(Object(d.a)({},e),{},{keyring:t.payload,keyringState:"READY"});case"KEYRING_ERROR":return Object(d.a)(Object(d.a)({},e),{},{keyring:null,keyringState:"ERROR"});default:throw new Error("Unknown type: ".concat(t.type))}},D=!1,I=r.a.createContext(),A=function(e){var t=Object(d.a)({},k);["socket","types"].forEach((function(n){t[n]="undefined"===typeof e[n]?t[n]:e[n]}));var n=Object(a.useReducer)(P,t),c=Object(p.a)(n,2),l=c[0],u=c[1];return function(e,t){var n=e.apiState,a=e.socket,r=e.jsonrpc,c=e.types;if(!n){t({type:"CONNECT_INIT"});var l=new N.WsProvider(a),u=new N.ApiPromise({provider:l,types:c,rpc:r});u.on("connected",(function(){t({type:"CONNECT",payload:u}),u.isReady.then((function(e){return t({type:"CONNECT_SUCCESS"})}))})),u.on("ready",(function(){return t({type:"CONNECT_SUCCESS"})})),u.on("error",(function(e){return t({type:"CONNECT_ERROR",payload:e})}))}}(l,u),function(e,t){var n=function(){var e=Object(O.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOAD_KEYRING"}),e.prev=1,e.next=4,Object(R.web3Enable)(g.APP_NAME);case 4:return e.next=6,Object(R.web3Accounts)();case 6:n=(n=e.sent).map((function(e){var t=e.address,n=e.meta;return{address:t,meta:Object(d.a)(Object(d.a)({},n),{},{name:"".concat(n.name," (").concat(n.source,")")})}})),j.a.loadAll({isDevelopment:g.DEVELOPMENT_KEYRING},n),t({type:"SET_KEYRING",payload:j.a}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0),t({type:"KEYRING_ERROR"});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();if(!e.keyringState){if(D)return t({type:"SET_KEYRING",payload:j.a});D=!0,n()}}(l,u),r.a.createElement(I.Provider,{value:l},e.children)},x=function(){return Object(d.a)({},Object(a.useContext)(I))},K=(n(93),n(1190));function Y(e){var t=x(),a=t.api,r=t.apiState,c=t.keyring,l=t.keyringState;return"READY"===r&&(window.api=a),"READY"===l&&(window.keyring=c),window.util=n(3),window.utilCrypto=n(42),null}var M=n(1188),G=n(1192),L=n(176);function V(e){var t=x().api,n=e.finalized,c=Object(a.useState)(0),l=Object(p.a)(c,2),u=l[0],o=l[1],s=Object(a.useState)(0),E=Object(p.a)(s,2),m=E[0],f=E[1];console.log(t.query);var O=n?t.derive.chain.bestNumberFinalized:t.derive.chain.bestNumber;Object(a.useEffect)((function(){var e=null;return O((function(e){o(e.toNumber()),f(0)})).then((function(t){e=t})).catch(console.error),function(){return e&&e()}}),[O]);var d=function(){f((function(e){return e+1}))};return Object(a.useEffect)((function(){var e=setInterval(d,1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement(i.a.Column,null,r.a.createElement(M.a,null,r.a.createElement(M.a.Content,{textAlign:"center"},r.a.createElement(G.a,{label:(n?"Finalized":"Current")+" Block",value:u})),r.a.createElement(M.a.Content,{extra:!0},r.a.createElement(L.a,{name:"time"})," ",m)))}function U(e){var t=x().api;return t.derive&&t.derive.chain&&t.derive.chain.bestNumber&&t.derive.chain.bestNumberFinalized?r.a.createElement(V,e):null}var z=n(1187);function H(e){var t=x().api,n=Object(a.useState)({data:null,version:null}),c=Object(p.a)(n,2),l=c[0],u=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(O.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.rpc.state.getMetadata();case 3:n=e.sent,u({data:n,version:n.version}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t.rpc.state]),r.a.createElement(i.a.Column,null,r.a.createElement(M.a,null,r.a.createElement(M.a.Content,null,r.a.createElement(M.a.Header,null,"Metadata"),r.a.createElement(M.a.Meta,null,r.a.createElement("span",null,"v",l.version))),r.a.createElement(M.a.Content,{extra:!0},r.a.createElement(z.a,{trigger:r.a.createElement(K.a,null,"Show Metadata")},r.a.createElement(z.a.Header,null,"Runtime Metadata"),r.a.createElement(z.a.Content,{scrolling:!0},r.a.createElement(z.a.Description,null,r.a.createElement("pre",null,r.a.createElement("code",null,JSON.stringify(l.data,null,2)))))))))}function W(e){var t=x().api;return t.rpc&&t.rpc.state&&t.rpc.state.getMetadata?r.a.createElement(H,e):null}function F(e){var t=x().api,n=Object(a.useState)({}),c=Object(p.a)(n,2),l=c[0],u=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(O.a)(f.a.mark((function e(){var n,a,r,c,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([t.rpc.system.chain(),t.rpc.system.name(),t.rpc.system.version()]);case 3:n=e.sent,a=Object(p.a)(n,3),r=a[0],c=a[1],l=a[2],u({chain:r,nodeName:c,nodeVersion:l}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[t.rpc.system]),r.a.createElement(i.a.Column,null,r.a.createElement(M.a,null,r.a.createElement(M.a.Content,null,r.a.createElement(M.a.Header,null,l.nodeName),r.a.createElement(M.a.Meta,null,r.a.createElement("span",null,l.chain)),r.a.createElement(M.a.Description,null,"Built using the"," ",r.a.createElement("a",{href:"https://github.com/substrate-developer-hub/substrate-front-end-template"},"Substrate Front End Template"))),r.a.createElement(M.a.Content,{extra:!0},r.a.createElement(L.a,{name:"setting"}),"v",l.nodeVersion)))}function B(e){var t=x().api;return t.rpc&&t.rpc.system&&t.rpc.system.chain&&t.rpc.system.name&&t.rpc.system.version?r.a.createElement(F,e):null}function J(){var e,t=x(),n=t.apiState,c=t.keyringState,l=t.apiError,p=function(e){return r.a.createElement(u.a,{active:!0},r.a.createElement(o.a,{size:"small"},e))};if("ERROR"===n)return e=l,r.a.createElement(i.a,{centered:!0,columns:2,padded:!0},r.a.createElement(i.a.Column,null,r.a.createElement(s.a,{negative:!0,compact:!0,floating:!0,header:"Error Connecting to Substrate",content:"".concat(e)})));if("READY"!==n)return p("Connecting to Substrate");if("READY"!==c)return p("Loading accounts (please review any extension's authorization)");var m=Object(a.createRef)();return r.a.createElement("div",{ref:m},r.a.createElement(i.a,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(E.a,null,r.a.createElement(i.a,{stackable:!0,columns:"equal"},r.a.createElement(i.a.Row,{stretched:!0},r.a.createElement(B,null),r.a.createElement(W,null),r.a.createElement(U,null),r.a.createElement(U,{finalized:!0})))),r.a.createElement(Y,null))}function q(){return r.a.createElement(A,null,r.a.createElement(J,null))}l.a.render(r.a.createElement(q,null),document.getElementById("root"))},521:function(e){e.exports=JSON.parse('{"APP_NAME":"substrate-front-end-tutorial","DEVELOPMENT_KEYRING":true,"RPC":{}}')},536:function(e,t,n){e.exports=n(1173)},609:function(e,t){},661:function(e,t){},663:function(e,t){},673:function(e,t){},675:function(e,t){},701:function(e,t){},703:function(e,t){},704:function(e,t){},709:function(e,t){},711:function(e,t){},718:function(e,t){},720:function(e,t){},739:function(e,t){},751:function(e,t){},754:function(e,t){},774:function(e,t){}},[[536,1,2]]]);
//# sourceMappingURL=main.ccc06350.chunk.js.map