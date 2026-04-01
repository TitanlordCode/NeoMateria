import{b as d,d as s,c as r,i as A,a as Q}from"./iframe-Da9xFhCi.js";import{g as D}from"./colorShowcase-kwizdZpn.js";import{N as n}from"./NeoHeadlineQuaternary-CbTuNACG.js";import{h as T,a as k}from"./NeoHeadlineTypes-CVOcXnNm.js";import"./preload-helper-Dp1pzeXC.js";import"./useHeadline-CGFwQ-av.js";import"./_plugin-vue_export-helper-DerOYOQE.js";function x(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!A(e)}const V={title:"Atoms/Headline/NeoHeadlineQuaternary",component:n,tags:["autodocs"],argTypes:{tag:{control:"select",options:k,description:"The HTML element to render. Decouples visual style from document semantics.",table:{category:"Appearance"}},color:{control:"select",options:d,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},align:{control:"select",options:T,description:"Text alignment.",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}}},args:{tag:"h4"}},a={render:e=>s({name:"DefaultRender",setup(){return()=>r(n,e,{default:()=>[Q("Card Title")]})}}),parameters:{docs:{source:{code:"<NeoHeadlineQuaternary>Card Title</NeoHeadlineQuaternary>"}}}},o={args:{color:"blue"},render:e=>s({name:"ColoredRender",setup(){return()=>r(n,e,{default:()=>[Q("Colored Card Title")]})}}),parameters:{docs:{source:{code:'<NeoHeadlineQuaternary color="blue">Colored Card Title</NeoHeadlineQuaternary>'}}}},t={render:()=>s({name:"AllColorsRender",setup(){return()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},[d.map(e=>D("NeoHeadlineQuaternary",e,r(n,{key:e,color:e},x(e)?e:{default:()=>[e]}),"default",!1))])}})},l={globals:{backgrounds:"#000"},render:()=>s({name:"AllColorsOnDarkRender",setup(){return()=>r("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px"}},[d.map(e=>r(n,{key:e,color:e},x(e)?e:{default:()=>[e]}))])}})};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,f,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var N,H,b;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(b=(H=l.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};const _=["Default","Colored","AllColors","AllColorsOnDark"];export{t as AllColors,l as AllColorsOnDark,o as Colored,a as Default,_ as __namedExportsOrder,V as default};
