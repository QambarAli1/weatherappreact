(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{20:function(t,e,c){},41:function(t,e,c){"use strict";c.r(e);var n=c(2),a=c.n(n),o=c(15),r=c.n(o),i=(c(20),c(6)),s=c(5),l=c.n(s),j=c(0);var b=function(){localStorage.clear();var t="973497d219f1c7351022d3f0bbbb2724",e=Object(n.useState)(null),c=Object(i.a)(e,2),a=c[0],o=c[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),b=s[0],d=s[1];function u(t){console.log("Latitude: "+t.coords.latitude+"<br>Longitude: "+t.coords.longitude),localStorage.setItem("lat",t.coords.latitude),localStorage.setItem("long",t.coords.longitude)}return navigator.geolocation?navigator.geolocation.getCurrentPosition(u):console.log("Geolocation is not supported by this browser."),Object(n.useEffect)((function(){if(null!=b)l.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(b,"&appid=").concat(t,"&units=metric")).then((function(t){var e=t.data;o(e)})).catch((function(t){console.log("error occured ",t)}));else{var e=JSON.parse(localStorage.getItem("lat")),c=JSON.parse(localStorage.getItem("long"));l.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(c,"&appid=").concat(t,"&units=metric")).then((function(t){var e=t.data;o(e)})).catch((function(t){console.log("error occured ",t)}))}}),[b]),Object(j.jsx)("div",{className:"app-main",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Weather App"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"city",id:"city"}),Object(j.jsx)("button",{onClick:function(){d(document.getElementById("city").value)},children:"Search"}),Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),null!==a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h3",{children:[" ",a.name," "]}),Object(j.jsxs)("h2",{children:[" ",a.weather[0].description,"  ",Object(j.jsx)("br",{}),Object(j.jsxs)("span",{className:"temp",children:[a.main.temp," ",Object(j.jsx)("sup",{children:"o"})," C"]})]})]}):Object(j.jsx)("h4",{children:"Weather Updates"}),Object(j.jsx)("footer",{children:" \xa9 QambarAli"})]})})},d=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),o(t),r(t)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),d()}},[[41,1,2]]]);
//# sourceMappingURL=main.40f3ee4a.chunk.js.map