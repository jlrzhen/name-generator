(this["webpackJsonpname-generator"]=this["webpackJsonpname-generator"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),o=n.n(a),s=(n(9),n(3)),l=(n(10),n(0));var i=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),o=Object(s.a)(a,2),i=o[0],u=o[1];return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("a",{style:{color:"white"},href:"https://github.com/jlrzhen/name-generator",children:"GitHub repository"}),Object(l.jsx)("h1",{children:"Name Generator"}),Object(l.jsx)("p",{children:"Input options:"}),Object(l.jsxs)("select",{id:"sel",children:[Object(l.jsx)("option",{value:"none",children:"None"}),Object(l.jsx)("option",{value:"rand",children:"Random Number"})]}),Object(l.jsx)("p",{children:"Input Theme:"}),Object(l.jsx)("input",{id:"themeInput",disabled:n,onChange:function(e){return u(e.target.value)}}),n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h2",{children:["Result: ",n]}),Object(l.jsx)("button",{onClick:function(){r(null),u(null),document.getElementById("themeInput").value=null},children:"New Name"})]}):Object(l.jsx)("button",{onClick:function(){if(i){var e=new XMLHttpRequest;e.responseType="json",e.onreadystatechange=function(){e.readyState===XMLHttpRequest.DONE&&t(e.response)},e.open("GET","https://api.datamuse.com/words?rel_gen="+i),e.send();var t=function(e){try{for(var t=[],n=0;n<e.length;n++)n<10&&t.push(e[n].word);for(var c="",a=0;a<t.length;a++)c+=t[a],"rand"===document.getElementById("sel").value&&(c+=" "+(1e3+Math.floor(9e3*Math.random()))),a<t.length-1&&(c+=", ");r(c)}catch(o){r("invalid theme")}}}else r("invalid input")},children:"Generate Name"})]})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.1728ee36.chunk.js.map