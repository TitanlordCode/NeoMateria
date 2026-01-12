import{d as be,B as ke,j as fe,k as Se,o as k,A as v,l as C,a as ve,t as Ce,C as x,m as xe,u as Be,r as B,b as Ee}from"./iframe-acYjf2IA.js";import{g as E,_ as Ne}from"./_plugin-vue_export-helper-BaMiToec.js";import{N,a as _e,d as Ie}from"./exampleIcons-B7L2rf0H.js";import{c as pe}from"./colorShowcase-CCwc2uRL.js";import"./preload-helper-Dp1pzeXC.js";const we=["disabled"],ue=be({__name:"NeoButton",props:{class:{},text:{},size:{},color:{},disabled:{type:Boolean},rounded:{type:Boolean},variant:{}},emits:["click"],setup(g,{emit:h}){const e=g,b=h,ye=ke(),ge=a=>{e.disabled||b("click",a)},he=fe(()=>{const a=E({component:"NeoButton",modifiers:[e.size??"medium",e.variant??"primary",e.rounded?"rounded":""],additional:e.class}),S=E({component:"Themed",modifiers:[e.color??"grey"]});return`${a} ${S}`});return(a,S)=>(k(),Se("button",xe(Be(ye),{class:he.value,disabled:e.disabled??void 0,onClick:ge}),[a.$slots.iconStart?(k(),v(N,{key:0,"color-variant":"text",color:e.color,size:"medium","aria-hidden":""},{default:x(()=>[B(a.$slots,"iconStart",{},void 0,!0)]),_:3},8,["color"])):C("",!0),ve(" "+Ce(e.text)+" ",1),a.$slots.iconEnd?(k(),v(N,{key:1,"color-variant":"text",color:e.color,size:"medium","aria-hidden":""},{default:x(()=>[B(a.$slots,"iconEnd",{},void 0,!0)]),_:3},8,["color"])):C("",!0)],16,we))}}),f=Ne(ue,[["__scopeId","data-v-9c7badb1"]]);ue.__docgenInfo={exportName:"default",displayName:"NeoButton",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"text",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | "tertiary"',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent]",signature:'(event: "click", event: MouseEvent): void',declarations:[],schema:[{kind:"object",type:"MouseEvent"}]}],slots:[{name:"iconStart",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"iconEnd",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"text",type:"string",description:"",declarations:[],schema:"string"},{name:"variant",type:'"primary" | "secondary" | "tertiary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Button/NeoButton.vue"};const We=["small","medium","large"],ze=["primary","secondary","tertiary"],{expect:Re,fn:qe,userEvent:De,waitFor:Oe,within:Ae}=__STORYBOOK_MODULE_TEST__,je={title:"Atoms/NeoButton",component:f,tags:["autodocs"],argTypes:{text:{control:"text"},size:{control:"select",options:We},variant:{control:"select",options:ze},disabled:{control:"boolean"},color:{control:"select",options:Ee}},args:{text:"Click me",size:"medium",color:"grey",variant:"primary",disabled:!1,rounded:!1,onClick:qe()}},o={},s={args:{size:"small"}},n={args:{size:"large"}},c={args:{text:"Disabled NeoButton",disabled:!0}},i={args:{text:"Rounded NeoButton",rounded:!0}},r={args:{text:"With Icon Start",iconStart:()=>_e}},t={args:{text:"With Icon End",iconEnd:()=>Ie}},l={args:{...r.args,...t.args,text:"With Both Icon"}},d={play:async({args:g,canvasElement:h,step:e})=>{const b=Ae(h);await e("Check click functionality",async()=>{await De.click(b.getByRole("button"))}),await Oe(()=>Re(g.onClick).toHaveBeenCalled())}},m={globals:{backgrounds:"#000"}},p={globals:{direction:"rtl"},args:{text:"انقر هنا"}},u={render:pe(f,["primary","secondary","tertiary"])},y={globals:{backgrounds:"#000"},render:pe(f,["primary","secondary","tertiary"],{dark:!0})};var _,I,w;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var W,z,R;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(R=(z=s.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var q,D,O;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(O=(D=n.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var A,T,M;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    text: 'Disabled NeoButton',
    disabled: true
  }
}`,...(M=(T=c.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var $,P,V;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    text: 'Rounded NeoButton',
    rounded: true
  }
}`,...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var j,F,K;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: 'With Icon Start',
    iconStart: () => addIcon
  }
}`,...(K=(F=r.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var L,H,U;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: 'With Icon End',
    iconEnd: () => deleteIcon
  }
}`,...(U=(H=t.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var Y,G,J;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...WithIconStart.args,
    ...WithIconEnd.args,
    text: 'With Both Icon'
  }
}`,...(J=(G=l.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,re;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(re=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,oe,se;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'انقر هنا'
  }
}`,...(se=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,ce,ie;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary'])
}`,...(ie=(ce=u.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,de,me;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary'], {
    dark: true
  })
}`,...(me=(de=y.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const Fe=["Default","Small","large","Disabled","Rounded","WithIconStart","WithIconEnd","WithIconStartAndEnd","interaction","OnDark","RTL","AllColors","AllColorsOnDark"];export{u as AllColors,y as AllColorsOnDark,o as Default,c as Disabled,m as OnDark,p as RTL,i as Rounded,s as Small,t as WithIconEnd,r as WithIconStart,l as WithIconStartAndEnd,Fe as __namedExportsOrder,je as default,d as interaction,n as large};
