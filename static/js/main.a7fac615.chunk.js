(this.webpackJsonpphilosophiebakery=this.webpackJsonpphilosophiebakery||[]).push([[0],{53:function(e,t,a){e.exports=a.p+"static/media/bakery_cake_logo.fe037841.png"},59:function(e,t,a){e.exports=a.p+"static/media/german_chocolate_pecan_cake.cfd27ddd.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/yellow_cake.1fa54086.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/yellow_cake_large.f3a38f31.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/pumpkin_pie_placeholders.d852ee29.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/full_orange_spread.a34d9571.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/golden_wedding_cake.44f924c6.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/wedding_cake_flavor_cupcakes.1c3cac6c.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/pride_cookies.a900e4f7.jpg"},73:function(e,t,a){e.exports=a(90)},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),r=a.n(i),l=a(29),c=a(67),s=a(125),m=a(126),p=a(45),u=a(113),g=a(115),d=a(116),h=a(129),f=a(118),b=a(128),k=a(119),E=a(120),x=a(127),w=a(130),y=a(8),j=a(31),C=a(58),v=a.n(C),_=a(53),O=a.n(_),T=Object(u.a)((function(e){return{menu:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px",height:"100px"},logo:{backgroundColor:"#e8e9eb"},logoText:{textTransform:"uppercase"},menuTab:Object(l.a)({minWidth:"0px",marginRight:"10px",fontSize:"1.3rem"},e.breakpoints.down("md"),{fontSize:"1rem"}),menuItem:{minWidth:"0px",marginRight:"10px",fontSize:"20px"}}})),B=[{path:"/",title:"Home"},{path:"/cakes",title:"Cakes"},{path:"/cookies",title:"Cookies"},{path:"/weddings",title:"Weddings"}],I=function(){var e=Object(y.f)(),t=o.a.useState(e.pathname),a=Object(p.a)(t,2),n=a[0],i=a[1],r=T(),l=o.a.useState(null),c=Object(p.a)(l,2),s=c[0],u=c[1],C=function(){u(null)};return o.a.createElement(g.a,null,o.a.createElement(d.a,{classes:{root:r.menu}},o.a.createElement(m.a,{display:"flex",classes:{root:r.logo},justifyContent:"center",alignItems:"center",height:"150px",width:"150px",borderRadius:"50%",borderColor:"primary.dark",border:1},o.a.createElement("img",{src:O.a,alt:"Philosophie Bakery",style:{height:"100px",objectFit:"scaled-down"}})),o.a.createElement(h.a,{xsDown:!0},o.a.createElement(f.a,{variant:"h4",classes:{root:r.logoText}},"Philosophie Bakery")),o.a.createElement(h.a,{smDown:!0},o.a.createElement(b.a,{value:n,onChange:function(e,t){i(t)}},B.map((function(e){return o.a.createElement(k.a,{to:e.path,value:e.path,component:j.b,label:e.title,classes:{root:r.menuTab}})})))),o.a.createElement(h.a,{mdUp:!0},o.a.createElement(E.a,{color:"secondary",onClick:function(e){u(e.currentTarget)}},o.a.createElement(v.a,null)),o.a.createElement(x.a,{id:"simple-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:C,MenuListProps:{style:{padding:0}}},B.map((function(e){return o.a.createElement(w.a,{component:j.b,to:e.path,classes:{root:r.menuItem},onClick:function(){i(e.path),C()}},e.title)}))))))},S=a(16),R=a(117),L=a(121),W=a(122),z=a(123),D=a(124),M=Object(u.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},gridList:{width:"100%",height:"100%",transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},img:Object(l.a)({width:"100%"},e.breakpoints.down("sm"),{height:"100%"}),gridListTile:{height:"100%",backgroundColor:"transparent",borderRadius:"10px",boxShadow:"5px 5px 5px rgba(0, 0, 0, 0.4)"}}})),N=function(e){var t=M(),a=e.largeColumns,n=void 0===a?5:a,i=e.mediumColumns,r=void 0===i?4:i,l=e.smallColumns,c=void 0===l?2:l,s=e.items,m=void 0===s?[]:s,p=e.cellHeight,u=void 0===p?200:p,g=Object(S.a)(),d=Object(R.a)(g.breakpoints.up("lg")),h=Object(R.a)(g.breakpoints.between("sm","lg")),f=o.a.useMemo((function(){return d?n:h?r:c}),[d,h,n,r,c]);return o.a.createElement("div",{className:t.root},o.a.createElement(L.a,{cellHeight:u,spacing:15,cols:f,className:t.gridList},m.map((function(e,a){return o.a.createElement(W.a,{key:e.title,cols:d&&e.largeColumns?e.largeColumns:e.cols||1,rows:d&&e.largeRows?e.largeRows:e.rows||1,classes:{tile:t.gridListTile}},o.a.createElement(z.a,{component:"img",classes:{root:t.img},key:a,image:d&&e.largeImg?e.largeImg:e.img,alt:e.title}),o.a.createElement(D.a,{title:e.title,titlePosition:"top",className:t.titleBar}))}))))},P=a(59),H=a.n(P),F=a(60),J=a.n(F),A=a(61),U=a.n(A),Z=a(62),q=a.n(Z),G=a(63),K=a.n(G),Q=a(64),V=a.n(Q),X=a(65),Y=a.n(X),$=a(66),ee=a.n($),te=[{img:H.a,title:"Cakes",cols:2,rows:2},{img:V.a,title:"Weddings",cols:2,rows:2},{img:J.a,largeImg:U.a,title:"Custom Desserts",cols:1,rows:1,largeRows:2},{img:ee.a,title:"Cookies",cols:1,rows:1},{img:Y.a,title:"Cake Tastings",cols:1,rows:1},{img:q.a,title:"Seasonal Treats",cols:1,rows:1},{img:K.a,title:"Event Catering",cols:2,rows:1}],ae=function(){return o.a.createElement(m.a,{height:"100%"},o.a.createElement(N,{items:te}))},ne=function(){return"cookies"},oe=function(){return"cakes"},ie=function(){return"weddings"},re=function(){return"contact-us"},le=Object(c.a)(),ce=Object(c.a)({palette:{primary:{main:"#B4B4DA",light:"#e6e6ff",dark:"#8484a8"},secondary:{main:"#d6d6d6",light:"#ffffff",dark:"#a5a5a5"},logo:{main:"#e8e9eb"}},typography:{fontFamily:"NeutraText"},breakpoints:{values:{xs:300,sm:600,md:900,lg:1280,xl:1920}},overrides:{MuiTypography:{h4:Object(l.a)({},le.breakpoints.down("md"),{fontSize:"1.5rem"})}}}),se=function(){return o.a.createElement("div",{style:{height:"100%"}},o.a.createElement(s.a,{theme:ce},o.a.createElement(I,null),o.a.createElement(m.a,{mt:2,mb:2,pt:"115px",bgcolor:"secondary.main",height:"100%",overflow:"visible"},o.a.createElement(y.c,null,o.a.createElement(y.a,{path:"/cookies"},o.a.createElement(ne,null)),o.a.createElement(y.a,{path:"/cakes"},o.a.createElement(oe,null)),o.a.createElement(y.a,{path:"/weddings"},o.a.createElement(ie,null)),o.a.createElement(y.a,{path:"/contact-us"},o.a.createElement(re,null)),o.a.createElement(y.a,{path:"/"},o.a.createElement(ae,null))))))};a(89);r.a.render(o.a.createElement(j.a,{basename:"/philosophiebakery"},o.a.createElement(se,null)),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.a7fac615.chunk.js.map