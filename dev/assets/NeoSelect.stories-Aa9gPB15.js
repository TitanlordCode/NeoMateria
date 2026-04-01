import{d as Ae,r as v,e as h,D as W,v as c,x as f,C as m,a as Me,y as k,z as g,F as K,K as U,P as R,H as $e,I as De,m as Oe,U as Ve,t as o,q as F,A as Be}from"./iframe-BNVHVJhn.js";import{g as Ie}from"./id-DERw85mN.js";import{g as G,_ as Re}from"./_plugin-vue_export-helper-DerOYOQE.js";import{N as ze}from"./NeoCheckbox-7f3K3RQY.js";import{N as Ee}from"./NeoBadge-DU1dBm4l.js";import{c as Se}from"./colorShowcase-BzxvNubM.js";import"./preload-helper-Dp1pzeXC.js";const je={class:"NeoSelect-labelWrapper"},We=["for"],Ke={key:0,class:"NeoSelect-required","aria-hidden":"true"},Ue={key:1,class:"NeoSelect-requiredText sr-only"},Fe={class:"NeoSelect-inputWrapper"},Ge={key:0,class:"NeoSelect-selectedTags"},Je=["name","id","placeholder","value","aria-label","aria-expanded","aria-controls","aria-activedescendant","aria-describedby"],He=["id","aria-labelledby","aria-multiselectable"],Qe=["id","aria-selected","tabindex","onClick","onMouseenter"],Xe={"aria-hidden":"true"},Ye={key:0,class:"NeoSelect-messageWrapper"},Ze=["id"],ea={key:1,class:"NeoSelect-errorMessage"},V=Ae({__name:"NeoSelect",props:{name:{},selectProps:{},options:{},helpText:{},errorMessage:{},size:{},color:{},disabled:{type:Boolean},rounded:{type:Boolean},variant:{},mode:{},selectValue:{},label:{},ariaLabel:{},required:{type:Boolean},requiredText:{}},emits:["update:value"],setup(xe,{emit:_e}){const a=xe,S=_e,u=Ie("select"),i=v(!1),t=v(-1),x=v(null),j=v(null),y=v(""),s=v(Array.isArray(a.selectValue)?a.selectValue:a.selectValue?[a.selectValue]:[]),d=h(()=>a.mode??"single"),qe=h(()=>t.value>=0?`option-${u}-${t.value}`:void 0),B=h(()=>{if(d.value==="single"){const e=a.options.find(l=>l.value===s.value[0]);return(e==null?void 0:e.label)||""}else return s.value.map(e=>{var l;return(l=a.options.find(r=>r.value===e))==null?void 0:l.label}).filter(Boolean).join(", ")});W(()=>a.selectValue,e=>{e!==void 0&&(s.value=Array.isArray(e)?e:e?[e]:[])});const _=()=>{i.value=!0,y.value="",Ve(()=>{const e=a.options.findIndex(l=>l.value===s.value[0]);t.value=e>=0?e:0})},q=()=>{i.value=!1,t.value=-1,y.value=""},Ce=()=>i.value?q():_(),Ne=e=>{var r;const l=e.relatedTarget;!((r=j.value)!=null&&r.contains(l))&&l!==x.value&&q()},Te=e=>{var l;if(e.key==="Escape")q(),(l=x.value)==null||l.blur();else if(e.key==="Enter"||e.key===" ")e.preventDefault(),i.value?t.value>=0&&p.value[t.value]&&I(p.value[t.value]):_();else if(e.key==="ArrowDown")e.preventDefault(),i.value?t.value=(t.value+1)%p.value.length:_();else if(e.key==="ArrowUp")e.preventDefault(),i.value?t.value=(t.value-1+p.value.length)%p.value.length:_();else if(e.key==="Backspace"&&d.value==="multi"&&y.value===""&&(e.preventDefault(),s.value.length>0)){const r=s.value.slice(0,-1);s.value=r,S("update:value",r)}},p=h(()=>a.options.filter(e=>e.label.toLowerCase().includes(y.value.toLowerCase()))),Pe=e=>{const l=e.target;y.value=l.value,i.value||(i.value=!0),t.value=0},C=e=>s.value.includes(e),I=e=>{var l;if(d.value==="single")s.value=[e.value],S("update:value",e.value),q();else{if(C(e.value)){const r=s.value.filter(n=>n!==e.value);s.value=r,S("update:value",r)}else{const r=[...s.value,e.value];s.value=r,S("update:value",r)}y.value=""}(l=x.value)==null||l.focus()};W(()=>p.value.length,()=>{t.value>=p.value.length&&(t.value=Math.max(0,p.value.length-1))});const we=h(()=>{const e=G({component:"NeoSelect",modifiers:[a.size??"medium",a.variant??"primary",a.rounded?"rounded":""]}),l=G({component:"Themed",modifiers:[a.color??"blue"]});return`${e} ${l}`});return(e,l)=>{var r;return o(),c("div",Oe(e.$attrs,{class:we.value}),[f("div",je,[a.label?(o(),c("label",{key:0,class:"NeoSelect-label",for:`${m(u)}-${a.name}`},[Me(k(a.label)+" ",1),a.required?(o(),c("span",Ke,"*")):g("",!0),a.required?(o(),c("span",Ue," ("+k(a.requiredText)+") ",1)):g("",!0)],8,We)):g("",!0)]),f("div",Fe,[d.value==="multi"&&s.value.length>0?(o(),c("div",Ge,[(o(!0),c(K,null,U(s.value,n=>{var b;return o(),F(Ee,{key:n,text:(b=a.options.find(N=>N.value===n))==null?void 0:b.label,color:a.color,size:"small",variant:"solid",dismissible:"",rounded:"",onDismiss:N=>I(a.options.find(Le=>Le.value===n))},null,8,["text","color","onDismiss"])}),128))])):g("",!0),f("input",{ref_key:"inputRef",ref:x,class:"NeoSelect-input",name:a.name,id:`${m(u)}-${a.name}`,type:"text",role:"combobox",placeholder:d.value==="single"&&B.value?B.value:d.value==="multi"&&s.value.length>0?"":(r=a.selectProps)==null?void 0:r.placeholder,value:i.value?y.value:d.value==="single"?B.value:"","aria-label":a.ariaLabel,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":i.value,"aria-controls":`${m(u)}-popup_listbox`,"aria-activedescendant":qe.value,"aria-describedby":a.helpText?`${m(u)}-helptext`:void 0,onInput:Pe,onKeydown:Te,onBlur:Ne,onClick:R(Ce,["prevent","stop"])},null,40,Je),$e(f("ul",{ref_key:"listRef",ref:j,class:"NeoSelect-options",role:"listbox",id:`${m(u)}-popup_listbox`,"aria-labelledby":`${m(u)}-${a.name}`,"aria-multiselectable":d.value==="multi"},[(o(!0),c(K,null,U(p.value,(n,b)=>(o(),c("li",{key:n.value,role:"option",id:`option-${m(u)}-${b}`,"aria-selected":C(n.value),tabindex:t.value===b?0:-1,class:Be(["NeoSelect-option",{selected:C(n.value),focused:t.value===b}]),onClick:N=>I(n),onMousedown:l[1]||(l[1]=R(()=>{},["prevent"])),onMouseenter:N=>t.value=b},[d.value==="multi"?(o(),F(ze,{key:0,name:`${m(u)}-option-${n.value}`,value:n.value,checked:C(n.value),color:a.color,ariaLabel:n.label,size:"small",class:"NeoSelect-checkbox",onClick:l[0]||(l[0]=R(()=>{},["stop"]))},null,8,["name","value","checked","color","ariaLabel"])):g("",!0),f("span",Xe,k(n.label),1)],42,Qe))),128))],8,He),[[De,i.value]])]),a.helpText||a.errorMessage?(o(),c("div",Ye,[a.helpText&&!a.errorMessage?(o(),c("p",{key:0,class:"NeoSelect-helpText",id:`${m(u)}-helptext`},k(a.helpText),9,Ze)):g("",!0),a.errorMessage?(o(),c("p",ea,k(a.errorMessage),1)):g("",!0)])):g("",!0)],16)}}}),z=Re(V,[["__scopeId","data-v-4fb560c6"]]);V.__docgenInfo=Object.assign({displayName:V.name??V.__name},{exportName:"default",displayName:"NeoSelect",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"selectProps",global:!1,description:"",tags:[],required:!1,type:"{ placeholder?: string; }",declarations:[],schema:{kind:"object",type:"{ placeholder?: string; }"}},{name:"options",global:!1,description:"",tags:[],required:!0,type:"{ value: string; label: string; }[]",declarations:[],schema:{kind:"array",type:"{ value: string; label: string; }[]"}},{name:"helpText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"any",declarations:[],schema:"any"},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | "tertiary"',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"mode",global:!1,description:"",tags:[],required:!1,type:'"single" | "multi"',declarations:[],schema:{kind:"enum",type:'"single" | "multi"',schema:['"single"','"multi"']}},{name:"selectValue",global:!1,description:"",tags:[],required:!1,type:"string | string[]",declarations:[],schema:{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"true",declarations:[],schema:"true"},{name:"requiredText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:value",description:"Emitted when the selected value changes. Receives a `string` in single mode or `string[]` in multi mode.",tags:[],type:"[value: string | string[]]",signature:'(event: "update:value", value: string | string[]): void',declarations:[],schema:[{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}]}],slots:[],exposed:[{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"true",description:"",declarations:[],schema:"true"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",type:'"primary" | "secondary" | "tertiary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"requiredText",type:"string",description:"",declarations:[],schema:"string"},{name:"helpText",type:"string",description:"",declarations:[],schema:"string"},{name:"errorMessage",type:"string",description:"",declarations:[],schema:"string"},{name:"selectProps",type:"{ placeholder?: string; }",description:"",declarations:[],schema:{kind:"object",type:"{ placeholder?: string; }"}},{name:"options",type:"{ value: string; label: string; }[]",description:"",declarations:[],schema:{kind:"array",type:"{ value: string; label: string; }[]"}},{name:"mode",type:'"single" | "multi"',description:"",declarations:[],schema:{kind:"enum",type:'"single" | "multi"',schema:['"single"','"multi"']}},{name:"selectValue",type:"string | string[]",description:"",declarations:[],schema:{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/02-molecules/Select/NeoSelect.vue"});const aa=["small","medium","large"],la=["primary","secondary","tertiary"],ta=["single","multi"],E=[{value:"apple",label:"Apple"},{value:"orange",label:"Orange"},{value:"banana",label:"Banana"}],da={title:"Molecules/NeoSelect",component:z,tags:["autodocs"],argTypes:{color:{description:"Theme color for focus ring and selected state accents.",table:{category:"Appearance"}},size:{control:"select",options:aa,description:"Controls padding and font size.",table:{category:"Appearance"}},variant:{control:"select",options:la,description:"`primary`: filled background. `secondary`: outlined style. `tertiary`: minimal, no visible border at rest.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners to the select input.",table:{category:"Appearance"}},mode:{control:"select",options:ta,description:"`single` (default): one value can be selected, bound to a `string`. `multi`: multiple values, bound to `string[]`. Switching mode changes the type of `selectValue`.",table:{category:"Behavior"}},selectValue:{description:"The currently selected value(s). Type depends on `mode`: `string` for single, `string[]` for multi.",table:{category:"State"}},options:{control:"object",description:"Array of selectable options. Each option: `{ value: string, label: string }`.",table:{category:"Content"}},selectProps:{control:"object",description:"Additional props passed to the inner select element. Supports `placeholder`.",table:{category:"Behavior"}},helpText:{control:"text",description:"Hint text rendered below the input to guide the user.",table:{category:"Content"}},errorMessage:{control:"text",description:"Validation error text rendered below the input. When set, the input is styled in an error state.",table:{category:"State"}},disabled:{control:"boolean",description:"Prevents interaction and applies a disabled visual style.",table:{category:"State"}},required:{control:"boolean",description:"Marks the field as required. When `true`, `requiredText` must also be provided and is shown next to the label.",table:{category:"State"}},requiredText:{control:"text",description:'Text displayed beside the label when `required` is true (e.g. `"required"` or `"*"`). Only available when `required` is set.',table:{category:"Content"}}},args:{name:"fruit",ariaLabel:"Select a fruit",size:"medium",selectProps:{placeholder:"Select one..."},variant:"primary",color:"blue",options:E},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}}}},T={},P={args:{label:"Default",ariaLabel:void 0}},w={args:{label:"Choose fruits",ariaLabel:void 0,mode:"multi",selectProps:{placeholder:"Select multiple..."},selectValue:["apple","banana"]}},L={args:{label:"Choose your favorite programming languages",ariaLabel:void 0,mode:"multi",selectProps:{placeholder:"Type to search..."},options:[{value:"typescript",label:"TypeScript"},{value:"javascript",label:"JavaScript"},{value:"python",label:"Python"},{value:"rust",label:"Rust"},{value:"go",label:"Go"},{value:"java",label:"Java"},{value:"csharp",label:"C#"},{value:"cpp",label:"C++"}]}},A={args:{label:"Choose your country",ariaLabel:void 0,mode:"single",selectProps:{placeholder:"Type to search countries..."},options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"es",label:"Spain"},{value:"it",label:"Italy"},{value:"nl",label:"Netherlands"},{value:"be",label:"Belgium"}]}},M={globals:{backgrounds:"#000"}},$={globals:{direction:"rtl"},args:{label:"اختر فاكهة",ariaLabel:void 0,selectProps:{placeholder:"اختر واحدة..."},options:[{value:"apple",label:"تفاح"},{value:"orange",label:"برتقال"},{value:"banana",label:"موز"}]}},D={render:Se(z,["primary","secondary","tertiary"],{defaultProps:{name:"color-select",options:E}})},O={globals:{backgrounds:"#000"},render:Se(z,["primary","secondary","tertiary"],{defaultProps:{name:"color-select",options:E},dark:!0})};var J,H,Q;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:"{}",...(Q=(H=T.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var X,Y,Z;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Default',
    ariaLabel: undefined
  }
}`,...(Z=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,le;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Choose fruits',
    ariaLabel: undefined,
    mode: 'multi',
    selectProps: {
      placeholder: 'Select multiple...'
    },
    selectValue: ['apple', 'banana']
  }
}`,...(le=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var te,se,re;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Choose your favorite programming languages',
    ariaLabel: undefined,
    mode: 'multi',
    selectProps: {
      placeholder: 'Type to search...'
    },
    options: [{
      value: 'typescript',
      label: 'TypeScript'
    }, {
      value: 'javascript',
      label: 'JavaScript'
    }, {
      value: 'python',
      label: 'Python'
    }, {
      value: 'rust',
      label: 'Rust'
    }, {
      value: 'go',
      label: 'Go'
    }, {
      value: 'java',
      label: 'Java'
    }, {
      value: 'csharp',
      label: 'C#'
    }, {
      value: 'cpp',
      label: 'C++'
    }]
  }
}`,...(re=(se=L.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ne,oe,ie;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Choose your country',
    ariaLabel: undefined,
    mode: 'single',
    selectProps: {
      placeholder: 'Type to search countries...'
    },
    options: [{
      value: 'us',
      label: 'United States'
    }, {
      value: 'uk',
      label: 'United Kingdom'
    }, {
      value: 'de',
      label: 'Germany'
    }, {
      value: 'fr',
      label: 'France'
    }, {
      value: 'es',
      label: 'Spain'
    }, {
      value: 'it',
      label: 'Italy'
    }, {
      value: 'nl',
      label: 'Netherlands'
    }, {
      value: 'be',
      label: 'Belgium'
    }]
  }
}`,...(ie=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,ue,de;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(de=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,ge;$.parameters={...$.parameters,docs:{...(pe=$.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'اختر فاكهة',
    ariaLabel: undefined,
    selectProps: {
      placeholder: 'اختر واحدة...'
    },
    options: [{
      value: 'apple',
      label: 'تفاح'
    }, {
      value: 'orange',
      label: 'برتقال'
    }, {
      value: 'banana',
      label: 'موز'
    }]
  }
}`,...(ge=(me=$.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ye,be,ve;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoSelect, ['primary', 'secondary', 'tertiary'], {
    defaultProps: {
      name: 'color-select',
      options: exampleOptions
    }
  })
}`,...(ve=(be=D.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var he,fe,ke;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoSelect, ['primary', 'secondary', 'tertiary'], {
    defaultProps: {
      name: 'color-select',
      options: exampleOptions
    },
    dark: true
  })
}`,...(ke=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};const pa=["Default","WithLabel","MultiSelect","MultiSelectEmpty","SingleSelectWithSearch","OnDark","RTL","AllColors","AllColorsOnDark"];export{D as AllColors,O as AllColorsOnDark,T as Default,w as MultiSelect,L as MultiSelectEmpty,M as OnDark,$ as RTL,A as SingleSelectWithSearch,P as WithLabel,pa as __namedExportsOrder,da as default};
