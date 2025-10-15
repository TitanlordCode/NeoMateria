import{d as F,f as U,g as m,l as j,m as y,u as h,a as H,t as J,n as Q,o as u,k as W}from"./vue.esm-bundler-BHV6zvB-.js";import{g as X}from"./id-D5ASjNlA.js";import{g as b,_ as Y}from"./_plugin-vue_export-helper-DQpfx0YY.js";const Z=["id","name","value","checked","disabled","required"],ee=["for"],ae={key:0,class:"NeoRadio-required","aria-label":"required"},G=F({__name:"NeoRadio",props:{class:{},name:{},label:{},value:{},checked:{type:Boolean},disabled:{type:Boolean},required:{type:Boolean},size:{},color:{}},emits:["update:checked"],setup(d,{emit:c}){const e=d,L=c,g=X("radio"),M=a=>{a.target.checked&&L("update:checked",e.value)},A=U(()=>{const a=b({component:"NeoRadio",modifiers:[e.size??"medium"],additional:e.class}),p=b({component:"Themed",modifiers:[e.color??"grey500"]});return`${a} ${p}`});return(a,p)=>(u(),m("div",{class:Q(A.value)},[j("input",{id:`${h(g)}-${e.name}-${e.value}`,class:"NeoRadio-input",type:"radio",name:e.name,value:e.value,checked:e.checked,disabled:e.disabled,required:e.required,onChange:M},null,40,Z),e.label?(u(),m("label",{key:0,class:"NeoRadio-label",for:`${h(g)}-${e.name}-${e.value}`},[H(J(e.label)+" ",1),e.required?(u(),m("span",ae,"*")):y("",!0)],8,ee)):y("",!0)],2))}}),K=Y(G,[["__scopeId","data-v-e03e4eda"]]);G.__docgenInfo={exportName:"default",displayName:"NeoRadio",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"value",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"checked",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"required",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:checked",description:"",tags:[],type:"[value: string]",signature:'(event: "update:checked", value: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"value",type:"string",description:"",declarations:[],schema:"string"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"checked",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Radio/NeoRadio.vue"};const te={title:"Atoms/NeoRadio",component:K,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["grey500","blue500","red500","green500","yellow500","purple500"]}},args:{name:"example-radio",label:"Option 1",value:"option1",size:"medium",color:"blue500"}},s={args:{}},o={args:{checked:!0}},r={args:{disabled:!0}},t={args:{disabled:!0,checked:!0}},n={args:{size:"small"}},l={args:{size:"large"}},i={render:d=>({components:{NeoRadio:K},setup(){const c=W("option1");return{args:d,selectedValue:c}},template:`
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <NeoRadio
                    v-bind="args"
                    name="group"
                    value="option1"
                    label="Option 1"
                    :checked="selectedValue === 'option1'"
                    @update:checked="selectedValue = $event"
                />
                <NeoRadio
                    v-bind="args"
                    name="group"
                    value="option2"
                    label="Option 2"
                    :checked="selectedValue === 'option2'"
                    @update:checked="selectedValue = $event"
                />
                <NeoRadio
                    v-bind="args"
                    name="group"
                    value="option3"
                    label="Option 3"
                    :checked="selectedValue === 'option3'"
                    @update:checked="selectedValue = $event"
                />
                <p style="margin-top: 16px;">Selected: {{ selectedValue }}</p>
            </div>
        `})};var f,k,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {}
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var N,q,R;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(R=(q=o.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var _,V,C;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(C=(V=r.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var x,$,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...(S=($=t.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var z,O,B;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(B=(O=n.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var D,I,w;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(w=(I=l.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var P,E,T;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NeoRadio
    },
    setup() {
      const selectedValue = ref('option1');
      return {
        args,
        selectedValue
      };
    },
    template: \`
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <NeoRadio
                    v-bind="args"
                    name="group"
                    value="option1"
                    label="Option 1"
                    :checked="selectedValue === 'option1'"
                    @update:checked="selectedValue = $event"
                />
                <NeoRadio
                    v-bind="args"
                    name="group"
                    value="option2"
                    label="Option 2"
                    :checked="selectedValue === 'option2'"
                    @update:checked="selectedValue = $event"
                />
                <NeoRadio
                    v-bind="args"
                    name="group"
                    value="option3"
                    label="Option 3"
                    :checked="selectedValue === 'option3'"
                    @update:checked="selectedValue = $event"
                />
                <p style="margin-top: 16px;">Selected: {{ selectedValue }}</p>
            </div>
        \`
  })
}`,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const ne=["Default","Checked","Disabled","DisabledChecked","Small","Large","RadioGroup"];export{o as Checked,s as Default,r as Disabled,t as DisabledChecked,l as Large,i as RadioGroup,n as Small,ne as __namedExportsOrder,te as default};
