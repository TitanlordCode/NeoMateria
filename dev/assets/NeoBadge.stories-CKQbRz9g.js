import{d as W,f as F,g as G,o as H,j as J,n as Q,a as U,t as X}from"./vue.esm-bundler-BHV6zvB-.js";import{g as u,_ as Y}from"./_plugin-vue_export-helper-DQpfx0YY.js";const L=W({__name:"NeoBadge",props:{class:{},text:{},size:{},color:{},variant:{},rounded:{type:Boolean}},setup(e){const a=e,M=F(()=>{const m=u({component:"NeoBadge",modifiers:[a.size??"medium",a.variant??"solid",a.rounded?"rounded":""],additional:a.class}),g=u({component:"Themed",modifiers:[a.color??"grey500"]});return`${m} ${g}`});return(m,g)=>(H(),G("span",{class:Q(M.value),role:"status"},[J(m.$slots,"default",{},()=>[U(X(a.text),1)],!0)],2))}}),p=Y(L,[["__scopeId","data-v-8749f528"]]);L.__docgenInfo={exportName:"default",displayName:"NeoBadge",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"text",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"solid" | "outlined" | "dot"',declarations:[],schema:{kind:"enum",type:'"solid" | "outlined" | "dot"',schema:['"solid"','"outlined"','"dot"']}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"text",type:"string",description:"",declarations:[],schema:"string"},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",type:'"solid" | "outlined" | "dot"',description:"",declarations:[],schema:{kind:"enum",type:'"solid" | "outlined" | "dot"',schema:['"solid"','"outlined"','"dot"']}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Badge/NeoBadge.vue"};const ae={title:"Atoms/NeoBadge",component:p,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},variant:{control:"select",options:["solid","outlined","dot"]},color:{control:"select",options:["grey500","blue500","red500","green500","yellow500","purple500"]}},args:{text:"Badge",size:"medium",variant:"solid",color:"blue500"}},r={args:{}},n={args:{variant:"outlined"}},s={args:{variant:"dot"}},o={args:{size:"small"}},t={args:{size:"large"}},i={args:{rounded:!0,text:"Rounded Badge"}},d={render:e=>({components:{NeoBadge:p},setup(){return{args:e}},template:`
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <NeoBadge v-bind="args" color="green500" text="Active" />
                <NeoBadge v-bind="args" color="yellow500" text="Pending" />
                <NeoBadge v-bind="args" color="red500" text="Error" />
                <NeoBadge v-bind="args" color="grey500" text="Inactive" />
            </div>
        `})},l={render:e=>({components:{NeoBadge:p},setup(){return{args:e}},template:`
            <div style="position: relative; display: inline-block;">
                <button style="padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Notifications
                </button>
                <NeoBadge
                    v-bind="args"
                    variant="solid"
                    size="small"
                    color="red500"
                    text="5"
                    style="position: absolute; top: -8px; right: -8px;"
                />
            </div>
        `})},c={render:e=>({components:{NeoBadge:p},setup(){return{args:e}},template:`
            <div style="display: flex; align-items: center; gap: 8px;">
                <NeoBadge v-bind="args" variant="dot" color="green500" />
                <span>Online</span>
            </div>
        `})};var y,f,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,x,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var N,B,k;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'dot'
  }
}`,...(k=(B=s.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var _,S,z;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var w,C,q;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(q=(C=t.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var R,D,I;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    rounded: true,
    text: 'Rounded Badge'
  }
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var O,P,E;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NeoBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <NeoBadge v-bind="args" color="green500" text="Active" />
                <NeoBadge v-bind="args" color="yellow500" text="Pending" />
                <NeoBadge v-bind="args" color="red500" text="Error" />
                <NeoBadge v-bind="args" color="grey500" text="Inactive" />
            </div>
        \`
  })
}`,...(E=(P=d.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var A,T,V;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NeoBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="position: relative; display: inline-block;">
                <button style="padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Notifications
                </button>
                <NeoBadge
                    v-bind="args"
                    variant="solid"
                    size="small"
                    color="red500"
                    text="5"
                    style="position: absolute; top: -8px; right: -8px;"
                />
            </div>
        \`
  })
}`,...(V=(T=l.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var $,j,K;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NeoBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display: flex; align-items: center; gap: 8px;">
                <NeoBadge v-bind="args" variant="dot" color="green500" />
                <span>Online</span>
            </div>
        \`
  })
}`,...(K=(j=c.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};const re=["Default","Outlined","Dot","Small","Large","Rounded","StatusBadges","WithNotification","DotIndicator"];export{r as Default,s as Dot,c as DotIndicator,t as Large,n as Outlined,i as Rounded,o as Small,d as StatusBadges,l as WithNotification,re as __namedExportsOrder,ae as default};
