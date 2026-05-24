import{d as t,c as o,a as n,b as se,h as s}from"./iframe-BF-isInV.js";import{a as te}from"./colorShowcase-8IYy4dxm.js";import{c as k}from"./createA11yPlay-ZXQq4FWN.js";import{N as r}from"./NeoCallout-Cwgg0U17.js";import{N}from"./NeoLink-CRoy5d8e.js";import{I as a}from"./defaultIcons-DOhcB03P.js";import{i as y}from"./iconStrings-DvlgHS7z.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-CIqaWmEG.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const ie=["bordered","filled"],le=se.filter(e=>e!=="white"),ve={title:"Molecules/NeoCallout",component:r,tags:["autodocs"],argTypes:{color:{control:"select",options:le,description:"Theme color. Sets border/background and text color.",table:{category:"Appearance"}},variant:{control:"select",options:ie,description:"`bordered` — outline box. `filled` — solid background.",table:{category:"Appearance"}},icon:{control:!1,description:"Optional icon displayed at the start of the callout.",table:{category:"Slots"}},default:{control:!1,description:"Main callout content.",table:{category:"Slots"}}},args:{color:"blue",variant:"bordered"},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},d={tags:["snapshot"],render:e=>t({name:"DefaultRender",setup(){return()=>o(r,e,{default:()=>[n("This feature is currently in beta. Behaviour may change in future releases.")]})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue">
  This feature is currently in beta.
