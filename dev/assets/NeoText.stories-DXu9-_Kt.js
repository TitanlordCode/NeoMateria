import{d as i,e as b,t as Q,w as U,L as Y,B as Z,N as ee,u as te,v as ae,b as se,c as n,a as r,i as oe,h as K}from"./iframe-BjTGyj3F.js";import{a as X}from"./colorShowcase-DpAaxDui.js";import{c as H}from"./createA11yPlay-CpxiU3YS.js";import{g as h,_ as ne}from"./_plugin-vue_export-helper-DerOYOQE.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-D-kTwwPZ.js";const x=i({__name:"NeoText",props:{size:{},tag:{},color:{},weight:{},truncate:{type:Boolean},clamp:{},class:{}},setup(e){const t=e,G=b(()=>{const o=h({component:"NeoText",modifiers:[t.size??"base",t.weight?`weight-${t.weight}`:"",t.truncate?"truncate":"",t.clamp?"clamped":""],additional:t.class}),f=t.color?h({component:"Themed",modifiers:[t.color]}):"";return f?`${o} ${f}`:o}),J=b(()=>{const o={};return t.color&&(o["--NeoText-color-text"]="var(--neo-theme-colorAccessible)"),t.clamp&&(o["--NeoText-sizing-clamp"]=String(t.clamp)),Object.keys(o).length?o:void 0});return(o,f)=>(te(),Q(ee(t.tag??"p"),{class:Z(G.value),style:Y(J.value)},{default:U(()=>[ae(o.$slots,"default",{},void 0,!0)]),_:3},8,["class","style"]))}}),s=ne(x,[["__scopeId","data-v-d3fdde56"]]);x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:"default",displayName:"NeoText",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"small" | "lead" | "base" | "caption"',declarations:[],schema:{kind:"enum",type:'"small" | "lead" | "base" | "caption"',schema:['"small"','"lead"','"base"','"caption"']}},{name:"color",global:!1,description:"",tags:[],required:!1,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"tag",global:!1,description:"",tags:[],required:!1,type:'"p" | "span" | "div"',declarations:[],schema:{kind:"enum",type:'"p" | "span" | "div"',schema:['"p"','"span"','"div"']}},{name:"truncate",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"clamp",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"weight",global:!1,description:"",tags:[],required:!1,type:'"bold" | "medium" | "regular" | "semibold"',declarations:[],schema:{kind:"enum",type:'"bold" | "medium" | "regular" | "semibold"',schema:['"bold"','"medium"','"regular"','"semibold"']}}],events:[],slots:[{name:"default",type:"any",description:"Default slot — the text content.",declarations:[],schema:"any"}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & NeoTextSlots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & NeoTextSlots"}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"small" | "lead" | "base" | "caption"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "lead" | "base" | "caption"',schema:['"small"','"lead"','"base"','"caption"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"tag",type:'"p" | "span" | "div"',description:"",declarations:[],schema:{kind:"enum",type:'"p" | "span" | "div"',schema:['"p"','"span"','"div"']}},{name:"truncate",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"clamp",type:"number",description:"",declarations:[],schema:"number"},{name:"weight",type:'"bold" | "medium" | "regular" | "semibold"',description:"",declarations:[],schema:{kind:"enum",type:'"bold" | "medium" | "regular" | "semibold"',schema:['"bold"','"medium"','"regular"','"semibold"']}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Text/NeoText/NeoText.vue"});const re=["lead","base","small","caption"],le=["p","span","div"],ce=["regular","medium","semibold","bold"];function W(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!oe(e)}const ye={title:"Atoms/NeoText",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:re,description:"`lead` — large intro text (textXl, relaxed). `base` — body copy (textMd, normal). `small` — secondary labels (textSm). `caption` — fine print (textXs).",table:{category:"Appearance"}},tag:{control:"select",options:le,description:"HTML element to render. Defaults to `p`.",table:{category:"Appearance"}},color:{control:"select",options:se,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},weight:{control:"select",options:ce,description:"Font weight override. Defaults to inherited weight (regular).",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}},default:{control:!1,description:"The text content.",table:{category:"Slots"}}},args:{size:"base"},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},a="The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.",p={tags:["snapshot"],render:e=>i({name:"DefaultRender",setup(){return()=>n(s,e,W(a)?a:{default:()=>[a]})}}),parameters:{docs:{source:{code:`<NeoText>${a}</NeoText>`}}}},d={tags:["snapshot"],render:()=>i({name:"AllSizesRender",setup(){return()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},[n(s,{size:"lead"},{default:()=>[r("lead — "),a]}),n(s,{size:"base"},{default:()=>[r("base — "),a]}),n(s,{size:"small"},{default:()=>[r("small — "),a]}),n(s,{size:"caption"},{default:()=>[r("caption — "),a]})])}}),parameters:{docs:{source:{code:`<NeoText size="lead">Lead text</NeoText>
<NeoText size="base">Base text</NeoText>
<NeoText size="small">Small text</NeoText>
<NeoText size="caption">Caption text</NeoText>`}}}},u={tags:["snapshot"],args:{color:"blue"},render:e=>i({name:"ColoredRender",setup(){return()=>n(s,e,W(a)?a:{default:()=>[a]})}}),parameters:{docs:{source:{code:`<NeoText color="blue">${a}</NeoText>`}}}},m={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},render:e=>i({name:"RTLRender",setup(){return()=>n(s,e,{default:()=>[r("الثعلب البني السريع يقفز فوق الكلب الكسول")]})}})},l={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:X(s,[{name:"Default",variant:"default",renderComponent:(e,t)=>K(t,{color:e},{default:()=>e})}])},c={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:X(s,[{name:"Default",variant:"default",renderComponent:(e,t)=>K(t,{color:e},{default:()=>e})}],!0)},g={...l,tags:["!dev","test-only"],play:H()},y={...c,tags:["!dev","test-only"],play:H()};var T,N,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(C=(N=p.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var v,A,k;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(k=(A=d.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var z,w,S;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(S=(w=u.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var R,_,D;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: (args: NeoTextProps) => {
    return defineComponent({
      name: 'RTLRender',
      setup() {
        return () => <NeoText {...args}>الثعلب البني السريع يقفز فوق الكلب الكسول</NeoText>;
      }
    });
  }
}`,...(D=(_=m.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var q,O,P;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createAllColorsRender<typeof NeoText>(NeoText, [{
    name: 'Default',
    variant: 'default',
    renderComponent: (color, Component) => h(Component, {
      color
    }, {
      default: () => color
    })
  }])
}`,...(P=(O=l.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var B,$,j;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
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
}`,...(j=($=c.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var L,I,V;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(V=(I=g.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var M,E,F;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(F=(E=y.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const xe=["Default","AllSizes","Colored","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{l as AllColors,g as AllColorsA11y,c as AllColorsOnDark,y as AllColorsOnDarkA11y,d as AllSizes,u as Colored,p as Default,m as RTL,xe as __namedExportsOrder,ye as default};
