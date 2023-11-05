import{bx as U,by as A,ba as Y,bz as Z,b8 as pe,b3 as ge,b9 as xe,bA as Ce,bp as j,I as K,F as H,bf as z,P as w,c as p,aH as G,l as _,$ as ee,a3 as ne,k as P,bj as I,ah as ye,aL as q,d as L,M as le,u as D,o as C,e as ae,w as te,t as W,n as x,f as u,ab as E,a as y,bk as $,a4 as F,bB as N,h as O,a5 as Se,s as oe,ak as se,g as T,r as ie,_ as M,H as Le,b as Be,G as Ie,O as we,aB as Ee,j as $e,N as ue}from"./index-5f7e31e0.js";import{U as V}from"./el-input-14664d1c.js";import{e as Fe,c as R,d as re,a as J,i as Ne,f as de}from"./el-button-a5af04f1.js";import{i as Ve}from"./isEqual-8d0da0ff.js";import{j as be,m as ze,n as Ge}from"./_baseClone-ab05be3a.js";function Pe(e){return e}function Te(e,n,a){switch(a.length){case 0:return e.call(n);case 1:return e.call(n,a[0]);case 2:return e.call(n,a[0],a[1]);case 3:return e.call(n,a[0],a[1],a[2])}return e.apply(n,a)}var De=800,Oe=16,Me=Date.now;function Re(e){var n=0,a=0;return function(){var l=Me(),t=Oe-(l-a);if(a=l,t>0){if(++n>=De)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Ue(e){return function(){return e}}var Ae=U?function(e,n){return U(e,"toString",{configurable:!0,enumerable:!1,value:Ue(n),writable:!0})}:Pe;const Ke=Ae;var He=Re(Ke);const qe=He;var Q=Math.max;function We(e,n,a){return n=Q(n===void 0?e.length-1:n,0),function(){for(var l=arguments,t=-1,d=Q(l.length-n,0),b=Array(d);++t<d;)b[t]=l[n+t];t=-1;for(var o=Array(n+1);++t<n;)o[t]=l[t];return o[n]=a(b),Te(e,this,o)}}var X=A?A.isConcatSpreadable:void 0;function Je(e){return Y(e)||be(e)||!!(X&&e&&e[X])}function ce(e,n,a,l,t){var d=-1,b=e.length;for(a||(a=Je),t||(t=[]);++d<b;){var o=e[d];n>0&&a(o)?n>1?ce(o,n-1,a,l,t):ze(t,o):l||(t[t.length]=o)}return t}function Qe(e){var n=e==null?0:e.length;return n?ce(e,1):[]}function Xe(e){return qe(We(e,void 0,Qe),e+"")}function Ye(e,n){return e!=null&&n in Object(e)}function Ze(e,n,a){n=Z(n,e);for(var l=-1,t=n.length,d=!1;++l<t;){var b=pe(n[l]);if(!(d=e!=null&&a(e,b)))break;e=e[b]}return d||++l!=t?d:(t=e==null?0:e.length,!!t&&Ge(t)&&ge(b,t)&&(Y(e)||be(e)))}function je(e,n){return e!=null&&Ze(e,n,Ye)}function _e(e,n,a){for(var l=-1,t=n.length,d={};++l<t;){var b=n[l],o=xe(e,b);a(o,b)&&Ce(d,Z(b,e),o)}return d}function en(e,n){return _e(e,n,function(a,l){return je(e,l)})}var nn=Xe(function(e,n){return e==null?{}:en(e,n)});const ln=nn,ve={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:j,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},me={[V]:e=>K(e)||H(e)||z(e),change:e=>K(e)||H(e)||z(e)},B=Symbol("checkboxGroupContextKey"),an=({model:e,isChecked:n})=>{const a=w(B,void 0),l=p(()=>{var d,b;const o=(d=a==null?void 0:a.max)==null?void 0:d.value,m=(b=a==null?void 0:a.min)==null?void 0:b.value;return!G(o)&&e.value.length>=o&&!n.value||!G(m)&&e.value.length<=m&&n.value});return{isDisabled:Fe(p(()=>(a==null?void 0:a.disabled.value)||l.value)),isLimitDisabled:l}},tn=(e,{model:n,isLimitExceeded:a,hasOwnLabel:l,isDisabled:t,isLabeledByFormItem:d})=>{const b=w(B,void 0),{formItem:o}=R(),{emit:m}=ne();function s(i){var v,k;return i===e.trueLabel||i===!0?(v=e.trueLabel)!=null?v:!0:(k=e.falseLabel)!=null?k:!1}function f(i,v){m("change",s(i),v)}function h(i){if(a.value)return;const v=i.target;m("change",s(v.checked),i)}async function S(i){a.value||!l.value&&!t.value&&d.value&&(i.composedPath().some(c=>c.tagName==="LABEL")||(n.value=s([!1,e.falseLabel].includes(n.value)),await ee(),f(n.value,i)))}const r=p(()=>(b==null?void 0:b.validateEvent)||e.validateEvent);return _(()=>e.modelValue,()=>{r.value&&(o==null||o.validate("change").catch(i=>re()))}),{handleChange:h,onClickRoot:S}},on=e=>{const n=P(!1),{emit:a}=ne(),l=w(B,void 0),t=p(()=>G(l)===!1),d=P(!1);return{model:p({get(){var o,m;return t.value?(o=l==null?void 0:l.modelValue)==null?void 0:o.value:(m=e.modelValue)!=null?m:n.value},set(o){var m,s;t.value&&I(o)?(d.value=((m=l==null?void 0:l.max)==null?void 0:m.value)!==void 0&&o.length>(l==null?void 0:l.max.value),d.value===!1&&((s=l==null?void 0:l.changeEvent)==null||s.call(l,o))):(a(V,o),n.value=o)}}),isGroup:t,isLimitExceeded:d}},sn=(e,n,{model:a})=>{const l=w(B,void 0),t=P(!1),d=p(()=>{const s=a.value;return z(s)?s:I(s)?ye(e.label)?s.map(q).some(f=>Ve(f,e.label)):s.map(q).includes(e.label):s!=null?s===e.trueLabel:!!s}),b=J(p(()=>{var s;return(s=l==null?void 0:l.size)==null?void 0:s.value}),{prop:!0}),o=J(p(()=>{var s;return(s=l==null?void 0:l.size)==null?void 0:s.value})),m=p(()=>!!n.default||!Ne(e.label));return{checkboxButtonSize:b,isChecked:d,isFocused:t,checkboxSize:o,hasOwnLabel:m}},un=(e,{model:n})=>{function a(){I(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&a()},fe=(e,n)=>{const{formItem:a}=R(),{model:l,isGroup:t,isLimitExceeded:d}=on(e),{isFocused:b,isChecked:o,checkboxButtonSize:m,checkboxSize:s,hasOwnLabel:f}=sn(e,n,{model:l}),{isDisabled:h}=an({model:l,isChecked:o}),{inputId:S,isLabeledByFormItem:r}=de(e,{formItemContext:a,disableIdGeneration:f,disableIdManagement:t}),{handleChange:i,onClickRoot:v}=tn(e,{model:l,isLimitExceeded:d,hasOwnLabel:f,isDisabled:h,isLabeledByFormItem:r});return un(e,{model:l}),{inputId:S,isLabeledByFormItem:r,isChecked:o,isDisabled:h,isFocused:b,checkboxButtonSize:m,checkboxSize:s,hasOwnLabel:f,model:l,handleChange:i,onClickRoot:v}},rn=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],dn=["id","indeterminate","disabled","value","name","tabindex"],bn=L({name:"ElCheckbox"}),cn=L({...bn,props:ve,emits:me,setup(e){const n=e,a=le(),{inputId:l,isLabeledByFormItem:t,isChecked:d,isDisabled:b,isFocused:o,checkboxSize:m,hasOwnLabel:s,model:f,handleChange:h,onClickRoot:S}=fe(n,a),r=D("checkbox"),i=p(()=>[r.b(),r.m(m.value),r.is("disabled",b.value),r.is("bordered",n.border),r.is("checked",d.value)]),v=p(()=>[r.e("input"),r.is("disabled",b.value),r.is("checked",d.value),r.is("indeterminate",n.indeterminate),r.is("focus",o.value)]);return(k,c)=>(C(),ae(ie(!u(s)&&u(t)?"span":"label"),{class:x(u(i)),"aria-controls":k.indeterminate?k.controls:null,onClick:u(S)},{default:te(()=>[W("span",{class:x(u(v))},[k.trueLabel||k.falseLabel?E((C(),y("input",{key:0,id:u(l),"onUpdate:modelValue":c[0]||(c[0]=g=>$(f)?f.value=g:null),class:x(u(r).e("original")),type:"checkbox",indeterminate:k.indeterminate,name:k.name,tabindex:k.tabindex,disabled:u(b),"true-value":k.trueLabel,"false-value":k.falseLabel,onChange:c[1]||(c[1]=(...g)=>u(h)&&u(h)(...g)),onFocus:c[2]||(c[2]=g=>o.value=!0),onBlur:c[3]||(c[3]=g=>o.value=!1),onClick:c[4]||(c[4]=F(()=>{},["stop"]))},null,42,rn)),[[N,u(f)]]):E((C(),y("input",{key:1,id:u(l),"onUpdate:modelValue":c[5]||(c[5]=g=>$(f)?f.value=g:null),class:x(u(r).e("original")),type:"checkbox",indeterminate:k.indeterminate,disabled:u(b),value:k.label,name:k.name,tabindex:k.tabindex,onChange:c[6]||(c[6]=(...g)=>u(h)&&u(h)(...g)),onFocus:c[7]||(c[7]=g=>o.value=!0),onBlur:c[8]||(c[8]=g=>o.value=!1),onClick:c[9]||(c[9]=F(()=>{},["stop"]))},null,42,dn)),[[N,u(f)]]),W("span",{class:x(u(r).e("inner"))},null,2)],2),u(s)?(C(),y("span",{key:0,class:x(u(r).e("label"))},[O(k.$slots,"default"),k.$slots.default?T("v-if",!0):(C(),y(Se,{key:0},[oe(se(k.label),1)],64))],2)):T("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var vn=M(cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const mn=["name","tabindex","disabled","true-value","false-value"],fn=["name","tabindex","disabled","value"],kn=L({name:"ElCheckboxButton"}),hn=L({...kn,props:ve,emits:me,setup(e){const n=e,a=le(),{isFocused:l,isChecked:t,isDisabled:d,checkboxButtonSize:b,model:o,handleChange:m}=fe(n,a),s=w(B,void 0),f=D("checkbox"),h=p(()=>{var r,i,v,k;const c=(i=(r=s==null?void 0:s.fill)==null?void 0:r.value)!=null?i:"";return{backgroundColor:c,borderColor:c,color:(k=(v=s==null?void 0:s.textColor)==null?void 0:v.value)!=null?k:"",boxShadow:c?`-1px 0 0 0 ${c}`:void 0}}),S=p(()=>[f.b("button"),f.bm("button",b.value),f.is("disabled",d.value),f.is("checked",t.value),f.is("focus",l.value)]);return(r,i)=>(C(),y("label",{class:x(u(S))},[r.trueLabel||r.falseLabel?E((C(),y("input",{key:0,"onUpdate:modelValue":i[0]||(i[0]=v=>$(o)?o.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(d),"true-value":r.trueLabel,"false-value":r.falseLabel,onChange:i[1]||(i[1]=(...v)=>u(m)&&u(m)(...v)),onFocus:i[2]||(i[2]=v=>l.value=!0),onBlur:i[3]||(i[3]=v=>l.value=!1),onClick:i[4]||(i[4]=F(()=>{},["stop"]))},null,42,mn)),[[N,u(o)]]):E((C(),y("input",{key:1,"onUpdate:modelValue":i[5]||(i[5]=v=>$(o)?o.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(d),value:r.label,onChange:i[6]||(i[6]=(...v)=>u(m)&&u(m)(...v)),onFocus:i[7]||(i[7]=v=>l.value=!0),onBlur:i[8]||(i[8]=v=>l.value=!1),onClick:i[9]||(i[9]=F(()=>{},["stop"]))},null,42,fn)),[[N,u(o)]]),r.$slots.default||r.label?(C(),y("span",{key:2,class:x(u(f).be("button","inner")),style:Le(u(t)?u(h):void 0)},[O(r.$slots,"default",{},()=>[oe(se(r.label),1)])],6)):T("v-if",!0)],2))}});var ke=M(hn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const pn=Be({modelValue:{type:Ie(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:j,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),gn={[V]:e=>I(e),change:e=>I(e)},xn=L({name:"ElCheckboxGroup"}),Cn=L({...xn,props:pn,emits:gn,setup(e,{emit:n}){const a=e,l=D("checkbox"),{formItem:t}=R(),{inputId:d,isLabeledByFormItem:b}=de(a,{formItemContext:t}),o=async s=>{n(V,s),await ee(),n("change",s)},m=p({get(){return a.modelValue},set(s){o(s)}});return we(B,{...ln(Ee(a),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:o}),_(()=>a.modelValue,()=>{a.validateEvent&&(t==null||t.validate("change").catch(s=>re()))}),(s,f)=>{var h;return C(),ae(ie(s.tag),{id:u(d),class:x(u(l).b("group")),role:"group","aria-label":u(b)?void 0:s.label||"checkbox-group","aria-labelledby":u(b)?(h=u(t))==null?void 0:h.labelId:void 0},{default:te(()=>[O(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var he=M(Cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const wn=$e(vn,{CheckboxButton:ke,CheckboxGroup:he});ue(ke);ue(he);export{wn as E,ce as b,je as h,Pe as i,We as o,qe as s};
