import{d,r as i,c as e,m as y,a as l}from"./iframe-CTMn5qNf.js";import{N as c}from"./NeoSheet-wAbJI3fb.js";import{N as a}from"./NeoButton-DDqdkNDQ.js";import{N as F}from"./NeoNavItem-wGcYcmyh.js";import{N as q}from"./NeoInput-C8NLiA6u.js";import{a as Ye}from"./argTypes-VnJZhiy7.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./useButton-DMMzAdeq.js";import"./NeoIcon-jwqnDL1X.js";import"./id-BOikQ4-O.js";const Ke=["left","right","bottom"],Je=["small","medium","large","full"],Xe=["default","filled"],{expect:u,fn:Ze,userEvent:h,waitFor:m,within:M}=__STORYBOOK_MODULE_TEST__,pt={title:"Molecules/NeoSheet",component:c,tags:["autodocs"],argTypes:{...Ye,color:{description:"Theme color. Only visible in the `filled` variant.",table:{category:"Appearance"}},variant:{control:"select",options:Xe,description:"`default`: neutral background (white / grey900 in dark mode). `filled`: uses the theme color as background, establishing its own dark context via `setOnDark`.",table:{category:"Appearance"}},position:{control:"select",options:Ke,description:"Which edge the sheet slides in from.",table:{category:"Appearance"}},size:{control:"select",options:Je,description:"Width (for `left`/`right`) or height (for `bottom`) of the sheet.",table:{category:"Appearance"}},open:{control:"boolean",description:"Controls whether the sheet is visible. Must be paired with `@update:open` to close via overlay/Escape.",table:{category:"State"}},modal:{control:"boolean",description:"When true, renders a dimmed backdrop overlay behind the sheet. When false, the background remains interactive — useful for stacked sheet patterns.",table:{category:"Behavior"}},closeOnOverlayClick:{control:"boolean",description:"Clicking the overlay emits `update:open(false)`. Only applies when `modal` is true.",table:{category:"Behavior"}},closeOnEscape:{control:"boolean",description:"Pressing Escape emits `update:open(false)`.",table:{category:"Behavior"}},zIndex:{control:"number",description:"CSS z-index of the sheet. Managed automatically when using the stacking system — only override if you need to break out of the stacking context.",table:{category:"Behavior"}},ariaLabelledby:{control:"text",description:"ID of the element that labels the sheet (e.g. a heading inside the sheet). Used for `aria-labelledby` on the sheet panel.",table:{category:"Accessibility"}},closeAriaLabel:{control:"text",description:"Accessible label for the close button rendered in the sheet header.",table:{category:"Accessibility"}}},args:{position:"right",size:"medium",color:"blue",open:!1,closeOnOverlayClick:!0,closeOnEscape:!0,modal:!0,"onUpdate:open":Ze()},parameters:{snapshot:{viewports:["sm","md","lg","xl"]}}},v=t=>d({name:"OpenSheetRender",setup(){return()=>e(c,t,{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[l("Sheet Title")]),e("p",{style:{margin:"0 0 24px 0"}},[l("This sheet starts open for accessibility testing. All interactive content inside is visible and testable without user interaction.")]),e(a,{text:"Action",color:t.color??"blue",variant:"primary"},null)]})}}),f={tags:["snapshot"],parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`}}},render:t=>d({name:"DefaultRender",setup(){const n=i(!1),r=()=>{n.value=!0},o=s=>{n.value=s};return()=>e("div",null,[e(a,{text:"Open Sheet",color:t.color??"blue",variant:"primary",onClick:r},null),e(c,y(t,{open:n.value,"onUpdate:open":o}),{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[l("Sheet Title")]),e("p",null,[l("This is a basic sheet. Click outside or press Escape to close.")]),e("div",{style:{marginTop:"24px"}},[e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>o(!1)},null)])]})])}})},b={...f,tags:["!dev"],play:async({canvasElement:t,step:n})=>{const r=M(t);await n("Open sheet via trigger button",async()=>{await h.click(r.getByText("Open Sheet")),await m(()=>u(document.querySelector(".NeoSheet")).not.toBeNull())}),await n("Overlay has visible dimensions",async()=>{const o=document.querySelector(".NeoSheet-overlay");u(o).not.toBeNull();const s=o.getBoundingClientRect();u(s.height).toBeGreaterThan(0),u(s.width).toBeGreaterThan(0)}),await n("Clicking the overlay closes the sheet",async()=>{const o=document.querySelector(".NeoSheet-overlay");await h.click(o),await m(()=>u(document.querySelector(".NeoSheet")).toBeNull())}),await n("Pressing Escape closes the sheet",async()=>{await h.click(r.getByText("Open Sheet")),await m(()=>u(document.querySelector(".NeoSheet")).not.toBeNull()),await h.keyboard("{Escape}"),await m(()=>u(document.querySelector(".NeoSheet")).toBeNull())}),await n("Clicking inside the sheet does not close it",async()=>{await h.click(r.getByText("Open Sheet")),await m(()=>u(document.querySelector(".NeoSheet")).not.toBeNull());const o=document.querySelector(".NeoSheet-content");await h.click(o),u(document.querySelector(".NeoSheet")).not.toBeNull(),await h.keyboard("{Escape}"),await m(()=>u(document.querySelector(".NeoSheet")).toBeNull())})}},S={tags:["snapshot"],args:{position:"left",open:!0,closeAriaLabel:"Close"},parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="left" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`}}},render:v},x={tags:["snapshot"],args:{position:"bottom",open:!0,closeAriaLabel:"Close"},parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="bottom" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`}}},render:v},N={tags:["snapshot"],args:{size:"small",open:!0,closeAriaLabel:"Close"},parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" size="small" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`}}},render:v},k={tags:["snapshot"],args:{size:"large",open:!0,closeAriaLabel:"Close"},parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" size="large" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`}}},render:v},O={tags:["snapshot"],args:{size:"full",open:!0,closeAriaLabel:"Close"},parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" size="full" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`}}},render:v},g={tags:["no-test"],args:{closeOnOverlayClick:!1,closeOnEscape:!1},parameters:{docs:{source:{code:`<!-- Disable all automatic close triggers — user must interact with a close button -->
<NeoSheet
  color="blue"
  position="right"
  :close-on-overlay-click="false"
  :close-on-escape="false"
  v-model:open="isOpen"
>
  <h2>Persistent Sheet</h2>
  <p>Cannot be closed by clicking outside or pressing Escape.</p>
  <NeoButton text="Close Sheet" color="blue" variant="primary" @click="isOpen = false" />
</NeoSheet>`}}},render:t=>d({name:"PersistentRender",setup(){const n=i(!1);return()=>e("div",null,[e(a,{text:"Open Persistent Sheet",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(c,y(t,{open:n.value,"onUpdate:open":r=>{n.value=r}}),{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[l("Persistent Sheet")]),e("p",null,[l("This sheet cannot be closed by clicking outside or pressing Escape.")]),e("p",null,[l("You must use the close button below.")]),e("div",{style:{marginTop:"24px"}},[e(a,{text:"Close Sheet",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!1}},null)])]})])}})},C={...g,tags:["!dev"],play:async({canvasElement:t,step:n})=>{const r=M(t);await n("Open persistent sheet",async()=>{await h.click(r.getByText("Open Persistent Sheet")),await m(()=>u(document.querySelector(".NeoSheet")).not.toBeNull())}),await n("Overlay has visible dimensions",async()=>{const o=document.querySelector(".NeoSheet-overlay");u(o).not.toBeNull();const s=o.getBoundingClientRect();u(s.height).toBeGreaterThan(0),u(s.width).toBeGreaterThan(0)}),await n("Clicking overlay does not close persistent sheet",async()=>{const o=document.querySelector(".NeoSheet-overlay");await h.click(o),u(document.querySelector(".NeoSheet")).not.toBeNull()}),await n("Escape does not close persistent sheet",async()=>{await h.keyboard("{Escape}"),u(document.querySelector(".NeoSheet")).not.toBeNull()}),await n("Close button closes the sheet",async()=>{await h.click(M(document.body).getByText("Close Sheet")),await m(()=>u(document.querySelector(".NeoSheet")).toBeNull())})}},B={tags:["no-test"],parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
const searchQuery = ref('')
const expanded = ref({ products: false, settings: false })
<\/script>

<template>
  <NeoButton text="Open Navigation" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="left" aria-label="Main navigation" v-model:open="isOpen">
    <div style="display: flex; flex-direction: column; gap: 16px; block-size: 100%;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2 style="margin: 0; font-size: 18px;">Navigation</h2>
        <NeoButton text="Close" color="blue" size="small" variant="ghost" @click="isOpen = false" />
      </div>
      <NeoInput name="nav-search" aria-label="Search" color="blue" placeholder="Search..."
        v-model:value="searchQuery" />
      <nav style="display: flex; flex-direction: column; gap: 4px; flex: 1;">
        <NeoNavItem label="Home" href="/" color="blue">
          <template #iconStart><span>🏠</span></template>
        </NeoNavItem>
        <NeoNavItem label="Dashboard" href="/dashboard" color="blue">
          <template #iconStart><span>📊</span></template>
        </NeoNavItem>
        <NeoNavItem label="Products" color="blue" has-children
          :expanded="expanded.products" @toggle="expanded.products = !expanded.products">
          <template #iconStart><span>📦</span></template>
        </NeoNavItem>
        <template v-if="expanded.products">
          <NeoNavItem label="All Products" href="/products" color="blue" :level="1" />
          <NeoNavItem label="Categories" href="/products/categories" color="blue" :level="1" />
          <NeoNavItem label="Inventory" href="/products/inventory" color="blue" :level="1" />
        </template>
        <NeoNavItem label="Orders" href="/orders" color="blue" active>
          <template #iconStart><span>🛒</span></template>
        </NeoNavItem>
        <NeoNavItem label="Customers" href="/customers" color="blue">
          <template #iconStart><span>👥</span></template>
        </NeoNavItem>
        <NeoNavItem label="Settings" color="blue" has-children
          :expanded="expanded.settings" @toggle="expanded.settings = !expanded.settings">
          <template #iconStart><span>⚙️</span></template>
        </NeoNavItem>
        <template v-if="expanded.settings">
          <NeoNavItem label="General" href="/settings/general" color="blue" :level="1" />
          <NeoNavItem label="Security" href="/settings/security" color="blue" :level="1" />
          <NeoNavItem label="Notifications" href="/settings/notifications" color="blue" :level="1" />
        </template>
      </nav>
    </div>
  </NeoSheet>
</template>`}}},render:t=>d({name:"NavigationWithSearchRender",setup(){const n=i(!1),r=i(""),o=i({products:!1,settings:!1}),s=[{label:"Home",href:"/",icon:"🏠"},{label:"Dashboard",href:"/dashboard",icon:"📊"},{label:"Products",id:"products",icon:"📦",children:[{label:"All Products",href:"/products"},{label:"Categories",href:"/products/categories"},{label:"Inventory",href:"/products/inventory"}]},{label:"Orders",href:"/orders",icon:"🛒",active:!0},{label:"Customers",href:"/customers",icon:"👥"},{label:"Settings",id:"settings",icon:"⚙️",children:[{label:"General",href:"/settings/general"},{label:"Security",href:"/settings/security"},{label:"Notifications",href:"/settings/notifications"}]}],Ve=p=>{o.value[p]=!o.value[p]};return()=>e("div",null,[e(a,{text:"Open Navigation",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(c,y(t,{position:"left",open:n.value,"onUpdate:open":p=>{n.value=p},ariaLabel:"Main navigation"}),{default:()=>[e("div",{style:{display:"flex",flexDirection:"column",gap:"16px",blockSize:"100%"}},[e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},[e("h2",{style:{margin:0,fontSize:"18px"}},[l("Navigation")]),e(a,{text:"Close",color:t.color??"blue",size:"small",variant:"ghost",onClick:()=>{n.value=!1}},null)]),e(q,{name:"nav-search",ariaLabel:"Search",color:t.color??"blue",size:"medium",placeholder:"Search...",value:r.value,"onUpdate:value":p=>{r.value=String(p)}},null),e("nav",{style:{display:"flex",flexDirection:"column",gap:"4px",flex:1}},[s.map(p=>e("div",{key:p.label},[e(F,{label:p.label,href:p.children?void 0:p.href,color:t.color??"blue",active:p.active,hasChildren:!!p.children,expanded:p.id?o.value[p.id]:!1,onToggle:()=>p.id&&Ve(p.id)},{iconStart:()=>e("span",null,[p.icon])}),p.children&&o.value[p.id]&&e("div",{style:{display:"flex",flexDirection:"column",gap:"2px"}},[p.children.map(R=>e(F,{key:R.label,label:R.label,href:R.href,color:t.color??"blue",level:1,size:"small"},null))])]))]),e("div",{style:{borderTop:"1px solid var(--neo-color-grey200)",paddingTop:"16px"}},[e(F,{label:"Logout",color:"red"},{iconStart:()=>e("span",null,[l("🚪")])})])])]})])}})},z={tags:["no-test"],parameters:{docs:{source:{code:`<script setup>
const leftOpen = ref(false)
const rightOpen = ref(false)
const bottomOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Left" color="blue" variant="primary" @click="leftOpen = true" />
  <NeoButton text="Open Right" color="green" variant="primary" @click="rightOpen = true" />
  <NeoButton text="Open Bottom" color="purple" variant="primary" @click="bottomOpen = true" />

  <NeoSheet position="left" color="blue" v-model:open="leftOpen">
    <h2>Left Sheet</h2>
    <p>This is the left sheet.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="leftOpen = false" />
  </NeoSheet>
  <NeoSheet position="right" color="green" v-model:open="rightOpen">
    <h2>Right Sheet</h2>
    <p>This is the right sheet.</p>
    <NeoButton text="Close" color="green" variant="secondary" @click="rightOpen = false" />
  </NeoSheet>
  <NeoSheet position="bottom" color="purple" v-model:open="bottomOpen">
    <h2>Bottom Sheet</h2>
    <p>This is the bottom sheet.</p>
    <NeoButton text="Close" color="purple" variant="secondary" @click="bottomOpen = false" />
  </NeoSheet>
</template>`}}},render:()=>d({name:"MultipleSheetsRender",setup(){const t=i(!1),n=i(!1),r=i(!1);return()=>e("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},[e(a,{text:"Open Left Sheet",color:"blue",variant:"primary",onClick:()=>{t.value=!0}},null),e(a,{text:"Open Right Sheet",color:"green",variant:"primary",onClick:()=>{n.value=!0}},null),e(a,{text:"Open Bottom Sheet",color:"purple",variant:"primary",onClick:()=>{r.value=!0}},null),e(c,{position:"left",size:"small",color:"blue",open:t.value,zIndex:1e3,"onUpdate:open":o=>{t.value=o}},{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[l("Left Sheet")]),e("p",null,[l("This is the left sheet (z-index: 1000)")]),e(a,{text:"Close",color:"blue",variant:"secondary",onClick:()=>{t.value=!1}},null)]}),e(c,{position:"right",size:"small",color:"green",open:n.value,zIndex:1001,"onUpdate:open":o=>{n.value=o}},{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[l("Right Sheet")]),e("p",null,[l("This is the right sheet (z-index: 1001)")]),e(a,{text:"Close",color:"green",variant:"secondary",onClick:()=>{n.value=!1}},null)]}),e(c,{position:"bottom",size:"small",color:"purple",open:r.value,zIndex:1002,"onUpdate:open":o=>{r.value=o}},{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[l("Bottom Sheet")]),e("p",null,[l("This is the bottom sheet (z-index: 1002)")]),e(a,{text:"Close",color:"purple",variant:"secondary",onClick:()=>{r.value=!1}},null)]})])}})},w={tags:["snapshot"],parameters:{docs:{source:{code:`<!-- Multiple sheets on the same side stack automatically — no wiring needed.
     Use modal={false} to keep the background interactive. -->
<script setup>
const open1 = ref(false)
const open2 = ref(false)
<\/script>

<template>
  <NeoButton text="Sheet 1 (large)" color="blue" variant="primary" @click="open1 = true" />
  <NeoButton text="Sheet 2 (medium)" color="blue" variant="primary" @click="open2 = true" />

  <NeoSheet position="right" size="large" color="blue" :modal="false" v-model:open="open1">
    <h2>Sheet 1</h2>
    <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
  </NeoSheet>
  <NeoSheet position="right" size="medium" color="blue" :modal="false" v-model:open="open2">
    <h2>Sheet 2</h2>
    <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
  </NeoSheet>
</template>`}}},render:t=>d({name:"StackedRightRender",setup(){const n=i(!0),r=i(!0),o=i(!0);return()=>e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Sheet 1 (large)",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(a,{text:"Sheet 2 (medium)",color:t.color??"blue",variant:"primary",onClick:()=>{r.value=!0}},null),e(a,{text:"Sheet 3 (small)",color:t.color??"blue",variant:"primary",onClick:()=>{o.value=!0}},null),e(c,{position:"right",size:"large",color:t.color??"blue",open:n.value,modal:!1,"onUpdate:open":s=>{n.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[l("Sheet 1 — large")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[l("Open any combination of the three sheets. Stacking is automatic — no coordination needed. Each sheet only stacks with others on the same side. Background stays interactive because "),e("code",null,[l("modal="),!1]),l(".")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{n.value=!1}},null)]}),e(c,{position:"right",size:"medium",color:t.color??"blue",open:r.value,modal:!1,"onUpdate:open":s=>{r.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[l("Sheet 2 — medium")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[l("Any sheet already open on the right gets offset by 24px per depth level. The indent adjusts for size differences so smaller sheets always peek out.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{r.value=!1}},null)]}),e(c,{position:"right",size:"small",color:t.color??"blue",open:o.value,modal:!1,"onUpdate:open":s=>{o.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[l("Sheet 3 — small")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[l("Close sheets in any order — the remaining sheets re-stack and recalculate their offsets automatically.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{o.value=!1}},null)]})])}})},T={tags:["snapshot"],parameters:{docs:{source:{code:`<!-- Left and right stacks are fully independent of each other -->
<NeoSheet position="left" size="large" color="blue" :modal="false" v-model:open="open1">
  <h2>Sheet 1 — large</h2>
  <p>Open multiple left sheets to see the stacking peek effect.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
</NeoSheet>
<NeoSheet position="left" size="medium" color="blue" :modal="false" v-model:open="open2">
  <h2>Sheet 2 — medium</h2>
  <p>Left and right sheets are fully independent stacks.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
</NeoSheet>`}}},render:t=>d({name:"StackedLeftRender",setup(){const n=i(!0),r=i(!0),o=i(!0);return()=>e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Sheet 1 (large)",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(a,{text:"Sheet 2 (medium)",color:t.color??"blue",variant:"primary",onClick:()=>{r.value=!0}},null),e(a,{text:"Sheet 3 (small)",color:t.color??"blue",variant:"primary",onClick:()=>{o.value=!0}},null),e(c,{position:"left",size:"large",color:t.color??"blue",open:n.value,modal:!1,"onUpdate:open":s=>{n.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[l("Sheet 1 — large")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[l("Same stacking behaviour as the right position — open all three and verify the peek offset appears on the right edge of background sheets.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{n.value=!1}},null)]}),e(c,{position:"left",size:"medium",color:t.color??"blue",open:r.value,modal:!1,"onUpdate:open":s=>{r.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[l("Sheet 2 — medium")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[l("Left and right sheets are fully independent stacks — opening a left sheet does not affect any right sheet's offset.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{r.value=!1}},null)]}),e(c,{position:"left",size:"small",color:t.color??"blue",open:o.value,modal:!1,"onUpdate:open":s=>{o.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[l("Sheet 3 — small")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[l("Close sheets in any order — the remaining left sheets re-stack independently.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{o.value=!1}},null)]})])}})},D={tags:["snapshot"],parameters:{docs:{source:{code:`<!-- Bottom sheets stack independently from left/right sheets -->
<NeoSheet position="bottom" size="large" color="blue" :modal="false" v-model:open="open1">
  <h2>Sheet 1 — large</h2>
  <p>Bottom sheets stack the same way — background sheets peek upward.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
</NeoSheet>
<NeoSheet position="bottom" size="medium" color="blue" :modal="false" v-model:open="open2">
  <h2>Sheet 2 — medium</h2>
  <p>Open all three to see the vertical offset.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
</NeoSheet>`}}},render:t=>d({name:"StackedBottomRender",setup(){const n=i(!0),r=i(!0),o=i(!0);return()=>e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Sheet 1 (large)",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(a,{text:"Sheet 2 (medium)",color:t.color??"blue",variant:"primary",onClick:()=>{r.value=!0}},null),e(a,{text:"Sheet 3 (small)",color:t.color??"blue",variant:"primary",onClick:()=>{o.value=!0}},null),e(c,{position:"bottom",size:"large",color:t.color??"blue",open:n.value,modal:!1,"onUpdate:open":s=>{n.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[l("Sheet 1 — large")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[l("Bottom sheets stack the same way — background sheets peek upward. Open all three to see the vertical offset.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{n.value=!1}},null)]}),e(c,{position:"bottom",size:"medium",color:t.color??"blue",open:r.value,modal:!1,"onUpdate:open":s=>{r.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[l("Sheet 2 — medium")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[l("Bottom sheets are isolated from left/right stacks — they only offset against other bottom sheets.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{r.value=!1}},null)]}),e(c,{position:"bottom",size:"small",color:t.color??"blue",open:o.value,modal:!1,"onUpdate:open":s=>{o.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[l("Sheet 3 — small")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[l("Close sheets in any order — remaining bottom sheets recalculate their peek offset.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{o.value=!1}},null)]})])}})},E={tags:["snapshot"],parameters:{docs:{source:{code:`<!-- Sheets opened from inside other sheets stack automatically.
     close-on-overlay-click="false" keeps the blurred overlay persistent. -->
<script setup>
const open1 = ref(false)
const open2 = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet 1" color="blue" variant="primary" @click="open1 = true" />

  <NeoSheet position="right" size="large" color="blue" :close-on-overlay-click="false"
    v-model:open="open1">
    <h2>Sheet 1</h2>
    <NeoButton text="Open Sheet 2" color="blue" variant="primary" @click="open2 = true" />
    <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
  </NeoSheet>

  <NeoSheet position="right" size="medium" color="blue" :close-on-overlay-click="false"
    v-model:open="open2">
    <h2>Sheet 2</h2>
    <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
  </NeoSheet>
</template>`}}},render:t=>d({name:"StackedNestedRender",setup(){const n=i(!0),r=i(!0),o=i(!0);return()=>e("div",null,[e(a,{text:"Open Sheet 1",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(c,{position:"right",size:"large",color:t.color??"blue",open:n.value,closeOnOverlayClick:!1,"onUpdate:open":s=>{n.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[l("Sheet 1 — large")]),e("p",{style:{margin:"0 0 24px 0",fontSize:"14px"}},[l("Opened from the page. Open Sheet 2 to verify stacking.")]),e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Open Sheet 2",color:t.color??"blue",variant:"primary",onClick:()=>{r.value=!0}},null),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{n.value=!1}},null)])]}),e(c,{position:"right",size:"medium",color:t.color??"blue",open:r.value,closeOnOverlayClick:!1,"onUpdate:open":s=>{r.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[l("Sheet 2 — medium")]),e("p",{style:{margin:"0 0 24px 0",fontSize:"14px"}},[l("Opened from inside Sheet 1. Open Sheet 3 for another level.")]),e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Open Sheet 3",color:t.color??"blue",variant:"primary",onClick:()=>{o.value=!0}},null),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{r.value=!1}},null)])]}),e(c,{position:"right",size:"small",color:t.color??"blue",open:o.value,closeOnOverlayClick:!1,"onUpdate:open":s=>{o.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[l("Sheet 3 — small")]),e("p",{style:{margin:"0 0 24px 0",fontSize:"14px"}},[l("Three sheets deep. Close in reverse order.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{o.value=!1}},null)]})])}})},I={tags:["no-test"],parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
const name = ref('')
const email = ref('')
<\/script>

<template>
  <NeoButton text="Open Settings" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet
    color="blue"
    position="right"
    size="large"
    :close-on-overlay-click="false"
    close-aria-label="Close"
    aria-label="Settings form"
    v-model:open="isOpen"
  >
    <div style="display: flex; flex-direction: column; gap: 24px; height: 100%;">
      <h2>Settings</h2>
      <form style="display: flex; flex-direction: column; gap: 16px; flex: 1;">
        <NeoInput name="name" label="Name" color="blue" v-model:value="name" />
        <NeoInput name="email" label="Email" type="email" color="blue" v-model:value="email" />
      </form>
      <div style="display: flex; gap: 12px; justify-content: flex-end;">
        <NeoButton text="Cancel" color="blue" variant="secondary" @click="isOpen = false" />
        <NeoButton text="Save Changes" color="blue" variant="primary" @click="isOpen = false" />
      </div>
    </div>
  </NeoSheet>
</template>`}}},render:t=>d({name:"FormExampleRender",setup(){const n=i(!1),r=i({name:"",email:"",message:""});return()=>e("div",null,[e(a,{text:"Open Settings",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(c,y(t,{position:"right",size:"large",open:n.value,closeOnOverlayClick:!1,closeAriaLabel:"Close","onUpdate:open":o=>{n.value=o},ariaLabel:"Settings form"}),{default:()=>[e("div",{style:{display:"flex",flexDirection:"column",gap:"24px",blockSize:"100%"}},[e("h2",{style:{margin:0}},[l("Settings")]),e("form",{style:{display:"flex",flexDirection:"column",gap:"16px",flex:1}},[e(q,{name:"name",label:"Name",color:t.color??"blue",value:r.value.name,"onUpdate:value":o=>{r.value.name=String(o)}},null),e(q,{name:"email",label:"Email",type:"email",color:t.color??"blue",value:r.value.email,"onUpdate:value":o=>{r.value.email=String(o)}},null)]),e("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",borderTop:"1px solid var(--neo-color-grey200)",paddingTop:"16px"}},[e(a,{text:"Cancel",color:t.color??"blue",variant:"secondary",onClick:()=>{n.value=!1}},null),e(a,{text:"Save Changes",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!1}},null)])])]})])}})},L={tags:["snapshot"],globals:{backgrounds:"#000"},args:{open:!0,closeAriaLabel:"Close"},parameters:{snapshot:{viewports:["sm","xl"]},docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <div class="u-onDark">
    <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
    <NeoSheet color="blue" position="right" v-model:open="isOpen">
      <h2>Sheet Title</h2>
      <p>This is a basic sheet. Click outside or press Escape to close.</p>
      <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
    </NeoSheet>
  </div>
</template>`}}},render:v},U={tags:["snapshot"],args:{open:!0,closeAriaLabel:"Close"},parameters:{docs:{source:{code:`<!-- Pass open as a static prop (or :open="true") to render the sheet pre-opened -->
<NeoSheet color="blue" position="right" :open="true" close-aria-label="Close">
  <h2>Sheet Title</h2>
  <p>Sheet starts open — useful for accessibility testing.</p>
  <NeoButton text="Action" color="blue" variant="primary" />
</NeoSheet>`}}},render:v},A={tags:["snapshot"],parameters:{docs:{source:{code:`<!-- variant="filled" fills the sheet with the theme color.
     Use color="black" for buttons inside — setOnDark renders them white automatically. -->
<NeoSheet color="blue" position="right" variant="filled" close-aria-label="Close"
  v-model:open="isOpen">
  <h2>Filled Sheet</h2>
  <NeoButton text="Primary Action" color="black" variant="primary" @click="isOpen = false" />
  <NeoButton text="Close" color="black" variant="secondary" @click="isOpen = false" />
</NeoSheet>`}}},render:t=>d({name:"FilledRender",setup(){const n=i(!1);return()=>e("div",null,[e(a,{text:"Open Filled Sheet",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(c,y(t,{variant:"filled",open:n.value,closeAriaLabel:"Close","onUpdate:open":r=>{n.value=r}}),{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[l("Filled Sheet")]),e("p",{style:{margin:"0 0 24px 0"}},[l("Use "),e("code",null,[l('color="black"')]),l(" for buttons inside a filled sheet — the")," ",e("code",null,[l("setOnDark")]),l(" cascade automatically renders them white on dark backgrounds.")]),e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Primary Action",color:"black",variant:"primary",onClick:()=>{n.value=!1}},null),e(a,{text:"Close",color:"black",variant:"secondary",onClick:()=>{n.value=!1}},null)])]})])}})},P={tags:["snapshot"],args:{variant:"filled",open:!0,closeAriaLabel:"Close"},parameters:{docs:{source:{code:`<NeoSheet color="blue" position="right" variant="filled" :open="true" close-aria-label="Close">
  <h2>Filled Sheet</h2>
  <NeoButton text="Primary Action" color="black" variant="primary" />
  <NeoButton text="Secondary" color="black" variant="secondary" />
</NeoSheet>`}}},render:t=>d({name:"FilledOpenRender",setup(){return()=>e(c,t,{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[l("Filled Sheet")]),e("p",{style:{margin:"0 0 24px 0"}},[l("Buttons inside a filled sheet flip to white via setOnDark.")]),e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Primary Action",color:"black",variant:"primary"},null),e(a,{text:"Secondary",color:"black",variant:"secondary"},null)])]})}})};var G,j,W;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>\`
      }
    }
  },
  render: (args: NeoSheetProps) => {
    return defineComponent({
      name: 'DefaultRender',
      setup() {
        const isOpen = ref(false);
        const openSheet = () => {
          isOpen.value = true;
        };
        const handleUpdate = (value: boolean) => {
          isOpen.value = value;
        };
        return () => <div>
                        <NeoButton text="Open Sheet" color={args.color ?? 'blue'} variant="primary" onClick={openSheet} />
                        <NeoSheet {...args} open={isOpen.value} onUpdate:open={handleUpdate}>
                            <h2 style={{
              margin: '0 0 16px 0'
            }}>Sheet Title</h2>
                            <p>This is a basic sheet. Click outside or press Escape to close.</p>
                            <div style={{
              marginTop: '24px'
            }}>
                                <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => handleUpdate(false)} />
                            </div>
                        </NeoSheet>
                    </div>;
      }
    });
  }
}`,...(W=(j=f.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var H,Q,_;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Default,
  tags: ['!dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Open sheet via trigger button', async () => {
      await userEvent.click(canvas.getByText('Open Sheet'));
      await waitFor(() => expect(document.querySelector('.NeoSheet')).not.toBeNull());
    });
    await step('Overlay has visible dimensions', async () => {
      const overlay = document.querySelector('.NeoSheet-overlay') as HTMLElement;
      expect(overlay).not.toBeNull();
      const rect = overlay.getBoundingClientRect();
      expect(rect.height).toBeGreaterThan(0);
      expect(rect.width).toBeGreaterThan(0);
    });
    await step('Clicking the overlay closes the sheet', async () => {
      const overlay = document.querySelector('.NeoSheet-overlay') as HTMLElement;
      await userEvent.click(overlay);
      await waitFor(() => expect(document.querySelector('.NeoSheet')).toBeNull());
    });
    await step('Pressing Escape closes the sheet', async () => {
      await userEvent.click(canvas.getByText('Open Sheet'));
      await waitFor(() => expect(document.querySelector('.NeoSheet')).not.toBeNull());
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(document.querySelector('.NeoSheet')).toBeNull());
    });
    await step('Clicking inside the sheet does not close it', async () => {
      await userEvent.click(canvas.getByText('Open Sheet'));
      await waitFor(() => expect(document.querySelector('.NeoSheet')).not.toBeNull());
      const sheetContent = document.querySelector('.NeoSheet-content') as HTMLElement;
      await userEvent.click(sheetContent);
      expect(document.querySelector('.NeoSheet')).not.toBeNull();
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(document.querySelector('.NeoSheet')).toBeNull());
    });
  }
}`,...(_=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var V,Y,K;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    position: 'left',
    open: true,
    closeAriaLabel: 'Close'
  },
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="left" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>\`
      }
    }
  },
  render: renderOpenSheet
}`,...(K=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var J,X,Z;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    position: 'bottom',
    open: true,
    closeAriaLabel: 'Close'
  },
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="bottom" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>\`
      }
    }
  },
  render: renderOpenSheet
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'small',
    open: true,
    closeAriaLabel: 'Close'
  },
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" size="small" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>\`
      }
    }
  },
  render: renderOpenSheet
}`,...(te=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,le;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'large',
    open: true,
    closeAriaLabel: 'Close'
  },
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" size="large" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>\`
      }
    }
  },
  render: renderOpenSheet
}`,...(le=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ae,re,se;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    size: 'full',
    open: true,
    closeAriaLabel: 'Close'
  },
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" size="full" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>\`
      }
    }
  },
  render: renderOpenSheet
}`,...(se=(re=O.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,pe;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    closeOnOverlayClick: false,
    closeOnEscape: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Disable all automatic close triggers — user must interact with a close button -->
<NeoSheet
  color="blue"
  position="right"
  :close-on-overlay-click="false"
  :close-on-escape="false"
  v-model:open="isOpen"
>
  <h2>Persistent Sheet</h2>
  <p>Cannot be closed by clicking outside or pressing Escape.</p>
  <NeoButton text="Close Sheet" color="blue" variant="primary" @click="isOpen = false" />
</NeoSheet>\`
      }
    }
  },
  render: (args: NeoSheetProps) => {
    return defineComponent({
      name: 'PersistentRender',
      setup() {
        const isOpen = ref(false);
        return () => <div>
                        <NeoButton text="Open Persistent Sheet" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            isOpen.value = true;
          }} />
                        <NeoSheet {...args} open={isOpen.value} onUpdate:open={(value: boolean) => {
            isOpen.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 16px 0'
            }}>Persistent Sheet</h2>
                            <p>This sheet cannot be closed by clicking outside or pressing Escape.</p>
                            <p>You must use the close button below.</p>
                            <div style={{
              marginTop: '24px'
            }}>
                                <NeoButton text="Close Sheet" color={args.color ?? 'blue'} variant="primary" onClick={() => {
                isOpen.value = false;
              }} />
                            </div>
                        </NeoSheet>
                    </div>;
      }
    });
  }
}`,...(pe=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,de,he;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  ...PersistentSheet,
  tags: ['!dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Open persistent sheet', async () => {
      await userEvent.click(canvas.getByText('Open Persistent Sheet'));
      await waitFor(() => expect(document.querySelector('.NeoSheet')).not.toBeNull());
    });
    await step('Overlay has visible dimensions', async () => {
      const overlay = document.querySelector('.NeoSheet-overlay') as HTMLElement;
      expect(overlay).not.toBeNull();
      const rect = overlay.getBoundingClientRect();
      expect(rect.height).toBeGreaterThan(0);
      expect(rect.width).toBeGreaterThan(0);
    });
    await step('Clicking overlay does not close persistent sheet', async () => {
      const overlay = document.querySelector('.NeoSheet-overlay') as HTMLElement;
      await userEvent.click(overlay);
      expect(document.querySelector('.NeoSheet')).not.toBeNull();
    });
    await step('Escape does not close persistent sheet', async () => {
      await userEvent.keyboard('{Escape}');
      expect(document.querySelector('.NeoSheet')).not.toBeNull();
    });
    await step('Close button closes the sheet', async () => {
      await userEvent.click(within(document.body).getByText('Close Sheet'));
      await waitFor(() => expect(document.querySelector('.NeoSheet')).toBeNull());
    });
  }
}`,...(he=(de=C.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};var me,ve,fe;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const isOpen = ref(false)
const searchQuery = ref('')
const expanded = ref({ products: false, settings: false })
<\/script>

<template>
  <NeoButton text="Open Navigation" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="left" aria-label="Main navigation" v-model:open="isOpen">
    <div style="display: flex; flex-direction: column; gap: 16px; block-size: 100%;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2 style="margin: 0; font-size: 18px;">Navigation</h2>
        <NeoButton text="Close" color="blue" size="small" variant="ghost" @click="isOpen = false" />
      </div>
      <NeoInput name="nav-search" aria-label="Search" color="blue" placeholder="Search..."
        v-model:value="searchQuery" />
      <nav style="display: flex; flex-direction: column; gap: 4px; flex: 1;">
        <NeoNavItem label="Home" href="/" color="blue">
          <template #iconStart><span>🏠</span></template>
        </NeoNavItem>
        <NeoNavItem label="Dashboard" href="/dashboard" color="blue">
          <template #iconStart><span>📊</span></template>
        </NeoNavItem>
        <NeoNavItem label="Products" color="blue" has-children
          :expanded="expanded.products" @toggle="expanded.products = !expanded.products">
          <template #iconStart><span>📦</span></template>
        </NeoNavItem>
        <template v-if="expanded.products">
          <NeoNavItem label="All Products" href="/products" color="blue" :level="1" />
          <NeoNavItem label="Categories" href="/products/categories" color="blue" :level="1" />
          <NeoNavItem label="Inventory" href="/products/inventory" color="blue" :level="1" />
        </template>
        <NeoNavItem label="Orders" href="/orders" color="blue" active>
          <template #iconStart><span>🛒</span></template>
        </NeoNavItem>
        <NeoNavItem label="Customers" href="/customers" color="blue">
          <template #iconStart><span>👥</span></template>
        </NeoNavItem>
        <NeoNavItem label="Settings" color="blue" has-children
          :expanded="expanded.settings" @toggle="expanded.settings = !expanded.settings">
          <template #iconStart><span>⚙️</span></template>
        </NeoNavItem>
        <template v-if="expanded.settings">
          <NeoNavItem label="General" href="/settings/general" color="blue" :level="1" />
          <NeoNavItem label="Security" href="/settings/security" color="blue" :level="1" />
          <NeoNavItem label="Notifications" href="/settings/notifications" color="blue" :level="1" />
        </template>
      </nav>
    </div>
  </NeoSheet>
</template>\`
      }
    }
  },
  render: (args: NeoSheetProps) => {
    return defineComponent({
      name: 'NavigationWithSearchRender',
      setup() {
        const isOpen = ref(false);
        const searchQuery = ref('');
        const expandedItems = ref<Record<string, boolean>>({
          products: false,
          settings: false
        });
        const navItems = [{
          label: 'Home',
          href: '/',
          icon: '🏠'
        }, {
          label: 'Dashboard',
          href: '/dashboard',
          icon: '📊'
        }, {
          label: 'Products',
          id: 'products',
          icon: '📦',
          children: [{
            label: 'All Products',
            href: '/products'
          }, {
            label: 'Categories',
            href: '/products/categories'
          }, {
            label: 'Inventory',
            href: '/products/inventory'
          }]
        }, {
          label: 'Orders',
          href: '/orders',
          icon: '🛒',
          active: true
        }, {
          label: 'Customers',
          href: '/customers',
          icon: '👥'
        }, {
          label: 'Settings',
          id: 'settings',
          icon: '⚙️',
          children: [{
            label: 'General',
            href: '/settings/general'
          }, {
            label: 'Security',
            href: '/settings/security'
          }, {
            label: 'Notifications',
            href: '/settings/notifications'
          }]
        }];
        const toggleItem = (id: string) => {
          expandedItems.value[id] = !expandedItems.value[id];
        };
        return () => <div>
                        <NeoButton text="Open Navigation" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            isOpen.value = true;
          }} />
                        <NeoSheet {...args} position="left" open={isOpen.value} onUpdate:open={(value: boolean) => {
            isOpen.value = value;
          }} ariaLabel="Main navigation">
                            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              blockSize: '100%'
            }}>
                                <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                                    <h2 style={{
                  margin: 0,
                  fontSize: '18px'
                }}>Navigation</h2>
                                    <NeoButton text="Close" color={args.color ?? 'blue'} size="small" variant="ghost" onClick={() => {
                  isOpen.value = false;
                }} />
                                </div>

                                <NeoInput name="nav-search" ariaLabel="Search" color={args.color ?? 'blue'} size="medium" placeholder="Search..." value={searchQuery.value} onUpdate:value={value => {
                searchQuery.value = String(value);
              }} />

                                <nav style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                flex: 1
              }}>
                                    {navItems.map(item => <div key={item.label}>
                                            <NeoNavItem label={item.label} href={item.children ? undefined : item.href} color={args.color ?? 'blue'} active={item.active} hasChildren={Boolean(item.children)} expanded={item.id ? expandedItems.value[item.id] : false} onToggle={() => item.id && toggleItem(item.id)} v-slots={{
                    iconStart: () => <span>{item.icon}</span>
                  }} />
                                            {item.children && expandedItems.value[item.id!] && <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                  }}>
                                                    {item.children.map(child => <NeoNavItem key={child.label} label={child.label} href={child.href} color={args.color ?? 'blue'} level={1} size="small" />)}
                                                </div>}
                                        </div>)}
                                </nav>

                                <div style={{
                borderTop: '1px solid var(--neo-color-grey200)',
                paddingTop: '16px'
              }}>
                                    <NeoNavItem label="Logout" color="red" v-slots={{
                  iconStart: () => <span>🚪</span>
                }} />
                                </div>
                            </div>
                        </NeoSheet>
                    </div>;
      }
    });
  }
}`,...(fe=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var ge,ye,be;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const leftOpen = ref(false)
const rightOpen = ref(false)
const bottomOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Left" color="blue" variant="primary" @click="leftOpen = true" />
  <NeoButton text="Open Right" color="green" variant="primary" @click="rightOpen = true" />
  <NeoButton text="Open Bottom" color="purple" variant="primary" @click="bottomOpen = true" />

  <NeoSheet position="left" color="blue" v-model:open="leftOpen">
    <h2>Left Sheet</h2>
    <p>This is the left sheet.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="leftOpen = false" />
  </NeoSheet>
  <NeoSheet position="right" color="green" v-model:open="rightOpen">
    <h2>Right Sheet</h2>
    <p>This is the right sheet.</p>
    <NeoButton text="Close" color="green" variant="secondary" @click="rightOpen = false" />
  </NeoSheet>
  <NeoSheet position="bottom" color="purple" v-model:open="bottomOpen">
    <h2>Bottom Sheet</h2>
    <p>This is the bottom sheet.</p>
    <NeoButton text="Close" color="purple" variant="secondary" @click="bottomOpen = false" />
  </NeoSheet>
</template>\`
      }
    }
  },
  render: () => {
    return defineComponent({
      name: 'MultipleSheetsRender',
      setup() {
        const leftOpen = ref(false);
        const rightOpen = ref(false);
        const bottomOpen = ref(false);
        return () => <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
                        <NeoButton text="Open Left Sheet" color="blue" variant="primary" onClick={() => {
            leftOpen.value = true;
          }} />
                        <NeoButton text="Open Right Sheet" color="green" variant="primary" onClick={() => {
            rightOpen.value = true;
          }} />
                        <NeoButton text="Open Bottom Sheet" color="purple" variant="primary" onClick={() => {
            bottomOpen.value = true;
          }} />

                        <NeoSheet position="left" size="small" color="blue" open={leftOpen.value} zIndex={1000} onUpdate:open={(value: boolean) => {
            leftOpen.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 16px 0'
            }}>Left Sheet</h2>
                            <p>This is the left sheet (z-index: 1000)</p>
                            <NeoButton text="Close" color="blue" variant="secondary" onClick={() => {
              leftOpen.value = false;
            }} />
                        </NeoSheet>

                        <NeoSheet position="right" size="small" color="green" open={rightOpen.value} zIndex={1001} onUpdate:open={(value: boolean) => {
            rightOpen.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 16px 0'
            }}>Right Sheet</h2>
                            <p>This is the right sheet (z-index: 1001)</p>
                            <NeoButton text="Close" color="green" variant="secondary" onClick={() => {
              rightOpen.value = false;
            }} />
                        </NeoSheet>

                        <NeoSheet position="bottom" size="small" color="purple" open={bottomOpen.value} zIndex={1002} onUpdate:open={(value: boolean) => {
            bottomOpen.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 16px 0'
            }}>Bottom Sheet</h2>
                            <p>This is the bottom sheet (z-index: 1002)</p>
                            <NeoButton text="Close" color="purple" variant="secondary" onClick={() => {
              bottomOpen.value = false;
            }} />
                        </NeoSheet>
                    </div>;
      }
    });
  }
}`,...(be=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Se,xe,Ne;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<!-- Multiple sheets on the same side stack automatically — no wiring needed.
     Use modal={false} to keep the background interactive. -->
<script setup>
const open1 = ref(false)
const open2 = ref(false)
<\/script>

<template>
  <NeoButton text="Sheet 1 (large)" color="blue" variant="primary" @click="open1 = true" />
  <NeoButton text="Sheet 2 (medium)" color="blue" variant="primary" @click="open2 = true" />

  <NeoSheet position="right" size="large" color="blue" :modal="false" v-model:open="open1">
    <h2>Sheet 1</h2>
    <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
  </NeoSheet>
  <NeoSheet position="right" size="medium" color="blue" :modal="false" v-model:open="open2">
    <h2>Sheet 2</h2>
    <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
  </NeoSheet>
</template>\`
      }
    }
  },
  render: (args: NeoSheetProps) => {
    return defineComponent({
      name: 'StackedRightRender',
      setup() {
        const open1 = ref(true);
        const open2 = ref(true);
        const open3 = ref(true);
        return () => <div style={{
          display: 'flex',
          gap: '12px'
        }}>
                        <NeoButton text="Sheet 1 (large)" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            open1.value = true;
          }} />
                        <NeoButton text="Sheet 2 (medium)" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            open2.value = true;
          }} />
                        <NeoButton text="Sheet 3 (small)" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            open3.value = true;
          }} />

                        <NeoSheet position="right" size="large" color={args.color ?? 'blue'} open={open1.value} modal={false} onUpdate:open={(value: boolean) => {
            open1.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 8px 0'
            }}>Sheet 1 — large</h2>
                            <p style={{
              margin: '0 0 16px 0',
              fontSize: '14px'
            }}>
                                Open any combination of the three sheets. Stacking is automatic — no coordination
                                needed. Each sheet only stacks with others on the same side. Background stays
                                interactive because <code>modal={false}</code>.
                            </p>
                            <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
              open1.value = false;
            }} />
                        </NeoSheet>

                        <NeoSheet position="right" size="medium" color={args.color ?? 'blue'} open={open2.value} modal={false} onUpdate:open={(value: boolean) => {
            open2.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 8px 0'
            }}>Sheet 2 — medium</h2>
                            <p style={{
              margin: '0 0 16px 0',
              fontSize: '14px'
            }}>
                                Any sheet already open on the right gets offset by 24px per depth level. The indent
                                adjusts for size differences so smaller sheets always peek out.
                            </p>
                            <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
              open2.value = false;
            }} />
                        </NeoSheet>

                        <NeoSheet position="right" size="small" color={args.color ?? 'blue'} open={open3.value} modal={false} onUpdate:open={(value: boolean) => {
            open3.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 8px 0'
            }}>Sheet 3 — small</h2>
                            <p style={{
              margin: '0 0 16px 0',
              fontSize: '14px'
            }}>
                                Close sheets in any order — the remaining sheets re-stack and recalculate their
                                offsets automatically.
                            </p>
                            <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
              open3.value = false;
            }} />
                        </NeoSheet>
                    </div>;
      }
    });
  }
}`,...(Ne=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:Ne.source}}};var ke,Oe,Ce;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<!-- Left and right stacks are fully independent of each other -->
<NeoSheet position="left" size="large" color="blue" :modal="false" v-model:open="open1">
  <h2>Sheet 1 — large</h2>
  <p>Open multiple left sheets to see the stacking peek effect.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
</NeoSheet>
<NeoSheet position="left" size="medium" color="blue" :modal="false" v-model:open="open2">
  <h2>Sheet 2 — medium</h2>
  <p>Left and right sheets are fully independent stacks.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
</NeoSheet>\`
      }
    }
  },
  render: (args: NeoSheetProps) => {
    return defineComponent({
      name: 'StackedLeftRender',
      setup() {
        const open1 = ref(true);
        const open2 = ref(true);
        const open3 = ref(true);
        return () => <div style={{
          display: 'flex',
          gap: '12px'
        }}>
                        <NeoButton text="Sheet 1 (large)" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            open1.value = true;
          }} />
                        <NeoButton text="Sheet 2 (medium)" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            open2.value = true;
          }} />
                        <NeoButton text="Sheet 3 (small)" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            open3.value = true;
          }} />

                        <NeoSheet position="left" size="large" color={args.color ?? 'blue'} open={open1.value} modal={false} onUpdate:open={(value: boolean) => {
            open1.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 8px 0'
            }}>Sheet 1 — large</h2>
                            <p style={{
              margin: '0 0 16px 0',
              fontSize: '14px'
            }}>
                                Same stacking behaviour as the right position — open all three and verify the peek
                                offset appears on the right edge of background sheets.
                            </p>
                            <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
              open1.value = false;
            }} />
                        </NeoSheet>

                        <NeoSheet position="left" size="medium" color={args.color ?? 'blue'} open={open2.value} modal={false} onUpdate:open={(value: boolean) => {
            open2.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 8px 0'
            }}>Sheet 2 — medium</h2>
                            <p style={{
              margin: '0 0 16px 0',
              fontSize: '14px'
            }}>
                                Left and right sheets are fully independent stacks — opening a left sheet does not
                                affect any right sheet's offset.
                            </p>
                            <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
              open2.value = false;
            }} />
                        </NeoSheet>

                        <NeoSheet position="left" size="small" color={args.color ?? 'blue'} open={open3.value} modal={false} onUpdate:open={(value: boolean) => {
            open3.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 8px 0'
            }}>Sheet 3 — small</h2>
                            <p style={{
              margin: '0 0 16px 0',
              fontSize: '14px'
            }}>
                                Close sheets in any order — the remaining left sheets re-stack independently.
                            </p>
                            <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
              open3.value = false;
            }} />
                        </NeoSheet>
                    </div>;
      }
    });
  }
}`,...(Ce=(Oe=T.parameters)==null?void 0:Oe.docs)==null?void 0:Ce.source}}};var Be,ze,we;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<!-- Bottom sheets stack independently from left/right sheets -->
<NeoSheet position="bottom" size="large" color="blue" :modal="false" v-model:open="open1">
  <h2>Sheet 1 — large</h2>
  <p>Bottom sheets stack the same way — background sheets peek upward.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
