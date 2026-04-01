import{b as i,d as s,c as r,i as A,a as b}from"./iframe-Da9xFhCi.js";import{N as n}from"./NeoHeadlineTertiary-KxQRP22p.js";import{h as D,a as S}from"./NeoHeadlineTypes-CVOcXnNm.js";import{g as k}from"./colorShowcase-kwizdZpn.js";import"./preload-helper-Dp1pzeXC.js";import"./useHeadline-CGFwQ-av.js";import"./_plugin-vue_export-helper-DerOYOQE.js";function x(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!A(e)}const _={title:"Atoms/Headline/NeoHeadlineTertiary",component:n,tags:["autodocs"],argTypes:{tag:{control:"select",options:S,description:"The HTML element to render. Decouples visual style from document semantics.",table:{category:"Appearance"}},color:{control:"select",options:i,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},align:{control:"select",options:D,description:"Text alignment.",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}}},args:{tag:"h3"}},o={render:e=>s({name:"DefaultRender",setup(){return()=>r(n,e,{default:()=>[b("Section Title")]})}}),parameters:{docs:{source:{code:"<NeoHeadlineTertiary>Section Title</NeoHeadlineTertiary>"}}}},a={args:{color:"blue"},render:e=>s({name:"ColoredRender",setup(){return()=>r(n,e,{default:()=>[b("Colored Section Title")]})}}),parameters:{docs:{source:{code:'<NeoHeadlineTertiary color="blue">Colored Section Title</NeoHeadlineTertiary>'}}}},t={render:()=>s({name:"AllColorsRender",setup(){return()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},[i.map(e=>k("NeoHeadlineTertiary",e,r(n,{key:e,color:e},x(e)?e:{default:()=>[e]}),"default",!1))])}})},l={globals:{backgrounds:"#000"},render:()=>s({name:"AllColorsOnDarkRender",setup(){return()=>r("div",{class:"u-onDark",style:{display:"flex",flexDirection:"column",gap:"8px"}},[i.map(e=>r(n,{key:e,color:e},x(e)?e:{default:()=>[e]}))])}})};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(m=a.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,f,T;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var N,C,H;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(C=l.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};const P=["Default","Colored","AllColors","AllColorsOnDark"];export{t as AllColors,l as AllColorsOnDark,a as Colored,o as Default,P as __namedExportsOrder,_ as default};
