import{d as we,p as y,j as b,w as z,k as d,o as i,q as h,l as f,u as m,t as P,s as Te,F,v as K,x as I,y as qe,m as Me,z as Ve,A as U,n as $e,a as De,b as Oe}from"./iframe-acYjf2IA.js";import{g as Ae}from"./id-BD99uDNx.js";import{g as L,_ as Be}from"./_plugin-vue_export-helper-BaMiToec.js";import{N as Ie}from"./NeoCheckbox-CJv5RTsC.js";import{N as Re}from"./NeoBadge-DfJCvy4v.js";import{c as ye}from"./colorShowcase-CCwc2uRL.js";import"./preload-helper-Dp1pzeXC.js";const Ee={class:"NeoSelect-labelWrapper"},je=["for"],ze={class:"NeoSelect-inputWrapper"},Fe={key:0,class:"NeoSelect-selectedTags"},Ke=["name","id","placeholder","value","aria-expanded","aria-controls","aria-activedescendant","aria-describedby"],Ue=["id","aria-labelledby","aria-multiselectable"],Le=["id","aria-selected","tabindex","onClick","onMouseenter"],We={key:0,class:"NeoSelect-messageWrapper"},Ge=["id"],Je={key:1,class:"NeoSelect-errorMessage"},be=we({__name:"NeoSelect",props:{class:{},name:{},label:{},selectProps:{},options:{},selectValue:{},helpText:{},errorMessage:{},size:{},color:{},disabled:{type:Boolean},rounded:{type:Boolean},variant:{},mode:{}},emits:["update:value"],setup(he,{emit:fe}){const a=he,k=fe,c=Ae("select"),o=y(!1),s=y(-1),S=y(null),j=y(null),g=y(""),t=y(Array.isArray(a.selectValue)?a.selectValue:a.selectValue?[a.selectValue]:[]),u=b(()=>a.mode??"single"),ke=b(()=>s.value>=0?`option-${c}-${s.value}`:void 0),A=b(()=>{if(u.value==="single"){const e=a.options.find(l=>l.value===t.value[0]);return(e==null?void 0:e.label)||""}else return t.value.map(e=>{var l;return(l=a.options.find(r=>r.value===e))==null?void 0:l.label}).filter(Boolean).join(", ")});z(()=>a.selectValue,e=>{e!==void 0&&(t.value=Array.isArray(e)?e:e?[e]:[])});const C=()=>{o.value=!0,g.value="",Ve(()=>{const e=a.options.findIndex(l=>l.value===t.value[0]);s.value=e>=0?e:0})},x=()=>{o.value=!1,s.value=-1,g.value=""},Se=()=>o.value?x():C(),Ce=e=>{var r;const l=e.relatedTarget;!((r=j.value)!=null&&r.contains(l))&&l!==S.value&&x()},xe=e=>{var l;if(e.key==="Escape")x(),(l=S.value)==null||l.blur();else if(e.key==="Enter"||e.key===" ")e.preventDefault(),o.value?s.value>=0&&p.value[s.value]&&B(p.value[s.value]):C();else if(e.key==="ArrowDown")e.preventDefault(),o.value?s.value=(s.value+1)%p.value.length:C();else if(e.key==="ArrowUp")e.preventDefault(),o.value?s.value=(s.value-1+p.value.length)%p.value.length:C();else if(e.key==="Backspace"&&u.value==="multi"&&g.value===""&&(e.preventDefault(),t.value.length>0)){const r=t.value.slice(0,-1);t.value=r,k("update:value",r)}},p=b(()=>a.options.filter(e=>e.label.toLowerCase().includes(g.value.toLowerCase()))),_e=e=>{const l=e.target;g.value=l.value,o.value||(o.value=!0),s.value=0},_=e=>t.value.includes(e),B=e=>{var l;if(u.value==="single")t.value=[e.value],k("update:value",e.value),x();else{if(_(e.value)){const r=t.value.filter(n=>n!==e.value);t.value=r,k("update:value",r)}else{const r=[...t.value,e.value];t.value=r,k("update:value",r)}g.value=""}(l=S.value)==null||l.focus()};z(()=>p.value.length,()=>{s.value>=p.value.length&&(s.value=Math.max(0,p.value.length-1))});const Ne=b(()=>{const e=L({component:"NeoSelect",modifiers:[a.size??"medium",a.variant??"primary",a.rounded?"rounded":""],additional:a.class}),l=L({component:"Themed",modifiers:[a.color??"grey"]});return`${e} ${l}`});return(e,l)=>{var r;return i(),d("div",Me(e.$attrs,{class:Ne.value}),[h("div",Ee,[h("label",{class:"NeoSelect-label",for:`${m(c)}-${a.name}`},P(a.label),9,je)]),h("div",ze,[u.value==="multi"&&t.value.length>0?(i(),d("div",Fe,[(i(!0),d(F,null,K(t.value,n=>{var v;return i(),U(Re,{key:n,text:(v=a.options.find(N=>N.value===n))==null?void 0:v.label,color:a.color,size:"small",variant:"solid",dismissible:"",rounded:"",onDismiss:N=>B(a.options.find(Pe=>Pe.value===n))},null,8,["text","color","onDismiss"])}),128))])):f("",!0),h("input",{ref_key:"inputRef",ref:S,class:"NeoSelect-input",name:a.name,id:a.name,type:"text",role:"combobox",placeholder:u.value==="single"&&A.value?A.value:u.value==="multi"&&t.value.length>0?"":(r=a.selectProps)==null?void 0:r.placeholder,value:o.value?g.value:u.value==="single"?A.value:"","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":o.value,"aria-controls":`${m(c)}-popup_listbox`,"aria-activedescendant":ke.value,"aria-describedby":a.helpText?`${m(c)}-helptext`:void 0,onInput:_e,onKeydown:xe,onBlur:Ce,onClick:I(Se,["prevent","stop"])},null,40,Ke),Te(h("ul",{ref_key:"listRef",ref:j,class:"NeoSelect-options",role:"listbox",id:`${m(c)}-popup_listbox`,"aria-labelledby":`${m(c)}-${a.name}`,"aria-multiselectable":u.value==="multi"},[(i(!0),d(F,null,K(p.value,(n,v)=>(i(),d("li",{key:n.value,role:"option",id:`option-${m(c)}-${v}`,"aria-selected":_(n.value),tabindex:s.value===v?0:-1,class:$e(["NeoSelect-option",{selected:_(n.value),focused:s.value===v}]),onClick:N=>B(n),onMousedown:l[1]||(l[1]=I(()=>{},["prevent"])),onMouseenter:N=>s.value=v},[u.value==="multi"?(i(),U(Ie,{key:0,name:`${m(c)}-option-${n.value}`,value:n.value,checked:_(n.value),color:a.color,size:"small",class:"NeoSelect-checkbox",onClick:l[0]||(l[0]=I(()=>{},["stop"]))},null,8,["name","value","checked","color"])):f("",!0),De(" "+P(n.label),1)],42,Le))),128))],8,Ue),[[qe,o.value]])]),a.helpText||a.errorMessage?(i(),d("div",We,[a.helpText&&!a.errorMessage?(i(),d("p",{key:0,class:"NeoSelect-helpText",id:`${m(c)}-helptext`},P(a.helpText),9,Ge)):f("",!0),a.errorMessage?(i(),d("p",Je,P(a.errorMessage),1)):f("",!0)])):f("",!0)],16)}}}),R=Be(be,[["__scopeId","data-v-b1742e23"]]);be.__docgenInfo={exportName:"default",displayName:"NeoSelect",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"label",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"selectProps",global:!1,description:"",tags:[],required:!1,type:"{ placeholder?: string; }",declarations:[],schema:{kind:"object",type:"{ placeholder?: string; }"}},{name:"options",global:!1,description:"",tags:[],required:!0,type:"{ value: string; label: string; }[]",declarations:[],schema:{kind:"array",type:"{ value: string; label: string; }[]"}},{name:"selectValue",global:!1,description:"",tags:[],required:!1,type:"string | string[]",declarations:[],schema:{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}},{name:"helpText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"Color",declarations:[],schema:{kind:"array",type:"Color"}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | "tertiary"',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"mode",global:!1,description:"",tags:[],required:!1,type:'"single" | "multi"',declarations:[],schema:{kind:"enum",type:'"single" | "multi"',schema:['"single"','"multi"']}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:value",description:"",tags:[],type:"[value: string | string[]]",signature:'(event: "update:value", value: string | string[]): void',declarations:[],schema:[{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}]}],slots:[],exposed:[{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"Color",description:"",declarations:[],schema:{kind:"array",type:"Color"}},{name:"variant",type:'"primary" | "secondary" | "tertiary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"helpText",type:"string",description:"",declarations:[],schema:"string"},{name:"errorMessage",type:"string",description:"",declarations:[],schema:"string"},{name:"selectProps",type:"{ placeholder?: string; }",description:"",declarations:[],schema:{kind:"object",type:"{ placeholder?: string; }"}},{name:"options",type:"{ value: string; label: string; }[]",description:"",declarations:[],schema:{kind:"array",type:"{ value: string; label: string; }[]"}},{name:"selectValue",type:"string | string[]",description:"",declarations:[],schema:{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}},{name:"mode",type:'"single" | "multi"',description:"",declarations:[],schema:{kind:"enum",type:'"single" | "multi"',schema:['"single"','"multi"']}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/02-molecules/Select/NeoSelect.vue"};const E=[{value:"apple",label:"Apple"},{value:"orange",label:"Orange"},{value:"banana",label:"Banana"}],la={title:"Molecules/NeoSelect",component:R,tags:["autodocs"],argTypes:{color:{control:"select",options:Oe}},args:{name:"fruit",label:"Choose a fruit",selectProps:{placeholder:"Select one..."},variant:"primary",color:"grey",options:E},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}}}},w={args:{label:"Default"}},T={args:{label:"Choose fruits",mode:"multi",selectProps:{placeholder:"Select multiple..."},selectValue:["apple","banana"]}},q={args:{label:"Choose your favorite programming languages",mode:"multi",selectProps:{placeholder:"Type to search..."},options:[{value:"typescript",label:"TypeScript"},{value:"javascript",label:"JavaScript"},{value:"python",label:"Python"},{value:"rust",label:"Rust"},{value:"go",label:"Go"},{value:"java",label:"Java"},{value:"csharp",label:"C#"},{value:"cpp",label:"C++"}]}},M={args:{label:"Choose your country",mode:"single",selectProps:{placeholder:"Type to search countries..."},options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"es",label:"Spain"},{value:"it",label:"Italy"},{value:"nl",label:"Netherlands"},{value:"be",label:"Belgium"}]}},V={globals:{backgrounds:"#000"}},$={globals:{direction:"rtl"},args:{label:"اختر فاكهة",selectProps:{placeholder:"اختر واحدة..."},options:[{value:"apple",label:"تفاح"},{value:"orange",label:"برتقال"},{value:"banana",label:"موز"}]}},D={render:ye(R,["primary","secondary","tertiary"],{defaultProps:{name:"color-select",options:E}})},O={globals:{backgrounds:"#000"},render:ye(R,["primary","secondary","tertiary"],{defaultProps:{name:"color-select",options:E},dark:!0})};var W,G,J;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Default'
  }
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,H,X;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Choose fruits',
    mode: 'multi',
    selectProps: {
      placeholder: 'Select multiple...'
    },
    selectValue: ['apple', 'banana']
  }
}`,...(X=(H=T.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var Y,Z,ee;q.parameters={...q.parameters,docs:{...(Y=q.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Choose your favorite programming languages',
    mode: 'multi',
    selectProps: {
      placeholder: 'Type to search...'
    },
    options: [{
      value: 'typescript',
      label: 'TypeScript'
    }, {
      value: 'javascript',
      label: 'JavaScript'
    }, {
      value: 'python',
      label: 'Python'
    }, {
      value: 'rust',
      label: 'Rust'
    }, {
      value: 'go',
      label: 'Go'
    }, {
      value: 'java',
      label: 'Java'
    }, {
      value: 'csharp',
      label: 'C#'
    }, {
      value: 'cpp',
      label: 'C++'
    }]
  }
}`,...(ee=(Z=q.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,le,se;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Choose your country',
    mode: 'single',
    selectProps: {
      placeholder: 'Type to search countries...'
    },
    options: [{
      value: 'us',
      label: 'United States'
    }, {
      value: 'uk',
      label: 'United Kingdom'
    }, {
      value: 'de',
      label: 'Germany'
    }, {
      value: 'fr',
      label: 'France'
    }, {
      value: 'es',
      label: 'Spain'
    }, {
      value: 'it',
      label: 'Italy'
    }, {
      value: 'nl',
      label: 'Netherlands'
    }, {
      value: 'be',
      label: 'Belgium'
    }]
  }
}`,...(se=(le=M.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var te,re,ne;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  }
}`,...(ne=(re=V.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ie,ce;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  args: {
    label: 'اختر فاكهة',
    selectProps: {
      placeholder: 'اختر واحدة...'
    },
    options: [{
      value: 'apple',
      label: 'تفاح'
    }, {
      value: 'orange',
      label: 'برتقال'
    }, {
      value: 'banana',
      label: 'موز'
    }]
  }
}`,...(ce=(ie=$.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,pe,de;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: createSimpleColorShowcase(NeoSelect, ['primary', 'secondary', 'tertiary'], {
    defaultProps: {
      name: 'color-select',
      options: exampleOptions
    }
  })
}`,...(de=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ge,ve;O.parameters={...O.parameters,docs:{...(me=O.parameters)==null?void 0:me.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  render: createSimpleColorShowcase(NeoSelect, ['primary', 'secondary', 'tertiary'], {
    defaultProps: {
      name: 'color-select',
      options: exampleOptions
    },
    dark: true
  })
}`,...(ve=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};const sa=["Default","MultiSelect","MultiSelectEmpty","SingleSelectWithSearch","OnDark","RTL","AllColors","AllColorsOnDark"];export{D as AllColors,O as AllColorsOnDark,w as Default,T as MultiSelect,q as MultiSelectEmpty,V as OnDark,$ as RTL,M as SingleSelectWithSearch,sa as __namedExportsOrder,la as default};
