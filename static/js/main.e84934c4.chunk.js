(this["webpackJsonpname-generator"]=this["webpackJsonpname-generator"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),o=(n(9),n(3)),i=(n(10),n(0));var u=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(o.a)(a,2),u=s[0],l=s[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("a",{style:{color:"white"},href:"https://github.com/jlrzhen/name-generator",children:"GitHub repository"}),Object(i.jsx)("h1",{children:"Name Generator"}),Object(i.jsx)("p",{children:"Input Theme:"}),Object(i.jsx)("input",{id:"themeInput",onChange:function(e){return l(e.target.value)}}),n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h2",{children:["Result: ",n]}),Object(i.jsx)("button",{onClick:function(){r(null),l(null),document.getElementById("themeInput").value=null},children:"New Name"})]}):Object(i.jsx)("button",{onClick:function(){if(u){var e=new XMLHttpRequest;e.responseType="json",e.onreadystatechange=function(){e.readyState===XMLHttpRequest.DONE&&t(e.response)},e.open("GET","https://api.datamuse.com/words?rel_gen="+u),e.send();var t=function(e){r(e[Math.floor(3*Math.random())].word)}}else r("invalid input")},children:"Generate Name"})]})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.e84934c4.chunk.js.map