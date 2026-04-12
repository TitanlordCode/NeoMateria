import{N as h}from"./NeoLinkButton-hA0GwsXd.js";import{b as lr,a as dr}from"./NeoButtonTypes-naNG8zvj.js";import{a as ur}from"./argTypes-VnJZhiy7.js";import{A as cr,D as pr}from"./defaultIcons-BWHDugR3.js";import{c as ir}from"./colorShowcase-CVTHfhfV.js";import"./iframe-BBbPLObx.js";import"./preload-helper-Dp1pzeXC.js";import"./useButton-otF8SIdU.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIcon-DXYOa7dd.js";const Wr={title:"Atoms/Button/NeoLinkButton",component:h,tags:["autodocs"],argTypes:{...ur,text:{control:"text",table:{category:"Content"}},href:{control:"text",table:{category:"Content"}},external:{control:"boolean",table:{category:"Behavior"}},color:{description:'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',table:{category:"Appearance"}},size:{control:"select",options:dr,description:"Controls padding and font size.",table:{category:"Appearance"}},variant:{control:"select",options:lr,description:"Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners for a pill shape.",table:{category:"Appearance"}},fullWidth:{control:"boolean",description:"Stretches the link button to fill its container's full inline size.",table:{category:"Appearance"}}},args:{text:"Go to page",href:"#",size:"medium",color:"blue",variant:"primary",rounded:!1,fullWidth:!1,external:!1}},r={},e={args:{size:"small"}},a={args:{size:"large"}},o={args:{rounded:!0}},t={args:{variant:"secondary"}},s={args:{variant:"tertiary"}},n={args:{variant:"ghost",text:"Ghost Link"}},c={args:{text:"Open in new tab",href:"https://example.com",external:!0}},i={args:{text:"With Icon Start",iconStart:()=>cr}},l={args:{text:"With Icon End",iconEnd:()=>pr}},d={args:{variant:"ghost",text:"Full Width Link",fullWidth:!0,iconEnd:()=>cr}},u={globals:{backgrounds:"#000"}},p={globals:{direction:"rtl"},args:{text:"انتقل إلى الصفحة"}},m={render:ir(h,["primary","secondary","tertiary","ghost"])},g={globals:{backgrounds:"#000"},render:ir(h,["primary","secondary","tertiary","ghost"],{dark:!0})};var b,y,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,x,k;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(k=(x=e.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var A,W,v;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(v=(W=a.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var D,I,L;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...(L=(I=o.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var w,C,E;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var z,O,T;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(T=(O=s.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var B,G,N;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    text: 'Ghost Link'
  }
}`,...(N=(G=n.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var F,R,V;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    text: 'Open in new tab',
    href: 'https://example.com',
    external: true
  }
}`,...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,j,q;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: 'With Icon Start',
    iconStart: () => AddIcon
  }
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var H,J,K;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    text: 'With Icon End',
    iconEnd: () => DeleteIcon
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,P,Q;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    text: 'Full Width Link',
    fullWidth: true,
    iconEnd: () => AddIcon
  }
}`,...(Q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'انتقل إلى الصفحة'
  }
}`,...(rr=($=p.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,ar,or;m.parameters={...m.parameters,docs:{...(er=m.parameters)==null?void 0:er.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoLinkButton, ['primary', 'secondary', 'tertiary', 'ghost'])
}`,...(or=(ar=m.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};var tr,sr,nr;g.parameters={...g.parameters,docs:{...(tr=g.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoLinkButton, ['primary', 'secondary', 'tertiary', 'ghost'], {
    dark: true
  })
}`,...(nr=(sr=g.parameters)==null?void 0:sr.docs)==null?void 0:nr.source}}};const vr=["Default","Small","Large","Rounded","Secondary","Tertiary","Ghost","External","WithIconStart","WithIconEnd","FullWidth","OnDark","RTL","AllColors","AllColorsOnDark"];export{m as AllColors,g as AllColorsOnDark,r as Default,c as External,d as FullWidth,n as Ghost,a as Large,u as OnDark,p as RTL,o as Rounded,t as Secondary,e as Small,s as Tertiary,l as WithIconEnd,i as WithIconStart,vr as __namedExportsOrder,Wr as default};
