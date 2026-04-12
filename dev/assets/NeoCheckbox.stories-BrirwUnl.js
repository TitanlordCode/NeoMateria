import{c as re,m as ae}from"./iframe-BBbPLObx.js";import{N as r}from"./NeoCheckbox-HeejHXw5.js";import{d as ce,a as te}from"./argTypes-VnJZhiy7.js";import{c as oe}from"./colorShowcase-CVTHfhfV.js";import"./preload-helper-Dp1pzeXC.js";import"./id-DERw85mN.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const ne=["small","medium","large"],ge={title:"Atoms/NeoCheckbox",component:r,tags:["autodocs"],argTypes:{...te,...ce,name:{control:"text",table:{category:"Content"}},label:{control:"text",table:{category:"Content"}},value:{control:"text",table:{category:"Content"}},color:{description:"Theme color for the checkbox fill and focus ring."},size:{control:"select",options:ne,table:{category:"Appearance"},description:"Controls the checkbox size and label font size."},checked:{control:"boolean",table:{category:"State"}},required:{control:"boolean",table:{category:"State"}},indeterminate:{control:"boolean",table:{category:"State"},description:"Puts the checkbox into a third, partially-checked state. Commonly used for a 'select all' control when only some children are selected. Sets `aria-checked=\"mixed\"`."}},args:{name:"example-checkbox",label:"Accept terms and conditions",size:"medium",color:"blue"}},a={args:{}},o={args:{checked:!0}},s={args:{indeterminate:!0}},c={args:{required:!0,requiredText:"This field is required"}},t={args:{disabled:!0}},n={args:{disabled:!0,checked:!0}},l={args:{size:"small"}},d={args:{size:"large"}},i={args:{label:void 0,ariaLabel:"Accept terms and conditions"}},u={globals:{backgrounds:"#000"}},m={globals:{direction:"rtl"},args:{label:"قبول الشروط والأحكام"}},p={render:oe(r,[{variant:"default",label:"Checkbox",render:(e,se,g)=>re(r,ae(g,{ariaLabel:void 0,color:e,label:e,name:"color-checkbox",checked:!0}),null)}])},b={globals:{backgrounds:"#000"},render:oe(r,[{variant:"default",label:"Checkbox",render:(e,se,g)=>re(r,ae(g,{ariaLabel:void 0,color:e,label:e,name:"color-checkbox",checked:!0}),null)}],{dark:!0})};var h,k,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var C,S,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,L,A;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(A=(L=s.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var D,T,q;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    required: true,
    requiredText: 'This field is required'
  }
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var z,N,v;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(v=(N=t.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var _,O,w;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...(w=(O=n.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var R,I,P;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(P=(I=l.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var W,E,V;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(V=(E=d.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var j,B,F;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: undefined,
    ariaLabel: 'Accept terms and conditions'
  }
}`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,H,J;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'قبول الشروط والأحكام'
  }
}`,...(Q=(M=m.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,X,Y;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoCheckbox, [{
    variant: 'default',
    label: 'Checkbox',
    render: (color, _variant, args) => {
      return <NeoCheckbox {...args} ariaLabel={undefined} color={color} label={color} name="color-checkbox" checked={true} />;
    }
  }])
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const he=["Default","Checked","Indeterminate","Required","Disabled","DisabledChecked","Small","Large","WithoutLabel","OnDark","RTL","AllColors","AllColorsOnDark"];export{p as AllColors,b as AllColorsOnDark,o as Checked,a as Default,t as Disabled,n as DisabledChecked,s as Indeterminate,d as Large,u as OnDark,m as RTL,c as Required,l as Small,i as WithoutLabel,he as __namedExportsOrder,ge as default};
