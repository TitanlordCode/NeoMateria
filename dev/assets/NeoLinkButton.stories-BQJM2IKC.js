import{d as fe,c as ke}from"./iframe-B0Dukz3x.js";import{N as S}from"./NeoLinkButton-Bzqx0xKJ.js";import{b as xe,a as Ae}from"./NeoButtonTypes-naNG8zvj.js";import{a as Ce}from"./argTypes-VnJZhiy7.js";import{A as ye,D as ve}from"./defaultIcons-Dm9DC7tC.js";import{c as be}from"./colorShowcase-DrQqXaLn.js";import{c as Se}from"./createA11yPlay-BQ9rYRTW.js";import"./preload-helper-Dp1pzeXC.js";import"./useButton-P1G5yMpQ.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIcon-BfncIjiP.js";import"./axe-C0a-FzRY.js";const Ve={title:"Atoms/Button/NeoLinkButton",component:S,tags:["autodocs"],argTypes:{...Ce,text:{control:"text",table:{category:"Content"}},href:{control:"text",table:{category:"Content"}},external:{control:"boolean",table:{category:"Behavior"}},color:{description:'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',table:{category:"Appearance"}},size:{control:"select",options:Ae,description:"Controls padding and font size.",table:{category:"Appearance"}},variant:{control:"select",options:xe,description:"Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners for a pill shape.",table:{category:"Appearance"}},fullWidth:{control:"boolean",description:"Stretches the link button to fill its container's full inline size.",table:{category:"Appearance"}},default:{control:!1,description:"Default slot content rendered inside the link. Falls back to the `text` prop if empty.",table:{category:"Slots"}},prefix:{control:!1,description:"Content rendered before the label and start icon (e.g. a decorative icon).",table:{category:"Slots"}},iconStart:{control:!1,description:"Icon rendered at the leading edge of the link. Pass a raw SVG element or a Vue component.",table:{category:"Slots"}},iconEnd:{control:!1,description:"Icon rendered at the trailing edge of the link. Pass a raw SVG element or a Vue component.",table:{category:"Slots"}}},args:{text:"Go to page",href:"#",size:"medium",color:"blue",variant:"primary",rounded:!1,fullWidth:!1,external:!1},render:e=>fe({name:"NeoLinkButtonRender",render:()=>ke(S,e,{...e.iconStart?{iconStart:()=>e.iconStart}:{},...e.iconEnd?{iconEnd:()=>e.iconEnd}:{}})})},a={tags:["snapshot"]},o={tags:["snapshot"],args:{size:"small"}},s={tags:["snapshot"],args:{size:"large"}},n={tags:["snapshot"],args:{rounded:!0}},c={tags:["snapshot"],args:{variant:"secondary"}},l={tags:["snapshot"],args:{variant:"tertiary"}},i={tags:["snapshot"],args:{variant:"ghost",text:"Ghost Link"}},p={tags:["snapshot"],args:{text:"Open in new tab",href:"https://example.com",external:!0}},d={tags:["snapshot"],args:{text:"With Icon Start",iconStart:ye}},u={tags:["snapshot"],args:{text:"With Icon End",iconEnd:ve}},m={tags:["snapshot"],args:{variant:"ghost",text:"Full Width Link",fullWidth:!0,iconEnd:ye}},g={tags:["snapshot"],globals:{backgrounds:"#000"}},h={tags:["snapshot"],globals:{direction:"rtl"},args:{text:"انتقل إلى الصفحة"}},r={tags:["snapshot"],render:be(S,["primary","secondary","tertiary","ghost"])},t={tags:["snapshot"],globals:{backgrounds:"#000"},render:be(S,["primary","secondary","tertiary","ghost"],{dark:!0})},y={...r,tags:["!dev","test-only"],play:Se()},b={...t,tags:["!dev","test-only"],play:Se()};var f,k,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var A,C,v;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var D,W,E;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(E=(W=s.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var I,L,w;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    rounded: true
  }
}`,...(w=(L=n.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var O,z,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'secondary'
  }
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var G,N,T;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'tertiary'
  }
}`,...(T=(N=l.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var V,F,P;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'ghost',
    text: 'Ghost Link'
  }
}`,...(P=(F=i.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var R,_,j;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    text: 'Open in new tab',
    href: 'https://example.com',
    external: true
  }
}`,...(j=(_=p.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var q,H,J;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    text: 'With Icon Start',
    iconStart: AddIcon
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    text: 'With Icon End',
    iconEnd: DeleteIcon
  }
}`,...(Q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'ghost',
    text: 'Full Width Link',
    fullWidth: true,
    iconEnd: AddIcon
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,te,ae;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'انتقل إلى الصفحة'
  }
}`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,se,ne;r.parameters={...r.parameters,docs:{...(oe=r.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: createSimpleColorShowcase(NeoLinkButton, ['primary', 'secondary', 'tertiary', 'ghost'])
}`,...(ne=(se=r.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ce,le,ie;t.parameters={...t.parameters,docs:{...(ce=t.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoLinkButton, ['primary', 'secondary', 'tertiary', 'ghost'], {
    dark: true
  })
}`,...(ie=(le=t.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var pe,de,ue;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ue=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,ge,he;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(he=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};const Fe=["Default","Small","Large","Rounded","Secondary","Tertiary","Ghost","External","WithIconStart","WithIconEnd","FullWidth","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{r as AllColors,y as AllColorsA11y,t as AllColorsOnDark,b as AllColorsOnDarkA11y,a as Default,p as External,m as FullWidth,i as Ghost,s as Large,g as OnDark,h as RTL,n as Rounded,c as Secondary,o as Small,l as Tertiary,u as WithIconEnd,d as WithIconStart,Fe as __namedExportsOrder,Ve as default};
