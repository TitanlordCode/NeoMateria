import{d as ue,A as fe,f as be,g as ke,o as v,B as I,p as E,a as ve,t as xe,C as N,m as x,u as Ce,j as _,k as Se,c as s,F as Be}from"./vue.esm-bundler-DAnUScag.js";import{f as Ie,w as Ee,u as Ne,a as _e,e as ze}from"./index-B7dDGrsI.js";import{g as z,_ as we}from"./_plugin-vue_export-helper-DQpfx0YY.js";import{N as w,a as Re,d as We}from"./exampleIcons-BRi5zoKI.js";import{c as ye,a as qe}from"./colors-D7cU6MZF.js";const $e=["disabled"],ge=ue({__name:"NeoButton",props:{class:{},text:{},size:{},color:{},disabled:{type:Boolean},rounded:{type:Boolean},variant:{}},emits:["click"],setup(a,{emit:r}){const e=a,n=r,o=fe(),k=t=>{e.disabled||n("click",t)},he=be(()=>{const t=z({component:"NeoButton",modifiers:[e.size??"medium",e.variant??"primary",e.rounded?"rounded":""],additional:e.class}),B=z({component:"Themed",modifiers:[e.color??"grey"]});return`${t} ${B}`});return(t,B)=>(v(),ke("button",x(Ce(o),{class:he.value,disabled:e.disabled??void 0,onClick:k}),[t.$slots.iconStart?(v(),I(w,{key:0,"color-variant":"text",color:e.color,size:"medium"},{default:N(()=>[_(t.$slots,"iconStart",{},void 0,!0)]),_:3},8,["color"])):E("",!0),ve(" "+xe(e.text)+" ",1),t.$slots.iconEnd?(v(),I(w,{key:1,"color-variant":"text",color:e.color,size:"medium"},{default:N(()=>[_(t.$slots,"iconEnd",{},void 0,!0)]),_:3},8,["color"])):E("",!0)],16,$e))}}),C=we(ge,[["__scopeId","data-v-d5253a7e"]]);ge.__docgenInfo={exportName:"default",displayName:"NeoButton",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"text",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | "tertiary"',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent]",signature:'(event: "click", event: MouseEvent): void',declarations:[],schema:[{kind:"object",type:"MouseEvent"}]}],slots:[{name:"iconStart",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"iconEnd",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"text",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",type:'"primary" | "secondary" | "tertiary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Button/NeoButton.vue"};const Te=["small","medium","large"],De=["primary","secondary","tertiary"],S=a=>{const r=Se(a.variant!=="primary"),e=()=>r.value=!r.value;return ue({name:"ColorRender",setup(){return()=>s(Be,null,[a.variant!=="primary"&&s("div",{style:{paddingBlock:"8px"}},[s(C,x(a,{variant:"primary",text:`Toggle accessibility background ${r.value?"🟢":"🔴"}`,onClick:e}),null)]),s("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",maxInlineSize:"100%"}},[qe.map(n=>s("div",{class:`box-${n}`,style:{inlineSize:"100%"}},[ye.filter(o=>o.replace(/\d+$/,"")===n).map((o,k)=>s("div",{class:r.value?`Themed--${o}`:"",style:{inlineSize:"100%",padding:"8px",backgroundColor:"var(--neo-theme-colorText)"}},[s(C,x({key:k},a,{color:o,text:o}),null)]))]))])])}})},je={title:"Atoms/NeoButton",component:C,tags:["autodocs"],argTypes:{text:{control:"text"},size:{control:"select",options:Te},variant:{control:"select",options:De},disabled:{control:"boolean"},color:{control:"select",options:ye}},args:{text:"Click me",size:"medium",color:"grey",variant:"primary",disabled:!1,rounded:!1,onClick:Ie()}},l={},d={args:{size:"small"}},m={args:{size:"large"}},p={args:{text:"Disabled NeoButton",disabled:!0}},u={args:{text:"Rounded NeoButton",rounded:!0}},y={render:S},g={args:{variant:"secondary"},render:S},h={args:{variant:"tertiary"},render:S},i={args:{text:"With Icon Start",iconStart:()=>Re}},c={args:{text:"With Icon End",iconEnd:()=>We}},f={args:{...i.args,...c.args,text:"With Both Icon"}},b={play:async({args:a,canvasElement:r,step:e})=>{const n=Ee(r);await e("Check click functionality",async()=>{await Ne.click(n.getByRole("button"))}),await _e(()=>ze(a.onClick).toHaveBeenCalled())}};var R,W,q;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(q=(W=l.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var $,T,D;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var P,A,V;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(V=(A=m.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var F,M,j;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    text: 'Disabled NeoButton',
    disabled: true
  }
}`,...(j=(M=p.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var O,H,K;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: 'Rounded NeoButton',
    rounded: true
  }
}`,...(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var G,J,L;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: colorRender
}`,...(L=(J=y.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: colorRender
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  },
  render: colorRender
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,te;i.parameters={...i.parameters,docs:{...(ae=i.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    text: 'With Icon Start',
    iconStart: () => addIcon
  }
}`,...(te=(re=i.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,se,ne;c.parameters={...c.parameters,docs:{...(oe=c.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    text: 'With Icon End',
    iconEnd: () => deleteIcon
  }
}`,...(ne=(se=c.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,ce,le;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...WithIconStart.args,
    ...WithIconEnd.args,
    text: 'With Both Icon'
  }
}`,...(le=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,me,pe;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(me=b.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Oe=["Default","Small","large","Disabled","Rounded","PrimaryColored","SecondaryColored","TertiaryColored","WithIconStart","WithIconEnd","WithIconStartAndEnd","interaction"];export{l as Default,p as Disabled,y as PrimaryColored,u as Rounded,g as SecondaryColored,d as Small,h as TertiaryColored,c as WithIconEnd,i as WithIconStart,f as WithIconStartAndEnd,Oe as __namedExportsOrder,je as default,b as interaction,m as large};
