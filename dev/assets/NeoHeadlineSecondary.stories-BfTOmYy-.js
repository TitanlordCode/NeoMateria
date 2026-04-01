import{b as c,d as s,c as n,i as k,a as x}from"./iframe-Da9xFhCi.js";import{N as o}from"./NeoHeadlineSecondary-T-HUhND7.js";import{h as A,a as h}from"./NeoHeadlineTypes-CVOcXnNm.js";import{g as D}from"./colorShowcase-kwizdZpn.js";import"./preload-helper-Dp1pzeXC.js";import"./useHeadline-CGFwQ-av.js";import"./_plugin-vue_export-helper-DerOYOQE.js";function b(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!k(e)}const Q={title:"Atoms/Headline/NeoHeadlineSecondary",component:o,tags:["autodocs"],argTypes:{tag:{control:"select",options:h,description:"The HTML element to render. Decouples visual style from document semantics.",table:{category:"Appearance"}},color:{control:"select",options:c,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},align:{control:"select",options:A,description:"Text alignment.",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}}},args:{tag:"h2"}},r={render:e=>s({name:"DefaultRender",setup(){return()=>n(o,e,{default:()=>[x("The Quick Brown Fox")]})}}),parameters:{docs:{source:{code:"<NeoHeadlineSecondary>The Quick Brown Fox</NeoHeadlineSecondary>"}}}},a={args:{color:"blue"},render:e=>s({name:"ColoredRender",setup(){return()=>n(o,e,{default:()=>[x("Colored Headline")]})}}),parameters:{docs:{source:{code:'<NeoHeadlineSecondary color="blue">Colored Headline</NeoHeadlineSecondary>'}}}},l={render:()=>s({name:"AllColorsRender",setup(){return()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},[c.map(e=>D("NeoHeadlineSecondary",e,n(o,{key:e,color:e},b(e)?e:{default:()=>[e]}),"default",!1))])}})},t={globals:{backgrounds:"#000"},render:()=>s({name:"AllColorsOnDarkRender",setup(){return()=>n("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px"}},[c.map(e=>n(o,{key:e,color:e},b(e)?e:{default:()=>[e]}))])}})};var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(m=a.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,f,H;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(H=(f=l.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var S,N,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(N=t.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const j=["Default","Colored","AllColors","AllColorsOnDark"];export{l as AllColors,t as AllColorsOnDark,a as Colored,r as Default,j as __namedExportsOrder,Q as default};
