import{b as u,d as t,c as n,i as Q,a as p}from"./iframe-Dknl-Izy.js";import{N as r}from"./NeoHeadlineSecondary-CgEKEcRo.js";import{h as j,a as V}from"./NeoHeadlineTypes-CVOcXnNm.js";import{g as _}from"./colorShowcase-ukgIxckm.js";import{c as L}from"./createA11yPlay-C_PKokKa.js";import"./preload-helper-Dp1pzeXC.js";import"./useHeadline-1j-ccmJX.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./axe-Dc5bORdo.js";function F(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Q(e)}const U={title:"Atoms/Headline/NeoHeadlineSecondary",component:r,tags:["autodocs"],argTypes:{tag:{control:"select",options:V,description:"The HTML element to render. Decouples visual style from document semantics.",table:{category:"Appearance"}},color:{control:"select",options:u,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},align:{control:"select",options:j,description:"Text alignment.",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}},default:{control:!1,description:"Headline text or rich content.",table:{category:"Slots"}}},args:{tag:"h2"}},s={tags:["snapshot"],render:e=>t({name:"DefaultRender",setup(){return()=>n(r,e,{default:()=>[p("The Quick Brown Fox")]})}}),parameters:{docs:{source:{code:"<NeoHeadlineSecondary>The Quick Brown Fox</NeoHeadlineSecondary>"}}}},l={tags:["snapshot"],args:{color:"blue"},render:e=>t({name:"ColoredRender",setup(){return()=>n(r,e,{default:()=>[p("Colored Headline")]})}}),parameters:{docs:{source:{code:'<NeoHeadlineSecondary color="blue">Colored Headline</NeoHeadlineSecondary>'}}}},c={tags:["snapshot"],globals:{direction:"rtl"},render:e=>t({name:"RTLRender",setup(){return()=>n(r,e,{default:()=>[p("الثعلب البني السريع")]})}})},o={tags:["snapshot"],render:()=>t({name:"AllColorsRender",setup(){return()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},[u.map(e=>_("NeoHeadlineSecondary",e,n(r,{key:e,color:e},F(e)?e:{default:()=>[e]}),"default",!1))])}})},a={tags:["snapshot"],globals:{backgrounds:"#000"},render:()=>t({name:"AllColorsOnDarkRender",setup(){return()=>n("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px"}},[u.map(e=>n(r,{key:e,color:e},F(e)?e:{default:()=>[e]}))])}})},d={...o,tags:["!dev","test-only"],play:L()},i={...a,tags:["!dev","test-only"],play:L()};var m,y,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,A,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var C,H,N;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'RTLRender',
      setup() {
        return () => <NeoHeadlineSecondary {...args}>الثعلب البني السريع</NeoHeadlineSecondary>;
      }
    });
  }
}`,...(N=(H=c.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var h,b,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,D,T;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
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
}`,...(T=(D=a.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var v,R,O;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(O=(R=d.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var w,B,P;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const X=["Default","Colored","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{o as AllColors,d as AllColorsA11y,a as AllColorsOnDark,i as AllColorsOnDarkA11y,l as Colored,s as Default,c as RTL,X as __namedExportsOrder,U as default};
