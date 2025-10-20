import{d as B,c as d,a as L,i as R}from"./vue.esm-bundler-DAnUScag.js";import{d as r,N as _,a as w}from"./exampleIcons-BRi5zoKI.js";import{c as P}from"./colors-D7cU6MZF.js";import"./_plugin-vue_export-helper-DQpfx0YY.js";function k(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!R(e)}const K={title:"Atoms/NeoIcon",component:_,tags:["autodocs"],argTypes:{color:{control:"select",options:P}},args:{color:"grey",colorVariant:"theme",size:"medium",default:()=>r},parameters:{docs:{description:{component:"This is a Wrapper to unify svg Icons with colors and font sizes."}}}},o={},a={args:{size:"small"}},s={args:{size:"large"}},n={args:{colorVariant:"theme"}},t={args:{colorVariant:"text"}},c={render:e=>B({name:"ColorRender",setup(){return()=>d("div",{style:{display:"flex",flexDirection:"column",fontSize:"32px",inlineSize:"fit-content"}},[d("span",null,[L("With Font size 32px")]),d(_,e,k(r)?r:{default:()=>[r]})])}})},i={args:{color:"green",default:()=>w}},l={args:{color:"red",default:()=>r}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,z,V;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(V=(z=s.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var I,h,y;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    colorVariant: 'theme'
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var N,T,D;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    colorVariant: 'text'
  }
}`,...(D=(T=t.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var E,v,C;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var F,b,j;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    color: 'green',
    default: () => addIcon
  }
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var A,O,W;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    color: 'red',
    default: () => deleteIcon
  }
}`,...(W=(O=l.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const M=["Default","Small","Large","colorVariantTheme","colorVariantText","BigFonts","AddExample","DeleteExample"];export{i as AddExample,c as BigFonts,o as Default,l as DeleteExample,s as Large,a as Small,M as __namedExportsOrder,t as colorVariantText,n as colorVariantTheme,K as default};
