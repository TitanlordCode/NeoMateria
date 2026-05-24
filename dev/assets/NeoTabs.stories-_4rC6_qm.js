import{d as g,f as _,r as w,I as se,G as ia,H as la,x as k,y as oe,F as ve,P as ge,c as t,w as fe,A as ga,v as da,B as I,M as fa,O as ha,u as C,D as z,z as re,Z as ya,J as Ta,K as Na,$ as wa,m as ca,a as Z,i as xa}from"./iframe-BF-isInV.js";import{g as he,_ as Pa}from"./_plugin-vue_export-helper-DerOYOQE.js";import{N as ka}from"./NeoDropdown-C-LpLLtW.js";import{N as Ca}from"./NeoHeadlineTertiary-1YtgnHBT.js";import{N as Da}from"./NeoText-oZOf1_i5.js";import{N as Sa}from"./NeoCard-VvaXhN1-.js";import"./preload-helper-Dp1pzeXC.js";import"./useHeadline-CEiJuF5o.js";import"./NeoImage-Bbm4vtnN.js";import"./NeoBadge-CpAEXHHS.js";import"./NeoButton-DHToiIFj.js";import"./useButton-DwgPL1zv.js";import"./NeoIcon-BIwAnHaT.js";import"./NeoLink-CRoy5d8e.js";const _a=["underline","pills","filled"],Aa=["small","medium","large"],$a=["horizontal","vertical"],Ra=["menu","scroll"],pa=Symbol("NeoTabsContext"),Oa=["aria-orientation"],za=["aria-selected","aria-controls","id","disabled","tabindex","aria-hidden","onClick"],Ha={key:0,class:"NeoTabs-overflow"},Ia=["aria-expanded","onClick"],Ea=["disabled","onClick"],Ba={class:"NeoTabs-panels"},Va=92,Q=g({__name:"NeoTabs",props:{class:{},activeTab:{},defaultActiveTab:{},variant:{default:"underline"},size:{default:"medium"},color:{default:"blue"},orientation:{default:"horizontal"},fullWidth:{type:Boolean,default:!1},overflow:{default:"menu"}},emits:["tab-change"],setup(n,{emit:a}){const e=n,s=_(()=>e.overflow==="scroll"),d=a,m=ha(),v=w([]),y=w(null),ee=w([]),S=w([]),T=w(1/0),ae=w(!1);let $=null;const R=w(""),N=_(()=>e.activeTab??R.value);se(()=>e.activeTab,o=>{o!==void 0&&(R.value=o)},{immediate:!0}),se(()=>e.defaultActiveTab,o=>{o&&!e.activeTab&&(R.value=o)},{immediate:!0});const le=o=>{R.value=o,d("tab-change",o),ae.value=!1};ya(pa,{instanceId:m,activeTab:N,registerTab:o=>{v.value.find(b=>b.id===o.id)||(v.value.push(o),!N.value&&!o.disabled&&(R.value=o.id))},unregisterTab:o=>{const b=v.value.findIndex(r=>r.id===o);b!==-1&&v.value.splice(b,1)}});const de=()=>{if(s.value){T.value=1/0;return}if(!y.value||S.value.length===0)return;const o=y.value.clientWidth;let b=0,r=S.value.length;for(let c=0;c<S.value.length;c++){const x=S.value[c]??0,P=c===S.value.length-1?0:Va;if(b+x+P>o){r=c;break}b+=x}T.value=r},ce=()=>{if(s.value){T.value=1/0;return}fa(()=>{S.value=ee.value.map(o=>(o==null?void 0:o.offsetWidth)??0),de()})};ia(()=>{ce(),y.value&&!s.value&&($=new ResizeObserver(de),$.observe(y.value))}),la(()=>{$==null||$.disconnect()}),se(()=>v.value.length,ce);const H=_(()=>v.value.filter((o,b)=>b>=T.value)),ba=_(()=>H.value.some(o=>o.id===N.value)),pe=_(()=>typeof document>"u"?!1:document.dir==="rtl"||document.documentElement.dir==="rtl"),ua=o=>{var me;const b=(e.orientation??"horizontal")==="horizontal",r=v.value.slice(0,T.value===1/0?void 0:T.value).filter(ne=>!ne.disabled),c=r.findIndex(ne=>ne.id===N.value),x=b?pe.value?"ArrowRight":"ArrowLeft":"ArrowUp",ue=b?pe.value?"ArrowLeft":"ArrowRight":"ArrowDown";let P=c;switch(o.key){case x:o.preventDefault(),P=c<=0?r.length-1:c-1;break;case ue:o.preventDefault(),P=c>=r.length-1?0:c+1;break;case"Home":o.preventDefault(),P=0;break;case"End":o.preventDefault(),P=r.length-1;break;default:return}const te=r[P];if(!te)return;le(te.id);const va=v.value.indexOf(te);(me=ee.value[va])==null||me.focus()},be=o=>{o.disabled||le(o.id)},ma=_(()=>{const o=he({component:"NeoTabs",modifiers:[e.variant??"underline",e.size??"medium",e.orientation??"horizontal",e.fullWidth?"fullWidth":"",s.value?"overflow-scroll":""],additional:e.class}),b=he({component:"Themed",modifiers:[e.color??"blue"]});return`${o} ${b}`});return(o,b)=>(C(),k("div",{class:I(ma.value)},[oe("div",{ref_key:"tablistRef",ref:y,class:"NeoTabs-tablist",role:"tablist","aria-orientation":e.orientation??"horizontal"},[(C(!0),k(ve,null,ge(v.value,(r,c)=>(C(),k("button",{key:r.id,ref_for:!0,ref:x=>{ee.value[c]=x},class:I(["NeoTabs-tab",{"NeoTabs-tab--active":N.value===r.id,"NeoTabs-tab--disabled":r.disabled,"NeoTabs-tab--hidden":c>=T.value}]),role:"tab","aria-selected":N.value===r.id,"aria-controls":`${z(m)}-panel-${r.id}`,id:`${z(m)}-tab-${r.id}`,disabled:r.disabled||void 0,tabindex:N.value===r.id?0:-1,"aria-hidden":c>=T.value?!0:void 0,onClick:x=>be(r),onKeydown:ua},re(r.label),43,za))),128)),!s.value&&H.value.length>0?(C(),k("div",Ha,[t(ka,{open:ae.value,placement:"bottom-end","onUpdate:open":b[0]||(b[0]=r=>ae.value=r)},{trigger:fe(({isOpen:r,toggle:c})=>[oe("button",{class:I(["NeoTabs-overflow-trigger",{"NeoTabs-overflow-trigger--active":ba.value}]),"aria-expanded":r,"aria-haspopup":"true",tabindex:"0",onClick:c}," More ("+re(H.value.length)+") ",11,Ia)]),default:fe(()=>[(C(!0),k(ve,null,ge(H.value,r=>(C(),k("button",{key:r.id,class:I(["NeoTabs-overflow-item",{"NeoTabs-overflow-item--active":N.value===r.id,"NeoTabs-overflow-item--disabled":r.disabled}]),disabled:r.disabled||void 0,onClick:c=>be(r)},re(r.label),11,Ea))),128))]),_:1},8,["open"])])):ga("",!0)],8,Oa),oe("div",Ba,[da(o.$slots,"default",{},void 0,!0)])],2))}}),h=Pa(Q,[["__scopeId","data-v-c149da41"]]);Q.__docgenInfo=Object.assign({displayName:Q.name??Q.__name},{exportName:"default",displayName:"NeoTabs",type:1,props:[{name:"color",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"blue"'},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']},default:'"medium"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"filled" | "underline" | "pills"',declarations:[],schema:{kind:"enum",type:'"filled" | "underline" | "pills"',schema:['"filled"','"underline"','"pills"']},default:'"underline"'},{name:"orientation",global:!1,description:"",tags:[],required:!1,type:'"vertical" | "horizontal"',declarations:[],schema:{kind:"enum",type:'"vertical" | "horizontal"',schema:['"vertical"','"horizontal"']},default:'"horizontal"'},{name:"fullWidth",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"overflow",global:!1,description:"",tags:[],required:!1,type:'"scroll" | "menu"',declarations:[],schema:{kind:"enum",type:'"scroll" | "menu"',schema:['"scroll"','"menu"']},default:'"menu"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"activeTab",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"defaultActiveTab",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[{name:"tab-change",description:"Emitted when the active tab changes. Receives the new tab id.",tags:[],type:"[id: string]",signature:'(event: "tab-change", id: string): void',declarations:[],schema:["string"]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"variant",type:'"filled" | "underline" | "pills"',description:"",declarations:[],schema:{kind:"enum",type:'"filled" | "underline" | "pills"',schema:['"filled"','"underline"','"pills"']}},{name:"orientation",type:'"vertical" | "horizontal"',description:"",declarations:[],schema:{kind:"enum",type:'"vertical" | "horizontal"',schema:['"vertical"','"horizontal"']}},{name:"fullWidth",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"overflow",type:'"scroll" | "menu"',description:"",declarations:[],schema:{kind:"enum",type:'"scroll" | "menu"',schema:['"scroll"','"menu"']}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"activeTab",type:"string",description:"",declarations:[],schema:"string"},{name:"defaultActiveTab",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/02-molecules/Tabs/NeoTabs.vue"});const qa=["id","aria-labelledby"],i=g({__name:"NeoTabPanel",props:{id:{},label:{},disabled:{type:Boolean}},setup(n){const a=n,e=wa(pa);return ia(()=>{e==null||e.registerTab({id:a.id,label:a.label,disabled:a.disabled})}),la(()=>{e==null||e.unregisterTab(a.id)}),(s,d)=>{var m,v,y;return Ta((C(),k("div",{id:`${(m=z(e))==null?void 0:m.instanceId}-panel-${a.id}`,"aria-labelledby":`${(v=z(e))==null?void 0:v.instanceId}-tab-${a.id}`,class:"NeoTabPanel",role:"tabpanel",tabindex:"0"},[da(s.$slots,"default")],8,qa)),[[Na,((y=z(e))==null?void 0:y.activeTab.value)===a.id]])}}});i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"NeoTabPanel",type:1,props:[{name:"id",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"label",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/02-molecules/Tabs/NeoTabPanel.vue"});const{expect:A,userEvent:E,waitFor:O,within:Wa}=__STORYBOOK_MODULE_TEST__;function l(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!xa(n)}const lt={title:"Molecules/NeoTabs",component:h,tags:["autodocs"],argTypes:{variant:{control:"select",options:_a,description:"`underline`: thin active indicator below the tab. `pills`: each tab is a rounded pill. `filled`: all tabs share a background; active tab gets an elevated card.",table:{category:"Appearance"}},size:{control:"select",options:Aa,description:"Controls font size and padding of the tab triggers.",table:{category:"Appearance"}},color:{control:"select",description:"Accent color used for the active tab indicator and active text.",table:{category:"Appearance"}},orientation:{control:"select",options:$a,description:"`horizontal`: tabs run along the top (or bottom) edge. `vertical`: tabs run along the inline-start edge.",table:{category:"Appearance"}},fullWidth:{control:"boolean",description:"When true, tab triggers stretch to fill the full container width equally.",table:{category:"Appearance"}},activeTab:{control:!1,description:"Controlled mode: the id of the currently active tab. Must be updated via `@tab-change` to keep the component in sync.",table:{category:"State"}},defaultActiveTab:{control:!1,description:"Uncontrolled mode: the id of the tab to activate on first render. Has no effect once mounted. Omit to default to the first non-disabled tab.",table:{category:"State"}},overflow:{control:"select",options:Ra,description:"Overflow strategy when tabs don't fit horizontally. `'menu'` (default) moves overflowing tabs into a `…` dropdown; `'scroll'` renders a horizontally scrollable tablist instead. Prefer `'scroll'` for variable-count tab strips.",table:{category:"Behavior"}}},args:{variant:"underline",size:"medium",color:"blue",orientation:"horizontal",fullWidth:!1},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},p=(n,a)=>g({name:"SampleContent",setup(){return()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"4px 0"}},[t(Ca,{tag:"h3"},l(n)?n:{default:()=>[n]}),t(Da,{tag:"p",size:"small"},l(a)?a:{default:()=>[a]})])}}),u=(n,a,e,s=!1)=>[`  <NeoTabPanel id="${n}" label="${a}"${s?' :disabled="true"':""}>`,'    <div style="display: flex; flex-direction: column; gap: 8px; padding: 4px 0;">',`      <NeoHeadlineTertiary tag="h3">${a}</NeoHeadlineTertiary>`,`      <NeoText tag="p" size="small">${e}</NeoText>`,"    </div>","  </NeoTabPanel>"].join(`
`),X=(n,a)=>n.split(`
`).map(e=>" ".repeat(a)+e).join(`
`),ie=n=>["  <div>",`    <p style="color: var(--neo-color-grey500); font-size: 12px; font-weight: 600; letter-spacing: 0.08em; margin-block-end: 8px; text-transform: uppercase;">${n}</p>`,`    <NeoTabs variant="${n}" color="blue">`,X([u(`${n}-a`,"Overview","Content for the overview tab."),u(`${n}-b`,"Details","Content for the details tab."),u(`${n}-c`,"History","Content for the history tab.")].join(`
`),4),"    </NeoTabs>","  </div>"].join(`
`),D=[u("overview","Overview","High-level summary of the subject. Use this panel to provide a concise introduction."),u("details","Details","In-depth information and technical specifics. Perfect for configuration options and advanced settings."),u("history","History","Chronological record of changes and events. Track what happened and when.")].join(`
`),ja=[u("overview","Overview","Vertical orientation places the tab list on the inline-start side."),u("details","Details","Each panel fills the remaining space to the inline-end."),u("settings","Settings","Useful for admin panels, settings pages, and document editors.")].join(`
`),Ma=[u("overview","Overview",'This tab is active. The "Details" tab is disabled.'),u("details","Details","This content cannot be reached — the tab is disabled.",!0),u("history","History","Keyboard navigation skips the disabled tab.")].join(`
`),Ua=[u("overview","Overview","Controlled mode — the parent owns the active tab state."),u("details","Details","Update activeTab in @tab-change to keep the component in sync."),u("history","History","Useful when you need to conditionally prevent tab switches.")].join(`
`),Fa=[{id:"tab1",label:"Overview"},{id:"tab2",label:"Analytics"},{id:"tab3",label:"Reports"},{id:"tab4",label:"Settings"},{id:"tab5",label:"Integrations"},{id:"tab6",label:"Permissions"},{id:"tab7",label:"Billing"},{id:"tab8",label:"Audit Log"}].map(({id:n,label:a})=>u(n,a,`Content for the ${a} section.`)).join(`
`),f={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoTabs color="blue">
${D}
</NeoTabs>`}}},render:n=>g({name:"DefaultRender",setup(){return()=>{let a,e,s;return t(h,n,{default:()=>[t(i,{id:"overview",label:"Overview"},l(a=p("Overview","High-level summary of the subject. Use this panel to provide a concise introduction."))?a:{default:()=>[a]}),t(i,{id:"details",label:"Details"},l(e=p("Details","In-depth information and technical specifics. Perfect for configuration options and advanced settings."))?e:{default:()=>[e]}),t(i,{id:"history",label:"History"},l(s=p("History","Chronological record of changes and events. Track what happened and when."))?s:{default:()=>[s]})]})}}})},B={tags:["snapshot"],args:{variant:"pills"},parameters:{docs:{source:{code:`<NeoTabs variant="pills" color="blue">
${D}
</NeoTabs>`}}},render:f.render},V={tags:["snapshot"],args:{variant:"filled"},parameters:{docs:{source:{code:`<NeoTabs variant="filled" color="blue">
${D}
</NeoTabs>`}}},render:f.render},q={tags:["snapshot"],args:{orientation:"vertical"},parameters:{docs:{source:{code:`<NeoTabs orientation="vertical" color="blue">
${ja}
</NeoTabs>`}}},render:n=>g({name:"VerticalRender",setup(){return()=>{let a,e,s;return t(h,n,{default:()=>[t(i,{id:"overview",label:"Overview"},l(a=p("Overview","Vertical orientation places the tab list on the inline-start side."))?a:{default:()=>[a]}),t(i,{id:"details",label:"Details"},l(e=p("Details","Each panel fills the remaining space to the inline-end."))?e:{default:()=>[e]}),t(i,{id:"settings",label:"Settings"},l(s=p("Settings","Useful for admin panels, settings pages, and document editors."))?s:{default:()=>[s]})]})}}})},W={tags:["snapshot"],args:{size:"small"},parameters:{docs:{source:{code:`<NeoTabs size="small" color="blue">
${D}
</NeoTabs>`}}},render:f.render},j={tags:["snapshot"],args:{size:"large"},parameters:{docs:{source:{code:`<NeoTabs size="large" color="blue">
${D}
</NeoTabs>`}}},render:f.render},M={tags:["snapshot"],args:{fullWidth:!0},parameters:{docs:{source:{code:`<NeoTabs :full-width="true" color="blue">
${D}
</NeoTabs>`}}},render:f.render},U={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoTabs color="blue">
${Ma}
</NeoTabs>`}}},render:n=>g({name:"WithDisabledTabRender",setup(){return()=>{let a,e,s;return t(h,n,{default:()=>[t(i,{id:"overview",label:"Overview"},l(a=p("Overview",'This tab is active. The "Details" tab is disabled.'))?a:{default:()=>[a]}),t(i,{id:"details",label:"Details",disabled:!0},l(e=p("Details","This content cannot be reached — the tab is disabled."))?e:{default:()=>[e]}),t(i,{id:"history",label:"History"},l(s=p("History","Keyboard navigation skips the disabled tab."))?s:{default:()=>[s]})]})}}})},F={tags:["no-test"],parameters:{docs:{source:{code:`<script setup>
const activeTab = ref('details')
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p style="color: var(--neo-color-grey600); font-size: 14px; margin: 0;">
      Active tab: <strong>{{ activeTab }}</strong>
    </p>
    <NeoTabs :active-tab="activeTab" color="blue" @tab-change="activeTab = $event">
${X(Ua,4)}
    </NeoTabs>
  </div>
</template>`}}},render:n=>g({name:"ControlledRender",setup(){const a=w("details");return()=>{let e,s,d;return t("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},[t("p",{style:{color:"var(--neo-color-grey600)",fontSize:"14px",margin:0}},[Z("Active tab: "),t("strong",null,[a.value])]),t(h,ca(n,{activeTab:a.value,"onTab-change":m=>{a.value=m}}),{default:()=>[t(i,{id:"overview",label:"Overview"},l(e=p("Overview","Controlled mode — the parent owns the active tab state."))?e:{default:()=>[e]}),t(i,{id:"details",label:"Details"},l(s=p("Details","Update activeTab in @tab-change to keep the component in sync."))?s:{default:()=>[s]}),t(i,{id:"history",label:"History"},l(d=p("History","Useful when you need to conditionally prevent tab switches."))?d:{default:()=>[d]})]})])}}})},K={tags:["snapshot"],parameters:{snapshot:{viewports:["md","xl"]},docs:{source:{code:`<NeoTabs color="blue">
  <NeoTabPanel id="articles" label="Articles">
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; padding-block-start: 8px;">
      <NeoCard color="grey" title="Getting Started" description="Everything you need to know to get up and running quickly." image-src="https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover" image-alt="Getting Started cover" size="small" />
      <NeoCard color="grey" title="Advanced Patterns" description="Deep dives into architecture, performance, and best practices." image-src="https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover" image-alt="Advanced Patterns cover" size="small" />
      <NeoCard color="grey" title="API Reference" description="Complete documentation of every prop, slot, and emitted event." image-src="https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover" image-alt="API Reference cover" size="small" />
    </div>
  </NeoTabPanel>
  <NeoTabPanel id="videos" label="Videos">
    <!-- video tutorials content -->
  </NeoTabPanel>
  <NeoTabPanel id="examples" label="Examples">
    <!-- live code examples and interactive sandboxes -->
  </NeoTabPanel>
</NeoTabs>`}}},render:n=>g({name:"WithRichContentRender",setup(){const a=[{title:"Getting Started",description:"Everything you need to know to get up and running quickly."},{title:"Advanced Patterns",description:"Deep dives into architecture, performance, and best practices."},{title:"API Reference",description:"Complete documentation of every prop, slot, and emitted event."}];return()=>{let e,s;return t(h,n,{default:()=>[t(i,{id:"articles",label:"Articles"},{default:()=>[t("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",paddingBlockStart:"8px"}},[a.map(d=>t(Sa,{key:d.title,color:"grey",title:d.title,description:d.description,imageSrc:"https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover",imageAlt:`${d.title} cover`,size:"small"},null))])]}),t(i,{id:"videos",label:"Videos"},l(e=p("Videos","Video tutorials and walkthroughs will appear here."))?e:{default:()=>[e]}),t(i,{id:"examples",label:"Examples"},l(s=p("Examples","Live code examples and interactive sandboxes."))?s:{default:()=>[s]})]})}}})},L={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]},docs:{source:{code:`<!-- Constrain the container width to trigger the overflow "More" dropdown -->
<div style="max-inline-size: 480px;">
  <NeoTabs color="blue">
${X(Fa,2)}
  </NeoTabs>
</div>`}}},render:n=>g({name:"ManyTabsRender",setup(){const a=[{id:"tab1",label:"Overview"},{id:"tab2",label:"Analytics"},{id:"tab3",label:"Reports"},{id:"tab4",label:"Settings"},{id:"tab5",label:"Integrations"},{id:"tab6",label:"Permissions"},{id:"tab7",label:"Billing"},{id:"tab8",label:"Audit Log"}];return()=>{let e;return t("div",{style:{maxInlineSize:"480px"}},[t(h,n,l(e=a.map(s=>{let d;return t(i,{key:s.id,id:s.id,label:s.label},l(d=p(s.label,`Content for the ${s.label} section.`))?d:{default:()=>[d]})}))?e:{default:()=>[e]})])}}})},G={tags:["no-test"],parameters:{docs:{source:{code:`<div style="display: flex; flex-direction: column; gap: 32px;">
${ie("underline")}

${ie("pills")}

${ie("filled")}
</div>`}}},render:n=>g({name:"AllVariantsRender",setup(){const a=["underline","pills","filled"];return()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"32px"}},[a.map(e=>{let s,d,m;return t("div",{key:e},[t("p",{style:{color:"var(--neo-color-grey500)",fontSize:"12px",fontWeight:600,letterSpacing:"0.08em",marginBlockEnd:"8px",textTransform:"uppercase"}},[e]),t(h,ca(n,{variant:e}),{default:()=>[t(i,{id:`${e}-a`,label:"Overview"},l(s=p("Overview","Content for the overview tab."))?s:{default:()=>[s]}),t(i,{id:`${e}-b`,label:"Details"},l(d=p("Details","Content for the details tab."))?d:{default:()=>[d]}),t(i,{id:`${e}-c`,label:"History"},l(m=p("History","Content for the history tab."))?m:{default:()=>[m]})]})])})])}})},J={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]},docs:{source:{code:`<div class="u-onDark" style="background: #000; padding: 24px;">
  <NeoTabs color="blue">
${X(D,2)}
  </NeoTabs>
</div>`}}},render:f.render},Y={tags:["!dev"],render:n=>g({name:"InteractionRender",setup(){return()=>t(h,n,{default:()=>[t(i,{id:"overview",label:"Overview"},{default:()=>[t("p",{"data-testid":"panel-overview"},[Z("Overview panel content")])]}),t(i,{id:"details",label:"Details"},{default:()=>[t("p",{"data-testid":"panel-details"},[Z("Details panel content")])]}),t(i,{id:"history",label:"History"},{default:()=>[t("p",{"data-testid":"panel-history"},[Z("History panel content")])]})]})}}),play:async({canvasElement:n,step:a})=>{const e=Wa(n);await a("First tab is active by default",async()=>{await O(()=>{A(e.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","true")})}),await a("Click Details tab to activate it",async()=>{await E.click(e.getByRole("tab",{name:"Details"})),await O(()=>{A(e.getByRole("tab",{name:"Details"})).toHaveAttribute("aria-selected","true"),A(e.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","false")})}),await a("Arrow key moves to next tab",async()=>{e.getByRole("tab",{name:"Details"}).focus(),await E.keyboard("{ArrowRight}"),await O(()=>{A(e.getByRole("tab",{name:"History"})).toHaveAttribute("aria-selected","true")})}),await a("Home key jumps to first tab",async()=>{await E.keyboard("{Home}"),await O(()=>{A(e.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","true")})}),await a("End key jumps to last tab",async()=>{await E.keyboard("{End}"),await O(()=>{A(e.getByRole("tab",{name:"History"})).toHaveAttribute("aria-selected","true")})})}};var ye,Te,Ne;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoTabs color="blue">
\${defaultPanelsSrc}
</NeoTabs>\`
      }
    }
  },
  render: (args: NeoTabsProps) => defineComponent({
    name: 'DefaultRender',
    setup() {
      return () => <NeoTabs {...args}>
                        <NeoTabPanel id="overview" label="Overview">
                            {samplePanelContent('Overview', 'High-level summary of the subject. Use this panel to provide a concise introduction.')}
                        </NeoTabPanel>
                        <NeoTabPanel id="details" label="Details">
                            {samplePanelContent('Details', 'In-depth information and technical specifics. Perfect for configuration options and advanced settings.')}
                        </NeoTabPanel>
                        <NeoTabPanel id="history" label="History">
                            {samplePanelContent('History', 'Chronological record of changes and events. Track what happened and when.')}
                        </NeoTabPanel>
                    </NeoTabs>;
    }
  })
}`,...(Ne=(Te=f.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var we,xe,Pe;B.parameters={...B.parameters,docs:{...(we=B.parameters)==null?void 0:we.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'pills'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTabs variant="pills" color="blue">
\${defaultPanelsSrc}
</NeoTabs>\`
      }
    }
  },
  render: Default.render
}`,...(Pe=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:Pe.source}}};var ke,Ce,De;V.parameters={...V.parameters,docs:{...(ke=V.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'filled'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTabs variant="filled" color="blue">
\${defaultPanelsSrc}
</NeoTabs>\`
      }
    }
  },
  render: Default.render
}`,...(De=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};var Se,_e,Ae;q.parameters={...q.parameters,docs:{...(Se=q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    orientation: 'vertical'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTabs orientation="vertical" color="blue">
\${verticalPanelsSrc}
</NeoTabs>\`
      }
    }
  },
  render: (args: NeoTabsProps) => defineComponent({
    name: 'VerticalRender',
    setup() {
      return () => <NeoTabs {...args}>
                        <NeoTabPanel id="overview" label="Overview">
                            {samplePanelContent('Overview', 'Vertical orientation places the tab list on the inline-start side.')}
                        </NeoTabPanel>
                        <NeoTabPanel id="details" label="Details">
                            {samplePanelContent('Details', 'Each panel fills the remaining space to the inline-end.')}
                        </NeoTabPanel>
                        <NeoTabPanel id="settings" label="Settings">
                            {samplePanelContent('Settings', 'Useful for admin panels, settings pages, and document editors.')}
                        </NeoTabPanel>
                    </NeoTabs>;
    }
  })
}`,...(Ae=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var $e,Re,Oe;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTabs size="small" color="blue">
\${defaultPanelsSrc}
</NeoTabs>\`
      }
    }
  },
  render: Default.render
}`,...(Oe=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Oe.source}}};var ze,He,Ie;j.parameters={...j.parameters,docs:{...(ze=j.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTabs size="large" color="blue">
\${defaultPanelsSrc}
</NeoTabs>\`
      }
    }
  },
  render: Default.render
}`,...(Ie=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Ie.source}}};var Ee,Be,Ve;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    fullWidth: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTabs :full-width="true" color="blue">
\${defaultPanelsSrc}
</NeoTabs>\`
      }
    }
  },
  render: Default.render
}`,...(Ve=(Be=M.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var qe,We,je;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoTabs color="blue">
\${disabledTabPanelsSrc}
</NeoTabs>\`
      }
    }
  },
  render: (args: NeoTabsProps) => defineComponent({
    name: 'WithDisabledTabRender',
    setup() {
      return () => <NeoTabs {...args}>
                        <NeoTabPanel id="overview" label="Overview">
                            {samplePanelContent('Overview', 'This tab is active. The "Details" tab is disabled.')}
                        </NeoTabPanel>
                        <NeoTabPanel id="details" label="Details" disabled>
                            {samplePanelContent('Details', 'This content cannot be reached — the tab is disabled.')}
                        </NeoTabPanel>
                        <NeoTabPanel id="history" label="History">
                            {samplePanelContent('History', 'Keyboard navigation skips the disabled tab.')}
                        </NeoTabPanel>
                    </NeoTabs>;
    }
  })
}`,...(je=(We=U.parameters)==null?void 0:We.docs)==null?void 0:je.source}}};var Me,Ue,Fe;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const activeTab = ref('details')
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p style="color: var(--neo-color-grey600); font-size: 14px; margin: 0;">
      Active tab: <strong>{{ activeTab }}</strong>
    </p>
    <NeoTabs :active-tab="activeTab" color="blue" @tab-change="activeTab = $event">
\${indentSrc(controlledPanelsSrc, 4)}
    </NeoTabs>
  </div>
</template>\`
      }
    }
  },
  render: (args: NeoTabsProps) => defineComponent({
    name: 'ControlledRender',
    setup() {
      const activeTab = ref('details');
      return () => <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
                        <p style={{
          color: 'var(--neo-color-grey600)',
          fontSize: '14px',
          margin: 0
        }}>
                            Active tab: <strong>{activeTab.value}</strong>
                        </p>
                        <NeoTabs {...args} activeTab={activeTab.value} onTab-change={(id: string) => {
          activeTab.value = id;
        }}>
                            <NeoTabPanel id="overview" label="Overview">
                                {samplePanelContent('Overview', 'Controlled mode — the parent owns the active tab state.')}
                            </NeoTabPanel>
                            <NeoTabPanel id="details" label="Details">
                                {samplePanelContent('Details', 'Update activeTab in @tab-change to keep the component in sync.')}
                            </NeoTabPanel>
                            <NeoTabPanel id="history" label="History">
                                {samplePanelContent('History', 'Useful when you need to conditionally prevent tab switches.')}
                            </NeoTabPanel>
                        </NeoTabs>
                    </div>;
    }
  })
}`,...(Fe=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:Fe.source}}};var Ke,Le,Ge;K.parameters={...K.parameters,docs:{...(Ke=K.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['md', 'xl']
    },
    docs: {
      source: {
        code: \`<NeoTabs color="blue">
  <NeoTabPanel id="articles" label="Articles">
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; padding-block-start: 8px;">
      <NeoCard color="grey" title="Getting Started" description="Everything you need to know to get up and running quickly." image-src="https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover" image-alt="Getting Started cover" size="small" />
      <NeoCard color="grey" title="Advanced Patterns" description="Deep dives into architecture, performance, and best practices." image-src="https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover" image-alt="Advanced Patterns cover" size="small" />
      <NeoCard color="grey" title="API Reference" description="Complete documentation of every prop, slot, and emitted event." image-src="https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover" image-alt="API Reference cover" size="small" />
    </div>
  </NeoTabPanel>
  <NeoTabPanel id="videos" label="Videos">
    <!-- video tutorials content -->
  </NeoTabPanel>
  <NeoTabPanel id="examples" label="Examples">
    <!-- live code examples and interactive sandboxes -->
  </NeoTabPanel>
</NeoTabs>\`
      }
    }
  },
  render: (args: NeoTabsProps) => defineComponent({
    name: 'WithRichContentRender',
    setup() {
      const cards = [{
        title: 'Getting Started',
        description: 'Everything you need to know to get up and running quickly.'
      }, {
        title: 'Advanced Patterns',
        description: 'Deep dives into architecture, performance, and best practices.'
      }, {
        title: 'API Reference',
        description: 'Complete documentation of every prop, slot, and emitted event.'
      }];
      return () => <NeoTabs {...args}>
                        <NeoTabPanel id="articles" label="Articles">
                            <div style={{
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            paddingBlockStart: '8px'
          }}>
                                {cards.map(card => <NeoCard key={card.title} color="grey" title={card.title} description={card.description} imageSrc="https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover" imageAlt={\`\${card.title} cover\`} size="small" />)}
                            </div>
                        </NeoTabPanel>
                        <NeoTabPanel id="videos" label="Videos">
                            {samplePanelContent('Videos', 'Video tutorials and walkthroughs will appear here.')}
                        </NeoTabPanel>
                        <NeoTabPanel id="examples" label="Examples">
                            {samplePanelContent('Examples', 'Live code examples and interactive sandboxes.')}
                        </NeoTabPanel>
                    </NeoTabs>;
    }
  })
}`,...(Ge=(Le=K.parameters)==null?void 0:Le.docs)==null?void 0:Ge.source}}};var Je,Ye,Ze;L.parameters={...L.parameters,docs:{...(Je=L.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    },
    docs: {
      source: {
        code: \`<!-- Constrain the container width to trigger the overflow "More" dropdown -->
<div style="max-inline-size: 480px;">
  <NeoTabs color="blue">
\${indentSrc(manyPanelsSrc, 2)}
  </NeoTabs>
</div>\`
      }
    }
  },
  render: (args: NeoTabsProps) => defineComponent({
    name: 'ManyTabsRender',
    setup() {
      const tabs = [{
        id: 'tab1',
        label: 'Overview'
      }, {
        id: 'tab2',
        label: 'Analytics'
      }, {
        id: 'tab3',
        label: 'Reports'
      }, {
        id: 'tab4',
        label: 'Settings'
      }, {
        id: 'tab5',
        label: 'Integrations'
      }, {
        id: 'tab6',
        label: 'Permissions'
      }, {
        id: 'tab7',
        label: 'Billing'
      }, {
        id: 'tab8',
        label: 'Audit Log'
      }];
      return () => <div style={{
        maxInlineSize: '480px'
      }}>
                        <NeoTabs {...args}>
                            {tabs.map(tab => <NeoTabPanel key={tab.id} id={tab.id} label={tab.label}>
                                    {samplePanelContent(tab.label, \`Content for the \${tab.label} section.\`)}
                                </NeoTabPanel>)}
                        </NeoTabs>
                    </div>;
    }
  })
}`,...(Ze=(Ye=L.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var Qe,Xe,ea;G.parameters={...G.parameters,docs:{...(Qe=G.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<div style="display: flex; flex-direction: column; gap: 32px;">
\${srcVariantSection('underline')}

\${srcVariantSection('pills')}

\${srcVariantSection('filled')}
</div>\`
      }
    }
  },
  render: (args: NeoTabsProps) => defineComponent({
    name: 'AllVariantsRender',
    setup() {
      const variants = ['underline', 'pills', 'filled'] as const;
      return () => <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
                        {variants.map(variant => <div key={variant}>
                                <p style={{
            color: 'var(--neo-color-grey500)',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            marginBlockEnd: '8px',
            textTransform: 'uppercase'
          }}>
                                    {variant}
                                </p>
                                <NeoTabs {...args} variant={variant}>
                                    <NeoTabPanel id={\`\${variant}-a\`} label="Overview">
                                        {samplePanelContent('Overview', 'Content for the overview tab.')}
                                    </NeoTabPanel>
                                    <NeoTabPanel id={\`\${variant}-b\`} label="Details">
                                        {samplePanelContent('Details', 'Content for the details tab.')}
                                    </NeoTabPanel>
                                    <NeoTabPanel id={\`\${variant}-c\`} label="History">
                                        {samplePanelContent('History', 'Content for the history tab.')}
                                    </NeoTabPanel>
                                </NeoTabs>
                            </div>)}
                    </div>;
    }
  })
}`,...(ea=(Xe=G.parameters)==null?void 0:Xe.docs)==null?void 0:ea.source}}};var aa,ta,na;J.parameters={...J.parameters,docs:{...(aa=J.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    },
    docs: {
      source: {
        code: \`<div class="u-onDark" style="background: #000; padding: 24px;">
  <NeoTabs color="blue">
\${indentSrc(defaultPanelsSrc, 2)}
  </NeoTabs>
</div>\`
      }
    }
  },
  render: Default.render
}`,...(na=(ta=J.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var sa,oa,ra;Y.parameters={...Y.parameters,docs:{...(sa=Y.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: (args: NeoTabsProps) => defineComponent({
    name: 'InteractionRender',
    setup() {
      return () => <NeoTabs {...args}>
                        <NeoTabPanel id="overview" label="Overview">
                            <p data-testid="panel-overview">Overview panel content</p>
                        </NeoTabPanel>
                        <NeoTabPanel id="details" label="Details">
                            <p data-testid="panel-details">Details panel content</p>
                        </NeoTabPanel>
                        <NeoTabPanel id="history" label="History">
                            <p data-testid="panel-history">History panel content</p>
                        </NeoTabPanel>
                    </NeoTabs>;
    }
  }),
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('First tab is active by default', async () => {
      await waitFor(() => {
        expect(canvas.getByRole('tab', {
          name: 'Overview'
        })).toHaveAttribute('aria-selected', 'true');
      });
    });
    await step('Click Details tab to activate it', async () => {
      await userEvent.click(canvas.getByRole('tab', {
        name: 'Details'
      }));
      await waitFor(() => {
        expect(canvas.getByRole('tab', {
          name: 'Details'
        })).toHaveAttribute('aria-selected', 'true');
        expect(canvas.getByRole('tab', {
          name: 'Overview'
        })).toHaveAttribute('aria-selected', 'false');
      });
    });
    await step('Arrow key moves to next tab', async () => {
      canvas.getByRole('tab', {
        name: 'Details'
      }).focus();
      await userEvent.keyboard('{ArrowRight}');
      await waitFor(() => {
        expect(canvas.getByRole('tab', {
          name: 'History'
        })).toHaveAttribute('aria-selected', 'true');
      });
    });
    await step('Home key jumps to first tab', async () => {
      await userEvent.keyboard('{Home}');
      await waitFor(() => {
        expect(canvas.getByRole('tab', {
          name: 'Overview'
        })).toHaveAttribute('aria-selected', 'true');
      });
    });
    await step('End key jumps to last tab', async () => {
      await userEvent.keyboard('{End}');
      await waitFor(() => {
        expect(canvas.getByRole('tab', {
          name: 'History'
        })).toHaveAttribute('aria-selected', 'true');
      });
    });
  }
}`,...(ra=(oa=Y.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};const dt=["Default","Pills","Filled","Vertical","Small","Large","FullWidth","WithDisabledTab","Controlled","WithRichContent","ManyTabs","AllVariants","OnDark","Interaction"];export{G as AllVariants,F as Controlled,f as Default,V as Filled,M as FullWidth,Y as Interaction,j as Large,L as ManyTabs,J as OnDark,B as Pills,W as Small,q as Vertical,U as WithDisabledTab,K as WithRichContent,dt as __namedExportsOrder,lt as default};
