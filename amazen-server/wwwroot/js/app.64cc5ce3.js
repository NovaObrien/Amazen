(function(e){function t(t){for(var c,o,r=t[0],s=t[1],d=t[2],i=0,u=[];i<r.length;i++)o=r[i],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);p&&p(t);while(u.length)u.shift()();return l.push.apply(l,d||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],c=!0,o=1;o<a.length;o++){var r=a[o];0!==n[r]&&(c=!1)}c&&(l.splice(t--,1),e=s(s.s=a[0]))}return e}var c={},o={app:0},n={app:0},l=[];function r(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0badf0ae":"e9a4a416","chunk-0dc7c982":"45a36a1f","chunk-2d0ac3ff":"b7b95895","chunk-4ea88e54":"ee0cc035","chunk-61522f5a":"3436ef09"}[e]+".js"}function s(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-0badf0ae":1,"chunk-0dc7c982":1,"chunk-4ea88e54":1,"chunk-61522f5a":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var c="css/"+({}[e]||e)+"."+{"chunk-0badf0ae":"fa5c2e88","chunk-0dc7c982":"0518575a","chunk-2d0ac3ff":"31d6cfe0","chunk-4ea88e54":"4d1188b5","chunk-61522f5a":"3f544562"}[e]+".css",n=s.p+c,l=document.getElementsByTagName("link"),r=0;r<l.length;r++){var d=l[r],i=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(i===c||i===n))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){d=u[r],i=d.getAttribute("data-href");if(i===c||i===n)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var c=t&&t.target&&t.target.src||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=c,delete o[e],p.parentNode.removeChild(p),a(l)},p.href=n;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){o[e]=0})));var c=n[e];if(0!==c)if(c)t.push(c[2]);else{var l=new Promise((function(t,a){c=n[e]=[t,a]}));t.push(c[2]=l);var d,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=r(e);var u=new Error;d=function(t){i.onerror=i.onload=null,clearTimeout(p);var a=n[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",u.name="ChunkLoadError",u.type=c,u.request=o,a[1](u)}n[e]=void 0}};var p=setTimeout((function(){d({type:"timeout",target:i})}),12e4);i.onerror=i.onload=d,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(a,c,function(t){return e[t]}.bind(null,c));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var p=i;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"006f":function(e,t,a){},"02fb":function(e,t,a){"use strict";a("7a6d")},"079d":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("8a4e"),o=a("2b20"),n=a("83fc");class l{async add(e,t){try{await o["a"].post("api/vaultKeep/"+e,t)}catch(a){c["a"].error(a)}}async getByVaultId(e){try{const t=await o["a"].get("api/vaultKeep/"+e);n["a"].keeps=t.data}catch(t){c["a"].error(t)}}async deleteVaultKeep(e){try{await o["a"].delete("api/vaultKeep/"+e.id,e);const t=n["a"].keeps.findIndex(t=>t.id===e.id);n["a"].keeps.splice(t,1)}catch(t){c["a"].error(t)}}}const r=new l},"0e95":function(e,t,a){},"158d":function(e,t,a){},"255a":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=Object(c["I"])("data-v-72b1dad0");Object(c["t"])("data-v-72b1dad0");const n={class:"keep-component"},l={class:"text-secondary",id:"title"},r={class:"row",id:"profile-img-expanded"},s={class:"ml-3 mt-2",id:"email"},d={class:"modal-dialog modal-xl",id:"profile"},i={class:"modal-content"},u={class:"modal-body bg-secondary"},p={class:"container-fluid"},b={class:"row"},O={class:"col-5"},g={class:"col-7"},f=Object(c["g"])("div",{class:"row d-flex justify-content-end mr-1"},[Object(c["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",id:"keepModalClose"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),j={class:"row d-flex justify-content-center"},m={class:"mx-1"},v={class:"row d-flex justify-content-center"},h={class:"row d-flex justify-content-center"},k={class:"row",id:"modal-info"},y={key:0,class:"dropdown"},w=Object(c["g"])("h5",{class:"rounded add-vault-btn"}," ADD TO VAULT ",-1);Object(c["r"])();const x=o((function(e,t,a,o,x,C){const P=Object(c["x"])("add-to-keep-component");return Object(c["q"])(),Object(c["e"])("div",n,[Object(c["g"])("div",{class:"grid-item container-fluid rounded-lg px-3 pt-3","data-toggle":"modal","data-target":".bd-example-modal-xl"+o.keep.id,id:"keep-small",onClick:t[4]||(t[4]=e=>o.setCurrentKeep(o.keep))},[Object(c["g"])("img",{class:"rounded",src:o.keep.img,alt:"",id:"keep-img"},null,8,["src"]),Object(c["g"])("div",null,[Object(c["g"])("h4",l,Object(c["A"])(o.keep.name),1),Object(c["g"])("div",r,[Object(c["g"])("img",{src:o.keep.creator.picture,alt:"user photo",class:"rounded-circle mb-3 ml-3",height:"50",id:"profile-img",onMouseover:t[1]||(t[1]=e=>o.state.showEmail=!0),onMouseleave:t[2]||(t[2]=e=>o.state.showEmail=!1),onClick:t[3]||(t[3]=(...e)=>o.selectProfile(...e))},null,40,["src"]),Object(c["g"])("div",s,Object(c["A"])(o.keep.creator.email),1)])])],8,["data-target"]),Object(c["g"])("div",{class:"modal fade bd-example-modal-xl"+o.keep.id,tabindex:"-1",role:"dialog","aria-labelledby":"myExtraLargeModalLabel","aria-hidden":"true"},[Object(c["g"])("div",d,[Object(c["g"])("div",i,[Object(c["g"])("div",u,[Object(c["g"])("div",p,[Object(c["g"])("div",b,[Object(c["g"])("div",O,[Object(c["g"])("img",{class:"rounded",id:"modal-img",src:o.keep.img,alt:""},null,8,["src"])]),Object(c["g"])("div",g,[f,Object(c["g"])("div",j,[Object(c["g"])("p",m," Views: "+Object(c["A"])(o.keep.views),1),Object(c["g"])("p",null," Keeps: "+Object(c["A"])(o.keep.keepSaves),1)]),Object(c["g"])("div",v,[Object(c["g"])("h1",null,Object(c["A"])(o.keep.name),1)]),Object(c["g"])("div",h,[Object(c["g"])("p",null,Object(c["A"])(o.keep.description),1)]),Object(c["g"])("div",k,["/"!=e.$route.path?(Object(c["q"])(),Object(c["e"])("div",y,[Object(c["g"])("div",{class:"dropdown-toggle p-3 rounded large",onClick:t[6]||(t[6]=e=>o.state.dropOpen=!o.state.dropOpen)},[w,Object(c["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:o.state.dropOpen}],onClick:t[5]||(t[5]=e=>o.state.dropOpen=!1)},[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(o.vaults,e=>(Object(c["q"])(),Object(c["e"])(P,{key:e.id,"vault-prop":e},null,8,["vault-prop"]))),128))],2)])])):Object(c["f"])("",!0)])])])])])])])],2)])}));var C=a("83fc"),P=a("41cb"),V={name:"KeepComponent",props:{keepProp:{type:Object,default:()=>{alert("this data does not exist")}}},setup(e){const t=Object(c["u"])({showEmail:!1,dropOpen:!1});return{state:t,keep:Object(c["c"])(()=>e.keepProp),vaults:Object(c["c"])(()=>C["a"].vaults),selectProfile(){P["a"].push({name:"PublicProfile",params:{id:e.keepProp.creatorId}})},setCurrentKeep(e){C["a"].currentKeep=e}}},components:{}};a("410c");V.render=x,V.__scopeId="data-v-72b1dad0";t["default"]=V},"29be":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("83fc"),o=a("8a4e"),n=a("2b20");class l{async getMyVaults(){try{o["a"].log(c["a"].profile.id);const e=await n["a"].get(`profile/${c["a"].profile.id}/vault`);c["a"].vaults=e.data,o["a"].log(c["a"].vaults)}catch(e){o["a"].error("Get Failed",e)}}async getPublicVaults(e){try{o["a"].log(c["a"].profile.id);const t=await n["a"].get("profile/"+e+"/vault");c["a"].publicVaults=t.data,o["a"].log(c["a"].publicVaults)}catch(t){o["a"].error("Get Failed",t)}}async createVault(e){try{const t=await n["a"].post("api/vault",e);c["a"].vaults=[...c["a"].vaults,t.data]}catch(t){o["a"].log(t)}}async deleteVault(e){await n["a"].delete("api/vault/"+e.id,e);const t=c["a"].vaults.findIndex(t=>t.id===e.id);c["a"].vaults.splice(t,1)}}const r=new l},"2b20":function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r}));var c=a("bc3a"),o=a.n(c);const n=window.location.origin.includes("localhost")?"https://localhost:5001":"",l=o.a.create({baseURL:n,timeout:8e3}),r=function(e){l.defaults.headers.authorization=e}},"410c":function(e,t,a){"use strict";a("67b3")},"418b":function(e,t,a){"use strict";a("8e44")},"41cb":function(e,t,a){"use strict";var c=a("6c02"),o=a("8816"),n=a("83fc"),l=a("6c3f");function r(e){return()=>a("a2f9")(`./${e}.vue`)}const s=[{path:"/space",component:r("AuthGuard"),beforeEnter(e,t,a){Object(o["a"])(e,t,async()=>{n["a"].profile.id||await l["a"].getProfile(),a()})},children:[{path:"home",name:"Home",component:r("HomePage")},{path:"profile",name:"Profile",component:r("ProfilePage")}]},{path:"/publicProfile/:id",name:"PublicProfile",component:r("PublicProfilePage")},{path:"/vault/:id",name:"Vault",component:r("VaultPage")},{path:"/",name:"Welcome",component:r("WelcomePage")}],d=Object(c["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(c["b"])(),routes:s});t["a"]=d},"4e2d":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("83fc"),o=a("8a4e"),n=a("2b20");class l{async getProfileKeeps(e){try{const t=await n["a"].get("profile/"+e+"/keep");c["a"].keeps=t.data,o["a"].log(c["a"].keeps)}catch(t){o["a"].error("Get Failed",t)}}async getKeeps(){try{const e=await n["a"].get("api/keep");c["a"].keeps=e.data,o["a"].log(e.data)}catch(e){o["a"].error("Get Failed </3",e)}}async createKeep(e){try{const t=await n["a"].post("api/keep",e);c["a"].keeps=[...c["a"].keeps,t.data]}catch(t){o["a"].log(t)}}async deleteKeep(e){await n["a"].delete("api/keep/"+e.id,e);const t=c["a"].keeps.findIndex(t=>t.id===e.id);c["a"].keeps.splice(t,1)}}const r=new l},"56d7":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=Object(c["g"])("footer",null,null,-1);function n(e,t,a,n,l,r){const s=Object(c["x"])("Navbar"),d=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["g"])("header",null,[Object(c["g"])(s)]),Object(c["g"])("main",null,[Object(c["g"])(d,null,{default:Object(c["F"])(({Component:e})=>[Object(c["g"])(c["b"],{name:"route",mode:"out-in"},{default:Object(c["F"])(()=>[(Object(c["q"])(),Object(c["e"])(Object(c["y"])(e)))]),_:2},1024)]),_:1})]),o],64)}var l=a("83fc"),r={name:"App",setup(){return{appState:Object(c["c"])(()=>l["a"])}}};a("d48c");r.render=n;var s=r;function d(e){const t=a("ccc2");t.keys().forEach(a=>{const c=t(a),o=c.default||c,n=o.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(n,o)})}var i=a("41cb"),u=a("4989"),p=a.n(u),b=a("1157"),O=a.n(b),g=a("f0bd");const f=Object(c["d"])(s);d(f),f.use(i["a"],p.a,O.a,g["default"]).mount("#app")},5797:function(e,t,a){},"60b5":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=Object(c["I"])("data-v-760833f4");Object(c["t"])("data-v-760833f4");const n={class:"create-vault-modal"},l=Object(c["g"])("button",{type:"button",class:"btn btn-secondary font border-0","data-toggle":"modal","data-target":"#exampleModalCenter"},[Object(c["g"])("h1",null,"+")],-1),r={class:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},s={class:"modal-dialog modal-dialog-centered",role:"document"},d={class:"modal-content",id:"modal"},i=Object(c["g"])("div",{class:"modal-header"},[Object(c["g"])("p",{class:"modal-title text-dark",id:"exampleModalCenterTitle"}," New Vault "),Object(c["g"])("button",{type:"button",class:"close text-danger","data-dismiss":"modal","aria-label":"Close",id:"modalClose"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),u={class:"modal-body"},p={class:"card text-left border-0"},b={class:"card-body"},O=Object(c["g"])("h4",{class:"text-dark"}," Title ",-1),g={class:"form-check"},f={class:"form-check-label mt-5"},j=Object(c["g"])("h5",null,"Private?",-1),m=Object(c["g"])("h6",{id:"subnote"},"Private Vaults can only be seen by you",-1),v={class:"modal-footer"};Object(c["r"])();const h=o((function(e,t,a,o,h,k){return Object(c["q"])(),Object(c["e"])("div",n,[l,Object(c["g"])("div",r,[Object(c["g"])("div",s,[Object(c["g"])("div",d,[i,Object(c["g"])("div",u,[Object(c["g"])("div",p,[Object(c["g"])("div",b,[Object(c["g"])("form",{class:"form-group",action:"",onSubmit:t[3]||(t[3]=Object(c["H"])((...e)=>o.createVault(...e),["prevent"]))},[O,Object(c["G"])(Object(c["g"])("input",{class:"rounded",id:"title",type:"text",placeholder:"Title...","onUpdate:modelValue":t[1]||(t[1]=e=>o.state.newVault.title=e)},null,512),[[c["D"],o.state.newVault.title]]),Object(c["g"])("div",g,[Object(c["g"])("label",f,[Object(c["G"])(Object(c["g"])("input",{type:"checkbox",class:"form-check-input",name:"optradio","onUpdate:modelValue":t[2]||(t[2]=e=>o.state.newVault.isPrivate=e)},null,512),[[c["C"],o.state.newVault.isPrivate]]),j,m])])],32)])])]),Object(c["g"])("div",v,[Object(c["g"])("button",{type:"button",class:"btn btn-success",onClick:t[4]||(t[4]=t=>o.createVault(e.vault))}," Create ")])])])])])}));var k=a("29be"),y={name:"CreateVaultModal",setup(){const e=Object(c["u"])({newVault:{}});return{state:e,async createVault(t){document.getElementById("modalClose").click(),await k["a"].createVault(e.newVault),e.newVault={}}}},components:{}};a("caca");y.render=h,y.__scopeId="data-v-760833f4";t["default"]=y},"67b3":function(e,t,a){},"6c3f":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("83fc"),o=a("8a4e"),n=a("2b20");class l{async getProfile(){try{const e=await n["a"].get("/profile");c["a"].profile=e.data}catch(e){o["a"].error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async getPublicProfile(e){try{const t=await n["a"].get("/profile/"+e);c["a"].publicProfile=t.data}catch(t){o["a"].error(t)}}}const r=new l},"6cdf":function(e,t,a){"use strict";a("158d")},"78a7":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=Object(c["I"])("data-v-518e3d7e");Object(c["t"])("data-v-518e3d7e");const n={class:"home grid m-1"};Object(c["r"])();const l=o((function(e,t,a,o,l,r){const s=Object(c["x"])("keep-component");return Object(c["q"])(),Object(c["e"])("div",n,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(o.keeps,e=>(Object(c["q"])(),Object(c["e"])(s,{key:e.id,"keep-prop":e},null,8,["keep-prop"]))),128))])}));var r=a("255a"),s=a("4e2d"),d=a("83fc"),i=a("29be"),u={components:{KeepComponent:r["default"]},name:"Home",setup(){return Object(c["o"])(()=>{s["a"].getKeeps(),i["a"].getMyVaults()}),{keeps:Object(c["c"])(()=>d["a"].keeps)}}};a("f857");u.render=l,u.__scopeId="data-v-518e3d7e";t["default"]=u},"7a6d":function(e,t,a){},8157:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=Object(c["I"])("data-v-074cadf2");Object(c["t"])("data-v-074cadf2");const n={class:"search-bar-component"};Object(c["r"])();const l=o((function(e,t,a,o,l,r){return Object(c["q"])(),Object(c["e"])("div",n)}));var r={name:"SearchBarComponent",setup(){return{}},components:{}};r.render=l,r.__scopeId="data-v-074cadf2";t["default"]=r},"83fc":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a("7a23");const o=Object(c["u"])({user:{},profile:{},publicProfile:{},publicVaults:[],vaults:[],keeps:[],currentKeep:{}})},"8a4e":function(e,t,a){"use strict";function c(e,t){window.location.origin.includes("localhost")&&console[e](...t)}a.d(t,"a",(function(){return o}));const o={log(){c("log",arguments)},error(){c("error",arguments)},warn(){c("warn",arguments)},assert(){c("assert",arguments)},trace(){c("trace",arguments)}}},"8cf3":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=Object(c["I"])("data-v-f080fb38");Object(c["t"])("data-v-f080fb38");const n={class:"vault-keep-component"},l={class:"text-secondary",id:"title"},r={class:"row",id:"profile-img-expanded"},s={class:"ml-3 mt-2",id:"email"},d={class:"modal-dialog modal-xl",id:"profile"},i={class:"modal-content"},u={class:"modal-body bg-secondary"},p={class:"container-fluid"},b={class:"row"},O={class:"col-5"},g={class:"col-7"},f=Object(c["g"])("div",{class:"row d-flex justify-content-end mr-1"},[Object(c["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",id:"keepModalClose"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),j={class:"row d-flex justify-content-center"},m={class:"mx-1"},v={class:"row d-flex justify-content-center"},h={class:"row d-flex justify-content-center"},k={class:"row",id:"modal-info"},y={key:0,class:"dropdown"},w=Object(c["g"])("h5",{class:"rounded add-vault-btn"}," ADD TO VAULT ",-1);Object(c["r"])();const x=o((function(e,t,a,o,x,C){const P=Object(c["x"])("add-to-keep-component");return Object(c["q"])(),Object(c["e"])("div",n,[Object(c["g"])("div",{class:"grid-item container-fluid rounded-lg px-3 pt-3","data-toggle":"modal","data-target":".bd-example-modal-xl"+o.keep.id,id:"keep-small",onClick:t[4]||(t[4]=e=>o.setCurrentKeep(o.keep))},[Object(c["g"])("img",{class:"rounded",src:o.keep.img,alt:"",id:"keep-img"},null,8,["src"]),Object(c["g"])("div",null,[Object(c["g"])("h4",l,Object(c["A"])(o.keep.name),1),Object(c["g"])("div",r,[Object(c["g"])("img",{src:o.keep.creator.picture,alt:"user photo",class:"rounded-circle mb-3 ml-3",height:"50",id:"profile-img",onMouseover:t[1]||(t[1]=e=>o.state.showEmail=!0),onMouseleave:t[2]||(t[2]=e=>o.state.showEmail=!1),onClick:t[3]||(t[3]=(...e)=>o.selectProfile(...e))},null,40,["src"]),Object(c["g"])("div",s,Object(c["A"])(o.keep.creator.email),1)])])],8,["data-target"]),Object(c["g"])("div",{class:"modal fade bd-example-modal-xl"+o.keep.id,tabindex:"-1",role:"dialog","aria-labelledby":"myExtraLargeModalLabel","aria-hidden":"true"},[Object(c["g"])("div",d,[Object(c["g"])("div",i,[Object(c["g"])("div",u,[Object(c["g"])("div",p,[Object(c["g"])("div",b,[Object(c["g"])("div",O,[Object(c["g"])("img",{class:"rounded",id:"modal-img",src:o.keep.img,alt:""},null,8,["src"])]),Object(c["g"])("div",g,[f,Object(c["g"])("div",j,[Object(c["g"])("p",m," Views: "+Object(c["A"])(o.keep.views),1),Object(c["g"])("p",null," Keeps: "+Object(c["A"])(o.keep.keepSaves),1)]),Object(c["g"])("div",v,[Object(c["g"])("h1",null,Object(c["A"])(o.keep.name),1)]),Object(c["g"])("div",h,[Object(c["g"])("p",null,Object(c["A"])(o.keep.description),1)]),Object(c["g"])("div",k,["/"!=e.$route.path?(Object(c["q"])(),Object(c["e"])("div",y,[Object(c["g"])("div",{class:"dropdown-toggle p-3 rounded large",onClick:t[6]||(t[6]=e=>o.state.dropOpen=!o.state.dropOpen)},[w,Object(c["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:o.state.dropOpen}],onClick:t[5]||(t[5]=e=>o.state.dropOpen=!1)},[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(o.vaults,e=>(Object(c["q"])(),Object(c["e"])(P,{key:e.id,"vault-prop":e},null,8,["vault-prop"]))),128))],2)])])):Object(c["f"])("",!0),Object(c["g"])("button",{class:"btn btn-danger",onClick:t[7]||(t[7]=e=>o.removeVaultKeep(o.keep))}," Remove From Vault ")])])])])])])])],2)])}));var C=a("83fc"),P=a("41cb"),V=a("079d"),K={name:"VaultKeepComponent",props:{keepProp:{type:Object,default:()=>{alert("this data does not exist")}}},setup(e){const t=Object(c["u"])({showEmail:!1,dropOpen:!1});return{state:t,keep:Object(c["c"])(()=>e.keepProp),vaults:Object(c["c"])(()=>C["a"].vaults),selectProfile(){P["a"].push({name:"PublicProfile",params:{id:e.keepProp.creatorId}})},setCurrentKeep(e){C["a"].currentKeep=e},removeVaultKeep(e){window.confirm("Are you sure you want to delete this vault?")&&V["a"].deleteVaultKeep(e)}}},components:{}};a("02fb");K.render=x,K.__scopeId="data-v-f080fb38";t["default"]=K},"8e44":function(e,t,a){},"9d8d":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=Object(c["I"])("data-v-5acc36c6");Object(c["t"])("data-v-5acc36c6");const n={class:"navbar navbar-expand-lg navbar-dark"},l=Object(c["g"])("div",{class:"d-flex flex-column align-items-center"},[Object(c["g"])("p",{class:"px-1 rounded",id:"logo"}," K ")],-1),r={id:"navbarText"},s={class:"navbar-text"},d={key:1,class:"dropdown"},i=Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable"}," Profile ",-1),u={class:"mx-3"},p=Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable"}," Profile ",-1);Object(c["r"])();const b=o((function(e,t,a,b,O,g){const f=Object(c["x"])("router-link"),j=Object(c["x"])("search-bar-component");return Object(c["q"])(),Object(c["e"])("nav",n,[Object(c["g"])(f,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:o(()=>[l]),_:1}),Object(c["g"])(j,{class:"search-bar rounded mx-auto"}),Object(c["g"])("div",r,[Object(c["g"])("span",s,[b.user.isAuthenticated?(Object(c["q"])(),Object(c["e"])("div",d,[Object(c["g"])("div",{class:"dropdown-toggle p-3 rounded small",onClick:t[4]||(t[4]=e=>b.state.dropOpen=!b.state.dropOpen)},[Object(c["g"])("img",{src:b.user.picture,alt:"user photo",height:"40",class:"rounded-circle"},null,8,["src"]),Object(c["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:b.state.dropOpen}],onClick:t[3]||(t[3]=e=>b.state.dropOpen=!1)},[Object(c["g"])(f,{to:{name:"Profile"}},{default:o(()=>[i]),_:1}),Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[2]||(t[2]=(...e)=>b.logout(...e))}," logout ")],2)]),Object(c["g"])("div",{class:"dropdown-toggle p-3 rounded large",onClick:t[7]||(t[7]=e=>b.state.dropOpen=!b.state.dropOpen)},[Object(c["g"])("img",{src:b.user.picture,alt:"user photo",height:"40",class:"rounded-circle"},null,8,["src"]),Object(c["g"])("span",u,Object(c["A"])(b.user.name),1),Object(c["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:b.state.dropOpen}],onClick:t[6]||(t[6]=e=>b.state.dropOpen=!1)},[Object(c["g"])(f,{to:{name:"Profile"}},{default:o(()=>[p]),_:1}),Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[5]||(t[5]=(...e)=>b.logout(...e))}," logout ")],2)])])):(Object(c["q"])(),Object(c["e"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>b.login(...e))}," Login "))])])])}));var O=a("8816"),g=a("83fc");const f="dev-vuhpxhy3.us.auth0.com",j="1uGY2UTrJQGTl5tO2Lf1uxtVKCE8GGdf",m="http://keeprapi";var v=a("41cb"),h=a("2b20"),k=a("6c3f");const y=Object(O["b"])({domain:f,clientId:j,audience:m,onRedirectCallback:e=>{v["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});y.on(y.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(h["b"])(y.bearer),await k["a"].getProfile(),g["a"].user=y.user}));var w=a("78a7"),x={name:"Navbar",setup(){const e=Object(c["u"])({dropOpen:!1});return{state:e,user:Object(c["c"])(()=>g["a"].user),async login(){await y.loginWithPopup(),v["a"].push(w["default"])},async logout(){await y.logout({returnTo:window.location.origin})}}}};a("d629");x.render=b,x.__scopeId="data-v-5acc36c6";t["default"]=x},a2f9:function(e,t,a){var c={"./AuthGuard.vue":["1978","chunk-2d0ac3ff"],"./HomePage.vue":["78a7"],"./ProfilePage.vue":["1a3e","chunk-61522f5a"],"./PublicProfilePage.vue":["b5ea","chunk-0badf0ae"],"./VaultPage.vue":["e6f4","chunk-4ea88e54"],"./WelcomePage.vue":["a8b7","chunk-0dc7c982"]};function o(e){if(!a.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],o=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(o)}))}o.keys=function(){return Object.keys(c)},o.id="a2f9",e.exports=o},a9da:function(e,t,a){},ab41:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=Object(c["I"])("data-v-2a950162");Object(c["t"])("data-v-2a950162");const n={class:"vault-component mx-3 mb-3"},l={class:"col rounded p-3 shadow",id:"card"},r=Object(c["g"])("span",null,"×",-1);Object(c["r"])();const s=o((function(e,t,a,o,s,d){return Object(c["q"])(),Object(c["e"])("div",n,[Object(c["g"])("div",l,[Object(c["g"])("button",{type:"button",class:"close text-danger",onClick:t[1]||(t[1]=e=>o.deleteVault(o.vault))},[r]),Object(c["g"])("img",{class:"rounded",src:"https://via.placeholder.com/250",alt:"",onClick:t[2]||(t[2]=(...e)=>o.openVault(...e))}),Object(c["g"])("p",null,Object(c["A"])(o.vault.title),1)])])}));var d=a("41cb"),i=a("29be"),u={name:"VaultComponent",props:{vaultProp:{type:Object,default:()=>{alert("this data does not exist")}}},setup(e){return{vault:Object(c["c"])(()=>e.vaultProp),openVault(t){d["a"].push({name:"Vault",params:{id:e.vaultProp.id}})},deleteVault(e){window.confirm("Are you sure you want to delete this vault?")&&i["a"].deleteVault(e)}}},components:{}};a("6cdf");u.render=s,u.__scopeId="data-v-2a950162";t["default"]=u},c7d7:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=Object(c["I"])("data-v-7fd73534");Object(c["t"])("data-v-7fd73534");const n={class:"create-keep-modal"},l=Object(c["g"])("button",{type:"button",class:"btn btn-secondary font","data-toggle":"modal","data-target":"#keep-modal"},[Object(c["g"])("h1",null," + ")],-1),r={class:"modal fade",id:"keep-modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},s={class:"modal-dialog modal-dialog-centered",role:"document"},d={class:"modal-content",id:"modal"},i=Object(c["g"])("div",{class:"modal-header"},[Object(c["g"])("h1",{class:"modal-title text-dark",id:"keep-title"}," New Keep "),Object(c["g"])("button",{type:"button",class:"close text-danger","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),u={class:"modal-body"},p={class:"card text-left border-0"},b={class:"card-body"},O=Object(c["g"])("h4",{class:"text-dark"}," Name ",-1),g=Object(c["g"])("h4",{class:"text-dark"}," ImgUrl ",-1),f=Object(c["g"])("h4",{class:"text-dark"}," Description ",-1),j={class:"modal-footer"};Object(c["r"])();const m=o((function(e,t,a,o,m,v){return Object(c["q"])(),Object(c["e"])("div",n,[l,Object(c["g"])("div",r,[Object(c["g"])("div",s,[Object(c["g"])("div",d,[i,Object(c["g"])("div",u,[Object(c["g"])("div",p,[Object(c["g"])("div",b,[Object(c["g"])("form",{class:"form-group",action:"",onSubmit:t[4]||(t[4]=Object(c["H"])((...e)=>o.createKeep(...e),["prevent"]))},[O,Object(c["G"])(Object(c["g"])("input",{class:"rounded",id:"title",type:"text",placeholder:"Name...",autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=e=>o.state.newKeep.name=e)},null,512),[[c["D"],o.state.newKeep.name]]),g,Object(c["G"])(Object(c["g"])("input",{class:"rounded",id:"title",type:"text",placeholder:"ImgUrl...",autocomplete:"off","onUpdate:modelValue":t[2]||(t[2]=e=>o.state.newKeep.img=e)},null,512),[[c["D"],o.state.newKeep.img]]),f,Object(c["G"])(Object(c["g"])("textarea",{class:"form-control rounded mt-3 text-dark",rows:"5",name:"",id:"","aria-describedby":"Body",placeholder:"Description...","onUpdate:modelValue":t[3]||(t[3]=e=>o.state.newKeep.description=e)},null,512),[[c["D"],o.state.newKeep.description]])],32)])])]),Object(c["g"])("div",j,[Object(c["g"])("button",{type:"button",class:"btn btn-success",onClick:t[5]||(t[5]=t=>o.createKeep(e.keep))}," Create ")])])])])])}));var v=a("4e2d"),h={name:"CreateKeepModal",setup(){const e=Object(c["u"])({newKeep:{}});return{state:e,async createKeep(t){document.getElementById("modalClose").click(),await v["a"].createKeep(e.newKeep),e.newVault={}}}},components:{}};a("fa9a");h.render=m,h.__scopeId="data-v-7fd73534";t["default"]=h},caca:function(e,t,a){"use strict";a("0e95")},ccc2:function(e,t,a){var c={"./AddToKeepComponent.vue":"ec72","./CreateKeepModal.vue":"c7d7","./CreateVaultModal.vue":"60b5","./KeepComponent.vue":"255a","./ProfileKeepComponent.vue":"f277","./SearchBarComponent.vue":"8157","./VaultComponent.vue":"ab41","./VaultKeepComponent.vue":"8cf3","./navbar.vue":"9d8d"};function o(e){var t=n(e);return a(t)}function n(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}o.keys=function(){return Object.keys(c)},o.resolve=n,e.exports=o,o.id="ccc2"},ce97:function(e,t,a){"use strict";a("e5e3")},d371:function(e,t,a){},d48c:function(e,t,a){"use strict";a("006f")},d629:function(e,t,a){"use strict";a("5797")},e5e3:function(e,t,a){},ec72:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=Object(c["I"])("data-v-6112f6e7"),n=o((function(e,t,a,o,n,l){return Object(c["q"])(),Object(c["e"])("div",{class:"add-to-keep-component",onClick:t[1]||(t[1]=e=>o.addToVault(o.vault.id,o.keep))},Object(c["A"])(o.vault.title),1)}));var l=a("079d"),r=a("83fc"),s={name:"AddToKeepComponent",props:{vaultProp:{type:Object,default:()=>{alert("this data does not exist")}}},setup(e){return{vault:Object(c["c"])(()=>e.vaultProp),keep:Object(c["c"])(()=>r["a"].currentKeep),addToVault(e,t){l["a"].add(e,t)}}},components:{}};a("ce97");s.render=n,s.__scopeId="data-v-6112f6e7";t["default"]=s},f277:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=Object(c["I"])("data-v-0d574ad6");Object(c["t"])("data-v-0d574ad6");const n={class:"profile-keep-component"},l={class:"text-secondary",id:"title"},r=Object(c["g"])("div",{class:"row",id:"profile-img-expanded"},null,-1),s={class:"modal-dialog modal-xl",id:"profile"},d={class:"modal-content"},i={class:"modal-body bg-secondary"},u={class:"container-fluid"},p={class:"row"},b={class:"col-5"},O={class:"col-7"},g=Object(c["g"])("div",{class:"row d-flex justify-content-end mr-1"},[Object(c["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",id:"closeModal"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),f={class:"row d-flex justify-content-center"},j={class:"mx-1"},m={class:"row d-flex justify-content-center"},v={class:"row d-flex justify-content-center"},h={class:"row",id:"modal-info"},k={key:0,class:"dropdown"},y=Object(c["g"])("h5",{class:"rounded add-vault-btn"}," ADD TO VAULT ",-1);Object(c["r"])();const w=o((function(e,t,a,o,w,x){const C=Object(c["x"])("add-to-keep-component");return Object(c["q"])(),Object(c["e"])("div",n,[Object(c["g"])("div",{class:"grid-item container-fluid rounded-lg px-3 pt-3","data-toggle":"modal","data-target":".bd-example-modal-xl"+o.keep.id,id:"keep-small"},[Object(c["g"])("img",{class:"rounded",src:o.keep.img,alt:"",id:"keep-img",onClick:t[1]||(t[1]=e=>o.setCurrentKeep(o.keep))},null,8,["src"]),Object(c["g"])("div",null,[Object(c["g"])("h4",l,Object(c["A"])(o.keep.name),1),r])],8,["data-target"]),Object(c["g"])("div",{class:"modal fade bd-example-modal-xl"+o.keep.id,tabindex:"-1",role:"dialog","aria-labelledby":"myExtraLargeModalLabel","aria-hidden":"true"},[Object(c["g"])("div",s,[Object(c["g"])("div",d,[Object(c["g"])("div",i,[Object(c["g"])("div",u,[Object(c["g"])("div",p,[Object(c["g"])("div",b,[Object(c["g"])("img",{class:"rounded",id:"modal-img",src:o.keep.img,alt:""},null,8,["src"])]),Object(c["g"])("div",O,[g,Object(c["g"])("div",f,[Object(c["g"])("p",j," Views: "+Object(c["A"])(o.keep.views),1),Object(c["g"])("p",null," Keeps: "+Object(c["A"])(o.keep.keepSaves),1)]),Object(c["g"])("div",m,[Object(c["g"])("h1",null,Object(c["A"])(o.keep.name),1)]),Object(c["g"])("div",v,[Object(c["g"])("p",null,Object(c["A"])(o.keep.description),1)]),Object(c["g"])("div",h,["/"!=e.$route.path?(Object(c["q"])(),Object(c["e"])("div",k,[Object(c["g"])("div",{class:"dropdown-toggle p-3 rounded large",onClick:t[3]||(t[3]=e=>o.state.dropOpen=!o.state.dropOpen)},[y,Object(c["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:o.state.dropOpen}],onClick:t[2]||(t[2]=e=>o.state.dropOpen=!1)},[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(o.vaults,e=>(Object(c["q"])(),Object(c["e"])(C,{key:e.id,"vault-prop":e},null,8,["vault-prop"]))),128))],2)])])):Object(c["f"])("",!0),Object(c["g"])("button",{class:"btn btn-danger",onClick:t[4]||(t[4]=e=>o.deleteKeep(o.keep))}," DELETE ")])])])])])])])],2)])}));var x=a("83fc"),C=a("4e2d"),P={name:"ProfileKeepComponent",props:{keepProp:{type:Object,default:()=>{alert("this data does not exist")}}},setup(e){const t=Object(c["u"])({showEmail:!1,dropOpen:!1});return{state:t,keep:Object(c["c"])(()=>e.keepProp),vaults:Object(c["c"])(()=>x["a"].vaults),deleteKeep(e){window.confirm("Are you sure you want to delete this vault?")&&C["a"].deleteKeep(e),document.getElementById("closeModal").click()},setCurrentKeep(e){x["a"].currentKeep=e}}},components:{}};a("418b");P.render=w,P.__scopeId="data-v-0d574ad6";t["default"]=P},f857:function(e,t,a){"use strict";a("d371")},fa9a:function(e,t,a){"use strict";a("a9da")}});