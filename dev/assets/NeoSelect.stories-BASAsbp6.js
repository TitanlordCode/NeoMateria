import{d as Qe,r as b,f,I as H,x as c,y as h,D as p,a as Ye,z as k,A as g,F as Q,P as Y,B as X,W as U,J as Xe,K as Ze,m as ea,M as aa,u as o,t as Z}from"./iframe-aH-Nj2u6.js";import{g as sa}from"./id-DNUcHf4C.js";import{g as ee,_ as ta}from"./_plugin-vue_export-helper-DerOYOQE.js";import{N as la}from"./NeoCheckbox-BnZg2zwH.js";import{N as ra}from"./NeoBadge-DwCDzFG5.js";import{c as na}from"./iconStrings-DsK5_d8D.js";import{c as Ee}from"./colorShowcase-BAzr1TiL.js";import{c as ze}from"./createA11yPlay-BxYtly6p.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-C6h9_ZGB.js";const oa={class:"NeoSelect-labelWrapper"},ia=["for"],ca={key:0,class:"NeoSelect-required","aria-hidden":"true"},ua={key:1,class:"NeoSelect-requiredText sr-only"},pa={class:"NeoSelect-inputWrapper"},da={key:0,class:"NeoSelect-selectedTags"},ma=["innerHTML"],ga=["name","id","placeholder","value","aria-label","aria-expanded","aria-controls","aria-activedescendant","aria-describedby"],ya=["id","aria-labelledby","aria-multiselectable"],va=["id","aria-selected","tabindex","onClick","onMouseenter"],ba={"aria-hidden":"true"},ha={key:0,class:"NeoSelect-messageWrapper"},fa=["id"],ka={key:1,class:"NeoSelect-errorMessage"},E=Qe({__name:"NeoSelect",props:{name:{},selectProps:{},options:{},helpText:{},errorMessage:{},size:{},color:{},disabled:{type:Boolean},rounded:{type:Boolean},variant:{},mode:{},selectValue:{},label:{},ariaLabel:{},required:{type:Boolean},requiredText:{}},emits:["update:value"],setup(z,{emit:j}){const a=z,_=j,u=sa("select"),i=b(!1),t=b(-1),C=b(null),G=b(null),y=b(""),l=b(Array.isArray(a.selectValue)?a.selectValue:a.selectValue?[a.selectValue]:[]),d=f(()=>a.mode??"single"),We=f(()=>t.value>=0?`option-${u}-${t.value}`:void 0),W=f(()=>{if(d.value==="single"){const e=a.options.find(s=>s.value===l.value[0]);return(e==null?void 0:e.label)||""}else return l.value.map(e=>{var s;return(s=a.options.find(r=>r.value===e))==null?void 0:s.label}).filter(Boolean).join(", ")});H(()=>a.selectValue,e=>{e!==void 0&&(l.value=Array.isArray(e)?e:e?[e]:[])});const q=()=>{i.value=!0,y.value="",aa(()=>{const e=a.options.findIndex(s=>s.value===l.value[0]);t.value=e>=0?e:0})},N=()=>{i.value=!1,t.value=-1,y.value=""},Ke=()=>i.value?N():q(),Ue=e=>{var r;const s=e.relatedTarget;!((r=G.value)!=null&&r.contains(s))&&s!==C.value&&N()},Fe=e=>{var s;if(e.key==="Escape")N(),(s=C.value)==null||s.blur();else if(e.key==="Enter"||e.key===" ")e.preventDefault(),i.value?t.value>=0&&m.value[t.value]&&K(m.value[t.value]):q();else if(e.key==="ArrowDown")e.preventDefault(),i.value?t.value=(t.value+1)%m.value.length:q();else if(e.key==="ArrowUp")e.preventDefault(),i.value?t.value=(t.value-1+m.value.length)%m.value.length:q();else if(e.key==="Backspace"&&d.value==="multi"&&y.value===""&&(e.preventDefault(),l.value.length>0)){const r=l.value.slice(0,-1);l.value=r,_("update:value",r)}},m=f(()=>a.options.filter(e=>e.label.toLowerCase().includes(y.value.toLowerCase()))),Je=e=>{const s=e.target;y.value=s.value,i.value||(i.value=!0),t.value=0},T=e=>l.value.includes(e),K=e=>{var s;if(d.value==="single")l.value=[e.value],_("update:value",e.value),N();else{if(T(e.value)){const r=l.value.filter(n=>n!==e.value);l.value=r,_("update:value",r)}else{const r=[...l.value,e.value];l.value=r,_("update:value",r)}y.value=""}(s=C.value)==null||s.focus()};H(()=>m.value.length,()=>{t.value>=m.value.length&&(t.value=Math.max(0,m.value.length-1))});const Ge=f(()=>{const e=ee({component:"NeoSelect",modifiers:[a.size??"medium",a.variant??"primary",a.rounded?"rounded":""]}),s=ee({component:"Themed",modifiers:[a.color??"blue"]});return`${e} ${s}`});return(e,s)=>{var r;return o(),c("div",ea(e.$attrs,{class:Ge.value}),[h("div",oa,[a.label?(o(),c("label",{key:0,class:"NeoSelect-label",for:`${p(u)}-${a.name}`},[Ye(k(a.label)+" ",1),a.required?(o(),c("span",ca,"*")):g("",!0),a.required?(o(),c("span",ua," ("+k(a.requiredText)+") ",1)):g("",!0)],8,ia)):g("",!0)]),h("div",pa,[d.value==="multi"&&l.value.length>0?(o(),c("div",da,[(o(!0),c(Q,null,Y(l.value,n=>{var v;return o(),Z(ra,{key:n,text:(v=a.options.find(w=>w.value===n))==null?void 0:v.label,color:a.color,size:"small",variant:"solid",dismissible:"",rounded:"",onDismiss:w=>K(a.options.find(He=>He.value===n))},null,8,["text","color","onDismiss"])}),128))])):g("",!0),h("span",{class:X(["NeoSelect-chevron",{"is-open":i.value}]),"aria-hidden":"true",innerHTML:p(na)},null,10,ma),h("input",{ref_key:"inputRef",ref:C,class:"NeoSelect-input",name:a.name,id:`${p(u)}-${a.name}`,type:"text",role:"combobox",placeholder:d.value==="single"&&W.value?W.value:d.value==="multi"&&l.value.length>0?"":(r=a.selectProps)==null?void 0:r.placeholder,value:i.value?y.value:d.value==="single"?W.value:"","aria-label":a.ariaLabel,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":i.value,"aria-controls":`${p(u)}-popup_listbox`,"aria-activedescendant":We.value,"aria-describedby":a.helpText?`${p(u)}-helptext`:void 0,onInput:Je,onKeydown:Fe,onBlur:Ue,onClick:U(Ke,["prevent","stop"])},null,40,ga),Xe(h("ul",{ref_key:"listRef",ref:G,class:"NeoSelect-options",role:"listbox",id:`${p(u)}-popup_listbox`,"aria-labelledby":`${p(u)}-${a.name}`,"aria-multiselectable":d.value==="multi"},[(o(!0),c(Q,null,Y(m.value,(n,v)=>(o(),c("li",{key:n.value,role:"option",id:`option-${p(u)}-${v}`,"aria-selected":T(n.value),tabindex:t.value===v?0:-1,class:X(["NeoSelect-option",{selected:T(n.value),focused:t.value===v}]),onClick:w=>K(n),onMousedown:s[1]||(s[1]=U(()=>{},["prevent"])),onMouseenter:w=>t.value=v},[d.value==="multi"?(o(),Z(la,{key:0,name:`${p(u)}-option-${n.value}`,value:n.value,checked:T(n.value),color:a.color,ariaLabel:n.label,size:"small",class:"NeoSelect-checkbox",onClick:s[0]||(s[0]=U(()=>{},["stop"]))},null,8,["name","value","checked","color","ariaLabel"])):g("",!0),h("span",ba,k(n.label),1)],42,va))),128))],8,ya),[[Ze,i.value]])]),a.helpText||a.errorMessage?(o(),c("div",ha,[a.helpText&&!a.errorMessage?(o(),c("p",{key:0,class:"NeoSelect-helpText",id:`${p(u)}-helptext`},k(a.helpText),9,fa)):g("",!0),a.errorMessage?(o(),c("p",ka,k(a.errorMessage),1)):g("",!0)])):g("",!0)],16)}}}),F=ta(E,[["__scopeId","data-v-20d7c450"]]);E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{exportName:"default",displayName:"NeoSelect",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"selectProps",global:!1,description:"",tags:[],required:!1,type:"{ placeholder?: string; }",declarations:[],schema:{kind:"object",type:"{ placeholder?: string; }"}},{name:"options",global:!1,description:"",tags:[],required:!0,type:"{ value: string; label: string; }[]",declarations:[],schema:{kind:"array",type:"{ value: string; label: string; }[]"}},{name:"helpText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"any",declarations:[],schema:"any"},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | "tertiary"',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"mode",global:!1,description:"",tags:[],required:!1,type:'"single" | "multi"',declarations:[],schema:{kind:"enum",type:'"single" | "multi"',schema:['"single"','"multi"']}},{name:"selectValue",global:!1,description:"",tags:[],required:!1,type:"string | string[]",declarations:[],schema:{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"true",declarations:[],schema:"true"},{name:"requiredText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:value",description:"Emitted when the selected value changes. Receives a `string` in single mode or `string[]` in multi mode.",tags:[],type:"[value: string | string[]]",signature:'(event: "update:value", value: string | string[]): void',declarations:[],schema:[{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}]}],slots:[],exposed:[{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"true",description:"",declarations:[],schema:"true"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"variant",type:'"primary" | "secondary" | "tertiary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"requiredText",type:"string",description:"",declarations:[],schema:"string"},{name:"helpText",type:"string",description:"",declarations:[],schema:"string"},{name:"errorMessage",type:"string",description:"",declarations:[],schema:"string"},{name:"selectProps",type:"{ placeholder?: string; }",description:"",declarations:[],schema:{kind:"object",type:"{ placeholder?: string; }"}},{name:"options",type:"{ value: string; label: string; }[]",description:"",declarations:[],schema:{kind:"array",type:"{ value: string; label: string; }[]"}},{name:"mode",type:'"single" | "multi"',description:"",declarations:[],schema:{kind:"enum",type:'"single" | "multi"',schema:['"single"','"multi"']}},{name:"selectValue",type:"string | string[]",description:"",declarations:[],schema:{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/02-molecules/Select/NeoSelect.vue"});const Sa=["small","medium","large"],xa=["primary","secondary","tertiary"],_a=["single","multi"],{userEvent:Ca,within:qa}=__STORYBOOK_MODULE_TEST__,je=async({canvasElement:z})=>{const j=qa(z);await Ca.click(j.getByRole("combobox"))},J=[{value:"apple",label:"Apple"},{value:"orange",label:"Orange"},{value:"banana",label:"Banana"}],$a={title:"Molecules/NeoSelect",component:F,tags:["autodocs"],argTypes:{color:{description:"Theme color for focus ring and selected state accents.",table:{category:"Appearance"}},size:{control:"select",options:Sa,description:"Controls padding and font size.",table:{category:"Appearance"}},variant:{control:"select",options:xa,description:"`primary`: filled background. `secondary`: outlined style. `tertiary`: minimal, no visible border at rest.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners to the select input.",table:{category:"Appearance"}},mode:{control:"select",options:_a,description:"`single` (default): one value can be selected, bound to a `string`. `multi`: multiple values, bound to `string[]`. Switching mode changes the type of `selectValue`.",table:{category:"Behavior"}},selectValue:{description:"The currently selected value(s). Type depends on `mode`: `string` for single, `string[]` for multi.",table:{category:"State"}},options:{control:"object",description:"Array of selectable options. Each option: `{ value: string, label: string }`.",table:{category:"Content"}},selectProps:{control:"object",description:"Additional props passed to the inner select element. Supports `placeholder`.",table:{category:"Behavior"}},helpText:{control:"text",description:"Hint text rendered below the input to guide the user.",table:{category:"Content"}},errorMessage:{control:"text",description:"Validation error text rendered below the input. When set, the input is styled in an error state.",table:{category:"State"}},disabled:{control:"boolean",description:"Prevents interaction and applies a disabled visual style.",table:{category:"State"}},required:{control:"boolean",description:"Marks the field as required. When `true`, `requiredText` must also be provided and is shown next to the label.",table:{category:"State"}},requiredText:{control:"text",description:'Text displayed beside the label when `required` is true (e.g. `"required"` or `"*"`). Only available when `required` is set.',table:{category:"Content"}}},args:{name:"fruit",ariaLabel:"Select a fruit",size:"medium",selectProps:{placeholder:"Select one..."},variant:"primary",color:"blue",options:J},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}},snapshot:{viewports:["sm","md","lg","xl"]}}},A={tags:["snapshot"]},P={tags:["snapshot"],play:je},O={tags:["snapshot"],args:{label:"Choose fruits",ariaLabel:void 0,mode:"multi",selectProps:{placeholder:"Select multiple..."},selectValue:["apple"]},play:je},L={tags:["snapshot"],args:{label:"Default",ariaLabel:void 0}},M={tags:["snapshot"],args:{label:"Choose fruits",ariaLabel:void 0,mode:"multi",selectProps:{placeholder:"Select multiple..."},selectValue:["apple","banana"]}},D={tags:["snapshot"],args:{label:"Choose your favorite programming languages",ariaLabel:void 0,mode:"multi",selectProps:{placeholder:"Type to search..."},options:[{value:"typescript",label:"TypeScript"},{value:"javascript",label:"JavaScript"},{value:"python",label:"Python"},{value:"rust",label:"Rust"},{value:"go",label:"Go"},{value:"java",label:"Java"},{value:"csharp",label:"C#"},{value:"cpp",label:"C++"}]}},V={tags:["snapshot"],args:{label:"Choose your country",ariaLabel:void 0,mode:"single",selectProps:{placeholder:"Type to search countries..."},options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"es",label:"Spain"},{value:"it",label:"Italy"},{value:"nl",label:"Netherlands"},{value:"be",label:"Belgium"}]}},$={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},B={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},args:{label:"اختر فاكهة",ariaLabel:void 0,selectProps:{placeholder:"اختر واحدة..."},options:[{value:"apple",label:"تفاح"},{value:"orange",label:"برتقال"},{value:"banana",label:"موز"}]}},S={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:Ee(F,["primary","secondary","tertiary"],{defaultProps:{name:"color-select",options:J}})},x={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:Ee(F,["primary","secondary","tertiary"],{defaultProps:{name:"color-select",options:J},dark:!0})},I={...S,tags:["!dev","test-only"],play:ze()},R={...x,tags:["!dev","test-only"],play:ze()};var ae,se,te;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(te=(se=A.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,re,ne;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['snapshot'],
  play: openSelectPlay
}`,...(ne=(re=P.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ie,ce;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Choose fruits',
    ariaLabel: undefined,
    mode: 'multi',
    selectProps: {
      placeholder: 'Select multiple...'
    },
    selectValue: ['apple']
  },
  play: openSelectPlay
}`,...(ce=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,pe,de;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Default',
    ariaLabel: undefined
  }
}`,...(de=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ge,ye;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Choose fruits',
    ariaLabel: undefined,
    mode: 'multi',
    selectProps: {
      placeholder: 'Select multiple...'
    },
    selectValue: ['apple', 'banana']
  }
}`,...(ye=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var ve,be,he;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Choose your favorite programming languages',
    ariaLabel: undefined,
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
}`,...(he=(be=D.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var fe,ke,Se;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Choose your country',
    ariaLabel: undefined,
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
}`,...(Se=(ke=V.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var xe,_e,Ce;$.parameters={...$.parameters,docs:{...(xe=$.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...(Ce=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var qe,Ne,Te;B.parameters={...B.parameters,docs:{...(qe=B.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  args: {
    label: 'اختر فاكهة',
    ariaLabel: undefined,
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
}`,...(Te=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:Te.source}}};var we,Ae,Pe;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoSelect, ['primary', 'secondary', 'tertiary'], {
    defaultProps: {
      name: 'color-select',
      options: exampleOptions
    }
  })
}`,...(Pe=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var Oe,Le,Me;x.parameters={...x.parameters,docs:{...(Oe=x.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  },
  render: createSimpleColorShowcase(NeoSelect, ['primary', 'secondary', 'tertiary'], {
    defaultProps: {
      name: 'color-select',
      options: exampleOptions
    },
    dark: true
  })
}`,...(Me=(Le=x.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var De,Ve,$e;I.parameters={...I.parameters,docs:{...(De=I.parameters)==null?void 0:De.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...($e=(Ve=I.parameters)==null?void 0:Ve.docs)==null?void 0:$e.source}}};var Be,Ie,Re;R.parameters={...R.parameters,docs:{...(Be=R.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Re=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source}}};const Ba=["Default","Open","MultiSelectOpen","WithLabel","MultiSelect","MultiSelectEmpty","SingleSelectWithSearch","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{S as AllColors,I as AllColorsA11y,x as AllColorsOnDark,R as AllColorsOnDarkA11y,A as Default,M as MultiSelect,D as MultiSelectEmpty,O as MultiSelectOpen,$ as OnDark,P as Open,B as RTL,V as SingleSelectWithSearch,L as WithLabel,Ba as __namedExportsOrder,$a as default};
