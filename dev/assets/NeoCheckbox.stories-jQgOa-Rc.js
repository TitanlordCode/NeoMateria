import{c as de,m as ie}from"./iframe-Dknl-Izy.js";import{N as s}from"./NeoCheckbox-BoOoAV44.js";import{d as ge,a as he}from"./argTypes-VnJZhiy7.js";import{c as ue}from"./colorShowcase-ukgIxckm.js";import{c as pe}from"./createA11yPlay-C_PKokKa.js";import"./preload-helper-Dp1pzeXC.js";import"./id-72NeoYCn.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./axe-Dc5bORdo.js";const be=["small","medium","large"],ve={title:"Atoms/NeoCheckbox",component:s,tags:["autodocs"],argTypes:{...he,...ge,name:{control:"text",table:{category:"Content"}},label:{control:"text",table:{category:"Content"}},value:{control:"text",table:{category:"Content"}},color:{description:"Theme color for the checkbox fill and focus ring."},size:{control:"select",options:be,table:{category:"Appearance"},description:"Controls the checkbox size and label font size."},checked:{control:"boolean",table:{category:"State"}},required:{control:"boolean",table:{category:"State"}},indeterminate:{control:"boolean",table:{category:"State"},description:"Puts the checkbox into a third, partially-checked state. Commonly used for a 'select all' control when only some children are selected. Sets `aria-checked=\"mixed\"`."}},args:{name:"example-checkbox",label:"Accept terms and conditions",size:"medium",color:"blue"}},o={tags:["snapshot"],args:{}},t={tags:["snapshot"],args:{checked:!0}},n={tags:["snapshot"],args:{indeterminate:!0}},c={tags:["snapshot"],args:{required:!0,requiredText:"This field is required"}},l={tags:["snapshot"],args:{disabled:!0}},d={tags:["snapshot"],args:{disabled:!0,checked:!0}},i={tags:["snapshot"],args:{size:"small"}},u={tags:["snapshot"],args:{size:"large"}},p={tags:["snapshot"],args:{label:void 0,ariaLabel:"Accept terms and conditions"}},m={tags:["snapshot"],globals:{backgrounds:"#000"}},g={tags:["snapshot"],globals:{direction:"rtl"},args:{label:"قبول الشروط والأحكام"}},r={tags:["snapshot"],render:ue(s,[{variant:"default",label:"Checkbox",render:(e,me,k)=>de(s,ie(k,{ariaLabel:void 0,color:e,label:e,name:"color-checkbox",checked:!0}),null)}])},a={tags:["snapshot"],globals:{backgrounds:"#000"},render:ue(s,[{variant:"default",label:"Checkbox",render:(e,me,k)=>de(s,ie(k,{ariaLabel:void 0,color:e,label:e,name:"color-checkbox",checked:!0}),null)}],{dark:!0})},h={...r,tags:["!dev","test-only"],play:pe()},b={...a,tags:["!dev","test-only"],play:pe()};var C,y,x;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {}
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,f,A;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    checked: true
  }
}`,...(A=(f=t.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var D,L,v;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    indeterminate: true
  }
}`,...(v=(L=n.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var T,q,z;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    required: true,
    requiredText: 'This field is required'
  }
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var N,O,_;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true
  }
}`,...(_=(O=l.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var P,w,R;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true,
    checked: true
  }
}`,...(R=(w=d.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var I,W,E;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(E=(W=i.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var V,j,B;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(B=(j=u.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var F,G,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: undefined,
    ariaLabel: 'Accept terms and conditions'
  }
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  }
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'قبول الشروط والأحكام'
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;r.parameters={...r.parameters,docs:{...(Y=r.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: createSimpleColorShowcase(NeoCheckbox, [{
    variant: 'default',
    label: 'Checkbox',
    render: (color, _variant, args) => {
      return <NeoCheckbox {...args} ariaLabel={undefined} color={color} label={color} name="color-checkbox" checked={true} />;
    }
  }])
}`,...($=(Z=r.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;a.parameters={...a.parameters,docs:{...(ee=a.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoCheckbox, [{
    variant: 'default',
    label: 'Checkbox',
    render: (color, _, args) => {
      return <NeoCheckbox {...args} ariaLabel={undefined} color={color} label={color} name="color-checkbox" checked={true} />;
    }
  }], {
    dark: true
  })
}`,...(ae=(re=a.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,oe,te;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(te=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,ce,le;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(le=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const Te=["Default","Checked","Indeterminate","Required","Disabled","DisabledChecked","Small","Large","WithoutLabel","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{r as AllColors,h as AllColorsA11y,a as AllColorsOnDark,b as AllColorsOnDarkA11y,t as Checked,o as Default,l as Disabled,d as DisabledChecked,n as Indeterminate,u as Large,m as OnDark,g as RTL,c as Required,i as Small,p as WithoutLabel,Te as __namedExportsOrder,ve as default};
