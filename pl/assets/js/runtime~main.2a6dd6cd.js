!function(){"use strict";var e,c,f,a,t,r={},n={};function d(e){var c=n[e];if(void 0!==c)return c.exports;var f=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,d),f.loaded=!0,f.exports}d.m=r,d.c=n,e=[],d.O=function(c,f,a,t){if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],a=e[i][1],t=e[i][2];for(var n=!0,b=0;b<f.length;b++)(!1&t||r>=t)&&Object.keys(d.O).every((function(e){return d.O[e](f[b])}))?f.splice(b--,1):(n=!1,t<r&&(r=t));if(n){e.splice(i--,1);var o=a();void 0!==o&&(c=o)}}return c}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[f,a,t]},d.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(c,{a:c}),c},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var t=Object.create(null);d.r(t);var r={};c=c||[null,f({}),f([]),f(f)];for(var n=2&a&&e;"object"==typeof n&&!~c.indexOf(n);n=f(n))Object.getOwnPropertyNames(n).forEach((function(c){r[c]=function(){return e[c]}}));return r.default=function(){return e},d.d(t,r),t},d.d=function(e,c){for(var f in c)d.o(c,f)&&!d.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:c[f]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce((function(c,f){return d.f[f](e,c),c}),[]))},d.u=function(e){return"assets/js/"+({20:"f237b5dc",53:"935f2afb",673:"c417c803",876:"4e7ea8c0",878:"81510f0e",879:"a93f97d0",1242:"3d6590ee",1293:"cf968e94",1361:"a694fc9f",1383:"21c007fe",1429:"cf49068a",1500:"090f8ee1",1525:"f8f62204",1616:"7e7a7d7d",1682:"9369e631",1839:"2ffa923f",1941:"3ae52d74",2076:"585d966d",2132:"5a7c9710",2178:"cb1d71a0",2535:"814f3328",2539:"ca574298",3089:"a6aa9e1f",3245:"a25bf6eb",3250:"3f776645",3275:"b827c012",3469:"8b9ef0af",3608:"9e4087bc",3751:"3720c009",3776:"071dac50",3816:"a1b9b0d0",3868:"178d592c",3896:"757890b8",4013:"01a85c17",4121:"55960ee5",4195:"c4f5d8e4",4231:"c051ddcc",4666:"0f6e7eab",4770:"5050f5de",5346:"5484080c",5396:"6b18a495",5491:"0c7b4f9d",5797:"4e895938",6056:"05d3b79a",6103:"ccc49370",6117:"91e7d6ee",6373:"58a419e1",6596:"0c9c864f",6716:"bfebab25",6841:"13d0a7de",7013:"b9806af8",7038:"4e6d2299",7083:"ec20ce42",7233:"a34bf942",7317:"9cad2ab3",7355:"8dffbcce",7377:"1197c81d",7533:"1ca6ba7e",7760:"8f5dcb2a",7918:"17896441",7962:"b55c9503",8059:"bc9e0a4b",8153:"cf6ae710",8186:"adfb7c0f",8388:"548347c6",8610:"6875c492",8868:"7a925c02",8945:"e2273000",8982:"74a22658",9060:"0c097758",9227:"472926ba",9344:"cad1a164",9514:"1be78505",9566:"2f5e4031",9589:"907f22c2",9855:"c505868e"}[e]||e)+"."+{20:"dcfeea59",53:"92a1df76",673:"f761a6d3",876:"33258962",878:"25a28738",879:"c8354550",1242:"89f066de",1293:"43806d50",1361:"7d141047",1383:"4c056eea",1429:"7b64acc5",1500:"7a721d27",1525:"fbdf1aa8",1616:"6aab94df",1682:"dc5da482",1839:"6a9c8da7",1941:"a6bc6006",2076:"b3f70fd5",2132:"e5188f7e",2178:"b6693068",2535:"f801704a",2539:"4b30ccdd",3089:"5dc77030",3245:"3a3e65a3",3250:"27759741",3275:"0dd409c7",3469:"2504d5f1",3516:"b0f6626d",3608:"c73d54bd",3751:"8ea86c21",3776:"d4c72daf",3816:"b78945a7",3868:"b2555624",3896:"d40bf2b8",4013:"a99215e0",4121:"37d4fb89",4195:"4af2d051",4231:"602e91cb",4300:"6bd87328",4608:"33e22c44",4666:"1cba306d",4770:"c07eb2fe",5256:"87bf155c",5346:"06a49d4c",5396:"bba5e8c6",5491:"eef02ed8",5797:"ae62cd1e",6056:"e29bd1ee",6103:"14d6da7d",6117:"9bac0545",6159:"c14a07e3",6373:"46118023",6596:"3eade4c7",6716:"32d64da5",6841:"d02ddbfd",6945:"7abda646",7013:"9eeeda2d",7038:"163fb8e6",7083:"5897f85f",7233:"f7281041",7317:"73f703f0",7355:"710d1d99",7377:"f84afc80",7533:"6551eb77",7760:"42c9ff19",7918:"328a3f7d",7962:"425edb95",8059:"e87467ab",8153:"23ea5f34",8186:"61980a63",8388:"84960139",8610:"f73e15ae",8868:"401d2e50",8945:"dd24e620",8982:"81c95b08",9060:"89419a5b",9227:"ba06c2cd",9344:"dfaea089",9514:"cd88d2a4",9566:"9c06923c",9589:"f9c7698e",9727:"d30c292a",9855:"29929c88"}[e]+".js"},d.miniCssF=function(e){return"assets/css/styles.25cf9600.css"},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a={},t="Archcraft-Wiki:",d.l=function(e,c,f,r){if(a[e])a[e].push(c);else{var n,b;if(void 0!==f)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var u=o[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+f){n=u;break}}n||(b=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,d.nc&&n.setAttribute("nonce",d.nc),n.setAttribute("data-webpack",t+f),n.src=e),a[e]=[c];var l=function(c,f){n.onerror=n.onload=null,clearTimeout(s);var t=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),t&&t.forEach((function(e){return e(f)})),c)return c(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),b&&document.head.appendChild(n)}},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/pl/",d.gca=function(e){return e={17896441:"7918",f237b5dc:"20","935f2afb":"53",c417c803:"673","4e7ea8c0":"876","81510f0e":"878",a93f97d0:"879","3d6590ee":"1242",cf968e94:"1293",a694fc9f:"1361","21c007fe":"1383",cf49068a:"1429","090f8ee1":"1500",f8f62204:"1525","7e7a7d7d":"1616","9369e631":"1682","2ffa923f":"1839","3ae52d74":"1941","585d966d":"2076","5a7c9710":"2132",cb1d71a0:"2178","814f3328":"2535",ca574298:"2539",a6aa9e1f:"3089",a25bf6eb:"3245","3f776645":"3250",b827c012:"3275","8b9ef0af":"3469","9e4087bc":"3608","3720c009":"3751","071dac50":"3776",a1b9b0d0:"3816","178d592c":"3868","757890b8":"3896","01a85c17":"4013","55960ee5":"4121",c4f5d8e4:"4195",c051ddcc:"4231","0f6e7eab":"4666","5050f5de":"4770","5484080c":"5346","6b18a495":"5396","0c7b4f9d":"5491","4e895938":"5797","05d3b79a":"6056",ccc49370:"6103","91e7d6ee":"6117","58a419e1":"6373","0c9c864f":"6596",bfebab25:"6716","13d0a7de":"6841",b9806af8:"7013","4e6d2299":"7038",ec20ce42:"7083",a34bf942:"7233","9cad2ab3":"7317","8dffbcce":"7355","1197c81d":"7377","1ca6ba7e":"7533","8f5dcb2a":"7760",b55c9503:"7962",bc9e0a4b:"8059",cf6ae710:"8153",adfb7c0f:"8186","548347c6":"8388","6875c492":"8610","7a925c02":"8868",e2273000:"8945","74a22658":"8982","0c097758":"9060","472926ba":"9227",cad1a164:"9344","1be78505":"9514","2f5e4031":"9566","907f22c2":"9589",c505868e:"9855"}[e]||e,d.p+d.u(e)},function(){var e={1303:0,532:0};d.f.j=function(c,f){var a=d.o(e,c)?e[c]:void 0;if(0!==a)if(a)f.push(a[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var t=new Promise((function(f,t){a=e[c]=[f,t]}));f.push(a[2]=t);var r=d.p+d.u(c),n=new Error;d.l(r,(function(f){if(d.o(e,c)&&(0!==(a=e[c])&&(e[c]=void 0),a)){var t=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;n.message="Loading chunk "+c+" failed.\n("+t+": "+r+")",n.name="ChunkLoadError",n.type=t,n.request=r,a[1](n)}}),"chunk-"+c,c)}},d.O.j=function(c){return 0===e[c]};var c=function(c,f){var a,t,r=f[0],n=f[1],b=f[2],o=0;if(r.some((function(c){return 0!==e[c]}))){for(a in n)d.o(n,a)&&(d.m[a]=n[a]);if(b)var i=b(d)}for(c&&c(f);o<r.length;o++)t=r[o],d.o(e,t)&&e[t]&&e[t][0](),e[r[o]]=0;return d.O(i)},f=self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[];f.forEach(c.bind(null,0)),f.push=c.bind(null,f.push.bind(f))}()}();