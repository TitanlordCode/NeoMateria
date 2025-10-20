import{d as L,f as J,g,l as Q,p as f,u as k,a as M,t as W,n as X,o as y,k as Y,c as o,m as h}from"./vue.esm-bundler-DAnUScag.js";import{c as Z}from"./colors-D7cU6MZF.js";import{g as ee}from"./id-BmHDe6hu.js";import{g as v,_ as ae}from"./_plugin-vue_export-helper-DQpfx0YY.js";const se=["id","name","value","checked","disabled","required"],oe=["for"],re={key:0,class:"NeoRadio-required","aria-label":"required"},A=L({__name:"NeoRadio",props:{class:{},name:{},label:{},value:{},checked:{type:Boolean},disabled:{type:Boolean},required:{type:Boolean},size:{},color:{}},emits:["update:checked"],setup(s,{emit:a}){const e=s,F=a,b=ee("radio"),j=r=>{r.target.checked&&F("update:checked",e.value)},H=J(()=>{const r=v({component:"NeoRadio",modifiers:[e.size??"medium"],additional:e.class}),u=v({component:"Themed",modifiers:[e.color??"grey"]});return`${r} ${u}`});return(r,u)=>(y(),g("div",{class:X(H.value)},[Q("input",{id:`${k(b)}-${e.name}-${e.value}`,class:"NeoRadio-input",type:"radio",name:e.name,value:e.value,checked:e.checked,disabled:e.disabled,required:e.required,onChange:j},null,40,se),e.label?(y(),g("label",{key:0,class:"NeoRadio-label",for:`${k(b)}-${e.name}-${e.value}`},[M(W(e.label)+" ",1),e.required?(y(),g("span",re,"*")):f("",!0)],8,oe)):f("",!0)],2))}}),m=ae(A,[["__scopeId","data-v-2daeaa0e"]]);A.__docgenInfo={exportName:"default",displayName:"NeoRadio",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"value",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"checked",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"required",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:checked",description:"",tags:[],type:"[value: string]",signature:'(event: "update:checked", value: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"value",type:"string",description:"",declarations:[],schema:"string"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"checked",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Radio/NeoRadio.vue"};const ce={title:"Atoms/NeoRadio",component:m,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:Z}},args:{name:"example-radio",label:"Option 1",value:"option1",size:"medium",color:"blue"}},n={},t={args:{checked:!0}},l={args:{disabled:!0}},i={args:{disabled:!0,checked:!0}},c={args:{size:"small"}},d={args:{size:"large"}},p={render:s=>L({name:"RadioGroupRender",setup(){const a=Y("option1");return()=>o("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},[o(m,h(s,{name:"group",value:"option1",label:"Option 1",checked:a.value==="option1","onUpdate:checked":()=>a.value="option1"}),null),o(m,h(s,{name:"group",value:"option2",label:"Option 2",checked:a.value==="option2","onUpdate:checked":()=>a.value="option2"}),null),o(m,h(s,{name:"group",value:"option3",label:"Option 3",checked:a.value==="option3","onUpdate:checked":()=>a.value="option3"}),null),o("p",{style:{marginTop:"16px"}},[M("Selected: "),a.value])])}})};var q,N,R;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(R=(N=n.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var _,C,x;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(x=(C=t.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var V,S,z;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var O,D,$;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...($=(D=i.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var B,U,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(P=(U=c.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var I,T,G;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(G=(T=d.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var w,E,K;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
                        <NeoRadio {...args} name="group" value="option1" label="Option 1" checked={selectedValue.value === 'option1'} onUpdate:checked={() => selectedValue.value = 'option1'} />
                        <NeoRadio {...args} name="group" value="option2" label="Option 2" checked={selectedValue.value === 'option2'} onUpdate:checked={() => selectedValue.value = 'option2'} />
                        <NeoRadio {...args} name="group" value="option3" label="Option 3" checked={selectedValue.value === 'option3'} onUpdate:checked={() => selectedValue.value = 'option3'} />
                        <p style={{
            marginTop: '16px'
          }}>Selected: {selectedValue.value}</p>
                    </div>;
      }
    });
  }
}`,...(K=(E=p.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};const de=["Default","Checked","Disabled","DisabledChecked","Small","Large","RadioGroup"];export{t as Checked,n as Default,l as Disabled,i as DisabledChecked,d as Large,p as RadioGroup,c as Small,de as __namedExportsOrder,ce as default};
