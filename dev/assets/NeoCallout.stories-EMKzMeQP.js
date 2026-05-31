import{d as a,c as o,a as n,b as fe,h as s}from"./iframe-Bg0OttVg.js";import{a as me}from"./colorShowcase-BQraTlZf.js";import{c as x}from"./createA11yPlay-DxivIEqv.js";import{N as r}from"./NeoCallout-DYGPnLYu.js";import{N as k}from"./NeoLink-DgV7QRv2.js";import{I as t}from"./defaultIcons-Cc4HODhN.js";import{i as A}from"./iconStrings-DvlgHS7z.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-CjNTfdGc.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const ge=["bordered","filled","accent"],Ce=["small","medium"],he=fe.filter(e=>e!=="white"),Le={title:"Molecules/NeoCallout",component:r,tags:["autodocs"],argTypes:{color:{control:"select",options:he,description:"Theme color. Sets border/background and text color.",table:{category:"Appearance"}},variant:{control:"select",options:ge,description:"`bordered` — outline box. `filled` — solid background. `accent` — left-edge accent border with subtle neutral background, typical for inline annotations.",table:{category:"Appearance"}},size:{control:"select",options:Ce,description:"Controls padding and font size. `small` is intended for inline annotations / section labels; `medium` is the default for prominent callouts.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies rounded corners. Default is sharp corners. On the `accent` variant the start-side corners stay sharp regardless so the accent edge reads as a single straight line.",table:{category:"Appearance"}},icon:{control:!1,description:"Optional icon displayed at the start of the callout.",table:{category:"Slots"}},default:{control:!1,description:"Main callout content.",table:{category:"Slots"}}},args:{color:"blue",variant:"bordered"},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},d={tags:["snapshot"],render:e=>a({name:"DefaultRender",setup(){return()=>o(r,e,{default:()=>[n("This feature is currently in beta. Behaviour may change in future releases.")]})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue">
  This feature is currently in beta.
