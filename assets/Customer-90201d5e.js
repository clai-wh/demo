import{W as n,X as d,o as u,a as p,b as e,t as f,Y as _,Z as h,$ as v,a0 as b}from"./index-8ff9d807.js";import{E as g}from"./style.scss_vue_type_style_index_0_src_true_lang-bdf39dca.js";const y={name:"enquiry-customer",class:"form",method:"POST",action:"https://formsubmit.co/cc363f8980a2fcf38e19c31a78d1a019",enctype:"multipart/form-data"},x=e("input",{type:"hidden",id:"formId",name:"formId",value:"Customer Service Helpline"},null,-1),C=e("div",{class:"row"},[e("input",{class:"form-inp",name:"name",placeholder:"Name"}),e("input",{class:"form-inp",type:"email",name:"email",placeholder:"Email",inputmode:"email"}),e("input",{class:"form-inp",type:"tel",name:"tel",placeholder:"Phone",inputmode:"tel"})],-1),S=e("div",{class:"row"},[e("input",{class:"form-inp",name:"storeName",placeholder:"Store Name"}),e("input",{class:"form-inp",name:"claim",placeholder:"Claim"})],-1),N={class:"row flex-col"},w=e("span",{class:"label-txt"},"Attachment",-1),B={class:"inp-label",for:"select-file"},E=e("span",{class:"label-text"},"Select File",-1),k={class:"select-file"},q=e("div",{class:"row"},[e("textarea",{class:"form-inp message",name:"message",placeholder:"Message"})],-1),M=Object.assign({name:"EnquiryCustomer"},{__name:"Customer",emits:["submit"],setup(V,{emit:i}){const c=i,s=n();function m(a){const o=a.target.files[0];s.value=o}const t=n(!1);d(()=>{t.value=!1});function r(){t.value=!0,c("submit","enquiry-customer")}return(a,o)=>{var l;return u(),p("form",y,[x,C,S,e("div",N,[w,e("label",B,[E,e("div",k,f((l=s.value)==null?void 0:l.name),1),e("input",{hidden:"",id:"select-file",type:"file",name:"file",onChange:m},null,32)])]),q,_(v(g),{loading:t.value,class:"submit",onClick:r},{default:h(()=>[b("Send Message")]),_:1},8,["loading"])])}}});export{M as default};