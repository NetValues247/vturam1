import{o as a,a as r,c as l,E as d,b as s,k as o,t as i,j as n,G as u}from"./entry.bfccc7c4.js";function k(e){var t=/[a-z]+/i;return e.length==0?{status:!1,message:""}:t.test(e)?{status:!1,message:"This field can only contain numeric characters"}:{status:!0,message:"Field contains numeric characters only."}}function B(e,t){return e.length>0?e.length!=t?{status:!1,message:"This field must contain exactly "+t+" characters"}:{status:!0,message:"Field passes the validation"}:{status:!1,message:""}}const h={class:"text-center"},m=["src"],g={class:"mt-2 font-medium text-xs lg:text-lg"},b={key:1},v={class:"text-center"},x=["src"],f={class:"mt-2 font-medium text-xs lg:text-lg"},q={__name:"ActiveBoardBase",props:{icon:String,text:String,link:String,params:Object,query:Object,disabler:Boolean},setup(e){return(t,y)=>{const c=u;return a(),r("div",null,[e.disabler?n("",!0):(a(),l(c,{key:0,to:{name:e.link,query:e.query,params:e.params}},{default:d(()=>[s("div",{class:o(["p-2 rounded-md bg-[#F7DBA7] text-center hover:shadow-xl hover:shadow-[#4B4237]/[0.3] hover:scale-105 hover:border-2 hover:border-[#5f420e]",{"bg-[#dea843] scale-110 shadow-xl shadow-[#4B4237]/[0.3] border border-[#5f420e]":t.$route.query.type==e.text||t.$route.query.network==e.text||t.$route.query.disco==e.text,"opacity-25 cursor-wait":e.disabler}])},[s("div",h,[s("img",{src:"../img/"+e.icon,class:"inline-block h-12 w-24"},null,8,m)]),s("div",g,i(e.text),1)],2)]),_:1},8,["to"])),e.disabler?(a(),r("div",b,[s("div",{class:o(["p-2 rounded-md bg-[#F7DBA7] text-center hover:shadow-xl hover:shadow-[#4B4237]/[0.3] hover:scale-105 hover:border-2 hover:border-[#5f420e]",{"bg-[#dea843] scale-110 shadow-xl shadow-[#4B4237]/[0.3] border border-[#5f420e]":t.$route.query.type==e.text||t.$route.query.network==e.text||t.$route.query.disco==e.text,"opacity-25 cursor-wait":e.disabler}])},[s("div",v,[s("img",{src:"../img/"+e.icon,class:"inline-block h-12 w-24"},null,8,x)]),s("div",f,i(e.text),1)],2)])):n("",!0)])}}};export{q as _,B as a,k as v};