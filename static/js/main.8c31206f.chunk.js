(this["webpackJsonpname-generator"]=this["webpackJsonpname-generator"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),o=n.n(a),s=(n(9),n(3)),u=(n(10),n(0));var i=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),o=Object(s.a)(a,2),i=o[0],l=o[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("a",{style:{color:"white"},href:"https://github.com/jlrzhen/name-generator",children:"GitHub repository"}),Object(u.jsx)("h1",{children:"Name Generator"}),Object(u.jsx)("p",{children:"Input Theme:"}),Object(u.jsx)("input",{id:"themeInput",onChange:function(e){return l(e.target.value)}}),n?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h2",{children:["Result: ",n]}),Object(u.jsx)("button",{onClick:function(){r(null),l(null),document.getElementById("themeInput").value=null},children:"New Name"})]}):Object(u.jsx)("button",{onClick:function(){var e=new XMLHttpRequest;e.responseType="json",e.onreadystatechange=function(){e.readyState===XMLHttpRequest.DONE&&t(e.response)},e.open("GET","https://api.datamuse.com/words?rel_gen="+i),e.send();var t=function(e){r(e[Math.floor(3*Math.random())].word)}},children:"Generate Name"})]})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(i,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.8c31206f.chunk.js.map