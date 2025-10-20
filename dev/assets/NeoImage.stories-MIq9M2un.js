import{d as X,k as f,f as v,g,l as u,p as b,q as Y,n as Z,o as h}from"./vue.esm-bundler-DAnUScag.js";import{g as ee,_ as ae}from"./_plugin-vue_export-helper-DQpfx0YY.js";const te=["src","alt","loading"],se={key:0,class:"NeoImage-placeholder","aria-hidden":"true"},re={key:1,class:"NeoImage-errorState",role:"alert"},U=X({__name:"NeoImage",props:{class:{},src:{},alt:{},width:{},height:{},loading:{},objectFit:{},rounded:{type:Boolean},circle:{type:Boolean}},emits:["load","error"],setup(W,{emit:$}){const e=W,y=$,p=f(!1),a=f(!1),G=t=>{p.value=!0,y("load",t)},H=t=>{a.value=!0,y("error",t)},J=v(()=>ee({component:"NeoImage",modifiers:[e.objectFit??"",e.rounded?"rounded":"",e.circle?"circle":"",p.value?"loaded":"",a.value?"error":""],additional:e.class})),Q=v(()=>({width:typeof e.width=="number"?`${e.width}px`:e.width,height:typeof e.height=="number"?`${e.height}px`:e.height}));return(t,s)=>(h(),g("div",{class:Z(J.value)},[u("img",{src:e.src,alt:e.alt,loading:e.loading??"lazy",style:Y(Q.value),class:"NeoImage-img",onLoad:G,onError:H},null,44,te),!p.value&&!a.value?(h(),g("div",se,s[0]||(s[0]=[u("span",{class:"NeoImage-loader"},null,-1)]))):b("",!0),a.value?(h(),g("div",re,s[1]||(s[1]=[u("span",null,"Failed to load image",-1)]))):b("",!0)],2))}}),ne=ae(U,[["__scopeId","data-v-f7677c1a"]]);U.__docgenInfo={exportName:"default",displayName:"NeoImage",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"src",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"alt",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"width",global:!1,description:"",tags:[],required:!1,type:"string | number",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}},{name:"height",global:!1,description:"",tags:[],required:!1,type:"string | number",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}},{name:"loading",global:!1,description:"",tags:[],required:!1,type:'"lazy" | "eager"',declarations:[],schema:{kind:"enum",type:'"lazy" | "eager"',schema:['"lazy"','"eager"']}},{name:"objectFit",global:!1,description:"",tags:[],required:!1,type:'"fill" | "none" | "contain" | "cover" | "scale-down"',declarations:[],schema:{kind:"enum",type:'"fill" | "none" | "contain" | "cover" | "scale-down"',schema:['"fill"','"none"','"contain"','"cover"','"scale-down"']}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"circle",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"error",description:"",tags:[],type:"[event: Event]",signature:'(event: "error", event: Event): void',declarations:[],schema:[{kind:"object",type:"Event"}]},{name:"load",description:"",tags:[],type:"[event: Event]",signature:'(event: "load", event: Event): void',declarations:[],schema:[{kind:"object",type:"Event"}]}],slots:[],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"src",type:"string",description:"",declarations:[],schema:"string"},{name:"alt",type:"string",description:"",declarations:[],schema:"string"},{name:"width",type:"string | number",description:"",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}},{name:"height",type:"string | number",description:"",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}},{name:"loading",type:'"lazy" | "eager"',description:"",declarations:[],schema:{kind:"enum",type:'"lazy" | "eager"',schema:['"lazy"','"eager"']}},{name:"objectFit",type:'"fill" | "none" | "contain" | "cover" | "scale-down"',description:"",declarations:[],schema:{kind:"enum",type:'"fill" | "none" | "contain" | "cover" | "scale-down"',schema:['"fill"','"none"','"contain"','"cover"','"scale-down"']}},{name:"circle",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Image/NeoImage.vue"};const ce={title:"Atoms/NeoImage",component:ne,tags:["autodocs"],argTypes:{objectFit:{control:"select",options:["contain","cover","fill","none","scale-down"]},loading:{control:"select",options:["eager","lazy"]}},args:{src:"https://picsum.photos/400/300",alt:"Example image",width:400,height:300,loading:"lazy"}},r={args:{}},n={args:{objectFit:"contain",width:400,height:400}},o={args:{objectFit:"cover",width:400,height:400}},i={args:{rounded:!0}},c={args:{circle:!0,src:"https://picsum.photos/300/300",width:300,height:300,objectFit:"cover"}},l={args:{circle:!0,src:"https://picsum.photos/200/200",width:100,height:100,objectFit:"cover",alt:"User avatar"}},d={args:{src:"https://invalid-url-that-will-fail.jpg",alt:"This image will fail to load",width:400,height:300}},m={args:{src:"https://picsum.photos/800/400",alt:"Responsive image",width:"100%",height:300,objectFit:"cover"}};var w,k,j;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {}
}`,...(j=(k=r.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var N,_,F;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    objectFit: 'contain',
    width: 400,
    height: 400
  }
}`,...(F=(_=n.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var q,E,I;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    objectFit: 'cover',
    width: 400,
    height: 400
  }
}`,...(I=(E=o.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var C,S,z;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...(z=(S=i.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var R,x,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    circle: true,
    src: 'https://picsum.photos/300/300',
    width: 300,
    height: 300,
    objectFit: 'cover'
  }
}`,...(B=(x=c.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var P,V,A;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    circle: true,
    src: 'https://picsum.photos/200/200',
    width: 100,
    height: 100,
    objectFit: 'cover',
    alt: 'User avatar'
  }
}`,...(A=(V=l.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var L,O,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    src: 'https://invalid-url-that-will-fail.jpg',
    alt: 'This image will fail to load',
    width: 400,
    height: 300
  }
}`,...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var D,K,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/800/400',
    alt: 'Responsive image',
    width: '100%',
    height: 300,
    objectFit: 'cover'
  }
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const le=["Default","Contain","Cover","Rounded","Circle","Avatar","ErrorState","ResponsiveWidth"];export{l as Avatar,c as Circle,n as Contain,o as Cover,r as Default,d as ErrorState,m as ResponsiveWidth,i as Rounded,le as __namedExportsOrder,ce as default};