</NeoSheet>
<NeoSheet position="bottom" size="medium" color="blue" :modal="false" v-model:open="open2">
  <h2>Sheet 2 — medium</h2>
  <p>Open all three to see the vertical offset.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
</NeoSheet>\`
      }
    }
  },
  render: (args: NeoSheetProps) => {
    return defineComponent({
      name: 'StackedBottomRender',
      setup() {
        const open1 = ref(true);
        const open2 = ref(true);
        const open3 = ref(true);
        return () => <div style={{
          display: 'flex',
          gap: '12px'
        }}>
                        <NeoButton text="Sheet 1 (large)" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            open1.value = true;
          }} />
                        <NeoButton text="Sheet 2 (medium)" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            open2.value = true;
          }} />
                        <NeoButton text="Sheet 3 (small)" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            open3.value = true;
          }} />

                        <NeoSheet position="bottom" size="large" color={args.color ?? 'blue'} open={open1.value} modal={false} onUpdate:open={(value: boolean) => {
            open1.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 8px 0'
            }}>Sheet 1 — large</h2>
                            <p style={{
              margin: '0 0 16px 0',
              fontSize: '14px'
            }}>
                                Bottom sheets stack the same way — background sheets peek upward. Open all three to
                                see the vertical offset.
                            </p>
                            <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
              open1.value = false;
            }} />
                        </NeoSheet>

                        <NeoSheet position="bottom" size="medium" color={args.color ?? 'blue'} open={open2.value} modal={false} onUpdate:open={(value: boolean) => {
            open2.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 8px 0'
            }}>Sheet 2 — medium</h2>
                            <p style={{
              margin: '0 0 16px 0',
              fontSize: '14px'
            }}>
                                Bottom sheets are isolated from left/right stacks — they only offset against other
                                bottom sheets.
                            </p>
                            <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
              open2.value = false;
            }} />
                        </NeoSheet>

                        <NeoSheet position="bottom" size="small" color={args.color ?? 'blue'} open={open3.value} modal={false} onUpdate:open={(value: boolean) => {
            open3.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 8px 0'
            }}>Sheet 3 — small</h2>
                            <p style={{
              margin: '0 0 16px 0',
              fontSize: '14px'
            }}>
                                Close sheets in any order — remaining bottom sheets recalculate their peek offset.
                            </p>
                            <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
              open3.value = false;
            }} />
                        </NeoSheet>
                    </div>;
      }
    });
  }
}`,...(we=(ze=D.parameters)==null?void 0:ze.docs)==null?void 0:we.source}}};var Te,De,Ee;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<!-- Sheets opened from inside other sheets stack automatically.
     close-on-overlay-click="false" keeps the blurred overlay persistent. -->
