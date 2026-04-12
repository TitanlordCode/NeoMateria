import{d as Me,r as Ee,e as Re,v as n,C as m,a as Ve,y as u,z as i,x as $e,A as Pe,t as o,c as l,m as c}from"./iframe-BBbPLObx.js";import{g as De}from"./id-DERw85mN.js";import{g as R,_ as Fe}from"./_plugin-vue_export-helper-DerOYOQE.js";import{d as Be,a as We}from"./argTypes-VnJZhiy7.js";import{c as Le}from"./colorShowcase-CVTHfhfV.js";import"./preload-helper-Dp1pzeXC.js";const Ie=["for"],Oe={key:0,class:"NeoTextArea-required","aria-hidden":"true"},je={key:1,class:"NeoTextArea-requiredText sr-only"},He=["id","name","value","placeholder","disabled","readonly","required","rows","maxlength","minlength","aria-label","aria-describedby","aria-invalid"],Ke={key:1,class:"NeoTextArea-messageWrapper"},Ue=["id"],Ge=["id"],C=Me({__name:"NeoTextArea",props:{name:{},placeholder:{},value:{},helpText:{},errorMessage:{},size:{},color:{},disabled:{type:Boolean},readonly:{type:Boolean},rounded:{type:Boolean},variant:{},rows:{},maxLength:{},minLength:{},resize:{},label:{},ariaLabel:{},required:{type:Boolean},requiredText:{}},emits:["update:value","blur","focus"],setup(a,{emit:s}){const e=a,w=s,d=De("textarea"),E=Ee(e.value??""),Ce=p=>{const r=p.target;E.value=r.value,w("update:value",r.value)},we=Re(()=>{const p=R({component:"NeoTextArea",modifiers:[e.size??"medium",e.variant??"primary",e.rounded?"rounded":"",e.errorMessage?"error":"",e.resize?`resize-${e.resize}`:"resize-vertical"]}),r=R({component:"Themed",modifiers:[e.color??"blue"]});return`${p} ${r}`});return(p,r)=>(o(),n("div",{class:Pe(we.value)},[e.label?(o(),n("label",{key:0,class:"NeoTextArea-label",for:`${m(d)}-${e.name}`},[Ve(u(e.label)+" ",1),e.required?(o(),n("span",Oe,"*")):i("",!0),e.required?(o(),n("span",je," ("+u(e.requiredText)+") ",1)):i("",!0)],8,Ie)):i("",!0),$e("textarea",{id:`${m(d)}-${e.name}`,class:"NeoTextArea-field",name:e.name,value:E.value,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,rows:e.rows??4,maxlength:e.maxLength,minlength:e.minLength,"aria-label":e.ariaLabel,"aria-describedby":e.helpText||e.errorMessage?`${m(d)}-${e.name}-description`:void 0,"aria-invalid":e.errorMessage?"true":void 0,onInput:Ce,onBlur:r[0]||(r[0]=M=>w("blur",M)),onFocus:r[1]||(r[1]=M=>w("focus",M))},null,40,He),e.helpText||e.errorMessage?(o(),n("div",Ke,[e.helpText&&!e.errorMessage?(o(),n("p",{key:0,class:"NeoTextArea-helpText",id:`${m(d)}-${e.name}-description`},u(e.helpText),9,Ue)):i("",!0),e.errorMessage?(o(),n("p",{key:1,class:"NeoTextArea-errorMessage",id:`${m(d)}-${e.name}-description`,role:"alert"},u(e.errorMessage),9,Ge)):i("",!0)])):i("",!0)],2))}}),t=Fe(C,[["__scopeId","data-v-6916f48d"]]);C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:"default",displayName:"NeoTextArea",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"placeholder",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"value",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"helpText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"any",declarations:[],schema:"any"},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"readonly",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | "tertiary"',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rows",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"maxLength",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"minLength",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"resize",global:!1,description:"",tags:[],required:!1,type:'"none" | "vertical" | "horizontal" | "both"',declarations:[],schema:{kind:"enum",type:'"none" | "vertical" | "horizontal" | "both"',schema:['"none"','"vertical"','"horizontal"','"both"']}},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"true",declarations:[],schema:"true"},{name:"requiredText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"blur",description:"Emitted when the textarea loses focus.",tags:[],type:"[event: FocusEvent]",signature:'(event: "blur", event: FocusEvent): void',declarations:[],schema:[{kind:"object",type:"FocusEvent"}]},{name:"focus",description:"Emitted when the textarea gains focus.",tags:[],type:"[event: FocusEvent]",signature:'(event: "focus", event: FocusEvent): void',declarations:[],schema:[{kind:"object",type:"FocusEvent"}]},{name:"update:value",description:"Emitted on every input change. Receives the current textarea value.",tags:[],type:"[value: string]",signature:'(event: "update:value", value: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"resize",type:'"none" | "vertical" | "horizontal" | "both"',description:"",declarations:[],schema:{kind:"enum",type:'"none" | "vertical" | "horizontal" | "both"',schema:['"none"','"vertical"','"horizontal"','"both"']}},{name:"value",type:"string",description:"",declarations:[],schema:"string"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"true",description:"",declarations:[],schema:"true"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"variant",type:'"primary" | "secondary" | "tertiary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"requiredText",type:"string",description:"",declarations:[],schema:"string"},{name:"placeholder",type:"string",description:"",declarations:[],schema:"string"},{name:"helpText",type:"string",description:"",declarations:[],schema:"string"},{name:"errorMessage",type:"string",description:"",declarations:[],schema:"string"},{name:"readonly",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rows",type:"number",description:"",declarations:[],schema:"number"},{name:"maxLength",type:"number",description:"",declarations:[],schema:"number"},{name:"minLength",type:"number",description:"",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/TextArea/NeoTextArea.vue"});const Je=["small","medium","large"],Qe=["primary","secondary","tertiary"],ta={title:"Atoms/NeoTextArea",component:t,tags:["autodocs"],argTypes:{...We,...Be,name:{control:"text",table:{category:"Content"}},label:{control:"text",table:{category:"Content"}},placeholder:{control:"text",table:{category:"Content"}},value:{control:"text",table:{category:"Content"}},color:{description:"Theme color for focus ring, labels, and accents."},size:{control:"select",options:Je,table:{category:"Appearance"},description:"Controls padding and font size."},variant:{control:"select",options:Qe,table:{category:"Appearance"},description:"`default`: standard outlined. `filled`: solid background."},rows:{control:"number",table:{category:"Appearance"},description:"Initial visible line count. The user can resize beyond this unless `resize` is `none`."},resize:{control:"select",options:["none","vertical","horizontal","both"],table:{category:"Appearance"},description:"Controls which directions the user can resize the textarea. `none` disables resizing entirely."},rounded:{control:"boolean",table:{category:"Appearance"},description:"Applies fully rounded corners."},readonly:{control:"boolean",table:{category:"State"},description:"Non-editable but focusable. Value is still submitted."},required:{control:"boolean",table:{category:"State"}},helpText:{control:"text",table:{category:"Validation"},description:"Descriptive text below the field. Used for hints."},errorMessage:{control:"text",table:{category:"Validation"},description:"Replaces `helpText` and applies error styling."},maxLength:{control:"number",table:{category:"Validation"},description:"Hard character limit. A character counter is shown below the field."},minLength:{control:"number",table:{category:"Validation"}}},args:{name:"example-textarea",ariaLabel:"Label",placeholder:"Enter your text here...",size:"medium",variant:"primary",color:"blue"}},g={},y={args:{label:"Description",ariaLabel:void 0}},h={args:{helpText:"Please provide detailed information"}},b={args:{errorMessage:"This field is required"}},f={args:{label:"Textarea Field",ariaLabel:void 0,required:!0,requiredText:"This field is required"}},v={args:{disabled:!0,value:"This textarea is disabled"}},x={args:{readonly:!0,value:"This textarea is readonly"}},T={args:{size:"small"}},q={args:{size:"large"}},z={args:{variant:"secondary"}},_={args:{variant:"tertiary"}},k={args:{rounded:!0}},A={args:{resize:"none"}},N={args:{maxLength:200,helpText:"Maximum 200 characters"}},S={render:Le(t,[{variant:"primary",render:(a,s,e)=>l(t,c(e,{color:a,label:a,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(a,s,e)=>l(t,c(e,{color:a,label:a,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(a,s,e)=>l(t,c(e,{color:a,label:a,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-textarea"}})},L={globals:{backgrounds:"#000"},render:Le(t,[{variant:"primary",render:(a,s,e)=>l(t,c(e,{color:a,label:a,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(a,s,e)=>l(t,c(e,{color:a,label:a,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(a,s,e)=>l(t,c(e,{color:a,label:a,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-textarea"},dark:!0})};var V,$,P;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(P=($=g.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var D,F,B;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    ariaLabel: undefined
  }
}`,...(B=(F=y.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var W,I,O;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    helpText: 'Please provide detailed information'
  }
}`,...(O=(I=h.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var j,H,K;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    errorMessage: 'This field is required'
  }
}`,...(K=(H=b.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var U,G,J;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Textarea Field',
    ariaLabel: undefined,
    required: true,
    requiredText: 'This field is required'
  }
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'This textarea is disabled'
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: 'This textarea is readonly'
  }
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(se=(te=T.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,oe,ie;q.parameters={...q.parameters,docs:{...(ne=q.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(ie=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(de=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ue;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(ue=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,ye,he;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...(he=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var be,fe,ve;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...(ve=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var xe,Te,qe;N.parameters={...N.parameters,docs:{...(xe=N.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    maxLength: 200,
    helpText: 'Maximum 200 characters'
  }
}`,...(qe=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:qe.source}}};var ze,_e,ke;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(ke=(_e=S.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}};var Ae,Ne,Se;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Se=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};const sa=["Default","WithLabel","WithHelpText","WithError","Required","Disabled","Readonly","Small","Large","Secondary","Tertiary","Rounded","NoResize","WithMaxLength","AllColors","AllColorsOnDark"];export{S as AllColors,L as AllColorsOnDark,g as Default,v as Disabled,q as Large,A as NoResize,x as Readonly,f as Required,k as Rounded,z as Secondary,T as Small,_ as Tertiary,b as WithError,h as WithHelpText,y as WithLabel,N as WithMaxLength,sa as __namedExportsOrder,ta as default};
