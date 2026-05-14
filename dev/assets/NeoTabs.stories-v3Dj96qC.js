import{d as v,r as T,f as R,I as ne,G as ia,H as ra,x,y as se,F as me,P as ve,c as t,w as ge,A as va,v as la,B as I,M as ga,O as fa,u as P,D as z,z as oe,Z as ha,J as ya,K as Ta,$ as Na,m as da,a as Z,i as wa}from"./iframe-Dix_Y394.js";import{g as fe,_ as xa}from"./_plugin-vue_export-helper-DerOYOQE.js";import{N as Pa}from"./NeoDropdown-J62pMtzi.js";import{N as ka}from"./NeoHeadlineTertiary-DIl8HQ0w.js";import{N as Ca}from"./NeoText-BM0WduV_.js";import{N as Da}from"./NeoCard-JPaYa9CF.js";import"./preload-helper-Dp1pzeXC.js";import"./useHeadline-DhZ1301d.js";import"./NeoImage-DUkDL1mV.js";import"./NeoBadge-Bh7ej_c5.js";import"./NeoButton-oYA1E7im.js";import"./useButton-CxRXKgrI.js";import"./NeoIcon-BgQOvyno.js";import"./NeoLink-DvhrHolG.js";const Sa=["underline","pills","filled"],_a=["small","medium","large"],Aa=["horizontal","vertical"],ca=Symbol("NeoTabsContext"),$a=["aria-orientation"],Ra=["aria-selected","aria-controls","id","disabled","tabindex","aria-hidden","onClick"],Oa={key:0,class:"NeoTabs-overflow"},za=["aria-expanded","onClick"],Ha=["disabled","onClick"],Ia={class:"NeoTabs-panels"},Ea=92,Q=v({__name:"NeoTabs",props:{class:{},activeTab:{},defaultActiveTab:{},variant:{default:"underline"},size:{default:"medium"},color:{default:"blue"},orientation:{default:"horizontal"},fullWidth:{type:Boolean,default:!1}},emits:["tab-change"],setup(n,{emit:a}){const e=n,o=a,l=fa(),c=T([]),h=T(null),C=T([]),D=T([]),S=T(1/0),ee=T(!1);let A=null;const $=T(""),y=R(()=>e.activeTab??$.value);ne(()=>e.activeTab,s=>{s!==void 0&&($.value=s)},{immediate:!0}),ne(()=>e.defaultActiveTab,s=>{s&&!e.activeTab&&($.value=s)},{immediate:!0});const re=s=>{$.value=s,o("tab-change",s),ee.value=!1};ha(ca,{instanceId:l,activeTab:y,registerTab:s=>{c.value.find(u=>u.id===s.id)||(c.value.push(s),!y.value&&!s.disabled&&($.value=s.id))},unregisterTab:s=>{const u=c.value.findIndex(i=>i.id===s);u!==-1&&c.value.splice(u,1)}});const le=()=>{if(!h.value||D.value.length===0)return;const s=h.value.clientWidth;let u=0,i=D.value.length;for(let p=0;p<D.value.length;p++){const N=D.value[p]??0,w=p===D.value.length-1?0:Ea;if(u+N+w>s){i=p;break}u+=N}S.value=i},de=()=>{ga(()=>{D.value=C.value.map(s=>(s==null?void 0:s.offsetWidth)??0),le()})};ia(()=>{de(),h.value&&(A=new ResizeObserver(le),A.observe(h.value))}),ra(()=>{A==null||A.disconnect()}),ne(()=>c.value.length,de);const H=R(()=>c.value.filter((s,u)=>u>=S.value)),pa=R(()=>H.value.some(s=>s.id===y.value)),ce=R(()=>typeof document>"u"?!1:document.dir==="rtl"||document.documentElement.dir==="rtl"),ba=s=>{var ue;const u=(e.orientation??"horizontal")==="horizontal",i=c.value.slice(0,S.value===1/0?void 0:S.value).filter(te=>!te.disabled),p=i.findIndex(te=>te.id===y.value),N=u?ce.value?"ArrowRight":"ArrowLeft":"ArrowUp",be=u?ce.value?"ArrowLeft":"ArrowRight":"ArrowDown";let w=p;switch(s.key){case N:s.preventDefault(),w=p<=0?i.length-1:p-1;break;case be:s.preventDefault(),w=p>=i.length-1?0:p+1;break;case"Home":s.preventDefault(),w=0;break;case"End":s.preventDefault(),w=i.length-1;break;default:return}const ae=i[w];if(!ae)return;re(ae.id);const ma=c.value.indexOf(ae);(ue=C.value[ma])==null||ue.focus()},pe=s=>{s.disabled||re(s.id)},ua=R(()=>{const s=fe({component:"NeoTabs",modifiers:[e.variant??"underline",e.size??"medium",e.orientation??"horizontal",e.fullWidth?"fullWidth":""],additional:e.class}),u=fe({component:"Themed",modifiers:[e.color??"blue"]});return`${s} ${u}`});return(s,u)=>(P(),x("div",{class:I(ua.value)},[se("div",{ref_key:"tablistRef",ref:h,class:"NeoTabs-tablist",role:"tablist","aria-orientation":e.orientation??"horizontal"},[(P(!0),x(me,null,ve(c.value,(i,p)=>(P(),x("button",{key:i.id,ref_for:!0,ref:N=>{C.value[p]=N},class:I(["NeoTabs-tab",{"NeoTabs-tab--active":y.value===i.id,"NeoTabs-tab--disabled":i.disabled,"NeoTabs-tab--hidden":p>=S.value}]),role:"tab","aria-selected":y.value===i.id,"aria-controls":`${z(l)}-panel-${i.id}`,id:`${z(l)}-tab-${i.id}`,disabled:i.disabled||void 0,tabindex:y.value===i.id?0:-1,"aria-hidden":p>=S.value?!0:void 0,onClick:N=>pe(i),onKeydown:ba},oe(i.label),43,Ra))),128)),H.value.length>0?(P(),x("div",Oa,[t(Pa,{open:ee.value,placement:"bottom-end","onUpdate:open":u[0]||(u[0]=i=>ee.value=i)},{trigger:ge(({isOpen:i,toggle:p})=>[se("button",{class:I(["NeoTabs-overflow-trigger",{"NeoTabs-overflow-trigger--active":pa.value}]),"aria-expanded":i,"aria-haspopup":"true",tabindex:"0",onClick:p}," More ("+oe(H.value.length)+") ",11,za)]),default:ge(()=>[(P(!0),x(me,null,ve(H.value,i=>(P(),x("button",{key:i.id,class:I(["NeoTabs-overflow-item",{"NeoTabs-overflow-item--active":y.value===i.id,"NeoTabs-overflow-item--disabled":i.disabled}]),disabled:i.disabled||void 0,onClick:p=>pe(i)},oe(i.label),11,Ha))),128))]),_:1},8,["open"])])):va("",!0)],8,$a),se("div",Ia,[la(s.$slots,"default",{},void 0,!0)])],2))}}),f=xa(Q,[["__scopeId","data-v-e2f9e25e"]]);Q.__docgenInfo=Object.assign({displayName:Q.name??Q.__name},{exportName:"default",displayName:"NeoTabs",type:1,props:[{name:"size",global:!1,description:"",tags:[],required:!1,type:'"small" | "medium" | "large"',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']},default:'"medium"'},{name:"color",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"blue"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"filled" | "underline" | "pills"',declarations:[],schema:{kind:"enum",type:'"filled" | "underline" | "pills"',schema:['"filled"','"underline"','"pills"']},default:'"underline"'},{name:"fullWidth",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"orientation",global:!1,description:"",tags:[],required:!1,type:'"vertical" | "horizontal"',declarations:[],schema:{kind:"enum",type:'"vertical" | "horizontal"',schema:['"vertical"','"horizontal"']},default:'"horizontal"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"activeTab",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"defaultActiveTab",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[{name:"tab-change",description:"Emitted when the active tab changes. Receives the new tab id.",tags:[],type:"[id: string]",signature:'(event: "tab-change", id: string): void',declarations:[],schema:["string"]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:'"small" | "medium" | "large"',description:"",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | "large"',schema:['"small"','"medium"','"large"']}},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"variant",type:'"filled" | "underline" | "pills"',description:"",declarations:[],schema:{kind:"enum",type:'"filled" | "underline" | "pills"',schema:['"filled"','"underline"','"pills"']}},{name:"fullWidth",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"orientation",type:'"vertical" | "horizontal"',description:"",declarations:[],schema:{kind:"enum",type:'"vertical" | "horizontal"',schema:['"vertical"','"horizontal"']}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"activeTab",type:"string",description:"",declarations:[],schema:"string"},{name:"defaultActiveTab",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/02-molecules/Tabs/NeoTabs.vue"});const Ba=["id","aria-labelledby"],r=v({__name:"NeoTabPanel",props:{id:{},label:{},disabled:{type:Boolean}},setup(n){const a=n,e=Na(ca);return ia(()=>{e==null||e.registerTab({id:a.id,label:a.label,disabled:a.disabled})}),ra(()=>{e==null||e.unregisterTab(a.id)}),(o,l)=>{var c,h,C;return ya((P(),x("div",{id:`${(c=z(e))==null?void 0:c.instanceId}-panel-${a.id}`,"aria-labelledby":`${(h=z(e))==null?void 0:h.instanceId}-tab-${a.id}`,class:"NeoTabPanel",role:"tabpanel",tabindex:"0"},[la(o.$slots,"default")],8,Ba)),[[Ta,((C=z(e))==null?void 0:C.activeTab.value)===a.id]])}}});r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{exportName:"default",displayName:"NeoTabPanel",type:1,props:[{name:"id",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"label",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"id",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/02-molecules/Tabs/NeoTabPanel.vue"});const{expect:_,userEvent:E,waitFor:O,within:Va}=__STORYBOOK_MODULE_TEST__;function d(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!wa(n)}const it={title:"Molecules/NeoTabs",component:f,tags:["autodocs"],argTypes:{variant:{control:"select",options:Sa,description:"`underline`: thin active indicator below the tab. `pills`: each tab is a rounded pill. `filled`: all tabs share a background; active tab gets an elevated card.",table:{category:"Appearance"}},size:{control:"select",options:_a,description:"Controls font size and padding of the tab triggers.",table:{category:"Appearance"}},color:{control:"select",description:"Accent color used for the active tab indicator and active text.",table:{category:"Appearance"}},orientation:{control:"select",options:Aa,description:"`horizontal`: tabs run along the top (or bottom) edge. `vertical`: tabs run along the inline-start edge.",table:{category:"Appearance"}},fullWidth:{control:"boolean",description:"When true, tab triggers stretch to fill the full container width equally.",table:{category:"Appearance"}},activeTab:{control:!1,description:"Controlled mode: the id of the currently active tab. Must be updated via `@tab-change` to keep the component in sync.",table:{category:"State"}},defaultActiveTab:{control:!1,description:"Uncontrolled mode: the id of the tab to activate on first render. Has no effect once mounted. Omit to default to the first non-disabled tab.",table:{category:"State"}}},args:{variant:"underline",size:"medium",color:"blue",orientation:"horizontal",fullWidth:!1},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},b=(n,a)=>v({name:"SampleContent",setup(){return()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"4px 0"}},[t(ka,{tag:"h3"},d(n)?n:{default:()=>[n]}),t(Ca,{tag:"p",size:"small"},d(a)?a:{default:()=>[a]})])}}),m=(n,a,e,o=!1)=>[`  <NeoTabPanel id="${n}" label="${a}"${o?' :disabled="true"':""}>`,'    <div style="display: flex; flex-direction: column; gap: 8px; padding: 4px 0;">',`      <NeoHeadlineTertiary tag="h3">${a}</NeoHeadlineTertiary>`,`      <NeoText tag="p" size="small">${e}</NeoText>`,"    </div>","  </NeoTabPanel>"].join(`
`),X=(n,a)=>n.split(`
`).map(e=>" ".repeat(a)+e).join(`
`),ie=n=>["  <div>",`    <p style="color: var(--neo-color-grey500); font-size: 12px; font-weight: 600; letter-spacing: 0.08em; margin-block-end: 8px; text-transform: uppercase;">${n}</p>`,`    <NeoTabs variant="${n}" color="blue">`,X([m(`${n}-a`,"Overview","Content for the overview tab."),m(`${n}-b`,"Details","Content for the details tab."),m(`${n}-c`,"History","Content for the history tab.")].join(`
`),4),"    </NeoTabs>","  </div>"].join(`
`),k=[m("overview","Overview","High-level summary of the subject. Use this panel to provide a concise introduction."),m("details","Details","In-depth information and technical specifics. Perfect for configuration options and advanced settings."),m("history","History","Chronological record of changes and events. Track what happened and when.")].join(`
`),qa=[m("overview","Overview","Vertical orientation places the tab list on the inline-start side."),m("details","Details","Each panel fills the remaining space to the inline-end."),m("settings","Settings","Useful for admin panels, settings pages, and document editors.")].join(`
`),Wa=[m("overview","Overview",'This tab is active. The "Details" tab is disabled.'),m("details","Details","This content cannot be reached — the tab is disabled.",!0),m("history","History","Keyboard navigation skips the disabled tab.")].join(`
`),ja=[m("overview","Overview","Controlled mode — the parent owns the active tab state."),m("details","Details","Update activeTab in @tab-change to keep the component in sync."),m("history","History","Useful when you need to conditionally prevent tab switches.")].join(`
`),Ma=[{id:"tab1",label:"Overview"},{id:"tab2",label:"Analytics"},{id:"tab3",label:"Reports"},{id:"tab4",label:"Settings"},{id:"tab5",label:"Integrations"},{id:"tab6",label:"Permissions"},{id:"tab7",label:"Billing"},{id:"tab8",label:"Audit Log"}].map(({id:n,label:a})=>m(n,a,`Content for the ${a} section.`)).join(`
`),g={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoTabs color="blue">
${k}
</NeoTabs>`}}},render:n=>v({name:"DefaultRender",setup(){return()=>{let a,e,o;return t(f,n,{default:()=>[t(r,{id:"overview",label:"Overview"},d(a=b("Overview","High-level summary of the subject. Use this panel to provide a concise introduction."))?a:{default:()=>[a]}),t(r,{id:"details",label:"Details"},d(e=b("Details","In-depth information and technical specifics. Perfect for configuration options and advanced settings."))?e:{default:()=>[e]}),t(r,{id:"history",label:"History"},d(o=b("History","Chronological record of changes and events. Track what happened and when."))?o:{default:()=>[o]})]})}}})},B={tags:["snapshot"],args:{variant:"pills"},parameters:{docs:{source:{code:`<NeoTabs variant="pills" color="blue">
${k}
</NeoTabs>`}}},render:g.render},V={tags:["snapshot"],args:{variant:"filled"},parameters:{docs:{source:{code:`<NeoTabs variant="filled" color="blue">
${k}
</NeoTabs>`}}},render:g.render},q={tags:["snapshot"],args:{orientation:"vertical"},parameters:{docs:{source:{code:`<NeoTabs orientation="vertical" color="blue">
${qa}
</NeoTabs>`}}},render:n=>v({name:"VerticalRender",setup(){return()=>{let a,e,o;return t(f,n,{default:()=>[t(r,{id:"overview",label:"Overview"},d(a=b("Overview","Vertical orientation places the tab list on the inline-start side."))?a:{default:()=>[a]}),t(r,{id:"details",label:"Details"},d(e=b("Details","Each panel fills the remaining space to the inline-end."))?e:{default:()=>[e]}),t(r,{id:"settings",label:"Settings"},d(o=b("Settings","Useful for admin panels, settings pages, and document editors."))?o:{default:()=>[o]})]})}}})},W={tags:["snapshot"],args:{size:"small"},parameters:{docs:{source:{code:`<NeoTabs size="small" color="blue">
${k}
</NeoTabs>`}}},render:g.render},j={tags:["snapshot"],args:{size:"large"},parameters:{docs:{source:{code:`<NeoTabs size="large" color="blue">
${k}
</NeoTabs>`}}},render:g.render},M={tags:["snapshot"],args:{fullWidth:!0},parameters:{docs:{source:{code:`<NeoTabs :full-width="true" color="blue">
${k}
</NeoTabs>`}}},render:g.render},U={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoTabs color="blue">
${Wa}
</NeoTabs>`}}},render:n=>v({name:"WithDisabledTabRender",setup(){return()=>{let a,e,o;return t(f,n,{default:()=>[t(r,{id:"overview",label:"Overview"},d(a=b("Overview",'This tab is active. The "Details" tab is disabled.'))?a:{default:()=>[a]}),t(r,{id:"details",label:"Details",disabled:!0},d(e=b("Details","This content cannot be reached — the tab is disabled."))?e:{default:()=>[e]}),t(r,{id:"history",label:"History"},d(o=b("History","Keyboard navigation skips the disabled tab."))?o:{default:()=>[o]})]})}}})},F={tags:["no-test"],parameters:{docs:{source:{code:`<script setup>
const activeTab = ref('details')
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p style="color: var(--neo-color-grey600); font-size: 14px; margin: 0;">
      Active tab: <strong>{{ activeTab }}</strong>
    </p>
    <NeoTabs :active-tab="activeTab" color="blue" @tab-change="activeTab = $event">
${X(ja,4)}
    </NeoTabs>
  </div>
</template>`}}},render:n=>v({name:"ControlledRender",setup(){const a=T("details");return()=>{let e,o,l;return t("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},[t("p",{style:{color:"var(--neo-color-grey600)",fontSize:"14px",margin:0}},[Z("Active tab: "),t("strong",null,[a.value])]),t(f,da(n,{activeTab:a.value,"onTab-change":c=>{a.value=c}}),{default:()=>[t(r,{id:"overview",label:"Overview"},d(e=b("Overview","Controlled mode — the parent owns the active tab state."))?e:{default:()=>[e]}),t(r,{id:"details",label:"Details"},d(o=b("Details","Update activeTab in @tab-change to keep the component in sync."))?o:{default:()=>[o]}),t(r,{id:"history",label:"History"},d(l=b("History","Useful when you need to conditionally prevent tab switches."))?l:{default:()=>[l]})]})])}}})},K={tags:["snapshot"],parameters:{snapshot:{viewports:["md","xl"]},docs:{source:{code:`<NeoTabs color="blue">
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
</NeoTabs>`}}},render:n=>v({name:"WithRichContentRender",setup(){const a=[{title:"Getting Started",description:"Everything you need to know to get up and running quickly."},{title:"Advanced Patterns",description:"Deep dives into architecture, performance, and best practices."},{title:"API Reference",description:"Complete documentation of every prop, slot, and emitted event."}];return()=>{let e,o;return t(f,n,{default:()=>[t(r,{id:"articles",label:"Articles"},{default:()=>[t("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",paddingBlockStart:"8px"}},[a.map(l=>t(Da,{key:l.title,color:"grey",title:l.title,description:l.description,imageSrc:"https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover",imageAlt:`${l.title} cover`,size:"small"},null))])]}),t(r,{id:"videos",label:"Videos"},d(e=b("Videos","Video tutorials and walkthroughs will appear here."))?e:{default:()=>[e]}),t(r,{id:"examples",label:"Examples"},d(o=b("Examples","Live code examples and interactive sandboxes."))?o:{default:()=>[o]})]})}}})},L={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]},docs:{source:{code:`<!-- Constrain the container width to trigger the overflow "More" dropdown -->
<div style="max-inline-size: 480px;">
  <NeoTabs color="blue">
${X(Ma,2)}
  </NeoTabs>
</div>`}}},render:n=>v({name:"ManyTabsRender",setup(){const a=[{id:"tab1",label:"Overview"},{id:"tab2",label:"Analytics"},{id:"tab3",label:"Reports"},{id:"tab4",label:"Settings"},{id:"tab5",label:"Integrations"},{id:"tab6",label:"Permissions"},{id:"tab7",label:"Billing"},{id:"tab8",label:"Audit Log"}];return()=>{let e;return t("div",{style:{maxInlineSize:"480px"}},[t(f,n,d(e=a.map(o=>{let l;return t(r,{key:o.id,id:o.id,label:o.label},d(l=b(o.label,`Content for the ${o.label} section.`))?l:{default:()=>[l]})}))?e:{default:()=>[e]})])}}})},G={tags:["no-test"],parameters:{docs:{source:{code:`<div style="display: flex; flex-direction: column; gap: 32px;">
${ie("underline")}

${ie("pills")}

${ie("filled")}
</div>`}}},render:n=>v({name:"AllVariantsRender",setup(){const a=["underline","pills","filled"];return()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"32px"}},[a.map(e=>{let o,l,c;return t("div",{key:e},[t("p",{style:{color:"var(--neo-color-grey500)",fontSize:"12px",fontWeight:600,letterSpacing:"0.08em",marginBlockEnd:"8px",textTransform:"uppercase"}},[e]),t(f,da(n,{variant:e}),{default:()=>[t(r,{id:`${e}-a`,label:"Overview"},d(o=b("Overview","Content for the overview tab."))?o:{default:()=>[o]}),t(r,{id:`${e}-b`,label:"Details"},d(l=b("Details","Content for the details tab."))?l:{default:()=>[l]}),t(r,{id:`${e}-c`,label:"History"},d(c=b("History","Content for the history tab."))?c:{default:()=>[c]})]})])})])}})},J={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]},docs:{source:{code:`<div class="u-onDark" style="background: #000; padding: 24px;">
  <NeoTabs color="blue">
${X(k,2)}
  </NeoTabs>
</div>`}}},render:g.render},Y={tags:["!dev"],render:n=>v({name:"InteractionRender",setup(){return()=>t(f,n,{default:()=>[t(r,{id:"overview",label:"Overview"},{default:()=>[t("p",{"data-testid":"panel-overview"},[Z("Overview panel content")])]}),t(r,{id:"details",label:"Details"},{default:()=>[t("p",{"data-testid":"panel-details"},[Z("Details panel content")])]}),t(r,{id:"history",label:"History"},{default:()=>[t("p",{"data-testid":"panel-history"},[Z("History panel content")])]})]})}}),play:async({canvasElement:n,step:a})=>{const e=Va(n);await a("First tab is active by default",async()=>{await O(()=>{_(e.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","true")})}),await a("Click Details tab to activate it",async()=>{await E.click(e.getByRole("tab",{name:"Details"})),await O(()=>{_(e.getByRole("tab",{name:"Details"})).toHaveAttribute("aria-selected","true"),_(e.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","false")})}),await a("Arrow key moves to next tab",async()=>{e.getByRole("tab",{name:"Details"}).focus(),await E.keyboard("{ArrowRight}"),await O(()=>{_(e.getByRole("tab",{name:"History"})).toHaveAttribute("aria-selected","true")})}),await a("Home key jumps to first tab",async()=>{await E.keyboard("{Home}"),await O(()=>{_(e.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","true")})}),await a("End key jumps to last tab",async()=>{await E.keyboard("{End}"),await O(()=>{_(e.getByRole("tab",{name:"History"})).toHaveAttribute("aria-selected","true")})})}};var he,ye,Te;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Te=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var Ne,we,xe;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(xe=(we=B.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Pe,ke,Ce;V.parameters={...V.parameters,docs:{...(Pe=V.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ce=(ke=V.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var De,Se,_e;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(_e=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:_e.source}}};var Ae,$e,Re;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Re=($e=W.parameters)==null?void 0:$e.docs)==null?void 0:Re.source}}};var Oe,ze,He;j.parameters={...j.parameters,docs:{...(Oe=j.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(He=(ze=j.parameters)==null?void 0:ze.docs)==null?void 0:He.source}}};var Ie,Ee,Be;M.parameters={...M.parameters,docs:{...(Ie=M.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Be=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var Ve,qe,We;U.parameters={...U.parameters,docs:{...(Ve=U.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(We=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:We.source}}};var je,Me,Ue;F.parameters={...F.parameters,docs:{...(je=F.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ue=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Ue.source}}};var Fe,Ke,Le;K.parameters={...K.parameters,docs:{...(Fe=K.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Le=(Ke=K.parameters)==null?void 0:Ke.docs)==null?void 0:Le.source}}};var Ge,Je,Ye;L.parameters={...L.parameters,docs:{...(Ge=L.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ye=(Je=L.parameters)==null?void 0:Je.docs)==null?void 0:Ye.source}}};var Ze,Qe,Xe;G.parameters={...G.parameters,docs:{...(Ze=G.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=G.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var ea,aa,ta;J.parameters={...J.parameters,docs:{...(ea=J.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(ta=(aa=J.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,sa,oa;Y.parameters={...Y.parameters,docs:{...(na=Y.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(oa=(sa=Y.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};const rt=["Default","Pills","Filled","Vertical","Small","Large","FullWidth","WithDisabledTab","Controlled","WithRichContent","ManyTabs","AllVariants","OnDark","Interaction"];export{G as AllVariants,F as Controlled,g as Default,V as Filled,M as FullWidth,Y as Interaction,j as Large,L as ManyTabs,J as OnDark,B as Pills,W as Small,q as Vertical,U as WithDisabledTab,K as WithRichContent,rt as __namedExportsOrder,it as default};
