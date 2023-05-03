import{_ as $}from"./WelcomeBase.fb4fef78.js";import{v as F,_ as H}from"./ActiveBoardBase.209f9149.js";import{q as J,r as s,s as O,R,S as C,f as z,a as c,h as v,b as l,u as e,w as G,t as u,i as S,v as E,j as m,k as B,l as W,o}from"./entry.bfccc7c4.js";import{v as L}from"./vend.90322b11.js";import"./ModalBase.f1cd9c23.js";import"./useStrings.92ef0abb.js";const Q={class:"rounded-md bg-gray-100 p-2"},X={class:"flex flex-wrap justify-evenly gap-2 mt-4 px-2"},Y={class:"rounded-md bg-white p-2 mt-3"},Z=["onSubmit"],ee={class:"mt-3"},te={for:"subject",class:"block mb-3 font-medium text-lg pl-1"},ae={class:"mt-3"},se=l("label",{for:"subject",class:"block mb-3 font-medium text-lg pl-1"},"Meter Number",-1),le=["disabled"],re={key:0,class:"mt-1 text-red-600"},ie={key:1,class:"mt-1 text-green-600"},ce={key:2,class:"animate-pulse font-semibold text-yellow-600"},oe={key:3,class:"mt-1 text-red-600"},ne={key:4,class:"mt-1 text-green-600"},de={class:"mt-3"},ue=l("label",{for:"sender",class:"block mb-3 font-medium text-lg pl-1"},"Amount",-1),me={key:0},ve={key:1},pe={class:"text-center p-2 mt-3"},be=["disabled"],_e={key:0,class:"animate-spin h-7 w-7 -mb-2 mr-3 pt-2 border-r-2 border-b-2 border-l-2 border-whtie rounded-full inline-block"},ye={key:6,class:"text-center p-2 mt-3"},fe=["disabled"],qe={__name:"index",setup(he){const b=J(),k=L();let x=s({});s({}),s({}),s({});const t=s({meter_number:"",MeterType:1,biller_code:"",phone:"",type:"disco",country:"NG",amount:0,face_amount:0,recipient:"",disco_name:"",userId:b.details.track_id,transactionType:"electricity-payment",paymentChannel:"Flutterwave_API",charge:.5,currency:b.details.currency});s([]);const g=O();let y=s("");s("");let D=s(0),q=s("");R(()=>{g.query.disco&&g.query.disco.length>0&&(y.value=g.query.disco),q.value=k.services.data.find(d=>d.service_name=="electricity").service_suffix;let i=k.services.data.find(d=>d.service_name=="electricity").percentage.find(d=>d.user_type==b.details.type);D.value=i==null?0:i.value/100});let r=s({}),f=s(!1),n=s({});async function N(){f.value=!0,r.value={};try{await b.validateBill(t.value).then(i=>{r.value=i,f.value=!1})}catch(i){r.value=i,f.value=!1}}let a=s(!1),_=s(5),h=s(!1),w=s();const P=()=>{a.value=!0,w.value=setInterval(M,1e3)},T=()=>{clearInterval(w.value),a.value=!1,_.value=5,h.value=!1};C(_,()=>{_.value<=0&&(clearInterval(w.value),h.value=!0,I())});const M=()=>{_.value--};async function I(){a.value=!0,t.value.recipient=t.value.meter_number,t.value.disco_name=y.value+" "+q.value;try{await k.createBill(t.value).then(i=>{a.value=!1,n.value=i,b.getUserDetails(b.details.track_id)})}catch(i){n.value=i,a.value=!1}finally{_.value=5,h.value=!1}}const A=()=>{r.value={}},V=z(()=>a.value==!0||f.value==!0||r.value.status==!1||t.value.meter_number.length==0||t.value.amount<=0);C(()=>g.query.disco,i=>{t.value.meter_number="",y.value="",t.value.biller_code="",t.value.phone="",t.value.type="",t.value.country="",t.value.amount="",r.value={},n.value={},a.value=!1});function K(){x.value=F(t.value.meter_number)}return(i,d)=>{const U=$,p=H;return o(),c("div",null,[v(U),l("div",Q,[l("div",X,[v(p,{disabler:e(a),class:"w-1/5",icon:"ikeja-electric.jpg",text:"Ikeja",link:"dashboard-electricity",query:{disco:"Ikeja"}},null,8,["disabler"]),v(p,{disabler:e(a),class:"w-1/5",icon:"ibadan-electric.jpg",text:"Ibadan",link:"dashboard-electricity",query:{disco:"Ibadan"}},null,8,["disabler"]),v(p,{disabler:e(a),class:"w-1/5",icon:"jos-electric.jpg",text:"Jos",link:"dashboard-electricity",query:{disco:"Jos"}},null,8,["disabler"]),v(p,{disabler:e(a),class:"w-1/5",icon:"kaduna-electric.jpg",text:"Kaduna",link:"dashboard-electricity",query:{disco:"Kaduna"}},null,8,["disabler"]),v(p,{disabler:e(a),class:"w-1/5",icon:"enugu-electric.jpg",text:"Enugu",link:"dashboard-electricity",query:{disco:"Enugu"}},null,8,["disabler"]),v(p,{disabler:e(a),class:"w-1/5",icon:"eko-electric.jpg",text:"Eko",link:"dashboard-electricity",query:{disco:"Eko"}},null,8,["disabler"]),v(p,{disabler:e(a),class:"w-1/5",icon:"benin-electric.jpg",text:"Benin",link:"dashboard-electricity",query:{disco:"Benin"}},null,8,["disabler"]),v(p,{disabler:e(a),class:"w-1/5",icon:"portharcourt-electric.jpg",text:"Port Harcourt",link:"dashboard-electricity",query:{disco:"Port Harcourt"}},null,8,["disabler"])]),l("div",Y,[l("form",{onSubmit:G(I,["prevent"])},[l("div",ee,[l("label",te,"Pay Electricity Bill for "+u(e(y))+" Disco",1)]),l("div",ae,[se,S(l("input",{type:"text",disabled:e(y).length==0,onFocus:A,onKeyup:K,onBlur:N,"onUpdate:modelValue":d[0]||(d[0]=j=>e(t).meter_number=j),id:"subject",class:"p-3 rounded-md w-full ring-0 border border-gray-200"},null,40,le),[[E,e(t).meter_number]])]),e(x).status?m("",!0):(o(),c("p",re,u(e(x).message),1)),e(r).status=="success"?(o(),c("p",ie,u(e(r).message),1)):m("",!0),e(f)?(o(),c("p",ce,"Validating...")):m("",!0),e(r).status=="error"?(o(),c("p",oe,u(e(r).message),1)):m("",!0),e(r).status=="success"?(o(),c("p",ne,"Validated details : "+u(e(r).data.name)+" ("+u(e(r).data.customer)+")",1)):m("",!0),l("div",de,[ue,S(l("input",{type:"number",min:"0","onUpdate:modelValue":d[1]||(d[1]=j=>e(t).amount=j),id:"sender",class:"p-3 rounded-md w-full ring-0 border border-gray-200",placeholder:"3000"},null,512),[[E,e(t).amount]])]),e(n)?(o(),c("div",{key:5,class:B(["rounded-md p-3 mt-3",{"text-red-600 bg-red-600/[.2]":e(n).status=="error","text-green-600 bg-green-600/[.2]":e(n).status=="success"}])},[e(n).status=="error"?(o(),c("p",me,u(e(n).message)+".",1)):m("",!0),e(n).status=="success"?(o(),c("p",ve,u(e(n).message),1)):m("",!0)],2)):m("",!0),l("div",pe,[l("button",{disabled:e(V),class:B([{"opacity-50":e(V)},"p-3 px-10 bg-[#0f8B8D] w-full lg:w-1/2 text-white rounded-md font-bold text-md hover:bg-[#0a5556]"]),onClick:P},[e(a)?(o(),c("span",_e)):m("",!0),W(" Make "+u(i.$route.query.type)+" Payment",1)],10,be)]),e(a)?(o(),c("div",ye,[l("button",{disabled:e(h),onClick:T,class:B([{"opacity-50":e(h)},"p-2 bg-black w-full lg:w-1/2 text-white rounded-md font-bold text-lg"])}," Cancel ("+u(e(_))+") ",11,fe)])):m("",!0)],40,Z)])])])}}};export{qe as default};
