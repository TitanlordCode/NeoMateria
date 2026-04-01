import{d as de,e as he,v as l,x as ye,C as _,a as pe,y as C,z as q,A as fe,t as i,r as ke,c as n,m as t}from"./iframe-BNVHVJhn.js";import{g as ve}from"./id-DERw85mN.js";import{g as S,_ as Re}from"./_plugin-vue_export-helper-DerOYOQE.js";import{d as Ne,a as qe}from"./argTypes-VnJZhiy7.js";import{c as ue}from"./colorShowcase-BzxvNubM.js";import"./preload-helper-Dp1pzeXC.js";const xe=["id","name","value","checked","disabled","required","aria-label"],_e=["for"],Ce={key:0,class:"NeoRadio-required","aria-hidden":"true"},Se={key:1,class:"NeoRadio-requiredText sr-only"},R=de({__name:"NeoRadio",props:{name:{},value:{},checked:{type:Boolean},disabled:{type:Boolean},size:{},color:{},label:{},ariaLabel:{},required:{type:Boolean},requiredText:{}},emits:["update:checked"],setup(a,{emit:o}){const e=a,me=o,x=ve("radio"),ge=s=>{s.target.checked&&me("update:checked",e.value)},be=he(()=>{const s=S({component:"NeoRadio",modifiers:[e.size??"medium"]}),N=S({component:"Themed",modifiers:[e.color??"blue"]});return`${s} ${N}`});return(s,N)=>(i(),l("div",{class:fe(be.value)},[ye("input",{id:`${_(x)}-${e.name}-${e.value}`,class:"NeoRadio-input",type:"radio",name:e.name,value:e.value,checked:e.checked,disabled:e.disabled,required:e.required,"aria-label":e.ariaLabel,onChange:ge},null,40,xe),e.label?(i(),l("label",{key:0,class:"NeoRadio-label",for:`${_(x)}-${e.name}-${e.value}`},[pe(C(e.label)+" ",1),e.required?(i(),l("span",Ce,"*")):q("",!0),e.required?(i(),l("span",Se," ("+C(e.requiredText)+") ",1)):q("",!0)],8,_e)):q("",!0)],2))}}),r=Re(R,[["__scopeId","data-v-b0509c85"]]);R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:"default",displayName:"NeoRadio",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"value",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"checked",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"any",declarations:[],schema:"any"},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"true",declarations:[],schema:"true"},{name:"requiredText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:checked",description:"Emitted when this radio option is selected. Receives the option's `value` prop.",tags:[],type:"[value: string]",signature:'(event: "update:checked", value: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"value",type:"string",description:"",declarations:[],schema:"string"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"true",description:"",declarations:[],schema:"true"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"checked",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"requiredText",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Radio/NeoRadio.vue"});const Le=["small","medium","large"],we={title:"Atoms/NeoRadio",component:r,tags:["autodocs"],argTypes:{...qe,...Ne,name:{control:"text",table:{category:"Content"}},label:{control:"text",table:{category:"Content"}},value:{control:"text",table:{category:"Content"}},color:{description:"Theme color for the radio fill and focus ring."},size:{control:"select",options:Le,table:{category:"Appearance"},description:"Controls the radio button size and label font size."},checked:{control:"boolean",table:{category:"State"}},required:{control:"boolean",table:{category:"State"}}},args:{name:"example-radio",label:"Option 1",value:"option1",size:"medium",color:"blue"}},c={},d={args:{label:void 0,ariaLabel:"Option A"}},p={args:{checked:!0}},u={args:{disabled:!0}},m={args:{disabled:!0,checked:!0}},g={args:{size:"small"}},b={args:{size:"large"}},h={parameters:{docs:{source:{code:`<script setup>
const selected = ref('option1')
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <NeoRadio
      name="group"
      value="option1"
      label="Option 1"
      color="blue"
      :checked="selected === 'option1'"
      @update:checked="selected = 'option1'"
    />
    <NeoRadio
      name="group"
      value="option2"
      label="Option 2"
      color="blue"
      :checked="selected === 'option2'"
      @update:checked="selected = 'option2'"
    />
    <NeoRadio
      name="group"
      value="option3"
      label="Option 3"
      color="blue"
      :checked="selected === 'option3'"
      @update:checked="selected = 'option3'"
    />
  </div>
</template>`}}},render:a=>de({name:"RadioGroupRender",setup(){const o=ke("option1");return()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},[n(r,t(a,{name:"group",value:"option1",label:"Option 1",ariaLabel:void 0,checked:o.value==="option1","onUpdate:checked":()=>o.value="option1"}),null),n(r,t(a,{name:"group",value:"option2",label:"Option 2",ariaLabel:void 0,checked:o.value==="option2","onUpdate:checked":()=>o.value="option2"}),null),n(r,t(a,{name:"group",value:"option3",label:"Option 3",ariaLabel:void 0,checked:o.value==="option3","onUpdate:checked":()=>o.value="option3"}),null),n("p",{style:{marginTop:"16px"}},[pe("Selected: "),o.value])])}})},y={globals:{backgrounds:"#000"}},f={globals:{direction:"rtl"},args:{label:"الخيار الأول"}},k={render:ue(r,[{variant:"default",label:"Radio",render:(a,o,e)=>n(r,t(e,{ariaLabel:void 0,color:a,label:a,name:"color-radio",value:a,checked:!0}),null)}])},v={globals:{backgrounds:"#000"},render:ue(r,[{variant:"default",label:"Radio",render:(a,o,e)=>n(r,t(e,{ariaLabel:void 0,color:a,label:a,name:"color-radio",value:a,checked:!0}),null)}],{dark:!0})};var L,O,z;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(z=(O=c.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var T,V,D;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: undefined,
    ariaLabel: 'Option A'
  }
}`,...(D=(V=d.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var A,w,$;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...($=(w=p.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var B,U,P;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(P=(U=u.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var E,I,G;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...(G=(I=m.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var K,M,W;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(W=(M=g.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var j,F,H;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(H=(F=b.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,Q,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const selected = ref('option1')
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <NeoRadio
      name="group"
      value="option1"
      label="Option 1"
      color="blue"
      :checked="selected === 'option1'"
      @update:checked="selected = 'option1'"
    />
    <NeoRadio
      name="group"
      value="option2"
      label="Option 2"
      color="blue"
      :checked="selected === 'option2'"
      @update:checked="selected = 'option2'"
    />
    <NeoRadio
      name="group"
      value="option3"
      label="Option 3"
      color="blue"
      :checked="selected === 'option3'"
      @update:checked="selected = 'option3'"
    />
  </div>
</template>\`
      }
    }
  },
  render: (args: NeoRadioProps) => {
    return defineComponent({
      name: 'RadioGroupRender',
      setup() {
        const selectedValue = ref('option1');
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
                        <NeoRadio {...args} name="group" value="option1" label="Option 1" ariaLabel={undefined} checked={selectedValue.value === 'option1'} onUpdate:checked={() => selectedValue.value = 'option1'} />
                        <NeoRadio {...args} name="group" value="option2" label="Option 2" ariaLabel={undefined} checked={selectedValue.value === 'option2'} onUpdate:checked={() => selectedValue.value = 'option2'} />
                        <NeoRadio {...args} name="group" value="option3" label="Option 3" ariaLabel={undefined} checked={selectedValue.value === 'option3'} onUpdate:checked={() => selectedValue.value = 'option3'} />
                        <p style={{
            marginTop: '16px'
          }}>Selected: {selectedValue.value}</p>
                    </div>;
      }
    });
  }
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,oe,re;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'الخيار الأول'
  }
}`,...(re=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ne,te,se;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoRadio, [{
    variant: 'default',
    label: 'Radio',
    render: (color, _variant, args) => {
      return <NeoRadio {...args} ariaLabel={undefined} color={color} label={color} name="color-radio" value={color} checked={true} />;
    }
  }])
}`,...(se=(te=k.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,ie,ce;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoRadio, [{
    variant: 'default',
    label: 'Radio',
    render: (color, _, args) => {
      return <NeoRadio {...args} ariaLabel={undefined} color={color} label={color} name="color-radio" value={color} checked={true} />;
    }
  }], {
    dark: true
  })
}`,...(ce=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const $e=["Default","WithoutLabel","Checked","Disabled","DisabledChecked","Small","Large","RadioGroup","OnDark","RTL","AllColors","AllColorsOnDark"];export{k as AllColors,v as AllColorsOnDark,p as Checked,c as Default,u as Disabled,m as DisabledChecked,b as Large,y as OnDark,f as RTL,h as RadioGroup,g as Small,d as WithoutLabel,$e as __namedExportsOrder,we as default};