</NeoCallout>`}}}},p={tags:["snapshot"],args:{color:"blue",variant:"bordered"},render:e=>a({name:"WithIconRender",setup(){return()=>o(r,e,{default:()=>[n("This feature is currently in beta. Behaviour may change in future releases.")],icon:()=>t})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="bordered">
  <template #icon>${A}</template>
  This feature is currently in beta. Behaviour may change in future releases.
</NeoCallout>`}}}},m={tags:["snapshot"],args:{color:"blue",variant:"bordered",rounded:!0},render:e=>a({name:"RoundedRender",setup(){return()=>o(r,e,{default:()=>[n("Opt into rounded corners via "),o("code",null,[n("rounded")]),n(".")]})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="bordered" rounded>
  Opt into rounded corners with the rounded prop.
</NeoCallout>`}}}},h={tags:["snapshot"],args:{color:"blue",variant:"accent",size:"small"},render:e=>a({name:"AccentRender",setup(){return()=>o(r,e,{default:()=>[n("Inline annotation with accent border.")]})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="accent" size="small">
  Inline annotation: left-edge accent border with subtle neutral background.
</NeoCallout>`}}}},f={tags:["snapshot"],args:{color:"blue",variant:"filled"},render:e=>a({name:"FilledRender",setup(){return()=>o(r,e,{default:()=>[n("Your session will expire in 5 minutes. Save your work to avoid losing progress.")],icon:()=>t})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="filled">
  <template #icon>${A}</template>
  Your session will expire in 5 minutes.
</NeoCallout>`}}}},g={tags:["snapshot"],args:{color:"blue",variant:"bordered"},render:e=>a({name:"WithLinkRender",setup(){return()=>o(r,e,{default:()=>[n("This feature is currently in beta.")," ",o(k,{href:"https://example.com/changelog",size:"medium",color:"blue"},{default:()=>[n("Read the changelog")]})," ",n("for the latest updates.")],icon:()=>t})}}),parameters:{docs:{source:{code:`<NeoCallout color="blue" variant="bordered">
  <template #icon>${A}</template>
  This feature is currently in beta.
  <NeoLink href="https://example.com/changelog" size="medium" color="blue">
    Read the changelog
  </NeoLink>
  for the latest updates.
</NeoCallout>`}}}},C={tags:["snapshot"],args:{color:"green",variant:"filled"},render:e=>a({name:"FilledWithLinkRender",setup(){return()=>o(r,e,{default:()=>[n("Your changes were saved successfully.")," ",o(k,{href:"https://example.com/details",size:"medium",color:"blue"},{default:()=>[n("View details")]}),n(".")],icon:()=>t})}}),parameters:{docs:{source:{code:`<NeoCallout color="green" variant="filled">
  <template #icon>${A}</template>
  Your changes were saved successfully.
  <NeoLink href="https://example.com/details" size="medium" color="blue">
    View details
  </NeoLink>.
</NeoCallout>`}}}},u={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:me(r,[{name:"Bordered with link",variant:"bordered",renderComponent:(e,l)=>s(l,{color:e,variant:"bordered"},{default:()=>[`${e} bordered — `,s(k,{href:"https://example.com",size:"medium",color:"blue"},{default:()=>"nested link"})],icon:()=>t})},{name:"Filled with link",variant:"filled",renderComponent:(e,l)=>s(l,{color:e,variant:"filled"},{default:()=>[`${e} filled — `,s(k,{href:"https://example.com",size:"medium",color:"blue"},{default:()=>"nested link"})],icon:()=>t})}])},b={...u,tags:["!dev","test-only"],play:x()},v={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},render:e=>a({name:"RTLRender",setup(){return()=>o(r,e,{default:()=>[n("هذا إشعار مهم يحتاج إلى انتباهك.")]})}})},i={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:me(r,[{name:"Bordered",variant:"bordered",renderComponent:(e,l)=>s(l,{color:e,variant:"bordered"},{default:()=>`${e} — bordered callout`,icon:()=>t})}])},c={tags:["snapshot"],render:()=>a({name:"AllColorsFilledRender",setup(){return()=>o("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxInlineSize:"480px"}},[he.map(e=>o(r,{key:e,color:e,variant:"filled"},{default:()=>[e,n(" — filled callout")],icon:()=>t}))])}})},N={...i,tags:["!dev","test-only"],play:x()},y={...c,tags:["!dev","test-only"],play:x()};var I,w,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(w=d.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var L,S,z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=(S=p.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var T,F,W;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue',
    variant: 'bordered',
    rounded: true
  },
  render: (args: NeoCalloutProps) => {
    return defineComponent({
      name: 'RoundedRender',
      setup() {
        return () => <NeoCallout {...args}>
                        Opt into rounded corners via <code>rounded</code>.
                    </NeoCallout>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCallout color="blue" variant="bordered" rounded>
  Opt into rounded corners with the rounded prop.
</NeoCallout>\`
      }
    }
  }
}`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var $,P,B;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue',
    variant: 'accent',
    size: 'small'
  },
  render: (args: NeoCalloutProps) => {
    return defineComponent({
      name: 'AccentRender',
      setup() {
        return () => <NeoCallout {...args}>Inline annotation with accent border.</NeoCallout>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoCallout color="blue" variant="accent" size="small">
  Inline annotation: left-edge accent border with subtle neutral background.
</NeoCallout>\`
      }
    }
  }
}`,...(B=(P=h.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var D,Y,O;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var V,M,_;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(M=g.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var E,j,q;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(q=(j=C.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,H,J;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...AllColorsWithLink,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,oe,re;i.parameters={...i.parameters,docs:{...(ne=i.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(oe=i.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ae,te,le;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(te=c.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var se,ue,ie;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ie=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var ce,de,pe;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...AllColorsFilled,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(pe=(de=y.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const Se=["Default","WithIcon","Rounded","Accent","Filled","WithLink","FilledWithLink","AllColorsWithLink","AllColorsWithLinkA11y","RTL","AllColors","AllColorsFilled","AllColorsA11y","AllColorsFilledA11y"];export{h as Accent,i as AllColors,N as AllColorsA11y,c as AllColorsFilled,y as AllColorsFilledA11y,u as AllColorsWithLink,b as AllColorsWithLinkA11y,d as Default,f as Filled,C as FilledWithLink,v as RTL,m as Rounded,p as WithIcon,g as WithLink,Se as __namedExportsOrder,Le as default};
