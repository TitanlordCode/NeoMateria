import{d as ae,c as a,a as ce,i as se,m as h}from"./iframe-BNVHVJhn.js";import{N as r}from"./NeoIcon-CGZgoonz.js";import{A as te,D as e}from"./defaultIcons-C1WNt4aX.js";import{c as ne}from"./colorShowcase-BzxvNubM.js";import{a as le,d as c}from"./iconSnippets-DKkOH1Iz.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";function s(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!se(o)}const Ne={title:"Atoms/NeoIcon",component:r,tags:["autodocs"],argTypes:{},args:{color:"grey",colorVariant:"theme",size:"medium",default:()=>e},parameters:{docs:{description:{component:"This is a Wrapper to unify svg Icons with colors and font sizes."}}}},t={parameters:{docs:{source:{code:`<NeoIcon color="grey" size="medium">
  ${c}
</NeoIcon>`}}}},l={args:{size:"small"},parameters:{docs:{source:{code:`<NeoIcon color="grey" size="small">
  ${c}
</NeoIcon>`}}}},i={args:{size:"large"},parameters:{docs:{source:{code:`<NeoIcon color="grey" size="large">
  ${c}
</NeoIcon>`}}}},d={args:{colorVariant:"theme"},parameters:{docs:{source:{code:`<!-- color-variant="theme" uses the 500 shade of the color token -->
<NeoIcon color="grey" color-variant="theme">
  ${c}
</NeoIcon>`}}}},m={args:{colorVariant:"text"},parameters:{docs:{source:{code:`<!-- color-variant="text" uses the accessible (darker) text shade -->
<NeoIcon color="grey" color-variant="text">
  ${c}
</NeoIcon>`}}}},p={parameters:{docs:{source:{code:`<!-- NeoIcon scales with the surrounding font-size -->
<div style="display: flex; flex-direction: column; font-size: 32px; inline-size: fit-content;">
  <span>With Font size 32px</span>
  <NeoIcon color="grey" size="medium">
    ${c}
  </NeoIcon>
</div>`}}},render:o=>ae({name:"ColorRender",setup(){return()=>a("div",{style:{display:"flex",flexDirection:"column",fontSize:"32px",inlineSize:"fit-content"}},[a("span",null,[ce("With Font size 32px")]),a(r,o,s(e)?e:{default:()=>[e]})])}})},u={args:{color:"green",default:()=>te},parameters:{docs:{source:{code:`<NeoIcon color="green" size="medium">
  ${le}
</NeoIcon>`}}}},g={args:{color:"red",default:()=>e},parameters:{docs:{source:{code:`<NeoIcon color="red" size="medium">
  ${c}
</NeoIcon>`}}}},I={globals:{backgrounds:"#000"}},N={globals:{direction:"rtl"}},f={render:ne(r,[{variant:"theme",label:"Theme Color Variant",render:(o,S,n)=>a(r,h(n,{color:o,colorVariant:"theme"}),s(e)?e:{default:()=>[e]})},{variant:"text",label:"Text Color Variant",render:(o,S,n)=>a(r,h(n,{color:o,colorVariant:"text"}),s(e)?e:{default:()=>[e]})}])},x={globals:{backgrounds:"#000"},render:ne(r,[{variant:"theme",label:"Theme Color Variant",render:(o,S,n)=>a(r,h(n,{color:o,colorVariant:"theme"}),s(e)?e:{default:()=>[e]})},{variant:"text",label:"Text Color Variant",render:(o,S,n)=>a(r,h(n,{color:o,colorVariant:"text"}),s(e)?e:{default:()=>[e]})}],{dark:!0})};var v,z,V;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<NeoIcon color="grey" size="medium">
  \${deleteIconSvg}
</NeoIcon>\`
      }
    }
  }
}`,...(V=(z=t.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var y,b,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoIcon color="grey" size="small">
  \${deleteIconSvg}
</NeoIcon>\`
      }
    }
  }
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var D,T,$;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoIcon color="grey" size="large">
  \${deleteIconSvg}
</NeoIcon>\`
      }
    }
  }
}`,...($=(T=i.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var k,_,A;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    colorVariant: 'theme'
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- color-variant="theme" uses the 500 shade of the color token -->
<NeoIcon color="grey" color-variant="theme">
  \${deleteIconSvg}
</NeoIcon>\`
      }
    }
  }
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var O,w,F;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    colorVariant: 'text'
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- color-variant="text" uses the accessible (darker) text shade -->
<NeoIcon color="grey" color-variant="text">
  \${deleteIconSvg}
</NeoIcon>\`
      }
    }
  }
}`,...(F=(w=m.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var E,W,L;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<!-- NeoIcon scales with the surrounding font-size -->
<div style="display: flex; flex-direction: column; font-size: 32px; inline-size: fit-content;">
  <span>With Font size 32px</span>
  <NeoIcon color="grey" size="medium">
    \${deleteIconSvg}
  </NeoIcon>
</div>\`
      }
    }
  },
  render: (args: NeoIconProps) => {
    return defineComponent({
      name: 'ColorRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: '32px',
          inlineSize: 'fit-content'
        }}>
                        <span>With Font size 32px</span>
                        <NeoIcon {...args}>{DeleteIcon}</NeoIcon>
                    </div>;
      }
    });
  }
}`,...(L=(W=p.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var R,j,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    color: 'green',
    default: () => AddIcon
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoIcon color="green" size="medium">
  \${addIconSvg}
</NeoIcon>\`
      }
    }
  }
}`,...(B=(j=u.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var P,q,G;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    color: 'red',
    default: () => DeleteIcon
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoIcon color="red" size="medium">
  \${deleteIconSvg}
</NeoIcon>\`
      }
    }
  }
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,K;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(K=(J=I.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;N.parameters={...N.parameters,docs:{...(M=N.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  }
}`,...(U=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoIcon, [{
    variant: 'theme',
    label: 'Theme Color Variant',
    render: (color, _, args) => <NeoIcon {...args} color={color} colorVariant="theme">
                    {DeleteIcon}
                </NeoIcon>
  }, {
    variant: 'text',
    label: 'Text Color Variant',
    render: (color, _, args) => <NeoIcon {...args} color={color} colorVariant="text">
                    {DeleteIcon}
                </NeoIcon>
  }])
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,oe,re;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoIcon, [{
    variant: 'theme',
    label: 'Theme Color Variant',
    render: (color, _, args) => <NeoIcon {...args} color={color} colorVariant="theme">
                        {DeleteIcon}
                    </NeoIcon>
  }, {
    variant: 'text',
    label: 'Text Color Variant',
    render: (color, _, args) => <NeoIcon {...args} color={color} colorVariant="text">
                        {DeleteIcon}
                    </NeoIcon>
  }], {
    dark: true
  })
}`,...(re=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const fe=["Default","Small","Large","colorVariantTheme","colorVariantText","BigFonts","AddExample","DeleteExample","OnDark","RTL","AllColors","AllColorsOnDark"];export{u as AddExample,f as AllColors,x as AllColorsOnDark,p as BigFonts,t as Default,g as DeleteExample,i as Large,I as OnDark,N as RTL,l as Small,fe as __namedExportsOrder,m as colorVariantText,d as colorVariantTheme,Ne as default};
