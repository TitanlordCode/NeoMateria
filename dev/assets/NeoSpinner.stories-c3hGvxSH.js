import{d as Y,c as m,m as Q}from"./iframe-BBbPLObx.js";import{N as r}from"./NeoSpinner-Cp89AKKr.js";import{N as Z}from"./NeoButton-CsxJoi-B.js";import{c as U}from"./colorShowcase-CVTHfhfV.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./useButton-otF8SIdU.js";import"./NeoIcon-DXYOa7dd.js";const $=["small","medium","large"],ie={title:"Atoms/NeoSpinner",component:r,tags:["autodocs"],argTypes:{color:{description:"Theme color of the spinning indicator."},size:{control:"select",options:$,table:{category:"Appearance"},description:"Controls the spinner diameter."},label:{control:"text",table:{category:"Accessibility"},description:"Visible text label rendered alongside the spinner."},ariaLabel:{control:"text",table:{category:"Accessibility"},description:"Screen-reader label when no visible label is shown. Defaults to 'Loading' if omitted."}},args:{size:"medium",color:"blue",ariaLabel:"Loading"}},a={},o={args:{size:"small"}},n={args:{size:"large"}},s={args:{label:"Please wait...",dir:"row"}},t={args:{label:"Please wait..."}},l={},i={parameters:{docs:{source:{code:`<NeoButton text="Loading..." color="blue" variant="primary">
  <template #prefix>
    <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  </template>
</NeoButton>`}}},render:e=>Y({name:"InButtonRender",setup(){return()=>m(Z,{color:e.color,variant:"primary",text:"Loading..."},{prefix:()=>m(r,{size:"small",color:e.color,ariaHidden:!0},null)})}})},c={globals:{backgrounds:"#000"}},d={globals:{direction:"rtl"},args:{label:"جاري التحميل..."}},u={render:U(r,[{variant:"default",label:"Spinner",render:(e,X,g)=>m(r,Q(g,{ariaLabel:void 0,ariaHidden:void 0,color:e,label:e}),null)}])},p={globals:{backgrounds:"#000"},render:U(r,[{variant:"default",label:"Spinner",render:(e,X,g)=>m(r,Q(g,{ariaLabel:void 0,ariaHidden:void 0,color:e,label:e}),null)}],{dark:!0})};var b,S,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var L,N,C;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(C=(N=o.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var h,w,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var z,A,k;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Please wait...',
    dir: 'row'
  }
}`,...(k=(A=s.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var v,y,B;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Please wait...'
  }
}`,...(B=(y=t.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var D,H,P;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var R,_,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var I,T,V;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(V=(T=c.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var W,E,j;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'جاري التحميل...'
  }
}`,...(j=(E=d.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var q,F,G;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoSpinner, [{
    variant: 'default',
    label: 'Spinner',
    render: (color, _, args) => {
      return <NeoSpinner {...args} ariaLabel={undefined} ariaHidden={undefined} color={color} label={color} />;
    }
  }])
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,M;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const ce=["Default","Small","Large","LabelRow","CustomLabel","WithoutLabel","InButton","OnDark","RTL","AllColors","AllColorsOnDark"];export{u as AllColors,p as AllColorsOnDark,t as CustomLabel,a as Default,i as InButton,s as LabelRow,n as Large,c as OnDark,d as RTL,o as Small,l as WithoutLabel,ce as __namedExportsOrder,ie as default};
