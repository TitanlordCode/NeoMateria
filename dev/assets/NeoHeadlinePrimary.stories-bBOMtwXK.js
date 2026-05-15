import{b as I,d as t,c as n,m as J,a as s,h as M}from"./iframe-CoRvzhma.js";import{a as j}from"./colorShowcase-wsEEdQV9.js";import{c as q}from"./createA11yPlay-ByZeGIGl.js";import{N as r}from"./NeoHeadlinePrimary-BdpdjNBN.js";import{h as K,a as U}from"./NeoHeadlineTypes-CVOcXnNm.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-1dPYUaTP.js";import"./useHeadline-BZ0XyQbq.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const oe={title:"Atoms/Headline/NeoHeadlinePrimary",component:r,tags:["autodocs"],argTypes:{tag:{control:"select",options:U,description:"The HTML element to render. Decouples visual style from document semantics.",table:{category:"Appearance"}},color:{control:"select",options:I,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},align:{control:"select",options:K,description:"Text alignment.",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}},default:{control:!1,description:"Headline text or rich content.",table:{category:"Slots"}}},args:{tag:"h2"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},l={tags:["snapshot"],render:e=>t({name:"DefaultRender",setup(){return()=>n(r,e,{default:()=>[s("The Quick Brown Fox")]})}}),parameters:{docs:{source:{code:"<NeoHeadlinePrimary>The Quick Brown Fox</NeoHeadlinePrimary>"}}}},d={tags:["snapshot"],args:{color:"blue"},render:e=>t({name:"ColoredRender",setup(){return()=>n(r,e,{default:()=>[s("Colored Headline")]})}}),parameters:{docs:{source:{code:'<NeoHeadlinePrimary color="blue">Colored Headline</NeoHeadlinePrimary>'}}}},i={tags:["snapshot"],args:{align:"center"},render:e=>t({name:"CenteredRender",setup(){return()=>n(r,e,{default:()=>[s("Centered Headline")]})}}),parameters:{docs:{source:{code:'<NeoHeadlinePrimary align="center">Centered Headline</NeoHeadlinePrimary>'}}}},c={tags:["snapshot"],render:e=>t({name:"TruncatedRender",setup(){return()=>n("div",{style:{inlineSize:"400px"}},[n(r,J(e,{truncate:!0}),{default:()=>[s("An Extremely Long Headline That Gets Truncated After One Line")]})])}}),parameters:{docs:{source:{code:"<NeoHeadlinePrimary truncate>An Extremely Long Headline That Gets Truncated After One Line</NeoHeadlinePrimary>"}}}},p={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},render:e=>t({name:"RTLRender",setup(){return()=>n(r,e,{default:()=>[s("الثعلب البني السريع")]})}})},a={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:j(r,[{name:"Default",variant:"default",renderComponent:(e,g)=>M(g,{color:e},{default:()=>e})}])},o={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:j(r,[{name:"Default",variant:"default",renderComponent:(e,g)=>M(g,{color:e},{default:()=>e})}],!0)},u={...a,tags:["!dev","test-only"],play:q()},m={...o,tags:["!dev","test-only"],play:q()};var y,H,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoHeadlinePrimary {...args}>The Quick Brown Fox</NeoHeadlinePrimary>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadlinePrimary>The Quick Brown Fox</NeoHeadlinePrimary>\`
      }
    }
  }
}`,...(f=(H=l.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var h,C,P;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue'
  },
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'ColoredRender',
      setup() {
        return () => <NeoHeadlinePrimary {...args}>Colored Headline</NeoHeadlinePrimary>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadlinePrimary color="blue">Colored Headline</NeoHeadlinePrimary>\`
      }
    }
  }
}`,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var A,N,T;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    align: 'center'
  },
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'CenteredRender',
      setup() {
        return () => <NeoHeadlinePrimary {...args}>Centered Headline</NeoHeadlinePrimary>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadlinePrimary align="center">Centered Headline</NeoHeadlinePrimary>\`
      }
    }
  }
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var x,v,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'TruncatedRender',
      setup() {
        return () => <div style={{
          inlineSize: '400px'
        }}>
                        <NeoHeadlinePrimary {...args} truncate>
                            An Extremely Long Headline That Gets Truncated After One Line
                        </NeoHeadlinePrimary>
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadlinePrimary truncate>An Extremely Long Headline That Gets Truncated After One Line</NeoHeadlinePrimary>\`
      }
    }
  }
}`,...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var R,w,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'RTLRender',
      setup() {
        return () => <NeoHeadlinePrimary {...args}>الثعلب البني السريع</NeoHeadlinePrimary>;
      }
    });
  }
}`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var L,S,k;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createAllColorsRender<typeof NeoHeadlinePrimary>(NeoHeadlinePrimary, [{
    name: 'Default',
    variant: 'default',
    renderComponent: (color, Component) => h(Component, {
      color
    }, {
      default: () => color
    })
  }])
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var O,B,E;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createAllColorsRender<typeof NeoHeadlinePrimary>(NeoHeadlinePrimary, [{
    name: 'Default',
    variant: 'default',
    renderComponent: (color, Component) => h(Component, {
      color
    }, {
      default: () => color
    })
  }], true)
}`,...(E=(B=o.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,G,Q;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Q=(G=u.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var z,V,_;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const te=["Default","Colored","Centered","Truncated","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{a as AllColors,u as AllColorsA11y,o as AllColorsOnDark,m as AllColorsOnDarkA11y,i as Centered,d as Colored,l as Default,p as RTL,c as Truncated,te as __namedExportsOrder,oe as default};
