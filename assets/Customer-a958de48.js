import{g as r,o as c,c as u,a as e,w as o,v as a,h as f,t as h}from"./index-869555a5.js";/* empty css                                                        */const _={class:"form"},g={class:"row"},b={class:"row"},v={class:"row flex-col"},w=e("span",{class:"label-txt"},"Attachment",-1),x={class:"inp-label",for:"select-file"},N=e("span",{class:"label-text"},"选择文件",-1),V=e("div",{class:"select-file"},"未选择任何文件",-1),C={class:"row"},U=["onClick"],B=Object.assign({name:"EnquiryCustomer"},{__name:"Customer",emits:["submit"],setup(y,{emit:i}){const m=i,l=r({name:"",email:"",phone:"",storeName:"",claim:"",message:"",file:""});function d(n){const s=n.target.files[0];console.log("file => ",s)}function p(){const n=h(l);m("submit",n)}return(n,s)=>(c(),u("form",_,[e("div",g,[o(e("input",{class:"form-inp",name:"name",placeholder:"Name","onUpdate:modelValue":s[0]||(s[0]=t=>l.name=t)},null,512),[[a,l.name]]),o(e("input",{class:"form-inp",type:"email",name:"email",placeholder:"Email",inputmode:"email","onUpdate:modelValue":s[1]||(s[1]=t=>l.email=t)},null,512),[[a,l.email]]),o(e("input",{class:"form-inp",type:"tel",name:"tel",placeholder:"Phone",inputmode:"tel","onUpdate:modelValue":s[2]||(s[2]=t=>l.phone=t)},null,512),[[a,l.phone]])]),e("div",b,[o(e("input",{class:"form-inp",name:"storeName",placeholder:"Store Name","onUpdate:modelValue":s[3]||(s[3]=t=>l.storeName=t)},null,512),[[a,l.storeName]]),o(e("input",{class:"form-inp",name:"claim",placeholder:"Claim","onUpdate:modelValue":s[4]||(s[4]=t=>l.claim=t)},null,512),[[a,l.claim]])]),e("div",v,[w,e("label",x,[N,V,e("input",{hidden:"",id:"select-file",type:"file",name:"file",placeholder:"未选择任何文件",onChange:d},null,32)])]),e("div",C,[o(e("textarea",{class:"form-inp message",name:"message",placeholder:"Message","onUpdate:modelValue":s[5]||(s[5]=t=>l.message=t)},null,512),[[a,l.message]])]),e("button",{type:"submit",class:"submit",onClick:f(p,["prevent"])},"Send Message",8,U)]))}});export{B as default};