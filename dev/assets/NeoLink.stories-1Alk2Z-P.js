import{d as ce,c as h,a as f}from"./iframe-Dknl-Izy.js";import{N as g}from"./NeoLink-BrDW50cM.js";import{d as pe}from"./argTypes-VnJZhiy7.js";import{c as oe}from"./colorShowcase-ukgIxckm.js";import{c as ne}from"./createA11yPlay-C_PKokKa.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./axe-Dc5bORdo.js";const ie=["small","medium","large"],de=["default","underline","button"],Se={title:"Atoms/NeoLink",component:g,tags:["autodocs"],argTypes:{...pe,href:{control:"text",table:{category:"Content"}},text:{control:"text",table:{category:"Content"}},color:{description:"Theme color applied to the link text and underline.",table:{category:"Appearance"}},size:{control:"select",options:ie,description:"Controls font size.",table:{category:"Appearance"}},variant:{control:"select",options:de,description:"`default`: colored text, no underline at rest. `underline`: always underlined. `button`: renders the link styled as a button for call-to-action usage.",table:{category:"Appearance"}},external:{control:"boolean",table:{category:"Behavior"}},target:{control:"select",options:["_blank","_self","_parent","_top"],table:{category:"Behavior"}},rel:{control:"text",table:{category:"Behavior"}}},args:{href:"https://example.com",text:"Click me",size:"medium",variant:"default",color:"blue"}},t={tags:["snapshot"]},a={tags:["snapshot"],args:{variant:"underline"}},s={tags:["snapshot"],args:{variant:"button"}},o={tags:["snapshot"],args:{external:!0,target:"_blank",text:"Open in new tab"}},n={tags:["snapshot"],args:{disabled:!0}},l={tags:["snapshot"],args:{size:"small"}},c={tags:["snapshot"],args:{size:"large"}},p={tags:["snapshot"],parameters:{docs:{source:{code:`<!-- Use the default slot for rich link content instead of the text prop -->
<NeoLink href="https://example.com" color="blue">
  <strong>Custom content</strong> with <em>formatting</em>
</NeoLink>`}}},render:le=>ce({name:"WithSlotRender",setup(){return()=>h(g,le,{default:()=>[h("strong",null,[f("Custom content")]),f(" with "),h("em",null,[f("formatting")])]})}})},i={tags:["snapshot"],globals:{backgrounds:"#000"}},d={tags:["snapshot"],globals:{direction:"rtl"},args:{text:"انقر هنا"}},e={tags:["snapshot"],render:oe(g,["default","underline","button"],{defaultProps:{href:"#"}})},r={tags:["snapshot"],globals:{backgrounds:"#000"},render:oe(g,["default","underline","button"],{defaultProps:{href:"#"},dark:!0})},u={...e,tags:["!dev","test-only"],play:ne()},m={...r,tags:["!dev","test-only"],play:ne()};var b,k,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var S,x,C;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'underline'
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var A,L,N;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'button'
  }
}`,...(N=(L=s.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var v,D,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    external: true,
    target: '_blank',
    text: 'Open in new tab'
  }
}`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var O,z,P;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true
  }
}`,...(P=(z=n.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var _,T,B;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(B=(T=l.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var R,U,W;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var E,V,j;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(V=p.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,F,G;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  }
}`,...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,I,J;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'انقر هنا'
  }
}`,...(J=(I=d.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,M,Q;e.parameters={...e.parameters,docs:{...(K=e.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: createSimpleColorShowcase(NeoLink, ['default', 'underline', 'button'], {
    defaultProps: {
      href: '#'
    }
  })
}`,...(Q=(M=e.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,Y,Z;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoLink, ['default', 'underline', 'button'], {
    defaultProps: {
      href: '#'
    },
    dark: true
  })
}`,...(Z=(Y=r.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(re=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,se;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(se=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const xe=["Default","Underline","Button","External","Disabled","Small","Large","WithSlot","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{e as AllColors,u as AllColorsA11y,r as AllColorsOnDark,m as AllColorsOnDarkA11y,s as Button,t as Default,n as Disabled,o as External,c as Large,i as OnDark,d as RTL,l as Small,a as Underline,p as WithSlot,xe as __namedExportsOrder,Se as default};
