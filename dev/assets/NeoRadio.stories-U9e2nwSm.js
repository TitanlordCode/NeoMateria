import{d as fe,e as qe,x as c,y as _e,D as S,a as ke,z as O,A as q,B as Se,u as d,r as Oe,c as r,m as l}from"./iframe-De1OY-BN.js";import{g as Ae}from"./id-BOikQ4-O.js";import{g as A,_ as Le}from"./_plugin-vue_export-helper-DerOYOQE.js";import{d as we,a as De}from"./argTypes-VnJZhiy7.js";import{c as ve}from"./colorShowcase-Br4JFV8e.js";import{c as Re}from"./createA11yPlay-Bh85D4Gs.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-Bq_JosQi.js";const ze=["id","name","value","checked","disabled","required","aria-label"],Te=["for"],Ve={key:0,class:"NeoRadio-required","aria-hidden":"true"},Pe={key:1,class:"NeoRadio-requiredText sr-only"},N=fe({__name:"NeoRadio",props:{name:{},value:{},checked:{type:Boolean},disabled:{type:Boolean},size:{},color:{},label:{},ariaLabel:{},required:{type:Boolean},requiredText:{}},emits:["update:checked"],setup(a,{emit:o}){const e=a,xe=o,_=Ae("radio"),Ne=i=>{i.target.checked&&xe("update:checked",e.value)},Ce=qe(()=>{const i=A({component:"NeoRadio",modifiers:[e.size??"medium"]}),C=A({component:"Themed",modifiers:[e.color??"blue"]});return`${i} ${C}`});return(i,C)=>(d(),c("div",{class:Se(Ce.value)},[_e("input",{id:`${S(_)}-${e.name}-${e.value}`,class:"NeoRadio-input",type:"radio",name:e.name,value:e.value,checked:e.checked,disabled:e.disabled,required:e.required,"aria-label":e.ariaLabel,onChange:Ne},null,40,ze),e.label?(d(),c("label",{key:0,class:"NeoRadio-label",for:`${S(_)}-${e.name}-${e.value}`},[ke(O(e.label)+" ",1),e.required?(d(),c("span",Ve,"*")):q("",!0),e.required?(d(),c("span",Pe," ("+O(e.requiredText)+") ",1)):q("",!0)],8,Te)):q("",!0)],2))}}),s=Le(N,[["__scopeId","data-v-53392d77"]]);N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{exportName:"default",displayName:"NeoRadio",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"value",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"checked",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"any",declarations:[],schema:"any"},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"true",declarations:[],schema:"true"},{name:"requiredText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:checked",description:"Emitted when this radio option is selected. Receives the option's `value` prop.",tags:[],type:"[value: string]",signature:'(event: "update:checked", value: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"value",type:"string",description:"",declarations:[],schema:"string"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"true",description:"",declarations:[],schema:"true"},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"requiredText",type:"string",description:"",declarations:[],schema:"string"},{name:"checked",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Radio/NeoRadio.vue"});const Be=["small","medium","large"],je={title:"Atoms/NeoRadio",component:s,tags:["autodocs"],argTypes:{...De,...we,name:{control:"text",table:{category:"Content"}},label:{control:"text",table:{category:"Content"}},value:{control:"text",table:{category:"Content"}},color:{description:"Theme color for the radio fill and focus ring."},size:{control:"select",options:Be,table:{category:"Appearance"},description:"Controls the radio button size and label font size."},checked:{control:"boolean",table:{category:"State"}},required:{control:"boolean",table:{category:"State"}}},args:{name:"example-radio",label:"Option 1",value:"option1",size:"medium",color:"blue"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},p={tags:["snapshot"]},u={tags:["snapshot"],args:{label:void 0,ariaLabel:"Option A"}},m={tags:["snapshot"],args:{checked:!0}},g={tags:["snapshot"],args:{disabled:!0}},h={tags:["snapshot"],args:{disabled:!0,checked:!0}},b={tags:["snapshot"],args:{size:"small"}},y={tags:["snapshot"],args:{size:"large"}},f={tags:["snapshot"],parameters:{docs:{source:{code:`<script setup>
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
</template>`}}},render:a=>fe({name:"RadioGroupRender",setup(){const o=Oe("option1");return()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},[r(s,l(a,{name:"group",value:"option1",label:"Option 1",ariaLabel:void 0,checked:o.value==="option1","onUpdate:checked":()=>o.value="option1"}),null),r(s,l(a,{name:"group",value:"option2",label:"Option 2",ariaLabel:void 0,checked:o.value==="option2","onUpdate:checked":()=>o.value="option2"}),null),r(s,l(a,{name:"group",value:"option3",label:"Option 3",ariaLabel:void 0,checked:o.value==="option3","onUpdate:checked":()=>o.value="option3"}),null),r("p",{style:{marginTop:"16px"}},[ke("Selected: "),o.value])])}})},k={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},v={tags:["snapshot"],globals:{direction:"rtl"},args:{label:"الخيار الأول"},parameters:{snapshot:{viewports:["sm","xl"]}}},n={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:ve(s,[{variant:"default",label:"Radio",render:(a,o,e)=>r(s,l(e,{ariaLabel:void 0,color:a,label:a,name:"color-radio",value:a,checked:!0}),null)}])},t={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:ve(s,[{variant:"default",label:"Radio",render:(a,o,e)=>r(s,l(e,{ariaLabel:void 0,color:a,label:a,name:"color-radio",value:a,checked:!0}),null)}],{dark:!0})},R={...n,tags:["!dev","test-only"],play:Re()},x={...t,tags:["!dev","test-only"],play:Re()};var L,w,D;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var z,T,V;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: undefined,
    ariaLabel: 'Option A'
  }
}`,...(V=(T=u.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var P,B,$;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    checked: true
  }
}`,...($=(B=m.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var U,E,I;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true
  }
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var G,K,M;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    disabled: true,
    checked: true
  }
}`,...(M=(K=h.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var W,j,F;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,re,ne;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var te,le,ie;n.parameters={...n.parameters,docs:{...(te=n.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(le=n.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,pe;t.parameters={...t.parameters,docs:{...(ce=t.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(de=t.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,ge;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ge=(me=R.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,be,ye;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(ye=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};const Fe=["Default","WithoutLabel","Checked","Disabled","DisabledChecked","Small","Large","RadioGroup","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{n as AllColors,R as AllColorsA11y,t as AllColorsOnDark,x as AllColorsOnDarkA11y,m as Checked,p as Default,g as Disabled,h as DisabledChecked,y as Large,k as OnDark,v as RTL,f as RadioGroup,b as Small,u as WithoutLabel,Fe as __namedExportsOrder,je as default};
