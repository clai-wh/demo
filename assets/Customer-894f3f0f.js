import{g as r,o as c,c as u,a as e,w as a,v as o,h as f,t as h}from"./index-12303d50.js";/* empty css                                                        */const _={class:"form"},b={class:"row"},g={class:"row"},v={class:"row flex-col"},w=e("span",{class:"label-txt"},"Attachment",-1),x={class:"inp-label",for:"select-file"},N=e("span",{class:"label-text"},"选择文件",-1),V=e("div",{class:"select-file"},"未选择任何文件",-1),C={class:"row"},U=["onClick"],B=Object.assign({name:"EnquiryCustomer"},{__name:"Customer",emits:["submit"],setup(y,{emit:i}){const m=i,s=r({name:"",email:"",phone:"",storeName:"",claim:"",message:"",file:""});function d(n){n.target.files[0]}function p(){const n=h(s);m("submit",n)}return(n,l)=>(c(),u("form",_,[e("div",b,[a(e("input",{class:"form-inp",name:"name",placeholder:"Name","onUpdate:modelValue":l[0]||(l[0]=t=>s.name=t)},null,512),[[o,s.name]]),a(e("input",{class:"form-inp",type:"email",name:"email",placeholder:"Email",inputmode:"email","onUpdate:modelValue":l[1]||(l[1]=t=>s.email=t)},null,512),[[o,s.email]]),a(e("input",{class:"form-inp",type:"tel",name:"tel",placeholder:"Phone",inputmode:"tel","onUpdate:modelValue":l[2]||(l[2]=t=>s.phone=t)},null,512),[[o,s.phone]])]),e("div",g,[a(e("input",{class:"form-inp",name:"storeName",placeholder:"Store Name","onUpdate:modelValue":l[3]||(l[3]=t=>s.storeName=t)},null,512),[[o,s.storeName]]),a(e("input",{class:"form-inp",name:"claim",placeholder:"Claim","onUpdate:modelValue":l[4]||(l[4]=t=>s.claim=t)},null,512),[[o,s.claim]])]),e("div",v,[w,e("label",x,[N,V,e("input",{hidden:"",id:"select-file",type:"file",name:"file",placeholder:"未选择任何文件",onChange:d},null,32)])]),e("div",C,[a(e("textarea",{class:"form-inp message",name:"message",placeholder:"Message","onUpdate:modelValue":l[5]||(l[5]=t=>s.message=t)},null,512),[[o,s.message]])]),e("button",{type:"submit",class:"submit",onClick:f(p,["prevent"])},"Send Message",8,U)]))}});export{B as default};
