(this["webpackJsonpname-generator"]=this["webpackJsonpname-generator"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),l=n(4),o=n.n(l),s=(n(9),n(2)),r=(n(10),n(0));var i=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],l=Object(c.useState)(null),o=Object(s.a)(l,2),i=o[0],j=o[1],d=Object(c.useState)(!1),b=Object(s.a)(d,2),h=b[0],u=b[1],p=Object(c.useState)(!0),m=Object(s.a)(p,2),O=m[0],x=m[1],g=function(){if(a(null),i){var e=new XMLHttpRequest;e.responseType="json",e.onreadystatechange=function(){e.readyState===XMLHttpRequest.DONE&&t(e.response)},e.open("GET","https://api.datamuse.com/words?rel_gen="+i),e.send();var t=function(e){try{for(var t=[],n=[];n.length<10&&n.length<e.length;){var c=Math.floor(Math.random()*e.length);!n.includes(c)&&c<30&&(n.push(c),t.push(e[c].word))}for(var l="",o=0;o<t.length;o++)"allCaps"===document.getElementById("caps").value&&function(){var e=t[o].split(" ");e.forEach((function(t,n){return e[n]=t[0].toUpperCase()+t.slice(1)})),t[o]=e.join(" "),console.log(e)}(),"camelCase"===document.getElementById("caps").value&&function(){var e=t[o].split(" ");e.forEach((function(t,n){n>0&&(e[n]=t[0].toUpperCase()+t.slice(1))})),t[o]=e.join(" "),console.log(e)}(),document.getElementById("noSpace").checked?l+=t[o].split(" ").join(""):l+=t[o],document.getElementById("rand").checked&&(document.getElementById("noSpaceNum").checked?l+=""+(1e3+Math.floor(9e3*Math.random())):l+=" "+(1e3+Math.floor(9e3*Math.random()))),o<t.length-1&&(l+=", ");a(l),t<1&&a("invalid theme")}catch(s){console.log(s.message)}}}else a("invalid input")};return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:O?"App-headerDark":"App-headerLight",children:[Object(r.jsx)("a",{className:O?"white":"black",href:"https://www.datamuse.com/api/",children:"Datamuse API"}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{className:O?"white":"black",href:"https://github.com/jlrzhen/name-generator",children:"GitHub repository"}),Object(r.jsx)("h1",{children:"Name Generator"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Change Theme "}),Object(r.jsx)("button",{onClick:function(){x(!O)},children:O?"Light Mode":"Dark Mode"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("section",{id:"selection",children:[Object(r.jsx)("label",{style:{fontWeight:"bold"},children:"Input options:"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{for:"rand",children:"Random Number "}),Object(r.jsx)("input",{type:"checkbox",id:"rand",value:"rand",onChange:function(){return u(document.getElementById("rand").checked)}}),Object(r.jsx)("br",{}),h?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("label",{for:"noSpaceNum",children:"No Space Before Number "}),Object(r.jsx)("input",{type:"checkbox",id:"noSpaceNum",value:"noSpaceNum"}),Object(r.jsx)("br",{})]}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("label",{for:"noSpace",children:"No Spaces Between Words "}),Object(r.jsx)("input",{type:"checkbox",id:"noSpace",value:"noSpace"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{for:"caps",children:"Capitalization "}),Object(r.jsxs)("select",{id:"caps",children:[Object(r.jsx)("option",{value:"allCaps",children:"Capitalize First Letters"}),Object(r.jsx)("option",{value:"camelCase",children:"camelCase"}),Object(r.jsx)("option",{value:"none",children:"none"})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsx)("label",{style:{fontWeight:"bold"},children:"Input Keyword: "}),Object(r.jsx)("input",{id:"themeInput",disabled:n,onChange:function(e){return j(e.target.value)}})]}),Object(r.jsx)("br",{}),n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h3",{children:["Result: ",n]}),Object(r.jsx)("button",{onClick:g,children:"Refresh"}),Object(r.jsx)("button",{onClick:function(){a(null),j(null),document.getElementById("themeInput").value=null},children:"New Name"})]}):Object(r.jsx)("button",{onClick:g,children:"Generate Name"})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),l(e),o(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(i,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.f654acbf.chunk.js.map