</NeoCallout>`}}}},p={tags:["snapshot"],args:{color:"blue",variant:"bordered"},render:e=>t({name:"WithIconRender",setup(){return()=>o(r,e,{default:()=>[n("This feature is currently in beta. Behaviour may change in future releases.")],icon:()=>a})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="bordered">
  <template #icon>${y}</template>
  This feature is currently in beta. Behaviour may change in future releases.
</NeoCallout>`}}}},m={tags:["snapshot"],args:{color:"blue",variant:"filled"},render:e=>t({name:"FilledRender",setup(){return()=>o(r,e,{default:()=>[n("Your session will expire in 5 minutes. Save your work to avoid losing progress.")],icon:()=>a})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="filled">
  <template #icon>${y}</template>
  Your session will expire in 5 minutes.
</NeoCallout>`}}}},f={tags:["snapshot"],args:{color:"blue",variant:"bordered"},render:e=>t({name:"WithLinkRender",setup(){return()=>o(r,e,{default:()=>[n("This feature is currently in beta.")," ",o(N,{href:"https://example.com/changelog",size:"medium",color:"blue"},{default:()=>[n("Read the changelog")]})," ",n("for the latest updates.")],icon:()=>a})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="bordered">
  <template #icon>${y}</template>
  This feature is currently in beta.
  <NeoLink href="https://example.com/changelog" size="medium" color="blue">
    Read the changelog
  </NeoLink>
  for the latest updates.
</NeoCallout>`}}}},h={tags:["snapshot"],args:{color:"green",variant:"filled"},render:e=>t({name:"FilledWithLinkRender",setup(){return()=>o(r,e,{default:()=>[n("Your changes were saved successfully.")," ",o(N,{href:"https://example.com/details",size:"medium",color:"blue"},{default:()=>[n("View details")]}),n(".")],icon:()=>a})}}),parameters:{docs:{source:{code:`<NeoCallout color="green" variant="filled">
  <template #icon>${y}</template>
  Your changes were saved successfully.
  <NeoLink href="https://example.com/details" size="medium" color="blue">
    View details
  </NeoLink>.
</NeoCallout>`}}}},i={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:te(r,[{name:"Bordered with link",variant:"bordered",renderComponent:(e,l)=>s(l,{color:e,variant:"bordered"},{default:()=>[`${e} bordered — `,s(N,{href:"https://example.com",size:"medium",color:"blue"},{default:()=>"nested link"})],icon:()=>a})},{name:"Filled with link",variant:"filled",renderComponent:(e,l)=>s(l,{color:e,variant:"filled"},{default:()=>[`${e} filled — `,s(N,{href:"https://example.com",size:"medium",color:"blue"},{default:()=>"nested link"})],icon:()=>a})}])},g={...i,tags:["!dev","test-only"],play:k()},C={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},render:e=>t({name:"RTLRender",setup(){return()=>o(r,e,{default:()=>[n("هذا إشعار مهم يحتاج إلى انتباهك.")]})}})},u={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:te(r,[{name:"Bordered",variant:"bordered",renderComponent:(e,l)=>s(l,{color:e,variant:"bordered"},{default:()=>`${e} — bordered callout`,icon:()=>a})}])},c={tags:["snapshot"],render:()=>t({name:"AllColorsFilledRender",setup(){return()=>o("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"480px"}},[le.map(e=>o(r,{key:e,color:e,variant:"filled"},{default:()=>[e,n(" — filled callout")],icon:()=>a}))])}})},b={...u,tags:["!dev","test-only"],play:k()},v={...c,tags:["!dev","test-only"],play:k()};var x,A,L;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(A=d.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var I,w,R;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(w=p.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var S,T,F;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(T=m.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var W,z,$;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue',
    variant: 'bordered'
  },
  render: (args: NeoCalloutProps) => {
    return defineComponent({
      name: 'WithLinkRender',
      setup() {
        return () => <NeoCallout {...args} v-slots={{
          icon: () => InfoIcon
        }}>
                        This feature is currently in beta.{' '}
                        <NeoLink href="https://example.com/changelog" size="medium" color="blue">
                            Read the changelog
                        </NeoLink>{' '}
                        for the latest updates.
                    </NeoCallout>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCallout color="blue" variant="bordered">
  <template #icon>\${infoIconSvg}</template>
  This feature is currently in beta.
  <NeoLink href="https://example.com/changelog" size="medium" color="blue">
    Read the changelog
  </NeoLink>
  for the latest updates.
</NeoCallout>\`
      }
    }
  }
}`,...($=(z=f.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var B,P,D;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'green',
    variant: 'filled'
  },
  render: (args: NeoCalloutProps) => {
    return defineComponent({
      name: 'FilledWithLinkRender',
      setup() {
        return () => <NeoCallout {...args} v-slots={{
          icon: () => InfoIcon
        }}>
                        Your changes were saved successfully.{' '}
                        <NeoLink href="https://example.com/details" size="medium" color="blue">
                            View details
                        </NeoLink>
                        .
                    </NeoCallout>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCallout color="green" variant="filled">
  <template #icon>\${infoIconSvg}</template>
  Your changes were saved successfully.
  <NeoLink href="https://example.com/details" size="medium" color="blue">
    View details
  </NeoLink>.
</NeoCallout>\`
      }
    }
  }
}`,...(D=(P=h.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var Y,V,M;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createAllColorsRender<typeof NeoCallout>(NeoCallout, [{
    name: 'Bordered with link',
    variant: 'bordered',
    renderComponent: (color, Component) => h(Component, {
      color,
      variant: 'bordered'
    }, {
      default: () => [\`\${color} bordered — \`, h(NeoLink, {
        href: 'https://example.com',
        size: 'medium',
        color: 'blue'
      }, {
        default: () => 'nested link'
      })],
      icon: () => InfoIcon
    })
  }, {
    name: 'Filled with link',
    variant: 'filled',
    renderComponent: (color, Component) => h(Component, {
      color,
      variant: 'filled'
    }, {
      default: () => [\`\${color} filled — \`, h(NeoLink, {
        href: 'https://example.com',
        size: 'medium',
        color: 'blue'
      }, {
        default: () => 'nested link'
      })],
      icon: () => InfoIcon
    })
  }])
}`,...(M=(V=i.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var O,_,E;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...AllColorsWithLink,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(E=(_=g.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var j,q,G;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(G=(q=C.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=c.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,ne;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ne=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,re,ae;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...AllColorsFilled,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const Ne=["Default","WithIcon","Filled","WithLink","FilledWithLink","AllColorsWithLink","AllColorsWithLinkA11y","RTL","AllColors","AllColorsFilled","AllColorsA11y","AllColorsFilledA11y"];export{u as AllColors,b as AllColorsA11y,c as AllColorsFilled,v as AllColorsFilledA11y,i as AllColorsWithLink,g as AllColorsWithLinkA11y,d as Default,m as Filled,h as FilledWithLink,C as RTL,p as WithIcon,f as WithLink,Ne as __namedExportsOrder,ve as default};
