import{d as $,s as F,e as I,f as P,t as O,n as N,u as V,o as j,x as d}from"./vue.esm-bundler-yk8bZ3-I.js";import{f as A,w as G,u as H,a as K,e as U}from"./index-B7dDGrsI.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";const E=a=>{var e,t;const s=[a.component];return(e=a.modifiers)==null||e.forEach(n=>{n&&s.push(`${a.component}--${n}`)}),(t=a.states)==null||t.forEach(n=>{n&&s.push(`.is-${n}`)}),a.additional&&s.push(a.additional),s.join(" ")};E.__docgenInfo={exportName:"getClassNames",displayName:"getClassNames",type:2,props:[{name:"component",global:!1,description:"",tags:[],required:!0,type:"`${Uppercase<string>}${string}`",declarations:[],schema:"`${Uppercase<string>}${string}`"},{name:"modifiers",global:!1,description:"",tags:[],required:!1,type:"string[]",declarations:[],schema:{kind:"array",type:"string[]"}},{name:"states",global:!1,description:"",tags:[],required:!1,type:"string[]",declarations:[],schema:{kind:"array",type:"string[]"}},{name:"additional",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[],slots:[],exposed:[],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/utils/classNames.ts"};const J=["disabled"],R=$({__name:"Button",props:{class:{},label:{},size:{},color:{},disabled:{type:Boolean},rounded:{type:Boolean}},emits:["click"],setup(a,{emit:s}){const e=a,t=s,n=F(),S=p=>{e.disabled||t("click",p)},M=I(()=>E({component:"Button",modifiers:[e.color??"grey",e.size??"small",e.rounded?"rounded":""],additional:e.class}));return(p,Q)=>(j(),P("button",N(V(n),{class:M.value,disabled:e.disabled??void 0,onClick:S}),O(e.label),17,J))}}),z=T(R,[["__scopeId","data-v-e5d557a3"]]);R.__docgenInfo={exportName:"default",displayName:"Button",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"label",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent]",signature:'(event: "click", event: MouseEvent): void',declarations:[],schema:[{kind:"object",type:"MouseEvent"}]}],slots:[],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:"string",description:"",declarations:[],schema:"string"},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Button/Button.vue"};const D=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","grey","blueGrey","white","black"],L=["small","medium","large"],Z={title:"Atoms/Button",component:z,tags:["autodocs"],argTypes:{label:{control:"text"},size:{control:"select",options:L},disabled:{control:"boolean"},color:{control:"select",options:D}},args:{label:"Click me",size:"small",color:"grey",disabled:!1,rounded:!1,onClick:A()}},o={args:{label:"Default Button"}},r={args:{label:"Disabled Button",disabled:!0}},i={args:{label:"Rounded Button",rounded:!0}},l={render:a=>d("div",{style:{display:"flex",flexFlow:"wrap",maxInlineSize:"100%"}},[D.map((s,e)=>d("div",{style:{padding:"8px"}},[d(z,N({key:e},a,{color:s}),null)]))])},c={play:async({args:a,canvasElement:s,step:e})=>{const t=G(s);await e("Check click functionality",async()=>{await H.click(t.getByRole("button"))}),await K(()=>U(a.onClick).toHaveBeenCalled())}};var u,m,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Default Button'
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,f,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    disabled: true
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,k,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Rounded Button',
    rounded: true
  }
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var B,C,w;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      display: 'flex',
      flexFlow: 'wrap',
      maxInlineSize: '100%'
    }}>
                {colors.map((color, index) => {
        return <div style={{
          padding: '8px'
        }}>
                            <Button key={index} {...args} color={color} />
                        </div>;
      })}
            </div>;
  }
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var x,_,q;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Check click functionality', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const ee=["Default","Disabled","Rounded","Colored","interaction"];export{l as Colored,o as Default,r as Disabled,i as Rounded,ee as __namedExportsOrder,Z as default,c as interaction};
