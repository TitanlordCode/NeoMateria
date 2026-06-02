import{d as fe,f as Ce,x as c,y as _e,D as S,a as ke,z as A,A as C,B as Se,u as d,r as Ae,c as r,m as l}from"./iframe-D9nyRK5o.js";import{g as Oe}from"./id-DdmGbVuy.js";import{g as O,_ as Le}from"./_plugin-vue_export-helper-DerOYOQE.js";import{d as we,a as Te}from"./argTypes-VnJZhiy7.js";import{c as ve}from"./colorShowcase-CPaxLojg.js";import{c as xe}from"./createA11yPlay-CpEQ4bEB.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-zbpV6D8O.js";const De=["id","name","value","checked","disabled","required","aria-label"],Ve=["for"],ze={key:0,class:"NeoRadio-required","aria-hidden":"true"},Pe={key:1,class:"NeoRadio-requiredText sr-only"},q=fe({__name:"NeoRadio",props:{name:{},value:{},checked:{type:Boolean},disabled:{type:Boolean},size:{},color:{},label:{},ariaLabel:{},required:{type:Boolean},requiredText:{}},emits:["update:checked"],setup(a,{emit:o}){const e=a,Re=o,_=Oe("radio"),qe=i=>{i.target.checked&&Re("update:checked",e.value)},Ne=Ce(()=>{const i=O({component:"NeoRadio",modifiers:[e.size??"medium"]}),N=O({component:"Themed",modifiers:[e.color??"blue"]});return`${i} ${N}`});return(i,N)=>(d(),c("div",{class:Se(Ne.value)},[_e("input",{id:`${S(_)}-${e.name}-${e.value}`,class:"NeoRadio-input",type:"radio",name:e.name,value:e.value,checked:e.checked,disabled:e.disabled,required:e.required,"aria-label":e.ariaLabel,onChange:qe},null,40,De),e.label?(d(),c("label",{key:0,class:"NeoRadio-label",for:`${S(_)}-${e.name}-${e.value}`},[ke(A(e.label)+" ",1),e.required?(d(),c("span",ze,"*")):C("",!0),e.required?(d(),c("span",Pe," ("+A(e.requiredText)+") ",1)):C("",!0)],8,Ve)):C("",!0)],2))}}),s=Le(q,[["__scopeId","data-v-d966814a"]]);q.__docgenInfo=Object.assign({displayName:q.name??q.__name},{exportName:"default",displayName:"NeoRadio",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"value",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"checked",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"any",declarations:[],schema:"any"},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"true",declarations:[],schema:"true"},{name:"requiredText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:checked",description:"Emitted when this radio option is selected. Receives the option's `value` prop.",tags:[],type:"[value: string]",signature:'(event: "update:checked", value: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"value",type:"string",description:"",declarations:[],schema:"string"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"true",description:"",declarations:[],schema:"true"},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"requiredText",type:"string",description:"",declarations:[],schema:"string"},{name:"checked",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Radio/NeoRadio.vue"});const Be=["small","medium","large"],je={title:"Atoms/NeoRadio",component:s,tags:["autodocs"],argTypes:{...Te,...we,name:{control:"text",table:{category:"Content"},description:"The `name` attribute that groups radios into one set."},label:{control:"text",table:{category:"Content"},description:"Visible label text. Mutually exclusive with `ariaLabel`."},value:{control:"text",table:{category:"Content"},description:"The `value` submitted when this radio is selected."},color:{description:"Theme color for the radio fill and focus ring."},size:{control:"select",options:Be,table:{category:"Appearance"},description:"Controls the radio button size and label font size."},checked:{control:"boolean",table:{category:"State"},description:"Whether this radio is selected."},required:{control:"boolean",table:{category:"State"},description:"Marks the field as required. Requires `requiredText` to be set."},requiredText:{control:"text",table:{category:"State"},description:"Assistive text describing the requirement, surfaced when `required` is set."}},args:{name:"example-radio",label:"Option 1",value:"option1",size:"medium",color:"blue"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},p={tags:["snapshot"]},u={tags:["snapshot"],args:{label:void 0,ariaLabel:"Option A"}},m={tags:["snapshot"],args:{checked:!0}},g={tags:["snapshot"],args:{disabled:!0}},h={tags:["snapshot"],args:{disabled:!0,checked:!0}},b={tags:["snapshot"],args:{size:"small"}},y={tags:["snapshot"],args:{size:"large"}},f={tags:["snapshot"],parameters:{docs:{source:{code:`<script setup>
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
</template>`}}},render:a=>fe({name:"RadioGroupRender",setup(){const o=Ae("option1");return()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},[r(s,l(a,{name:"group",value:"option1",label:"Option 1",ariaLabel:void 0,checked:o.value==="option1","onUpdate:checked":()=>o.value="option1"}),null),r(s,l(a,{name:"group",value:"option2",label:"Option 2",ariaLabel:void 0,checked:o.value==="option2","onUpdate:checked":()=>o.value="option2"}),null),r(s,l(a,{name:"group",value:"option3",label:"Option 3",ariaLabel:void 0,checked:o.value==="option3","onUpdate:checked":()=>o.value="option3"}),null),r("p",{style:{marginTop:"16px"}},[ke("Selected: "),o.value])])}})},k={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},v={tags:["snapshot"],globals:{direction:"rtl"},args:{label:"الخيار الأول"},parameters:{snapshot:{viewports:["sm","xl"]}}},t={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:ve(s,[{variant:"default",label:"Radio",render:(a,o,e)=>r(s,l(e,{ariaLabel:void 0,color:a,label:a,name:"color-radio",value:a,checked:!0}),null)}])},n={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:ve(s,[{variant:"default",label:"Radio",render:(a,o,e)=>r(s,l(e,{ariaLabel:void 0,color:a,label:a,name:"color-radio",value:a,checked:!0}),null)}],{dark:!0})},x={...t,tags:["!dev","test-only"],play:xe()},R={...n,tags:["!dev","test-only"],play:xe()};var L,w,T;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(T=(w=p.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var D,V,z;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: undefined,
    ariaLabel: 'Option A'
  }
}`,...(z=(V=u.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var P,B,$;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    checked: true
  }
}`,...($=(B=m.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var U,E,I;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true
  }
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var G,M,W;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true,
    checked: true
  }
}`,...(W=(M=h.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var K,j,F;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  }
}`,...(F=(j=b.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var H,J,Q;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  }
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,oe;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,re,te;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'الخيار الأول'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,le,ie;t.parameters={...t.parameters,docs:{...(ne=t.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoRadio, [{
    variant: 'default',
    label: 'Radio',
    render: (color, _variant, args) => {
      return <NeoRadio {...args} ariaLabel={undefined} color={color} label={color} name="color-radio" value={color} checked={true} />;
    }
  }])
}`,...(ie=(le=t.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,pe;n.parameters={...n.parameters,docs:{...(ce=n.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
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
}`,...(pe=(de=n.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,ge;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ge=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,be,ye;R.parameters={...R.parameters,docs:{...(he=R.parameters)==null?void 0:he.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ye=(be=R.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};const Fe=["Default","WithoutLabel","Checked","Disabled","DisabledChecked","Small","Large","RadioGroup","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{t as AllColors,x as AllColorsA11y,n as AllColorsOnDark,R as AllColorsOnDarkA11y,m as Checked,p as Default,g as Disabled,h as DisabledChecked,y as Large,k as OnDark,v as RTL,f as RadioGroup,b as Small,u as WithoutLabel,Fe as __namedExportsOrder,je as default};
