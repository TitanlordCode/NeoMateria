import{d as U,j as Z,k as ee,q as S,t as re,n as ae,o as se,b as ne,c as b,a as oe,m as y}from"./iframe-acYjf2IA.js";import{g as h,_ as te}from"./_plugin-vue_export-helper-BaMiToec.js";import{c as X}from"./colorShowcase-CCwc2uRL.js";import"./preload-helper-Dp1pzeXC.js";const le=["aria-label"],ce={class:"NeoSpinner-label"},Y=U({__name:"NeoSpinner",props:{class:{},size:{},color:{},label:{}},setup(e){const r=e,s=Z(()=>{const f=h({component:"NeoSpinner",modifiers:[r.size??"medium"],additional:r.class}),n=h({component:"Themed",modifiers:[r.color??"grey"]});return`${f} ${n}`});return(f,n)=>(se(),ee("div",{class:ae(s.value),role:"status","aria-label":r.label??"Loading"},[n[0]||(n[0]=S("div",{class:"NeoSpinner-circle"},null,-1)),S("span",ce,re(r.label??"Loading..."),1)],10,le))}}),a=te(Y,[["__scopeId","data-v-a81da3af"]]);Y.__docgenInfo={exportName:"default",displayName:"NeoSpinner",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/01-atoms/Spinner/NeoSpinner.vue"};const ue={title:"Atoms/NeoSpinner",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:ne}},args:{size:"medium",color:"blue"}},o={},t={args:{size:"small"}},l={args:{size:"large"}},c={args:{label:"Please wait..."}},i={args:{label:""}},d={render:e=>U({name:"InButtonRender",setup(){return()=>b("button",{style:{padding:"12px 24px",background:"var(--neo-color-blue500)",color:"var(--neo-color-white)",border:"none",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"}},[b(a,y(e,{size:"small",label:""}),null),oe("Loading...")])}}),args:{color:"grey"}},p={globals:{backgrounds:"#000"}},m={globals:{direction:"rtl"},args:{label:"جاري التحميل..."}},u={render:X(a,[{variant:"default",label:"Spinner",render:(e,r,s)=>b(a,y(s,{color:e,label:e}),null)}])},g={globals:{backgrounds:"#000"},render:X(a,[{variant:"default",label:"Spinner",render:(e,r,s)=>b(a,y(s,{color:e,label:e}),null)}],{dark:!0})};var k,N,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(C=(N=o.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var _,v,x;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var z,L,q;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(q=(L=l.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var w,R,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Please wait...'
  }
}`,...(I=(R=c.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var A,B,D;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: ''
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var P,O,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: NeoSpinnerProps) => {
    return defineComponent({
      name: 'InButtonRender',
      setup() {
        return () => <button style={{
          padding: '12px 24px',
          background: 'var(--neo-color-blue500)',
          color: 'var(--neo-color-white)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
                        <NeoSpinner {...args} size="small" label="" />
                        Loading...
                    </button>;
      }
    });
  },
  args: {
    color: 'grey'
  }
}`,...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var V,E,K;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(K=(E=p.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var M,W,$;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'جاري التحميل...'
  }
}`,...($=(W=m.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var j,F,G;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoSpinner, [{
    variant: 'default',
    label: 'Spinner',
    render: (color, _, args) => <NeoSpinner {...args} color={color} label={color} />
  }])
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,Q;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoSpinner, [{
    variant: 'default',
    label: 'Spinner',
    render: (color, _, args) => <NeoSpinner {...args} color={color} label={color} />
  }], {
    dark: true
  })
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const ge=["Default","Small","Large","CustomLabel","WithoutLabel","InButton","OnDark","RTL","AllColors","AllColorsOnDark"];export{u as AllColors,g as AllColorsOnDark,c as CustomLabel,o as Default,d as InButton,l as Large,p as OnDark,m as RTL,t as Small,i as WithoutLabel,ge as __namedExportsOrder,ue as default};
