import{b as i,d as t,c as r,i as V,a as p}from"./iframe-Dknl-Izy.js";import{g as _}from"./colorShowcase-ukgIxckm.js";import{c as j}from"./createA11yPlay-C_PKokKa.js";import{N as n}from"./NeoHeadlineQuaternary-BJpsopCZ.js";import{h as B,a as W}from"./NeoHeadlineTypes-CVOcXnNm.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-Dc5bORdo.js";import"./useHeadline-1j-ccmJX.js";import"./_plugin-vue_export-helper-DerOYOQE.js";function w(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!V(e)}const U={title:"Atoms/Headline/NeoHeadlineQuaternary",component:n,tags:["autodocs"],argTypes:{tag:{control:"select",options:W,description:"The HTML element to render. Decouples visual style from document semantics.",table:{category:"Appearance"}},color:{control:"select",options:i,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},align:{control:"select",options:B,description:"Text alignment.",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}},default:{control:!1,description:"Headline text or rich content.",table:{category:"Slots"}}},args:{tag:"h4"}},s={tags:["snapshot"],render:e=>t({name:"DefaultRender",setup(){return()=>r(n,e,{default:()=>[p("Card Title")]})}}),parameters:{docs:{source:{code:"<NeoHeadlineQuaternary>Card Title</NeoHeadlineQuaternary>"}}}},l={tags:["snapshot"],args:{color:"blue"},render:e=>t({name:"ColoredRender",setup(){return()=>r(n,e,{default:()=>[p("Colored Card Title")]})}}),parameters:{docs:{source:{code:'<NeoHeadlineQuaternary color="blue">Colored Card Title</NeoHeadlineQuaternary>'}}}},u={tags:["snapshot"],globals:{direction:"rtl"},render:e=>t({name:"RTLRender",setup(){return()=>r(n,e,{default:()=>[p("الثعلب البني السريع")]})}})},a={tags:["snapshot"],render:()=>t({name:"AllColorsRender",setup(){return()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},[i.map(e=>_("NeoHeadlineQuaternary",e,r(n,{key:e,color:e},w(e)?e:{default:()=>[e]}),"default",!1))])}})},o={tags:["snapshot"],globals:{backgrounds:"#000"},render:()=>t({name:"AllColorsOnDarkRender",setup(){return()=>r("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px"}},[i.map(e=>r(n,{key:e,color:e},w(e)?e:{default:()=>[e]}))])}})},c={...a,tags:["!dev","test-only"],play:j()},d={...o,tags:["!dev","test-only"],play:j()};var m,y,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoHeadlineQuaternary {...args}>Card Title</NeoHeadlineQuaternary>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadlineQuaternary>Card Title</NeoHeadlineQuaternary>\`
      }
    }
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,C,A;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue'
  },
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'ColoredRender',
      setup() {
        return () => <NeoHeadlineQuaternary {...args}>Colored Card Title</NeoHeadlineQuaternary>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadlineQuaternary color="blue">Colored Card Title</NeoHeadlineQuaternary>\`
      }
    }
  }
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var N,H,b;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'RTLRender',
      setup() {
        return () => <NeoHeadlineQuaternary {...args}>الثعلب البني السريع</NeoHeadlineQuaternary>;
      }
    });
  }
}`,...(b=(H=u.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var h,Q,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
                        {colors.map(color => getColorWrapper('NeoHeadlineQuaternary', color as SurfaceColor, <NeoHeadlineQuaternary key={color} color={color}>
                                    {color}
                                </NeoHeadlineQuaternary>, 'default', false))}
                    </div>;
      }
    });
  }
}`,...(x=(Q=a.parameters)==null?void 0:Q.docs)==null?void 0:x.source}}};var T,D,k;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
                        {colors.map(color => <NeoHeadlineQuaternary key={color} color={color}>
                                {color}
                            </NeoHeadlineQuaternary>)}
                    </div>;
      }
    });
  }
}`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var v,R,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(O=(R=c.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var S,P,L;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(L=(P=d.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const X=["Default","Colored","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{a as AllColors,c as AllColorsA11y,o as AllColorsOnDark,d as AllColorsOnDarkA11y,l as Colored,s as Default,u as RTL,X as __namedExportsOrder,U as default};
