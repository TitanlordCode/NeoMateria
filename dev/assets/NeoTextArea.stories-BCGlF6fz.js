import{d as He,r as Ke,f as Ue,x as n,D as m,a as Ge,z as y,A as i,y as Je,B as Qe,u as o,c as l,m as c}from"./iframe-CiKriRT1.js";import{g as Xe}from"./id-YUq4rnGL.js";import{g as V,_ as Ye}from"./_plugin-vue_export-helper-DerOYOQE.js";import{d as Ze,a as ea}from"./argTypes-VnJZhiy7.js";import{c as Oe}from"./colorShowcase-C8uURTUW.js";import{c as We}from"./createA11yPlay-CfdnV7f3.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-6MnRr2qa.js";const aa=["for"],ra={key:0,class:"NeoTextArea-required","aria-hidden":"true"},sa={key:1,class:"NeoTextArea-requiredText sr-only"},ta=["id","name","value","placeholder","disabled","readonly","required","rows","maxlength","minlength","aria-label","aria-describedby","aria-invalid"],na={key:1,class:"NeoTextArea-messageWrapper"},oa=["id"],ia=["id"],E=He({__name:"NeoTextArea",props:{name:{},placeholder:{},value:{},helpText:{},errorMessage:{},size:{},color:{},disabled:{type:Boolean},readonly:{type:Boolean},rounded:{type:Boolean},variant:{},rows:{},maxLength:{},minLength:{},resize:{},label:{},ariaLabel:{},required:{type:Boolean},requiredText:{}},emits:["update:value","blur","focus"],setup(a,{emit:t}){const e=a,R=t,d=Xe("textarea"),P=Ke(e.value??""),Ie=g=>{const r=g.target;P.value=r.value,R("update:value",r.value)},je=Ue(()=>{const g=V({component:"NeoTextArea",modifiers:[e.size??"medium",e.variant??"primary",e.rounded?"rounded":"",e.errorMessage?"error":"",e.resize?`resize-${e.resize}`:"resize-vertical"]}),r=V({component:"Themed",modifiers:[e.color??"blue"]});return`${g} ${r}`});return(g,r)=>(o(),n("div",{class:Qe(je.value)},[e.label?(o(),n("label",{key:0,class:"NeoTextArea-label",for:`${m(d)}-${e.name}`},[Ge(y(e.label)+" ",1),e.required?(o(),n("span",ra,"*")):i("",!0),e.required?(o(),n("span",sa," ("+y(e.requiredText)+") ",1)):i("",!0)],8,aa)):i("",!0),Je("textarea",{id:`${m(d)}-${e.name}`,class:"NeoTextArea-field",name:e.name,value:P.value,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,rows:e.rows??4,maxlength:e.maxLength,minlength:e.minLength,"aria-label":e.ariaLabel,"aria-describedby":e.helpText||e.errorMessage?`${m(d)}-${e.name}-description`:void 0,"aria-invalid":e.errorMessage?"true":void 0,onInput:Ie,onBlur:r[0]||(r[0]=D=>R("blur",D)),onFocus:r[1]||(r[1]=D=>R("focus",D))},null,40,ta),e.helpText||e.errorMessage?(o(),n("div",na,[e.helpText&&!e.errorMessage?(o(),n("p",{key:0,class:"NeoTextArea-helpText",id:`${m(d)}-${e.name}-description`},y(e.helpText),9,oa)):i("",!0),e.errorMessage?(o(),n("p",{key:1,class:"NeoTextArea-errorMessage",id:`${m(d)}-${e.name}-description`,role:"alert"},y(e.errorMessage),9,ia)):i("",!0)])):i("",!0)],2))}}),s=Ye(E,[["__scopeId","data-v-bb12350a"]]);E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{exportName:"default",displayName:"NeoTextArea",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"placeholder",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"value",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"helpText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"any",declarations:[],schema:"any"},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"readonly",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | "tertiary"',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rows",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"maxLength",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"minLength",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"resize",global:!1,description:"",tags:[],required:!1,type:'"vertical" | "horizontal" | "none" | "both"',declarations:[],schema:{kind:"enum",type:'"vertical" | "horizontal" | "none" | "both"',schema:['"vertical"','"horizontal"','"none"','"both"']}},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"true",declarations:[],schema:"true"},{name:"requiredText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"blur",description:"Emitted when the textarea loses focus.",tags:[],type:"[event: FocusEvent]",signature:'(event: "blur", event: FocusEvent): void',declarations:[],schema:[{kind:"object",type:"FocusEvent"}]},{name:"focus",description:"Emitted when the textarea gains focus.",tags:[],type:"[event: FocusEvent]",signature:'(event: "focus", event: FocusEvent): void',declarations:[],schema:[{kind:"object",type:"FocusEvent"}]},{name:"update:value",description:"Emitted on every input change. Receives the current textarea value.",tags:[],type:"[value: string]",signature:'(event: "update:value", value: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"resize",type:'"vertical" | "horizontal" | "none" | "both"',description:"",declarations:[],schema:{kind:"enum",type:'"vertical" | "horizontal" | "none" | "both"',schema:['"vertical"','"horizontal"','"none"','"both"']}},{name:"value",type:"string",description:"",declarations:[],schema:"string"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"true",description:"",declarations:[],schema:"true"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"requiredText",type:"string",description:"",declarations:[],schema:"string"},{name:"variant",type:'"primary" | "secondary" | "tertiary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"placeholder",type:"string",description:"",declarations:[],schema:"string"},{name:"helpText",type:"string",description:"",declarations:[],schema:"string"},{name:"errorMessage",type:"string",description:"",declarations:[],schema:"string"},{name:"readonly",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rows",type:"number",description:"",declarations:[],schema:"number"},{name:"maxLength",type:"number",description:"",declarations:[],schema:"number"},{name:"minLength",type:"number",description:"",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/TextArea/NeoTextArea.vue"});const la=["small","medium","large"],ca=["primary","secondary","tertiary"],fa={title:"Atoms/NeoTextArea",component:s,tags:["autodocs"],argTypes:{...ea,...Ze,name:{control:"text",table:{category:"Content"}},label:{control:"text",table:{category:"Content"}},placeholder:{control:"text",table:{category:"Content"}},value:{control:"text",table:{category:"Content"}},color:{description:"Theme color for focus ring, labels, and accents."},size:{control:"select",options:la,table:{category:"Appearance"},description:"Controls padding and font size."},variant:{control:"select",options:ca,table:{category:"Appearance"},description:"`default`: standard outlined. `filled`: solid background."},rows:{control:"number",table:{category:"Appearance"},description:"Initial visible line count. The user can resize beyond this unless `resize` is `none`."},resize:{control:"select",options:["none","vertical","horizontal","both"],table:{category:"Appearance"},description:"Controls which directions the user can resize the textarea. `none` disables resizing entirely."},rounded:{control:"boolean",table:{category:"Appearance"},description:"Applies fully rounded corners."},readonly:{control:"boolean",table:{category:"State"},description:"Non-editable but focusable. Value is still submitted."},required:{control:"boolean",table:{category:"State"}},helpText:{control:"text",table:{category:"Validation"},description:"Descriptive text below the field. Used for hints."},errorMessage:{control:"text",table:{category:"Validation"},description:"Replaces `helpText` and applies error styling."},maxLength:{control:"number",table:{category:"Validation"},description:"Hard character limit. A character counter is shown below the field."},minLength:{control:"number",table:{category:"Validation"}}},args:{name:"example-textarea",ariaLabel:"Label",placeholder:"Enter your text here...",size:"medium",variant:"primary",color:"blue"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},h={tags:["snapshot"]},b={tags:["snapshot"],args:{label:"Description",ariaLabel:void 0}},f={tags:["snapshot"],args:{helpText:"Please provide detailed information"}},v={tags:["snapshot"],args:{errorMessage:"This field is required"}},x={tags:["snapshot"],args:{label:"Textarea Field",ariaLabel:void 0,required:!0,requiredText:"This field is required"}},T={tags:["snapshot"],args:{disabled:!0,value:"This textarea is disabled"}},A={tags:["snapshot"],args:{readonly:!0,value:"This textarea is readonly"}},q={tags:["snapshot"],args:{size:"small"}},z={tags:["snapshot"],args:{size:"large"}},k={tags:["snapshot"],args:{variant:"secondary"}},_={tags:["snapshot"],args:{variant:"tertiary"}},N={tags:["snapshot"],args:{rounded:!0}},L={tags:["snapshot"],args:{resize:"none"}},S={tags:["snapshot"],args:{maxLength:200,helpText:"Maximum 200 characters"}},w={tags:["snapshot"],globals:{direction:"rtl"},args:{ariaLabel:"تسمية",placeholder:"أدخل النص هنا..."},parameters:{snapshot:{viewports:["sm","xl"]}}},p={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:Oe(s,[{variant:"primary",render:(a,t,e)=>l(s,c(e,{color:a,label:a,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(a,t,e)=>l(s,c(e,{color:a,label:a,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(a,t,e)=>l(s,c(e,{color:a,label:a,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-textarea"}})},u={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:Oe(s,[{variant:"primary",render:(a,t,e)=>l(s,c(e,{color:a,label:a,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(a,t,e)=>l(s,c(e,{color:a,label:a,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(a,t,e)=>l(s,c(e,{color:a,label:a,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-textarea"},dark:!0})},C={...p,tags:["!dev","test-only"],play:We()},M={...u,tags:["!dev","test-only"],play:We()};var $,F,B;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(B=(F=h.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var O,W,I;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Description',
    ariaLabel: undefined
  }
}`,...(I=(W=b.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var j,H,K;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(ae=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    readonly: true,
    value: 'This textarea is readonly'
  }
}`,...(te=(se=A.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ne,oe,ie;q.parameters={...q.parameters,docs:{...(ne=q.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(ie=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(de=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ue;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'secondary'
  }
}`,...(ue=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,ye,he;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'tertiary'
  }
}`,...(he=(ye=_.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var be,fe,ve;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    rounded: true
  }
}`,...(ve=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var xe,Te,Ae;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    resize: 'none'
  }
}`,...(Ae=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var qe,ze,ke;S.parameters={...S.parameters,docs:{...(qe=S.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    maxLength: 200,
    helpText: 'Maximum 200 characters'
  }
}`,...(ke=(ze=S.parameters)==null?void 0:ze.docs)==null?void 0:ke.source}}};var _e,Ne,Le;w.parameters={...w.parameters,docs:{...(_e=w.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Le=(Ne=w.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};var Se,we,Ce;p.parameters={...p.parameters,docs:{...(Se=p.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ce=(we=p.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Me,Ee,Re;u.parameters={...u.parameters,docs:{...(Me=u.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Re=(Ee=u.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var De,Pe,Ve;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Ve=(Pe=C.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var $e,Fe,Be;M.parameters={...M.parameters,docs:{...($e=M.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Be=(Fe=M.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};const va=["Default","WithLabel","WithHelpText","WithError","Required","Disabled","Readonly","Small","Large","Secondary","Tertiary","Rounded","NoResize","WithMaxLength","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{p as AllColors,C as AllColorsA11y,u as AllColorsOnDark,M as AllColorsOnDarkA11y,h as Default,T as Disabled,z as Large,L as NoResize,w as RTL,A as Readonly,x as Required,N as Rounded,k as Secondary,q as Small,_ as Tertiary,v as WithError,f as WithHelpText,b as WithLabel,S as WithMaxLength,va as __namedExportsOrder,fa as default};
