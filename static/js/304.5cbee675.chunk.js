"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{304:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r,u=e(885),c=e(791),o=e(871),i=e(853),a=e(168),s=e(31),p=e(501),f=(0,s.ZP)(p.OL)(r||(r=(0,a.Z)(["\n  &:visited,\n  &:link {\n    color: blue;\n  }\n"]))),h=e(184);function l(){var t=(0,c.useState)([]),n=(0,u.Z)(t,2),e=n[0],r=n[1],a=(0,o.TH)();return(0,c.useEffect)((function(){i.fp().then((function(t){return r(t.results)})).catch((function(t){return console.log(t)}))}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Trening today"}),(0,h.jsx)("ul",{children:e.map((function(t){return(0,h.jsxs)("li",{children:[(0,h.jsx)(f,{to:"/movies/".concat(t.id),state:{from:a},children:t.title||t.original_name})," "]},t.id)}))})]})}},853:function(t,n,e){e.d(n,{Bt:function(){return w},LI:function(){return s},fp:function(){return i},gQ:function(){return f},y:function(){return l}});var r=e(861),u=e(757),c=e.n(u),o="834c76b3089fde7a8eb63b29983db356";function i(){return a.apply(this,arguments)}function a(){return(a=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(n)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(o)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(o,"&page=1")).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(o,"&page=1")).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=304.5cbee675.chunk.js.map