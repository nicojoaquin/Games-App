(this["webpackJsonpredux-app"]=this["webpackJsonpredux-app"]||[]).push([[0],{75:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(17),s=n.n(c),r=n(11),i=Object(r.b)({name:"games",initialState:{list:[],game:{},filteredGames:[]},reducers:{setGamesList:function(e,t){e.list=t.payload,e.game={}},setGame:function(e,t){e.game=t.payload},setSearch:function(e,t){e.filteredGames=e.list.filter((function(e){return e.title.toLowerCase().includes(t.payload.trim().toLowerCase())}))}}}),o=i.actions,l=o.setGamesList,u=o.setGame,d=o.setSearch,j=i.reducer,b=n(5),m=n(34),h=Object(r.b)({name:"wishList",initialState:{wishList:[]},reducers:{setWishList:function(e,t){e.wishList=[].concat(Object(m.a)(e.wishList),[t.payload])},setLoadWishList:function(e,t){e.wishList=t.payload},setDeleteWishList:function(e,t){e.wishList=e.wishList.filter((function(e){return e.id!==t.payload}))},setUpdateWishList:function(e,t){e.wishList=e.wishList.map((function(e){return e.id===t.payload.id?Object(b.a)(Object(b.a)({},e),{},{played:!0}):e}))}}}),p=h.actions,x=p.setWishList,f=p.setDeleteWishList,O=p.setLoadWishList,g=p.setUpdateWishList,v=h.reducer,w=Object(r.b)({name:"ui",initialState:{loader:!1,inputValue:"",open:!1},reducers:{setLoader:function(e,t){e.loader=t.payload},setInput:function(e,t){e.inputValue=t.payload},setOpen:function(e,t){e.open=t.payload}}}),N=w.actions,y=N.setLoader,k=N.setInput,L=N.setOpen,S=w.reducer,C=Object(r.b)({name:"auth",initialState:{checking:!0,uid:null,name:null},reducers:{setChecking:function(e){e.checking=!1},setLogin:function(e,t){e.checking=!1,e.uid=t.payload.uid,e.name=t.payload.name},setLogout:function(e){e.checking=!1}}}),P=C.actions,E=P.setLogin,I=P.setChecking,G=P.setLogout,W=C.reducer,D=Object(r.a)({reducer:{games:j,wishList:v,ui:S,auth:W}}),_=n(3),F=n(10),T=n(2),q=n(0),B=function(e){var t=e.children;return Object(_.c)((function(e){return e.auth})).uid?Object(q.jsx)(T.a,{to:"/"}):t},V=n(4),A=n.n(V),H=n(6),J=n(12),R=n.n(J),U={headers:{"x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com","x-rapidapi-key":"dcb19afa2emshd5e6d499778292dp1d7971jsn69c10547df1f"}},M=function(e){var t=e.id,n=e.title,a=e.thumbnail,c=Object(T.g)();return Object(q.jsx)("div",{className:"col-lg-3 col-md-4 mb-4",children:Object(q.jsxs)("div",{className:"card bg-dark text-light rounded-3 shadow",children:[Object(q.jsx)("img",{className:"card-img-top",src:a,alt:n}),Object(q.jsxs)("div",{className:"card-body",children:[Object(q.jsx)("h2",{className:"card-title fs-4",children:n}),Object(q.jsx)("hr",{}),Object(q.jsx)("button",{className:"btn btn-primary",onClick:function(){c("/game/".concat(t,"q=").concat(n.toLowerCase()))},children:"Details"})]})]})})},z=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.games})),n=t.filteredGames,c=t.list,s=Object(_.c)((function(e){return e.ui})),r=s.inputValue,i=s.loader;Object(a.useEffect)((function(){var t;e((t="https://free-to-play-games-database.p.rapidapi.com/api/games",function(){var e=Object(H.a)(A.a.mark((function e(n){var a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(y(!0)),e.next=4,R.a.get(t,U);case 4:return a=e.sent,e.next=7,a.data;case 7:c=e.sent,n(l(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.warn(e.t0);case 14:return e.prev=14,n(y(!1)),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(t){return e.apply(this,arguments)}}()))}),[e]);return Object(q.jsx)("main",{className:"container mt-4",children:Object(q.jsx)("div",{className:"row p-3",children:i?Object(q.jsx)("h1",{className:"text-light",children:"Loading..."}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("div",{children:Object(q.jsx)("input",{type:"text",placeholder:"Buscar...",className:"form-control mb-3",onChange:function(t){var n=t.target;e(k(n.value)),e(d(r))},value:r})}),r.length>0?0===n.length?Object(q.jsx)("h2",{className:"text-danger text-center mt-3",children:"Game not found"}):n.map((function(e){return Object(q.jsx)(M,Object(b.a)(Object(b.a)({},e),{},{game:e}),e.id)})):c.map((function(e){return Object(q.jsx)(M,Object(b.a)(Object(b.a)({},e),{},{game:e}),e.id)}))]})})})},K=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.auth})).name,n=Object(_.c)((function(e){return e.ui})).open;return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)("div",{className:"text-light d-flex flex-column overflow-hidden pointer user-name",children:[Object(q.jsx)("span",{role:"button",onClick:function(){e(L(!n))},children:t}),Object(q.jsx)("div",{className:"bg-dark p-1 logOut",style:{display:n&&"block"},children:Object(q.jsx)("button",{onClick:function(){e((function(e){localStorage.clear(),e(G()),window.location.reload()}))},className:" btn text-light",children:"Sign out"})})]})})},Q=function(){var e=Object(_.c)((function(e){return e.auth})).uid;return Object(q.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(q.jsxs)("div",{className:"container-fluid",children:[Object(q.jsx)(F.b,{to:"/",className:"navbar-brand",children:"Games App"}),Object(q.jsxs)("div",{className:"d-flex wish-logout",children:[Object(q.jsx)(F.b,{to:"/wishlist",className:"text-light text-decoration-none",children:"Wishlist"}),e?Object(q.jsx)(K,{}):Object(q.jsx)(F.b,{to:"/auth",className:"text-light text-decoration-none",children:"Sign in"})]})]})})},X=n(33),Y=n.n(X),Z=function(e,t){Y.a.fire({icon:t,title:e,background:"#fff",padding:"2rem",position:"center",showConfirmButton:!1,timer:1200,customClass:{title:"alert-title"}})},$={"x-token":localStorage.getItem("token")},ee=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",a="".concat("https://primer-backend-nico.herokuapp.com/api","/").concat(e);return"get"===n?R.a.get(a):R()({method:n,url:a,data:t})},te=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",a="".concat("https://primer-backend-nico.herokuapp.com/api","/").concat(e);return"get"===n?R.a.get(a,{headers:$}):"put"===n?R.a.put(a,t,{headers:$}):R()({method:n,url:a,data:t,headers:$})},ne=function(e){var t=e.game,n=e.title,a=e.thumbnail,c=e.game_url,s=e.screenshots,r=e.genre,i=e.release_date,o=e.description,l=e.minimum_system_requirements,u=Object(_.b)(),d=Object(_.c)((function(e){return e.wishList})).wishList,j=Object(_.c)((function(e){return e.auth})).uid,b=Object(T.g)(),m={id:t.id,title:n,thumbnail:a,played:!1};return Object(q.jsx)("div",{className:"container-fluid text-light",children:Object(q.jsxs)("article",{className:"mt-5 pt-5",children:[Object(q.jsxs)("div",{className:"p-5 d-flex flex-column align-items-center",children:[Object(q.jsx)("img",{className:"rounded-3 mt-3 mb-5 img-detail",src:a,alt:n}),Object(q.jsxs)("div",{children:[Object(q.jsx)("button",{className:"btn btn-primary text-light",onClick:function(){var e=d.find((function(e){return e.id===m.id}));return j?e?Z("It's already on your wishlist!","error"):void u(function(e){return function(){var t=Object(H.a)(A.a.mark((function t(n){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,te("events",e,"post");case 3:return a=t.sent,t.next=6,a.data;case 6:t.sent.ok&&(n(x(e)),Z("Added to wishlist!","success")),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.warn(t.t0.response.data.msg);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(m)):b("/auth")},children:"Wishlist"}),Object(q.jsx)("a",{href:c,target:"blank",className:"btn btn-success text-light ms-3",children:"Play game"})]})]}),Object(q.jsxs)("div",{className:"d-flex flex-column p-5 text-center",children:[Object(q.jsx)("h2",{className:"fs-3",children:n}),Object(q.jsx)("hr",{}),Object(q.jsxs)("h3",{className:"fs-3",children:["Release date: ",i]}),Object(q.jsx)("hr",{}),Object(q.jsxs)("h4",{className:"fs-3",children:["Genre: ",r]}),Object(q.jsx)("hr",{}),Object(q.jsx)("h5",{className:"fs-3 text-center",children:"Game info:"}),Object(q.jsx)("p",{children:o}),Object(q.jsx)("br",{}),Object(q.jsx)("h5",{children:"System requirements: "}),Object(q.jsxs)("span",{children:["Graphics: ",null===l||void 0===l?void 0:l.graphics]}),Object(q.jsxs)("span",{children:["Memory: ",null===l||void 0===l?void 0:l.memory]}),Object(q.jsxs)("span",{children:["OS: ",null===l||void 0===l?void 0:l.os]}),Object(q.jsxs)("span",{children:["Processor: ",null===l||void 0===l?void 0:l.processor]}),Object(q.jsxs)("span",{children:["Storage: ",null===l||void 0===l?void 0:l.storage]})]}),Object(q.jsx)("div",{className:"screens-container",children:null===s||void 0===s?void 0:s.map((function(e,t){return Object(q.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:n+t,className:"rounded-3 screens"},t)}))})]})})},ae=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.games})).game,n=Object(_.c)((function(e){return e.ui})).loader,c=Object(T.h)().gameId;return Object(a.useEffect)((function(){var t;e((t="https://free-to-play-games-database.p.rapidapi.com/api/game?id=".concat(c),function(){var e=Object(H.a)(A.a.mark((function e(n){var a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(y(!0)),e.next=4,R.a.get(t,U);case 4:return a=e.sent,e.next=7,a.data;case 7:c=e.sent,n(u(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,n(y(!1)),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(t){return e.apply(this,arguments)}}())),e(k(""))}),[e,c]),n?Object(q.jsx)("h1",{className:"text-light",children:"Loading..."}):Object(q.jsx)(ne,Object(b.a)(Object(b.a)({},t),{},{game:t}),t.id)},ce=function(e){return function(){var t=Object(H.a)(A.a.mark((function t(n){var a,c,s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(y(!0)),t.prev=1,t.next=4,te("events");case 4:return a=t.sent,t.next=7,a.data;case 7:c=t.sent,s=c.events.filter((function(t){return t.user._id===e})),n(O(s)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.warn(t.t0);case 15:return t.prev=15,n(y(!1)),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,12,15,18]])})));return function(e){return t.apply(this,arguments)}}()},se=function(e){var t=e.game,n=e.id,a=e.title,c=e.thumbnail,s=e.played,r=e.handleNavigate,i=e.handleSub,o=e.handleEdit;return Object(q.jsx)("div",{className:"col-lg-4 col-xl-3 mb-4 gr",children:Object(q.jsxs)("div",{className:"card bg-dark text-light rounded-3 shadow wish-card",children:[Object(q.jsx)("img",{className:"card-img-top",src:c,alt:a}),Object(q.jsxs)("div",{className:"card-body",children:[Object(q.jsx)("h2",{className:"card-title fs-4",children:a}),Object(q.jsx)("hr",{}),Object(q.jsxs)("div",{className:"d-flex justify-content-evenly",children:[Object(q.jsx)("button",{className:"btn btn-primary",onClick:function(){return r(n)},children:"Details"}),Object(q.jsx)("button",{className:"btn btn-success ms-2 me-2",onClick:function(){return o(t)},children:"Played"}),Object(q.jsx)("button",{className:"btn btn-danger",onClick:function(){return i(t)},children:"Delete"})]})]}),s&&Object(q.jsx)("div",{className:"d-flex justify-content-center align-items-center new-card",children:Object(q.jsxs)("div",{className:"d-flex flex-column",children:[Object(q.jsx)("h2",{children:"Played"}),Object(q.jsx)("button",{className:"btn btn-danger mt-3",onClick:function(){return i(t)},children:"Delete"})]})})]})})},re=function(){var e=Object(_.c)((function(e){return e.wishList})).wishList,t=Object(_.c)((function(e){return e.auth})).uid,n=Object(_.b)(),c=Object(T.g)();Object(a.useEffect)((function(){n(ce(t))}),[n,t]);var s=function(e){c("/game/".concat(e))},r=function(e){return n(function(e){return function(){var t=Object(H.a)(A.a.mark((function t(n){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,te("events/".concat(e._id),{},"delete");case 3:return a=t.sent,t.next=6,a.data;case 6:t.sent.ok&&n(f(e.id)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.warn(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))},i=function(e){return n(function(e){return function(){var t=Object(H.a)(A.a.mark((function t(n){var a,c;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a={played:!0},t.next=4,te("events/".concat(e._id),a,"put");case 4:return c=t.sent,t.next=7,c.data;case 7:t.sent.ok&&n(g(e)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.warn(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(q.jsxs)("section",{className:"container mt-4",children:[Object(q.jsx)("h1",{className:"text-light text-center mb-3",children:"Wish List"}),Object(q.jsx)("hr",{className:"bg-light"}),Object(q.jsx)("div",{className:"row p-3",children:0===e.length?t?Object(q.jsx)("h2",{className:"text-secondary text-center",children:"There is no game on your wishlist"}):Object(q.jsxs)("h2",{className:"text-secondary text-center",children:["Please, ",Object(q.jsx)(F.b,{to:"/auth",children:"sign in"})," to see your wishlist"]}):e.map((function(e){return Object(q.jsx)(se,Object(b.a)(Object(b.a)({game:e},e),{},{handleNavigate:s,handleSub:r,handleEdit:i}),e.id)}))})]})},ie=n(9),oe=n(18),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(ie.a)(t,2),c=n[0],s=n[1],r=function(){s(e)},i=function(e){var t=e.target;s(Object(b.a)(Object(b.a)({},c),{},Object(oe.a)({},t.name,t.value)))};return[c,i,r]},ue=function(){var e=Object(_.b)(),t=le({logEmail:"",logPass:""}),n=Object(ie.a)(t,2),a=n[0],c=n[1],s=a.logEmail,r=a.logPass;return Object(q.jsxs)("form",{className:"bg-light rounded-3 p-5 authForm",onSubmit:function(t){var n,a,c;t.preventDefault(),e((n=s,a=r,c="auth/login",function(){var e=Object(H.a)(A.a.mark((function e(t){var s,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee(c,{email:n,password:a},"post");case 3:return s=e.sent,e.next=6,s.data;case 6:(r=e.sent).ok&&(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(E({uid:r.uid,name:r.name}))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),Z(e.t0.response.data.msg,"error");case 13:return e.prev=13,window.location.reload(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(q.jsx)("h2",{className:"text-secondary fs-4 text-center",children:"Sign in"}),Object(q.jsxs)("div",{className:"mb-3",children:[Object(q.jsx)("input",{type:"email",className:"form-control",placeholder:" Email address",name:"logEmail",value:s,onChange:c}),Object(q.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(q.jsx)("div",{className:"mb-3",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"logPass",value:r,onChange:c})}),Object(q.jsx)("button",{type:"submit",className:"btn btn-primary w-100",children:"Submit"})]})},de=function(){var e=Object(_.b)(),t=le({regName:"",regEmail:"",regPass1:"",regPass2:""}),n=Object(ie.a)(t,2),a=n[0],c=n[1],s=a.regName,r=a.regEmail,i=a.regPass1,o=a.regPass2;return Object(q.jsxs)("form",{className:"bg-light rounded-3 p-5 authForm",onSubmit:function(t){if(t.preventDefault(),i!==o)return Z("Passwords do not match","error");var n,a,c,l;e((n=r,a=i,c=s,l="auth/new",function(){var e=Object(H.a)(A.a.mark((function e(t){var s,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee(l,{email:n,password:a,name:c},"post");case 3:return s=e.sent,e.next=6,s.data;case 6:(r=e.sent).ok&&(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(E({uid:r.uid,name:r.name}))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),Z(e.t0.response.data.msg,"error");case 13:return e.prev=13,window.location.reload(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(q.jsx)("h2",{className:"text-secondary fs-4 text-center",children:"Sign up"}),Object(q.jsx)("div",{className:"mb-3",children:Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"regName",value:s,onChange:c})}),Object(q.jsx)("div",{className:"mb-3",children:Object(q.jsx)("input",{type:"email",className:"form-control",placeholder:" Email address",name:"regEmail",value:r,onChange:c})}),Object(q.jsx)("div",{className:"mb-3",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"regPass1",value:i,onChange:c})}),Object(q.jsx)("div",{className:"mb-3",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Repeat your password",name:"regPass2",value:o,onChange:c})}),Object(q.jsx)("button",{type:"submit",className:"btn btn-primary w-100",children:"Submit"})]})},je=function(){return Object(q.jsxs)("main",{className:"auth-container",style:{minHeight:"100vh"},children:[Object(q.jsx)(ue,{}),Object(q.jsx)(de,{})]})},be=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.auth})).uid;return Object(a.useEffect)((function(){var n;e((n="auth/renew",function(){var e=Object(H.a)(A.a.mark((function e(t){var a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te(n);case 3:return a=e.sent,e.next=6,a.data;case 6:(c=e.sent).ok&&(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(E({uid:c.uid,name:c.name}))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t(I());case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),e(ce(t))}),[e,t]),Object(q.jsxs)(F.a,{children:[Object(q.jsx)(Q,{}),Object(q.jsxs)(T.d,{children:[Object(q.jsx)(T.b,{path:"/",element:Object(q.jsx)(z,{})}),Object(q.jsx)(T.b,{path:"/wishlist",element:Object(q.jsx)(re,{})}),Object(q.jsx)(T.b,{path:"/game/:gameId",element:Object(q.jsx)(ae,{})}),Object(q.jsx)(T.b,{path:"/auth",element:Object(q.jsx)(B,{children:Object(q.jsx)(je,{})})})]})]})};n(75);var me=function(){return Object(q.jsx)(_.a,{store:D,children:Object(q.jsx)(be,{})})};n(76);s.a.render(Object(q.jsx)(me,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.dfab31a3.chunk.js.map