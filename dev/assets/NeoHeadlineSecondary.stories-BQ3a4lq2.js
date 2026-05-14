import{b as i,d as s,c as n,i as Q,a as u}from"./iframe-aH-Nj2u6.js";import{N as r}from"./NeoHeadlineSecondary-CfGDU8dN.js";import{h as j,a as V}from"./NeoHeadlineTypes-CVOcXnNm.js";import{g as _}from"./colorShowcase-BAzr1TiL.js";import{c as L}from"./createA11yPlay-BxYtly6p.js";import"./preload-helper-Dp1pzeXC.js";import"./useHeadline-DWlcID0o.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./axe-C6h9_ZGB.js";function F(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Q(e)}const U={title:"Atoms/Headline/NeoHeadlineSecondary",component:r,tags:["autodocs"],argTypes:{tag:{control:"select",options:V,description:"The HTML element to render. Decouples visual style from document semantics.",table:{category:"Appearance"}},color:{control:"select",options:i,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},align:{control:"select",options:j,description:"Text alignment.",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}},default:{control:!1,description:"Headline text or rich content.",table:{category:"Slots"}}},args:{tag:"h2"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},t={tags:["snapshot"],render:e=>s({name:"DefaultRender",setup(){return()=>n(r,e,{default:()=>[u("The Quick Brown Fox")]})}}),parameters:{docs:{source:{code:"<NeoHeadlineSecondary>The Quick Brown Fox</NeoHeadlineSecondary>"}}}},l={tags:["snapshot"],args:{color:"blue"},render:e=>s({name:"ColoredRender",setup(){return()=>n(r,e,{default:()=>[u("Colored Headline")]})}}),parameters:{docs:{source:{code:'<NeoHeadlineSecondary color="blue">Colored Headline</NeoHeadlineSecondary>'}}}},c={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},render:e=>s({name:"RTLRender",setup(){return()=>n(r,e,{default:()=>[u("الثعلب البني السريع")]})}})},o={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:()=>s({name:"AllColorsRender",setup(){return()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},[i.map(e=>_("NeoHeadlineSecondary",e,n(r,{key:e,color:e},F(e)?e:{default:()=>[e]}),"default",!1))])}})},a={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:()=>s({name:"AllColorsOnDarkRender",setup(){return()=>n("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px"}},[i.map(e=>n(r,{key:e,color:e},F(e)?e:{default:()=>[e]}))])}})},d={...o,tags:["!dev","test-only"],play:L()},p={...a,tags:["!dev","test-only"],play:L()};var m,y,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoHeadlineSecondary {...args}>The Quick Brown Fox</NeoHeadlineSecondary>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadlineSecondary>The Quick Brown Fox</NeoHeadlineSecondary>\`
      }
    }
  }
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,h,A;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue'
  },
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'ColoredRender',
      setup() {
        return () => <NeoHeadlineSecondary {...args}>Colored Headline</NeoHeadlineSecondary>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadlineSecondary color="blue">Colored Headline</NeoHeadlineSecondary>\`
      }
    }
  }
}`,...(A=(h=l.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var S,C,H;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        return () => <NeoHeadlineSecondary {...args}>الثعلب البني السريع</NeoHeadlineSecondary>;
      }
    });
  }
}`,...(H=(C=c.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var x,N,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: () => {
    return defineComponent({
      name: 'AllColorsRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
                        {colors.map(color => getColorWrapper('NeoHeadlineSecondary', color as SurfaceColor, <NeoHeadlineSecondary key={color} color={color}>
                                    {color}
                                </NeoHeadlineSecondary>, 'default', false))}
                    </div>;
      }
    });
  }
}`,...(b=(N=o.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var v,k,D;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: () => {
    return defineComponent({
      name: 'AllColorsOnDarkRender',
      setup() {
        return () => <div class="u-onDark" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
                        {colors.map(color => <NeoHeadlineSecondary key={color} color={color}>
                                {color}
                            </NeoHeadlineSecondary>)}
                    </div>;
      }
    });
  }
}`,...(D=(k=a.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var T,w,R;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(R=(w=d.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var O,B,P;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(P=(B=p.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const X=["Default","Colored","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{o as AllColors,d as AllColorsA11y,a as AllColorsOnDark,p as AllColorsOnDarkA11y,l as Colored,t as Default,c as RTL,X as __namedExportsOrder,U as default};
