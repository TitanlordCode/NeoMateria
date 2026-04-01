import{c as o,m as t}from"./iframe-BNVHVJhn.js";import{N as a}from"./NeoInput-CqHhAuRg.js";import{d as Ae,a as Le}from"./argTypes-VnJZhiy7.js";import{c as Ce}from"./colorShowcase-BzxvNubM.js";import"./preload-helper-Dp1pzeXC.js";import"./id-DERw85mN.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const qe=["small","medium","large"],De=["primary","secondary","tertiary"],Ee=["text","email","password","number","tel","url","search","date","time"],Oe={title:"Atoms/NeoInput",component:a,tags:["autodocs"],argTypes:{...Le,...Ae,name:{control:"text",table:{category:"Content"}},label:{control:"text",table:{category:"Content"}},placeholder:{control:"text",table:{category:"Content"}},value:{control:"text",table:{category:"Content"}},color:{description:"Theme color for focus ring, labels, and accents."},size:{control:"select",options:qe,table:{category:"Appearance"},description:"Controls padding and font size of the input field."},variant:{control:"select",options:De,table:{category:"Appearance"},description:"`default`: standard outlined input. `filled`: solid background input."},type:{control:"select",options:Ee,table:{category:"Appearance"},description:"HTML input type. Controls the native keyboard on mobile and browser validation behaviour."},rounded:{control:"boolean",table:{category:"Appearance"},description:"Applies fully rounded corners."},readonly:{control:"boolean",table:{category:"State"},description:"Makes the field non-editable but still focusable and selectable. Unlike `disabled`, the value is still submitted with forms."},required:{control:"boolean",table:{category:"State"}},helpText:{control:"text",table:{category:"Validation"},description:"Descriptive text rendered below the input. Used for hints or formatting guidance."},errorMessage:{control:"text",table:{category:"Validation"},description:"Replaces `helpText` and applies error styling when the field has a validation error."},autocomplete:{control:"text",table:{category:"Validation"},description:"HTML `autocomplete` attribute. Hint to the browser for autofill (e.g. `email`, `current-password`, `off`)."},maxlength:{control:"number",table:{category:"Validation"}},minlength:{control:"number",table:{category:"Validation"}},min:{control:"number",table:{category:"Validation"}},max:{control:"number",table:{category:"Validation"}},step:{control:"number",table:{category:"Validation"}},pattern:{control:"text",table:{category:"Validation"}}},args:{name:"example-input",label:"Label",placeholder:"Enter text...",size:"medium",variant:"primary",color:"blue",type:"text"}},n={args:{}},l={args:{label:void 0,ariaLabel:"Search",placeholder:"Search...",name:"search"}},i={args:{helpText:"This is a helpful hint"}},c={args:{errorMessage:"This field is required"}},d={args:{required:!0,requiredText:"This field is required"}},p={args:{disabled:!0,value:"Disabled input"}},u={args:{readonly:!0,value:"Readonly input"}},m={args:{type:"email",placeholder:"email@example.com",label:"Email"}},g={args:{type:"password",placeholder:"Enter password",label:"Password"}},b={args:{type:"number",placeholder:"0",label:"Quantity",min:0,max:100}},y={args:{size:"small"}},h={args:{size:"large"}},v={args:{variant:"secondary"}},f={args:{variant:"tertiary"}},S={args:{rounded:!0}},x={globals:{backgrounds:"#000"}},T={globals:{direction:"rtl"},args:{label:"الاسم الكامل",placeholder:"أدخل اسمك..."}},z={render:Ce(a,[{variant:"primary",render:(e,s,r)=>o(a,t(r,{color:e,label:e,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(e,s,r)=>o(a,t(r,{color:e,label:e,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(e,s,r)=>o(a,t(r,{color:e,label:e,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-input"}})},w={globals:{backgrounds:"#000"},render:Ce(a,[{variant:"primary",render:(e,s,r)=>o(a,t(r,{color:e,label:e,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(e,s,r)=>o(a,t(r,{color:e,label:e,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(e,s,r)=>o(a,t(r,{color:e,label:e,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-input"},dark:!0})};var k,N,_;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {}
}`,...(_=(N=n.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var C,A,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: undefined,
    ariaLabel: 'Search',
    placeholder: 'Search...',
    name: 'search'
  }
}`,...(L=(A=l.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var q,D,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    helpText: 'This is a helpful hint'
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var R,V,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    errorMessage: 'This field is required'
  }
}`,...(I=(V=c.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var P,M,W;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    required: true,
    requiredText: 'This field is required'
  }
}`,...(W=(M=d.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var H,O,Q;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled input'
  }
}`,...(Q=(O=p.parameters)==null?void 0:O.docs)==null?void 0:Q.source}}};var U,F,j;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: 'Readonly input'
  }
}`,...(j=(F=u.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var B,G,J;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'email@example.com',
    label: 'Email'
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,X,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password',
    label: 'Password'
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: '0',
    label: 'Quantity',
    min: 0,
    max: 100
  }
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,oe;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(oe=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,se,ne;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(ne=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,ie,ce;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(ce=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,ue;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(ue=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,ge,be;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...(be=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ye,he,ve;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(ve=(he=x.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,Se,xe;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'الاسم الكامل',
    placeholder: 'أدخل اسمك...'
  }
}`,...(xe=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var Te,ze,we;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(we=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:we.source}}};var ke,Ne,_e;w.parameters={...w.parameters,docs:{...(ke=w.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(_e=(Ne=w.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source}}};const Qe=["Default","WithoutLabel","WithHelpText","WithError","Required","Disabled","Readonly","Email","Password","Number","Small","Large","Secondary","Tertiary","Rounded","OnDark","RTL","AllColors","AllColorsOnDark"];export{z as AllColors,w as AllColorsOnDark,n as Default,p as Disabled,m as Email,h as Large,b as Number,x as OnDark,g as Password,T as RTL,u as Readonly,d as Required,S as Rounded,v as Secondary,y as Small,f as Tertiary,c as WithError,i as WithHelpText,l as WithoutLabel,Qe as __namedExportsOrder,Oe as default};
