import{d as $,c as p,a as g}from"./iframe-BNVHVJhn.js";import{N as m}from"./NeoLink-Dv5qr27E.js";import{d as ee}from"./argTypes-VnJZhiy7.js";import{c as Y}from"./colorShowcase-BzxvNubM.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const re=["small","medium","large"],te=["default","underline","button"],ie={title:"Atoms/NeoLink",component:m,tags:["autodocs"],argTypes:{...ee,href:{control:"text",table:{category:"Content"}},text:{control:"text",table:{category:"Content"}},color:{description:"Theme color applied to the link text and underline.",table:{category:"Appearance"}},size:{control:"select",options:re,description:"Controls font size.",table:{category:"Appearance"}},variant:{control:"select",options:te,description:"`default`: colored text, no underline at rest. `underline`: always underlined. `button`: renders the link styled as a button for call-to-action usage.",table:{category:"Appearance"}},external:{control:"boolean",table:{category:"Behavior"}},target:{control:"select",options:["_blank","_self","_parent","_top"],table:{category:"Behavior"}},rel:{control:"text",table:{category:"Behavior"}}},args:{href:"https://example.com",text:"Click me",size:"medium",variant:"default",color:"blue"}},e={},r={args:{variant:"underline"}},t={args:{variant:"button"}},o={args:{external:!0,target:"_blank",text:"Open in new tab"}},a={args:{disabled:!0}},n={args:{size:"small"}},s={args:{size:"large"}},l={parameters:{docs:{source:{code:`<!-- Use the default slot for rich link content instead of the text prop -->
<NeoLink href="https://example.com" color="blue">
  <strong>Custom content</strong> with <em>formatting</em>
</NeoLink>`}}},render:Z=>$({name:"WithSlotRender",setup(){return()=>p(m,Z,{default:()=>[p("strong",null,[g("Custom content")]),g(" with "),p("em",null,[g("formatting")])]})}})},c={globals:{backgrounds:"#000"}},i={globals:{direction:"rtl"},args:{text:"انقر هنا"}},d={render:Y(m,["default","underline","button"],{defaultProps:{href:"#"}})},u={globals:{backgrounds:"#000"},render:Y(m,["default","underline","button"],{defaultProps:{href:"#"},dark:!0})};var f,b,h;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(h=(b=e.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,S,x;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'underline'
  }
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var C,L,N;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'button'
  }
}`,...(N=(L=t.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var y,w,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    external: true,
    target: '_blank',
    text: 'Open in new tab'
  }
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var A,z,D;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(z=a.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var _,O,T;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(T=(O=n.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var B,P,R;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(R=(P=s.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var U,W,E;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(E=(W=l.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var V,j,q;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var F,G,H;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'انقر هنا'
  }
}`,...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoLink, ['default', 'underline', 'button'], {
    defaultProps: {
      href: '#'
    }
  })
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,X;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoLink, ['default', 'underline', 'button'], {
    defaultProps: {
      href: '#'
    },
    dark: true
  })
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const de=["Default","Underline","Button","External","Disabled","Small","Large","WithSlot","OnDark","RTL","AllColors","AllColorsOnDark"];export{d as AllColors,u as AllColorsOnDark,t as Button,e as Default,a as Disabled,o as External,s as Large,c as OnDark,i as RTL,n as Small,r as Underline,l as WithSlot,de as __namedExportsOrder,ie as default};
