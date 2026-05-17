import{d as Xe,r as g,f as k,I as ne,H as ra,x as c,y as f,D as u,a as oa,z as x,A as y,F as le,P as re,B as Q,W as X,t as Y,J as ia,K as ca,L as pa,X as ua,m as da,M as ma,u as o,c as oe}from"./iframe-CiKriRT1.js";import{g as ga}from"./id-YUq4rnGL.js";import{g as ie,_ as ya}from"./_plugin-vue_export-helper-DerOYOQE.js";import{N as va}from"./NeoCheckbox-C56b3fHf.js";import{N as ba}from"./NeoBadge-BMjnqw8n.js";import{c as ha}from"./iconStrings-DsK5_d8D.js";import{c as Ye}from"./colorShowcase-C8uURTUW.js";import{c as Ze}from"./createA11yPlay-CfdnV7f3.js";import"./preload-helper-Dp1pzeXC.js";import"./axe-6MnRr2qa.js";const fa={class:"NeoSelect-labelWrapper"},Sa=["for"],ka={key:0,class:"NeoSelect-required","aria-hidden":"true"},xa={key:1,class:"NeoSelect-requiredText sr-only"},wa={key:0,class:"NeoSelect-selectedTags"},Ca=["innerHTML"],_a=["name","id","placeholder","value","aria-label","aria-expanded","aria-controls","aria-activedescendant","aria-describedby"],qa=["id","aria-labelledby","aria-multiselectable"],Na=["id","aria-selected","tabindex","onClick","onMouseenter"],Ta={"aria-hidden":"true"},Pa={key:0,class:"NeoSelect-messageWrapper"},Aa=["id"],La={key:1,class:"NeoSelect-errorMessage"},W=Xe({__name:"NeoSelect",props:{name:{},selectProps:{},options:{},helpText:{},errorMessage:{},size:{},color:{},disabled:{type:Boolean},rounded:{type:Boolean},variant:{},mode:{},selectValue:{},label:{},ariaLabel:{},required:{type:Boolean},requiredText:{}},emits:["update:value"],setup(S,{emit:U}){const a=S,_=U,p=ga("select"),i=g(!1),t=g(-1),q=g(null),ae=g(null),F=g(null),se=g({}),v=g(""),n=g(Array.isArray(a.selectValue)?a.selectValue:a.selectValue?[a.selectValue]:[]),J=()=>{if(!F.value)return;const e=F.value.getBoundingClientRect();se.value={insetBlockStart:`${e.bottom}px`,insetInlineStart:`${e.left}px`,inlineSize:`${e.width}px`}},d=k(()=>a.mode??"single"),ea=k(()=>t.value>=0?`option-${p}-${t.value}`:void 0),G=k(()=>{if(d.value==="single"){const e=a.options.find(s=>s.value===n.value[0]);return(e==null?void 0:e.label)||""}else return n.value.map(e=>{var s;return(s=a.options.find(l=>l.value===e))==null?void 0:s.label}).filter(Boolean).join(", ")});ne(()=>a.selectValue,e=>{e!==void 0&&(n.value=Array.isArray(e)?e:e?[e]:[])});const h=()=>J(),N=async()=>{v.value="",J(),i.value=!0,window.addEventListener("scroll",h,!0),window.addEventListener("resize",h),await ma(),await new Promise(s=>requestAnimationFrame(()=>s())),J();const e=a.options.findIndex(s=>s.value===n.value[0]);t.value=e>=0?e:0},T=()=>{i.value=!1,t.value=-1,v.value="",window.removeEventListener("scroll",h,!0),window.removeEventListener("resize",h)};ra(()=>{window.removeEventListener("scroll",h,!0),window.removeEventListener("resize",h)});const aa=()=>i.value?T():N(),sa=e=>{var l;const s=e.relatedTarget;!((l=ae.value)!=null&&l.contains(s))&&s!==q.value&&T()},ta=e=>{var s;if(e.key==="Escape")T(),(s=q.value)==null||s.blur();else if(e.key==="Enter"||e.key===" ")e.preventDefault(),i.value?t.value>=0&&m.value[t.value]&&H(m.value[t.value]):N();else if(e.key==="ArrowDown")e.preventDefault(),i.value?t.value=(t.value+1)%m.value.length:N();else if(e.key==="ArrowUp")e.preventDefault(),i.value?t.value=(t.value-1+m.value.length)%m.value.length:N();else if(e.key==="Backspace"&&d.value==="multi"&&v.value===""&&(e.preventDefault(),n.value.length>0)){const l=n.value.slice(0,-1);n.value=l,_("update:value",l)}},m=k(()=>a.options.filter(e=>e.label.toLowerCase().includes(v.value.toLowerCase()))),na=e=>{const s=e.target;v.value=s.value,i.value||(i.value=!0),t.value=0},P=e=>n.value.includes(e),H=e=>{var s;if(d.value==="single")n.value=[e.value],_("update:value",e.value),T();else{if(P(e.value)){const l=n.value.filter(r=>r!==e.value);n.value=l,_("update:value",l)}else{const l=[...n.value,e.value];n.value=l,_("update:value",l)}v.value=""}(s=q.value)==null||s.focus()};ne(()=>m.value.length,()=>{t.value>=m.value.length&&(t.value=Math.max(0,m.value.length-1))});const te=k(()=>{const e=ie({component:"NeoSelect",modifiers:[a.size??"medium",a.variant??"primary",a.rounded?"rounded":""]}),s=ie({component:"Themed",modifiers:[a.color??"blue"]});return`${e} ${s}`});return(e,s)=>{var l;return o(),c("div",da(e.$attrs,{class:te.value}),[f("div",fa,[a.label?(o(),c("label",{key:0,class:"NeoSelect-label",for:`${u(p)}-${a.name}`},[oa(x(a.label)+" ",1),a.required?(o(),c("span",ka,"*")):y("",!0),a.required?(o(),c("span",xa," ("+x(a.requiredText)+") ",1)):y("",!0)],8,Sa)):y("",!0)]),f("div",{ref_key:"wrapperRef",ref:F,class:"NeoSelect-inputWrapper"},[d.value==="multi"&&n.value.length>0?(o(),c("div",wa,[(o(!0),c(le,null,re(n.value,r=>{var b;return o(),Y(ba,{key:r,text:(b=a.options.find(A=>A.value===r))==null?void 0:b.label,color:a.color,size:"small",variant:"solid",dismissible:"",rounded:"",onDismiss:A=>H(a.options.find(la=>la.value===r))},null,8,["text","color","onDismiss"])}),128))])):y("",!0),f("span",{class:Q(["NeoSelect-chevron",{"is-open":i.value}]),"aria-hidden":"true",innerHTML:u(ha)},null,10,Ca),f("input",{ref_key:"inputRef",ref:q,class:"NeoSelect-input",name:a.name,id:`${u(p)}-${a.name}`,type:"text",role:"combobox",placeholder:d.value==="single"&&G.value?G.value:d.value==="multi"&&n.value.length>0?"":(l=a.selectProps)==null?void 0:l.placeholder,value:i.value?v.value:d.value==="single"?G.value:"","aria-label":a.ariaLabel,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":i.value,"aria-controls":`${u(p)}-popup_listbox`,"aria-activedescendant":ea.value,"aria-describedby":a.helpText?`${u(p)}-helptext`:void 0,onInput:na,onKeydown:ta,onBlur:sa,onClick:X(aa,["prevent","stop"])},null,40,_a),(o(),Y(ua,{to:"body"},[ia(f("ul",{ref_key:"listRef",ref:ae,class:Q(["NeoSelect-options",te.value]),role:"listbox",id:`${u(p)}-popup_listbox`,"aria-labelledby":`${u(p)}-${a.name}`,"aria-multiselectable":d.value==="multi",style:pa(se.value)},[(o(!0),c(le,null,re(m.value,(r,b)=>(o(),c("li",{key:r.value,role:"option",id:`option-${u(p)}-${b}`,"aria-selected":P(r.value),tabindex:t.value===b?0:-1,class:Q(["NeoSelect-option",{selected:P(r.value),focused:t.value===b}]),onClick:A=>H(r),onMousedown:s[1]||(s[1]=X(()=>{},["prevent"])),onMouseenter:A=>t.value=b},[d.value==="multi"?(o(),Y(va,{key:0,name:`${u(p)}-option-${r.value}`,value:r.value,checked:P(r.value),color:a.color,ariaLabel:r.label,size:"small",class:"NeoSelect-checkbox",onClick:s[0]||(s[0]=X(()=>{},["stop"]))},null,8,["name","value","checked","color","ariaLabel"])):y("",!0),f("span",Ta,x(r.label),1)],42,Na))),128))],14,qa),[[ca,i.value]])]))],512),a.helpText||a.errorMessage?(o(),c("div",Pa,[a.helpText&&!a.errorMessage?(o(),c("p",{key:0,class:"NeoSelect-helpText",id:`${u(p)}-helptext`},x(a.helpText),9,Aa)):y("",!0),a.errorMessage?(o(),c("p",La,x(a.errorMessage),1)):y("",!0)])):y("",!0)],16)}}}),K=ya(W,[["__scopeId","data-v-61e5c1db"]]);W.__docgenInfo=Object.assign({displayName:W.name??W.__name},{exportName:"default",displayName:"NeoSelect",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"selectProps",global:!1,description:"",tags:[],required:!1,type:"{ placeholder?: string; }",declarations:[],schema:{kind:"object",type:"{ placeholder?: string; }"}},{name:"options",global:!1,description:"",tags:[],required:!0,type:"{ value: string; label: string; }[]",declarations:[],schema:{kind:"array",type:"{ value: string; label: string; }[]"}},{name:"helpText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!0,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",global:!1,description:"",tags:[],required:!0,type:"any",declarations:[],schema:"any"},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"primary" | "secondary" | "tertiary"',declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"mode",global:!1,description:"",tags:[],required:!1,type:'"single" | "multi"',declarations:[],schema:{kind:"enum",type:'"single" | "multi"',schema:['"single"','"multi"']}},{name:"selectValue",global:!1,description:"",tags:[],required:!1,type:"string | string[]",declarations:[],schema:{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"true",declarations:[],schema:"true"},{name:"requiredText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:value",description:"Emitted when the selected value changes. Receives a `string` in single mode or `string[]` in multi mode.",tags:[],type:"[value: string | string[]]",signature:'(event: "update:value", value: string | string[]): void',declarations:[],schema:[{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}]}],slots:[],exposed:[{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"true",description:"",declarations:[],schema:"true"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"requiredText",type:"string",description:"",declarations:[],schema:"string"},{name:"variant",type:'"primary" | "secondary" | "tertiary"',description:"",declarations:[],schema:{kind:"enum",type:'"primary" | "secondary" | "tertiary"',schema:['"primary"','"secondary"','"tertiary"']}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"helpText",type:"string",description:"",declarations:[],schema:"string"},{name:"errorMessage",type:"string",description:"",declarations:[],schema:"string"},{name:"selectProps",type:"{ placeholder?: string; }",description:"",declarations:[],schema:{kind:"object",type:"{ placeholder?: string; }"}},{name:"options",type:"{ value: string; label: string; }[]",description:"",declarations:[],schema:{kind:"array",type:"{ value: string; label: string; }[]"}},{name:"mode",type:'"single" | "multi"',description:"",declarations:[],schema:{kind:"enum",type:'"single" | "multi"',schema:['"single"','"multi"']}},{name:"selectValue",type:"string | string[]",description:"",declarations:[],schema:{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/02-molecules/Select/NeoSelect.vue"});const Oa=["small","medium","large"],Ma=["primary","secondary","tertiary"],Da=["single","multi"],{userEvent:$a,within:Ba}=__STORYBOOK_MODULE_TEST__,Z=async({canvasElement:S})=>{const U=Ba(S);await $a.click(U.getByRole("combobox"))},ee=[{value:"apple",label:"Apple"},{value:"orange",label:"Orange"},{value:"banana",label:"Banana"}],Ja={title:"Molecules/NeoSelect",component:K,tags:["autodocs"],argTypes:{color:{description:"Theme color for focus ring and selected state accents.",table:{category:"Appearance"}},size:{control:"select",options:Oa,description:"Controls padding and font size.",table:{category:"Appearance"}},variant:{control:"select",options:Ma,description:"`primary`: filled background. `secondary`: outlined style. `tertiary`: minimal, no visible border at rest.",table:{category:"Appearance"}},rounded:{control:"boolean",description:"Applies fully rounded corners to the select input.",table:{category:"Appearance"}},mode:{control:"select",options:Da,description:"`single` (default): one value can be selected, bound to a `string`. `multi`: multiple values, bound to `string[]`. Switching mode changes the type of `selectValue`.",table:{category:"Behavior"}},selectValue:{description:"The currently selected value(s). Type depends on `mode`: `string` for single, `string[]` for multi.",table:{category:"State"}},options:{control:"object",description:"Array of selectable options. Each option: `{ value: string, label: string }`.",table:{category:"Content"}},selectProps:{control:"object",description:"Additional props passed to the inner select element. Supports `placeholder`.",table:{category:"Behavior"}},helpText:{control:"text",description:"Hint text rendered below the input to guide the user.",table:{category:"Content"}},errorMessage:{control:"text",description:"Validation error text rendered below the input. When set, the input is styled in an error state.",table:{category:"State"}},disabled:{control:"boolean",description:"Prevents interaction and applies a disabled visual style.",table:{category:"State"}},required:{control:"boolean",description:"Marks the field as required. When `true`, `requiredText` must also be provided and is shown next to the label.",table:{category:"State"}},requiredText:{control:"text",description:'Text displayed beside the label when `required` is true (e.g. `"required"` or `"*"`). Only available when `required` is set.',table:{category:"Content"}}},args:{name:"fruit",ariaLabel:"Select a fruit",size:"medium",selectProps:{placeholder:"Select one..."},variant:"primary",color:"blue",options:ee},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}},snapshot:{viewports:["sm","md","lg","xl"]}}},L={tags:["snapshot"]},O={tags:["snapshot"],play:Z},M={tags:["snapshot"],args:{label:"Choose fruits",ariaLabel:void 0,mode:"multi",selectProps:{placeholder:"Select multiple..."},selectValue:["apple"]},play:Z},D={tags:["snapshot"],play:Z,render:S=>Xe({name:"OpenInClippingContainerRender",setup(){return()=>oe("div",{style:{border:"1px dashed grey",maxBlockSize:"80px",overflow:"hidden",padding:"8px"}},[oe(K,S,null)])}})},$={tags:["snapshot"],args:{label:"Default",ariaLabel:void 0}},B={tags:["snapshot"],args:{label:"Choose fruits",ariaLabel:void 0,mode:"multi",selectProps:{placeholder:"Select multiple..."},selectValue:["apple","banana"]}},V={tags:["snapshot"],args:{label:"Choose your favorite programming languages",ariaLabel:void 0,mode:"multi",selectProps:{placeholder:"Type to search..."},options:[{value:"typescript",label:"TypeScript"},{value:"javascript",label:"JavaScript"},{value:"python",label:"Python"},{value:"rust",label:"Rust"},{value:"go",label:"Go"},{value:"java",label:"Java"},{value:"csharp",label:"C#"},{value:"cpp",label:"C++"}]}},E={tags:["snapshot"],args:{label:"Choose your country",ariaLabel:void 0,mode:"single",selectProps:{placeholder:"Type to search countries..."},options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"es",label:"Spain"},{value:"it",label:"Italy"},{value:"nl",label:"Netherlands"},{value:"be",label:"Belgium"}]}},I={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}}},R={tags:["snapshot"],globals:{direction:"rtl"},parameters:{snapshot:{viewports:["sm","xl"]}},args:{label:"اختر فاكهة",ariaLabel:void 0,selectProps:{placeholder:"اختر واحدة..."},options:[{value:"apple",label:"تفاح"},{value:"orange",label:"برتقال"},{value:"banana",label:"موز"}]}},w={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]}},render:Ye(K,["primary","secondary","tertiary"],{defaultProps:{name:"color-select",options:ee}})},C={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]}},render:Ye(K,["primary","secondary","tertiary"],{defaultProps:{name:"color-select",options:ee},dark:!0})},z={...w,tags:["!dev","test-only"],play:Ze()},j={...C,tags:["!dev","test-only"],play:Ze()};var ce,pe,ue;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(ue=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var de,me,ge;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['snapshot'],
  play: openSelectPlay
}`,...(ge=(me=O.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ye,ve,be;M.parameters={...M.parameters,docs:{...(ye=M.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var he,fe,Se;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['snapshot'],
  play: openSelectPlay,
  render: (args: NeoSelectProps) => defineComponent({
    name: 'OpenInClippingContainerRender',
    setup() {
      return () => <div style={{
        border: '1px dashed grey',
        maxBlockSize: '80px',
        overflow: 'hidden',
        padding: '8px'
      }}>
                        <NeoSelect {...args} />
                    </div>;
    }
  })
}`,...(Se=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var ke,xe,we;$.parameters={...$.parameters,docs:{...(ke=$.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Default',
    ariaLabel: undefined
  }
}`,...(we=(xe=$.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Ce,_e,qe;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(qe=(_e=B.parameters)==null?void 0:_e.docs)==null?void 0:qe.source}}};var Ne,Te,Pe;V.parameters={...V.parameters,docs:{...(Ne=V.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Pe=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source}}};var Ae,Le,Oe;E.parameters={...E.parameters,docs:{...(Ae=E.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Oe=(Le=E.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var Me,De,$e;I.parameters={...I.parameters,docs:{...(Me=I.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    }
  }
}`,...($e=(De=I.parameters)==null?void 0:De.docs)==null?void 0:$e.source}}};var Be,Ve,Ee;R.parameters={...R.parameters,docs:{...(Be=R.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ee=(Ve=R.parameters)==null?void 0:Ve.docs)==null?void 0:Ee.source}}};var Ie,Re,ze;w.parameters={...w.parameters,docs:{...(Ie=w.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ze=(Re=w.parameters)==null?void 0:Re.docs)==null?void 0:ze.source}}};var je,We,Ke;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ke=(We=C.parameters)==null?void 0:We.docs)==null?void 0:Ke.source}}};var Ue,Fe,Je;z.parameters={...z.parameters,docs:{...(Ue=z.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Je=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:Je.source}}};var Ge,He,Qe;j.parameters={...j.parameters,docs:{...(Ge=j.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Qe=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Qe.source}}};const Ga=["Default","Open","MultiSelectOpen","OpenInClippingContainer","WithLabel","MultiSelect","MultiSelectEmpty","SingleSelectWithSearch","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{w as AllColors,z as AllColorsA11y,C as AllColorsOnDark,j as AllColorsOnDarkA11y,L as Default,B as MultiSelect,V as MultiSelectEmpty,M as MultiSelectOpen,I as OnDark,O as Open,D as OpenInClippingContainer,R as RTL,E as SingleSelectWithSearch,$ as WithLabel,Ga as __namedExportsOrder,Ja as default};
