import{d as te,c as b,m as ae}from"./iframe-_LwaFV-t.js";import{N as r}from"./NeoSpinner-STzEQT0d.js";import{N as le}from"./NeoButton-DcNGoYOB.js";import{c as oe}from"./colorShowcase-mTvG6tuw.js";import{c as se}from"./createA11yPlay-k-ODbeDd.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./useButton-CEg444c1.js";import"./NeoIcon-BBZo5uSS.js";import"./axe-Ue4VX9fj.js";const ie=["small","medium","large"],ye={title:"Atoms/NeoSpinner",component:r,tags:["autodocs"],argTypes:{color:{description:"Theme color of the spinning indicator."},size:{control:"select",options:ie,table:{category:"Appearance"},description:"Controls the spinner diameter."},label:{control:"text",table:{category:"Accessibility"},description:"Visible text label rendered alongside the spinner."},ariaLabel:{control:"text",table:{category:"Accessibility"},description:"Screen-reader label when no visible label is shown. Defaults to 'Loading' if omitted."}},args:{size:"medium",color:"blue",ariaLabel:"Loading"}},s={tags:["snapshot"]},n={tags:["snapshot"],args:{size:"small"}},t={tags:["snapshot"],args:{size:"large"}},l={tags:["snapshot"],args:{label:"Please wait...",dir:"row"}},i={tags:["snapshot"],args:{label:"Please wait..."}},c={tags:["snapshot"]},p={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoButton text="Loading..." color="blue" variant="primary">
  <template #prefix>
    <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  </template>
</NeoButton>`}}},render:e=>te({name:"InButtonRender",setup(){return()=>b(le,{color:e.color,variant:"primary",text:"Loading..."},{prefix:()=>b(r,{size:"small",color:e.color,ariaHidden:!0},null)})}})},d={tags:["snapshot"],globals:{backgrounds:"#000"}},u={tags:["snapshot"],globals:{direction:"rtl"},args:{label:"جاري التحميل..."}},a={tags:["snapshot"],render:oe(r,[{variant:"default",label:"Spinner",render:(e,ne,S)=>b(r,ae(S,{ariaLabel:void 0,ariaHidden:void 0,color:e,label:e}),null)}])},o={tags:["snapshot"],globals:{backgrounds:"#000"},render:oe(r,[{variant:"default",label:"Spinner",render:(e,ne,S)=>b(r,ae(S,{ariaLabel:void 0,ariaHidden:void 0,color:e,label:e}),null)}],{dark:!0})},m={...a,tags:["!dev","test-only"],play:se()},g={...o,tags:["!dev","test-only"],play:se()};var h,f,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var A,L,C;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(C=(L=n.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var N,v,k;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var w,x,z;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Please wait...',
    dir: 'row'
  }
}`,...(z=(x=l.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var D,B,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Please wait...'
  }
}`,...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var O,H,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(R=(H=c.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var _,I,T;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var V,W,E;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  }
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var j,q,F;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'جاري التحميل...'
  }
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,J,K;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: createSimpleColorShowcase(NeoSpinner, [{
    variant: 'default',
    label: 'Spinner',
    render: (color, _, args) => {
      return <NeoSpinner {...args} ariaLabel={undefined} ariaHidden={undefined} color={color} label={color} />;
    }
  }])
}`,...(K=(J=a.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
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
}`,...(U=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Ae=["Default","Small","Large","LabelRow","CustomLabel","WithoutLabel","InButton","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{a as AllColors,m as AllColorsA11y,o as AllColorsOnDark,g as AllColorsOnDarkA11y,i as CustomLabel,s as Default,p as InButton,l as LabelRow,t as Large,d as OnDark,u as RTL,n as Small,c as WithoutLabel,Ae as __namedExportsOrder,ye as default};
