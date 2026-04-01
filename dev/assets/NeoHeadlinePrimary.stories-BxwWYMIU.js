import{b as S,d as i,c as n,m as w,a as c,h as k}from"./iframe-BNVHVJhn.js";import{a as O}from"./colorShowcase-BzxvNubM.js";import{N as r}from"./NeoHeadlinePrimary-BWLdawQg.js";import{h as E,a as B}from"./NeoHeadlineTypes-CVOcXnNm.js";import"./preload-helper-Dp1pzeXC.js";import"./useHeadline-B1vqXKMh.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const j={title:"Atoms/Headline/NeoHeadlinePrimary",component:r,tags:["autodocs"],argTypes:{tag:{control:"select",options:B,description:"The HTML element to render. Decouples visual style from document semantics.",table:{category:"Appearance"}},color:{control:"select",options:S,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},align:{control:"select",options:E,description:"Text alignment.",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}}},args:{tag:"h2"}},a={render:e=>i({name:"DefaultRender",setup(){return()=>n(r,e,{default:()=>[c("The Quick Brown Fox")]})}}),parameters:{docs:{source:{code:"<NeoHeadlinePrimary>The Quick Brown Fox</NeoHeadlinePrimary>"}}}},o={args:{color:"blue"},render:e=>i({name:"ColoredRender",setup(){return()=>n(r,e,{default:()=>[c("Colored Headline")]})}}),parameters:{docs:{source:{code:'<NeoHeadlinePrimary color="blue">Colored Headline</NeoHeadlinePrimary>'}}}},t={args:{align:"center"},render:e=>i({name:"CenteredRender",setup(){return()=>n(r,e,{default:()=>[c("Centered Headline")]})}}),parameters:{docs:{source:{code:'<NeoHeadlinePrimary align="center">Centered Headline</NeoHeadlinePrimary>'}}}},s={render:e=>i({name:"TruncatedRender",setup(){return()=>n("div",{style:{inlineSize:"400px"}},[n(r,w(e,{truncate:!0}),{default:()=>[c("An Extremely Long Headline That Gets Truncated After One Line")]})])}}),parameters:{docs:{source:{code:"<NeoHeadlinePrimary truncate>An Extremely Long Headline That Gets Truncated After One Line</NeoHeadlinePrimary>"}}}},d={render:O(r,[{name:"Default",variant:"default",renderComponent:(e,m)=>k(m,{color:e},{default:()=>e})}])},l={globals:{backgrounds:"#000"},render:O(r,[{name:"Default",variant:"default",renderComponent:(e,m)=>k(m,{color:e},{default:()=>e})}],!0)};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var H,y,f;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var C,N,P;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(N=t.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var A,T,h;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(h=(T=s.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var b,x,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: createAllColorsRender<typeof NeoHeadlinePrimary>(NeoHeadlinePrimary, [{
    name: 'Default',
    variant: 'default',
    renderComponent: (color, Component) => h(Component, {
      color
    }, {
      default: () => color
    })
  }])
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var D,R,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(R=l.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const q=["Default","Colored","Centered","Truncated","AllColors","AllColorsOnDark"];export{d as AllColors,l as AllColorsOnDark,t as Centered,o as Colored,a as Default,s as Truncated,q as __namedExportsOrder,j as default};
