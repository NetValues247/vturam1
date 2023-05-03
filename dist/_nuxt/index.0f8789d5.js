import{_ as w}from"./WelcomeBaseAdmin.fbfac59b.js";import{e as g,r as a,o as u,a as p,b as t,t as y,i as d,v as i,u as s,K as v,k as h,j as x,l as V,w as S,f as k,h as U,F as N,B as j,C as B,c as $}from"./entry.bfccc7c4.js";import"./ModalBase.f1cd9c23.js";const P=["onSubmit"],F={class:"flex flex-nowrap justify-start lg:justify-start w-[200%] lg:w-fit bg-slate-100 gap-4 mt-3 rounded-sm p-3"},M={class:"text-sm w-[10%] overflow-x-auto font-semibold"},D={class:"text-sm w-[30%] overflow-x-auto font-semibold"},A={class:"text-sm w-[30%] overflow-x-auto font-semibold"},C={class:"text-sm w-[30%] overflow-x-auto font-semibold"},O={class:"text-sm w-[30%] overflow-x-auto font-semibold"},R={class:"text-sm w-[30%] overflow-x-auto font-semibold"},T={class:"text-sm w-[30%] overflow-x-auto font-semibold"},z={class:"text-sm w-[30%] overflow-x-auto font-semibold"},E=t("option",{value:"value"},"Value",-1),K=t("option",{value:"percentage"},"Percentage",-1),L=[E,K],W={class:"text-sm w-[30%] overflow-x-auto font-semibold"},q={class:"text-sm w-[30%] overflow-x-auto font-semibold"},G=["min","disabled"],H={class:"text-sm w-[30%] overflow-x-auto font-semibold"},I=["min","disabled"],J={class:"text-sm w-[30%] overflow-x-auto font-semibold"},Q={class:"text-sm w-[30%] overflow-x-auto font-semibold"},X=["disabled","max"],Y={class:"text-sm w-[30%] overflow-x-auto font-semibold"},Z=["disabled","max"],ee={class:"text-sm w-[30%] overflow-x-auto font-semibold"},se=t("option",{value:"active"},"Active",-1),te=t("option",{value:"disabled"},"Disabled",-1),oe=[se,te],le={class:"text-center p-2 text-sm w-[30%] font-semibold"},re=["disabled"],ae={key:0,class:"animate-spin h-7 w-7 -mb-2 mr-3 pt-2 border-r-2 border-b-2 border-l-2 border-whtie rounded-full inline-block"},de={key:0,class:"bg-green-300 py-1 text-green-700 rounded-lg px-4 w-fit mx-auto mt-2"},ie={__name:"ServiceFormBase",props:{service:Object,sn:Number},setup(_){const r=_,m=g();a({}),a({}),a({}),a({});const e=a({standard_name:"",display_name:"",normal_price:"",reseller_price:"",face_price:"",face_percentage:"",module:"",module_prefix:"",module_suffix:"",submodule:"",status:"",track_id:"",pricing:"",normal_percentage:"",reseller_percentage:""});e.value.standard_name=r.service.standard_name,e.value.display_name=r.service.display_name,e.value.face_price=r.service.face_price,e.value.face_percentage=r.service.face_percentage,e.value.reseller_price=r.service.reseller_price,e.value.normal_price=r.service.normal_price,e.value.submodule=r.service.submodule,e.value.module=r.service.module,e.value.status=r.service.status,e.value.module_prefix=r.service.module_prefix,e.value.module_suffix=r.service.module_suffix,e.value.track_id=r.service.track_id,e.value.pricing=r.service.pricing,e.value.normal_percentage=r.service.normal_percentage,e.value.reseller_percentage=r.service.reseller_percentage,a({}),a(!1);let f=a({});a(!1);let c=a(!1);const b=async()=>{c.value=!0;try{await m.updateService(e.value).then(n=>{c.value=!1,f.value=n,m.getServices()})}catch(n){c.value=!1,f.value=n}};return(n,o)=>(u(),p("form",{onSubmit:S(b,["prevent"])},[t("div",F,[t("div",M,y(_.sn+1),1),t("div",D,[d(t("input",{type:"text",disabled:"","onUpdate:modelValue":o[0]||(o[0]=l=>s(e).module=l),id:"recipient",class:"p-1 w-full rounded-md ring-0 border border-gray-200"},null,512),[[i,s(e).module]])]),t("div",A,[d(t("input",{type:"text",disabled:"","onUpdate:modelValue":o[1]||(o[1]=l=>s(e).submodule=l),id:"recipient",class:"p-1 rounded-md w-full ring-0 border border-gray-200"},null,512),[[i,s(e).submodule]])]),t("div",C,[d(t("input",{type:"text",disabled:"","onUpdate:modelValue":o[2]||(o[2]=l=>s(e).standard_name=l),id:"recipient",class:"overflow-x-auto p-1 rounded-md w-full ring-0 border border-gray-200"},null,512),[[i,s(e).standard_name]])]),t("div",O,[d(t("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=l=>s(e).display_name=l),id:"recipient",class:"p-1 overflow-x-auto rounded-md w-full ring-0 border border-gray-200"},null,512),[[i,s(e).display_name]])]),t("div",R,[d(t("input",{type:"text",disabled:"","onUpdate:modelValue":o[4]||(o[4]=l=>s(e).module_prefix=l),id:"recipient",class:"p-1 rounded-md w-full ring-0 border border-gray-200"},null,512),[[i,s(e).module_prefix]])]),t("div",T,[d(t("input",{type:"text",disabled:"","onUpdate:modelValue":o[5]||(o[5]=l=>s(e).module_suffix=l),id:"recipient",class:"p-1 rounded-md w-full ring-0 border border-gray-200"},null,512),[[i,s(e).module_suffix]])]),t("div",z,[d(t("select",{"onUpdate:modelValue":o[6]||(o[6]=l=>s(e).pricing=l),class:"p-1 rounded-md w-full ring-0 border border-gray-200"},L,512),[[v,s(e).pricing]])]),t("div",W,[d(t("input",{type:"number",step:"0.01",min:"1",disabled:"","onUpdate:modelValue":o[7]||(o[7]=l=>s(e).face_price=l),id:"amount",class:"p-1 rounded-md w-full ring-0 border border-gray-200",placeholder:"3000"},null,512),[[i,s(e).face_price]])]),t("div",q,[d(t("input",{type:"number",step:"0.01",min:s(e).face_price,disabled:s(e).pricing=="percentage","onUpdate:modelValue":o[8]||(o[8]=l=>s(e).normal_price=l),id:"amount",class:"p-1 rounded-md w-full ring-0 border border-gray-200",placeholder:"3000"},null,8,G),[[i,s(e).normal_price]])]),t("div",H,[d(t("input",{type:"number",step:"0.01",min:s(e).face_price,disabled:s(e).pricing=="percentage","onUpdate:modelValue":o[9]||(o[9]=l=>s(e).reseller_price=l),id:"amount",class:"p-1 rounded-md w-full ring-0 border border-gray-200",placeholder:"3000"},null,8,I),[[i,s(e).reseller_price]])]),t("div",J,[d(t("input",{type:"number",step:"0.01",min:"1",disabled:"","onUpdate:modelValue":o[10]||(o[10]=l=>s(e).face_percentage=l),id:"amount",class:"p-1 rounded-md w-full ring-0 border border-gray-200",placeholder:"5.0"},null,512),[[i,s(e).face_percentage]])]),t("div",Q,[d(t("input",{type:"number",step:"0.01",min:"1",disabled:s(e).pricing=="value",max:s(e).face_percentage,"onUpdate:modelValue":o[11]||(o[11]=l=>s(e).normal_percentage=l),id:"amount",class:"p-1 rounded-md w-full ring-0 border border-gray-200",placeholder:"3000"},null,8,X),[[i,s(e).normal_percentage]])]),t("div",Y,[d(t("input",{type:"number",step:"0.01",min:"1",disabled:s(e).pricing=="value",max:s(e).face_percentage,"onUpdate:modelValue":o[12]||(o[12]=l=>s(e).reseller_percentage=l),id:"amount",class:"p-1 rounded-md w-full ring-0 border border-gray-200",placeholder:"3000"},null,8,Z),[[i,s(e).reseller_percentage]])]),t("div",ee,[d(t("select",{"onUpdate:modelValue":o[13]||(o[13]=l=>s(e).status=l),class:"p-1 rounded-md w-full ring-0 border border-gray-200"},oe,512),[[v,s(e).status]])]),t("div",le,[t("button",{disabled:n.chkfields,class:h([{"opacity-50":n.chkfields},"overflow-x-auto -mt-4 p-1 bg-[#0f8B8D] text-white rounded-md font-bold text-xs hover:bg-[#0a5556]"]),type:"submit"},[s(c)?(u(),p("span",ae)):x("",!0),V(" Update ")],10,re),Object.keys(s(f)).length>0?(u(),p("p",de,"updated")):x("",!0)])])],40,P))}},ne=t("p",{class:"text-center text-2xl font-bold"},"All Services",-1),ue={class:"rounded-lg overflow-scroll bg-slate-300/[.4] mt-5 p-2"},pe=B('<div class="flex flex-nowrap gap-4 justify-start lg:justify-start w-[400%] lg:w-[200%] bg-slate-600/[.5] p-3 rounded-sm mb-4"><p class="text-sm w-[10%] font-semibold">S/N</p><p class="text-sm w-[30%] font-semibold">Module</p><p class="text-sm w-[30%] font-semibold">Sub-module</p><p class="text-sm w-[30%] font-semibold">Standard Name</p><p class="text-sm w-[30%] font-semibold">Display Name</p><p class="text-sm w-[30%] font-semibold">Module Prefix</p><p class="text-sm w-[30%] font-semibold">Module Suffix</p><p class="text-sm w-[30%] font-semibold">Pricing</p><p class="text-sm w-[30%] font-semibold">Face Price</p><p class="text-sm w-[30%] font-semibold">Normal Price</p><p class="text-sm w-[30%] font-semibold">Reseller Price</p><p class="text-sm w-[30%] font-semibold">Face Percentage</p><p class="text-sm w-[30%] font-semibold">Normal %</p><p class="text-sm w-[30%] font-semibold">Reseller %</p><p class="text-sm w-[30%] font-semibold">Status</p><p class="w-[30%] font-semibold"></p></div>',1),ce={key:0,class:"flex flex-nowrap justify-start lg:justify-around bg-slate-100 gap-4 mt-3 rounded-sm p-3"},me=t("p",null,"No services",-1),fe=[me],_e={key:1,class:""},ge={__name:"index",setup(_){const r=g();a({}),a({}),a({}),a({}),r.getServices(),console.log(r.services),a(!1);let m=a(!1);return k(()=>m.value==!0||validateapicalling.value==!0||validateapiresponse.value.status==!1),(e,f)=>{const c=w,b=ie;return u(),p("div",null,[U(c),ne,t("div",ue,[pe,s(r).services.length==0?(u(),p("div",ce,fe)):(u(),p("div",_e,[(u(!0),p(N,null,j(s(r).services,(n,o)=>(u(),$(b,{class:"w-[200%]",key:o,sn:o,service:n},null,8,["sn","service"]))),128))]))])])}}};export{ge as default};