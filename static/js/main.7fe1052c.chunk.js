(this["webpackJsonpname-generator"]=this["webpackJsonpname-generator"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),l=n(4),r=n.n(l),i=(n(9),n(2));n(10);var s=n(0);var o=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],l=Object(c.useState)(null),r=Object(i.a)(l,2),o=r[0],j=r[1],b=Object(c.useState)(!1),A=Object(i.a)(b,2),h=A[0],d=A[1],m=Object(c.useState)("Start"),u=Object(i.a)(m,2),g=u[0],p=u[1],O=Object(c.useState)(!1),x=Object(i.a)(O,2),B=x[0],M=x[1],N=function(){if(a(null),o){var e=new XMLHttpRequest;e.responseType="json",e.onreadystatechange=function(){e.readyState===XMLHttpRequest.DONE&&a(function(e){try{for(var t=[],n=[];n.length<10&&n.length<e.length;){var c=Math.floor(Math.random()*e.length);!n.includes(c)&&c<30&&(n.push(c),t.push(e[c].word))}for(var a="",l=0;l<t.length;l++)"allCaps"===document.getElementById("caps").value&&function(){var e=t[l].split(" ");e.forEach((function(t,n){return e[n]=t[0].toUpperCase()+t.slice(1)})),t[l]=e.join(" "),console.log(e)}(),"camelCase"===document.getElementById("caps").value&&function(){var e=t[l].split(" ");e.forEach((function(t,n){n>0&&(e[n]=t[0].toUpperCase()+t.slice(1))})),t[l]=e.join(" "),console.log(e)}(),document.getElementById("noSpace").checked?(a+=t[l].split(" ").join(""),t[l]=t[l].split(" ").join("")):a+=t[l],document.getElementById("rand").checked&&(document.getElementById("noSpaceNum").checked?(a+=""+(1e3+Math.floor(9e3*Math.random())),t[l]+=""+(1e3+Math.floor(9e3*Math.random()))):(a+=" "+(1e3+Math.floor(9e3*Math.random())),t[l]+=" "+(1e3+Math.floor(9e3*Math.random())))),l<t.length-1&&(a+=", ");return t<1?"invalid theme":(console.log(a),t)}catch(r){console.log(r.message)}}(e.response))},e.open("GET","https://api.datamuse.com/words?rel_gen="+o),e.send()}else a("invalid input")};return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header".concat(g),children:[Object(s.jsx)("a",{className:"link".concat(g),href:"https://www.datamuse.com/api/",children:"Datamuse API"}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{children:["Start"===g||"Dark"===g?Object(s.jsx)("a",{href:"https://github.com/jlrzhen/name-generator",children:Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABLVJREFUWEetl11oHFUUx//n7iZbpfnYJHNndmsag0bpi8XGFEQrWor6IJQ2IqjVavPQ+iBUUBAFRUURFKwiGMTEryoo2qggiNaPSn3RamofDJpITT92Z+7kc2PbbLJ7j8xmN+7HbHbT5D4NM/9zzu+eOffMGUKVKxaLtYig2A6mW0C4BkA7gLVZ838BnATjBIi/1yn9eTQaHavGNVUSKaWu1dCPA7QTQLCSPvs8BfAhAfGilHJwKZuyABMTEw1zqdTLAPcAqAhaJggD1FcbDD7a1NQ07afxdbywa/40m+YqN72k7KQAdftlowTAHrO3QtMAgPrViJznIwHBO6wW67t8vwUAMdftFKw9wWoHz8VMaBJbo4bxa+7GIsDo1FQ4NJf8DcDl/xPSEIOHCNh2EVAJBg4TaAPAG/J2/U+yNrSprbFx0ru3CGArux+gBwvSw7jPNM2Dw8PDobqGul0APQ/ABJA5dgRknDAQzjuWDsBPzkzPHOzo6Eg6jrOLCe8Xvk5+25LWnkWAmOteJ1j/UvzO0yQ61xmGl5XM8k7GrNaRSHPzX0Sk8/XMLOLj41etESKeX/FnXXdTgPViynM2mkRX1DCOZTJgK+cQgB3FACz05khLpARsOcUZH4t3kRY/+9gMWNLcSUopS4PPAAiUAIAeiEj57nICFmvjSu0m8Ds+PtICdBk5rrOXGb3FAgLOzIXmNrY2tE6sBOD09OmmmmToOMCtJTEI+8hW9kcA3VUahHosKftXEjxnayu1B+C+Ul/8MdlK/VF0TDxdujZY01yufS4XaqGtz4+XvmYaIls55wFcUuCUccoyzbblBlpKbzvOKAjrizQXPAD2MRyxpNmxqgDKGQFwRUkdlAGYsaS5qu3YVk4CQJ0fgO8DaDYty1KrkQXbtiUEOT6+ZrxXcBzAxhIyxm7TNN9bDQDHce5ngl8/+d07hn0AZfpy0TphGrKTiFIrgWDmoOMqrxV7Y1zR4n6yXftuMH3oH4QOWFI+shIAW6lXAN7v64P4HnJdty7N2gZwqZ+IgE8I9LCU0tNUvVzXjWjWrzFwZxmj8wESVuZjFHedN4ixz7smwksa4kvB+jkGtmSN5wn4jIm/0QgMRlpaBokone/YS7VSqsurJybcCuAOADXliJnQGzHMhzIAsYnYepEK/Algjfd5J8JjianE63X19T+CsLnIyYBpyG4iKugfzEzOmBoAY3sVaZrVwfTV0aboqcWBxHGdp5jxzKKx5usBOBDiSP6HRIC2SCmP+gWJKXWTAB+pBECEp03DfDaT8Zw4W60/ALghe+9rS5q3TU5ONibnk93eJERMx6SU3xanP+cjHo8bFBCVesdPpiFvzp2ugqE0Oxt4u8u2TN5vSevVSjvKPV+AncuMaWXW3wJ0Y35Bl4zlsVisTQQDhwFc6Tlh4CgYX4DIJcC6cO7cgfb29lm/ABUARnQqvS0ajY7m2/r+mHhDRDBZ+wEBtxcHCtXUhsPh8NRyABj4KhWau9dvuCn7y7VQ1U4PmF4AYOQCLhNgDMRPmC3mW8WnJuev4j+fUmotE3tj214ATTPTiXXeuO2XgYXxvf6sN0AT400i6pVSeiN82VURoNoCvFjdfwuR8rVwMg2jAAAAAElFTkSuQmCC",alt:"GitHub Mark"})}):Object(s.jsx)("a",{href:"https://github.com/jlrzhen/name-generator",children:Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==",alt:"GitHub Mark"})}),Object(s.jsx)("span",{children:" "}),Object(s.jsx)("a",{className:"link".concat(g),href:"https://github.com/jlrzhen/name-generator",children:"GitHub repository"})]}),Object(s.jsx)("h1",{children:"Name Generator"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"Change Theme "}),Object(s.jsx)("button",{onClick:function(){p("Start"===g||"Dark"===g?"Light":"Dark")},children:"Start"===g?"Light Mode":"Light"===g?"Dark Mode":"Light Mode"})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("section",{className:"selection",children:[Object(s.jsx)("label",{style:{fontWeight:"bold"},children:"Input options:"}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"rand",children:"Random Number "}),Object(s.jsx)("input",{type:"checkbox",id:"rand",value:"rand",onChange:function(){return d(document.getElementById("rand").checked)}}),Object(s.jsx)("br",{}),h?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("label",{htmlFor:"noSpaceNum",children:"No Space Before Number "}),Object(s.jsx)("input",{type:"checkbox",id:"noSpaceNum",value:"noSpaceNum"}),Object(s.jsx)("br",{})]}):Object(s.jsx)(s.Fragment,{}),Object(s.jsx)("label",{htmlFor:"noSpace",children:"No Spaces Between Words "}),Object(s.jsx)("input",{type:"checkbox",id:"noSpace",value:"noSpace"}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"caps",children:"Capitalization "}),Object(s.jsxs)("select",{id:"caps",children:[Object(s.jsx)("option",{value:"allCaps",children:"Capitalize First Letters"}),Object(s.jsx)("option",{value:"camelCase",children:"camelCase"}),Object(s.jsx)("option",{value:"none",children:"none"})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("label",{style:{fontWeight:"bold"},children:"Input Keyword: "}),Object(s.jsx)("input",{id:"themeInput",disabled:n,onChange:function(e){return j(e.target.value)}})]}),n?Object(s.jsxs)(s.Fragment,{children:[B?Object(s.jsx)("p",{className:"copiedMessage",children:"Name copied to clipboard!"}):Object(s.jsx)(s.Fragment,{}),Object(s.jsxs)("h3",{className:"nameList",children:["Result: ",function(e){try{var t=[];return e.forEach((function(n,c){t.push(Object(s.jsxs)("p",{onClick:function(){navigator.clipboard.writeText(n),M(!0),setTimeout((function(){return M(!1)}),1e3)},className:0===c?"first":"name",children:[n,c!==e.length-1?",":""]}))})),t}catch(n){return"invalid theme"}}(n)]}),"object"==typeof n?Object(s.jsx)("button",{onClick:N,children:"Refresh"}):Object(s.jsx)(s.Fragment,{}),Object(s.jsx)("button",{onClick:function(){a(null),j(null),document.getElementById("themeInput").value=null},children:"New Name"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:N,children:"Generate Name"})]})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),l(e),r(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(o,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.7fe1052c.chunk.js.map