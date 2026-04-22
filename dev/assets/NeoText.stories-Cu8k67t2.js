import{d as i,e as b,q as Q,w as U,G as Y,A as Z,H as ee,t as te,u as ae,b as oe,c as n,a as r,i as se,h as H}from"./iframe-B0Dukz3x.js";import{a as K}from"./colorShowcase-DrQqXaLn.js";import{c as X}from"./createA11yPlay-BQ9rYRTW.js";import{g as T,_ as ne}from"./_plugin-vue_export-helper-DerOYOQE.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-C0a-FzRY.js";const x=i({__name:"NeoText",props:{size:{},tag:{},color:{},weight:{},truncate:{type:Boolean},clamp:{},class:{}},setup(e){const t=e,W=b(()=>{const s=T({component:"NeoText",modifiers:[t.size??"base",t.weight?`weight-${t.weight}`:"",t.truncate?"truncate":"",t.clamp?"clamped":""],additional:t.class}),f=t.color?T({component:"Themed",modifiers:[t.color]}):"";return f?`${s} ${f}`:s}),J=b(()=>{const s={};return t.color&&(s["--NeoText-color-text"]="var(--neo-theme-colorAccessible)"),t.clamp&&(s["--NeoText-sizing-clamp"]=String(t.clamp)),Object.keys(s).length?s:void 0});return(s,f)=>(te(),Q(ee(t.tag??"p"),{class:Z(W.value),style:Y(J.value)},{default:U(()=>[ae(s.$slots,"default",{},void 0,!0)]),_:3},8,["class","style"]))}}),o=ne(x,[["__scopeId","data-v-0b3958a5"]]);x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:"default",displayName:"NeoText",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"tag",global:!1,description:"",tags:[],required:!1,type:'"p" | "span" | "div"',declarations:[],schema:{kind:"enum",type:'"p" | "span" | "div"',schema:['"p"','"span"','"div"']}},{name:"color",global:!1,description:"",tags:[],required:!1,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"truncate",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"clamp",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"small" | "lead" | "base" | "caption"',declarations:[],schema:{kind:"enum",type:'"small" | "lead" | "base" | "caption"',schema:['"small"','"lead"','"base"','"caption"']}},{name:"weight",global:!1,description:"",tags:[],required:!1,type:'"bold" | "medium" | "regular" | "semibold"',declarations:[],schema:{kind:"enum",type:'"bold" | "medium" | "regular" | "semibold"',schema:['"bold"','"medium"','"regular"','"semibold"']}}],events:[],slots:[{name:"default",type:"any",description:"Default slot — the text content.",declarations:[],schema:"any"}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & NeoTextSlots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & NeoTextSlots"}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"tag",type:'"p" | "span" | "div"',description:"",declarations:[],schema:{kind:"enum",type:'"p" | "span" | "div"',schema:['"p"','"span"','"div"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"truncate",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"clamp",type:"number",description:"",declarations:[],schema:"number"},{name:"size",type:'"small" | "lead" | "base" | "caption"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "lead" | "base" | "caption"',schema:['"small"','"lead"','"base"','"caption"']}},{name:"weight",type:'"bold" | "medium" | "regular" | "semibold"',description:"",declarations:[],schema:{kind:"enum",type:'"bold" | "medium" | "regular" | "semibold"',schema:['"bold"','"medium"','"regular"','"semibold"']}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Text/NeoText/NeoText.vue"});const re=["lead","base","small","caption"],le=["p","span","div"],ce=["regular","medium","semibold","bold"];function G(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!se(e)}const ye={title:"Atoms/NeoText",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:re,description:"`lead` — large intro text (textXl, relaxed). `base` — body copy (textMd, normal). `small` — secondary labels (textSm). `caption` — fine print (textXs).",table:{category:"Appearance"}},tag:{control:"select",options:le,description:"HTML element to render. Defaults to `p`.",table:{category:"Appearance"}},color:{control:"select",options:oe,description:"Optional accent color applied via the themed system (`colorAccessible` shade).",table:{category:"Appearance"}},weight:{control:"select",options:ce,description:"Font weight override. Defaults to inherited weight (regular).",table:{category:"Appearance"}},truncate:{control:"boolean",description:"Truncates overflowing text to a single line with an ellipsis.",table:{category:"Appearance"}},clamp:{control:"number",description:"Clamps text to the given number of lines with an ellipsis.",table:{category:"Appearance"}},default:{control:!1,description:"The text content.",table:{category:"Slots"}}},args:{size:"base"}},a="The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.",d={tags:["snapshot"],render:e=>i({name:"DefaultRender",setup(){return()=>n(o,e,G(a)?a:{default:()=>[a]})}}),parameters:{docs:{source:{code:`<NeoText>${a}</NeoText>`}}}},p={tags:["snapshot"],render:()=>i({name:"AllSizesRender",setup(){return()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},[n(o,{size:"lead"},{default:()=>[r("lead — "),a]}),n(o,{size:"base"},{default:()=>[r("base — "),a]}),n(o,{size:"small"},{default:()=>[r("small — "),a]}),n(o,{size:"caption"},{default:()=>[r("caption — "),a]})])}}),parameters:{docs:{source:{code:`<NeoText size="lead">Lead text</NeoText>
<NeoText size="base">Base text</NeoText>
<NeoText size="small">Small text</NeoText>
<NeoText size="caption">Caption text</NeoText>`}}}},u={tags:["snapshot"],args:{color:"blue"},render:e=>i({name:"ColoredRender",setup(){return()=>n(o,e,G(a)?a:{default:()=>[a]})}}),parameters:{docs:{source:{code:`<NeoText color="blue">${a}</NeoText>`}}}},m={tags:["snapshot"],globals:{direction:"rtl"},render:e=>i({name:"RTLRender",setup(){return()=>n(o,e,{default:()=>[r("الثعلب البني السريع يقفز فوق الكلب الكسول")]})}})},l={tags:["snapshot"],render:K(o,[{name:"Default",variant:"default",renderComponent:(e,t)=>H(t,{color:e},{default:()=>e})}])},c={tags:["snapshot"],globals:{backgrounds:"#000"},render:K(o,[{name:"Default",variant:"default",renderComponent:(e,t)=>H(t,{color:e},{default:()=>e})}],!0)},g={...l,tags:["!dev","test-only"],play:X()},y={...c,tags:["!dev","test-only"],play:X()};var h,N,C;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var A,v,k;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(v=p.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var z,S,R;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(S=u.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var _,w,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  render: (args: NeoTextProps) => {
    return defineComponent({
      name: 'RTLRender',
      setup() {
        return () => <NeoText {...args}>الثعلب البني السريع يقفز فوق الكلب الكسول</NeoText>;
      }
    });
  }
}`,...(D=(w=m.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var q,O,P;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: createAllColorsRender<typeof NeoText>(NeoText, [{
    name: 'Default',
    variant: 'default',
    renderComponent: (color, Component) => h(Component, {
      color
    }, {
      default: () => color
    })
  }])
}`,...(P=(O=l.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var $,j,B;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['snapshot'],
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
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var L,I,V;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(V=(I=g.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var M,E,F;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(F=(E=y.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const xe=["Default","AllSizes","Colored","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{l as AllColors,g as AllColorsA11y,c as AllColorsOnDark,y as AllColorsOnDarkA11y,p as AllSizes,u as Colored,d as Default,m as RTL,xe as __namedExportsOrder,ye as default};