<script setup>
const open1 = ref(false)
const open2 = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet 1" color="blue" variant="primary" @click="open1 = true" />

  <NeoSheet position="right" size="large" color="blue" :close-on-overlay-click="false"
    v-model:open="open1">
    <h2>Sheet 1</h2>
    <NeoButton text="Open Sheet 2" color="blue" variant="primary" @click="open2 = true" />
    <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
  </NeoSheet>

  <NeoSheet position="right" size="medium" color="blue" :close-on-overlay-click="false"
    v-model:open="open2">
    <h2>Sheet 2</h2>
    <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
  </NeoSheet>
</template>\`
      }
    }
  },
  render: (args: NeoSheetProps) => {
    return defineComponent({
      name: 'StackedNestedRender',
      setup() {
        const open1 = ref(true);
        const open2 = ref(true);
        const open3 = ref(true);
        return () => <div>
                        <NeoButton text="Open Sheet 1" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            open1.value = true;
          }} />

                        <NeoSheet position="right" size="large" color={args.color ?? 'blue'} open={open1.value} closeOnOverlayClick={false} onUpdate:open={(value: boolean) => {
            open1.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 16px 0'
            }}>Sheet 1 — large</h2>
                            <p style={{
              margin: '0 0 24px 0',
              fontSize: '14px'
            }}>
                                Opened from the page. Open Sheet 2 to verify stacking.
                            </p>
                            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
                                <NeoButton text="Open Sheet 2" color={args.color ?? 'blue'} variant="primary" onClick={() => {
                open2.value = true;
              }} />
                                <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
                open1.value = false;
              }} />
                            </div>
                        </NeoSheet>

                        <NeoSheet position="right" size="medium" color={args.color ?? 'blue'} open={open2.value} closeOnOverlayClick={false} onUpdate:open={(value: boolean) => {
            open2.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 16px 0'
            }}>Sheet 2 — medium</h2>
                            <p style={{
              margin: '0 0 24px 0',
              fontSize: '14px'
            }}>
                                Opened from inside Sheet 1. Open Sheet 3 for another level.
                            </p>
                            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
                                <NeoButton text="Open Sheet 3" color={args.color ?? 'blue'} variant="primary" onClick={() => {
                open3.value = true;
              }} />
                                <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
                open2.value = false;
              }} />
                            </div>
                        </NeoSheet>

                        <NeoSheet position="right" size="small" color={args.color ?? 'blue'} open={open3.value} closeOnOverlayClick={false} onUpdate:open={(value: boolean) => {
            open3.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 16px 0'
            }}>Sheet 3 — small</h2>
                            <p style={{
              margin: '0 0 24px 0',
              fontSize: '14px'
            }}>
                                Three sheets deep. Close in reverse order.
                            </p>
                            <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
              open3.value = false;
            }} />
                        </NeoSheet>
                    </div>;
      }
    });
  }
}`,...(Ee=(De=E.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Ie,Le,Ue;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const isOpen = ref(false)
const name = ref('')
const email = ref('')
<\/script>

<template>
  <NeoButton text="Open Settings" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet
    color="blue"
    position="right"
    size="large"
    :close-on-overlay-click="false"
    close-aria-label="Close"
    aria-label="Settings form"
    v-model:open="isOpen"
  >
    <div style="display: flex; flex-direction: column; gap: 24px; height: 100%;">
      <h2>Settings</h2>
      <form style="display: flex; flex-direction: column; gap: 16px; flex: 1;">
        <NeoInput name="name" label="Name" color="blue" v-model:value="name" />
        <NeoInput name="email" label="Email" type="email" color="blue" v-model:value="email" />
      </form>
      <div style="display: flex; gap: 12px; justify-content: flex-end;">
        <NeoButton text="Cancel" color="blue" variant="secondary" @click="isOpen = false" />
        <NeoButton text="Save Changes" color="blue" variant="primary" @click="isOpen = false" />
      </div>
    </div>
  </NeoSheet>
</template>\`
      }
    }
  },
  render: (args: NeoSheetProps) => {
    return defineComponent({
      name: 'FormExampleRender',
      setup() {
        const isOpen = ref(false);
        const formData = ref({
          name: '',
          email: '',
          message: ''
        });
        return () => <div>
                        <NeoButton text="Open Settings" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            isOpen.value = true;
          }} />
                        <NeoSheet {...args} position="right" size="large" open={isOpen.value} closeOnOverlayClick={false} closeAriaLabel="Close" onUpdate:open={(value: boolean) => {
            isOpen.value = value;
          }} ariaLabel="Settings form">
                            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              blockSize: '100%'
            }}>
                                <h2 style={{
                margin: 0
              }}>Settings</h2>

                                <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                flex: 1
              }}>
                                    <NeoInput name="name" label="Name" color={args.color ?? 'blue'} value={formData.value.name} onUpdate:value={value => {
                  formData.value.name = String(value);
                }} />
                                    <NeoInput name="email" label="Email" type="email" color={args.color ?? 'blue'} value={formData.value.email} onUpdate:value={value => {
                  formData.value.email = String(value);
                }} />
                                </form>

                                <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'flex-end',
                borderTop: '1px solid var(--neo-color-grey200)',
                paddingTop: '16px'
              }}>
                                    <NeoButton text="Cancel" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
                  isOpen.value = false;
                }} />
                                    <NeoButton text="Save Changes" color={args.color ?? 'blue'} variant="primary" onClick={() => {
                  isOpen.value = false;
                }} />
                                </div>
                            </div>
                        </NeoSheet>
                    </div>;
      }
    });
  }
}`,...(Ue=(Le=I.parameters)==null?void 0:Le.docs)==null?void 0:Ue.source}}};var Ae,Pe,Re;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  args: {
    open: true,
    closeAriaLabel: 'Close'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    },
    docs: {
      source: {
        code: \`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <div class="u-onDark">
    <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
    <NeoSheet color="blue" position="right" v-model:open="isOpen">
      <h2>Sheet Title</h2>
      <p>This is a basic sheet. Click outside or press Escape to close.</p>
      <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
    </NeoSheet>
  </div>
</template>\`
      }
    }
  },
  render: renderOpenSheet
}`,...(Re=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Fe,qe,Me;U.parameters={...U.parameters,docs:{...(Fe=U.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    open: true,
    closeAriaLabel: 'Close'
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Pass open as a static prop (or :open="true") to render the sheet pre-opened -->
<NeoSheet color="blue" position="right" :open="true" close-aria-label="Close">
  <h2>Sheet Title</h2>
  <p>Sheet starts open — useful for accessibility testing.</p>
  <NeoButton text="Action" color="blue" variant="primary" />
</NeoSheet>\`
      }
    }
  },
  render: renderOpenSheet
}`,...(Me=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var Ge,je,We;A.parameters={...A.parameters,docs:{...(Ge=A.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<!-- variant="filled" fills the sheet with the theme color.
     Use color="black" for buttons inside — setOnDark renders them white automatically. -->
<NeoSheet color="blue" position="right" variant="filled" close-aria-label="Close"
  v-model:open="isOpen">
  <h2>Filled Sheet</h2>
  <NeoButton text="Primary Action" color="black" variant="primary" @click="isOpen = false" />
  <NeoButton text="Close" color="black" variant="secondary" @click="isOpen = false" />
</NeoSheet>\`
      }
    }
  },
  render: (args: NeoSheetProps) => {
    return defineComponent({
      name: 'FilledRender',
      setup() {
        const isOpen = ref(false);
        return () => <div>
                        <NeoButton text="Open Filled Sheet" color={args.color ?? 'blue'} variant="primary" onClick={() => {
            isOpen.value = true;
          }} />
                        <NeoSheet {...args} variant="filled" open={isOpen.value} closeAriaLabel="Close" onUpdate:open={(value: boolean) => {
            isOpen.value = value;
          }}>
                            <h2 style={{
              margin: '0 0 16px 0'
            }}>Filled Sheet</h2>
                            <p style={{
              margin: '0 0 24px 0'
            }}>
                                Use <code>color="black"</code> for buttons inside a filled sheet — the{' '}
                                <code>setOnDark</code> cascade automatically renders them white on dark backgrounds.
                            </p>
                            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
                                <NeoButton text="Primary Action" color="black" variant="primary" onClick={() => {
                isOpen.value = false;
              }} />
                                <NeoButton text="Close" color="black" variant="secondary" onClick={() => {
                isOpen.value = false;
              }} />
                            </div>
                        </NeoSheet>
                    </div>;
      }
    });
  }
}`,...(We=(je=A.parameters)==null?void 0:je.docs)==null?void 0:We.source}}};var He,Qe,_e;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'filled',
    open: true,
    closeAriaLabel: 'Close'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoSheet color="blue" position="right" variant="filled" :open="true" close-aria-label="Close">
  <h2>Filled Sheet</h2>
  <NeoButton text="Primary Action" color="black" variant="primary" />
  <NeoButton text="Secondary" color="black" variant="secondary" />
</NeoSheet>\`
      }
    }
  },
  render: (args: NeoSheetProps) => {
    return defineComponent({
      name: 'FilledOpenRender',
      setup() {
        return () => <NeoSheet {...args}>
                        <h2 style={{
            margin: '0 0 16px 0'
          }}>Filled Sheet</h2>
                        <p style={{
            margin: '0 0 24px 0'
          }}>
                            Buttons inside a filled sheet flip to white via setOnDark.
                        </p>
                        <div style={{
            display: 'flex',
            gap: '12px'
          }}>
                            <NeoButton text="Primary Action" color="black" variant="primary" />
                            <NeoButton text="Secondary" color="black" variant="secondary" />
                        </div>
                    </NeoSheet>;
      }
    });
  }
}`,...(_e=(Qe=P.parameters)==null?void 0:Qe.docs)==null?void 0:_e.source}}};const ut=["Default","DefaultInteraction","PositionLeft","PositionBottom","SizeSmall","SizeLarge","SizeFull","PersistentSheet","PersistentSheetInteraction","NavigationWithSearch","MultipleSheets","StackedRight","StackedLeft","StackedBottom","StackedNested","FormExample","OnDark","DefaultOpen","Filled","FilledOpen"];export{f as Default,b as DefaultInteraction,U as DefaultOpen,A as Filled,P as FilledOpen,I as FormExample,z as MultipleSheets,B as NavigationWithSearch,L as OnDark,g as PersistentSheet,C as PersistentSheetInteraction,x as PositionBottom,S as PositionLeft,O as SizeFull,k as SizeLarge,N as SizeSmall,D as StackedBottom,T as StackedLeft,E as StackedNested,w as StackedRight,ut as __namedExportsOrder,pt as default};
