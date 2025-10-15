import{d as A,f as p,g as F,j as G,n as H,o as J,a as Q,t as X}from"./vue.esm-bundler-BHV6zvB-.js";import{g as u,_ as Y}from"./_plugin-vue_export-helper-DQpfx0YY.js";const Z=["href","target","rel","aria-disabled"],I=A({__name:"NeoLink",props:{class:{},href:{},text:{},size:{},color:{},variant:{},external:{type:Boolean},disabled:{type:Boolean},target:{},rel:{}},emits:["click"],setup(d,{emit:V}){const e=d,$=V,K=a=>{if(e.disabled){a.preventDefault();return}$("click",a)},U=p(()=>{if(e.rel)return e.rel;if(e.external||e.target==="_blank")return"noopener noreferrer"}),W=p(()=>{const a=u({component:"NeoLink",modifiers:[e.size??"medium",e.variant??"default",e.disabled?"disabled":""],additional:e.class}),m=u({component:"Themed",modifiers:[e.color??"grey500"]});return`${a} ${m}`});return(a,m)=>(J(),F("a",{class:H(W.value),href:e.disabled?void 0:e.href,target:e.target,rel:U.value,"aria-disabled":e.disabled?"true":void 0,onClick:K},[G(a.$slots,"default",{},()=>[Q(X(e.text),1)],!0)],10,Z))}}),T=Y(I,[["__scopeId","data-v-f1f3412d"]]);I.__docgenInfo={exportName:"default",displayName:"NeoLink",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"href",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"text",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"default" | "underline" | "button"',declarations:[],schema:{kind:"enum",type:'"default" | "underline" | "button"',schema:['"default"','"underline"','"button"']}},{name:"external",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"target",global:!1,description:"",tags:[],required:!1,type:'"_blank" | "_self" | "_parent" | "_top"',declarations:[],schema:{kind:"enum",type:'"_blank" | "_self" | "_parent" | "_top"',schema:['"_blank"','"_self"','"_parent"','"_top"']}},{name:"rel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent]",signature:'(event: "click", event: MouseEvent): void',declarations:[],schema:[{kind:"object",type:"MouseEvent"}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"text",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",type:'"default" | "underline" | "button"',description:"",declarations:[],schema:{kind:"enum",type:'"default" | "underline" | "button"',schema:['"default"','"underline"','"button"']}},{name:"href",type:"string",description:"",declarations:[],schema:"string"},{name:"external",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"target",type:'"_blank" | "_self" | "_parent" | "_top"',description:"",declarations:[],schema:{kind:"enum",type:'"_blank" | "_self" | "_parent" | "_top"',schema:['"_blank"','"_self"','"_parent"','"_top"']}},{name:"rel",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Link/NeoLink.vue"};const te={title:"Atoms/NeoLink",component:T,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},variant:{control:"select",options:["default","underline","button"]},target:{control:"select",options:["_blank","_self","_parent","_top"]},color:{control:"select",options:["grey500","blue500","red500","green500","yellow500","purple500"]}},args:{href:"https://example.com",text:"Click me",size:"medium",variant:"default",color:"blue500"}},t={args:{}},r={args:{variant:"underline"}},n={args:{variant:"button"}},s={args:{external:!0,target:"_blank",text:"Open in new tab"}},o={args:{disabled:!0}},i={args:{size:"small"}},l={args:{size:"large"}},c={render:d=>({components:{NeoLink:T},setup(){return{args:d}},template:`
            <NeoLink v-bind="args">
                <strong>Custom content</strong> with <em>formatting</em>
            </NeoLink>
        `})};var g,f,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,h,k;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'underline'
  }
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var _,v,x;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'button'
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var N,C,q;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    external: true,
    target: '_blank',
    text: 'Open in new tab'
  }
}`,...(q=(C=s.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var L,S,z;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var w,E,B;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(B=(E=i.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var D,M,O;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,P,j;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NeoLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <NeoLink v-bind="args">
                <strong>Custom content</strong> with <em>formatting</em>
            </NeoLink>
        \`
  })
}`,...(j=(P=c.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const re=["Default","Underline","Button","External","Disabled","Small","Large","WithSlot"];export{n as Button,t as Default,o as Disabled,s as External,l as Large,i as Small,r as Underline,c as WithSlot,re as __namedExportsOrder,te as default};
