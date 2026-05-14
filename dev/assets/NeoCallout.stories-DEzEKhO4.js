import{d as t,c as o,a as s,b as _,h as E}from"./iframe-aH-Nj2u6.js";import{a as j}from"./colorShowcase-BAzr1TiL.js";import{c as V}from"./createA11yPlay-BxYtly6p.js";import{N as r}from"./NeoCallout-zajZ2E_X.js";import{I as m}from"./defaultIcons-D5fLY_Ck.js";import{i as z}from"./iconStrings-DsK5_d8D.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-C6h9_ZGB.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const q=["bordered","filled"],M=_.filter(e=>e!=="white"),re={title:"Molecules/NeoCallout",component:r,tags:["autodocs"],argTypes:{color:{control:"select",options:M,description:"Theme color. Sets border/background and text color.",table:{category:"Appearance"}},variant:{control:"select",options:q,description:"`bordered` — outline box. `filled` — solid background.",table:{category:"Appearance"}},icon:{control:!1,description:"Optional icon displayed at the start of the callout.",table:{category:"Slots"}},default:{control:!1,description:"Main callout content.",table:{category:"Slots"}}},args:{color:"blue",variant:"bordered"},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},l={tags:["snapshot"],render:e=>t({name:"DefaultRender",setup(){return()=>o(r,e,{default:()=>[s("This feature is currently in beta. Behaviour may change in future releases.")]})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue">
  This feature is currently in beta.
</NeoCallout>`}}}},u={tags:["snapshot"],args:{color:"blue",variant:"bordered"},render:e=>t({name:"WithIconRender",setup(){return()=>o(r,e,{default:()=>[s("This feature is currently in beta. Behaviour may change in future releases.")],icon:()=>m})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="bordered">
  <template #icon>${z}</template>
  This feature is currently in beta. Behaviour may change in future releases.
</NeoCallout>`}}}},i={tags:["snapshot"],args:{color:"blue",variant:"filled"},render:e=>t({name:"FilledRender",setup(){return()=>o(r,e,{default:()=>[s("Your session will expire in 5 minutes. Save your work to avoid losing progress.")],icon:()=>m})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="filled">
  <template #icon>${z}</template>
  Your session will expire in 5 minutes.
</NeoCallout>`}}}},c={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},render:e=>t({name:"RTLRender",setup(){return()=>o(r,e,{default:()=>[s("هذا إشعار مهم يحتاج إلى انتباهك.")]})}})},n={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:j(r,[{name:"Bordered",variant:"bordered",renderComponent:(e,O)=>E(O,{color:e,variant:"bordered"},{default:()=>`${e} — bordered callout`,icon:()=>m})}])},a={tags:["snapshot"],render:()=>t({name:"AllColorsFilledRender",setup(){return()=>o("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"480px"}},[M.map(e=>o(r,{key:e,color:e,variant:"filled"},{default:()=>[e,s(" — filled callout")],icon:()=>m}))])}})},d={...n,tags:["!dev","test-only"],play:V()},p={...a,tags:["!dev","test-only"],play:V()};var f,g,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoCalloutProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoCallout {...args}>
                        This feature is currently in beta. Behaviour may change in future releases.
                    </NeoCallout>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCallout color="blue">
  This feature is currently in beta.
</NeoCallout>\`
      }
    }
  }
}`,...(C=(g=l.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var h,y,v;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue',
    variant: 'bordered'
  },
  render: (args: NeoCalloutProps) => {
    return defineComponent({
      name: 'WithIconRender',
      setup() {
        return () => <NeoCallout {...args} v-slots={{
          icon: () => InfoIcon
        }}>
                        This feature is currently in beta. Behaviour may change in future releases.
                    </NeoCallout>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCallout color="blue" variant="bordered">
  <template #icon>\${infoIconSvg}</template>
  This feature is currently in beta. Behaviour may change in future releases.
</NeoCallout>\`
      }
    }
  }
}`,...(v=(y=u.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,N,A;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue',
    variant: 'filled'
  },
  render: (args: NeoCalloutProps) => {
    return defineComponent({
      name: 'FilledRender',
      setup() {
        return () => <NeoCallout {...args} v-slots={{
          icon: () => InfoIcon
        }}>
                        Your session will expire in 5 minutes. Save your work to avoid losing progress.
                    </NeoCallout>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCallout color="blue" variant="filled">
  <template #icon>\${infoIconSvg}</template>
  Your session will expire in 5 minutes.
</NeoCallout>\`
      }
    }
  }
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var x,I,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: (args: NeoCalloutProps) => {
    return defineComponent({
      name: 'RTLRender',
      setup() {
        return () => <NeoCallout {...args}>هذا إشعار مهم يحتاج إلى انتباهك.</NeoCallout>;
      }
    });
  }
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var R,T,w;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createAllColorsRender<typeof NeoCallout>(NeoCallout, [{
    name: 'Bordered',
    variant: 'bordered',
    renderComponent: (color, Component) => h(Component, {
      color,
      variant: 'bordered'
    }, {
      default: () => \`\${color} — bordered callout\`,
      icon: () => InfoIcon
    })
  }])
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var F,B,D;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: () => {
    return defineComponent({
      name: 'AllColorsFilledRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxInlineSize: '480px'
        }}>
                        {surfaceColors.map(color => <NeoCallout key={color} color={color} variant="filled" v-slots={{
            icon: () => InfoIcon
          }}>
                                {color} — filled callout
                            </NeoCallout>)}
                    </div>;
      }
    });
  }
}`,...(D=(B=a.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var P,k,$;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...($=(k=d.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var L,W,Y;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...AllColorsFilled,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Y=(W=p.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const oe=["Default","WithIcon","Filled","RTL","AllColors","AllColorsFilled","AllColorsA11y","AllColorsFilledA11y"];export{n as AllColors,d as AllColorsA11y,a as AllColorsFilled,p as AllColorsFilledA11y,l as Default,i as Filled,c as RTL,u as WithIcon,oe as __namedExportsOrder,re as default};
