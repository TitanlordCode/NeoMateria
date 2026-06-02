import{c as s,m as t}from"./iframe-D9nyRK5o.js";import{N as a}from"./NeoInput-BUHDcCCb.js";import{d as Ie,a as Oe}from"./argTypes-VnJZhiy7.js";import{c as Ve}from"./colorShowcase-CPaxLojg.js";import{c as Ee}from"./createA11yPlay-CpEQ4bEB.js";import"./preload-helper-Dp1pzeXC.js";import"./id-DdmGbVuy.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./axe-zbpV6D8O.js";const We=["small","medium","large"],He=["primary","secondary","tertiary"],Qe=["text","email","password","number","tel","url","search","date","time"],Ze={title:"Atoms/NeoInput",component:a,tags:["autodocs","grimeria"],argTypes:{...Oe,...Ie,name:{control:"text",table:{category:"Content"},description:"The `name` attribute submitted with the form."},label:{control:"text",table:{category:"Content"},description:"Visible label text. Mutually exclusive with `ariaLabel`."},placeholder:{control:"text",table:{category:"Content"},description:"Placeholder shown when the field is empty."},value:{control:"text",table:{category:"Content"},description:"The input value (controlled)."},color:{description:"Theme color for focus ring, labels, and accents."},size:{control:"select",options:We,table:{category:"Appearance"},description:"Controls padding and font size of the input field."},variant:{control:"select",options:He,table:{category:"Appearance"},description:"`default`: standard outlined input. `filled`: solid background input."},type:{control:"select",options:Qe,table:{category:"Appearance"},description:"HTML input type. Controls the native keyboard on mobile and browser validation behaviour."},rounded:{control:"boolean",table:{category:"Appearance"},description:"Applies fully rounded corners."},readonly:{control:"boolean",table:{category:"State"},description:"Makes the field non-editable but still focusable and selectable. Unlike `disabled`, the value is still submitted with forms."},required:{control:"boolean",table:{category:"State"},description:"Marks the field as required. Requires `requiredText` to be set."},requiredText:{control:"text",table:{category:"State"},description:"Assistive text describing the requirement, surfaced when `required` is set."},helpText:{control:"text",table:{category:"Validation"},description:"Descriptive text rendered below the input. Used for hints or formatting guidance."},errorMessage:{control:"text",table:{category:"Validation"},description:"Replaces `helpText` and applies error styling when the field has a validation error."},autocomplete:{control:"text",table:{category:"Validation"},description:"HTML `autocomplete` attribute. Hint to the browser for autofill (e.g. `email`, `current-password`, `off`)."},maxlength:{control:"number",table:{category:"Validation"},description:"Maximum number of characters allowed."},minlength:{control:"number",table:{category:"Validation"},description:"Minimum number of characters required."},min:{control:"number",table:{category:"Validation"},description:"Minimum value (for `number`/`date`-style types)."},max:{control:"number",table:{category:"Validation"},description:"Maximum value (for `number`/`date`-style types)."},step:{control:"number",table:{category:"Validation"},description:"Step increment for `number`-style types."},pattern:{control:"text",table:{category:"Validation"},description:"Regex the value must match for native validation."}},args:{name:"example-input",label:"Label",placeholder:"Enter text...",size:"medium",variant:"primary",color:"blue",type:"text"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},i={tags:["snapshot"],args:{}},c={tags:["snapshot"],args:{label:void 0,ariaLabel:"Search",placeholder:"Search...",name:"search"}},p={tags:["snapshot"],args:{helpText:"This is a helpful hint"}},d={tags:["snapshot"],args:{errorMessage:"This field is required"}},m={tags:["snapshot"],args:{required:!0,requiredText:"This field is required"}},u={tags:["snapshot"],args:{disabled:!0,value:"Disabled input"}},g={tags:["snapshot"],args:{readonly:!0,value:"Readonly input"}},h={tags:["no-test"],args:{type:"email",placeholder:"email@example.com",label:"Email"}},b={tags:["snapshot"],args:{type:"password",placeholder:"Enter password",label:"Password"}},y={tags:["no-test"],args:{type:"number",placeholder:"0",label:"Quantity",min:0,max:100}},v={tags:["snapshot"],args:{size:"small"}},f={tags:["snapshot"],args:{size:"large"}},x={tags:["snapshot"],args:{variant:"secondary"}},S={tags:["snapshot"],args:{variant:"tertiary"}},w={tags:["snapshot"],args:{rounded:!0}},T={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},A={tags:["snapshot"],globals:{direction:"rtl"},args:{label:"الاسم الكامل",placeholder:"أدخل اسمك..."},parameters:{snapshot:{viewports:["sm","xl"]}}},n={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:Ve(a,[{variant:"primary",render:(e,o,r)=>s(a,t(r,{color:e,label:e,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(e,o,r)=>s(a,t(r,{color:e,label:e,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(e,o,r)=>s(a,t(r,{color:e,label:e,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-input"}})},l={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:Ve(a,[{variant:"primary",render:(e,o,r)=>s(a,t(r,{color:e,label:e,size:"medium",variant:"primary"}),null)},{variant:"secondary",render:(e,o,r)=>s(a,t(r,{color:e,label:e,size:"medium",variant:"secondary"}),null)},{variant:"tertiary",render:(e,o,r)=>s(a,t(r,{color:e,label:e,size:"medium",variant:"tertiary"}),null)}],{defaultProps:{name:"color-input"},dark:!0})},z={...n,tags:["!dev","test-only"],play:Ee()},C={...l,tags:["!dev","test-only"],play:Ee()};var k,q,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {}
}`,...(D=(q=i.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var N,_,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: undefined,
    ariaLabel: 'Search',
    placeholder: 'Search...',
    name: 'search'
  }
}`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var P,R,M;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    helpText: 'This is a helpful hint'
  }
}`,...(M=(R=p.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var V,E,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    errorMessage: 'This field is required'
  }
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var O,W,H;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    required: true,
    requiredText: 'This field is required'
  }
}`,...(H=(W=m.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var Q,U,F;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true,
    value: 'Disabled input'
  }
}`,...(F=(U=u.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var j,B,G;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    readonly: true,
    value: 'Readonly input'
  }
}`,...(G=(B=g.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    type: 'email',
    placeholder: 'email@example.com',
    label: 'Email'
  }
}`,...(X=(K=h.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    type: 'password',
    placeholder: 'Enter password',
    label: 'Password'
  }
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    type: 'number',
    placeholder: '0',
    label: 'Quantity',
    min: 0,
    max: 100
  }
}`,...(ae=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,te,oe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,le,ie;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,pe,de;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'secondary'
  }
}`,...(de=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ue,ge;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'tertiary'
  }
}`,...(ge=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var he,be,ye;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    rounded: true
  }
}`,...(ye=(be=w.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ve,fe,xe;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(xe=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Se,we,Te;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'الاسم الكامل',
    placeholder: 'أدخل اسمك...'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(Te=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Ae,ze,Ce;n.parameters={...n.parameters,docs:{...(Ae=n.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
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
    }
  })
}`,...(Ce=(ze=n.parameters)==null?void 0:ze.docs)==null?void 0:Ce.source}}};var ke,qe,De;l.parameters={...l.parameters,docs:{...(ke=l.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
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
}`,...(De=(qe=l.parameters)==null?void 0:qe.docs)==null?void 0:De.source}}};var Ne,_e,Le;z.parameters={...z.parameters,docs:{...(Ne=z.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Le=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};var Pe,Re,Me;C.parameters={...C.parameters,docs:{...(Pe=C.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Me=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:Me.source}}};const $e=["Default","WithoutLabel","WithHelpText","WithError","Required","Disabled","Readonly","Email","Password","Number","Small","Large","Secondary","Tertiary","Rounded","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{n as AllColors,z as AllColorsA11y,l as AllColorsOnDark,C as AllColorsOnDarkA11y,i as Default,u as Disabled,h as Email,f as Large,y as Number,T as OnDark,b as Password,A as RTL,g as Readonly,m as Required,w as Rounded,x as Secondary,v as Small,S as Tertiary,d as WithError,p as WithHelpText,c as WithoutLabel,$e as __namedExportsOrder,Ze as default};
