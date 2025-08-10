import{d as z,u as S,b as M,e as $,o as F,t as I,m as B,f as P,g as c}from"./vue.esm-bundler-CRzqlh7N.js";import{f as R,w as O,u as V,a as j,e as A}from"./index-B7dDGrsI.js";const _=a=>{var e,t;const s=[a.component];return(e=a.modifiers)==null||e.forEach(n=>{n&&s.push(`${a.component}--${n}`)}),(t=a.states)==null||t.forEach(n=>{n&&s.push(`.is-${n}`)}),a.additional&&s.push(a.additional),s.join(" ")};_.__docgenInfo={exportName:"getClassNames",displayName:"getClassNames",type:2,props:[{name:"component",global:!1,description:"",tags:[],required:!0,type:"`${Uppercase<string>}${string}`",declarations:[],schema:"`${Uppercase<string>}${string}`"},{name:"modifiers",global:!1,description:"",tags:[],required:!1,type:"string[]",declarations:[],schema:{kind:"array",type:"string[]"}},{name:"states",global:!1,description:"",tags:[],required:!1,type:"string[]",declarations:[],schema:{kind:"array",type:"string[]"}},{name:"additional",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[],slots:[],exposed:[],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/utils/classNames.ts"};const G=["disabled"],x=z({__name:"Button",props:{label:{},size:{},color:{},disabled:{type:Boolean},rounded:{type:Boolean}},emits:["click"],setup(a,{emit:s}){const e=a,t=s,n=S(),D=d=>{e.disabled||t("click",d)},E=M(()=>_({component:"Button",modifiers:[e.color??"grey",e.size??"small",e.rounded?"rounded":""]}));return(d,U)=>(F(),$("button",B(P(n),{class:E.value,disabled:e.disabled??void 0,onClick:D}),I(e.label),17,G))}}),H=(a,s)=>{const e=a.__vccOpts||a;for(const[t,n]of s)e[t]=n;return e},N=H(x,[["__scopeId","data-v-1e6292f2"]]);x.__docgenInfo={exportName:"default",displayName:"Button",type:1,props:[{name:"label",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent]",signature:'(event: "click", event: MouseEvent): void',declarations:[],schema:[{kind:"object",type:"MouseEvent"}]}],slots:[],exposed:[{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:"string",description:"",declarations:[],schema:"string"},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Button/Button.vue"};const q=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","grey","blueGrey","white","black"],K=["small","medium","large"],L={title:"Atoms/Button",component:N,tags:["autodocs"],argTypes:{label:{control:"text"},size:{control:"select",options:K},disabled:{control:"boolean"},color:{control:"select",options:q}},args:{label:"Click me",size:"small",color:"grey",disabled:!1,rounded:!1,onClick:R()}},o={args:{label:"Default Button"}},r={args:{label:"Disabled Button",disabled:!0}},l={render:a=>c("div",{style:{display:"flex",flexFlow:"wrap",maxInlineSize:"100%"}},[q.map((s,e)=>c("div",{style:{padding:"8px"}},[c(N,B({key:e},a,{color:s}),null)]))])},i={play:async({args:a,canvasElement:s,step:e})=>{const t=O(s);await e("Check click functionality",async()=>{await V.click(t.getByRole("button"))}),await j(()=>A(a.onClick).toHaveBeenCalled())}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Default Button'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,y,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    disabled: true
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,h,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,w,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Check click functionality', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    // 👇 Now we can assert that the onSubmit arg was called
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const Q=["Default","Disabled","Colored","interaction"];export{l as Colored,o as Default,r as Disabled,Q as __namedExportsOrder,L as default,i as interaction};
