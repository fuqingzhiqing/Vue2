import{d as v,i as r,o,g as i,q as s,s as F,v as T,t as m,x as S,y as C,_ as $,z as A,f as a,A as B,F as g,B as c,w as t,h as n,C as x,D as O,G as D,r as z,H as G,T as H,I as U,a as R,b as J,u as K,m as I,J as P,K as L}from"./index-8d33f3e5.js";const j={key:0,class:"logo"},Q=["src"],W={name:"Logo"},X=v({...W,props:["fold"],setup(p){return(_,l)=>r(C).logoHidden?(o(),i("div",j,[s("img",{src:r(C).logoImg,alt:""},null,8,Q),F(s("p",null,m(r(C).title),513),[[T,!p.fold]])])):S("",!0)}});const Y=$(X,[["__scopeId","data-v-7631551f"]]),Z={name:"Menu"},ee=v({...Z,props:["menuStore"],setup(p){const _=p;let l=f=>{O.push({path:f.index})};return A(()=>{}),(f,b)=>{const u=a("el-icon"),d=a("el-menu-item"),h=a("Menu"),y=a("el-sub-menu");return o(!0),i(g,null,B(_.menuStore,e=>(o(),i(g,{key:e.path},[e.children?S("",!0):(o(),i(g,{key:0},[e.meta.hidden?S("",!0):(o(),c(d,{key:0,index:e.path,onClick:r(l)},{title:t(()=>[s("span",null,m(e.meta.title),1)]),default:t(()=>[n(u,null,{default:t(()=>[(o(),c(x(e.meta.icon)))]),_:2},1024)]),_:2},1032,["index","onClick"]))],64)),e.children&&e.children.length>1?(o(),i(g,{key:1},[e.meta.hidden?S("",!0):(o(),c(y,{key:0,index:e.path},{title:t(()=>[n(u,null,{default:t(()=>[(o(),c(x(e.meta.icon)))]),_:2},1024),s("span",null,m(e.meta.title),1)]),default:t(()=>[n(h,{menuStore:e.children},null,8,["menuStore"])]),_:2},1032,["index"]))],64)):e.children&&e.children[0].children&&e.children[0].children.length==1?(o(),c(y,{key:2,index:e.path},{title:t(()=>[n(u,null,{default:t(()=>[(o(),c(x(e.meta.icon)))]),_:2},1024),s("span",null,m(e.meta.title),1)]),default:t(()=>[n(h,{menuStore:e.children[0].children},null,8,["menuStore"])]),_:2},1032,["index"])):e.children&&e.children[0].children&&e.children[0].children.length>1?(o(),c(y,{key:3,index:e.path},{title:t(()=>[n(u,null,{default:t(()=>[(o(),c(x(e.meta.icon)))]),_:2},1024),s("span",null,m(e.meta.title),1)]),default:t(()=>[n(h,{menuStore:e.children[0].children},null,8,["menuStore"])]),_:2},1032,["index"])):e.children&&e.children.length==1?(o(),i(g,{key:4},[e.children[0].meta.hidden?S("",!0):(o(),c(d,{key:0,index:e.children[0].path,onClick:r(l)},{title:t(()=>[s("span",null,m(e.children[0].meta.title),1)]),default:t(()=>[n(u,null,{default:t(()=>[(o(),c(x(e.children[0].meta.icon)))]),_:2},1024)]),_:2},1032,["index","onClick"]))],64)):S("",!0)],64))),128)}}}),te=()=>localStorage.getItem("LayoutSetting_fold"),ne=p=>{localStorage.setItem("LayoutSetting_fold",p)};let oe=D("settingStore",{state(){return{fold:te()!="false",refresh:!1}},actions:{cutFold(){this.fold=!this.fold,ne(String(this.fold))},clickRefresh(){this.refresh=!this.refresh}}});const w=oe,le={name:"Main"},re=v({...le,setup(p){let _=w(),l=z(!0);return G(()=>_.refresh,()=>{l.value=!1,U(()=>{l.value=!0})}),(f,b)=>{const u=a("router-view");return o(),c(u,null,{default:t(({Component:d})=>[n(H,{name:"fade"},{default:t(()=>[r(l)?(o(),c(x(d),{key:0})):S("",!0)]),_:2},1024)]),_:1})}}});const ae=$(re,[["__scopeId","data-v-497d2f0c"]]),ce={style:{margin:"0px 5px","vertical-align":"middle"}},se={name:"Breadcrumb"},_e=v({...se,setup(p){let _=w(),l=R();const f=()=>{_.cutFold()};return(b,u)=>{const d=a("el-icon"),h=a("el-breadcrumb-item"),y=a("el-breadcrumb");return o(),i(g,null,[n(d,{style:{"margin-right":"10px"},onClick:f},{default:t(()=>[(o(),c(x(r(_).fold?"Fold":"Expand")))]),_:1}),n(y,{"separator-icon":"ArrowRight"},{default:t(()=>[(o(!0),i(g,null,B(r(l).matched,(e,k)=>F((o(),c(h,{key:k,to:{path:e.path}},{default:t(()=>[n(d,{style:{"vertical-align":"middle"}},{default:t(()=>[(o(),c(x(e.meta.icon)))]),_:2},1024),s("span",ce,m(e.meta.title),1)]),_:2},1032,["to"])),[[T,e.meta.title]])),128))]),_:1})],64)}}}),ue=["src"],de={class:"el-dropdown-link"},ie={name:"Setting"},pe=v({...ie,setup(p){let _=w(),l=J(),f=K(),b=R(),u=()=>{_.clickRefresh()},d=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()};const h=()=>{l.removeUser(),f.push({path:"/login",query:{redirect:b.path}})};return(y,e)=>{const k=a("el-button"),E=a("arrow-down"),M=a("el-icon"),N=a("el-dropdown-item"),V=a("el-dropdown-menu"),q=a("el-dropdown");return o(),i(g,null,[n(k,{icon:"Refresh",circle:"",onClick:r(u)},null,8,["onClick"]),n(k,{icon:"FullScreen",circle:"",onClick:r(d)},null,8,["onClick"]),s("img",{src:r(l).userInif.avatar,style:{width:"24px",height:"24px",margin:"0px 10px","border-radius":"50%"}},null,8,ue),n(q,null,{dropdown:t(()=>[n(V,null,{default:t(()=>[n(N,{onClick:h},{default:t(()=>[I("退出登录")]),_:1})]),_:1})]),default:t(()=>[s("span",de,[I(m(r(l).userInif.username)+" ",1),n(M,{class:"el-icon--right"},{default:t(()=>[n(E)]),_:1})])]),_:1})],64)}}}),fe={class:"tabbar"},he={class:"tabbar_left"},me={class:"tabbar_right"},ge={name:"TabBer"},xe=v({...ge,setup(p){return(_,l)=>(o(),i("div",fe,[s("div",he,[n(_e)]),s("div",me,[n(pe)])]))}});const ye=$(xe,[["__scopeId","data-v-fdb2ea28"]]);let Se=D("RouterStore",{state:()=>({menuRouter:P}),actions:{},getters:{}});const ve=Se,be={class:"layout_container"},ke={name:"Layout"},$e=v({...ke,setup(p){let _=ve(),l=w(),f=R();return(b,u)=>{const d=a("el-menu"),h=a("el-scrollbar");return o(),i("div",be,[s("div",{class:L(["layout_slider",{fold:r(l).fold}])},[n(Y,{fold:r(l).fold},null,8,["fold"]),n(h,{class:"scrollbar"},{default:t(()=>[n(d,{"background-color":"#001529","text-color":"white","active-text-color":"yellowgreen",collapse:r(l).fold,"default-active":r(f).path},{default:t(()=>[n(ee,{menuStore:r(_).menuRouter},null,8,["menuStore"])]),_:1},8,["collapse","default-active"])]),_:1})],2),s("div",{class:L(["layout_tabbar",{fold:r(l).fold}])},[n(ye)],2),s("div",{class:L(["layout_main",{fold:r(l).fold}])},[n(ae)],2)])}}});const Ce=$($e,[["__scopeId","data-v-e9c089af"]]);export{Ce as default};
