(window["webpackJsonptetris-game"]=window["webpackJsonptetris-game"]||[]).push([[0],{15:function(e,n,t){e.exports=t(26)},20:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(8),c=t.n(a),i=(t(20),t(1)),u=function(){return Array.from(Array(20),function(){return new Array(12).fill([0,"clear"])})},l=function(e,n,t){for(var r=t.x,o=t.y,a=0;a<e.tetromino.length;a+=1)for(var c=0;c<e.tetromino[a].length;c+=1)if(0!==e.tetromino[a][c]&&(!n[a+e.pos.y+o]||!n[a+e.pos.y+o][c+e.pos.x+r]||"clear"!==n[a+e.pos.y+o][c+e.pos.x+r][1]))return!0},f=t(2),s=t(3),d=t(9),p=t.n(d);function b(){var e=Object(f.a)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n  \n  aside {\n  width: 100%;\n  max-width: 200px;\n  display: block;\n  padding: 0 20px;\n  }\n"]);return b=function(){return e},e}function m(){var e=Object(f.a)(["\n  width:100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n"]);return m=function(){return e},e}var v=s.a.div(m(),p.a),g=s.a.div(b());var O=t(12),h={0:{shape:[[0]],color:"0,0,0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80,227,230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36,95,223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223,173,36"},O:{shape:[["O","O"],["O","O"]],color:"223,217,36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48,211,56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132,61,198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227,78,78"}},x=function(){var e="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return h[e]};function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var j=function(){var e=Object(r.useState)({pos:{x:0,y:0},tetromino:h[0].shape,collided:!1}),n=Object(i.a)(e,2),t=n[0],o=n[1],a=function(e,n){var t=e.map(function(n,t){return e.map(function(e){return e[t]})});return n>0?t.map(function(e){return e.reverse()}):t.reverse()},c=Object(r.useCallback)(function(){o({pos:{x:4,y:0},tetromino:x().shape,collided:!1})},[]);return[t,function(e){var n=e.x,t=e.y,r=e.collided;o(function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(t,!0).forEach(function(n){Object(O.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},e,{pos:{x:e.pos.x+=n,y:e.pos.y+=t},collided:r})})},c,function(e,n){var r=JSON.parse(JSON.stringify(t));r.tetromino=a(r.tetromino,n);for(var c=r.pos.x,i=1;l(r,e,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return a(r.tetromino,-n),void(r.pos.x=c);o(r)}]},w=function(e,n){var t=Object(r.useState)(u()),o=Object(i.a)(t,2),a=o[0],c=o[1],l=Object(r.useState)(0),f=Object(i.a)(l,2),s=f[0],d=f[1];return Object(r.useEffect)(function(){d(0);var t=function(t){var r=t.map(function(e){return e.map(function(e){return"clear"===e[1]?[0,"clear"]:e})});return e.tetromino.forEach(function(n,t){n.forEach(function(n,o){0!==n&&(r[t+e.pos.y][o+e.pos.x]=[n,"".concat(e.collided?"merged":"clear")])})}),e.collided?(n(),function(e){return e.reduce(function(n,t){return-1===t.findIndex(function(e){return 0===e[0]})?(d(function(e){return e+1}),n.unshift(new Array(e[0].length).fill([0,"clear"])),n):(n.push(t),n)},[])}(r)):r};c(function(e){return t(e)})},[e,n]),[a,c,s]};function E(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n"]);return E=function(){return e},e}var S=s.a.div(E(),function(e){return e.height},function(e){return e.width},function(e){return e.width});function k(){var e=Object(f.a)(["\n     width: auto;\n     background: rgba(",", 0.8);\n     border: ",";\n     border-top-color: rgba(",", 1);\n     border-right-color: rgba(",", 1);\n     border-bottom-color: rgba(",", 0.1);\n     border-left-color: rgba(",", 0.3);\n "]);return k=function(){return e},e}var I=s.a.div(k(),function(e){return e.color},function(e){return 0===e.type?"0px solid":"4px solid"},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color}),J=o.a.memo(function(e){var n=e.type;return o.a.createElement(I,{type:n,color:h[n].color},console.log("rerender"))}),P=function(e){var n=e.stage;return o.a.createElement(S,{width:n[0].length,height:n.length},n.map(function(e){return e.map(function(e,n){return o.a.createElement(J,{key:n,type:e[0]})})}))};function L(){var e=Object(f.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"]);return L=function(){return e},e}var T=s.a.div(L(),function(e){return e.gameOver?"red":"#999"}),A=function(e){var n=e.gameOver,t=e.text;return o.a.createElement(T,{gameOver:n},t)};function Z(){var e=Object(f.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  color: white;\n  background: #333;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"]);return Z=function(){return e},e}var z=s.a.div(Z()),C=function(e){var n=e.callback;return o.a.createElement(z,{onClick:n},"Start Game")},D=function(){var e=Object(r.useState)(null),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(!1),f=Object(i.a)(c,2),s=f[0],d=f[1],p=j(),b=Object(i.a)(p,4),m=b[0],O=b[1],h=b[2],x=b[3],y=w(m,h),E=Object(i.a)(y,3),S=E[0],k=E[1],I=function(e){var n=Object(r.useState)(0),t=Object(i.a)(n,2),o=t[0],a=t[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],f=u[1],s=Object(r.useState)(0),d=Object(i.a)(s,2),p=d[0],b=d[1],m=[40,100,300,1200],v=Object(r.useCallback)(function(){e>0&&(a(function(n){return n+m[e-1]*(p+1)}),f(function(n){return n+e}))},[p,m,e]);return Object(r.useEffect)(function(){v()},[v,e,o]),[o,a,l,f,p,b]}(E[2]),J=Object(i.a)(I,6),L=J[0],T=J[1],Z=J[2],z=J[3],D=J[4],N=J[5];console.log("re-render");var G=function(e){l(m,S,{x:e,y:0})||O({x:e,y:0})},M=function(){Z>10*(D+1)&&(N(function(e){return e+1}),a(1e3/(D+1)+200)),l(m,S,{x:0,y:1})?(m.pos.y<1&&(console.log("Game Over"),d(!0),a(null)),O({x:0,y:0,collided:!0})):O({x:0,y:1,collided:!1})},W=function(e){var n=e.keyCode;s||(37===n?G(-1):39===n?G(1):40===n?(console.log("intervalOFF"),a(null),M()):38===n&&x(S,1))};return function(e,n){var t=Object(r.useRef)();Object(r.useEffect)(function(){t.current=e},[e]),Object(r.useEffect)(function(){if(null!==n){var e=setInterval(function(){t.current()},n);return function(){clearInterval(e)}}},[n])}(function(){M()},t),o.a.createElement(v,{role:"button",tabIndex:"0",onKeyDown:function(e){return W(e)},onKeyUp:function(e){var n=e.keyCode;s||40===n&&(console.log("inverval ON"),a(1e3/(D+1)+200))}},o.a.createElement(g,null,o.a.createElement(P,{stage:S}),o.a.createElement("aside",null,s?o.a.createElement(A,{gameOver:s,text:"Game Over"}):o.a.createElement("div",null,o.a.createElement(A,{text:"Score: ".concat(L)}),o.a.createElement(A,{text:"Rows: ".concat(Z)}),o.a.createElement(A,{text:"Level: ".concat(D)})),o.a.createElement(C,{callback:function(){k(u()),a(1e3),h(),d(!1),T(0),z(0),N(0)}}),o.a.createElement("div",{className:"divMessage"}," This is a Web Game, you can't play in mobile devices for the moment. "))))},N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,n,t){e.exports=t.p+"static/media/bg.2810fe6b.png"}},[[15,1,2]]]);
//# sourceMappingURL=main.7818674e.chunk.js.map