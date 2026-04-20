import{b as p,d as t,c as r,i as _,a as u}from"./iframe-_LwaFV-t.js";import{N as n}from"./NeoHeadlineTertiary-Bs5bt-N1.js";import{h as B,a as W}from"./NeoHeadlineTypes-CVOcXnNm.js";import{g as E}from"./colorShowcase-mTvG6tuw.js";import{c as w}from"./createA11yPlay-k-ODbeDd.js";import"./preload-helper-Dp1pzeXC.js";import"./useHeadline-C3m15hx5.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./axe-Ue4VX9fj.js";function V(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!_(e)}const U={title:"Atoms/Headline/NeoHeadlineTertiary",component:n,tags:["autodocs"],argTypes:{tag:{control:"select",options:W,description:"The HTML element to render. Decouples visual style from document semantics.",table:{category:"Appearance"}},color:{control:"select",options:p,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},align:{control:"select",options:B,description:"Text alignment.",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}},default:{control:!1,description:"Headline text or rich content.",table:{category:"Slots"}}},args:{tag:"h3"}},s={tags:["snapshot"],render:e=>t({name:"DefaultRender",setup(){return()=>r(n,e,{default:()=>[u("Section Title")]})}}),parameters:{docs:{source:{code:"<NeoHeadlineTertiary>Section Title</NeoHeadlineTertiary>"}}}},l={tags:["snapshot"],args:{color:"blue"},render:e=>t({name:"ColoredRender",setup(){return()=>r(n,e,{default:()=>[u("Colored Section Title")]})}}),parameters:{docs:{source:{code:'<NeoHeadlineTertiary color="blue">Colored Section Title</NeoHeadlineTertiary>'}}}},i={tags:["snapshot"],globals:{direction:"rtl"},render:e=>t({name:"RTLRender",setup(){return()=>r(n,e,{default:()=>[u("الثعلب البني السريع")]})}})},o={tags:["snapshot"],render:()=>t({name:"AllColorsRender",setup(){return()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},[p.map(e=>E("NeoHeadlineTertiary",e,r(n,{key:e,color:e},V(e)?e:{default:()=>[e]}),"default",!1))])}})},a={tags:["snapshot"],globals:{backgrounds:"#000"},render:()=>t({name:"AllColorsOnDarkRender",setup(){return()=>r("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px"}},[p.map(e=>r(n,{key:e,color:e},V(e)?e:{default:()=>[e]}))])}})},c={...o,tags:["!dev","test-only"],play:w()},d={...a,tags:["!dev","test-only"],play:w()};var m,y,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoHeadlineTertiary {...args}>Section Title</NeoHeadlineTertiary>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadlineTertiary>Section Title</NeoHeadlineTertiary>\`
      }
    }
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,T,A;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    color: 'blue'
  },
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'ColoredRender',
      setup() {
        return () => <NeoHeadlineTertiary {...args}>Colored Section Title</NeoHeadlineTertiary>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoHeadlineTertiary color="blue">Colored Section Title</NeoHeadlineTertiary>\`
      }
    }
  }
}`,...(A=(T=l.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var C,N,H;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  render: (args: NeoHeadlineProps) => {
    return defineComponent({
      name: 'RTLRender',
      setup() {
        return () => <NeoHeadlineTertiary {...args}>الثعلب البني السريع</NeoHeadlineTertiary>;
      }
    });
  }
}`,...(H=(N=i.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var b,h,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
                        {colors.map(color => getColorWrapper('NeoHeadlineTertiary', color as SurfaceColor, <NeoHeadlineTertiary key={color} color={color}>
                                    {color}
                                </NeoHeadlineTertiary>, 'default', false))}
                    </div>;
      }
    });
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,D,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
                        {colors.map(color => <NeoHeadlineTertiary key={color} color={color}>
                                {color}
                            </NeoHeadlineTertiary>)}
                    </div>;
      }
    });
  }
}`,...(k=(D=a.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var v,R,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(O=(R=c.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var P,L,j;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(j=(L=d.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const X=["Default","Colored","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{o as AllColors,c as AllColorsA11y,a as AllColorsOnDark,d as AllColorsOnDarkA11y,l as Colored,s as Default,i as RTL,X as __namedExportsOrder,U as default};
