import{d as Ae,c as we}from"./iframe-D9nyRK5o.js";import{N as S}from"./NeoLinkButton-Dv3_9T9z.js";import{b as De,a as Le}from"./NeoButtonTypes-naNG8zvj.js";import{a as Ce}from"./argTypes-VnJZhiy7.js";import{A as xe,D as We}from"./defaultIcons-DXzthn_L.js";import{c as ke}from"./colorShowcase-CPaxLojg.js";import{c as ve}from"./createA11yPlay-CpEQ4bEB.js";import"./preload-helper-Dp1pzeXC.js";import"./useButton-B-Bpk_ne.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIcon-Cexy51PO.js";import"./iconStrings-DvlgHS7z.js";import"./axe-zbpV6D8O.js";const Ue={title:"Atoms/Button/NeoLinkButton",component:S,tags:["autodocs"],argTypes:{...Ce,text:{control:"text",table:{category:"Content"},description:"Link label text. Falls back to the default slot if omitted."},href:{control:"text",table:{category:"Content"},description:"Destination URL the link points to."},external:{control:"boolean",table:{category:"Behavior"},description:'Opens in a new tab with `rel="noopener noreferrer"`.'},disabled:{control:"boolean",description:'Visually and functionally disables the link. Sets `aria-disabled="true"` and removes the `href` to prevent navigation.',table:{category:"Behavior"}},color:{description:'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',table:{category:"Appearance"}},size:{control:"select",options:Le,description:"Controls padding and font size.",table:{category:"Appearance"}},variant:{control:"select",options:De,description:"Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners for a pill shape.",table:{category:"Appearance"}},fullWidth:{control:"boolean",description:"Stretches the link button to fill its container's full inline size.",table:{category:"Appearance"}},default:{control:!1,description:"Default slot content rendered inside the link. Falls back to the `text` prop if empty.",table:{category:"Slots"}},prefix:{control:!1,description:"Content rendered before the label and start icon (e.g. a decorative icon).",table:{category:"Slots"}},iconStart:{control:!1,description:"Icon rendered at the leading edge of the link. Pass a raw SVG element or a Vue component.",table:{category:"Slots"}},iconEnd:{control:!1,description:"Icon rendered at the trailing edge of the link. Pass a raw SVG element or a Vue component.",table:{category:"Slots"}},suffix:{control:!1,description:"Content rendered after the label and end icon.",table:{category:"Slots"}}},args:{text:"Go to page",href:"#",size:"medium",color:"blue",variant:"primary",rounded:!1,fullWidth:!1,external:!1},render:e=>Ae({name:"NeoLinkButtonRender",render:()=>we(S,e,{...e.iconStart?{iconStart:()=>e.iconStart}:{},...e.iconEnd?{iconEnd:()=>e.iconEnd}:{}})}),parameters:{snapshot:{viewports:["sm","lg","xl"]}}},a={tags:["snapshot"]},s={tags:["snapshot"],args:{size:"small"}},o={tags:["snapshot"],args:{size:"large"}},n={tags:["snapshot"],args:{rounded:!0}},c={tags:["snapshot"],args:{variant:"secondary"}},l={tags:["snapshot"],args:{variant:"tertiary"}},i={tags:["snapshot"],args:{variant:"ghost",text:"Ghost Link"}},p={tags:["snapshot"],args:{text:"Open in new tab",href:"https://example.com",external:!0}},d={tags:["snapshot"],args:{text:"With Icon Start",iconStart:xe}},m={tags:["snapshot"],args:{text:"With Icon End",iconEnd:We}},u={tags:["snapshot"],args:{variant:"ghost",text:"Full Width Link",fullWidth:!0,iconEnd:xe}},g={tags:["snapshot"],args:{disabled:!0,text:"Disabled Link"},parameters:{docs:{source:{code:'<NeoLinkButton href="/page" color="blue" :disabled="true" text="Disabled Link" />'}}}},h={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},b={tags:["snapshot"],globals:{direction:"rtl"},args:{text:"انتقل إلى الصفحة"},parameters:{snapshot:{viewports:["sm","xl"]}}},t={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:ke(S,["primary","secondary","tertiary","ghost"])},r={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:ke(S,["primary","secondary","tertiary","ghost"],{dark:!0})},y={...t,tags:["!dev","test-only"],play:ve()},f={...r,tags:["!dev","test-only"],play:ve()};var x,k,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var A,w,D;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var L,C,W;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(W=(C=o.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var E,I,O;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    rounded: true
  }
}`,...(O=(I=n.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var B,z,N;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'secondary'
  }
}`,...(N=(z=c.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var V,G,T;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'tertiary'
  }
}`,...(T=(G=l.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var F,R,P;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'ghost',
    text: 'Ghost Link'
  }
}`,...(P=(R=i.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var _,U,j;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    text: 'Open in new tab',
    href: 'https://example.com',
    external: true
  }
}`,...(j=(U=p.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var q,H,J;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    text: 'With Icon Start',
    iconStart: AddIcon
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    text: 'With Icon End',
    iconEnd: DeleteIcon
  }
}`,...(Q=(M=m.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'ghost',
    text: 'Full Width Link',
    fullWidth: true,
    iconEnd: AddIcon
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true,
    text: 'Disabled Link'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoLinkButton href="/page" color="blue" :disabled="true" text="Disabled Link" />\`
      }
    }
  }
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,se;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(se=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ne,ce;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'انتقل إلى الصفحة'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(ce=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var le,ie,pe;t.parameters={...t.parameters,docs:{...(le=t.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoLinkButton, ['primary', 'secondary', 'tertiary', 'ghost'])
}`,...(pe=(ie=t.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var de,me,ue;r.parameters={...r.parameters,docs:{...(de=r.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoLinkButton, ['primary', 'secondary', 'tertiary', 'ghost'], {
    dark: true
  })
}`,...(ue=(me=r.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ge,he,be;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(be=(he=y.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ye,fe,Se;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Se=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};const je=["Default","Small","Large","Rounded","Secondary","Tertiary","Ghost","External","WithIconStart","WithIconEnd","FullWidth","Disabled","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{t as AllColors,y as AllColorsA11y,r as AllColorsOnDark,f as AllColorsOnDarkA11y,a as Default,g as Disabled,p as External,u as FullWidth,i as Ghost,o as Large,h as OnDark,b as RTL,n as Rounded,c as Secondary,s as Small,l as Tertiary,m as WithIconEnd,d as WithIconStart,je as __namedExportsOrder,Ue as default};
