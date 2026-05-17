import{b as d,d as t,c as r,i as V,a as i}from"./iframe-D_T2aSQH.js";import{g as _}from"./colorShowcase-H6dOhXMr.js";import{c as L}from"./createA11yPlay-D4vCqrFd.js";import{N as n}from"./NeoHeadlineQuaternary-JnDNCms2.js";import{h as B,a as W}from"./NeoHeadlineTypes-CVOcXnNm.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-CXdAub6O.js";import"./useHeadline-cSd_vb7Z.js";import"./_plugin-vue_export-helper-DerOYOQE.js";function j(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!V(e)}const U={title:"Atoms/Headline/NeoHeadlineQuaternary",component:n,tags:["autodocs"],argTypes:{tag:{control:"select",options:W,description:"The HTML element to render. Decouples visual style from document semantics.",table:{category:"Appearance"}},color:{control:"select",options:d,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},align:{control:"select",options:B,description:"Text alignment.",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}},default:{control:!1,description:"Headline text or rich content.",table:{category:"Slots"}}},args:{tag:"h4"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},s={tags:["snapshot"],render:e=>t({name:"DefaultRender",setup(){return()=>r(n,e,{default:()=>[i("Card Title")]})}}),parameters:{docs:{source:{code:"<NeoHeadlineQuaternary>Card Title</NeoHeadlineQuaternary>"}}}},l={tags:["snapshot"],args:{color:"blue"},render:e=>t({name:"ColoredRender",setup(){return()=>r(n,e,{default:()=>[i("Colored Card Title")]})}}),parameters:{docs:{source:{code:'<NeoHeadlineQuaternary color="blue">Colored Card Title</NeoHeadlineQuaternary>'}}}},p={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},render:e=>t({name:"RTLRender",setup(){return()=>r(n,e,{default:()=>[i("الثعلب البني السريع")]})}})},a={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:()=>t({name:"AllColorsRender",setup(){return()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},[d.map(e=>_("NeoHeadlineQuaternary",e,r(n,{key:e,color:e},j(e)?e:{default:()=>[e]}),"default",!1))])}})},o={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:()=>t({name:"AllColorsOnDarkRender",setup(){return()=>r("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px"}},[d.map(e=>r(n,{key:e,color:e},j(e)?e:{default:()=>[e]}))])}})},u={...a,tags:["!dev","test-only"],play:L()},c={...o,tags:["!dev","test-only"],play:L()};var m,y,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var h,N,H;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
        return () => <NeoHeadlineQuaternary {...args}>الثعلب البني السريع</NeoHeadlineQuaternary>;
      }
    });
  }
}`,...(H=(N=p.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var x,b,Q;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
                        {colors.map(color => getColorWrapper('NeoHeadlineQuaternary', color as SurfaceColor, <NeoHeadlineQuaternary key={color} color={color}>
                                    {color}
                                </NeoHeadlineQuaternary>, 'default', false))}
                    </div>;
      }
    });
  }
}`,...(Q=(b=a.parameters)==null?void 0:b.docs)==null?void 0:Q.source}}};var v,T,D;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
                        {colors.map(color => <NeoHeadlineQuaternary key={color} color={color}>
                                {color}
                            </NeoHeadlineQuaternary>)}
                    </div>;
      }
    });
  }
}`,...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var k,R,O;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(O=(R=u.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var S,w,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const X=["Default","Colored","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{a as AllColors,u as AllColorsA11y,o as AllColorsOnDark,c as AllColorsOnDarkA11y,l as Colored,s as Default,p as RTL,X as __namedExportsOrder,U as default};
