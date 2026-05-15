import{d as w,f as A,Q as vo,x as m,y as p,v as T,A as C,F as se,P as ne,B as k,u as d,a as J,z as re,Y as ko,L as fo,t as No,w as Ro,N as To,c as l,m as b,r as V,i as Co}from"./iframe-TBjKMCPs.js";import{g as le,_ as So}from"./_plugin-vue_export-helper-DerOYOQE.js";import{N as xo}from"./NeoBadge-DPRiU4fN.js";import{N as Bo}from"./NeoProgressBar-ckL6wF2p.js";import{_ as Ao}from"./NeoIconButton-nntuH3jK.js";import{D as ae}from"./defaultIcons-D04_0buZ.js";import{N as Ho}from"./NeoButton-BKBJ-vMt.js";import"./preload-helper-Dp1pzeXC.js";import"./NeoIcon-DBm88EAs.js";import"./iconStrings-DsK5_d8D.js";import"./useButton-pLNRenNY.js";const Do=["role"],Lo={key:0,class:"NeoTable-caption"},Io=["role"],zo=["role"],_o=["role","onClick","onKeydown"],Wo={class:"NeoTable-header-content"},$o=["role"],qo=["role"],Po=["tabindex","role","onClick","onKeydown"],Eo=["role"],Mo={key:0},jo=["colspan"],G=w({__name:"NeoTable",props:{columns:{},rows:{},caption:{},color:{default:"grey"},size:{default:"default"},striped:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!0},stickyHeader:{type:Boolean,default:!1},rowHref:{},sortBy:{},sortDirection:{},highlightRow:{},mobileLayout:{default:"scroll"},headerAxis:{default:"column"}},emits:["sort-change","row-click"],setup(s,{emit:a}){const e=s,i=a,N=A(()=>`NeoTable-wrapper NeoTable-wrapper--${e.mobileLayout==="cards"?"cards":"scroll"}`),X=A(()=>{const o=le({component:"NeoTable",modifiers:[e.size??"default",e.stickyHeader?"stickyHeader":""]}),t=le({component:"Themed",modifiers:[e.color??"grey"]});return`${o} ${t}`}),y=vo(),h=A(()=>!!y["row-action"]),Z=A(()=>e.columns.length+(h.value?1:0)),ee=o=>["NeoTable-header",`NeoTable-header--align-${o.align??"start"}`,o.sortable?"NeoTable-header--sortable":""].filter(Boolean).join(" "),v=o=>e.headerAxis==="row"&&o===0,oe=(o,t)=>["NeoTable-cell",v(t)?"NeoTable-row-header":"",`NeoTable-cell--align-${o.align??"start"}`,o.truncate?"NeoTable-cell--truncate":""].filter(Boolean).join(" "),go=(o,t)=>{var n;return["NeoTable-row",e.hoverable?"NeoTable-row--hoverable":"",e.striped&&t%2===1?"NeoTable-row--striped":"",(n=e.highlightRow)!=null&&n.call(e,o)?"NeoTable-row--highlighted":"",x(o)?"NeoTable-row--clickable":""].filter(Boolean).join(" ")},yo=o=>e.sortBy!==o?"NeoTable-sort-icon NeoTable-sort-icon--inactive":`NeoTable-sort-icon NeoTable-sort-icon--${e.sortDirection??"asc"}`,x=o=>!!e.rowHref&&typeof o[e.rowHref]=="string",te=o=>{const t=e.sortBy===o&&e.sortDirection==="asc"?"desc":"asc";i("sort-change",o,t)},bo=(o,t)=>{if(x(o)){const n=o[e.rowHref];t.ctrlKey||t.metaKey?window.open(n,"_blank"):window.location.href=n}e.hoverable&&i("row-click",o)},ho=(o,t)=>{x(t)&&(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),window.location.href=t[e.rowHref])};return(o,t)=>(d(),m("div",{class:k(N.value)},[p("table",{class:k(X.value),role:e.mobileLayout==="cards"?"table":void 0},[e.caption||o.$slots.caption?(d(),m("caption",Lo,[T(o.$slots,"caption",{},()=>[J(re(e.caption),1)],!0)])):C("",!0),p("thead",{class:"NeoTable-head",role:e.mobileLayout==="cards"?"rowgroup":void 0},[p("tr",{role:e.mobileLayout==="cards"?"row":void 0},[(d(!0),m(se,null,ne(e.columns,n=>(d(),m("th",{key:n.key,scope:"col",class:k(ee(n)),style:fo(n.width?{width:n.width}:void 0),role:e.mobileLayout==="cards"?"columnheader":void 0,onClick:R=>n.sortable&&te(n.key),onKeydown:ko(R=>n.sortable&&te(n.key),["enter"])},[T(o.$slots,`header:${n.key}`,{column:n},()=>[p("span",Wo,[p("span",null,re(n.label),1),n.sortable?(d(),m("span",{key:0,class:k(yo(n.key)),"aria-hidden":"true"},[...t[0]||(t[0]=[p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[p("polyline",{points:"6 9 12 15 18 9"})],-1)])],2)):C("",!0)])],!0)],46,_o))),128)),o.$slots["row-action"]?(d(),m("th",{key:0,scope:"col",class:"NeoTable-header NeoTable-header--action",role:e.mobileLayout==="cards"?"columnheader":void 0},[...t[1]||(t[1]=[p("span",{class:"sr-only"},"Actions",-1)])],8,$o)):C("",!0)],8,zo)],8,Io),p("tbody",{role:e.mobileLayout==="cards"?"rowgroup":void 0},[(d(!0),m(se,null,ne(e.rows,(n,R)=>(d(),m("tr",{key:R,class:k(go(n,R)),tabindex:x(n)?0:void 0,role:e.mobileLayout==="cards"?"row":void 0,onClick:u=>bo(n,u),onKeydown:u=>ho(u,n)},[(d(!0),m(se,null,ne(e.columns,(u,B)=>(d(),No(To(v(B)?"th":"td"),{key:u.key,scope:v(B)?"row":void 0,class:k(oe(u,B)),"data-label":u.label,role:e.mobileLayout==="cards"?v(B)?"rowheader":"cell":void 0},{default:Ro(()=>[T(o.$slots,`cell:${u.key}`,{row:n,value:n[u.key],column:u,index:R},()=>[J(re(n[u.key]),1)],!0)]),_:2},1032,["scope","class","data-label","role"]))),128)),o.$slots["row-action"]?(d(),m("td",{key:0,class:"NeoTable-cell NeoTable-cell--action",role:e.mobileLayout==="cards"?"cell":void 0},[T(o.$slots,"row-action",{row:n},void 0,!0)],8,Eo)):C("",!0)],42,Po))),128)),e.rows.length===0?(d(),m("tr",Mo,[p("td",{colspan:Z.value,class:"NeoTable-empty-cell"},[T(o.$slots,"empty",{},()=>[t[2]||(t[2]=p("span",{class:"NeoTable-empty-message"},"No data available",-1))],!0)],8,jo)])):C("",!0)],8,qo)],10,Do)],2))}}),g=So(G,[["__scopeId","data-v-630a8074"]]);G.__docgenInfo=Object.assign({displayName:G.name??G.__name},{exportName:"default",displayName:"NeoTable",type:1,props:[{name:"columns",global:!1,description:"",tags:[],required:!0,type:"NeoTableColumn[]",declarations:[],schema:{kind:"array",type:"NeoTableColumn[]"}},{name:"rows",global:!1,description:"",tags:[],required:!0,type:"Record<string, unknown>[]",declarations:[],schema:{kind:"array",type:"Record<string, unknown>[]"}},{name:"caption",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"color",global:!1,description:"",tags:[],required:!1,type:"SurfaceColor",declarations:[],schema:{kind:"array",type:"SurfaceColor"},default:'"grey"'},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"default" | "compact" | "spacious"',declarations:[],schema:{kind:"enum",type:'"default" | "compact" | "spacious"',schema:['"default"','"compact"','"spacious"']},default:'"default"'},{name:"striped",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"hoverable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"stickyHeader",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"rowHref",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"sortBy",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"sortDirection",global:!1,description:"",tags:[],required:!1,type:'"asc" | "desc"',declarations:[],schema:{kind:"enum",type:'"asc" | "desc"',schema:['"asc"','"desc"']}},{name:"highlightRow",global:!1,description:"",tags:[],required:!1,type:"(row: Record<string, unknown>) => boolean",declarations:[],schema:{kind:"event",type:"(row: Record<string, unknown>): boolean"}},{name:"mobileLayout",global:!1,description:"",tags:[],required:!1,type:'"scroll" | "cards"',declarations:[],schema:{kind:"enum",type:'"scroll" | "cards"',schema:['"scroll"','"cards"']},default:'"scroll"'},{name:"headerAxis",global:!1,description:"",tags:[],required:!1,type:'"column" | "row"',declarations:[],schema:{kind:"enum",type:'"column" | "row"',schema:['"column"','"row"']},default:'"column"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"sort-change",description:"Emitted when a sortable header is clicked.",tags:[],type:'[key: string, direction: "asc" | "desc"]',signature:'(event: "sort-change", key: string, direction: "asc" | "desc"): void',declarations:[],schema:["string",{kind:"enum",type:'"asc" | "desc"',schema:['"asc"','"desc"']}]},{name:"row-click",description:"Emitted when a hoverable row is clicked.",tags:[],type:"[row: Record<string, unknown>]",signature:'(event: "row-click", row: Record<string, unknown>): void',declarations:[],schema:["Record<string, unknown>"]}],slots:[{name:"caption",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"row-action",type:"{ row: Record<string, unknown>; }",description:"",declarations:[],schema:{kind:"object",type:"{ row: Record<string, unknown>; }"}},{name:"empty",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & { [x: `header:${string}`]: (props: { column: NeoTableColumn; }) => any; } & { [x: `cell:${string}`]: (props: { row: Record<string, unknown>; value: unknown; column: NeoTableColumn; index: number; }) => any; } & { ...; } & { ...; } & { ...; }",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & { [x: `header:${string}`]: (props: { column: NeoTableColumn; }) => any; } & { [x: `cell:${string}`]: (props: { row: Record<string, unknown>; value: unknown; column: NeoTableColumn; index: number; }) => any; } & { ...; } & { ...; } & { ...; }"}},{name:"size",type:'"default" | "compact" | "spacious"',description:"",declarations:[],schema:{kind:"enum",type:'"default" | "compact" | "spacious"',schema:['"default"','"compact"','"spacious"']}},{name:"color",type:"any",description:"",declarations:[],schema:"any"},{name:"striped",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"hoverable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"stickyHeader",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"mobileLayout",type:'"scroll" | "cards"',description:"",declarations:[],schema:{kind:"enum",type:'"scroll" | "cards"',schema:['"scroll"','"cards"']}},{name:"headerAxis",type:'"column" | "row"',description:"",declarations:[],schema:{kind:"enum",type:'"column" | "row"',schema:['"column"','"row"']}},{name:"caption",type:"string",description:"",declarations:[],schema:"string"},{name:"columns",type:"NeoTableColumn[]",description:"",declarations:[],schema:{kind:"array",type:"NeoTableColumn[]"}},{name:"rows",type:"Record<string, unknown>[]",description:"",declarations:[],schema:{kind:"array",type:"Record<string, unknown>[]"}},{name:"rowHref",type:"string",description:"",declarations:[],schema:"string"},{name:"sortBy",type:"string",description:"",declarations:[],schema:"string"},{name:"sortDirection",type:'"asc" | "desc"',description:"",declarations:[],schema:{kind:"enum",type:'"asc" | "desc"',schema:['"asc"','"desc"']}},{name:"highlightRow",type:"(row: Record<string, unknown>) => boolean",description:"",declarations:[],schema:{kind:"event",type:"(row: Record<string, unknown>): boolean"}}],sourceFiles:"/home/runner/work/NeoMateria/NeoMateria/src/components/02-molecules/Table/NeoTable.vue"});const Uo=["compact","default","spacious"],Fo=["column","row"],{expect:f,userEvent:ce,waitFor:ie,within:Ko}=__STORYBOOK_MODULE_TEST__;function Oo(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!Co(s)}const as={title:"Molecules/NeoTable",component:g,tags:["autodocs"],argTypes:{size:{control:"select",options:Uo,description:"Controls cell padding and font size.",table:{category:"Appearance"}},color:{control:"select",description:"Accent color used for the table header and highlighted rows.",table:{category:"Appearance"}},striped:{control:"boolean",description:"Alternating row backgrounds for easier horizontal scanning.",table:{category:"Appearance"}},hoverable:{control:"boolean",description:"Highlight the row under the pointer and emit `row-click` on click.",table:{category:"Behavior"}},stickyHeader:{control:"boolean",description:"Freeze the header row so it stays visible when the table scrolls vertically.",table:{category:"Behavior"}},mobileLayout:{control:"select",options:["scroll","cards"],description:"`scroll`: the table scrolls horizontally on narrow viewports. `cards`: rows become labeled cards below the `bp-md` breakpoint.",table:{category:"Behavior"}},rowHref:{control:!1,description:"Key in the row data whose value is the URL. When set, matching rows become keyboard-accessible links.",table:{category:"Behavior"}},sortBy:{control:!1,description:"Controlled sort column key.",table:{category:"Sorting"}},sortDirection:{control:"select",options:["asc","desc"],description:"Controlled sort direction.",table:{category:"Sorting"}},highlightRow:{control:!1,description:"Predicate `(row) => boolean`. Rows that return true receive an accent background.",table:{category:"Appearance"}},headerAxis:{control:"select",options:Fo,description:'`column` (default): first row is the column header. `row`: first column of each data row becomes `<th scope="row">` — use when rows represent named entities (countries, products, people).',table:{category:"Behavior"}}},args:{color:"blue",size:"default",striped:!1,hoverable:!0,stickyHeader:!1,mobileLayout:"scroll",headerAxis:"column"},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},c=[{key:"name",label:"Name",sortable:!0},{key:"role",label:"Role"},{key:"department",label:"Department",sortable:!0},{key:"status",label:"Status"},{key:"joinedYear",label:"Year",align:"end",sortable:!0}],r=[{name:"Alice Müller",role:"Lead Designer",department:"Product",status:"Active",progress:90,joinedYear:2019,profileUrl:"#"},{name:"Ben Nakamura",role:"Frontend Dev",department:"Engineering",status:"Active",progress:72,joinedYear:2021,profileUrl:"#"},{name:"Clara Santos",role:"Data Analyst",department:"Analytics",status:"Away",progress:55,joinedYear:2022,profileUrl:"#"},{name:"David Kim",role:"Product Manager",department:"Product",status:"Active",progress:88,joinedYear:2020,profileUrl:"#"},{name:"Eva Larsson",role:"QA Engineer",department:"Engineering",status:"Inactive",progress:30,joinedYear:2023,profileUrl:"#"}],Yo={Active:"green",Away:"amber",Inactive:"red"},H={tags:["snapshot"],args:{columns:c,rows:r},parameters:{docs:{source:{code:'<NeoTable :columns="columns" :rows="rows" color="blue" />'}}}},D={tags:["snapshot"],args:{columns:c,rows:r,striped:!0},parameters:{docs:{source:{code:'<NeoTable :columns="columns" :rows="rows" :striped="true" color="blue" />'}}}},L={tags:["snapshot"],args:{columns:c,rows:r,size:"compact"},parameters:{docs:{source:{code:'<NeoTable :columns="columns" :rows="rows" size="compact" color="blue" />'}}}},I={tags:["snapshot"],args:{columns:c,rows:r,size:"spacious"},parameters:{docs:{source:{code:'<NeoTable :columns="columns" :rows="rows" size="spacious" color="blue" />'}}}},z={tags:["snapshot"],args:{columns:c,rows:r},parameters:{docs:{source:{code:`<script setup>
const sortBy = ref('name')
const sortDirection = ref('asc')

const sortedRows = computed(() => [...rows].sort((a, b) => {
  const dir = sortDirection.value === 'asc' ? 1 : -1
  return String(a[sortBy.value]).localeCompare(String(b[sortBy.value])) * dir
}))

const handleSort = (key, direction) => {
  sortBy.value = key
  sortDirection.value = direction
}
<\/script>

<template>
  <NeoTable
    :columns="columns"
    :rows="sortedRows"
    :sort-by="sortBy"
    :sort-direction="sortDirection"
    color="blue"
    @sort-change="handleSort"
  />
</template>`}}},render:s=>w({name:"WithSortingRender",setup(){const a=V(""),e=V("asc"),i=V([...r]),N=(y,h)=>{i.value=[...r].sort((Z,ee)=>{const v=String(Z[y]),oe=String(ee[y]);return v.localeCompare(oe)*(h==="asc"?1:-1)})},X=(y,h)=>{a.value=y,e.value=h,N(y,h)};return()=>l(g,b(s,{columns:c,rows:i.value,sortBy:a.value,sortDirection:e.value,"onSort-change":X}),null)}}),play:async({canvasElement:s,step:a})=>{const e=Ko(s);await a("Click Name header to sort ascending",async()=>{await ce.click(e.getByText("Name")),await ie(()=>{const i=e.getByText("Name").closest("th");f(i==null?void 0:i.querySelector(".NeoTable-sort-icon--asc")).not.toBeNull()})}),await a("Click Name header again to sort descending",async()=>{await ce.click(e.getByText("Name")),await ie(()=>{const i=e.getByText("Name").closest("th");f(i==null?void 0:i.querySelector(".NeoTable-sort-icon--desc")).not.toBeNull()})})}},_={tags:["snapshot"],args:{columns:c,rows:r,highlightRow:s=>s.status==="Active",color:"green"},parameters:{docs:{source:{code:`<NeoTable
  :columns="columns"
  :rows="rows"
  :highlight-row="(row) => row.status === 'Active'"
  color="green"
/>`}}}},W={tags:["snapshot"],args:{columns:c,rows:r},parameters:{docs:{source:{code:`<NeoTable
  :columns="[
    { key: 'name',     label: 'Name',     sortable: true },
    { key: 'role',     label: 'Role' },
    { key: 'status',   label: 'Status' },
    { key: 'progress', label: 'Progress', align: 'start' },
  ]"
  :rows="rows"
  color="blue"
>
  <!-- Status column: render a coloured badge -->
  <template #cell:status="{ value }">
    <NeoBadge
      :color="value === 'Active' ? 'green' : value === 'Away' ? 'amber' : 'red'"
      :text="String(value)"
      variant="solid"
      size="small"
    />
  </template>

  <!-- Progress column: render a progress bar -->
  <template #cell:progress="{ value }">
    <div style="align-items: center; display: flex; gap: 8px; min-inline-size: 120px;">
      <NeoProgressBar
        :value="Number(value)"
        :aria-label="Number(value) + '% complete'"
        color="blue"
        size="small"
      />
      <span style="color: var(--neo-color-grey600); flex-shrink: 0; font-size: 13px;">{{ value }}%</span>
    </div>
  </template>
</NeoTable>`}}},render:s=>w({name:"WithSlotsRender",setup(){const a=[{key:"name",label:"Name",sortable:!0},{key:"role",label:"Role"},{key:"status",label:"Status"},{key:"progress",label:"Progress",align:"start"}];return()=>l(g,b(s,{columns:a,rows:r}),{"cell:status":({value:e})=>l(xo,{color:Yo[String(e)]??"grey",text:String(e),variant:"solid",size:"small"},null),"cell:progress":({value:e})=>l("div",{style:{alignItems:"center",display:"flex",gap:"8px",minInlineSize:"120px"}},[l(Bo,{value:Number(e),ariaLabel:`${Number(e)}% complete`,color:"blue",size:"small"},null),l("span",{style:{color:"var(--neo-color-grey600)",fontSize:"13px",flexShrink:0}},[Number(e),J("%")])])})}})},$={tags:["snapshot"],args:{columns:c,rows:r,rowHref:"profileUrl",color:"blue"},parameters:{docs:{source:{code:`<!-- rowHref points to the key in row data that holds the destination URL.
     Rows that have that key become keyboard-accessible and show a pointer cursor. -->
<NeoTable
  :columns="columns"
  :rows="rows"
  row-href="profileUrl"
  color="blue"
/>`}}}},q={tags:["snapshot"],args:{columns:c,rows:r},parameters:{docs:{source:{code:`<!-- import { DeleteIcon } from '@neomateria/vue' -->
<!-- The #row-action slot renders in a pinned trailing column for every row. -->
<NeoTable :columns="columns" :rows="rows" color="blue">
  <template #row-action="{ row }">
    <NeoIconButton
      color="red"
      variant="ghost"
      aria-label="Delete row"
      @click.stop="rows = rows.filter(r => r !== row)"
    >
      <component :is="DeleteIcon" />
    </NeoIconButton>
  </template>
</NeoTable>`}}},render:s=>w({name:"WithRowActionRender",setup(){const a=V([...r]);return()=>l(g,b(s,{columns:c,rows:a.value}),{"row-action":({row:e})=>l(Ao,{color:"red",variant:"ghost",ariaLabel:"Delete row",onClick:i=>{i.stopPropagation(),a.value=a.value.filter(N=>N!==e)}},Oo(ae)?ae:{default:()=>[ae]})})}})},P={tags:["snapshot"],args:{columns:c,rows:[]},parameters:{docs:{source:{code:`<!-- When rows is empty the #empty slot (or default message) is shown -->
<NeoTable :columns="columns" :rows="[]" color="blue">
  <template #empty>
    <div style="align-items: center; display: flex; flex-direction: column; gap: 8px; padding: 24px 0;">
      <p>No team members found.</p>
      <NeoButton color="blue" variant="secondary" text="Add member" />
    </div>
  </template>
</NeoTable>`}}},render:s=>w({name:"WithEmptyStateRender",setup(){return()=>l(g,b(s,{columns:c,rows:[]}),{empty:()=>l("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px",padding:"24px 0"}},[l("p",null,[J("No team members found.")]),l(Ho,{color:"blue",variant:"secondary",text:"Add member"},null)])})}})},E={tags:["no-test"],args:{columns:c,rows:[...r,...r.map(s=>({...s,name:s.name+" II"})),...r.map(s=>({...s,name:s.name+" III"}))],stickyHeader:!0},parameters:{docs:{source:{code:`<!-- Wrap in a height-constrained container to see the sticky header in action -->
<div style="max-block-size: 280px; overflow-y: auto;">
  <NeoTable :columns="columns" :rows="rows" :sticky-header="true" color="blue" />
</div>`}}},render:s=>w({name:"WithStickyHeaderRender",setup(){const a=[...r,...r.map(e=>({...e,name:e.name+" II"})),...r.map(e=>({...e,name:e.name+" III"}))];return()=>l("div",{style:{blockSize:"280px",overflowY:"auto"}},[l(g,b(s,{columns:c,rows:a,stickyHeader:!0}),null)])}})},M={tags:["snapshot"],args:{columns:c,rows:r,mobileLayout:"cards"},parameters:{snapshot:{viewports:["sm"]},docs:{source:{code:`<!-- mobileLayout="cards" transforms rows into labelled cards below bp-md.
     Full table semantics are preserved so screen readers work correctly. -->
<NeoTable
  :columns="columns"
  :rows="rows"
  mobile-layout="cards"
  color="blue"
/>`}}}},j={tags:["snapshot"],args:{columns:c,rows:r,caption:"Team members by department"},parameters:{docs:{source:{code:`<NeoTable
  :columns="columns"
  :rows="rows"
  caption="Team members by department"
  color="blue"
/>`}}}},U={tags:["snapshot"],args:{columns:c,rows:r,striped:!0},globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]},docs:{source:{code:`<div class="u-onDark" style="background: #000; padding: 24px;">
  <NeoTable :columns="columns" :rows="rows" :striped="true" color="blue" />
</div>`}}}},Q=[{key:"country",label:"Country",width:"160px"},{key:"population",label:"Population",align:"end"},{key:"gdp",label:"GDP (USD)",align:"end"},{key:"growth",label:"Growth",align:"end"}],S=[{country:"Germany",population:"84.4 M",gdp:"$4.1 T",growth:"+1.2%"},{country:"France",population:"68.4 M",gdp:"$2.8 T",growth:"+0.9%"},{country:"Italy",population:"59.0 M",gdp:"$2.1 T",growth:"+0.7%"},{country:"Spain",population:"47.4 M",gdp:"$1.5 T",growth:"+2.4%"},{country:"Netherlands",population:"17.9 M",gdp:"$1.1 T",growth:"+1.8%"}],F={tags:["snapshot"],args:{columns:Q,rows:S,headerAxis:"row",color:"blue"},parameters:{docs:{source:{code:`<!-- header-axis="row": the first column cell of every data row becomes
     <th scope="row">, identifying the record. -->
<NeoTable
  :columns="columns"
  :rows="rows"
  header-axis="row"
  color="blue"
/>`}}},play:async({canvasElement:s,step:a})=>{await a('First body column cells are <th scope="row">',async()=>{const e=s.querySelectorAll('tbody th[scope="row"]');f(e).toHaveLength(S.length)}),await a("Remaining body cells are <td>",async()=>{const e=s.querySelectorAll("tbody td");f(e).toHaveLength(S.length*(Q.length-1))}),await a('Column headers remain in thead with scope="col"',async()=>{const e=s.querySelectorAll('thead th[scope="col"]');f(e).toHaveLength(Q.length)}),await a("Row header cells have NeoTable-row-header class",async()=>{const e=s.querySelectorAll("tbody .NeoTable-row-header");f(e).toHaveLength(S.length)})}},K={tags:["snapshot"],args:{columns:Q,rows:S,headerAxis:"row",mobileLayout:"cards",color:"blue"},parameters:{snapshot:{viewports:["sm"]},docs:{source:{code:`<!-- In cards layout, the row-header cell renders as the card title
     (bold, no label prefix) above the other label-value pairs. -->
<NeoTable
  :columns="columns"
  :rows="rows"
  header-axis="row"
  mobile-layout="cards"
  color="blue"
/>`}}}},de=[{key:"name",label:"الاسم",sortable:!0},{key:"role",label:"الدور"},{key:"department",label:"القسم"},{key:"status",label:"الحالة"}],ue=[{name:"فاطمة العلي",role:"مصممة رئيسية",department:"المنتج",status:"نشطة"},{name:"عمر الشريف",role:"مطور واجهات",department:"الهندسة",status:"نشط"},{name:"ليلى حسن",role:"محللة بيانات",department:"التحليلات",status:"غائبة"},{name:"كريم منصور",role:"مدير منتج",department:"المنتج",status:"نشط"},{name:"نور إبراهيم",role:"مهندسة جودة",department:"الهندسة",status:"غير نشطة"}],me=[{key:"country",label:"الدولة",width:"200px"},{key:"population",label:"السكان",align:"end"},{key:"gdp",label:"الناتج المحلي",align:"end"},{key:"growth",label:"النمو",align:"end"}],pe=[{country:"المملكة العربية السعودية",population:"٣٦.٤ م",gdp:"١.١ تريليون $",growth:"+٣.٠٪"},{country:"الإمارات العربية المتحدة",population:"٩.٩ م",gdp:"٥٠٧ مليار $",growth:"+٣.٤٪"},{country:"مصر",population:"١٠٤.٢ م",gdp:"٣٨٧ مليار $",growth:"+٣.٨٪"},{country:"العراق",population:"٤٢.٦ م",gdp:"٢٦٨ مليار $",growth:"+٤.٥٪"},{country:"الأردن",population:"١٠.٢ م",gdp:"٥٠ مليار $",growth:"+٢.٦٪"}],O={tags:["snapshot"],args:{columns:de,rows:ue},parameters:{snapshot:{viewports:["sm","xl"]},docs:{source:{code:`<div dir="rtl">
  <NeoTable :columns="columns" :rows="rows" color="blue" />
</div>`}}},render:s=>w({name:"RTLRender",setup(){return()=>l("div",{dir:"rtl"},[l(g,b(s,{columns:de,rows:ue,color:"blue"}),null)])}})},Y={tags:["snapshot"],args:{columns:me,rows:pe,headerAxis:"row"},parameters:{snapshot:{viewports:["sm","xl"]},docs:{source:{code:`<div dir="rtl">
  <NeoTable :columns="columns" :rows="rows" header-axis="row" color="blue" />
</div>`}}},render:s=>w({name:"RTLWithRowHeadersRender",setup(){return()=>l("div",{dir:"rtl"},[l(g,b(s,{columns:me,rows:pe,headerAxis:"row",color:"blue"}),null)])}})};var we,ge,ye;H.parameters={...H.parameters,docs:{...(we=H.parameters)==null?void 0:we.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: sampleRows as unknown as Record<string, unknown>[]
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTable :columns="columns" :rows="rows" color="blue" />\`
      }
    }
  }
}`,...(ye=(ge=H.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var be,he,ve;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: sampleRows as unknown as Record<string, unknown>[],
    striped: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTable :columns="columns" :rows="rows" :striped="true" color="blue" />\`
      }
    }
  }
}`,...(ve=(he=D.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ke,fe,Ne;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: sampleRows as unknown as Record<string, unknown>[],
    size: 'compact'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTable :columns="columns" :rows="rows" size="compact" color="blue" />\`
      }
    }
  }
}`,...(Ne=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:Ne.source}}};var Re,Te,Ce;I.parameters={...I.parameters,docs:{...(Re=I.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: sampleRows as unknown as Record<string, unknown>[],
    size: 'spacious'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTable :columns="columns" :rows="rows" size="spacious" color="blue" />\`
      }
    }
  }
}`,...(Ce=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Se,xe,Be;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: sampleRows as unknown as Record<string, unknown>[]
  },
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const sortBy = ref('name')
const sortDirection = ref('asc')

const sortedRows = computed(() => [...rows].sort((a, b) => {
  const dir = sortDirection.value === 'asc' ? 1 : -1
  return String(a[sortBy.value]).localeCompare(String(b[sortBy.value])) * dir
}))

const handleSort = (key, direction) => {
  sortBy.value = key
  sortDirection.value = direction
}
<\/script>

<template>
  <NeoTable
    :columns="columns"
    :rows="sortedRows"
    :sort-by="sortBy"
    :sort-direction="sortDirection"
    color="blue"
    @sort-change="handleSort"
  />
</template>\`
      }
    }
  },
  render: (args: NeoTableProps) => defineComponent({
    name: 'WithSortingRender',
    setup() {
      const sortBy = ref('');
      const sortDirection = ref<'asc' | 'desc'>('asc');
      const sortedRows = ref([...sampleRows]);
      const applySort = (key: string, direction: 'asc' | 'desc') => {
        sortedRows.value = [...sampleRows].sort((rowA, rowB) => {
          const valueA = String(rowA[key as keyof TeamMember]);
          const valueB = String(rowB[key as keyof TeamMember]);
          return valueA.localeCompare(valueB) * (direction === 'asc' ? 1 : -1);
        });
      };
      const handleSort = (key: string, direction: 'asc' | 'desc') => {
        sortBy.value = key;
        sortDirection.value = direction;
        applySort(key, direction);
      };
      return () => <NeoTable {...args} columns={sampleColumns} rows={sortedRows.value as unknown as Record<string, unknown>[]} sortBy={sortBy.value} sortDirection={sortDirection.value} onSort-change={handleSort} />;
    }
  }),
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Click Name header to sort ascending', async () => {
      await userEvent.click(canvas.getByText('Name'));
      await waitFor(() => {
        const header = canvas.getByText('Name').closest('th');
        expect(header?.querySelector('.NeoTable-sort-icon--asc')).not.toBeNull();
      });
    });
    await step('Click Name header again to sort descending', async () => {
      await userEvent.click(canvas.getByText('Name'));
      await waitFor(() => {
        const header = canvas.getByText('Name').closest('th');
        expect(header?.querySelector('.NeoTable-sort-icon--desc')).not.toBeNull();
      });
    });
  }
}`,...(Be=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Ae,He,De;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: sampleRows as unknown as Record<string, unknown>[],
    highlightRow: row => (row as unknown as TeamMember).status === 'Active',
    color: 'green'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTable
  :columns="columns"
  :rows="rows"
  :highlight-row="(row) => row.status === 'Active'"
  color="green"
/>\`
      }
    }
  }
}`,...(De=(He=_.parameters)==null?void 0:He.docs)==null?void 0:De.source}}};var Le,Ie,ze;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: sampleRows as unknown as Record<string, unknown>[]
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTable
  :columns="[
    { key: 'name',     label: 'Name',     sortable: true },
    { key: 'role',     label: 'Role' },
    { key: 'status',   label: 'Status' },
    { key: 'progress', label: 'Progress', align: 'start' },
  ]"
  :rows="rows"
  color="blue"
>
  <!-- Status column: render a coloured badge -->
  <template #cell:status="{ value }">
    <NeoBadge
      :color="value === 'Active' ? 'green' : value === 'Away' ? 'amber' : 'red'"
      :text="String(value)"
      variant="solid"
      size="small"
    />
  </template>

  <!-- Progress column: render a progress bar -->
  <template #cell:progress="{ value }">
    <div style="align-items: center; display: flex; gap: 8px; min-inline-size: 120px;">
      <NeoProgressBar
        :value="Number(value)"
        :aria-label="Number(value) + '% complete'"
        color="blue"
        size="small"
      />
      <span style="color: var(--neo-color-grey600); flex-shrink: 0; font-size: 13px;">{{ value }}%</span>
    </div>
  </template>
</NeoTable>\`
      }
    }
  },
  render: (args: NeoTableProps) => defineComponent({
    name: 'WithSlotsRender',
    setup() {
      const richColumns: NeoTableColumn[] = [{
        key: 'name',
        label: 'Name',
        sortable: true
      }, {
        key: 'role',
        label: 'Role'
      }, {
        key: 'status',
        label: 'Status'
      }, {
        key: 'progress',
        label: 'Progress',
        align: 'start'
      }];
      return () => <NeoTable {...args} columns={richColumns} rows={sampleRows as unknown as Record<string, unknown>[]} v-slots={{
        'cell:status': ({
          value
        }: {
          value: unknown;
        }) => <NeoBadge color={statusColorMap[String(value)] ?? 'grey'} text={String(value)} variant="solid" size="small" />,
        'cell:progress': ({
          value
        }: {
          value: unknown;
        }) => <div style={{
          alignItems: 'center',
          display: 'flex',
          gap: '8px',
          minInlineSize: '120px'
        }}>
                                    <NeoProgressBar value={Number(value)} ariaLabel={\`\${Number(value)}% complete\`} color="blue" size="small" />
                                    <span style={{
            color: 'var(--neo-color-grey600)',
            fontSize: '13px',
            flexShrink: 0
          }}>
                                        {Number(value)}%
                                    </span>
                                </div>
      }} />;
    }
  })
}`,...(ze=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:ze.source}}};var _e,We,$e;$.parameters={...$.parameters,docs:{...(_e=$.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: sampleRows as unknown as Record<string, unknown>[],
    rowHref: 'profileUrl',
    color: 'blue'
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- rowHref points to the key in row data that holds the destination URL.
     Rows that have that key become keyboard-accessible and show a pointer cursor. -->
<NeoTable
  :columns="columns"
  :rows="rows"
  row-href="profileUrl"
  color="blue"
/>\`
      }
    }
  }
}`,...($e=(We=$.parameters)==null?void 0:We.docs)==null?void 0:$e.source}}};var qe,Pe,Ee;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: sampleRows as unknown as Record<string, unknown>[]
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- import { DeleteIcon } from '@neomateria/vue' -->
<!-- The #row-action slot renders in a pinned trailing column for every row. -->
<NeoTable :columns="columns" :rows="rows" color="blue">
  <template #row-action="{ row }">
    <NeoIconButton
      color="red"
      variant="ghost"
      aria-label="Delete row"
      @click.stop="rows = rows.filter(r => r !== row)"
    >
      <component :is="DeleteIcon" />
    </NeoIconButton>
  </template>
</NeoTable>\`
      }
    }
  },
  render: (args: NeoTableProps) => defineComponent({
    name: 'WithRowActionRender',
    setup() {
      const rows = ref([...sampleRows] as unknown as Record<string, unknown>[]);
      return () => <NeoTable {...args} columns={sampleColumns} rows={rows.value} v-slots={{
        'row-action': ({
          row
        }: {
          row: Record<string, unknown>;
        }) => <NeoIconButton color="red" variant="ghost" ariaLabel="Delete row" onClick={(event: MouseEvent) => {
          event.stopPropagation();
          rows.value = rows.value.filter(tableRow => tableRow !== row);
        }}>
                                    {DeleteIcon}
                                </NeoIconButton>
      }} />;
    }
  })
}`,...(Ee=(Pe=q.parameters)==null?void 0:Pe.docs)==null?void 0:Ee.source}}};var Me,je,Ue;P.parameters={...P.parameters,docs:{...(Me=P.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: []
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- When rows is empty the #empty slot (or default message) is shown -->
<NeoTable :columns="columns" :rows="[]" color="blue">
  <template #empty>
    <div style="align-items: center; display: flex; flex-direction: column; gap: 8px; padding: 24px 0;">
      <p>No team members found.</p>
      <NeoButton color="blue" variant="secondary" text="Add member" />
    </div>
  </template>
</NeoTable>\`
      }
    }
  },
  render: (args: NeoTableProps) => defineComponent({
    name: 'WithEmptyStateRender',
    setup() {
      return () => <NeoTable {...args} columns={sampleColumns} rows={[]} v-slots={{
        empty: () => <div style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '24px 0'
        }}>
                                    <p>No team members found.</p>
                                    <NeoButton color="blue" variant="secondary" text="Add member" />
                                </div>
      }} />;
    }
  })
}`,...(Ue=(je=P.parameters)==null?void 0:je.docs)==null?void 0:Ue.source}}};var Fe,Ke,Oe;E.parameters={...E.parameters,docs:{...(Fe=E.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    columns: sampleColumns,
    rows: [...sampleRows, ...sampleRows.map(row => ({
      ...row,
      name: row.name + ' II'
    })), ...sampleRows.map(row => ({
      ...row,
      name: row.name + ' III'
    }))] as unknown as Record<string, unknown>[],
    stickyHeader: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Wrap in a height-constrained container to see the sticky header in action -->
<div style="max-block-size: 280px; overflow-y: auto;">
  <NeoTable :columns="columns" :rows="rows" :sticky-header="true" color="blue" />
</div>\`
      }
    }
  },
  render: (args: NeoTableProps) => defineComponent({
    name: 'WithStickyHeaderRender',
    setup() {
      const manyRows = [...sampleRows, ...sampleRows.map(row => ({
        ...row,
        name: row.name + ' II'
      })), ...sampleRows.map(row => ({
        ...row,
        name: row.name + ' III'
      }))];
      return () => <div style={{
        blockSize: '280px',
        overflowY: 'auto'
      }}>
                        <NeoTable {...args} columns={sampleColumns} rows={manyRows as unknown as Record<string, unknown>[]} stickyHeader />
                    </div>;
    }
  })
}`,...(Oe=(Ke=E.parameters)==null?void 0:Ke.docs)==null?void 0:Oe.source}}};var Ye,Ve,Ge;M.parameters={...M.parameters,docs:{...(Ye=M.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: sampleRows as unknown as Record<string, unknown>[],
    mobileLayout: 'cards'
  },
  parameters: {
    snapshot: {
      viewports: ['sm']
    },
    docs: {
      source: {
        code: \`<!-- mobileLayout="cards" transforms rows into labelled cards below bp-md.
     Full table semantics are preserved so screen readers work correctly. -->
<NeoTable
  :columns="columns"
  :rows="rows"
  mobile-layout="cards"
  color="blue"
/>\`
      }
    }
  }
}`,...(Ge=(Ve=M.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var Qe,Je,Xe;j.parameters={...j.parameters,docs:{...(Qe=j.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: sampleRows as unknown as Record<string, unknown>[],
    caption: 'Team members by department'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoTable
  :columns="columns"
  :rows="rows"
  caption="Team members by department"
  color="blue"
/>\`
      }
    }
  }
}`,...(Xe=(Je=j.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ze,eo,oo;U.parameters={...U.parameters,docs:{...(Ze=U.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: sampleColumns,
    rows: sampleRows as unknown as Record<string, unknown>[],
    striped: true
  },
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
  <NeoTable :columns="columns" :rows="rows" :striped="true" color="blue" />
</div>\`
      }
    }
  }
}`,...(oo=(eo=U.parameters)==null?void 0:eo.docs)==null?void 0:oo.source}}};var so,no,ro;F.parameters={...F.parameters,docs:{...(so=F.parameters)==null?void 0:so.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: countryColumns,
    rows: countryRows,
    headerAxis: 'row',
    color: 'blue'
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- header-axis="row": the first column cell of every data row becomes
     <th scope="row">, identifying the record. -->
<NeoTable
  :columns="columns"
  :rows="rows"
  header-axis="row"
  color="blue"
/>\`
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await step('First body column cells are <th scope="row">', async () => {
      const rowHeaders = canvasElement.querySelectorAll('tbody th[scope="row"]');
      expect(rowHeaders).toHaveLength(countryRows.length);
    });
    await step('Remaining body cells are <td>', async () => {
      const dataCells = canvasElement.querySelectorAll('tbody td');
      expect(dataCells).toHaveLength(countryRows.length * (countryColumns.length - 1));
    });
    await step('Column headers remain in thead with scope="col"', async () => {
      const colHeaders = canvasElement.querySelectorAll('thead th[scope="col"]');
      expect(colHeaders).toHaveLength(countryColumns.length);
    });
    await step('Row header cells have NeoTable-row-header class', async () => {
      const rowHeaders = canvasElement.querySelectorAll('tbody .NeoTable-row-header');
      expect(rowHeaders).toHaveLength(countryRows.length);
    });
  }
}`,...(ro=(no=F.parameters)==null?void 0:no.docs)==null?void 0:ro.source}}};var ao,to,lo;K.parameters={...K.parameters,docs:{...(ao=K.parameters)==null?void 0:ao.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: countryColumns,
    rows: countryRows,
    headerAxis: 'row',
    mobileLayout: 'cards',
    color: 'blue'
  },
  parameters: {
    snapshot: {
      viewports: ['sm']
    },
    docs: {
      source: {
        code: \`<!-- In cards layout, the row-header cell renders as the card title
     (bold, no label prefix) above the other label-value pairs. -->
<NeoTable
  :columns="columns"
  :rows="rows"
  header-axis="row"
  mobile-layout="cards"
  color="blue"
/>\`
      }
    }
  }
}`,...(lo=(to=K.parameters)==null?void 0:to.docs)==null?void 0:lo.source}}};var co,io,uo;O.parameters={...O.parameters,docs:{...(co=O.parameters)==null?void 0:co.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: rtlTeamColumns,
    rows: rtlTeamRows
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    },
    docs: {
      source: {
        code: \`<div dir="rtl">
  <NeoTable :columns="columns" :rows="rows" color="blue" />
</div>\`
      }
    }
  },
  render: (args: NeoTableProps) => defineComponent({
    name: 'RTLRender',
    setup() {
      return () => <div dir="rtl">
                        <NeoTable {...args} columns={rtlTeamColumns} rows={rtlTeamRows} color="blue" />
                    </div>;
    }
  })
}`,...(uo=(io=O.parameters)==null?void 0:io.docs)==null?void 0:uo.source}}};var mo,po,wo;Y.parameters={...Y.parameters,docs:{...(mo=Y.parameters)==null?void 0:mo.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    columns: rtlCountryColumns,
    rows: rtlCountryRows,
    headerAxis: 'row'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    },
    docs: {
      source: {
        code: \`<div dir="rtl">
  <NeoTable :columns="columns" :rows="rows" header-axis="row" color="blue" />
</div>\`
      }
    }
  },
  render: (args: NeoTableProps) => defineComponent({
    name: 'RTLWithRowHeadersRender',
    setup() {
      return () => <div dir="rtl">
                        <NeoTable {...args} columns={rtlCountryColumns} rows={rtlCountryRows} headerAxis="row" color="blue" />
                    </div>;
    }
  })
}`,...(wo=(po=Y.parameters)==null?void 0:po.docs)==null?void 0:wo.source}}};const ts=["Default","Striped","Compact","Spacious","WithSorting","WithHighlighting","WithSlots","WithRowLinks","WithRowAction","WithEmptyState","WithStickyHeader","MobileCards","WithCaption","OnDark","WithRowHeaders","WithRowHeadersCards","RTL","RTLWithRowHeaders"];export{L as Compact,H as Default,M as MobileCards,U as OnDark,O as RTL,Y as RTLWithRowHeaders,I as Spacious,D as Striped,j as WithCaption,P as WithEmptyState,_ as WithHighlighting,q as WithRowAction,F as WithRowHeaders,K as WithRowHeadersCards,$ as WithRowLinks,W as WithSlots,z as WithSorting,E as WithStickyHeader,ts as __namedExportsOrder,as as default};
