(function(e){function n(n){for(var t,r,i=n[0],u=n[1],s=n[2],l=0,f=[];l<i.length;l++)r=i[l],a[r]&&f.push(a[r][0]),a[r]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,n=0;n<c.length;n++){for(var o=c[n],t=!0,r=1;r<o.length;r++){var i=o[r];0!==a[i]&&(t=!1)}t&&(c.splice(n--,1),e=u(u.s=o[0]))}return e}var t={},r={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-4fe4f056":"07284141",about:"579e3cb4","chunk-b2e56838":"9df1b616","chunk-f967d93a":"73202790"}[e]+".js"}function u(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var n=[],o={"chunk-4fe4f056":1,about:1,"chunk-b2e56838":1,"chunk-f967d93a":1};r[e]?n.push(r[e]):0!==r[e]&&o[e]&&n.push(r[e]=new Promise(function(n,o){for(var t="css/"+({about:"about"}[e]||e)+"."+{"chunk-4fe4f056":"0077bc18",about:"a9a9f83e","chunk-b2e56838":"18711cee","chunk-f967d93a":"0eed674a"}[e]+".css",a=u.p+t,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===t||l===a))return n()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===t||l===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var t=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");c.request=t,delete r[e],d.parentNode.removeChild(d),o(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[e]=0}));var t=a[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise(function(n,o){t=a[e]=[n,o]});n.push(t[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e),s=function(n){l.onerror=l.onload=null,clearTimeout(f);var o=a[e];if(0!==o){if(o){var t=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+t+": "+r+")");c.type=t,c.request=r,o[1](c)}a[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=t,u.d=function(e,n,o){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(o,t,function(n){return e[n]}.bind(null,t));return o},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;c.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},"09b9":function(e,n,o){"use strict";var t=o("4736"),r=o.n(t);r.a},4736:function(e,n,o){},"56d7":function(e,n,o){"use strict";o.r(n);o("cadf"),o("551c"),o("f751"),o("097d");var t=o("2b0e"),r=(o("a481"),o("bb71"));o("da64");t["a"].use(r["a"],{iconfont:"md",theme:{primary:"#54A0FF",secondary:"#fff",accent:"#C8D6E5",error:"#ee5253"},options:{customProperties:!0,minifyTheme:function(e){return e.replace(/[\s|\r\n|\r|\n]/g,"")}}});var a=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("v-app",[o("v-toolbar",{staticClass:"cstToolbar",attrs:{app:"",color:"primary"}},[o("v-toolbar-title",{staticClass:"headline titleToolbar"},[e._v(e._s(e.$router.currentRoute.name))])],1),o("v-content",[o("router-view")],1),o("v-bottom-nav",{attrs:{app:"",fixed:"",value:!0}},[o("v-btn",{attrs:{flat:"",color:"primary",to:{name:"search"}}},[o("span",[e._v("Search")]),o("v-icon",[e._v("search")])],1),o("v-btn",{attrs:{flat:"",color:"primary",to:{path:"/"}}},[o("span",[e._v("Homepage")]),o("v-icon",[e._v("location_on")])],1),o("v-btn",{attrs:{flat:"",color:"primary",to:{name:"bookmarks"}}},[o("span",[e._v("Favorites")]),o("v-icon",[e._v("favorite")])],1)],1)],1)},c=[],i={name:"App",components:{}},u=i,s=(o("09b9"),o("2877")),l=o("6544"),f=o.n(l),d=o("7496"),p=o("887a"),h=o("8336"),v=o("549c"),g=o("132d"),m=o("71d9"),b=o("2a7f"),y=Object(s["a"])(u,a,c,!1,null,"8878986c",null),k=y.exports;f()(y,{VApp:d["a"],VBottomNav:p["a"],VBtn:h["a"],VContent:v["a"],VIcon:g["a"],VToolbar:m["a"],VToolbarTitle:b["a"]});var w=o("8c4f"),_=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("v-container",[e.isLoadingLocation?o("h1",{staticStyle:{"text-align":"center"}},[e._v("Searching location....")]):e._e(),e.canGeolocate?e._e():o("h1",{staticStyle:{"text-align":"center"}},[e._v("Can not find your location")])])},j=[],C=(o("7514"),function(e,n,o){fetch("https://transport.opendata.ch/v1/locations?x=".concat(e,"&y=").concat(n)).then(function(e){return e.json()}).then(function(e){var n=e.stations.find(function(e){return e.id&&null!=e.id});o.push({name:"station",params:{id:n.id}})})}),L={data:function(){return{isLoadingLocation:!0,canGeolocate:!0}},created:function(){var e=this,n=0,o=0;window.cordova&&"browser"!=window.cordova.platformId?(console.log("Cordova is loaded",window.cordova),console.log("asjdhaskd"),navigator.geolocation.getCurrentPosition(function(t){console.log("done loading"),n=t.coords.latitude,o=t.coords.longitude,C(n,o,e.$router),e.canGeolocate=!0,e.isLoadingLocation=!1},function(n){console.log("code: "+n.code+"\nmessage: "+n.message+"\n"),e.canGeolocate=!1,e.isLoadingLocation=!1})):navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){n=t.coords.latitude,o=t.coords.longitude,C(n,o,e.$router),e.canGeolocate=!0,e.isLoadingLocation=!1},function(n){console.log("code: "+n.code+"\nmessage: "+n.message+"\n"),e.canGeolocate=!1,e.isLoadingLocation=!1})}},P=L,T=o("a523"),x=Object(s["a"])(P,_,j,!1,null,null,null),O=x.exports;f()(x,{VContainer:T["a"]}),t["a"].use(w["a"]);var S=new w["a"]({routes:[{path:"/",name:"home",component:O},{path:"/search",name:"search",component:function(){return Promise.all([o.e("chunk-4fe4f056"),o.e("about")]).then(o.bind(null,"2d3b"))}},{path:"/bookmarks",name:"bookmarks",component:function(){return o.e("chunk-f967d93a").then(o.bind(null,"b51b"))}},{path:"/station/:id",name:"station",component:function(){return Promise.all([o.e("chunk-4fe4f056"),o.e("chunk-b2e56838")]).then(o.bind(null,"14c5"))},props:!0}]}),E=o("9483");Object(E["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),t["a"].config.productionTip=!1,new t["a"]({router:S,render:function(e){return e(k)}}).$mount("#app")}});
//# sourceMappingURL=app.8aadae46.js.map