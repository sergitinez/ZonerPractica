(function(e){function t(t){for(var a,i,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1d4032c5":"4fc23af6","chunk-695d10a3":"aea5c395","chunk-87aeb408":"2381b10f","chunk-f2ba2eee":"db2e6924"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0a85":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{color:"white"},attrs:{id:"zona"}},[n("Diapos")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #070"},attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"1024","img-height":"480"}},[a("b-carousel-slide",{attrs:{caption:"Monitores","img-src":n("be85")}}),a("b-carousel-slide",{attrs:{caption:"Ratones","img-src":n("0bf0")}}),a("b-carousel-slide",{attrs:{caption:"Teclados","img-src":n("e66a")}})],1)],1)},i=[],c=n("2877"),s={},u=Object(c["a"])(s,o,i,!1,null,null,null),l=u.exports,f={name:"Zona",components:{Diapos:l}},d=f,p=Object(c["a"])(d,a,r,!1,null,null,null);t["default"]=p.exports},"0bf0":function(e,t,n){e.exports=n.p+"img/BASILIKS.bd58d621.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var a=n("2b0e"),r=n("ecee"),o=n("c074"),i=n("ad3d");r["c"].add(o["a"]),a["default"].component("font-awesome-icon",i["a"]);var c=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(c["a"]);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"background-color":"#073A3B"},attrs:{id:"app"}},[n("div",{staticClass:"container-fluid"},[n("Menu"),e._v(" "),n("b-breadcrumb",{attrs:{items:e.items}}),n("router-view")],1)])},u=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"primary"}},[a("b-img",{staticClass:"img-fluid",attrs:{href:"/",src:n("9264")}}),a("b-navbar-brand",{attrs:{href:"#"}},[e._v("Z O N E R")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Zona",exact:""}},[e._v("Zona")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Ofertas",exact:""}},[e._v("OFERTAS")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Monitores",exact:""}},[e._v("Monitores")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Ratones",exact:""}},[e._v("Ratones")]),a("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Teclados",exact:""}},[e._v("Teclados")])],1)],1)],1)],1)},f=[],d=(n("efa6"),n("2877")),p={},b=Object(d["a"])(p,l,f,!1,null,null,null),v=b.exports,m={name:"App",components:{Menu:v},data:function(){return{items:[{text:"Volver a la",active:!0},{text:"Zona",href:"/zona",to:"/zona"}]}}},h=m,g=(n("034f"),Object(d["a"])(h,s,u,!1,null,null,null)),y=g.exports,x=n("2f62");a["default"].use(x["a"]);var k=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),w=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),_=n("0a85");a["default"].use(w["a"]);var O=[{path:"/",name:"Zona",component:_["default"]},{path:"/zona",name:"Zona",component:function(){return Promise.resolve().then(n.bind(null,"0a85"))}},{path:"/ofertas",name:"Ofertas",component:function(){return n.e("chunk-f2ba2eee").then(n.bind(null,"7dd7"))}},{path:"/ratones",name:"Ratones",component:function(){return n.e("chunk-1d4032c5").then(n.bind(null,"e7e7"))}},{path:"/monitores",name:"Monitores",component:function(){return n.e("chunk-87aeb408").then(n.bind(null,"8b14"))}},{path:"/teclados",name:"Teclados",component:function(){return n.e("chunk-695d10a3").then(n.bind(null,"817d"))}}],j=new w["a"]({routes:O}),S=j;a["default"].config.productionTip=!1,new a["default"]({store:k,router:S,render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,n){},"8d50":function(e,t,n){},9264:function(e,t,n){e.exports=n.p+"img/Logofenix.f4b4b85d.png"},be85:function(e,t,n){e.exports=n.p+"img/172.e367c3ae.png"},e66a:function(e,t,n){e.exports=n.p+"img/keyboard.9496825f.jpg"},efa6:function(e,t,n){"use strict";n("8d50")}});
//# sourceMappingURL=app.67f2c0a6.js.map