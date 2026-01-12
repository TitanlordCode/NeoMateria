import{d as Ae,p as We,j as je,k as t,l as d,q as He,u as p,a as Ke,t as M,n as Qe,o,b as Ue,c as i,m as l}from"./iframe-acYjf2IA.js";import{g as Ge}from"./id-BD99uDNx.js";import{g as $,_ as Je}from"./_plugin-vue_export-helper-BaMiToec.js";import{c as De}from"./colorShowcase-CCwc2uRL.js";import"./preload-helper-Dp1pzeXC.js";const Xe=["for"],Ye={key:0,class:"NeoInput-required","aria-label":"required"},Ze=["id","name","type","value","placeholder","disabled","readonly","required","autocomplete","maxlength","minlength","min","max","step","pattern","aria-label","aria-describedby","aria-invalid"],ea={key:1,class:"NeoInput-messageWrapper"},aa=["id"],ra=["id"],Be=Ae({__name:"NeoInput",props:{class:{},name:{},label:{},ariaLabel:{},type:{},placeholder:{},value:{},helpText:{},errorMessage:{},size:{},color:{},disabled:{type:Boolean},readonly:{type:Boolean},required:{type:Boolean},rounded:{type:Boolean},variant:{},autocomplete:{},maxlength:{},minlength:{},min:{},max:{},step:{},pattern:{}},emits:["update:value","blur","focus"],setup(a,{emit:n}){const e=a,E=n,c=Ge("input"),R=We(e.value??""),Fe=s=>{const m=s.target,P=e.type==="number"?Number(m.value):m.value;R.value=P,E("update:value",P)},Le=s=>{E("blur",s)},Oe=s=>{E("focus",s)},Ve=je(()=>{const s=$({component:"NeoInput",modifiers:[e.size??"medium",e.variant??"primary",e.rounded?"rounded":"",e.errorMessage?"error":""],additional:e.class}),m=$({component:"Themed",modifiers:[e.color??"grey"]});return`${s} ${m}`});return(s,m)=>(o(),t("div",{class:Qe(Ve.value)},[e.label?(o(),t("label",{key:0,class:"NeoInput-label",for:`${p(c)}-${e.name}`},[Ke(M(e.label)+" ",1),e.required?(o(),t("span",Ye,"*")):d("",!0)],8,Xe)):d("",!0),He("input",{id:`${p(c)}-${e.name}`,class:"NeoInput-field",name:e.name,type:e.type??"text",value:R.value,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,autocomplete:e.autocomplete,maxlength:e.maxlength,minlength:e.minlength,min:e.min,max:e.max,step:e.step,pattern:e.pattern,"aria-label":e.ariaLabel,"aria-describedby":e.helpText||e.errorMessage?`${p(c)}-${e.name}-description`:void 0,"aria-invalid":e.errorMessage?"true":void 0,onInput:Fe,onBlur:Le,onFocus:Oe},null,40,Ze),e.helpText||e.errorMessage?(o(),t("div",ea,[e.helpText&&!e.errorMessage?(o(),t("p",{key:0,class:"NeoInput-helpText",id:`${p(c)}-${e.name}-description`},M(e.helpText),9,aa)):d("",!0),e.errorMessage?(o(),t("p",{key:1,class:"NeoInput-errorMessage",id:`${p(c)}-${e.name}-description`,role:"alert"},M(e.errorMessage),9,ra)):d("",!0)])):d("",!0)],2))}}),r=Je(Be,[["__scopeId","data-v-c89cffa3"]]);Be.__docgenInfo={exportName:"default",displayName:"NeoInput",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"type",global:!1,description:"",tags:[],required:!1,type:'"number" | "search" | "text" | "email" | "password" | "tel" | "url" | "date" | "time"',declarations:[],schema:{kind:"enum",type:'"number" | "search" | "text" | "email" | "password" | "tel" | "url" | "date" | "time"',schema:['"number"','"search"','"text"','"email"','"password"','"tel"','"url"','"date"','"time"']}},{name:"placeholder",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"value",global:!1,description:"",tags:[],required:!1,type:"string | number",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}},{name:"helpText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"readonly",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"required",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | "tertiary"',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"autocomplete",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"maxlength",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"minlength",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"min",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"max",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"step",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"pattern",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"blur",description:"",tags:[],type:"[event: FocusEvent]",signature:'(event: "blur", event: FocusEvent): void',declarations:[],schema:[{kind:"object",type:"FocusEvent"}]},{name:"focus",description:"",tags:[],type:"[event: FocusEvent]",signature:'(event: "focus", event: FocusEvent): void',declarations:[],schema:[{kind:"object",type:"FocusEvent"}]},{name:"update:value",description:"",tags:[],type:"[value: string | number]",signature:'(event: "update:value", value: string | number): void',declarations:[],schema:[{kind:"enum",type:"string | number",schema:["string","number"]}]}],slots:[],exposed:[{name:"value",type:"string | number",description:"",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"type",type:'"number" | "search" | "text" | "email" | "password" | "tel" | "url" | "date" | "time"',description:"",declarations:[],schema:{kind:"enum",type:'"number" | "search" | "text" | "email" | "password" | "tel" | "url" | "date" | "time"',schema:['"number"','"search"','"text"','"email"','"password"','"tel"','"url"','"date"','"time"']}},{name:"required",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"variant",type:'"primary" | "secondary" | "tertiary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"placeholder",type:"string",description:"",declarations:[],schema:"string"},{name:"helpText",type:"string",description:"",declarations:[],schema:"string"},{name:"errorMessage",type:"string",description:"",declarations:[],schema:"string"},{name:"readonly",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"autocomplete",type:"string",description:"",declarations:[],schema:"string"},{name:"maxlength",type:"number",description:"",declarations:[],schema:"number"},{name:"minlength",type:"number",description:"",declarations:[],schema:"number"},{name:"min",type:"number",description:"",declarations:[],schema:"number"},{name:"max",type:"number",description:"",declarations:[],schema:"number"},{name:"step",type:"number",description:"",declarations:[],schema:"number"},{name:"pattern",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Input/NeoInput.vue"};const la={title:"Atoms/NeoInput",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},variant:{control:"select",options:["primary","secondary","tertiary"]},type:{control:"select",options:["text","email","password","number","tel","url","search","date","time"]},color:{control:"select",options:Ue}},args:{name:"example-input",label:"Label",placeholder:"Enter text...",size:"medium",variant:"primary",color:"blue",type:"text"}},u={args:{}},g={args:{helpText:"This is a helpful hint"}},y={args:{errorMessage:"This field is required"}},b={args:{required:!0}},h={args:{disabled:!0,value:"Disabled input"}},f={args:{readonly:!0,value:"Readonly input"}},v={args:{type:"email",placeholder:"email@example.com",label:"Email"}},k={args:{type:"password",placeholder:"Enter password",label:"Password"}},x={args:{type:"number",placeholder:"0",label:"Quantity",min:0,max:100}},q={args:{size:"small"}},_={args:{size:"large"}},N={args:{variant:"secondary"}},S={args:{variant:"tertiary"}},I={args:{rounded:!0}},z={globals:{backgrounds:"#000"}},T={globals:{direction:"rtl"},args:{label:"الاسم الكامل",placeholder:"أدخل اسمك..."}},w={render:De(r,[{variant:"primary",render:(a,n,e)=>i(r,l(e,{color:a,label:a,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(a,n,e)=>i(r,l(e,{color:a,label:a,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(a,n,e)=>i(r,l(e,{color:a,label:a,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-input"}})},C={globals:{backgrounds:"#000"},render:De(r,[{variant:"primary",render:(a,n,e)=>i(r,l(e,{color:a,label:a,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(a,n,e)=>i(r,l(e,{color:a,label:a,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(a,n,e)=>i(r,l(e,{color:a,label:a,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-input"},dark:!0})};var D,B,F;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {}
}`,...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var L,O,V;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    helpText: 'This is a helpful hint'
  }
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var A,W,j;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    errorMessage: 'This field is required'
  }
}`,...(j=(W=y.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var H,K,Q;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,G,J;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled input'
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: 'Readonly input'
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'email@example.com',
    label: 'Email'
  }
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ne,te;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password',
    label: 'Password'
  }
}`,...(te=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ie,le;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: '0',
    label: 'Quantity',
    min: 0,
    max: 100
  }
}`,...(le=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,me,de;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(de=(me=q.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ue,ge;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(ge=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var ye,be,he;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(he=(be=N.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var fe,ve,ke;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(ke=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var xe,qe,_e;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...(_e=(qe=I.parameters)==null?void 0:qe.docs)==null?void 0:_e.source}}};var Ne,Se,Ie;z.parameters={...z.parameters,docs:{...(Ne=z.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(Ie=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var ze,Te,we;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'الاسم الكامل',
    placeholder: 'أدخل اسمك...'
  }
}`,...(we=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var Ce,Ee,Me;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoInput, [{
    variant: 'primary',
    render: (color, _, args) => <NeoInput {...args} color={color} label={color} size="medium" variant="primary" />
  }, {
    variant: 'secondary',
    render: (color, _, args) => <NeoInput {...args} color={color} label={color} size="medium" variant="secondary" />
  }, {
    variant: 'tertiary',
    render: (color, _, args) => <NeoInput {...args} color={color} label={color} size="medium" variant="tertiary" />
  }], {
    defaultProps: {
      name: 'color-input'
    }
  })
}`,...(Me=(Ee=w.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source}}};var Re,Pe,$e;C.parameters={...C.parameters,docs:{...(Re=C.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoInput, [{
    variant: 'primary',
    render: (color, _, args) => <NeoInput {...args} color={color} label={color} size="medium" variant="primary" />
  }, {
    variant: 'secondary',
    render: (color, _, args) => <NeoInput {...args} color={color} label={color} size="medium" variant="secondary" />
  }, {
    variant: 'tertiary',
    render: (color, _, args) => <NeoInput {...args} color={color} label={color} size="medium" variant="tertiary" />
  }], {
    defaultProps: {
      name: 'color-input'
    },
    dark: true
  })
}`,...($e=(Pe=C.parameters)==null?void 0:Pe.docs)==null?void 0:$e.source}}};const ca=["Default","WithHelpText","WithError","Required","Disabled","Readonly","Email","Password","Number","Small","Large","Secondary","Tertiary","Rounded","OnDark","RTL","AllColors","AllColorsOnDark"];export{w as AllColors,C as AllColorsOnDark,u as Default,h as Disabled,v as Email,_ as Large,x as Number,z as OnDark,k as Password,T as RTL,f as Readonly,b as Required,I as Rounded,N as Secondary,q as Small,S as Tertiary,y as WithError,g as WithHelpText,ca as __namedExportsOrder,la as default};
