import{d as P,f as D,g as E,l as m,t as O,n as T,o as K,c as p,a as M,m as W}from"./vue.esm-bundler-DAnUScag.js";import{c as $}from"./colors-D7cU6MZF.js";import{g as d,_ as A}from"./_plugin-vue_export-helper-DQpfx0YY.js";const F=["aria-label"],j={class:"NeoSpinner-label"},R=P({__name:"NeoSpinner",props:{class:{},size:{},color:{},label:{}},setup(i){const e=i,V=D(()=>{const c=d({component:"NeoSpinner",modifiers:[e.size??"medium"],additional:e.class}),a=d({component:"Themed",modifiers:[e.color??"grey"]});return`${c} ${a}`});return(c,a)=>(K(),E("div",{class:T(V.value),role:"status","aria-label":e.label??"Loading"},[a[0]||(a[0]=m("div",{class:"NeoSpinner-circle"},null,-1)),m("span",j,O(e.label??"Loading..."),1)],10,F))}}),w=A(R,[["__scopeId","data-v-a81da3af"]]);R.__docgenInfo={exportName:"default",displayName:"NeoSpinner",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"label",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Spinner/NeoSpinner.vue"};const Q={title:"Atoms/NeoSpinner",component:w,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:$}},args:{size:"medium",color:"blue"}},r={},s={args:{size:"small"}},n={args:{size:"large"}},o={args:{label:"Please wait..."}},t={args:{label:""}},l={render:i=>P({name:"InButtonRender",setup(){return()=>p("button",{style:{padding:"12px 24px",background:"var(--neo-color-blue500)",color:"var(--neo-color-white)",border:"none",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"}},[p(w,W(i,{size:"small",label:""}),null),M("Loading...")])}}),args:{color:"grey"}};var u,g,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,f,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var N,S,_;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(_=(S=n.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var k,x,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Please wait...'
  }
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var v,z,L;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: ''
  }
}`,...(L=(z=t.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var q,I,B;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: NeoSpinnerProps) => {
    return defineComponent({
      name: 'InButtonRender',
      setup() {
        return () => <button style={{
          padding: '12px 24px',
          background: 'var(--neo-color-blue500)',
          color: 'var(--neo-color-white)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
                        <NeoSpinner {...args} size="small" label="" />
                        Loading...
                    </button>;
      }
    });
  },
  args: {
    color: 'grey'
  }
}`,...(B=(I=l.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const U=["Default","Small","Large","CustomLabel","WithoutLabel","InButton"];export{o as CustomLabel,r as Default,l as InButton,n as Large,s as Small,t as WithoutLabel,U as __namedExportsOrder,Q as default};
