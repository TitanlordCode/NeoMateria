import{d as R,f as D,g as E,l as m,t as O,n as V,o as K}from"./vue.esm-bundler-BHV6zvB-.js";import{g as p,_ as M}from"./_plugin-vue_export-helper-DQpfx0YY.js";const T=["aria-label"],W={class:"NeoSpinner-label"},B=R({__name:"NeoSpinner",props:{class:{},size:{},color:{},label:{}},setup(i){const e=i,I=D(()=>{const c=p({component:"NeoSpinner",modifiers:[e.size??"medium"],additional:e.class}),a=p({component:"Themed",modifiers:[e.color??"grey500"]});return`${c} ${a}`});return(c,a)=>(K(),E("div",{class:V(I.value),role:"status","aria-label":e.label??"Loading"},[a[0]||(a[0]=m("div",{class:"NeoSpinner-circle"},null,-1)),m("span",W,O(e.label??"Loading..."),1)],10,T))}}),P=M(B,[["__scopeId","data-v-a6fc094b"]]);B.__docgenInfo={exportName:"default",displayName:"NeoSpinner",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"label",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Spinner/NeoSpinner.vue"};const F={title:"Atoms/NeoSpinner",component:P,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["grey500","blue500","red500","green500","yellow500","purple500"]}},args:{size:"medium",color:"blue500"}},s={args:{}},r={args:{size:"small"}},n={args:{size:"large"}},o={args:{label:"Please wait..."}},t={args:{label:""}},l={render:i=>({components:{NeoSpinner:P},setup(){return{args:i}},template:`
            <button style="padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                <NeoSpinner v-bind="args" size="small" label="" />
                Loading...
            </button>
        `}),args:{color:"grey100"}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,b,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,S,N;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(N=(S=n.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var _,k,x;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Please wait...'
  }
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var C,z,v;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: ''
  }
}`,...(v=(z=t.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var L,q,w;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NeoSpinner
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <button style="padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                <NeoSpinner v-bind="args" size="small" label="" />
                Loading...
            </button>
        \`
  }),
  args: {
    color: 'grey100'
  }
}`,...(w=(q=l.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const j=["Default","Small","Large","CustomLabel","WithoutLabel","InButton"];export{o as CustomLabel,s as Default,l as InButton,n as Large,r as Small,t as WithoutLabel,j as __namedExportsOrder,F as default};
