(this.webpackJsonppathfinding=this.webpackJsonppathfinding||[]).push([[0],{28:function(e,t,n){e.exports=n(41)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(20),r=n.n(o),i=(n(33),n(34),n(8)),s=n(12),u=n(2),l=(n(35),n(21)),d=n(22),m=n(23),h=n(25),f=n(26),v=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"enqueue",value:function(e){this.push(e)}},{key:"dequeue",value:function(){return this.shift()}},{key:"peek",value:function(){return this[0]}},{key:"isEmpty",value:function(){return 0===this.length}}]),n}(Object(f.a)(Array)),j=function(e,t){var n=t.si,a=t.sj,c=t.ei,o=t.ej,r=[];r.push([c,o]);for(var i=0;(c!=n||o!=a)&&!(++i>=81);)0==c||e[c-1][o]!=e[c][o]-1?9==c||e[c+1][o]!=e[c][o]-1?0==o||e[c][o-1]!=e[c][o]-1?9==o||e[c][o+1]!=e[c][o]-1||(r.push([c,o+1]),o++):(r.push([c,o-1]),o--):(r.push([c+1,o]),c++):(r.push([c-1,o]),c--);return r},b=n(43),p=n(13),O=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]],g=function(){var e=Object(a.useState)(O),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!1),l=Object(u.a)(r,2),d=l[0],m=l[1],h=Object(a.useState)(!1),f=Object(u.a)(h,2),g=f[0],k=f[1],y=Object(a.useState)(!1),C=Object(u.a)(y,2),E=C[0],N=C[1],q=Object(a.useState)({si:9,sj:0,ei:0,ej:9}),w=Object(u.a)(q,2),S=w[0],M=w[1],x=Object(a.useState)(!1),B=Object(u.a)(x,2);B[0],B[1],Object(b.a)();Object(a.useEffect)((function(){for(var e=n,t=0,a=0,c=0,r=0,i=0;i<e.length;i++)for(var u=0;u<e[i].length;u++)0==e[i][u]?(t=i,a=u):-10==e[i][u]&&(c=i,r=u);e[t][a]=-1,e[c][r]=-1,e[S.si][S.sj]=0,e[S.ei][S.ej]=-10,o(Object(s.a)(e));var l=S.si,d=S.sj,m=S.ei,h=S.ej;document.querySelector(".node-".concat(t,"-").concat(a)).className="eachCell node-".concat(t,"-").concat(a),document.querySelector(".node-".concat(c,"-").concat(r)).className="eachCell node-".concat(c,"-").concat(r),document.querySelector(".node-".concat(l,"-").concat(d)).className="eachCell node-".concat(l,"-").concat(d," start"),document.querySelector(".node-".concat(m,"-").concat(h)).className="eachCell node-".concat(m,"-").concat(h," end")}),[S]);var G=function(e,t,n){e==S.si&&t==S.sj||e==S.ei&&t==S.ej||(document.querySelector(".node-".concat(e,"-").concat(t)).className="visual"==n?"eachCell node-".concat(e,"-").concat(t," visualCell"):"eachCell node-".concat(e,"-").concat(t," pathCell"))},A=function(e,t){if(-5!=n[e][t]){var a=n;a[e][t]=-5,o(Object(s.a)(a)),document.querySelector(".node-".concat(e,"-").concat(t)).className="eachCell node-".concat(e,"-").concat(t," wall")}else{var c=n;c[e][t]=-1,o(Object(s.a)(c)),document.querySelector(".node-".concat(e,"-").concat(t)).className="eachCell node-".concat(e,"-").concat(t)}},D=function(){E&&N(!1),g&&k(!1),d&&m(!1)};return c.a.createElement("div",{className:"container text-center"},c.a.createElement("div",{className:"row middle2 containerborder"},c.a.createElement(p.a,{variant:"dark",className:"solveBtn col-md-3 mx-3",onClick:function(){var e=function(e,t){var n=t.si,a=t.sj,c=(t.ei,t.ej,[]),o=e,r=new v;for(r.enqueue([n,a]),c.push([n,a]);!r.isEmpty();){var i=r.dequeue(),s=Object(u.a)(i,2),l=s[0],d=s[1];if(0!=l&&-5!=o[l-1][d]){if(-10==o[l-1][d]){o[l-1][d]=o[l][d]+1;break}-1==o[l-1][d]?(o[l-1][d]=o[l][d]+1,r.enqueue([l-1,d]),c.push([l-1,d])):o[l-1][d]=Math.min(o[l-1][d],o[l][d]+1)}if(9!=l&&-5!=o[l+1][d]){if(-10==o[l+1][d]){o[l+1][d]=o[l][d]+1;break}-1==o[l+1][d]?(o[l+1][d]=o[l][d]+1,r.enqueue([l+1,d]),c.push([l+1,d])):o[l+1][d]=Math.min(o[l+1][d],o[l][d]+1)}if(0!=d&&-5!=o[l][d-1]){if(-10==o[l][d-1]){o[l][d-1]=o[l][d]+1;break}-1==o[l][d-1]?(o[l][d-1]=o[l][d]+1,r.enqueue([l,d-1]),c.push([l,d-1])):o[l][d-1]=Math.min(o[l][d-1],o[l][d]+1)}if(9!=d&&-5!=o[l][d+1]){if(-10==o[l][d+1]){o[l][d+1]=o[l][d]+1;break}-1==o[l][d+1]?(o[l][d+1]=o[l][d]+1,r.enqueue([l,d+1]),c.push([l,d+1])):o[l][d+1]=Math.min(o[l][d+1],o[l][d]+1)}}var m=j(o,t);return console.log(o),[m,c,o]}(n,S),t=Object(u.a)(e,3),a=t[0],c=t[1],r=t[2];o(r);for(var i=function(e){setTimeout((function(){var t=c[e];G(t[0],t[1],"visual")}),50*e)},s=0;s<c.length;s++)i(s);for(var l=function(e){setTimeout((function(){var t=a[e];G(t[0],t[1],"path")}),50*(e+c.length))},d=0;d<a.length;d++)l(d)}},"Find Path"),c.a.createElement(p.a,{variant:"dark",className:"solveBtn col-md-3 mx-3",onClick:function(){alert("'Green Grid' -> starting point \n'Red Grid'-> endpoint \n  1\ufe0f\u20e3 Drag the green or red grid to your desired location on the grid. \n  2\ufe0f\u20e3 Click and drag your mouse to the empty cells to mark them as a wall.\n  3\ufe0f\u20e3 Click the 'Find Path' button. \u2728  ")}},"Instructions"),c.a.createElement(p.a,{variant:"dark",className:"solveBtn col-md-3 mx-3",onClick:function(){window.location.reload()}},"Reset")),c.a.createElement("div",{className:"gridContainer"},c.a.createElement("div",{className:"grid"},n.map((function(e,t){return e.map((function(e,n){return c.a.createElement("div",{onMouseDown:function(){var e,a;a=n,(e=t)!=S.si||a!=S.sj?e!=S.ei||a!=S.ej?(m(!0),A(e,a)):N(!0):k(!0)},onMouseUp:D,onMouseEnter:function(){var e,a;e=t,a=n,g?M(Object(i.a)(Object(i.a)({},S),{},{si:e,sj:a})):E?M(Object(i.a)(Object(i.a)({},S),{},{ei:e,ej:a})):d&&A(e,a)},className:"eachCell node-".concat(t,"-").concat(n)})}))})))))};var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.639fbc0a.chunk.js.map