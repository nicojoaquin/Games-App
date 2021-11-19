(this["webpackJsonpredux-app"]=this["webpackJsonpredux-app"]||[]).push([[0],{60:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(15),n=c.n(a),r=c(9),i=Object(r.b)({name:"games",initialState:{list:[],game:[],loader:!1},reducers:{setGamesList:function(e,t){e.list=t.payload},setGame:function(e,t){e.game=t.payload},setLoader:function(e,t){e.loader=t.payload}}}),l=i.actions,j=l.setGamesList,b=l.setGame,o=l.setLoader,d=i.reducer,m=c(29),u=Object(r.b)({name:"games",initialState:{list:[]},reducers:{setWishList:function(e,t){e.list=[].concat(Object(m.a)(e.list),[t.payload])}}}),h=(u.actions.setWishList,u.reducer),x=Object(r.a)({reducer:{games:d,wishList:h}}),O=c(5),g=c(6),f=c(12),p=c.n(f),v=c(18),N=c(19),w=c.n(N),k=c(2),y=c(1),L=function(e){var t=e.id,c=e.name,s=e.background_image,a=Object(k.f)();return Object(y.jsx)("div",{className:"col-lg-3 col-md-4 mb-4",children:Object(y.jsxs)("div",{className:"card bg-dark text-light h-100 rounded-3 shadow",children:[Object(y.jsx)("img",{className:"card-img-top h-75",src:s,alt:c}),Object(y.jsxs)("div",{className:"card-body",children:[Object(y.jsx)("h2",{className:"card-title fs-4",children:c}),Object(y.jsx)("hr",{}),Object(y.jsx)("button",{className:"btn btn-primary",onClick:function(){a("/game/".concat(t))},children:"Details"})]})]})})},G=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.games})),c=t.list,a=t.loader;return Object(s.useEffect)((function(){var t;e((t="https://api.rawg.io/api/games?key=838c6a84d03b4761bb2d7348c41bc18f",function(){var e=Object(v.a)(p.a.mark((function e(c){var s,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(o(!0)),e.next=4,w.a.get(t);case 4:return s=e.sent,e.next=7,s.data;case 7:a=e.sent,n=a.results,c(j(n)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:return e.prev=15,c(o(!1)),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(t){return e.apply(this,arguments)}}()))}),[e]),Object(y.jsx)("main",{className:"container mt-4",children:Object(y.jsx)("div",{className:"row p-3",children:a?Object(y.jsx)("h1",{className:"text-light",children:"Loading..."}):c.map((function(e){return Object(y.jsx)(L,Object(g.a)({},e),e.id)}))})})},_=c(7),W=(c(60),function(){return Object(y.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(y.jsxs)("div",{className:"container-fluid",children:[Object(y.jsx)(_.b,{to:"/",className:"navbar-brand",children:"Games App"}),Object(y.jsxs)("div",{className:"d-flex wish-logout",children:[Object(y.jsx)(_.b,{to:"/wishlist",className:"text-light text-decoration-none",children:"Wishlist"}),Object(y.jsx)(_.b,{to:"/",className:"text-light text-decoration-none",children:"Logout"})]})]})})}),E=function(){var e=Object(O.c)((function(e){return e.wishList})).list;return Object(y.jsxs)("section",{className:"container mt-4",children:[Object(y.jsx)("h1",{className:"text-light text-center mb-3",children:"Wish List"}),Object(y.jsx)("hr",{className:"bg-light"}),Object(y.jsx)("div",{className:"row p-3",children:e.map((function(e){return Object(y.jsx)(L,Object(g.a)({},e),e.id)}))})]})},I=function(e){e.id;var t=e.name,c=e.background_image,s=e.background_image_additional,a=e.released,n=e.metacritic,r=e.description_raw;return Object(y.jsx)("div",{className:"container-fluid text-light",children:Object(y.jsxs)("article",{className:"row mt-5 pt-5",children:[Object(y.jsxs)("div",{className:"col-lg-4 p-5 text-center",children:[Object(y.jsx)("img",{className:"img-detail",src:c,alt:t}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("img",{className:"img-detail",src:s,alt:t})]}),Object(y.jsxs)("div",{className:"col-lg-8 p-5 d-flex flex-column justify-content-evenly text-center",children:[Object(y.jsx)("h2",{className:"fs-3",children:t}),Object(y.jsx)("hr",{}),Object(y.jsxs)("h3",{className:"fs-3",children:["Release: ",a]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("h4",{className:"fs-3",children:["Metacritic: ",n]}),Object(y.jsx)("hr",{})]}),Object(y.jsx)("h5",{className:"fs-3 text-center",children:"Game info:"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("p",{className:"p-5",children:r})]})})},J=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.games})),c=t.game,a=t.loader,n=Object(k.g)().gameId;return Object(s.useEffect)((function(){var t;e((t="https://api.rawg.io/api/games/".concat(n,"?key=838c6a84d03b4761bb2d7348c41bc18f"),function(){var e=Object(v.a)(p.a.mark((function e(c){var s,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(o(!0)),e.next=4,w.a.get(t);case 4:return s=e.sent,e.next=7,s.data;case 7:a=e.sent,c(b(a)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,c(o(!1)),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(t){return e.apply(this,arguments)}}()))}),[e,n]),console.log(c),a?Object(y.jsx)("h1",{className:"text-light",children:"Loading..."}):Object(y.jsx)(I,Object(g.a)({},c),c.id)};var S=function(){return Object(y.jsx)(O.a,{store:x,children:Object(y.jsxs)(_.a,{children:[Object(y.jsx)(W,{}),Object(y.jsxs)(k.c,{children:[Object(y.jsx)(k.a,{path:"/",element:Object(y.jsx)(G,{})}),Object(y.jsx)(k.a,{path:"/wishlist",element:Object(y.jsx)(E,{})}),Object(y.jsx)(k.a,{path:"/game/:gameId",element:Object(y.jsx)(J,{})})]})]})})};c(61);n.a.render(Object(y.jsx)(S,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.7cb24389.chunk.js.map