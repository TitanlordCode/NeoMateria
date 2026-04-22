import{c as s,m as o}from"./iframe-B0Dukz3x.js";import{N as a}from"./NeoInput-D7ywETWc.js";import{d as Oe,a as Me}from"./argTypes-VnJZhiy7.js";import{c as Ve}from"./colorShowcase-DrQqXaLn.js";import{c as Ie}from"./createA11yPlay-BQ9rYRTW.js";import"./preload-helper-Dp1pzeXC.js";import"./id-zcpSeUBv.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./axe-C0a-FzRY.js";const We=["small","medium","large"],He=["primary","secondary","tertiary"],Qe=["text","email","password","number","tel","url","search","date","time"],Ze={title:"Atoms/NeoInput",component:a,tags:["autodocs"],argTypes:{...Me,...Oe,name:{control:"text",table:{category:"Content"}},label:{control:"text",table:{category:"Content"}},placeholder:{control:"text",table:{category:"Content"}},value:{control:"text",table:{category:"Content"}},color:{description:"Theme color for focus ring, labels, and accents."},size:{control:"select",options:We,table:{category:"Appearance"},description:"Controls padding and font size of the input field."},variant:{control:"select",options:He,table:{category:"Appearance"},description:"`default`: standard outlined input. `filled`: solid background input."},type:{control:"select",options:Qe,table:{category:"Appearance"},description:"HTML input type. Controls the native keyboard on mobile and browser validation behaviour."},rounded:{control:"boolean",table:{category:"Appearance"},description:"Applies fully rounded corners."},readonly:{control:"boolean",table:{category:"State"},description:"Makes the field non-editable but still focusable and selectable. Unlike `disabled`, the value is still submitted with forms."},required:{control:"boolean",table:{category:"State"}},helpText:{control:"text",table:{category:"Validation"},description:"Descriptive text rendered below the input. Used for hints or formatting guidance."},errorMessage:{control:"text",table:{category:"Validation"},description:"Replaces `helpText` and applies error styling when the field has a validation error."},autocomplete:{control:"text",table:{category:"Validation"},description:"HTML `autocomplete` attribute. Hint to the browser for autofill (e.g. `email`, `current-password`, `off`)."},maxlength:{control:"number",table:{category:"Validation"}},minlength:{control:"number",table:{category:"Validation"}},min:{control:"number",table:{category:"Validation"}},max:{control:"number",table:{category:"Validation"}},step:{control:"number",table:{category:"Validation"}},pattern:{control:"text",table:{category:"Validation"}}},args:{name:"example-input",label:"Label",placeholder:"Enter text...",size:"medium",variant:"primary",color:"blue",type:"text"}},c={tags:["snapshot"],args:{}},i={tags:["snapshot"],args:{label:void 0,ariaLabel:"Search",placeholder:"Search...",name:"search"}},p={tags:["snapshot"],args:{helpText:"This is a helpful hint"}},d={tags:["snapshot"],args:{errorMessage:"This field is required"}},u={tags:["snapshot"],args:{required:!0,requiredText:"This field is required"}},m={tags:["snapshot"],args:{disabled:!0,value:"Disabled input"}},g={tags:["snapshot"],args:{readonly:!0,value:"Readonly input"}},y={tags:["no-test"],args:{type:"email",placeholder:"email@example.com",label:"Email"}},b={tags:["snapshot"],args:{type:"password",placeholder:"Enter password",label:"Password"}},h={tags:["no-test"],args:{type:"number",placeholder:"0",label:"Quantity",min:0,max:100}},v={tags:["snapshot"],args:{size:"small"}},f={tags:["snapshot"],args:{size:"large"}},S={tags:["snapshot"],args:{variant:"secondary"}},x={tags:["snapshot"],args:{variant:"tertiary"}},A={tags:["snapshot"],args:{rounded:!0}},T={tags:["snapshot"],globals:{backgrounds:"#000"}},z={tags:["snapshot"],globals:{direction:"rtl"},args:{label:"الاسم الكامل",placeholder:"أدخل اسمك..."}},n={tags:["snapshot"],render:Ve(a,[{variant:"primary",render:(e,t,r)=>s(a,o(r,{color:e,label:e,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(e,t,r)=>s(a,o(r,{color:e,label:e,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(e,t,r)=>s(a,o(r,{color:e,label:e,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-input"}})},l={tags:["snapshot"],globals:{backgrounds:"#000"},render:Ve(a,[{variant:"primary",render:(e,t,r)=>s(a,o(r,{color:e,label:e,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(e,t,r)=>s(a,o(r,{color:e,label:e,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(e,t,r)=>s(a,o(r,{color:e,label:e,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-input"},dark:!0})},C={...n,tags:["!dev","test-only"],play:Ie()},w={...l,tags:["!dev","test-only"],play:Ie()};var k,D,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {}
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var _,L,P;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: undefined,
    ariaLabel: 'Search',
    placeholder: 'Search...',
    name: 'search'
  }
}`,...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var q,E,R;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    helpText: 'This is a helpful hint'
  }
}`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var V,I,O;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    errorMessage: 'This field is required'
  }
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var M,W,H;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    required: true,
    requiredText: 'This field is required'
  }
}`,...(H=(W=u.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var Q,U,F;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true,
    value: 'Disabled input'
  }
}`,...(F=(U=m.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var j,B,G;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    readonly: true,
    value: 'Readonly input'
  }
}`,...(G=(B=g.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,X;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    type: 'email',
    placeholder: 'email@example.com',
    label: 'Email'
  }
}`,...(X=(K=y.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    type: 'password',
    placeholder: 'Enter password',
    label: 'Password'
  }
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    type: 'number',
    placeholder: '0',
    label: 'Quantity',
    min: 0,
    max: 100
  }
}`,...(ae=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,oe,te;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(te=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,le,ce;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(ce=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,pe,de;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'secondary'
  }
}`,...(de=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ue,me,ge;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'tertiary'
  }
}`,...(ge=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ye,be,he;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    rounded: true
  }
}`,...(he=(be=A.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ve,fe,Se;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  }
}`,...(Se=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var xe,Ae,Te;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'الاسم الكامل',
    placeholder: 'أدخل اسمك...'
  }
}`,...(Te=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var ze,Ce,we;n.parameters={...n.parameters,docs:{...(ze=n.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(we=(Ce=n.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var ke,De,Ne;l.parameters={...l.parameters,docs:{...(ke=l.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(Ne=(De=l.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};var _e,Le,Pe;C.parameters={...C.parameters,docs:{...(_e=C.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Pe=(Le=C.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var qe,Ee,Re;w.parameters={...w.parameters,docs:{...(qe=w.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Re=(Ee=w.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};const $e=["Default","WithoutLabel","WithHelpText","WithError","Required","Disabled","Readonly","Email","Password","Number","Small","Large","Secondary","Tertiary","Rounded","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{n as AllColors,C as AllColorsA11y,l as AllColorsOnDark,w as AllColorsOnDarkA11y,c as Default,m as Disabled,y as Email,f as Large,h as Number,T as OnDark,b as Password,z as RTL,g as Readonly,u as Required,A as Rounded,S as Secondary,v as Small,x as Tertiary,d as WithError,p as WithHelpText,i as WithoutLabel,$e as __namedExportsOrder,Ze as default};
