!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BetterFlorr=t():e.BetterFlorr=t()}(this,(()=>(()=>{"use strict";var e,t,o,r,n={486:(e,t,o)=>{o.a(e,(async(e,r)=>{try{o.r(t),o.d(t,{_initialize:()=>s,default:()=>a,main:()=>i,memory:()=>l});var n=o(525);const e=(await(0,n.F)({})).exports,a=new Proxy(e,{_shownError:!1,get(e,t){return this._shownError||(this._shownError=!0,"undefined"!=typeof console&&console.error("Do not use default import. Use corresponding named import instead.")),e[t]}}),{main:i,_initialize:s,memory:l}=e;r()}catch(e){r(e)}}),1)},525:(e,t,o)=>{async function r(e={},t=!0){new WeakMap;const o={"kotlin.captureStackTrace":()=>(new Error).stack,"kotlin.wasm.internal.throwJsError":(e,t,o)=>{const r=new Error;throw r.message=e,r.name=t,r.stack=o,r},"kotlin.wasm.internal.importStringFromWasm":(e,t,o)=>{const r=new Uint16Array(a.memory.buffer,e,t),n=String.fromCharCode.apply(null,r);return null==o?n:o+n},"kotlin.wasm.internal.getJsEmptyString":()=>"","kotlin.wasm.internal.isNullish":e=>null==e,"kotlin.io.printlnImpl":e=>console.log(e),"kotlin.random.initialSeed":()=>Math.random()*Math.pow(2,32)|0};let r,n,a;const i="undefined"!=typeof process&&"node"===process.release.name,s=!i&&"undefined"!=typeof Deno,l=!(s||i||"undefined"==typeof d8&&"undefined"==typeof inIon&&"undefined"==typeof jscOptions),p=!i&&!s&&!l&&"undefined"!=typeof window;if(!(i||s||l||p))throw"Supported JS engine not detected";const c="./BetterFlorr-wasm-js.wasm",d={js_code:o};try{if(i){const e=await import("node:module"),t={};n=e.default.createRequire(t.url);const o=n("fs"),a=n("url"),i={}.resolve(c),s=o.readFileSync(a.fileURLToPath(i)),l=new WebAssembly.Module(s);r=new WebAssembly.Instance(l,d)}if(s){const e=await import("https://deno.land/std/path/mod.ts"),t=Deno.readFileSync(e.fromFileUrl({}.resolve(c))),o=await WebAssembly.compile(t);r=await WebAssembly.instantiate(o,d)}if(l){const e=read(c,"binary"),t=new WebAssembly.Module(e);r=new WebAssembly.Instance(t,d)}p&&(r=(await WebAssembly.instantiateStreaming(fetch(c),d)).instance)}catch(e){if(e instanceof WebAssembly.CompileError){let e="Please make sure that your runtime environment supports the latest version of Wasm GC and Exception-Handling proposals.\nFor more information, see https://kotl.in/wasm-help\n";if(p)console.error(e);else{const t="\n"+e;"undefined"!=typeof console&&void 0!==console.log?console.log(t):print(t)}}throw e}return a=r.exports,t&&a._initialize(),{instance:r,exports:a}}o.d(t,{F:()=>r})}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return n[e](o,o.exports,i),o.exports}return e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(n,a,i)=>{var s;i&&((s=[]).d=-1);var l,p,c,d=new Set,m=n.exports,f=new Promise(((e,t)=>{c=t,p=e}));f[t]=m,f[e]=e=>(s&&e(s),d.forEach(e),f.catch((e=>{}))),n.exports=f,a((n=>{var a;l=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var a=[];a.d=0,n.then((e=>{i[t]=e,r(a)}),(e=>{i[o]=e,r(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[t]=n,s})))(n);var i=()=>l.map((e=>{if(e[o])throw e[o];return e[t]})),p=new Promise((t=>{(a=()=>t(i)).r=0;var o=e=>e!==s&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));l.map((t=>t[e](o)))}));return a.r?p:i()}),(e=>(e?c(f[o]=e):p(m),r(s)))),s&&s.d<0&&(s.d=0)},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i(486)})()));
//# sourceMappingURL=BetterFlorr.js.map