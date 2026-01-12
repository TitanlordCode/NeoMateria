import{d as Ce,p as Le,j as Me,k as n,l as m,q as $e,u as p,a as we,t as C,n as Ee,o,b as Re,c as i,m as l}from"./iframe-acYjf2IA.js";import{g as Pe}from"./id-BD99uDNx.js";import{g as M,_ as Be}from"./_plugin-vue_export-helper-BaMiToec.js";import{c as ke}from"./colorShowcase-CCwc2uRL.js";import"./preload-helper-Dp1pzeXC.js";const Fe=["for"],De={key:0,class:"NeoTextArea-required","aria-label":"required"},Ie=["id","name","value","placeholder","disabled","readonly","required","rows","maxlength","minlength","aria-label","aria-describedby","aria-invalid"],Ve={key:1,class:"NeoTextArea-messageWrapper"},We=["id"],Oe=["id"],qe=Ce({__name:"NeoTextArea",props:{class:{},name:{},label:{},ariaLabel:{},placeholder:{},value:{},helpText:{},errorMessage:{},size:{},color:{},disabled:{type:Boolean},readonly:{type:Boolean},required:{type:Boolean},rounded:{type:Boolean},variant:{},rows:{},maxLength:{},minLength:{},resize:{}},emits:["update:value","blur","focus"],setup(a,{emit:t}){const e=a,S=t,c=Pe("textarea"),L=Le(e.value??""),_e=s=>{const d=s.target;L.value=d.value,S("update:value",d.value)},Ne=s=>{S("blur",s)},Ae=s=>{S("focus",s)},Se=Me(()=>{const s=M({component:"NeoTextArea",modifiers:[e.size??"medium",e.variant??"primary",e.rounded?"rounded":"",e.errorMessage?"error":"",e.resize?`resize-${e.resize}`:"resize-vertical"],additional:e.class}),d=M({component:"Themed",modifiers:[e.color??"grey"]});return`${s} ${d}`});return(s,d)=>(o(),n("div",{class:Ee(Se.value)},[e.label?(o(),n("label",{key:0,class:"NeoTextArea-label",for:`${p(c)}-${e.name}`},[we(C(e.label)+" ",1),e.required?(o(),n("span",De,"*")):m("",!0)],8,Fe)):m("",!0),$e("textarea",{id:`${p(c)}-${e.name}`,class:"NeoTextArea-field",name:e.name,value:L.value,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,rows:e.rows??4,maxlength:e.maxLength,minlength:e.minLength,"aria-label":e.ariaLabel,"aria-describedby":e.helpText||e.errorMessage?`${p(c)}-${e.name}-description`:void 0,"aria-invalid":e.errorMessage?"true":void 0,onInput:_e,onBlur:Ne,onFocus:Ae},null,40,Ie),e.helpText||e.errorMessage?(o(),n("div",Ve,[e.helpText&&!e.errorMessage?(o(),n("p",{key:0,class:"NeoTextArea-helpText",id:`${p(c)}-${e.name}-description`},C(e.helpText),9,We)):m("",!0),e.errorMessage?(o(),n("p",{key:1,class:"NeoTextArea-errorMessage",id:`${p(c)}-${e.name}-description`,role:"alert"},C(e.errorMessage),9,Oe)):m("",!0)])):m("",!0)],2))}}),r=Be(qe,[["__scopeId","data-v-1addc60e"]]);qe.__docgenInfo={exportName:"default",displayName:"NeoTextArea",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"placeholder",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"value",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"helpText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"readonly",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"required",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | "tertiary"',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rows",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"maxLength",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"minLength",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"resize",global:!1,description:"",tags:[],required:!1,type:'"none" | "vertical" | "horizontal" | "both"',declarations:[],schema:{kind:"enum",type:'"none" | "vertical" | "horizontal" | "both"',schema:['"none"','"vertical"','"horizontal"','"both"']}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"blur",description:"",tags:[],type:"[event: FocusEvent]",signature:'(event: "blur", event: FocusEvent): void',declarations:[],schema:[{kind:"object",type:"FocusEvent"}]},{name:"focus",description:"",tags:[],type:"[event: FocusEvent]",signature:'(event: "focus", event: FocusEvent): void',declarations:[],schema:[{kind:"object",type:"FocusEvent"}]},{name:"update:value",description:"",tags:[],type:"[value: string]",signature:'(event: "update:value", value: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"resize",type:'"none" | "vertical" | "horizontal" | "both"',description:"",declarations:[],schema:{kind:"enum",type:'"none" | "vertical" | "horizontal" | "both"',schema:['"none"','"vertical"','"horizontal"','"both"']}},{name:"value",type:"string",description:"",declarations:[],schema:"string"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"variant",type:'"primary" | "secondary" | "tertiary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"placeholder",type:"string",description:"",declarations:[],schema:"string"},{name:"helpText",type:"string",description:"",declarations:[],schema:"string"},{name:"errorMessage",type:"string",description:"",declarations:[],schema:"string"},{name:"readonly",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rows",type:"number",description:"",declarations:[],schema:"number"},{name:"maxLength",type:"number",description:"",declarations:[],schema:"number"},{name:"minLength",type:"number",description:"",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/TextArea/NeoTextArea.vue"};const Je={title:"Atoms/NeoTextArea",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},variant:{control:"select",options:["primary","secondary","tertiary"]},resize:{control:"select",options:["none","vertical","horizontal","both"]},color:{control:"select",options:Re}},args:{name:"example-textarea",label:"Label",placeholder:"Enter your text here...",size:"medium",variant:"primary",color:"blue"}},u={},g={args:{helpText:"Please provide detailed information"}},y={args:{errorMessage:"This field is required"}},h={args:{required:!0}},b={args:{disabled:!0,value:"This textarea is disabled"}},v={args:{readonly:!0,value:"This textarea is readonly"}},f={args:{size:"small"}},x={args:{size:"large"}},T={args:{variant:"secondary"}},z={args:{variant:"tertiary"}},k={args:{rounded:!0}},q={args:{resize:"none"}},_={args:{maxLength:200,helpText:"Maximum 200 characters"}},N={render:ke(r,[{variant:"primary",render:(a,t,e)=>i(r,l(e,{color:a,label:a,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(a,t,e)=>i(r,l(e,{color:a,label:a,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(a,t,e)=>i(r,l(e,{color:a,label:a,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-textarea"}})},A={globals:{backgrounds:"#000"},render:ke(r,[{variant:"primary",render:(a,t,e)=>i(r,l(e,{color:a,label:a,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(a,t,e)=>i(r,l(e,{color:a,label:a,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(a,t,e)=>i(r,l(e,{color:a,label:a,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-textarea"},dark:!0})};var $,w,E;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:"{}",...(E=(w=u.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var R,P,B;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    helpText: 'Please provide detailed information'
  }
}`,...(B=(P=g.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var F,D,I;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    errorMessage: 'This field is required'
  }
}`,...(I=(D=y.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var V,W,O;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(O=(W=h.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var j,H,K;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'This textarea is disabled'
  }
}`,...(K=(H=b.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var U,G,J;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: 'This textarea is readonly'
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(te=(se=T.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ne,oe,ie;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(ie=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ue;q.parameters={...q.parameters,docs:{...(me=q.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...(ue=(pe=q.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,ye,he;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    maxLength: 200,
    helpText: 'Maximum 200 characters'
  }
}`,...(he=(ye=_.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var be,ve,fe;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(fe=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var xe,Te,ze;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
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
}`,...(ze=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:ze.source}}};const Qe=["Default","WithHelpText","WithError","Required","Disabled","Readonly","Small","Large","Secondary","Tertiary","Rounded","NoResize","WithMaxLength","AllColors","AllColorsOnDark"];export{N as AllColors,A as AllColorsOnDark,u as Default,b as Disabled,x as Large,q as NoResize,v as Readonly,h as Required,k as Rounded,T as Secondary,f as Small,z as Tertiary,y as WithError,g as WithHelpText,_ as WithMaxLength,Qe as __namedExportsOrder,Je as default};
