import{d as te,j as k,k as me,r as ue,n as pe,o as ge,a as g,t as fe,b as be,c as y}from"./iframe-acYjf2IA.js";import{g as _,_ as ye}from"./_plugin-vue_export-helper-BaMiToec.js";import{c as ne}from"./colorShowcase-CCwc2uRL.js";import"./preload-helper-Dp1pzeXC.js";const he=["href","target","rel","aria-disabled"],se=te({__name:"NeoLink",props:{class:{},href:{},text:{},size:{},color:{},variant:{},external:{type:Boolean},disabled:{type:Boolean},target:{},rel:{}},emits:["click"],setup(b,{emit:oe}){const e=b,le=oe,ie=a=>{if(e.disabled){a.preventDefault();return}le("click",a)},ce=k(()=>{if(e.rel)return e.rel;if(e.external||e.target==="_blank")return"noopener noreferrer"}),de=k(()=>{const a=_({component:"NeoLink",modifiers:[e.size??"medium",e.variant??"default",e.disabled?"disabled":""],additional:e.class}),h=_({component:"Themed",modifiers:[e.color??"grey"]});return`${a} ${h}`});return(a,h)=>(ge(),me("a",{class:pe(de.value),href:e.disabled?void 0:e.href,target:e.target,rel:ce.value,"aria-disabled":e.disabled?"true":void 0,onClick:ie},[ue(a.$slots,"default",{},()=>[g(fe(e.text),1)],!0)],10,he))}}),f=ye(se,[["__scopeId","data-v-8349f284"]]);se.__docgenInfo={exportName:"default",displayName:"NeoLink",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"href",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"text",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"default" | "underline" | "button"',declarations:[],schema:{kind:"enum",type:'"default" | "underline" | "button"',schema:['"default"','"underline"','"button"']}},{name:"external",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"target",global:!1,description:"",tags:[],required:!1,type:'"_blank" | "_self" | "_parent" | "_top"',declarations:[],schema:{kind:"enum",type:'"_blank" | "_self" | "_parent" | "_top"',schema:['"_blank"','"_self"','"_parent"','"_top"']}},{name:"rel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent]",signature:'(event: "click", event: MouseEvent): void',declarations:[],schema:[{kind:"object",type:"MouseEvent"}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"text",type:"string",description:"",declarations:[],schema:"string"},{name:"variant",type:'"default" | "underline" | "button"',description:"",declarations:[],schema:{kind:"enum",type:'"default" | "underline" | "button"',schema:['"default"','"underline"','"button"']}},{name:"href",type:"string",description:"",declarations:[],schema:"string"},{name:"external",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"target",type:'"_blank" | "_self" | "_parent" | "_top"',description:"",declarations:[],schema:{kind:"enum",type:'"_blank" | "_self" | "_parent" | "_top"',schema:['"_blank"','"_self"','"_parent"','"_top"']}},{name:"rel",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Link/NeoLink.vue"};const Ce={title:"Atoms/NeoLink",component:f,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},variant:{control:"select",options:["default","underline","button"]},target:{control:"select",options:["_blank","_self","_parent","_top"]},color:{control:"select",options:be}},args:{href:"https://example.com",text:"Click me",size:"medium",variant:"default",color:"blue"}},r={},t={args:{variant:"underline"}},n={args:{variant:"button"}},s={args:{external:!0,target:"_blank",text:"Open in new tab"}},o={args:{disabled:!0}},l={args:{size:"small"}},i={args:{size:"large"}},c={render:b=>te({name:"WithSlotRender",setup(){return()=>y(f,b,{default:()=>[y("strong",null,[g("Custom content")]),g(" with "),y("em",null,[g("formatting")])]})}})},d={globals:{backgrounds:"#000"}},m={globals:{direction:"rtl"},args:{text:"انقر هنا"}},u={render:ne(f,["default","underline","button"],{defaultProps:{href:"#"}})},p={globals:{backgrounds:"#000"},render:ne(f,["default","underline","button"],{defaultProps:{href:"#"},dark:!0})};var v,S,C;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var x,N,L;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'underline'
  }
}`,...(L=(N=t.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var q,z,w;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'button'
  }
}`,...(w=(z=n.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var D,O,P;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    external: true,
    target: '_blank',
    text: 'Open in new tab'
  }
}`,...(P=(O=s.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,E,B;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(B=(E=o.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var A,M,T;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(T=(M=l.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var V,W,j;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(j=(W=i.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var I,$,K;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: NeoLinkProps) => {
    return defineComponent({
      name: 'WithSlotRender',
      setup() {
        return () => <NeoLink {...args}>
                        <strong>Custom content</strong> with <em>formatting</em>
                    </NeoLink>;
      }
    });
  }
}`,...(K=($=c.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var U,F,G;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,Q;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    text: 'انقر هنا'
  }
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoLink, ['default', 'underline', 'button'], {
    defaultProps: {
      href: '#'
    }
  })
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoLink, ['default', 'underline', 'button'], {
    defaultProps: {
      href: '#'
    },
    dark: true
  })
}`,...(re=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const xe=["Default","Underline","Button","External","Disabled","Small","Large","WithSlot","OnDark","RTL","AllColors","AllColorsOnDark"];export{u as AllColors,p as AllColorsOnDark,n as Button,r as Default,o as Disabled,s as External,i as Large,d as OnDark,m as RTL,l as Small,t as Underline,c as WithSlot,xe as __namedExportsOrder,Ce as default};
