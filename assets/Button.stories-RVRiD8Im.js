import{d as b,b as f,o as _,t as g}from"./vue.esm-bundler-BW8bvc-d.js";const B=["disabled"],m=b({__name:"Button",props:{label:{required:!0,type:String},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},setup(e){const t=e;return(o,r)=>(_(),f("button",{disabled:t.disabled?"true":void 0},g(t.label),9,B))}}),y=(e,t)=>{const o=e.__vccOpts||e;for(const[r,p]of t)o[r]=p;return o},D=y(m,[["__scopeId","data-v-ed3eeb44"]]);m.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Button.vue"]};const x={title:"Atoms/Button",component:D,argTypes:{label:{control:"text"},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"}},args:{label:"Click me",size:"medium",disabled:!1}},a={args:{label:"Default Button"}},s={args:{label:"Disabled Button",disabled:!0}};var n,l,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Default Button'
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,i,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    disabled: true
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const k=["Default","Disabled"];export{a as Default,s as Disabled,k as __namedExportsOrder,x as default};
