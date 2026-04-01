import{d,r as i,c as e,m as y,a as o}from"./iframe-Da9xFhCi.js";import{N as c}from"./NeoSheet-BH-H0Nlv.js";import{N as a}from"./NeoButton-84VSvbyW.js";import{N as R}from"./NeoNavItem-KjEU_-gu.js";import{N as F}from"./NeoInput-D-9KApW3.js";import{a as Ve}from"./argTypes-VnJZhiy7.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./useButton-CSX7DRNZ.js";import"./NeoIcon-DKGCrn9N.js";import"./id-DERw85mN.js";const Ye=["left","right","bottom"],Ke=["small","medium","large","full"],Je=["default","filled"],{expect:u,fn:Xe,userEvent:h,waitFor:v,within:q}=__STORYBOOK_MODULE_TEST__,ct={title:"Molecules/NeoSheet",component:c,tags:["autodocs"],argTypes:{...Ve,color:{description:"Theme color. Only visible in the `filled` variant.",table:{category:"Appearance"}},variant:{control:"select",options:Je,description:"`default`: neutral background (white / grey900 in dark mode). `filled`: uses the theme color as background, establishing its own dark context via `setOnDark`.",table:{category:"Appearance"}},position:{control:"select",options:Ye,description:"Which edge the sheet slides in from.",table:{category:"Appearance"}},size:{control:"select",options:Ke,description:"Width (for `left`/`right`) or height (for `bottom`) of the sheet.",table:{category:"Appearance"}},open:{control:"boolean",description:"Controls whether the sheet is visible. Must be paired with `@update:open` to close via overlay/Escape.",table:{category:"State"}},modal:{control:"boolean",description:"When true, renders a dimmed backdrop overlay behind the sheet. When false, the background remains interactive — useful for stacked sheet patterns.",table:{category:"Behavior"}},closeOnOverlayClick:{control:"boolean",description:"Clicking the overlay emits `update:open(false)`. Only applies when `modal` is true.",table:{category:"Behavior"}},closeOnEscape:{control:"boolean",description:"Pressing Escape emits `update:open(false)`.",table:{category:"Behavior"}},zIndex:{control:"number",description:"CSS z-index of the sheet. Managed automatically when using the stacking system — only override if you need to break out of the stacking context.",table:{category:"Behavior"}},ariaLabelledby:{control:"text",description:"ID of the element that labels the sheet (e.g. a heading inside the sheet). Used for `aria-labelledby` on the sheet panel.",table:{category:"Accessibility"}},closeAriaLabel:{control:"text",description:"Accessible label for the close button rendered in the sheet header.",table:{category:"Accessibility"}}},args:{position:"right",size:"medium",color:"blue",open:!1,closeOnOverlayClick:!0,closeOnEscape:!0,modal:!0,"onUpdate:open":Xe()}},m={parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`}}},render:t=>d({name:"DefaultRender",setup(){const n=i(!1),r=()=>{n.value=!0},l=s=>{n.value=s};return()=>e("div",null,[e(a,{text:"Open Sheet",color:t.color??"blue",variant:"primary",onClick:r},null),e(c,y(t,{open:n.value,"onUpdate:open":l}),{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[o("Sheet Title")]),e("p",null,[o("This is a basic sheet. Click outside or press Escape to close.")]),e("div",{style:{marginTop:"24px"}},[e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>l(!1)},null)])]})])}})},b={...m,tags:["!dev"],play:async({canvasElement:t,step:n})=>{const r=q(t);await n("Open sheet via trigger button",async()=>{await h.click(r.getByText("Open Sheet")),await v(()=>u(document.querySelector(".NeoSheet")).not.toBeNull())}),await n("Overlay has visible dimensions",async()=>{const l=document.querySelector(".NeoSheet-overlay");u(l).not.toBeNull();const s=l.getBoundingClientRect();u(s.height).toBeGreaterThan(0),u(s.width).toBeGreaterThan(0)}),await n("Clicking the overlay closes the sheet",async()=>{const l=document.querySelector(".NeoSheet-overlay");await h.click(l),await v(()=>u(document.querySelector(".NeoSheet")).toBeNull())}),await n("Pressing Escape closes the sheet",async()=>{await h.click(r.getByText("Open Sheet")),await v(()=>u(document.querySelector(".NeoSheet")).not.toBeNull()),await h.keyboard("{Escape}"),await v(()=>u(document.querySelector(".NeoSheet")).toBeNull())}),await n("Clicking inside the sheet does not close it",async()=>{await h.click(r.getByText("Open Sheet")),await v(()=>u(document.querySelector(".NeoSheet")).not.toBeNull());const l=document.querySelector(".NeoSheet-content");await h.click(l),u(document.querySelector(".NeoSheet")).not.toBeNull(),await h.keyboard("{Escape}"),await v(()=>u(document.querySelector(".NeoSheet")).toBeNull())})}},g={args:{position:"left"},parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="left" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`}}},render:m.render},S={args:{position:"bottom"},parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="bottom" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`}}},render:m.render},x={args:{size:"small"},parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" size="small" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`}}},render:m.render},N={args:{size:"large"},parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" size="large" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`}}},render:m.render},k={args:{size:"full"},parameters:{docs:{source:{code:`<script setup>
const isOpen = ref(false)
<\/script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" size="full" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`}}},render:m.render},f={args:{closeOnOverlayClick:!1,closeOnEscape:!1},parameters:{docs:{source:{code:`<!-- Disable all automatic close triggers — user must interact with a close button -->
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
</NeoSheet>`}}},render:t=>d({name:"PersistentRender",setup(){const n=i(!1);return()=>e("div",null,[e(a,{text:"Open Persistent Sheet",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(c,y(t,{open:n.value,"onUpdate:open":r=>{n.value=r}}),{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[o("Persistent Sheet")]),e("p",null,[o("This sheet cannot be closed by clicking outside or pressing Escape.")]),e("p",null,[o("You must use the close button below.")]),e("div",{style:{marginTop:"24px"}},[e(a,{text:"Close Sheet",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!1}},null)])]})])}})},O={...f,tags:["!dev"],play:async({canvasElement:t,step:n})=>{const r=q(t);await n("Open persistent sheet",async()=>{await h.click(r.getByText("Open Persistent Sheet")),await v(()=>u(document.querySelector(".NeoSheet")).not.toBeNull())}),await n("Overlay has visible dimensions",async()=>{const l=document.querySelector(".NeoSheet-overlay");u(l).not.toBeNull();const s=l.getBoundingClientRect();u(s.height).toBeGreaterThan(0),u(s.width).toBeGreaterThan(0)}),await n("Clicking overlay does not close persistent sheet",async()=>{const l=document.querySelector(".NeoSheet-overlay");await h.click(l),u(document.querySelector(".NeoSheet")).not.toBeNull()}),await n("Escape does not close persistent sheet",async()=>{await h.keyboard("{Escape}"),u(document.querySelector(".NeoSheet")).not.toBeNull()}),await n("Close button closes the sheet",async()=>{await h.click(q(document.body).getByText("Close Sheet")),await v(()=>u(document.querySelector(".NeoSheet")).toBeNull())})}},C={parameters:{docs:{source:{code:`<script setup>
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
</template>`}}},render:t=>d({name:"NavigationWithSearchRender",setup(){const n=i(!1),r=i(""),l=i({products:!1,settings:!1}),s=[{label:"Home",href:"/",icon:"🏠"},{label:"Dashboard",href:"/dashboard",icon:"📊"},{label:"Products",id:"products",icon:"📦",children:[{label:"All Products",href:"/products"},{label:"Categories",href:"/products/categories"},{label:"Inventory",href:"/products/inventory"}]},{label:"Orders",href:"/orders",icon:"🛒",active:!0},{label:"Customers",href:"/customers",icon:"👥"},{label:"Settings",id:"settings",icon:"⚙️",children:[{label:"General",href:"/settings/general"},{label:"Security",href:"/settings/security"},{label:"Notifications",href:"/settings/notifications"}]}],_e=p=>{l.value[p]=!l.value[p]};return()=>e("div",null,[e(a,{text:"Open Navigation",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(c,y(t,{position:"left",open:n.value,"onUpdate:open":p=>{n.value=p},ariaLabel:"Main navigation"}),{default:()=>[e("div",{style:{display:"flex",flexDirection:"column",gap:"16px",blockSize:"100%"}},[e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},[e("h2",{style:{margin:0,fontSize:"18px"}},[o("Navigation")]),e(a,{text:"Close",color:t.color??"blue",size:"small",variant:"ghost",onClick:()=>{n.value=!1}},null)]),e(F,{name:"nav-search",ariaLabel:"Search",color:t.color??"blue",size:"medium",placeholder:"Search...",value:r.value,"onUpdate:value":p=>{r.value=String(p)}},null),e("nav",{style:{display:"flex",flexDirection:"column",gap:"4px",flex:1}},[s.map(p=>e("div",{key:p.label},[e(R,{label:p.label,href:p.children?void 0:p.href,color:t.color??"blue",active:p.active,hasChildren:!!p.children,expanded:p.id?l.value[p.id]:!1,onToggle:()=>p.id&&_e(p.id)},{iconStart:()=>e("span",null,[p.icon])}),p.children&&l.value[p.id]&&e("div",{style:{display:"flex",flexDirection:"column",gap:"2px"}},[p.children.map(A=>e(R,{key:A.label,label:A.label,href:A.href,color:t.color??"blue",level:1,size:"small"},null))])]))]),e("div",{style:{borderTop:"1px solid var(--neo-color-grey200)",paddingTop:"16px"}},[e(R,{label:"Logout",color:"red"},{iconStart:()=>e("span",null,[o("🚪")])})])])]})])}})},B={parameters:{docs:{source:{code:`<script setup>
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
</template>`}}},render:()=>d({name:"MultipleSheetsRender",setup(){const t=i(!1),n=i(!1),r=i(!1);return()=>e("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},[e(a,{text:"Open Left Sheet",color:"blue",variant:"primary",onClick:()=>{t.value=!0}},null),e(a,{text:"Open Right Sheet",color:"green",variant:"primary",onClick:()=>{n.value=!0}},null),e(a,{text:"Open Bottom Sheet",color:"purple",variant:"primary",onClick:()=>{r.value=!0}},null),e(c,{position:"left",size:"small",color:"blue",open:t.value,zIndex:1e3,"onUpdate:open":l=>{t.value=l}},{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[o("Left Sheet")]),e("p",null,[o("This is the left sheet (z-index: 1000)")]),e(a,{text:"Close",color:"blue",variant:"secondary",onClick:()=>{t.value=!1}},null)]}),e(c,{position:"right",size:"small",color:"green",open:n.value,zIndex:1001,"onUpdate:open":l=>{n.value=l}},{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[o("Right Sheet")]),e("p",null,[o("This is the right sheet (z-index: 1001)")]),e(a,{text:"Close",color:"green",variant:"secondary",onClick:()=>{n.value=!1}},null)]}),e(c,{position:"bottom",size:"small",color:"purple",open:r.value,zIndex:1002,"onUpdate:open":l=>{r.value=l}},{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[o("Bottom Sheet")]),e("p",null,[o("This is the bottom sheet (z-index: 1002)")]),e(a,{text:"Close",color:"purple",variant:"secondary",onClick:()=>{r.value=!1}},null)]})])}})},z={parameters:{docs:{source:{code:`<!-- Multiple sheets on the same side stack automatically — no wiring needed.
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
</template>`}}},render:t=>d({name:"StackedRightRender",setup(){const n=i(!1),r=i(!1),l=i(!1);return()=>e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Sheet 1 (large)",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(a,{text:"Sheet 2 (medium)",color:t.color??"blue",variant:"primary",onClick:()=>{r.value=!0}},null),e(a,{text:"Sheet 3 (small)",color:t.color??"blue",variant:"primary",onClick:()=>{l.value=!0}},null),e(c,{position:"right",size:"large",color:t.color??"blue",open:n.value,modal:!1,"onUpdate:open":s=>{n.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[o("Sheet 1 — large")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[o("Open any combination of the three sheets. Stacking is automatic — no coordination needed. Each sheet only stacks with others on the same side. Background stays interactive because "),e("code",null,[o("modal="),!1]),o(".")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{n.value=!1}},null)]}),e(c,{position:"right",size:"medium",color:t.color??"blue",open:r.value,modal:!1,"onUpdate:open":s=>{r.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[o("Sheet 2 — medium")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[o("Any sheet already open on the right gets offset by 24px per depth level. The indent adjusts for size differences so smaller sheets always peek out.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{r.value=!1}},null)]}),e(c,{position:"right",size:"small",color:t.color??"blue",open:l.value,modal:!1,"onUpdate:open":s=>{l.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[o("Sheet 3 — small")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[o("Close sheets in any order — the remaining sheets re-stack and recalculate their offsets automatically.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{l.value=!1}},null)]})])}})},w={parameters:{docs:{source:{code:`<!-- Left and right stacks are fully independent of each other -->
<NeoSheet position="left" size="large" color="blue" :modal="false" v-model:open="open1">
  <h2>Sheet 1 — large</h2>
  <p>Open multiple left sheets to see the stacking peek effect.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
</NeoSheet>
<NeoSheet position="left" size="medium" color="blue" :modal="false" v-model:open="open2">
  <h2>Sheet 2 — medium</h2>
  <p>Left and right sheets are fully independent stacks.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
</NeoSheet>`}}},render:t=>d({name:"StackedLeftRender",setup(){const n=i(!1),r=i(!1),l=i(!1);return()=>e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Sheet 1 (large)",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(a,{text:"Sheet 2 (medium)",color:t.color??"blue",variant:"primary",onClick:()=>{r.value=!0}},null),e(a,{text:"Sheet 3 (small)",color:t.color??"blue",variant:"primary",onClick:()=>{l.value=!0}},null),e(c,{position:"left",size:"large",color:t.color??"blue",open:n.value,modal:!1,"onUpdate:open":s=>{n.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[o("Sheet 1 — large")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[o("Same stacking behaviour as the right position — open all three and verify the peek offset appears on the right edge of background sheets.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{n.value=!1}},null)]}),e(c,{position:"left",size:"medium",color:t.color??"blue",open:r.value,modal:!1,"onUpdate:open":s=>{r.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[o("Sheet 2 — medium")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[o("Left and right sheets are fully independent stacks — opening a left sheet does not affect any right sheet's offset.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{r.value=!1}},null)]}),e(c,{position:"left",size:"small",color:t.color??"blue",open:l.value,modal:!1,"onUpdate:open":s=>{l.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[o("Sheet 3 — small")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[o("Close sheets in any order — the remaining left sheets re-stack independently.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{l.value=!1}},null)]})])}})},T={parameters:{docs:{source:{code:`<!-- Bottom sheets stack independently from left/right sheets -->
<NeoSheet position="bottom" size="large" color="blue" :modal="false" v-model:open="open1">
  <h2>Sheet 1 — large</h2>
  <p>Bottom sheets stack the same way — background sheets peek upward.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
</NeoSheet>
<NeoSheet position="bottom" size="medium" color="blue" :modal="false" v-model:open="open2">
  <h2>Sheet 2 — medium</h2>
  <p>Open all three to see the vertical offset.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
</NeoSheet>`}}},render:t=>d({name:"StackedBottomRender",setup(){const n=i(!1),r=i(!1),l=i(!1);return()=>e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Sheet 1 (large)",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(a,{text:"Sheet 2 (medium)",color:t.color??"blue",variant:"primary",onClick:()=>{r.value=!0}},null),e(a,{text:"Sheet 3 (small)",color:t.color??"blue",variant:"primary",onClick:()=>{l.value=!0}},null),e(c,{position:"bottom",size:"large",color:t.color??"blue",open:n.value,modal:!1,"onUpdate:open":s=>{n.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[o("Sheet 1 — large")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[o("Bottom sheets stack the same way — background sheets peek upward. Open all three to see the vertical offset.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{n.value=!1}},null)]}),e(c,{position:"bottom",size:"medium",color:t.color??"blue",open:r.value,modal:!1,"onUpdate:open":s=>{r.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[o("Sheet 2 — medium")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[o("Bottom sheets are isolated from left/right stacks — they only offset against other bottom sheets.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{r.value=!1}},null)]}),e(c,{position:"bottom",size:"small",color:t.color??"blue",open:l.value,modal:!1,"onUpdate:open":s=>{l.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 8px 0"}},[o("Sheet 3 — small")]),e("p",{style:{margin:"0 0 16px 0",fontSize:"14px"}},[o("Close sheets in any order — remaining bottom sheets recalculate their peek offset.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{l.value=!1}},null)]})])}})},D={parameters:{docs:{source:{code:`<!-- Sheets opened from inside other sheets stack automatically.
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
</template>`}}},render:t=>d({name:"StackedNestedRender",setup(){const n=i(!1),r=i(!1),l=i(!1);return()=>e("div",null,[e(a,{text:"Open Sheet 1",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(c,{position:"right",size:"large",color:t.color??"blue",open:n.value,closeOnOverlayClick:!1,"onUpdate:open":s=>{n.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[o("Sheet 1 — large")]),e("p",{style:{margin:"0 0 24px 0",fontSize:"14px"}},[o("Opened from the page. Modal with "),e("code",null,[o("closeOnOverlayClick="),!1]),o(" — the blurred overlay blocks the background and shows a not-allowed cursor. Open Sheet 2 from here to verify nested stacking.")]),e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Open Sheet 2",color:t.color??"blue",variant:"primary",onClick:()=>{r.value=!0}},null),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{n.value=!1}},null)])]}),e(c,{position:"right",size:"medium",color:t.color??"blue",open:r.value,closeOnOverlayClick:!1,"onUpdate:open":s=>{r.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[o("Sheet 2 — medium")]),e("p",{style:{margin:"0 0 24px 0",fontSize:"14px"}},[o("Opened from inside Sheet 1. Sheet 1 should be indented behind this one. Stacking is automatic — no parent/child wiring needed. Open Sheet 3 to add another level.")]),e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Open Sheet 3",color:t.color??"blue",variant:"primary",onClick:()=>{l.value=!0}},null),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{r.value=!1}},null)])]}),e(c,{position:"right",size:"small",color:t.color??"blue",open:l.value,closeOnOverlayClick:!1,"onUpdate:open":s=>{l.value=s}},{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[o("Sheet 3 — small")]),e("p",{style:{margin:"0 0 24px 0",fontSize:"14px"}},[o("Three sheets deep. Close in reverse order — each sheet removes itself from the stack and the remaining ones re-offset automatically.")]),e(a,{text:"Close",color:t.color??"blue",variant:"secondary",onClick:()=>{l.value=!1}},null)]})])}})},E={parameters:{docs:{source:{code:`<script setup>
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
</template>`}}},render:t=>d({name:"FormExampleRender",setup(){const n=i(!1),r=i({name:"",email:"",message:""});return()=>e("div",null,[e(a,{text:"Open Settings",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(c,y(t,{position:"right",size:"large",open:n.value,closeOnOverlayClick:!1,closeAriaLabel:"Close","onUpdate:open":l=>{n.value=l},ariaLabel:"Settings form"}),{default:()=>[e("div",{style:{display:"flex",flexDirection:"column",gap:"24px",blockSize:"100%"}},[e("h2",{style:{margin:0}},[o("Settings")]),e("form",{style:{display:"flex",flexDirection:"column",gap:"16px",flex:1}},[e(F,{name:"name",label:"Name",color:t.color??"blue",value:r.value.name,"onUpdate:value":l=>{r.value.name=String(l)}},null),e(F,{name:"email",label:"Email",type:"email",color:t.color??"blue",value:r.value.email,"onUpdate:value":l=>{r.value.email=String(l)}},null)]),e("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",borderTop:"1px solid var(--neo-color-grey200)",paddingTop:"16px"}},[e(a,{text:"Cancel",color:t.color??"blue",variant:"secondary",onClick:()=>{n.value=!1}},null),e(a,{text:"Save Changes",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!1}},null)])])]})])}})},I={globals:{backgrounds:"#000"},parameters:{docs:{source:{code:`<script setup>
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
</template>`}}},render:m.render},U={args:{open:!0,closeAriaLabel:"Close"},parameters:{docs:{source:{code:`<!-- Pass open as a static prop (or :open="true") to render the sheet pre-opened -->
<NeoSheet color="blue" position="right" :open="true" close-aria-label="Close">
  <h2>Sheet Title</h2>
  <p>Sheet starts open — useful for accessibility testing.</p>
  <NeoButton text="Action" color="blue" variant="primary" />
</NeoSheet>`}}},render:t=>d({name:"DefaultOpenRender",setup(){return()=>e(c,t,{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[o("Sheet Title")]),e("p",{style:{margin:"0 0 24px 0"}},[o("This sheet starts open for accessibility testing. All interactive content inside is visible and testable without user interaction.")]),e(a,{text:"Action",color:t.color??"blue",variant:"primary"},null)]})}})},P={parameters:{docs:{source:{code:`<!-- variant="filled" fills the sheet with the theme color.
     Use color="black" for buttons inside — setOnDark renders them white automatically. -->
<NeoSheet color="blue" position="right" variant="filled" close-aria-label="Close"
  v-model:open="isOpen">
  <h2>Filled Sheet</h2>
  <NeoButton text="Primary Action" color="black" variant="primary" @click="isOpen = false" />
  <NeoButton text="Close" color="black" variant="secondary" @click="isOpen = false" />
</NeoSheet>`}}},render:t=>d({name:"FilledRender",setup(){const n=i(!1);return()=>e("div",null,[e(a,{text:"Open Filled Sheet",color:t.color??"blue",variant:"primary",onClick:()=>{n.value=!0}},null),e(c,y(t,{variant:"filled",open:n.value,closeAriaLabel:"Close","onUpdate:open":r=>{n.value=r}}),{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[o("Filled Sheet")]),e("p",{style:{margin:"0 0 24px 0"}},[o("Use "),e("code",null,[o('color="black"')]),o(" for buttons inside a filled sheet — the")," ",e("code",null,[o("setOnDark")]),o(" cascade automatically renders them white on dark backgrounds.")]),e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Primary Action",color:"black",variant:"primary",onClick:()=>{n.value=!1}},null),e(a,{text:"Close",color:"black",variant:"secondary",onClick:()=>{n.value=!1}},null)])]})])}})},L={args:{variant:"filled",open:!0,closeAriaLabel:"Close"},parameters:{docs:{source:{code:`<NeoSheet color="blue" position="right" variant="filled" :open="true" close-aria-label="Close">
  <h2>Filled Sheet</h2>
  <NeoButton text="Primary Action" color="black" variant="primary" />
  <NeoButton text="Secondary" color="black" variant="secondary" />
</NeoSheet>`}}},render:t=>d({name:"FilledOpenRender",setup(){return()=>e(c,t,{default:()=>[e("h2",{style:{margin:"0 0 16px 0"}},[o("Filled Sheet")]),e("p",{style:{margin:"0 0 24px 0"}},[o("Buttons use "),e("code",null,[o('color="black"')]),o(". The "),e("code",null,[o("setOnDark")]),o(" cascade set by the filled sheet automatically renders them white — accessible and visually clear against the colored background.")]),e("div",{style:{display:"flex",gap:"12px"}},[e(a,{text:"Primary Action",color:"black",variant:"primary"},null),e(a,{text:"Secondary",color:"black",variant:"secondary"},null)])]})}})};var M,G,j;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(j=(G=m.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var W,H,Q;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var _,V,Y;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    position: 'left'
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
  render: Default.render
}`,...(Y=(V=g.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var K,J,X;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    position: 'bottom'
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
  render: Default.render
}`,...(X=(J=S.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: 'small'
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
  render: Default.render
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,oe;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    size: 'large'
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
  render: Default.render
}`,...(oe=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,ae,re;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    size: 'full'
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
  render: Default.render
}`,...(re=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ie,ce;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var pe,ue,de;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(de=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var he,me,ve;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ve=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var fe,ye,be;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var ge,Se,xe;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
        const open1 = ref(false);
        const open2 = ref(false);
        const open3 = ref(false);
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
}`,...(xe=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var Ne,ke,Oe;w.parameters={...w.parameters,docs:{...(Ne=w.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
        const open1 = ref(false);
        const open2 = ref(false);
        const open3 = ref(false);
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
}`,...(Oe=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source}}};var Ce,Be,ze;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
        const open1 = ref(false);
        const open2 = ref(false);
        const open3 = ref(false);
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
}`,...(ze=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var we,Te,De;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
        const open1 = ref(false);
        const open2 = ref(false);
        const open3 = ref(false);
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
                                Opened from the page. Modal with <code>closeOnOverlayClick={false}</code> — the
                                blurred overlay blocks the background and shows a not-allowed cursor. Open Sheet 2
                                from here to verify nested stacking.
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
                                Opened from inside Sheet 1. Sheet 1 should be indented behind this one. Stacking is
                                automatic — no parent/child wiring needed. Open Sheet 3 to add another level.
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
                                Three sheets deep. Close in reverse order — each sheet removes itself from the stack
                                and the remaining ones re-offset automatically.
                            </p>
                            <NeoButton text="Close" color={args.color ?? 'blue'} variant="secondary" onClick={() => {
              open3.value = false;
            }} />
                        </NeoSheet>
                    </div>;
      }
    });
  }
}`,...(De=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Ee,Ie,Ue;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ue=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:Ue.source}}};var Pe,Le,Ae;I.parameters={...I.parameters,docs:{...(Pe=I.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  parameters: {
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
  render: Default.render
}`,...(Ae=(Le=I.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source}}};var Re,Fe,qe;U.parameters={...U.parameters,docs:{...(Re=U.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
  render: (args: NeoSheetProps) => {
    return defineComponent({
      name: 'DefaultOpenRender',
      setup() {
        return () => <NeoSheet {...args}>
                        <h2 style={{
            margin: '0 0 16px 0'
          }}>Sheet Title</h2>
                        <p style={{
            margin: '0 0 24px 0'
          }}>
                            This sheet starts open for accessibility testing. All interactive content inside is
                            visible and testable without user interaction.
                        </p>
                        <NeoButton text="Action" color={args.color ?? 'blue'} variant="primary" />
                    </NeoSheet>;
      }
    });
  }
}`,...(qe=(Fe=U.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source}}};var Me,Ge,je;P.parameters={...P.parameters,docs:{...(Me=P.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(je=(Ge=P.parameters)==null?void 0:Ge.docs)==null?void 0:je.source}}};var We,He,Qe;L.parameters={...L.parameters,docs:{...(We=L.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
                            Buttons use <code>color="black"</code>. The <code>setOnDark</code> cascade set by the
                            filled sheet automatically renders them white — accessible and visually clear against
                            the colored background.
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
}`,...(Qe=(He=L.parameters)==null?void 0:He.docs)==null?void 0:Qe.source}}};const pt=["Default","DefaultInteraction","PositionLeft","PositionBottom","SizeSmall","SizeLarge","SizeFull","PersistentSheet","PersistentSheetInteraction","NavigationWithSearch","MultipleSheets","StackedRight","StackedLeft","StackedBottom","StackedNested","FormExample","OnDark","DefaultOpen","Filled","FilledOpen"];export{m as Default,b as DefaultInteraction,U as DefaultOpen,P as Filled,L as FilledOpen,E as FormExample,B as MultipleSheets,C as NavigationWithSearch,I as OnDark,f as PersistentSheet,O as PersistentSheetInteraction,S as PositionBottom,g as PositionLeft,k as SizeFull,N as SizeLarge,x as SizeSmall,T as StackedBottom,w as StackedLeft,D as StackedNested,z as StackedRight,pt as __namedExportsOrder,ct as default};
