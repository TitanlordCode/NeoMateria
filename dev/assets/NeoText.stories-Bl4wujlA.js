import{b as F,d as m,c as r,a as n,i as H,h as q}from"./iframe-D97hRsDr.js";import{a as M}from"./colorShowcase-B0D6CXNh.js";import{c as X}from"./createA11yPlay-BakXPOC5.js";import{N as o}from"./NeoText-DVnu1yua.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-BAN8dmkr.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const W=["lead","base","small","caption"],G=["p","span","div"],I=["regular","medium","semibold","bold"];function E(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!H(e)}const te={title:"Atoms/NeoText",component:o,tags:["autodocs","grimeria"],argTypes:{size:{control:"select",options:W,description:"`lead` — large intro text (textXl, relaxed). `base` — body copy (textMd, normal). `small` — secondary labels (textSm). `caption` — fine print (textXs).",table:{category:"Appearance"}},tag:{control:"select",options:G,description:"HTML element to render. Defaults to `p`.",table:{category:"Appearance"}},color:{control:"select",options:F,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},weight:{control:"select",options:I,description:"Font weight override. Defaults to inherited weight (regular).",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}},default:{control:!1,description:"The text content.",table:{category:"Slots"}}},args:{size:"base"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},t="The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.",l={tags:["snapshot"],render:e=>m({name:"DefaultRender",setup(){return()=>r(o,e,E(t)?t:{default:()=>[t]})}}),parameters:{docs:{source:{code:`<NeoText>${t}</NeoText>`}}}},u={tags:["snapshot"],render:()=>m({name:"AllSizesRender",setup(){return()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},[r(o,{size:"lead"},{default:()=>[n("lead — "),t]}),r(o,{size:"base"},{default:()=>[n("base — "),t]}),r(o,{size:"small"},{default:()=>[n("small — "),t]}),r(o,{size:"caption"},{default:()=>[n("caption — "),t]})])}}),parameters:{docs:{source:{code:`<NeoText size="lead">Lead text</NeoText>
<NeoText size="base">Base text</NeoText>
<NeoText size="small">Small text</NeoText>
<NeoText size="caption">Caption text</NeoText>`}}}},p={tags:["snapshot"],args:{color:"blue"},render:e=>m({name:"ColoredRender",setup(){return()=>r(o,e,E(t)?t:{default:()=>[t]})}}),parameters:{docs:{source:{code:`<NeoText color="blue">${t}</NeoText>`}}}},c={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},render:e=>m({name:"RTLRender",setup(){return()=>r(o,e,{default:()=>[n("الثعلب البني السريع يقفز فوق الكلب الكسول")]})}})},a={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:M(o,[{name:"Default",variant:"default",renderComponent:(e,x)=>q(x,{color:e},{default:()=>e})}])},s={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:M(o,[{name:"Default",variant:"default",renderComponent:(e,x)=>q(x,{color:e},{default:()=>e})}],!0)},i={...a,tags:["!dev","test-only"],play:X()},d={...s,tags:["!dev","test-only"],play:X()};var g,T,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoTextProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoText {...args}>{sampleText}</NeoText>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoText>\${sampleText}</NeoText>\`
      }
    }
  }
}`,...(f=(T=l.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var N,b,y;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: () => {
    return defineComponent({
      name: 'AllSizesRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
                        <NeoText size="lead">lead — {sampleText}</NeoText>
                        <NeoText size="base">base — {sampleText}</NeoText>
                        <NeoText size="small">small — {sampleText}</NeoText>
                        <NeoText size="caption">caption — {sampleText}</NeoText>
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoText size="lead">Lead text</NeoText>
<NeoText size="base">Base text</NeoText>
<NeoText size="small">Small text</NeoText>
<NeoText size="caption">Caption text</NeoText>\`
      }
    }
  }
}`,...(y=(b=u.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var A,h,C;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue'
  },
  render: (args: NeoTextProps) => {
    return defineComponent({
      name: 'ColoredRender',
      setup() {
        return () => <NeoText {...args}>{sampleText}</NeoText>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoText color="blue">\${sampleText}</NeoText>\`
      }
    }
  }
}`,...(C=(h=p.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var v,z,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: (args: NeoTextProps) => {
    return defineComponent({
      name: 'RTLRender',
      setup() {
        return () => <NeoText {...args}>الثعلب البني السريع يقفز فوق الكلب الكسول</NeoText>;
      }
    });
  }
}`,...(S=(z=c.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var D,w,R;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createAllColorsRender<typeof NeoText>(NeoText, [{
    name: 'Default',
    variant: 'default',
    renderComponent: (color, Component) => h(Component, {
      color
    }, {
      default: () => color
    })
  }])
}`,...(R=(w=a.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var k,O,L;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createAllColorsRender<typeof NeoText>(NeoText, [{
    name: 'Default',
    variant: 'default',
    renderComponent: (color, Component) => h(Component, {
      color
    }, {
      default: () => color
    })
  }], true)
}`,...(L=(O=s.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var P,j,B;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var $,V,_;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const oe=["Default","AllSizes","Colored","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{a as AllColors,i as AllColorsA11y,s as AllColorsOnDark,d as AllColorsOnDarkA11y,u as AllSizes,p as Colored,l as Default,c as RTL,oe as __namedExportsOrder,te as default};
