import{_ as K}from"./WelcomeBase.fb4fef78.js";import{v as A,a as T,_ as L}from"./ActiveBoardBase.209f9149.js";import{q as R,r as s,s as z,R as H,S as q,f as W,a as u,h as D,b as l,u as e,w as J,t as c,i as M,K as Q,F as X,B as Y,v as I,j as p,k as S,l as Z,o as i}from"./entry.bfccc7c4.js";import{f as ee}from"./useFormatDigits.ff1e8856.js";import{_ as V}from"./getAmount.785d5556.js";import{v as te}from"./vend.90322b11.js";import"./ModalBase.f1cd9c23.js";import"./useStrings.92ef0abb.js";const ae={class:"rounded-md bg-gray-100 p-2"},le={class:"flex flex-wrap justify-between mt-4 px-2"},se={class:"rounded-md bg-white p-2 mt-3"},ne=["onSubmit"],oe={class:"mt-3"},re={for:"subject",class:"block mb-3 font-medium text-lg pl-1"},ue=l("option",{value:"null"},"--Select product Plan--",-1),ie=["value"],de={class:"mt-3"},ce=l("label",{for:"subject",class:"block mb-3 font-medium text-lg pl-1"},"Mobile Number",-1),me=["disabled"],pe={key:0,class:"mt-1 text-red-600"},ve={key:1,class:"mt-1 text-red-600"},_e={class:"mt-3"},fe=l("label",{for:"sender",class:"block mb-3 font-medium text-lg pl-1"},"Amount ",-1),be={key:2,class:"mt-1 text-red-600"},ge={key:0},he={key:1},ye={class:"text-center p-2 mt-3"},ke=["disabled"],we={key:0,class:"animate-spin h-7 w-7 -mb-2 mr-3 pt-2 border-r-2 border-b-2 border-l-2 border-whtie rounded-full inline-block"},xe={key:4,class:"text-center p-2 mt-3"},Ne=["disabled"],Ie={__name:"index",setup(Me){const m=R(),C=te();let y=s({}),k=s({}),w=s({}),$=s({}),b=s([]);const g=z();let v=s("");s(0),s("");let r=s(!1);const t=s({recipient:"",product:null,biller_code:"",phone:"",type:"SME",country:"NG",amount:"",face_amount:0,network:"",famount:"",userId:m.details.track_id,transactionType:"smedata-payment",paymentChannel:"SIMHost_API",charge:.5,currency:m.details.currency});H(()=>{if(g.query.network){g.query.network.length>0&&(v.value=g.query.network);{let a=C.services2.filter(n=>n.module=="SME"&&n.submodule==v.value);a.length>0&&(b.value=a)}}});const E=()=>{if(b.value.length>0){let a=b.value.find(N=>N.standard_name==t.value.product),n=a.pricing;n=="value"?t.value.amount=Math.round(Number(a[m.details.type+"_price"])):n=="percentage"&&(t.value.amount=Math.round(Number(a.face_price)+Number(a.face_price)*Number(a[m.details.type+"_percentage"]/100))),t.value.face_amount=a.face_price;let h=ee(t.value.amount);t.value.famount=m.details.currency=="NGN"?`₦${h}`:`$${h}`,r.value=!1}};let d=s({}),_=s(5),f=s(!1),x=s();const P=()=>{r.value=!0,x.value=setInterval(U,1e3)},O=()=>{clearInterval(x.value),r.value=!1,_.value=5,f.value=!1};q(_,()=>{_.value<=0&&(clearInterval(x.value),f.value=!0,j())});const U=()=>{_.value--};async function j(){r.value=!0,t.value.network=v.value;try{await C.buySME(t.value).then(a=>{r.value=!1,d.value=a,m.getUserDetails(m.details.track_id)})}catch(a){d.value=a,r.value=!1}finally{_.value=5,f.value=!1}}const B=W(()=>r.value==!0||t.value.recipient.length==0||t.value.amount<=0);q(()=>g.query.network,a=>{t.value.recipient="",v.value=null,t.value.biller_code="",t.value.phone="",t.value.type="",t.value.country="",t.value.amount="",d.value={},t.value.product=null,r.value=!1});function F(){y.value=A(t.value.recipient),k.value=T(t.value.recipient,11),w.value=A(t.value.amount),$.value=T(t.value.amount,11)}return(a,n)=>{const h=K,N=L;return i(),u("div",null,[D(h),l("div",ae,[l("div",le,[D(N,{disabler:e(r),class:"w-1/5 h-32",icon:"mtn.jpg",text:"MTN",link:"dashboard-smedata",query:{network:"MTN"}},null,8,["disabler"])]),l("div",se,[l("form",{onSubmit:J(j,["prevent"])},[l("div",oe,[l("label",re,"Choose the "+c(e(v))+" Plan",1),M(l("select",{class:"p-3 rounded-md w-full ring-0 border border-gray-200","onUpdate:modelValue":n[0]||(n[0]=o=>e(t).product=o),onChange:E},[ue,(i(!0),u(X,null,Y(e(b),(o,G)=>(i(),u("option",{key:G,value:o.standard_name},c(o.display_name)+" "+c(o.pricing=="percentage"?("getAmount"in a?a.getAmount:e(V))(Number(o.face_price),Number(o[e(m).details.type+"_percentage"])):("getAmount"in a?a.getAmount:e(V))(Number(o[e(m).details.type+"_price"]),0)),9,ie))),128))],544),[[Q,e(t).product]])]),l("div",de,[ce,M(l("input",{type:"text",disabled:e(v).length==0,onKeyup:F,"onUpdate:modelValue":n[1]||(n[1]=o=>e(t).recipient=o),id:"subject",class:"p-3 rounded-md w-full ring-0 border border-gray-200"},null,40,me),[[I,e(t).recipient]])]),e(y).status?p("",!0):(i(),u("p",pe,c(e(y).message),1)),e(k).status?p("",!0):(i(),u("p",ve,c(e(k).message),1)),l("div",_e,[fe,M(l("input",{type:"text",disabled:!0,"onUpdate:modelValue":n[2]||(n[2]=o=>e(t).famount=o),id:"sender",class:"p-3 rounded-md w-full ring-0 border border-gray-200",placeholder:"3000"},null,512),[[I,e(t).famount]])]),e(w).status?p("",!0):(i(),u("div",be,c(e(w).message),1)),e(d)?(i(),u("div",{key:3,class:S(["rounded-md p-3 mt-3",{"text-red-600 bg-red-600/[.2]":e(d).status=="error","text-green-600 bg-green-600/[.2]":e(d).status=="success"}])},[e(d).status=="error"?(i(),u("p",ge,c(e(d).message),1)):p("",!0),e(d).status=="success"?(i(),u("p",he,c(e(d).message),1)):p("",!0)],2)):p("",!0),l("div",ye,[l("button",{disabled:e(B),class:S([{"opacity-50":e(B)},"p-3 px-10 bg-[#0f8B8D] w-full lg:w-1/2 text-white rounded-md font-bold text-md hover:bg-[#0a5556]"]),onClick:P},[e(r)?(i(),u("span",we)):p("",!0),Z(" Make "+c(a.$route.query.type)+" Payment",1)],10,ke)]),e(r)?(i(),u("div",xe,[l("button",{disabled:e(f),onClick:O,class:S([{"opacity-50":e(f)},"p-2 bg-black w-full lg:w-1/2 text-white rounded-md font-bold text-lg"])}," Cancel ("+c(e(_))+") ",11,Ne)])):p("",!0)],40,ne)])])])}}};export{Ie as default};
