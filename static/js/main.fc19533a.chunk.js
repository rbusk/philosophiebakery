(this.webpackJsonpphilosophiebakery=this.webpackJsonpphilosophiebakery||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/NeutraText-Book.cc211c16.ttf"},56:function(e,t,a){e.exports=a.p+"static/media/german_chocolate_pecan_cake.cfd27ddd.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/yellow_cake.f3a38f31.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/pumpkin_pie_placeholders.d852ee29.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/full_orange_spread.a34d9571.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/golden_wedding_cake.44f924c6.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/wedding_cake_flavor_cupcakes.1c3cac6c.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/pride_cookies.a900e4f7.jpg"},71:function(e,t,a){e.exports=a(89)},87:function(e,t,a){e.exports=a.p+"static/media/lotr_cookies.9a21185e.jpg"},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),r=a.n(l),c=a(65),i=a(116),s=a(114),m=a(125),u=a(46),p=a(112),d=a(115),f=a(117),g=a(128),h=a(127),k=a(119),E=a(120),b=a(126),w=a(129),x=a(8),y=a(30),j=a(55),B=a.n(j),C=a(36),_=a.n(C),T={fontFamily:"NeutraTextBook",fontStyle:"normal",src:"\n      local('NeutraTextBook'),\n      local('NeutraTextBook'),\n      url(".concat(_.a,") format('ttf')\n    ")},v=Object(p.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},menuTabRoot:{minWidth:"0px",marginRight:"10px"}}})),N=Object(c.a)({palette:{primary:{main:"#B4B4DA"},secondary:{main:"#440044"}},overrides:{MuiCssBaseline:{"@global":{"@font-face":[T]}}}}),O=[{path:"/",title:"Home"},{path:"/cakes",title:"Cakes"},{path:"/cookies",title:"Cookies"},{path:"/weddings",title:"Weddings"}],M=function(){var e=Object(x.f)(),t=o.a.useState(e.pathname),a=Object(u.a)(t,2),n=a[0],l=a[1],r=v(),c=o.a.useState(null),m=Object(u.a)(c,2),p=m[0],j=m[1],C=function(){j(null)};return o.a.createElement(s.a,{theme:N},o.a.createElement(d.a,null,o.a.createElement(i.a,null,o.a.createElement(f.a,{variant:"h6",className:r.title},"Philosophie Bakery"),o.a.createElement(g.a,{smDown:!0},o.a.createElement(h.a,{value:n,onChange:function(e,t){l(t)}},O.map((function(e){return o.a.createElement(k.a,{to:e.path,value:e.path,component:y.b,label:e.title,classes:{root:r.menuTabRoot}})})))),o.a.createElement(g.a,{mdUp:!0},o.a.createElement(E.a,{color:"secondary","aria-label":"add an alarm",onClick:function(e){j(e.currentTarget)}},o.a.createElement(B.a,null)),o.a.createElement(b.a,{id:"simple-menu",anchorEl:p,keepMounted:!0,open:Boolean(p),onClose:C,MenuListProps:{style:{padding:0}}},O.map((function(e){return o.a.createElement(w.a,{component:y.b,to:e.path,classes:{root:r.MuiMenuItem},onClick:function(){l(e.path),C()}},e.title)})))))))},S=a(16),L=a(118),D=a(121),R=a(122),W=a(123),F=a(124),P=Object(p.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{width:"100%",height:"100%",transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"},gridListTile:{backgroundColor:"transparent",borderRadius:"15px",boxShadow:"3px 3px 5px rgba(0, 0, 0, 0.3)"}}})),A=function(e){var t=P(),a=e.items||[],n=Object(S.a)(),l=Object(L.a)(n.breakpoints.up("lg")),r=Object(L.a)(n.breakpoints.between("sm","lg")),c=o.a.useMemo((function(){return l?5:r?3:2}),[l,r]);return o.a.createElement("div",{className:t.root},o.a.createElement(D.a,{cellHeight:200,spacing:15,cols:c,className:t.gridList},a.map((function(e,a){return o.a.createElement(R.a,{key:e.title,cols:e.cols||1,rows:e.rows||1,classes:{tile:t.gridListTile}},o.a.createElement(W.a,{component:"img",style:{width:"100%",objectFit:"scale-down"},key:a,image:e.img,alt:e.title}),o.a.createElement(F.a,{title:e.title,titlePosition:"top",className:t.titleBar}))}))))},G=a(56),H=a.n(G),I=a(57),J=a.n(I),U=a(58),Z=a.n(U),q=a(59),z=a.n(q),K=(a(87),a(60)),Q=a.n(K),V=a(61),X=a.n(V),Y=a(62),$=a.n(Y),ee=[{img:H.a,title:"Cakes",cols:2,rows:2},{img:Q.a,title:"Weddings",cols:2,rows:2},{img:J.a,title:"Custom Desserts",cols:1,rows:2},{img:$.a,title:"Cookies",cols:1,rows:1},{img:X.a,title:"Cake Tastings",cols:1,rows:1},{img:Z.a,title:"Seasonal Treats",cols:1,rows:1},{img:z.a,title:"Event Catering",cols:2,rows:1}],te=function(){return o.a.createElement(m.a,{height:"100%"},o.a.createElement(A,{items:ee}))},ae=function(){return"cookies"},ne=function(){return"cakes"},oe=function(){return"weddings"},le=function(){return"contact-us"},re={fontFamily:"NeutraTextBook",fontStyle:"normal",src:"\n    local('NeutraTextBook'),\n    local('NeutraTextBook'),\n    url(".concat(_.a,") format('ttf')\n  ")},ce=Object(c.a)({palette:{primary:{main:"#B4B4DA"},secondary:{main:"#edeff2"}},overrides:{MuiCssBaseline:{"@global":{"@font-face":[re],backgroundColor:"#edeff2"}}}}),ie=function(){return o.a.createElement("div",null,o.a.createElement(M,null),o.a.createElement(i.a,null),o.a.createElement(s.a,{theme:ce},o.a.createElement(m.a,{pt:2,pl:1,pr:1,bgcolor:"secondary.main"},o.a.createElement(x.c,null,o.a.createElement(x.a,{path:"/cookies"},o.a.createElement(ae,null)),o.a.createElement(x.a,{path:"/cakes"},o.a.createElement(ne,null)),o.a.createElement(x.a,{path:"/weddings"},o.a.createElement(oe,null)),o.a.createElement(x.a,{path:"/contact-us"},o.a.createElement(le,null)),o.a.createElement(x.a,{path:"/"},o.a.createElement(te,null))))))};a(88);r.a.render(o.a.createElement(y.a,{basename:"/philosophiebakery"},o.a.createElement(ie,null)),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.fc19533a.chunk.js.map