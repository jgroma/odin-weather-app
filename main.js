(()=>{"use strict";var e,n,t,o,r,a,i,c,s,d,l,u,p,m,f={734:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},982:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"/*variables*/\n:root {\n    /*--day-bg-color: #86BBD8;*/\n    --day-bg-color: #CAE9FF;\n    --btn-color: #3D314A;\n    --hover-btn-color: #604e74;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    background: var(--day-bg-color);\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n    padding: 2em;\n}\n\n.header-container {\n    display: flex;\n    gap: 15px;\n}\n\n\n.search-bar {\n    font-size: 1em;\n    border-radius: 10px;\n    border: 1px solid white;\n}\n\n#search-btn, #temp-switch {\n    background-color: #3D314A;\n    color: white;\n    border: none;\n    border-radius: 10px;\n    font-size: 1em;\n    padding: 0.2em 1.5em 0.2em 1.5em;\n}\n\n#search-btn:hover, #temp-switch:hover {\n    background-color: var(--hover-btn-color);\n}\n\n.forecast-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 60%;\n    gap: 40px;\n}\n\n.location-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 2em;\n}\n\n.time {\n    font-size: 4em;\n}\n.location {\n    font-size: 1.0em;\n}\n\n/*SLIDER*/\n\n.slider-wrapper {\n    position: relative;\n    overflow: hidden;\n    height: 100%;\n\n}\n\n.slides-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    overflow: scroll;\n    scroll-behavior: smooth;\n    padding-top: 1em;\n    padding-bottom: 1em;\n}\n\n.slide {\n    width: 100%;\n    height: 100%;\n    flex: 1 0 100%;\n    display: flex;\n    justify-content: center;\n    padding-top: 0.25em;\n}\n\n.day-card {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.5em;\n}\n\n.slide-btn {\n    position: absolute;\n    display: flex;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    height: 4rem;\n    background-color: var(--btn-color);\n    color: white;\n    border: none;\n    width: 2rem;\n    font-size: 3rem;\n    padding: 0;\n    cursor: pointer;\n    opacity: 0.5;\n    transition: opacity 100ms;\n}\n\n.slide-btn:hover,\n.slide-btn:focus {\n    opacity: 1;\n}\n\n#prev-slide-btn {\n    left: 0;\n    padding-left: 0.25rem;\n    border-radius: 0 2rem 2rem 0;\n}\n\n#next-slide-btn {\n    right: 0;\n    padding-left: 0.75rem;\n    border-radius: 2rem 0 0 2rem;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function y(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return f[e](t,t.exports,y),t.exports}y.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return y.d(n,{a:n}),n},y.d=(e,n)=>{for(var t in n)y.o(n,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},y.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),y.nc=void 0,e=y(379),n=y.n(e),t=y(795),o=y.n(t),r=y(569),a=y.n(r),i=y(565),c=y.n(i),s=y(216),d=y.n(s),l=y(589),u=y.n(l),p=y(982),(m={}).styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,(()=>{var e=y(379),n=y.n(e),t=y(795),o=y.n(t),r=y(569),a=y.n(r),i=y(565),c=y.n(i),s=y(216),d=y.n(s),l=y(589),u=y.n(l),p=y(734),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals})(),(()=>{function e(e){let n=new Date(e).toDateString().split(" ");return n[0]+" "+n[2]+" "+n[1]}let n;async function t(){const t=await async function(){const n=await async function(){let e=document.getElementById("search").value;try{const n=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=90d680eb454742b8a73160825232309&q=${e}&days=3`,{mode:"cors"});return await n.json()}catch(e){console.log("Something went wrong.")}}(),t=n.location.name,o=n.location.country,r=n.location.localtime,a=e(r),i=r.split(" ")[1],c=n.current.condition.text,s=n.current.temp_c,d=n.current.temp_f,l=n.current.humidity,u=n.current.is_day,p=n.forecast.forecastday[1].day.condition.text,m=n.forecast.forecastday[1].day.avgtemp_c,f=n.forecast.forecastday[1].day.avgtemp_f,h=n.forecast.forecastday[1].day.avghumidity,y=e(n.forecast.forecastday[1].date),b=n.forecast.forecastday[2].day.condition.text,g=n.forecast.forecastday[2].day.avgtemp_c,v=n.forecast.forecastday[2].day.avgtemp_f,x=n.forecast.forecastday[2].day.avghumidity,E={location:{time:i,name:t,country:o},current:{date:a,description:c,tempC:s,tempF:d,humidity:l,isDay:u},dayTwo:{date:y,description:p,tempC:m,tempF:f,humidity:h},dayThree:{date:e(n.forecast.forecastday[2].date),description:b,tempC:g,tempF:v,humidity:x}};return console.log(n),E}();n=Object.values(t);const o=n.shift();let r=n[0].isDay;console.log(o),console.log(n);const a=document.getElementById("forecast-container");a.innerHTML="";const i=document.createElement("div");i.classList.add("location-container"),a.appendChild(i);const c=document.createElement("div");c.classList.add("slider-wrapper");const s=document.createElement("button");s.classList.add("slide-btn"),s.id="prev-slide-btn",s.innerHTML="&#8249";const d=document.createElement("button");d.classList.add("slide-btn"),d.id="next-slide-btn",d.innerHTML="&#8250;";const l=document.createElement("ul");l.classList.add("slides-container"),l.id="slides-container",c.appendChild(s),c.appendChild(d),c.appendChild(l),a.appendChild(c),function(e){const n=document.getElementById("forecast-container");0==e?(document.body.style.background="#4A5899",n.style.color="white"):(document.body.style.background="#CAE9FF",n.style.color="black")}(r);const u=document.createElement("p");u.innerHTML=o.time,u.classList.add("time");const p=document.createElement("p");return p.classList.add("location"),p.innerHTML=`${o.name}, ${o.country}`,i.appendChild(u),i.appendChild(p),n.forEach((e=>{const n=document.createElement("li");n.classList.add("slide");const t=document.createElement("div");t.classList.add("day-card");const o=document.createElement("p");o.innerHTML=`${e.date}`;const r=document.createElement("p");r.classList.add("temp"),r.innerHTML=`${e.tempC}&#8451`;const a=document.createElement("p");a.innerHTML=`${e.description}`;const i=document.createElement("p");i.innerHTML=`Humidity: ${e.humidity}%`,t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(i),n.appendChild(t),l.appendChild(n)})),n}function o(e,n){n.forEach(((n,t)=>{const o=document.getElementsByClassName("temp")[t];"Fahrenheit"==e?o.innerHTML=`${n.tempC}&#8451`:"Celcius"==e&&(o.innerHTML=`${n.tempF}&#8457`)}))}const r=document.getElementsByTagName("form"),a=document.getElementById("search-btn");let i="Celcius";const c=document.getElementById("temp-switch");a.addEventListener("click",(()=>{event.preventDefault(),t(),r[0].reset()})),c.addEventListener("click",(()=>{"Celcius"==i?(c.innerHTML="&#8451",o(i,n),i="Fahrenheit"):(c.innerHTML="&#8457",o(i,n),i="Celcius")})),document.getElementById("forecast-container").addEventListener("click",(e=>{const n=e.target;if("prev-slide-btn"===n.id){const e=document.getElementById("slides-container"),n=document.querySelector(".slide").clientWidth;e.scrollLeft-=n}else if("next-slide-btn"===n.id){const e=document.getElementById("slides-container"),n=document.querySelector(".slide").clientWidth;e.scrollLeft+=n}}))})()})();