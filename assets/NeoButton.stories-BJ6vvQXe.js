import{d as pe,u as he,f as fe,g as be,k as B,a as ve,v as I,c as a,l as E,t as ke,m as k,p as Se,o as xe,j as N,q as Ce,F as Be}from"./vue.esm-bundler-DYa0JGZ4.js";import{f as Ie,w as Ee,u as Ne,a as we,e as _e}from"./index-B7dDGrsI.js";import{g as w,_ as ze}from"./_plugin-vue_export-helper-DQpfx0YY.js";import{N as _,a as Re,d as We}from"./exampleIcons-EuMk6UQr.js";import{c as ue,a as qe}from"./colors-xfUi1wj1.js";const $e=["disabled"],ye=pe({__name:"NeoButton",props:{class:{},text:{},size:{},color:{},disabled:{type:Boolean},rounded:{type:Boolean},variant:{}},emits:["click"],setup(r,{emit:t}){const e=r,n=t,o=he(),v=s=>{e.disabled||n("click",s)},ge=fe(()=>{const s=w({component:"NeoButton",modifiers:[e.size??"medium",e.variant??"primary",e.rounded?"rounded":""],additional:e.class}),C=w({component:"Themed",modifiers:[e.color??"grey500"]});return`${s} ${C}`});return(s,C)=>(xe(),be("button",k(Se(o),{class:ge.value,disabled:e.disabled??void 0,onClick:v}),[B(a(_,{"color-variant":"text",color:e.color,size:"medium"},{default:E(()=>[N(s.$slots,"iconStart",{},void 0,!0)]),_:3},8,["color"]),[[I,s.$slots.iconStart]]),ve(" "+ke(e.text)+" ",1),B(a(_,{"color-variant":"text",color:e.color,size:"medium"},{default:E(()=>[N(s.$slots,"iconEnd",{},void 0,!0)]),_:3},8,["color"]),[[I,s.$slots.iconEnd]])],16,$e))}}),S=ze(ye,[["__scopeId","data-v-113f7f61"]]);ye.__docgenInfo={exportName:"default",displayName:"NeoButton",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"text",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | "tertiary"',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent]",signature:'(event: "click", event: MouseEvent): void',declarations:[],schema:[{kind:"object",type:"MouseEvent"}]}],slots:[{name:"iconStart",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"iconEnd",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"text",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",type:'"primary" | "secondary" | "tertiary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Button/NeoButton.vue"};const Te=["small","medium","large"],De=["primary","secondary","tertiary"],x=r=>{const t=Ce(r.variant!=="primary"),e=()=>t.value=!t.value;return pe({name:"ColorRender",setup(){return()=>a(Be,null,[r.variant!=="primary"&&a("div",{style:{paddingBlock:"8px"}},[a(S,k(r,{variant:"primary",text:`Toggle accessibility background ${t.value?"🟢":"🔴"}`,onClick:e}),null)]),a("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",maxInlineSize:"100%"}},[qe.map(n=>a("div",{class:`box-${n}`,style:{inlineSize:"100%"}},[ue.filter(o=>o.replace(/\d+$/,"")===n).map((o,v)=>a("div",{class:t.value?`Themed--${o}`:"",style:{inlineSize:"100%",padding:"8px",backgroundColor:"var(--neo-theme-colorText)"}},[a(S,k({key:v},r,{color:o,text:o}),null)]))]))])])}})},je={title:"Atoms/NeoButton",component:S,tags:["autodocs"],argTypes:{text:{control:"text"},size:{control:"select",options:Te},variant:{control:"select",options:De},disabled:{control:"boolean"},color:{control:"select",options:ue}},args:{text:"Click me",size:"medium",color:"grey500",variant:"primary",disabled:!1,rounded:!1,onClick:Ie()}},l={},d={args:{size:"small"}},m={args:{size:"large"}},p={args:{text:"Disabled NeoButton",disabled:!0}},u={args:{text:"Rounded NeoButton",rounded:!0}},y={render:x},g={args:{variant:"secondary"},render:x},h={args:{variant:"tertiary"},render:x},i={args:{text:"With Icon Start",iconStart:()=>Re}},c={args:{text:"With Icon End",iconEnd:()=>We}},f={args:{...i.args,...c.args,text:"With Both Icon"}},b={play:async({args:r,canvasElement:t,step:e})=>{const n=Ee(t);await e("Check click functionality",async()=>{await Ne.click(n.getByRole("button"))}),await we(()=>_e(r.onClick).toHaveBeenCalled())}};var z,R,W;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(W=(R=l.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var q,$,T;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(T=($=d.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var D,P,A;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(A=(P=m.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var F,M,V;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    text: 'Disabled NeoButton',
    disabled: true
  }
}`,...(V=(M=p.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var j,O,H;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: 'Rounded NeoButton',
    rounded: true
  }
}`,...(H=(O=u.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var K,G,J;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: colorRender
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var L,Q,U;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: colorRender
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  },
  render: colorRender
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;i.parameters={...i.parameters,docs:{...(ee=i.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    text: 'With Icon Start',
    iconStart: () => addIcon
  }
}`,...(re=(ae=i.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,se,oe;c.parameters={...c.parameters,docs:{...(te=c.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    text: 'With Icon End',
    iconEnd: () => deleteIcon
  }
}`,...(oe=(se=c.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,ie,ce;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...WithIconStart.args,
    ...WithIconEnd.args,
    text: 'With Both Icon'
  }
}`,...(ce=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,me;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Check click functionality', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
}`,...(me=(de=b.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const Oe=["Default","Small","large","Disabled","Rounded","PrimaryColored","SecondaryColored","TertiaryColored","WithIconStart","WithIconEnd","WithIconStartAndEnd","interaction"];export{l as Default,p as Disabled,y as PrimaryColored,u as Rounded,g as SecondaryColored,d as Small,h as TertiaryColored,c as WithIconEnd,i as WithIconStart,f as WithIconStartAndEnd,Oe as __namedExportsOrder,je as default,b as interaction,m as large};
