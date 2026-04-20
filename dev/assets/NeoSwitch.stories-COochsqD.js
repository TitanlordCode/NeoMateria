import{d as ie,e as he,v as V,x as S,y as be,z as ye,A as fe,t as w,r as ke,c as Se,m as Ve,h as we}from"./iframe-Dknl-Izy.js";import{g as v,_ as ve}from"./_plugin-vue_export-helper-DerOYOQE.js";import{d as Ce,a as Ne}from"./argTypes-VnJZhiy7.js";import{c as de}from"./colorShowcase-ukgIxckm.js";import{c as _e}from"./createA11yPlay-C_PKokKa.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-Dc5bORdo.js";const Ae=["checked","disabled","aria-label","aria-checked"],ze={key:0,class:"NeoSwitch-label"},k=ie({__name:"NeoSwitch",props:{modelValue:{type:Boolean},color:{},size:{},disabled:{type:Boolean},label:{},ariaLabel:{}},emits:["update:modelValue"],setup(a,{emit:t}){const e=a,ue=t,pe=he(()=>{const n=v({component:"NeoSwitch",modifiers:[e.size??"medium"]}),s=v({component:"Themed",modifiers:[e.color]});return`${n} ${s}`}),ge=n=>{const s=n.target;ue("update:modelValue",s.checked)};return(n,s)=>(w(),V("label",{class:fe(pe.value)},[S("input",{class:"NeoSwitch-input",type:"checkbox",role:"switch",checked:e.modelValue,disabled:e.disabled,"aria-label":e.ariaLabel,"aria-checked":e.modelValue,onChange:ge},null,40,Ae),s[0]||(s[0]=S("span",{class:"NeoSwitch-track","aria-hidden":"true"},[S("span",{class:"NeoSwitch-thumb"})],-1)),e.label?(w(),V("span",ze,be(e.label),1)):ye("",!0)],2))}}),o=ve(k,[["__scopeId","data-v-4ce3db20"]]);k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:"default",displayName:"NeoSwitch",type:1,props:[{name:"modelValue",global:!1,description:"",tags:[],required:!0,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"any",declarations:[],schema:"any"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"Emitted when the switch is toggled. Receives the new boolean value.",tags:[],type:"[value: boolean]",signature:'(event: "update:modelValue", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[],exposed:[{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modelValue",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Switch/NeoSwitch.vue"});const Le=["small","medium","large"],Be={title:"Atoms/NeoSwitch",component:o,tags:["autodocs"],argTypes:{...Ne,...Ce,label:{control:"text",table:{category:"Content"}},color:{description:"Theme color for the switch track when on."},size:{control:"select",options:Le,table:{category:"Appearance"},description:"Controls the switch track size and label font size."},modelValue:{control:"boolean",table:{category:"State"},description:"Whether the switch is on (true) or off (false)."}},args:{label:"Enable feature",modelValue:!1,color:"blue",size:"medium"}},l={tags:["snapshot"]},c={tags:["snapshot"],args:{modelValue:!0}},i={tags:["snapshot"],args:{modelValue:!0,label:"Dark mode"}},d={tags:["snapshot"],args:{disabled:!0}},m={tags:["snapshot"],args:{disabled:!0,modelValue:!0}},u={tags:["snapshot"],args:{size:"small",modelValue:!0}},p={tags:["snapshot"],args:{size:"large",modelValue:!0}},g={tags:["snapshot"],args:{label:void 0,ariaLabel:"Enable dark mode",modelValue:!0}},h={tags:["snapshot"],globals:{backgrounds:"#000"},args:{modelValue:!0}},b={tags:["no-test"],render:a=>ie({name:"InteractiveSwitch",setup(){const t=ke(a.modelValue??!1);return()=>Se(o,Ve(a,{modelValue:t.value,"onUpdate:modelValue":e=>{t.value=e}}),null)}})},me={variant:"on",label:"Switch",render:a=>we(o,{color:a,ariaLabel:a,modelValue:!0})},r={tags:["snapshot"],render:de(o,[me])},y={tags:["snapshot"],globals:{backgrounds:"#000"},render:de(o,[me],{dark:!0})},f={...r,tags:["!dev","test-only"],play:_e()};var C,N,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(_=(N=l.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var A,z,L;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    modelValue: true
  }
}`,...(L=(z=c.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var D,q,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    modelValue: true,
    label: 'Dark mode'
  }
}`,...(O=(q=i.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var x,E,I;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true
  }
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var P,B,R;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true,
    modelValue: true
  }
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var T,W,K;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small',
    modelValue: true
  }
}`,...(K=(W=u.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var M,U,$;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large',
    modelValue: true
  }
}`,...($=(U=p.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var j,F,G;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
  render: createSimpleColorShowcase(NeoSwitch, [switchColorVariant])
}`,...(se=(ae=r.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,oe,te;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoSwitch, [switchColorVariant], {
    dark: true
  })
}`,...(te=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,le,ce;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ce=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const Re=["Default","On","WithLabel","Disabled","DisabledOn","Small","Large","WithoutLabel","OnDark","Interactive","AllColors","AllColorsOnDark","AllColorsA11y"];export{r as AllColors,f as AllColorsA11y,y as AllColorsOnDark,l as Default,d as Disabled,m as DisabledOn,b as Interactive,p as Large,c as On,h as OnDark,u as Small,i as WithLabel,g as WithoutLabel,Re as __namedExportsOrder,Be as default};
