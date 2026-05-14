import{d as te,c as b,m as ae}from"./iframe-CkJnHXYZ.js";import{N as r}from"./NeoSpinner-UkFp0Mgb.js";import{N as le}from"./NeoButton-1Q8KJHJn.js";import{c as se}from"./colorShowcase-BeF077N1.js";import{c as oe}from"./createA11yPlay-CJMyjW1_.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./useButton-BufdyVBV.js";import"./NeoIcon-Bak8HgJH.js";import"./axe-dqPKGUWm.js";const ie=["small","medium","large"],ye={title:"Atoms/NeoSpinner",component:r,tags:["autodocs"],argTypes:{color:{description:"Theme color of the spinning indicator."},size:{control:"select",options:ie,table:{category:"Appearance"},description:"Controls the spinner diameter."},label:{control:"text",table:{category:"Accessibility"},description:"Visible text label rendered alongside the spinner."},ariaLabel:{control:"text",table:{category:"Accessibility"},description:"Screen-reader label when no visible label is shown. Defaults to 'Loading' if omitted."}},args:{size:"medium",color:"blue",ariaLabel:"Loading"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},o={tags:["snapshot"]},n={tags:["snapshot"],args:{size:"small"}},t={tags:["snapshot"],args:{size:"large"}},l={tags:["snapshot"],args:{label:"Please wait...",dir:"row"}},i={tags:["snapshot"],args:{label:"Please wait..."}},p={tags:["snapshot"]},c={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoButton text="Loading..." color="blue" variant="primary">
  <template #prefix>
    <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  </template>
</NeoButton>`}}},render:e=>te({name:"InButtonRender",setup(){return()=>b(le,{color:e.color,variant:"primary",text:"Loading..."},{prefix:()=>b(r,{size:"small",color:e.color,ariaHidden:!0},null)})}})},d={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},m={tags:["snapshot"],globals:{direction:"rtl"},args:{label:"جاري التحميل..."},parameters:{snapshot:{viewports:["sm","xl"]}}},a={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:se(r,[{variant:"default",label:"Spinner",render:(e,ne,h)=>b(r,ae(h,{ariaLabel:void 0,ariaHidden:void 0,color:e,label:e}),null)}])},s={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:se(r,[{variant:"default",label:"Spinner",render:(e,ne,h)=>b(r,ae(h,{ariaLabel:void 0,ariaHidden:void 0,color:e,label:e}),null)}],{dark:!0})},u={...a,tags:["!dev","test-only"],play:oe()},g={...s,tags:["!dev","test-only"],play:oe()};var S,f,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var A,v,w;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,L,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(C=(L=t.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var N,k,z;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Please wait...',
    dir: 'row'
  }
}`,...(z=(k=l.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var D,B,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Please wait...'
  }
}`,...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var O,H,R;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(R=(H=p.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var _,I,T;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoButton text="Loading..." color="blue" variant="primary">
  <template #prefix>
    <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  </template>
</NeoButton>\`
      }
    }
  },
  render: (args: NeoSpinnerProps) => {
    return defineComponent({
      name: 'InButtonRender',
      setup() {
        return () => <NeoButton color={args.color as SurfaceColor} variant="primary" text="Loading..." v-slots={{
          prefix: () => <NeoSpinner size="small" color={args.color} ariaHidden={true} />
        }} />;
      }
    });
  }
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var V,W,E;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var j,q,F;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'جاري التحميل...'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,J,K;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoSpinner, [{
    variant: 'default',
    label: 'Spinner',
    render: (color, _, args) => {
      return <NeoSpinner {...args} ariaLabel={undefined} ariaHidden={undefined} color={color} label={color} />;
    }
  }])
}`,...(K=(J=a.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoSpinner, [{
    variant: 'default',
    label: 'Spinner',
    render: (color, _, args) => {
      return <NeoSpinner {...args} ariaLabel={undefined} ariaHidden={undefined} color={color} label={color} />;
    }
  }], {
    dark: true
  })
}`,...(U=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Ae=["Default","Small","Large","LabelRow","CustomLabel","WithoutLabel","InButton","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{a as AllColors,u as AllColorsA11y,s as AllColorsOnDark,g as AllColorsOnDarkA11y,i as CustomLabel,o as Default,c as InButton,l as LabelRow,t as Large,d as OnDark,m as RTL,n as Small,p as WithoutLabel,Ae as __namedExportsOrder,ye as default};
