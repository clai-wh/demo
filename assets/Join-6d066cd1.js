import{W as n,X as i,o as l,a as r,Y as c,Z as m,$ as d,b as e,a1 as p,a0 as u}from"./index-e45247c4.js";import{E as f}from"./style.scss_vue_type_style_index_0_src_true_lang-bcb34597.js";const h={name:"enquiry-join",class:"form",method:"POST",action:"https://formsubmit.co/cc363f8980a2fcf38e19c31a78d1a019"},_=e("input",{type:"hidden",id:"formId",name:"formId",value:"Join The Two Peck Crispy Chicken (Australia) Family"},null,-1),y=e("div",{class:"row"},[e("input",{class:"form-inp",name:"name",placeholder:"Name"}),e("input",{class:"form-inp",type:"email",name:"email",placeholder:"Email",inputmode:"email"}),e("input",{class:"form-inp",type:"tel",name:"tel",placeholder:"Phone",inputmode:"tel"})],-1),v=p('<span class="label-txt">Where you want to open store?</span><div class="row"><input class="form-inp" name="postCode" placeholder="PostCode"><input class="form-inp" name="state" placeholder="State"></div><div class="row"><input class="form-inp" name="reason" placeholder="How did you find us?"></div><div class="row"><textarea class="form-inp message" name="enquiry" placeholder="Enquiry"></textarea></div>',4),E=Object.assign({name:"EnquiryJoin"},{__name:"Join",emits:["submit"],setup(b,{emit:o}){const t=o,a=n(!1);i(()=>{a.value=!1});function s(){a.value=!0,t("submit","enquiry-join")}return(w,x)=>(l(),r("form",h,[_,y,v,c(d(f),{loading:a.value,class:"submit",onClick:s},{default:m(()=>[u("Send Message")]),_:1},8,["loading"])]))}});export{E as default};
