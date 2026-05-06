import{d as ie,e as he,x as S,y as k,z as be,A as ye,B as fe,u as V,r as we,c as ke,m as Se,h as Ve}from"./iframe-BjTGyj3F.js";import{g as v,_ as ve}from"./_plugin-vue_export-helper-DerOYOQE.js";import{d as Ce,a as Ne}from"./argTypes-VnJZhiy7.js";import{c as me}from"./colorShowcase-DpAaxDui.js";import{c as _e}from"./createA11yPlay-CpxiU3YS.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-D-kTwwPZ.js";const xe=["checked","disabled","aria-label","aria-checked"],Ae={key:0,class:"NeoSwitch-label"},w=ie({__name:"NeoSwitch",props:{modelValue:{type:Boolean},color:{},size:{},disabled:{type:Boolean},label:{},ariaLabel:{}},emits:["update:modelValue"],setup(a,{emit:o}){const e=a,pe=o,ue=he(()=>{const n=v({component:"NeoSwitch",modifiers:[e.size??"medium"]}),s=v({component:"Themed",modifiers:[e.color]});return`${n} ${s}`}),ge=n=>{const s=n.target;pe("update:modelValue",s.checked)};return(n,s)=>(V(),S("label",{class:fe(ue.value)},[k("input",{class:"NeoSwitch-input",type:"checkbox",role:"switch",checked:e.modelValue,disabled:e.disabled,"aria-label":e.ariaLabel,"aria-checked":e.modelValue,onChange:ge},null,40,xe),s[0]||(s[0]=k("span",{class:"NeoSwitch-track","aria-hidden":"true"},[k("span",{class:"NeoSwitch-thumb"})],-1)),e.label?(V(),S("span",Ae,be(e.label),1)):ye("",!0)],2))}}),t=ve(w,[["__scopeId","data-v-7d9d9120"]]);w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:"default",displayName:"NeoSwitch",type:1,props:[{name:"modelValue",global:!1,description:"",tags:[],required:!0,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"any",declarations:[],schema:"any"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"Emitted when the switch is toggled. Receives the new boolean value.",tags:[],type:"[value: boolean]",signature:'(event: "update:modelValue", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[],exposed:[{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"modelValue",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Switch/NeoSwitch.vue"});const ze=["small","medium","large"],Pe={title:"Atoms/NeoSwitch",component:t,tags:["autodocs"],argTypes:{...Ne,...Ce,label:{control:"text",table:{category:"Content"}},color:{description:"Theme color for the switch track when on."},size:{control:"select",options:ze,table:{category:"Appearance"},description:"Controls the switch track size and label font size."},modelValue:{control:"boolean",table:{category:"State"},description:"Whether the switch is on (true) or off (false)."}},args:{label:"Enable feature",modelValue:!1,color:"blue",size:"medium"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},l={tags:["snapshot"]},c={tags:["snapshot"],args:{modelValue:!0}},i={tags:["snapshot"],args:{modelValue:!0,label:"Dark mode"}},m={tags:["snapshot"],args:{disabled:!0}},d={tags:["snapshot"],args:{disabled:!0,modelValue:!0}},p={tags:["snapshot"],args:{size:"small",modelValue:!0}},u={tags:["snapshot"],args:{size:"large",modelValue:!0}},g={tags:["snapshot"],args:{label:void 0,ariaLabel:"Enable dark mode",modelValue:!0}},h={tags:["snapshot"],globals:{backgrounds:"#000"},args:{modelValue:!0},parameters:{snapshot:{viewports:["sm","xl"]}}},b={tags:["no-test"],render:a=>ie({name:"InteractiveSwitch",setup(){const o=we(a.modelValue??!1);return()=>ke(t,Se(a,{modelValue:o.value,"onUpdate:modelValue":e=>{o.value=e}}),null)}})},de={variant:"on",label:"Switch",render:a=>Ve(t,{color:a,ariaLabel:a,modelValue:!0})},r={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:me(t,[de])},y={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:me(t,[de],{dark:!0})},f={...r,tags:["!dev","test-only"],play:_e()};var C,N,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(_=(N=l.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var x,A,z;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    modelValue: true
  }
}`,...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var L,D,q;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    modelValue: true,
    label: 'Dark mode'
  }
}`,...(q=(D=i.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var O,B,E;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true
  }
}`,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,P,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true,
    modelValue: true
  }
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var T,W,K;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small',
    modelValue: true
  }
}`,...(K=(W=p.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var M,U,$;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large',
    modelValue: true
  }
}`,...($=(U=u.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var j,F,G;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: undefined,
    ariaLabel: 'Enable dark mode',
    modelValue: true
  }
}`,...(G=(F=g.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,Q;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  args: {
    modelValue: true
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['no-test'],
  render: args => defineComponent({
    name: 'InteractiveSwitch',
    setup() {
      const value = ref(args.modelValue ?? false);
      return () => <NeoSwitch {...args} modelValue={value.value} onUpdate:modelValue={(v: boolean) => {
        value.value = v;
      }} />;
    }
  })
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,se;r.parameters={...r.parameters,docs:{...(ee=r.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoSwitch, [switchColorVariant])
}`,...(se=(ae=r.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,te,oe;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoSwitch, [switchColorVariant], {
    dark: true
  })
}`,...(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,le,ce;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ce=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const Re=["Default","On","WithLabel","Disabled","DisabledOn","Small","Large","WithoutLabel","OnDark","Interactive","AllColors","AllColorsOnDark","AllColorsA11y"];export{r as AllColors,f as AllColorsA11y,y as AllColorsOnDark,l as Default,m as Disabled,d as DisabledOn,b as Interactive,u as Large,c as On,h as OnDark,p as Small,i as WithLabel,g as WithoutLabel,Re as __namedExportsOrder,Pe as default};
