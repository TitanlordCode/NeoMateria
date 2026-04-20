import{b as I,d as t,c as n,m as J,a as s,h as M}from"./iframe-_LwaFV-t.js";import{a as j}from"./colorShowcase-mTvG6tuw.js";import{c as q}from"./createA11yPlay-k-ODbeDd.js";import{N as r}from"./NeoHeadlinePrimary-CzMnbp_A.js";import{h as K,a as U}from"./NeoHeadlineTypes-CVOcXnNm.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-Ue4VX9fj.js";import"./useHeadline-C3m15hx5.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const oe={title:"Atoms/Headline/NeoHeadlinePrimary",component:r,tags:["autodocs"],argTypes:{tag:{control:"select",options:U,description:"The HTML element to render. Decouples visual style from document semantics.",table:{category:"Appearance"}},color:{control:"select",options:I,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},align:{control:"select",options:K,description:"Text alignment.",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}},default:{control:!1,description:"Headline text or rich content.",table:{category:"Slots"}}},args:{tag:"h2"}},l={tags:["snapshot"],render:e=>t({name:"DefaultRender",setup(){return()=>n(r,e,{default:()=>[s("The Quick Brown Fox")]})}}),parameters:{docs:{source:{code:"<NeoHeadlinePrimary>The Quick Brown Fox</NeoHeadlinePrimary>"}}}},d={tags:["snapshot"],args:{color:"blue"},render:e=>t({name:"ColoredRender",setup(){return()=>n(r,e,{default:()=>[s("Colored Headline")]})}}),parameters:{docs:{source:{code:'<NeoHeadlinePrimary color="blue">Colored Headline</NeoHeadlinePrimary>'}}}},i={tags:["snapshot"],args:{align:"center"},render:e=>t({name:"CenteredRender",setup(){return()=>n(r,e,{default:()=>[s("Centered Headline")]})}}),parameters:{docs:{source:{code:'<NeoHeadlinePrimary align="center">Centered Headline</NeoHeadlinePrimary>'}}}},c={tags:["snapshot"],render:e=>t({name:"TruncatedRender",setup(){return()=>n("div",{style:{inlineSize:"400px"}},[n(r,J(e,{truncate:!0}),{default:()=>[s("An Extremely Long Headline That Gets Truncated After One Line")]})])}}),parameters:{docs:{source:{code:"<NeoHeadlinePrimary truncate>An Extremely Long Headline That Gets Truncated After One Line</NeoHeadlinePrimary>"}}}},u={tags:["snapshot"],globals:{direction:"rtl"},render:e=>t({name:"RTLRender",setup(){return()=>n(r,e,{default:()=>[s("الثعلب البني السريع")]})}})},a={tags:["snapshot"],render:j(r,[{name:"Default",variant:"default",renderComponent:(e,g)=>M(g,{color:e},{default:()=>e})}])},o={tags:["snapshot"],globals:{backgrounds:"#000"},render:j(r,[{name:"Default",variant:"default",renderComponent:(e,g)=>M(g,{color:e},{default:()=>e})}],!0)},m={...a,tags:["!dev","test-only"],play:q()},p={...o,tags:["!dev","test-only"],play:q()};var y,H,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(H=l.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var C,P,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var N,h,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var b,x,R;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(R=(x=c.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var v,D,L;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'RTLRender',
      setup() {
        return () => <NeoHeadlinePrimary {...args}>الثعلب البني السريع</NeoHeadlinePrimary>;
      }
    });
  }
}`,...(L=(D=u.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var S,k,O;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: createAllColorsRender<typeof NeoHeadlinePrimary>(NeoHeadlinePrimary, [{
    name: 'Default',
    variant: 'default',
    renderComponent: (color, Component) => h(Component, {
      color
    }, {
      default: () => color
    })
  }])
}`,...(O=(k=a.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var w,B,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
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
}`,...(E=(B=o.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,G,Q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Q=(G=m.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var z,V,_;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(_=(V=p.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const te=["Default","Colored","Centered","Truncated","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{a as AllColors,m as AllColorsA11y,o as AllColorsOnDark,p as AllColorsOnDarkA11y,i as Centered,d as Colored,l as Default,u as RTL,c as Truncated,te as __namedExportsOrder,oe as default};
