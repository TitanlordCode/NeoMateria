import{d as He,r as Ke,I as Ue,f as Ge,x as n,D as p,a as Je,z as h,A as l,y as Qe,B as Xe,u as o,c,m as d}from"./iframe-D97hRsDr.js";import{g as Ye}from"./id-CTCQIiJ9.js";import{g as V,_ as Ze}from"./_plugin-vue_export-helper-DerOYOQE.js";import{d as ea,a as aa}from"./argTypes-VnJZhiy7.js";import{c as Ie}from"./colorShowcase-B0D6CXNh.js";import{c as Oe}from"./createA11yPlay-BakXPOC5.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-BAN8dmkr.js";const ra=["for"],sa={key:0,class:"NeoTextArea-required","aria-hidden":"true"},ta={key:1,class:"NeoTextArea-requiredText sr-only"},na=["id","name","value","placeholder","disabled","readonly","required","rows","maxlength","minlength","aria-label","aria-describedby","aria-invalid"],oa={key:1,class:"NeoTextArea-messageWrapper"},ia=["id"],la=["id"],R=He({__name:"NeoTextArea",props:{name:{},placeholder:{},value:{},helpText:{},errorMessage:{},size:{},color:{},disabled:{type:Boolean},readonly:{type:Boolean},rounded:{type:Boolean},variant:{},rows:{},maxLength:{},minLength:{},resize:{},label:{},ariaLabel:{},required:{type:Boolean},requiredText:{}},emits:["update:value","blur","focus"],setup(a,{emit:t}){const e=a,E=t,m=Ye("textarea"),P=Ke(e.value??"");Ue(()=>e.value,i=>{P.value=i??""});const We=i=>{const r=i.target;P.value=r.value,E("update:value",r.value)},je=Ge(()=>{const i=V({component:"NeoTextArea",modifiers:[e.size??"medium",e.variant??"primary",e.rounded?"rounded":"",e.errorMessage?"error":"",e.resize?`resize-${e.resize}`:"resize-vertical"]}),r=V({component:"Themed",modifiers:[e.color??"blue"]});return`${i} ${r}`});return(i,r)=>(o(),n("div",{class:Xe(je.value)},[e.label?(o(),n("label",{key:0,class:"NeoTextArea-label",for:`${p(m)}-${e.name}`},[Je(h(e.label)+" ",1),e.required?(o(),n("span",sa,"*")):l("",!0),e.required?(o(),n("span",ta," ("+h(e.requiredText)+") ",1)):l("",!0)],8,ra)):l("",!0),Qe("textarea",{id:`${p(m)}-${e.name}`,class:"NeoTextArea-field",name:e.name,value:P.value,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,rows:e.rows??4,maxlength:e.maxLength,minlength:e.minLength,"aria-label":e.ariaLabel,"aria-describedby":e.helpText||e.errorMessage?`${p(m)}-${e.name}-description`:void 0,"aria-invalid":e.errorMessage?"true":void 0,onInput:We,onBlur:r[0]||(r[0]=D=>E("blur",D)),onFocus:r[1]||(r[1]=D=>E("focus",D))},null,40,na),e.helpText||e.errorMessage?(o(),n("div",oa,[e.helpText&&!e.errorMessage?(o(),n("p",{key:0,class:"NeoTextArea-helpText",id:`${p(m)}-${e.name}-description`},h(e.helpText),9,ia)):l("",!0),e.errorMessage?(o(),n("p",{key:1,class:"NeoTextArea-errorMessage",id:`${p(m)}-${e.name}-description`,role:"alert"},h(e.errorMessage),9,la)):l("",!0)])):l("",!0)],2))}}),s=Ze(R,[["__scopeId","data-v-47449228"]]);R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:"default",displayName:"NeoTextArea",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"placeholder",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"value",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"helpText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"any",declarations:[],schema:"any"},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"readonly",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | "tertiary"',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rows",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"maxLength",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"minLength",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"resize",global:!1,description:"",tags:[],required:!1,type:'"horizontal" | "vertical" | "none" | "both"',declarations:[],schema:{kind:"enum",type:'"horizontal" | "vertical" | "none" | "both"',schema:['"horizontal"','"vertical"','"none"','"both"']}},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"true",declarations:[],schema:"true"},{name:"requiredText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"blur",description:"Emitted when the textarea loses focus.",tags:[],type:"[event: FocusEvent]",signature:'(event: "blur", event: FocusEvent): void',declarations:[],schema:[{kind:"object",type:"FocusEvent"}]},{name:"focus",description:"Emitted when the textarea gains focus.",tags:[],type:"[event: FocusEvent]",signature:'(event: "focus", event: FocusEvent): void',declarations:[],schema:[{kind:"object",type:"FocusEvent"}]},{name:"update:value",description:"Emitted on every input change. Receives the current textarea value.",tags:[],type:"[value: string]",signature:'(event: "update:value", value: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"resize",type:'"horizontal" | "vertical" | "none" | "both"',description:"",declarations:[],schema:{kind:"enum",type:'"horizontal" | "vertical" | "none" | "both"',schema:['"horizontal"','"vertical"','"none"','"both"']}},{name:"value",type:"string",description:"",declarations:[],schema:"string"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"true",description:"",declarations:[],schema:"true"},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"variant",type:'"primary" | "secondary" | "tertiary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"requiredText",type:"string",description:"",declarations:[],schema:"string"},{name:"placeholder",type:"string",description:"",declarations:[],schema:"string"},{name:"helpText",type:"string",description:"",declarations:[],schema:"string"},{name:"errorMessage",type:"string",description:"",declarations:[],schema:"string"},{name:"readonly",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rows",type:"number",description:"",declarations:[],schema:"number"},{name:"maxLength",type:"number",description:"",declarations:[],schema:"number"},{name:"minLength",type:"number",description:"",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/TextArea/NeoTextArea.vue"});const ca=["small","medium","large"],da=["primary","secondary","tertiary"],va={title:"Atoms/NeoTextArea",component:s,tags:["autodocs","grimeria"],argTypes:{...aa,...ea,name:{control:"text",table:{category:"Content"},description:"The `name` attribute submitted with the form."},label:{control:"text",table:{category:"Content"},description:"Visible label text. Mutually exclusive with `ariaLabel`."},placeholder:{control:"text",table:{category:"Content"},description:"Placeholder shown when the field is empty."},value:{control:"text",table:{category:"Content"},description:"The textarea value (controlled)."},color:{description:"Theme color for focus ring, labels, and accents."},size:{control:"select",options:ca,table:{category:"Appearance"},description:"Controls padding and font size."},variant:{control:"select",options:da,table:{category:"Appearance"},description:"`default`: standard outlined. `filled`: solid background."},rows:{control:"number",table:{category:"Appearance"},description:"Initial visible line count. The user can resize beyond this unless `resize` is `none`."},resize:{control:"select",options:["none","vertical","horizontal","both"],table:{category:"Appearance"},description:"Controls which directions the user can resize the textarea. `none` disables resizing entirely."},rounded:{control:"boolean",table:{category:"Appearance"},description:"Applies fully rounded corners."},readonly:{control:"boolean",table:{category:"State"},description:"Non-editable but focusable. Value is still submitted."},required:{control:"boolean",table:{category:"State"},description:"Marks the field as required. Requires `requiredText` to be set."},requiredText:{control:"text",table:{category:"State"},description:"Assistive text describing the requirement, surfaced when `required` is set."},helpText:{control:"text",table:{category:"Validation"},description:"Descriptive text below the field. Used for hints."},errorMessage:{control:"text",table:{category:"Validation"},description:"Replaces `helpText` and applies error styling."},maxLength:{control:"number",table:{category:"Validation"},description:"Hard character limit. A character counter is shown below the field."},minLength:{control:"number",table:{category:"Validation"},description:"Minimum character count required for the field to be valid."}},args:{name:"example-textarea",ariaLabel:"Label",placeholder:"Enter your text here...",size:"medium",variant:"primary",color:"blue"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},y={tags:["snapshot"]},b={tags:["snapshot"],args:{label:"Description",ariaLabel:void 0}},f={tags:["snapshot"],args:{helpText:"Please provide detailed information"}},v={tags:["snapshot"],args:{errorMessage:"This field is required"}},x={tags:["snapshot"],args:{label:"Textarea Field",ariaLabel:void 0,required:!0,requiredText:"This field is required"}},T={tags:["snapshot"],args:{disabled:!0,value:"This textarea is disabled"}},q={tags:["snapshot"],args:{readonly:!0,value:"This textarea is readonly"}},A={tags:["snapshot"],args:{size:"small"}},z={tags:["snapshot"],args:{size:"large"}},k={tags:["snapshot"],args:{variant:"secondary"}},_={tags:["snapshot"],args:{variant:"tertiary"}},N={tags:["snapshot"],args:{rounded:!0}},w={tags:["snapshot"],args:{resize:"none"}},L={tags:["snapshot"],args:{maxLength:200,helpText:"Maximum 200 characters"}},S={tags:["snapshot"],globals:{direction:"rtl"},args:{ariaLabel:"تسمية",placeholder:"أدخل النص هنا..."},parameters:{snapshot:{viewports:["sm","xl"]}}},u={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:Ie(s,[{variant:"primary",render:(a,t,e)=>c(s,d(e,{color:a,label:a,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(a,t,e)=>c(s,d(e,{color:a,label:a,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(a,t,e)=>c(s,d(e,{color:a,label:a,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-textarea"}})},g={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:Ie(s,[{variant:"primary",render:(a,t,e)=>c(s,d(e,{color:a,label:a,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(a,t,e)=>c(s,d(e,{color:a,label:a,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(a,t,e)=>c(s,d(e,{color:a,label:a,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-textarea"},dark:!0})},C={...u,tags:["!dev","test-only"],play:Oe()},M={...g,tags:["!dev","test-only"],play:Oe()};var $,F,B;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(B=(F=y.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var I,O,W;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Description',
    ariaLabel: undefined
  }
}`,...(W=(O=b.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var j,H,K;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    helpText: 'Please provide detailed information'
  }
}`,...(K=(H=f.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var U,G,J;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    errorMessage: 'This field is required'
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Textarea Field',
    ariaLabel: undefined,
    required: true,
    requiredText: 'This field is required'
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true,
    value: 'This textarea is disabled'
  }
}`,...(ae=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    readonly: true,
    value: 'This textarea is readonly'
  }
}`,...(te=(se=q.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ne,oe,ie;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(ie=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(de=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ue;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'secondary'
  }
}`,...(ue=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,he,ye;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'tertiary'
  }
}`,...(ye=(he=_.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var be,fe,ve;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    rounded: true
  }
}`,...(ve=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var xe,Te,qe;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    resize: 'none'
  }
}`,...(qe=(Te=w.parameters)==null?void 0:Te.docs)==null?void 0:qe.source}}};var Ae,ze,ke;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    maxLength: 200,
    helpText: 'Maximum 200 characters'
  }
}`,...(ke=(ze=L.parameters)==null?void 0:ze.docs)==null?void 0:ke.source}}};var _e,Ne,we;S.parameters={...S.parameters,docs:{...(_e=S.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    ariaLabel: 'تسمية',
    placeholder: 'أدخل النص هنا...'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(we=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var Le,Se,Ce;u.parameters={...u.parameters,docs:{...(Le=u.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoTextArea, [{
    variant: 'primary',
    render: (color, _, args) => <NeoTextArea {...args} color={color} label={color} size="medium" variant="primary" />
  }, {
    variant: 'secondary',
    render: (color, _, args) => <NeoTextArea {...args} color={color} label={color} size="medium" variant="secondary" />
  }, {
    variant: 'tertiary',
    render: (color, _, args) => <NeoTextArea {...args} color={color} label={color} size="medium" variant="tertiary" />
  }], {
    defaultProps: {
      name: 'color-textarea'
    }
  })
}`,...(Ce=(Se=u.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var Me,Re,Ee;g.parameters={...g.parameters,docs:{...(Me=g.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoTextArea, [{
    variant: 'primary',
    render: (color, _, args) => <NeoTextArea {...args} color={color} label={color} size="medium" variant="primary" />
  }, {
    variant: 'secondary',
    render: (color, _, args) => <NeoTextArea {...args} color={color} label={color} size="medium" variant="secondary" />
  }, {
    variant: 'tertiary',
    render: (color, _, args) => <NeoTextArea {...args} color={color} label={color} size="medium" variant="tertiary" />
  }], {
    defaultProps: {
      name: 'color-textarea'
    },
    dark: true
  })
}`,...(Ee=(Re=g.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Pe,De,Ve;C.parameters={...C.parameters,docs:{...(Pe=C.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Ve=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Ve.source}}};var $e,Fe,Be;M.parameters={...M.parameters,docs:{...($e=M.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Be=(Fe=M.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};const xa=["Default","WithLabel","WithHelpText","WithError","Required","Disabled","Readonly","Small","Large","Secondary","Tertiary","Rounded","NoResize","WithMaxLength","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{u as AllColors,C as AllColorsA11y,g as AllColorsOnDark,M as AllColorsOnDarkA11y,y as Default,T as Disabled,z as Large,w as NoResize,S as RTL,q as Readonly,x as Required,N as Rounded,k as Secondary,A as Small,_ as Tertiary,v as WithError,f as WithHelpText,b as WithLabel,L as WithMaxLength,xa as __namedExportsOrder,va as default};
