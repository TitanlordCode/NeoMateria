import{d as u,e as g,q as B,w as I,E as V,A as M,G as E,t as L,u as F,b as K,c as s,a as r,i as X,h as R}from"./iframe-Da9xFhCi.js";import{a as O}from"./colorShowcase-kwizdZpn.js";import{g as y,_ as G}from"./_plugin-vue_export-helper-DerOYOQE.js";import"./preload-helper-Dp1pzeXC.js";const m=u({__name:"NeoText",props:{size:{},tag:{},color:{},weight:{},truncate:{type:Boolean},clamp:{},class:{}},setup(t){const e=t,j=g(()=>{const o=y({component:"NeoText",modifiers:[e.size??"base",e.weight?`weight-${e.weight}`:"",e.truncate?"truncate":"",e.clamp?"clamped":""],additional:e.class}),x=e.color?y({component:"Themed",modifiers:[e.color]}):"";return x?`${o} ${x}`:o}),P=g(()=>{const o={};return e.color&&(o["--NeoText-color-text"]="var(--neo-theme-colorAccessible)"),e.clamp&&(o["--NeoText-sizing-clamp"]=String(e.clamp)),Object.keys(o).length?o:void 0});return(o,x)=>(L(),B(E(e.tag??"p"),{class:M(j.value),style:V(P.value)},{default:I(()=>[F(o.$slots,"default",{},void 0,!0)]),_:3},8,["class","style"]))}}),n=G(m,[["__scopeId","data-v-0b3958a5"]]);m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"NeoText",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"tag",global:!1,description:"",tags:[],required:!1,type:'"p" | "span" | "div"',declarations:[],schema:{kind:"enum",type:'"p" | "span" | "div"',schema:['"p"','"span"','"div"']}},{name:"color",global:!1,description:"",tags:[],required:!1,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"truncate",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"clamp",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"small" | "lead" | "base" | "caption"',declarations:[],schema:{kind:"enum",type:'"small" | "lead" | "base" | "caption"',schema:['"small"','"lead"','"base"','"caption"']}},{name:"weight",global:!1,description:"",tags:[],required:!1,type:'"bold" | "medium" | "regular" | "semibold"',declarations:[],schema:{kind:"enum",type:'"bold" | "medium" | "regular" | "semibold"',schema:['"bold"','"medium"','"regular"','"semibold"']}}],events:[],slots:[{name:"default",type:"any",description:"Default slot — the text content.",declarations:[],schema:"any"}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & NeoTextSlots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & NeoTextSlots"}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"tag",type:'"p" | "span" | "div"',description:"",declarations:[],schema:{kind:"enum",type:'"p" | "span" | "div"',schema:['"p"','"span"','"div"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"truncate",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"clamp",type:"number",description:"",declarations:[],schema:"number"},{name:"size",type:'"small" | "lead" | "base" | "caption"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "lead" | "base" | "caption"',schema:['"small"','"lead"','"base"','"caption"']}},{name:"weight",type:'"bold" | "medium" | "regular" | "semibold"',description:"",declarations:[],schema:{kind:"enum",type:'"bold" | "medium" | "regular" | "semibold"',schema:['"bold"','"medium"','"regular"','"semibold"']}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Text/NeoText/NeoText.vue"});const H=["lead","base","small","caption"],W=["p","span","div"],J=["regular","medium","semibold","bold"];function $(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!X(t)}const ee={title:"Atoms/NeoText",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:H,description:"`lead` — large intro text (textXl, relaxed). `base` — body copy (textMd, normal). `small` — secondary labels (textSm). `caption` — fine print (textXs).",table:{category:"Appearance"}},tag:{control:"select",options:W,description:"HTML element to render. Defaults to `p`.",table:{category:"Appearance"}},color:{control:"select",options:K,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},weight:{control:"select",options:J,description:"Font weight override. Defaults to inherited weight (regular).",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}}},args:{size:"base"}},a="The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.",l={render:t=>u({name:"DefaultRender",setup(){return()=>s(n,t,$(a)?a:{default:()=>[a]})}}),parameters:{docs:{source:{code:`<NeoText>${a}</NeoText>`}}}},i={render:()=>u({name:"AllSizesRender",setup(){return()=>s("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},[s(n,{size:"lead"},{default:()=>[r("lead — "),a]}),s(n,{size:"base"},{default:()=>[r("base — "),a]}),s(n,{size:"small"},{default:()=>[r("small — "),a]}),s(n,{size:"caption"},{default:()=>[r("caption — "),a]})])}}),parameters:{docs:{source:{code:`<NeoText size="lead">Lead text</NeoText>
<NeoText size="base">Base text</NeoText>
<NeoText size="small">Small text</NeoText>
<NeoText size="caption">Caption text</NeoText>`}}}},c={args:{color:"blue"},render:t=>u({name:"ColoredRender",setup(){return()=>s(n,t,$(a)?a:{default:()=>[a]})}}),parameters:{docs:{source:{code:`<NeoText color="blue">${a}</NeoText>`}}}},d={render:O(n,[{name:"Default",variant:"default",renderComponent:(t,e)=>R(e,{color:t},{default:()=>t})}])},p={globals:{backgrounds:"#000"},render:O(n,[{name:"Default",variant:"default",renderComponent:(t,e)=>R(e,{color:t},{default:()=>t})}],!0)};var f,b,T;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: NeoTextProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        return () => <NeoText {...args}>{sampleText}</NeoText>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoText>\${sampleText}</NeoText>\`
      }
    }
  }
}`,...(T=(b=l.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var N,h,C;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    return defineComponent({
      name: 'AllSizesRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
                        <NeoText size="lead">lead — {sampleText}</NeoText>
                        <NeoText size="base">base — {sampleText}</NeoText>
                        <NeoText size="small">small — {sampleText}</NeoText>
                        <NeoText size="caption">caption — {sampleText}</NeoText>
                    </div>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoText size="lead">Lead text</NeoText>
<NeoText size="base">Base text</NeoText>
<NeoText size="small">Small text</NeoText>
<NeoText size="caption">Caption text</NeoText>\`
      }
    }
  }
}`,...(C=(h=i.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var v,z,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    color: 'blue'
  },
  render: (args: NeoTextProps) => {
    return defineComponent({
      name: 'ColoredRender',
      setup() {
        return () => <NeoText {...args}>{sampleText}</NeoText>;
      }
    });
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoText color="blue">\${sampleText}</NeoText>\`
      }
    }
  }
}`,...(k=(z=c.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var S,A,_;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: createAllColorsRender<typeof NeoText>(NeoText, [{
    name: 'Default',
    variant: 'default',
    renderComponent: (color, Component) => h(Component, {
      color
    }, {
      default: () => color
    })
  }])
}`,...(_=(A=d.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var w,D,q;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createAllColorsRender<typeof NeoText>(NeoText, [{
    name: 'Default',
    variant: 'default',
    renderComponent: (color, Component) => h(Component, {
      color
    }, {
      default: () => color
    })
  }], true)
}`,...(q=(D=p.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const te=["Default","AllSizes","Colored","AllColors","AllColorsOnDark"];export{d as AllColors,p as AllColorsOnDark,i as AllSizes,c as Colored,l as Default,te as __namedExportsOrder,ee as default};
