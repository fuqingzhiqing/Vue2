import{d as R,u as $,a as z,b as B,r as g,c as w,e as F,f as u,o as K,g as U,h as s,w as a,i as o,j as H,l as L,k as j,m as D,p as T,n as A,q as v,E as x,_ as G}from"./index-8d33f3e5.js";function y(e){return e!==""}const J=()=>{let e="",r=new Date().getHours();if(console.log(r,e),r<=9)return e="早上";if(r<=12)return e="上午";if(r<=14)return e="中午";if(r<=18)return e="下午";if(r>18)return e="晚上"},h=e=>(T("data-v-7d199029"),e=e(),A(),e),M={class:"login_container"},O=h(()=>v("h1",null,"Hello",-1)),P=h(()=>v("h2",null,"欢迎来到 -- 易购",-1)),Q=R({__name:"index",setup(e){const r=$(),k=z(),V=B();let i=g(!1),c=g(),n=w({username:"admin",password:"111111"}),b=w({username:[{required:!0,message:"用户名不能为空"}],password:[{required:!0,message:"密码不能为空"}]}),S=F(()=>!(y(n.username)&&y(n.password)));const _=()=>{V.userLogin(n).then(l=>{if(l!=="ok")return;i.value=!1;let t=k.query.redirect;r.push({path:t||"/"}),x({type:"success",title:`嗨.${J()}好! 张Sir`,message:"登录成功"})}).catch(l=>{typeof l=="string"&&(i.value=!1,x({type:"error",title:l,message:"登录失败"}))})},q=l=>{l&&(l.validate(t=>{if(t)console.log("表单校验成功");else return console.log("error 表单校验失败"),!1}),i.value=!0,_())},C=()=>{i.value=!0,_()};return(l,t)=>{const f=u("el-col"),m=u("el-input"),p=u("el-form-item"),E=u("el-button"),I=u("el-form"),N=u("el-row");return K(),U("div",M,[s(N,null,{default:a(()=>[s(f,{span:12,xs:0}),s(f,{span:12,xs:24},{default:a(()=>[s(I,{class:"login_form",ref_key:"loginFromRef",ref:c,rules:o(b),model:o(n)},{default:a(()=>[O,P,s(p,{prop:"username"},{default:a(()=>[s(m,{"prefix-icon":o(H),size:"large",modelValue:o(n).username,"onUpdate:modelValue":t[0]||(t[0]=d=>o(n).username=d)},null,8,["prefix-icon","modelValue"])]),_:1}),s(p,{prop:"password"},{default:a(()=>[s(m,{type:"password","prefix-icon":o(L),size:"large",modelValue:o(n).password,"onUpdate:modelValue":t[1]||(t[1]=d=>o(n).password=d),"show-password":"",onKeyup:j(C,["enter"])},null,8,["prefix-icon","modelValue","onKeyup"])]),_:1}),s(p,null,{default:a(()=>[s(E,{loading:o(i),disabled:o(S),class:"login_btn",type:"primary",size:"large",onClick:t[2]||(t[2]=d=>q(o(c)))},{default:a(()=>[D("登录")]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["rules","model"])]),_:1})]),_:1})])}}});const X=G(Q,[["__scopeId","data-v-7d199029"]]);export{X as default};
