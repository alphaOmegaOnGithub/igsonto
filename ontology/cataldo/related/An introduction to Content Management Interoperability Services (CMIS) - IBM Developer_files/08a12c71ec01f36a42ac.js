/*! For license information please see 08a12c71ec01f36a42ac.js.LICENSE.txt */
"use strict";(self.webpackChunkfe_wap=self.webpackChunkfe_wap||[]).push([[303],{2599:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}var r;n.d(t,{J0:()=>o,RQ:()=>j,WK:()=>B,X3:()=>T,Zn:()=>U,Zq:()=>C,aU:()=>r,cP:()=>p,fp:()=>m,lX:()=>l,pC:()=>O}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(r||(r={}));const i="popstate";function l(e){return void 0===e&&(e={}),d((function(e,t){let{pathname:n,search:a,hash:r}=e.location;return c("",{pathname:n,search:a,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:u(t)}),null,e)}function o(e,t){if(!1===e||null==e)throw new Error(t)}function s(e,t){if(!e)try{throw new Error(t)}catch(e){}}function h(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,n,r){return void 0===n&&(n=null),a({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?p(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function u(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),a&&"#"!==a&&(t+="#"===a.charAt(0)?a:"#"+a),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function d(e,t,n,l){void 0===l&&(l={});let{window:s=document.defaultView,v5Compat:p=!1}=l,d=s.history,f=r.Pop,m=null,g=v();function v(){return(d.state||{idx:null}).idx}function y(){f=r.Pop;let e=v(),t=null==e?null:e-g;g=e,m&&m({action:f,location:b.location,delta:t})}function w(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"==typeof e?e:u(e);return o(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,d.replaceState(a({},d.state,{idx:g}),""));let b={get action(){return f},get location(){return e(s,d)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(i,y),m=e,()=>{s.removeEventListener(i,y),m=null}},createHref:e=>t(s,e),createURL:w,encodeLocation(e){let t=w(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f=r.Push;let a=c(b.location,e,t);n&&n(a,e),g=v()+1;let i=h(a,g),l=b.createHref(a);try{d.pushState(i,"",l)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;s.location.assign(l)}p&&m&&m({action:f,location:b.location,delta:1})},replace:function(e,t){f=r.Replace;let a=c(b.location,e,t);n&&n(a,e),g=v();let i=h(a,g),l=b.createHref(a);d.replaceState(i,"",l),p&&m&&m({action:f,location:b.location,delta:0})},go:e=>d.go(e)};return b}var f;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(f||(f={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,n){void 0===n&&(n="/");let a=U(("string"==typeof t?p(t):t).pathname||"/",n);if(null==a)return null;let r=g(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(r);let i=null;for(let e=0;null==i&&e<r.length;++e)i=R(r[e],E(a));return i}function g(e,t,n,a){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===a&&(a="");let r=(e,r,i)=>{let l={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};l.relativePath.startsWith("/")&&(o(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path "'+a+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(a.length));let s=j([a,l.relativePath]),h=n.concat(l);e.children&&e.children.length>0&&(o(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),g(e.children,t,h,s)),(null!=e.path||e.index)&&t.push({path:s,score:$(s,e.index),routesMeta:h})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of v(e.path))r(e,t,n);else r(e,t)})),t}function v(e){let t=e.split("/");if(0===t.length)return[];let[n,...a]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===a.length)return r?[i,""]:[i];let l=v(a.join("/")),o=[];return o.push(...l.map((e=>""===e?i:[i,e].join("/")))),r&&o.push(...l),o.map((t=>e.startsWith("/")&&""===t?"/":t))}const y=/^:\w+$/,w=3,b=2,P=1,S=10,x=-2,W=e=>"*"===e;function $(e,t){let n=e.split("/"),a=n.length;return n.some(W)&&(a+=x),t&&(a+=b),n.filter((e=>!W(e))).reduce(((e,t)=>e+(y.test(t)?w:""===t?P:S)),a)}function R(e,t){let{routesMeta:n}=e,a={},r="/",i=[];for(let e=0;e<n.length;++e){let l=n[e],o=e===n.length-1,s="/"===r?t:t.slice(r.length)||"/",h=L({path:l.relativePath,caseSensitive:l.caseSensitive,end:o},s);if(!h)return null;Object.assign(a,h.params);let c=l.route;i.push({params:a,pathname:j([r,h.pathname]),pathnameBase:A(j([r,h.pathnameBase])),route:c}),"/"!==h.pathnameBase&&(r=j([r,h.pathnameBase]))}return i}function L(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(a.push(t),"/([^\\/]+)")));e.endsWith("*")?(a.push("*"),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":""!==e&&"/"!==e&&(r+="(?:(?=\\/|$))");let i=new RegExp(r,t?void 0:"i");return[i,a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:a.reduce(((e,t,n)=>{if("*"===t){let e=o[n]||"";l=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return s(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(o[n]||"",t),e}),{}),pathname:i,pathnameBase:l,pattern:e}}function E(e){try{return decodeURI(e)}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function U(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&"/"!==a?null:e.slice(n)||"/"}function k(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function C(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function O(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=p(e):(i=a({},e),o(!i.pathname||!i.pathname.includes("?"),k("?","pathname","search",i)),o(!i.pathname||!i.pathname.includes("#"),k("#","pathname","hash",i)),o(!i.search||!i.search.includes("#"),k("#","search","hash",i)));let l,s=""===e||""===i.pathname,h=s?"/":i.pathname;if(r||null==h)l=n;else{let e=t.length-1;if(h.startsWith("..")){let t=h.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}l=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:a="",hash:r=""}="string"==typeof e?p(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:I(a),hash:M(r)}}(i,l),u=h&&"/"!==h&&h.endsWith("/"),d=(s||"."===h)&&n.endsWith("/");return c.pathname.endsWith("/")||!u&&!d||(c.pathname+="/"),c}const j=e=>e.join("/").replace(/\/\/+/g,"/"),A=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class T extends Error{}function B(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const H=["post","put","patch","delete"],D=(new Set(H),["get",...H]);new Set(D),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")}}]);