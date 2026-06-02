import{d as pe,c as n,a as ue,i as he,m as v}from"./iframe-D97hRsDr.js";import{N as r}from"./NeoIcon-9HhtqIbD.js";import{A as Ie,D as e}from"./defaultIcons-Cw98xW-y.js";import{c as me}from"./colorShowcase-B0D6CXNh.js";import{c as ge}from"./createA11yPlay-BakXPOC5.js";import{a as xe,d as s}from"./iconStrings-DvlgHS7z.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./axe-BAN8dmkr.js";function l(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!he(o)}const Ce={title:"Atoms/NeoIcon",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"Icon box size, mapped to a font-size scale.",table:{category:"Appearance"}},color:{description:"Icon color. Accepts the full `Color` palette (including white)."},colorVariant:{control:"select",options:["theme","text"],description:"`theme` uses the accessible theme color; `text` inherits the surrounding text color.",table:{category:"Appearance"}},ariaLabel:{control:"text",description:"Accessible label. When set, the icon is exposed to assistive tech as an image.",table:{category:"Accessibility"}},ariaHidden:{control:"boolean",description:"Hides the icon from assistive tech. Use for purely decorative icons.",table:{category:"Accessibility"}},default:{control:!1,description:"The icon SVG content. Pass a raw SVG element or a Vue component.",table:{category:"Slots"}}},args:{color:"grey",colorVariant:"theme",size:"medium",default:e},render:o=>pe({name:"NeoIconRender",render:()=>n(r,o,{default:()=>[o.default]})}),parameters:{docs:{description:{component:"This is a Wrapper to unify svg Icons with colors and font sizes."}},snapshot:{viewports:["sm","lg","xl"]}}},i={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoIcon color="grey" size="medium">
  ${s}
</NeoIcon>`}}}},d={tags:["snapshot"],args:{size:"small"},parameters:{docs:{source:{code:`<NeoIcon color="grey" size="small">
  ${s}
</NeoIcon>`}}}},p={tags:["snapshot"],args:{size:"large"},parameters:{docs:{source:{code:`<NeoIcon color="grey" size="large">
  ${s}
</NeoIcon>`}}}},m={tags:["snapshot"],args:{colorVariant:"theme"},parameters:{docs:{source:{code:`<!-- color-variant="theme" uses the 500 shade of the color token -->
<NeoIcon color="grey" color-variant="theme">
  ${s}
</NeoIcon>`}}}},g={tags:["snapshot"],args:{colorVariant:"text"},parameters:{docs:{source:{code:`<!-- color-variant="text" uses the accessible (darker) text shade -->
<NeoIcon color="grey" color-variant="text">
  ${s}
</NeoIcon>`}}}},u={tags:["snapshot"],parameters:{docs:{source:{code:`<!-- NeoIcon scales with the surrounding font-size -->
<div style="display: flex; flex-direction: column; font-size: 32px; inline-size: fit-content;">
  <span>With Font size 32px</span>
  <NeoIcon color="grey" size="medium">
    ${s}
  </NeoIcon>
</div>`}}},render:o=>pe({name:"ColorRender",setup(){return()=>n("div",{style:{display:"flex",flexDirection:"column",fontSize:"32px",inlineSize:"fit-content"}},[n("span",null,[ue("With Font size 32px")]),n(r,o,l(e)?e:{default:()=>[e]})])}})},h={tags:["no-test"],args:{color:"green",default:Ie},parameters:{docs:{source:{code:`<NeoIcon color="green" size="medium">
  ${xe}
</NeoIcon>`}}}},I={tags:["no-test"],args:{color:"red",default:e},parameters:{docs:{source:{code:`<NeoIcon color="red" size="medium">
  ${s}
</NeoIcon>`}}}},x={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},f={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}}},t={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:me(r,[{variant:"theme",label:"Theme Color Variant",render:(o,S,a)=>n(r,v(a,{color:o,colorVariant:"theme"}),l(e)?e:{default:()=>[e]})},{variant:"text",label:"Text Color Variant",render:(o,S,a)=>n(r,v(a,{color:o,colorVariant:"text"}),l(e)?e:{default:()=>[e]})}])},c={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:me(r,[{variant:"theme",label:"Theme Color Variant",render:(o,S,a)=>n(r,v(a,{color:o,colorVariant:"theme"}),l(e)?e:{default:()=>[e]})},{variant:"text",label:"Text Color Variant",render:(o,S,a)=>n(r,v(a,{color:o,colorVariant:"text"}),l(e)?e:{default:()=>[e]})}],{dark:!0})},N={...t,tags:["!dev","test-only"],play:ge()},y={...c,tags:["!dev","test-only"],play:ge()};var b,z,V;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoIcon color="grey" size="medium">
  \${deleteIconSvg}
</NeoIcon>\`
      }
    }
  }
}`,...(V=(z=i.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var A,C,D;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var T,k,w;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(w=(k=p.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var $,_,O;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var F,P,W;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(W=(P=g.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var E,L,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(R=(L=u.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var j,B,G;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    color: 'green',
    default: AddIcon
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
}`,...(G=(B=h.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,U,q;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    color: 'red',
    default: DeleteIcon
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
}`,...(q=(U=I.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var J,K,M;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(M=(K=x.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,oe;t.parameters={...t.parameters,docs:{...(Z=t.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
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
  }])
}`,...(oe=(ee=t.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,ne,ae;c.parameters={...c.parameters,docs:{...(re=c.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
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
}`,...(ae=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,te,ce;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ce=(te=N.parameters)==null?void 0:te.docs)==null?void 0:ce.source}}};var le,ie,de;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(de=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const De=["Default","Small","Large","colorVariantTheme","colorVariantText","BigFonts","AddExample","DeleteExample","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{h as AddExample,t as AllColors,N as AllColorsA11y,c as AllColorsOnDark,y as AllColorsOnDarkA11y,u as BigFonts,i as Default,I as DeleteExample,p as Large,x as OnDark,f as RTL,d as Small,De as __namedExportsOrder,g as colorVariantText,m as colorVariantTheme,Ce as default};
