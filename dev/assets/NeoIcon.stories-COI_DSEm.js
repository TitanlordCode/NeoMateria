import{b as ae,d as ne,c as n,a as te,m as S,i as se}from"./iframe-acYjf2IA.js";import{d as e,N as o,a as ce}from"./exampleIcons-B7L2rf0H.js";import{c as oe}from"./colorShowcase-CCwc2uRL.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-BaMiToec.js";function t(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!se(r)}const ue={title:"Atoms/NeoIcon",component:o,tags:["autodocs"],argTypes:{color:{control:"select",options:ae}},args:{color:"grey",colorVariant:"theme",size:"medium",default:()=>e},parameters:{docs:{description:{component:"This is a Wrapper to unify svg Icons with colors and font sizes."}}}},s={},c={args:{size:"small"}},l={args:{size:"large"}},i={args:{colorVariant:"theme"}},d={args:{colorVariant:"text"}},m={render:r=>ne({name:"ColorRender",setup(){return()=>n("div",{style:{display:"flex",flexDirection:"column",fontSize:"32px",inlineSize:"fit-content"}},[n("span",null,[te("With Font size 32px")]),n(o,r,t(e)?e:{default:()=>[e]})])}})},p={args:{color:"green",default:()=>ce}},u={args:{color:"red",default:()=>e}},g={globals:{backgrounds:"#000"}},f={globals:{direction:"rtl"}},x={render:oe(o,[{variant:"theme",label:"Theme Color Variant",render:(r,I,a)=>n(o,S(a,{color:r,colorVariant:"theme"}),t(e)?e:{default:()=>[e]})},{variant:"text",label:"Text Color Variant",render:(r,I,a)=>n(o,S(a,{color:r,colorVariant:"text"}),t(e)?e:{default:()=>[e]})}])},V={globals:{backgrounds:"#000"},render:oe(o,[{variant:"theme",label:"Theme Color Variant",render:(r,I,a)=>n(o,S(a,{color:r,colorVariant:"theme"}),t(e)?e:{default:()=>[e]})},{variant:"text",label:"Text Color Variant",render:(r,I,a)=>n(o,S(a,{color:r,colorVariant:"text"}),t(e)?e:{default:()=>[e]})}],{dark:!0})};var h,b,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var N,T,v;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var z,_,k;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(k=(_=l.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var D,y,A;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    colorVariant: 'theme'
  }
}`,...(A=(y=i.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var O,E,w;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    colorVariant: 'text'
  }
}`,...(w=(E=d.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var F,L,R;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
                        <NeoIcon {...args}>{deleteIcon}</NeoIcon>
                    </div>;
      }
    });
  }
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var j,W,B;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: 'green',
    default: () => addIcon
  }
}`,...(B=(W=p.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var P,q,G;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    color: 'red',
    default: () => deleteIcon
  }
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,K;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoIcon, [{
    variant: 'theme',
    label: 'Theme Color Variant',
    render: (color, _, args) => <NeoIcon {...args} color={color} colorVariant="theme">
                    {deleteIcon}
                </NeoIcon>
  }, {
    variant: 'text',
    label: 'Text Color Variant',
    render: (color, _, args) => <NeoIcon {...args} color={color} colorVariant="text">
                    {deleteIcon}
                </NeoIcon>
  }])
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;V.parameters={...V.parameters,docs:{...($=V.parameters)==null?void 0:$.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoIcon, [{
    variant: 'theme',
    label: 'Theme Color Variant',
    render: (color, _, args) => <NeoIcon {...args} color={color} colorVariant="theme">
                        {deleteIcon}
                    </NeoIcon>
  }, {
    variant: 'text',
    label: 'Text Color Variant',
    render: (color, _, args) => <NeoIcon {...args} color={color} colorVariant="text">
                        {deleteIcon}
                    </NeoIcon>
  }], {
    dark: true
  })
}`,...(re=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ge=["Default","Small","Large","colorVariantTheme","colorVariantText","BigFonts","AddExample","DeleteExample","OnDark","RTL","AllColors","AllColorsOnDark"];export{p as AddExample,x as AllColors,V as AllColorsOnDark,m as BigFonts,s as Default,u as DeleteExample,l as Large,g as OnDark,f as RTL,c as Small,ge as __namedExportsOrder,d as colorVariantText,i as colorVariantTheme,ue as default};
