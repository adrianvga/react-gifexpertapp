(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(7),r=n.n(c),i=(n(16),n(2)),s=n(1),u=n(9),o=function(e){var t=e.setCategories,n=Object(s.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(u.a)(e))})),o(""))},children:Object(a.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)}})})},j=n(10),d=n(6),l=n.n(d),f=n(8),p=function(){var e=Object(f.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=20&api_key=Dva2dV8Wkw8eeRnaW54W80vt7VpP6uAV"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.id,n=e.title,c=e.url;return console.log(t,n,c),Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:c,alt:n}),Object(a.jsx)("p",{children:n})]})},m=function(e){var t=e.category,n=function(e){var t=Object(s.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(s.useEffect)((function(){p(e).then((function(e){setTimeout((function(){c({data:e,loading:!1})}),2e3)}))}),[e]),a}(t),c=n.data,r=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(a.jsx)(b,Object(j.a)({},e),e.id)}))})]})},O=function(){var e=Object(s.useState)(["One Punch Man"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(o,{setCategories:c}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(m,{category:e},e)}))})]})};r.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9f58af41.chunk.js.map