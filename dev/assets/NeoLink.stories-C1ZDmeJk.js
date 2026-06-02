import{d as ce,c as h,a as f}from"./iframe-D9nyRK5o.js";import{N as g}from"./NeoLink-D3-_A2js.js";import{d as pe}from"./argTypes-VnJZhiy7.js";import{c as oe}from"./colorShowcase-CPaxLojg.js";import{c as ne}from"./createA11yPlay-CpEQ4bEB.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./axe-zbpV6D8O.js";const ie=["small","medium","large"],de=["default","underline","button"],ye={title:"Atoms/NeoLink",component:g,tags:["autodocs"],argTypes:{...pe,href:{control:"text",table:{category:"Content"},description:"Destination URL the link points to."},text:{control:"text",table:{category:"Content"},description:"Link label text. Falls back to the default slot if omitted."},color:{description:"Theme color applied to the link text and underline.",table:{category:"Appearance"}},size:{control:"select",options:ie,description:"Controls font size.",table:{category:"Appearance"}},variant:{control:"select",options:de,description:"`default`: colored text, no underline at rest. `underline`: always underlined. `button`: renders the link styled as a button for call-to-action usage.",table:{category:"Appearance"}},external:{control:"boolean",table:{category:"Behavior"},description:"Opens in a new tab and applies a safe `rel`. Sets sensible defaults."},target:{control:"select",options:["_blank","_self","_parent","_top"],table:{category:"Behavior"},description:"The anchor `target` attribute. Overrides the `external` default."},rel:{control:"text",table:{category:"Behavior"},description:"The anchor `rel` attribute. Overrides the `external` default."}},args:{href:"https://example.com",text:"Click me",size:"medium",variant:"default",color:"blue"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},r={tags:["snapshot"]},s={tags:["snapshot"],args:{variant:"underline"}},a={tags:["snapshot"],args:{variant:"button"}},o={tags:["snapshot"],args:{external:!0,target:"_blank",text:"Open in new tab"}},n={tags:["snapshot"],args:{disabled:!0}},l={tags:["snapshot"],args:{size:"small"}},c={tags:["snapshot"],args:{size:"large"}},p={tags:["snapshot"],parameters:{docs:{source:{code:`<!-- Use the default slot for rich link content instead of the text prop -->
<NeoLink href="https://example.com" color="blue">
  <strong>Custom content</strong> with <em>formatting</em>
</NeoLink>`}}},render:le=>ce({name:"WithSlotRender",setup(){return()=>h(g,le,{default:()=>[h("strong",null,[f("Custom content")]),f(" with "),h("em",null,[f("formatting")])]})}})},i={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},d={tags:["snapshot"],globals:{direction:"rtl"},args:{text:"انقر هنا"},parameters:{snapshot:{viewports:["sm","xl"]}}},e={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:oe(g,["default","underline","button"],{defaultProps:{href:"#"}})},t={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:oe(g,["default","underline","button"],{defaultProps:{href:"#"},dark:!0})},m={...e,tags:["!dev","test-only"],play:ne()},u={...t,tags:["!dev","test-only"],play:ne()};var b,k,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var y,S,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'underline'
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var C,A,w;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'button'
  }
}`,...(w=(A=a.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var L,N,O;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    external: true,
    target: '_blank',
    text: 'Open in new tab'
  }
}`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var D,z,P;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true
  }
}`,...(P=(z=n.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var T,_,B;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(B=(_=l.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var R,U,W;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var E,V,F;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<!-- Use the default slot for rich link content instead of the text prop -->
<NeoLink href="https://example.com" color="blue">
  <strong>Custom content</strong> with <em>formatting</em>
</NeoLink>\`
      }
    }
  },
  render: (args: NeoLinkProps) => {
    return defineComponent({
      name: 'WithSlotRender',
      setup() {
        return () => <NeoLink {...args}>
                        <strong>Custom content</strong> with <em>formatting</em>
                    </NeoLink>;
      }
    });
  }
}`,...(F=(V=p.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var j,q,G;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(G=(q=i.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,I,J;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'انقر هنا'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(J=(I=d.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,M,Q;e.parameters={...e.parameters,docs:{...(K=e.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoLink, ['default', 'underline', 'button'], {
    defaultProps: {
      href: '#'
    }
  })
}`,...(Q=(M=e.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,Y,Z;t.parameters={...t.parameters,docs:{...(X=t.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoLink, ['default', 'underline', 'button'], {
    defaultProps: {
      href: '#'
    },
    dark: true
  })
}`,...(Z=(Y=t.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,se,ae;u.parameters={...u.parameters,docs:{...(re=u.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ae=(se=u.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const Se=["Default","Underline","Button","External","Disabled","Small","Large","WithSlot","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{e as AllColors,m as AllColorsA11y,t as AllColorsOnDark,u as AllColorsOnDarkA11y,a as Button,r as Default,n as Disabled,o as External,c as Large,i as OnDark,d as RTL,l as Small,s as Underline,p as WithSlot,Se as __namedExportsOrder,ye as default};
