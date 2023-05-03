import{_ as K}from"./WelcomeBase.fb4fef78.js";import{v as L,a as M,_ as z}from"./ActiveBoardBase.209f9149.js";import{q as W,r as a,s as Y,S as O,f as F,R as H,a as i,h as _,b as l,u as e,w as J,i as S,v as D,t as c,j as d,k as B,l as Q,o as u}from"./entry.bfccc7c4.js";import{f as X}from"./useFormatDigits.ff1e8856.js";import{v as Z}from"./vend.90322b11.js";import"./ModalBase.f1cd9c23.js";import"./useStrings.92ef0abb.js";const ee={class:"rounded-md bg-gray-100 p-2"},te={class:"flex flex-wrap justify-between mt-4 px-2"},ae={class:"rounded-md bg-white p-2 mt-3"},le=["onSubmit"],se={class:"mt-3"},re=l("label",{for:"subject",class:"block mb-3 font-medium text-lg pl-1"},"Mobile Number",-1),ne={key:0,class:"mt-1 text-red-600"},oe={key:1,class:"mt-1 text-red-600"},ie={class:"mt-3"},ue=l("label",{for:"sender",class:"block mb-3 font-medium text-lg pl-1"},"Amount",-1),ce={class:"mt-2 text-green-600"},de={key:2,class:"mt-1 text-red-600"},me={key:0},ve={key:1},pe={class:"text-center p-2 mt-3"},fe=["disabled"],be={key:0,class:"animate-spin h-7 w-7 -mb-2 mr-3 pt-2 border-r-2 border-b-2 border-l-2 border-whtie rounded-full inline-block"},_e={key:4,class:"text-center p-2 mt-3"},he=["disabled"],Be={__name:"index",setup(ge){const m=W(),T=Z();let y=a({}),w=a({}),k=a({}),E=a({});const t=a({recipient:"",bouquet:null,biller_code:"",phone:"",type:"Airtime",network:"",country:"NG",amount:null,charge_amount:null,face_amount:0,famount:"₦0",userId:m.details.track_id,transactionType:"airtime-payment",paymentChannel:"Simhosting",charge:.5,currency:m.details.currency});a([]);const h=Y();let f=a(""),x=a(0),N=a([]);a(0),a("");let A=a({}),V=a(!1),n=a({}),s=a(!1),v=a(5),b=a(!1),q=a();const $=()=>{s.value=!0,q.value=setInterval(R,1e3)},G=()=>{clearInterval(q.value),s.value=!1,v.value=5,b.value=!1};O(v,()=>{v.value<=0&&(clearInterval(q.value),b.value=!0,C())});const R=()=>{v.value--},P=()=>{if(N.value.length>0){let r=N.value.find(p=>p.standard_name==f.value.toLowerCase()+"_airtime"),o=r.pricing;o=="value"?t.value.amount=Number(r[m.details.type+"_price"]):o=="percentage"&&(x.value=Math.round(t.value.amount-t.value.amount*Number(r[m.details.type+"_percentage"]/100))),t.value.face_amount=t.value.amount;let g=X(x.value);t.value.famount=m.details.currency=="NGN"?`₦${g}`:`$${g}`,s.value=!1}};async function C(){s.value=!0,t.value.charge_amount=x.value,t.value.network=f.value;try{await T.buyAirtime(t.value).then(r=>{s.value=!1,n.value=r,m.getUserDetails(m.details.track_id)})}catch(r){n.value=r,s.value=!1}finally{v.value=5,b.value=!1}}const I=F(()=>s.value==!0||V.value==!0||A.value.status==!1||t.value.recipient.length==0||t.value.amount<=0);O(()=>h.query.network,r=>{t.value.recipient="",f.value=null,t.value.biller_code="",t.value.phone="",t.value.type="",t.value.country="",t.value.amount="",t.value.famount="₦0",A.value={},n.value={},t.value.bouquet=null});function U(){y.value=L(t.value.recipient),w.value=M(t.value.recipient,11),k.value=L(t.value.amount),E.value=M(t.value.amount,11)}return H(()=>{if(h.query.network){h.query.network.length>0&&(f.value=h.query.network);{let r=T.services2.filter(o=>o.module=="Airtime"&&o.submodule==f.value);r.length>0&&(N.value=r)}}}),(r,o)=>{const g=K,p=z;return u(),i("div",null,[_(g),l("div",ee,[l("div",te,[_(p,{disabler:e(s),class:"w-1/5 h-32",icon:"mtn.jpg",text:"MTN",link:"dashboard-vtuairtime",prefix:"newtork",query:{network:"MTN"}},null,8,["disabler"]),_(p,{disabler:e(s),class:"w-1/5 h-32",icon:"glo.jpg",text:"GLO",link:"dashboard-vtuairtime",prefix:"newtork",query:{network:"GLO"}},null,8,["disabler"]),_(p,{disabler:e(s),class:"w-1/5 h-32",icon:"airtel.jpg",text:"AIRTEL",link:"dashboard-vtuairtime",prefix:"newtork",query:{network:"AIRTEL"}},null,8,["disabler"]),_(p,{disabler:e(s),class:"w-1/5 h-32",icon:"9mobile.jpg",text:"9MOBILE",link:"dashboard-vtuairtime",prefix:"newtork",query:{network:"9MOBILE"}},null,8,["disabler"])]),l("div",ae,[l("form",{onSubmit:J(C,["prevent"])},[l("div",se,[re,S(l("input",{type:"text",onKeyup:U,"onUpdate:modelValue":o[0]||(o[0]=j=>e(t).recipient=j),id:"subject",class:"p-3 rounded-md w-full ring-0 border border-gray-200"},null,544),[[D,e(t).recipient]])]),e(y).status?d("",!0):(u(),i("p",ne,c(e(y).message),1)),e(w).status?d("",!0):(u(),i("p",oe,c(e(w).message),1)),l("div",ie,[ue,S(l("input",{type:"number",min:"0",onKeyup:P,"onUpdate:modelValue":o[1]||(o[1]=j=>e(t).amount=j),id:"sender",class:"p-3 rounded-md w-full ring-0 border border-gray-200",placeholder:"3000"},null,544),[[D,e(t).amount]])]),l("p",ce,"You will be charged "+c(e(t).famount)+" for this Airtime Purchase",1),e(k).status?d("",!0):(u(),i("div",de,c(e(k).message),1)),e(n)?(u(),i("div",{key:3,class:B(["rounded-md p-3 mt-3",{"text-red-600 bg-red-600/[.2]":e(n).status=="error","text-green-600 bg-green-600/[.2]":e(n).status=="success"}])},[e(n).status=="error"?(u(),i("p",me,c(e(n).message),1)):d("",!0),e(n).status=="success"?(u(),i("p",ve,c(e(n).message),1)):d("",!0)],2)):d("",!0),l("div",pe,[l("button",{disabled:e(I),class:B([{"opacity-50":e(I)},"p-3 px-10 bg-[#0f8B8D] w-full lg:w-1/2 text-white rounded-md font-bold text-md hover:bg-[#0a5556]"]),onClick:$},[e(s)?(u(),i("span",be)):d("",!0),Q(" Purchase "+c(r.$route.query.network)+" Airtime",1)],10,fe)]),e(s)?(u(),i("div",_e,[l("button",{disabled:e(b),onClick:G,class:B([{"opacity-50":e(b)},"p-2 bg-black w-full lg:w-1/2 text-white rounded-md font-bold text-lg"])}," Cancel ("+c(e(v))+") ",11,he)])):d("",!0)],40,le)])])])}}};export{Be as default};
