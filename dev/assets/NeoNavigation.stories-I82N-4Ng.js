import{d as a,c as t,r as E,F as s}from"./iframe-CiKriRT1.js";import{N as n}from"./NeoNavigation-G0sCVUow.js";import{N as o}from"./NeoButton-DCMyD-nc.js";import{N as Ge}from"./NeoImage-BCVAdjA1.js";import{a as Ke}from"./argTypes-VnJZhiy7.js";import{c as Te}from"./colorShowcase-C8uURTUW.js";import{c as Fe}from"./createA11yPlay-CfdnV7f3.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoLink-Dx8h_Esr.js";import"./NeoIconButton-CENPnIPS.js";import"./NeoIcon-C0BXFYWY.js";import"./NeoNavItem-DVaqOXB5.js";import"./NeoSheet-OzOb9Pq9.js";import"./NeoDropdown-D6ekuDoT.js";import"./useButton-DBp_idSP.js";import"./axe-6MnRr2qa.js";const Ye=["default","compact","flyout"],Je=["mobile","always"],{expect:c,fn:Qe,userEvent:D,waitFor:I,within:qe}=__STORYBOOK_MODULE_TEST__,Xe=new URL(""+new URL("../favicon.svg",import.meta.url).href,import.meta.url).href,Ze=[{text:"Home",href:"/",active:!0},{text:"Games",href:"/games"},{text:"About",href:"/about"},{text:"Contact",href:"/contact"}],He=[{text:"Home",href:"/",active:!0},{text:"Products",children:[{text:"All Products",href:"/products"},{text:"Featured",href:"/products/featured"},{text:"New Arrivals",href:"/products/new"},{text:"On Sale",href:"/products/sale"}]},{text:"Categories",children:[{text:"Electronics",href:"/categories/electronics"},{text:"Clothing",href:"/categories/clothing"},{text:"Home & Garden",href:"/categories/home"}]},{text:"About",href:"/about"},{text:"Contact",href:"/contact"}],r=(e="NeoMateria")=>t("div",{style:{alignItems:"center",display:"flex",gap:"8px"}},[t(Ge,{src:Xe,alt:"",width:24,height:24,objectFit:"contain"},null),t("span",{style:{color:"var(--neo-theme-color)",fontSize:"18px",fontWeight:"bold"}},[e])]),ht={title:"Organisms/NeoNavigation",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"**Exposed method:** `close()` — programmatically closes the mobile menu via a template ref. Usage: `const navRef = ref<NeoNavigationExpose>(); navRef.value?.close()`."}}},decorators:[()=>({template:'<story /><main style="padding: 24px; min-block-size: 1500px;"><p aria-hidden="true" style="visibility: hidden;">Page content goes here. Scroll to see the sticky navigation.</p></main>'})],argTypes:{...Ke,color:{description:"Theme color for active link states, hover accents, and the mobile menu header.",table:{category:"Appearance"}},links:{control:!1,description:"Array of navigation links. Each link: `{ text, href, active?, external?, children? }`. Add a `children` array to create a dropdown.",table:{category:"Content"}},menuLabel:{control:"text",description:"Text for the mobile hamburger menu button.",table:{category:"Content"}},closeLabel:{control:"text",description:"Text for the mobile menu close button.",table:{category:"Content"}},menuAriaLabel:{control:"text",description:"Accessible label for the mobile menu toggle button. Used when `menuLabel` is not descriptive enough on its own.",table:{category:"Accessibility"}},variant:{control:"select",options:Ye,description:"`default`: standard nav with inline dropdowns. `compact`: always shows the mobile hamburger toggle; actions remain visible on desktop. `flyout`: parent links open a full-width panel below the bar instead of an inline dropdown.",table:{category:"Appearance"}},collapseActions:{control:"select",options:[void 0,...Je],description:"`mobile`: action buttons render inline on desktop, collapsed into a `•••` dropdown on mobile. Use this whenever you combine a `logo` slot with multiple action buttons — without it the bar overflows on narrow screens. `always`: always collapsed regardless of viewport.",table:{category:"Behavior"}},actionsMenuAriaLabel:{control:"text",description:"Accessible label for the 'more actions' dropdown trigger button shown when `collapseActions` is set.",table:{category:"Accessibility"}},mobileBreakpoint:{control:"select",options:["sm","md","lg"],description:"Viewport breakpoint at which the navigation switches from the mobile hamburger layout to the full desktop layout.",table:{category:"Behavior"}},logo:{control:!1,description:"Brand logo displayed in the navigation bar.",table:{category:"Slots"}},dropdownIcon:{control:!1,description:"Custom dropdown chevron icon. Receives `isOpen` to allow rotation or icon swap.",table:{category:"Slots"}},actions:{control:!1,description:"Action buttons displayed in the navigation bar (e.g. login, search).",table:{category:"Slots"}},actionsMenuTrigger:{control:!1,description:"Custom trigger button for the collapsed actions dropdown. Receives `isOpen`.",table:{category:"Slots"}},menuIcon:{control:!1,description:"Custom icon for the mobile hamburger menu button.",table:{category:"Slots"}},mobileMenu:{control:!1,description:"Custom content for the mobile menu panel, replacing auto-generated links.",table:{category:"Slots"}},mobileLogo:{control:!1,description:"Brand logo displayed inside the mobile menu panel.",table:{category:"Slots"}},mobileActions:{control:!1,description:"Action buttons displayed inside the mobile menu panel.",table:{category:"Slots"}}},args:{color:"blue",variant:"default",ariaLabel:"Main navigation",menuLabel:"Menu",closeLabel:"Close",links:Ze,"onToggle-mobile-menu":Qe()}},v={tags:["snapshot"]},h={tags:["snapshot"],args:{variant:"compact",collapseActions:"mobile"},parameters:{docs:{source:{code:`<!-- Compact: always shows mobile menu toggle, actions visible on desktop and collapsed on mobile -->
<NeoNavigation color="blue" variant="compact" collapse-actions="mobile" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"CompactRender",setup(){return()=>t(n,e,{logo:()=>r(),actions:()=>t(s,null,[t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null),t(o,{text:"Sign Up",color:e.color,size:"medium",variant:"primary",rounded:!0},null)])})}})},p={tags:["snapshot"],args:{variant:"flyout",collapseActions:"mobile",links:He},parameters:{docs:{source:{code:`<!-- Flyout: parent links open a full-width panel below the nav bar instead of inline dropdowns -->
<NeoNavigation color="blue" variant="flyout" collapse-actions="mobile" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"FlyoutRender",setup(){return()=>t(n,e,{logo:()=>r(),actions:()=>t(s,null,[t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null),t(o,{text:"Sign Up",color:e.color,size:"medium",variant:"primary",rounded:!0},null)])})}})},b={...p,tags:["snapshot"],args:{...p.args,collapseActions:"always"},play:async({canvasElement:e})=>{const i=qe(e).getByText("Products");await D.click(i),await I(()=>c(e.querySelector(".NeoNavigation-flyoutPanel")).not.toBeNull())}},N={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoNavigation color="blue" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
</NeoNavigation>`}}},render:e=>a({name:"WithLogoRender",setup(){return()=>t(n,e,{logo:()=>r()})}})},y={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoNavigation color="blue" :links="links" aria-label="Main navigation">
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"WithActionsRender",setup(){return()=>t(n,e,{actions:()=>t(s,null,[t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null),t(o,{text:"Sign Up",color:e.color,size:"medium",variant:"primary",rounded:!0},null)])})}})},f={tags:["snapshot"],args:{collapseActions:"mobile"},parameters:{docs:{source:{code:`<NeoNavigation color="blue" collapse-actions="mobile" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"CompleteRender",setup(){return()=>t(n,e,{logo:()=>r("NeoMateria"),actions:()=>t(s,null,[t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null),t(o,{text:"Sign Up",color:e.color,size:"medium",variant:"primary",rounded:!0},null)])})}})},x={tags:["snapshot"],args:{collapseActions:"mobile"},parameters:{docs:{source:{code:`<!-- The actions slot accepts any content — buttons, icon buttons, dropdowns, toggles, etc. -->
<script setup>
const isDark = ref(false)
const language = ref('EN')
<\/script>

<template>
  <NeoNavigation color="blue" collapse-actions="mobile" :links="links" aria-label="Main navigation" menuLabel="Menu" closeLabel="Close">
    <template #logo>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
        <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
      </div>
    </template>
    <template #actions>
      <!-- Language toggle -->
      <NeoButton
        :text="language === 'EN' ? 'DE' : 'EN'"
        color="blue"
        size="small"
        variant="ghost"
        @click="language = language === 'EN' ? 'DE' : 'EN'"
      />
      <!-- Dark mode toggle -->
      <NeoButton
        :text="isDark ? 'Light' : 'Dark'"
        color="blue"
        size="small"
        variant="ghost"
        @click="isDark = !isDark"
      />
      <!-- Login -->
      <NeoButton text="Log in" color="blue" size="small" variant="tertiary" />
      <NeoButton text="Sign up" color="blue" size="small" variant="primary" rounded />
    </template>
  </NeoNavigation>
</template>`}}},render:e=>a({name:"WithRichActionsRender",setup(){const l=E(!1),i=E("EN");return()=>t(n,e,{logo:()=>r("NeoMateria"),actions:()=>t(s,null,[t(o,{text:i.value==="EN"?"DE":"EN",color:e.color,size:"small",variant:"ghost",onClick:()=>{i.value=i.value==="EN"?"DE":"EN"}},null),t(o,{text:l.value?"Light":"Dark",color:e.color,size:"small",variant:"ghost",onClick:()=>{l.value=!l.value}},null),t(o,{text:"Log in",color:e.color,size:"small",variant:"tertiary"},null),t(o,{text:"Sign up",color:e.color,size:"small",variant:"primary",rounded:!0},null)])})}})},w={tags:["snapshot"],args:{collapseActions:"mobile"},parameters:{docs:{source:{code:`<!-- collapseActions="mobile": on mobile the actions are hidden behind a three-dots button;
     on desktop they render inline as normal -->
<NeoNavigation color="blue" :links="links" collapse-actions="mobile" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"CollapseActionsMobileRender",setup(){return()=>t(n,e,{logo:()=>r(),actions:()=>t(s,null,[t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null),t(o,{text:"Sign Up",color:e.color,size:"medium",variant:"primary",rounded:!0},null)])})}})},k={tags:["snapshot"],args:{collapseActions:"always"},parameters:{docs:{source:{code:`<!-- collapseActions="always": actions always behind the three-dots button regardless of viewport -->
<NeoNavigation color="blue" :links="links" collapse-actions="always" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Profile" color="blue" size="medium" variant="ghost" />
    <NeoButton text="Settings" color="blue" size="medium" variant="ghost" />
    <NeoButton text="Sign Out" color="blue" size="medium" variant="tertiary" />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"CollapseActionsAlwaysRender",setup(){return()=>t(n,e,{logo:()=>r(),actions:()=>t(s,null,[t(o,{text:"Profile",color:e.color,size:"medium",variant:"ghost"},null),t(o,{text:"Settings",color:e.color,size:"medium",variant:"ghost"},null),t(o,{text:"Sign Out",color:e.color,size:"medium",variant:"tertiary"},null)])})}})},S={tags:["snapshot"],args:{links:He},parameters:{docs:{source:{code:`<!-- Add children arrays to link items to create dropdown menus -->
<NeoNavigation
  color="blue"
  aria-label="Main navigation"
  :links="[
    { text: 'Home', href: '/', active: true },
    {
      text: 'Products',
      children: [
        { text: 'All Products', href: '/products' },
        { text: 'Featured', href: '/products/featured' },
      ],
    },
    { text: 'About', href: '/about' },
  ]"
>
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"WithDropdownsRender",setup(){return()=>t(n,e,{logo:()=>r(),actions:()=>t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null)})}})},B={tags:["snapshot"],args:{links:[]},parameters:{docs:{source:{code:`<!-- Pass an empty links array to render a navbar with only logo + actions -->
<NeoNavigation color="blue" :links="[]" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">Brand</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Action" color="blue" size="medium" variant="primary" />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"MinimalWithoutLinksRender",setup(){return()=>t(n,e,{logo:()=>r("Brand"),actions:()=>t(o,{text:"Action",color:e.color,size:"medium",variant:"primary"},null)})}})},m={tags:["snapshot"],parameters:{viewport:{defaultViewport:"mobile1"},docs:{source:{code:`<!-- At mobile viewport the nav hides desktop links and shows the hamburger toggle -->
<NeoNavigation color="blue" :links="links" aria-label="Main navigation" menuLabel="Menu" closeLabel="Close">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"MobileMenuRender",setup(){return()=>t(n,e,{logo:()=>r(),actions:()=>t(o,{text:"Sign Up",color:e.color,size:"medium",variant:"primary",rounded:!0},null)})}})},z={...m,tags:["!dev"],play:async({args:e,canvasElement:l,step:i})=>{const _e=qe(l);await i("Open mobile menu via toggle button",async()=>{const u=_e.getByText("Menu");await D.click(u),await I(()=>c(document.querySelector(".NeoSheet")).not.toBeNull()),await I(()=>c(e["onToggle-mobile-menu"]).toHaveBeenCalledWith(!0))}),await i("Sheet overlay closes the mobile menu",async()=>{const u=document.querySelector(".NeoSheet-overlay");c(u).not.toBeNull();const Ve=u.getBoundingClientRect();c(Ve.height).toBeGreaterThan(0),await D.click(u),await I(()=>c(document.querySelector(".NeoSheet")).toBeNull())})}},A={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]},docs:{source:{code:`<!-- Wrap in .u-onDark to activate dark-mode token overrides -->
<div class="u-onDark">
  <NeoNavigation color="blue" :links="links" aria-label="Main navigation">
    <template #logo>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
        <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
      </div>
    </template>
    <template #actions>
      <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    </template>
  </NeoNavigation>
</div>`}}},render:e=>a({name:"OnDarkRender",setup(){return()=>t(n,e,{logo:()=>r(),actions:()=>t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null)})}})},M={tags:["snapshot"],globals:{direction:"rtl"},args:{ariaLabel:"التنقل الرئيسي",menuLabel:"القائمة",closeLabel:"إغلاق"}},d={tags:["snapshot"],parameters:{snapshot:{viewports:["sm","xl"]},a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}},render:Te(n,["default"])},g={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]},a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}},render:Te(n,["default"],{dark:!0})},C={...d,tags:["!dev","test-only"],play:Fe()},L={...g,tags:["!dev","test-only"],play:Fe()};var R,P,U;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(U=(P=v.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var O,W,j;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'compact',
    collapseActions: 'mobile'
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Compact: always shows mobile menu toggle, actions visible on desktop and collapsed on mobile -->
<NeoNavigation color="blue" variant="compact" collapse-actions="mobile" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>\`
      }
    }
  },
  render: (args: NeoNavigationProps) => {
    return defineComponent({
      name: 'CompactRender',
      setup() {
        return () => <NeoNavigation {...args} v-slots={{
          logo: () => renderBrandLogo(),
          actions: () => <>
                                    <NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
                                    <NeoButton text="Sign Up" color={args.color} size="medium" variant="primary" rounded />
                                </>
        }} />;
      }
    });
  }
}`,...(j=(W=h.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var T,F,q;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    variant: 'flyout',
    collapseActions: 'mobile',
    // @ts-expect-error - Vue slot inference conflict with prop type
    links: nestedLinks
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Flyout: parent links open a full-width panel below the nav bar instead of inline dropdowns -->
<NeoNavigation color="blue" variant="flyout" collapse-actions="mobile" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>\`
      }
    }
  },
  render: (args: NeoNavigationProps) => {
    return defineComponent({
      name: 'FlyoutRender',
      setup() {
        return () => <NeoNavigation {...args} v-slots={{
          logo: () => renderBrandLogo(),
          actions: () => <>
                                    <NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
                                    <NeoButton text="Sign Up" color={args.color} size="medium" variant="primary" rounded />
                                </>
        }} />;
      }
    });
  }
}`,...(q=(F=p.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var H,_,V;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Flyout,
  tags: ['snapshot'],
  args: {
    ...Flyout.args,
    collapseActions: 'always'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const productsButton = canvas.getByText('Products');
    await userEvent.click(productsButton);
    await waitFor(() => expect(canvasElement.querySelector('.NeoNavigation-flyoutPanel')).not.toBeNull());
  }
}`,...(V=(_=b.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var G,K,Y;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoNavigation color="blue" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
</NeoNavigation>\`
      }
    }
  },
  render: (args: NeoNavigationProps) => {
    return defineComponent({
      name: 'WithLogoRender',
      setup() {
        return () => <NeoNavigation {...args} v-slots={{
          logo: () => renderBrandLogo()
        }} />;
      }
    });
  }
}`,...(Y=(K=N.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var J,Q,X;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoNavigation color="blue" :links="links" aria-label="Main navigation">
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>\`
      }
    }
  },
  render: (args: NeoNavigationProps) => {
    return defineComponent({
      name: 'WithActionsRender',
      setup() {
        return () => <NeoNavigation {...args} v-slots={{
          actions: () => <>
                                    <NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
                                    <NeoButton text="Sign Up" color={args.color} size="medium" variant="primary" rounded />
                                </>
        }} />;
      }
    });
  }
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    collapseActions: 'mobile'
  },
  parameters: {
    docs: {
      source: {
        code: \`<NeoNavigation color="blue" collapse-actions="mobile" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>\`
      }
    }
  },
  render: (args: NeoNavigationProps) => {
    return defineComponent({
      name: 'CompleteRender',
      setup() {
        return () => <NeoNavigation {...args} v-slots={{
          logo: () => renderBrandLogo('NeoMateria'),
          actions: () => <>
                                    <NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
                                    <NeoButton text="Sign Up" color={args.color} size="medium" variant="primary" rounded />
                                </>
        }} />;
      }
    });
  }
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,oe,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    collapseActions: 'mobile'
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- The actions slot accepts any content — buttons, icon buttons, dropdowns, toggles, etc. -->
<script setup>
const isDark = ref(false)
const language = ref('EN')
<\/script>

<template>
  <NeoNavigation color="blue" collapse-actions="mobile" :links="links" aria-label="Main navigation" menuLabel="Menu" closeLabel="Close">
    <template #logo>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
        <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
      </div>
    </template>
    <template #actions>
      <!-- Language toggle -->
      <NeoButton
        :text="language === 'EN' ? 'DE' : 'EN'"
        color="blue"
        size="small"
        variant="ghost"
        @click="language = language === 'EN' ? 'DE' : 'EN'"
      />
      <!-- Dark mode toggle -->
      <NeoButton
        :text="isDark ? 'Light' : 'Dark'"
        color="blue"
        size="small"
        variant="ghost"
        @click="isDark = !isDark"
      />
      <!-- Login -->
      <NeoButton text="Log in" color="blue" size="small" variant="tertiary" />
      <NeoButton text="Sign up" color="blue" size="small" variant="primary" rounded />
    </template>
  </NeoNavigation>
</template>\`
      }
    }
  },
  render: (args: NeoNavigationProps) => {
    return defineComponent({
      name: 'WithRichActionsRender',
      setup() {
        const isDark = ref(false);
        const language = ref('EN');
        return () => <NeoNavigation {...args} v-slots={{
          logo: () => renderBrandLogo('NeoMateria'),
          actions: () => <>
                                    <NeoButton text={language.value === 'EN' ? 'DE' : 'EN'} color={args.color} size="small" variant="ghost" onClick={() => {
              language.value = language.value === 'EN' ? 'DE' : 'EN';
            }} />
                                    <NeoButton text={isDark.value ? 'Light' : 'Dark'} color={args.color} size="small" variant="ghost" onClick={() => {
              isDark.value = !isDark.value;
            }} />
                                    <NeoButton text="Log in" color={args.color} size="small" variant="tertiary" />
                                    <NeoButton text="Sign up" color={args.color} size="small" variant="primary" rounded />
                                </>
        }} />;
      }
    });
  }
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ae,re,ie;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    collapseActions: 'mobile'
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- collapseActions="mobile": on mobile the actions are hidden behind a three-dots button;
     on desktop they render inline as normal -->
<NeoNavigation color="blue" :links="links" collapse-actions="mobile" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>\`
      }
    }
  },
  render: (args: NeoNavigationProps) => {
    return defineComponent({
      name: 'CollapseActionsMobileRender',
      setup() {
        return () => <NeoNavigation {...args} v-slots={{
          logo: () => renderBrandLogo(),
          actions: () => <>
                                    <NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
                                    <NeoButton text="Sign Up" color={args.color} size="medium" variant="primary" rounded />
                                </>
        }} />;
      }
    });
  }
}`,...(ie=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,le,ce;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    collapseActions: 'always'
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- collapseActions="always": actions always behind the three-dots button regardless of viewport -->
<NeoNavigation color="blue" :links="links" collapse-actions="always" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Profile" color="blue" size="medium" variant="ghost" />
    <NeoButton text="Settings" color="blue" size="medium" variant="ghost" />
    <NeoButton text="Sign Out" color="blue" size="medium" variant="tertiary" />
  </template>
</NeoNavigation>\`
      }
    }
  },
  render: (args: NeoNavigationProps) => {
    return defineComponent({
      name: 'CollapseActionsAlwaysRender',
      setup() {
        return () => <NeoNavigation {...args} v-slots={{
          logo: () => renderBrandLogo(),
          actions: () => <>
                                    <NeoButton text="Profile" color={args.color} size="medium" variant="ghost" />
                                    <NeoButton text="Settings" color={args.color} size="medium" variant="ghost" />
                                    <NeoButton text="Sign Out" color={args.color} size="medium" variant="tertiary" />
                                </>
        }} />;
      }
    });
  }
}`,...(ce=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,ue,me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    // @ts-expect-error - Vue slot inference conflict with prop type
    links: nestedLinks
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Add children arrays to link items to create dropdown menus -->
<NeoNavigation
  color="blue"
  aria-label="Main navigation"
  :links="[
    { text: 'Home', href: '/', active: true },
    {
      text: 'Products',
      children: [
        { text: 'All Products', href: '/products' },
        { text: 'Featured', href: '/products/featured' },
      ],
    },
    { text: 'About', href: '/about' },
  ]"
>
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
  </template>
</NeoNavigation>\`
      }
    }
  },
  render: (args: NeoNavigationProps) => {
    return defineComponent({
      name: 'WithDropdownsRender',
      setup() {
        return () => <NeoNavigation {...args} v-slots={{
          logo: () => renderBrandLogo(),
          actions: () => <NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
        }} />;
      }
    });
  }
}`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var de,ge,ve;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    links: []
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Pass an empty links array to render a navbar with only logo + actions -->
<NeoNavigation color="blue" :links="[]" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">Brand</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Action" color="blue" size="medium" variant="primary" />
  </template>
</NeoNavigation>\`
      }
    }
  },
  render: (args: NeoNavigationProps) => {
    return defineComponent({
      name: 'MinimalWithoutLinksRender',
      setup() {
        return () => <NeoNavigation {...args} v-slots={{
          logo: () => renderBrandLogo('Brand'),
          actions: () => <NeoButton text="Action" color={args.color} size="medium" variant="primary" />
        }} />;
      }
    });
  }
}`,...(ve=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var he,be,Ne;m.parameters={...m.parameters,docs:{...(he=m.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      source: {
        code: \`<!-- At mobile viewport the nav hides desktop links and shows the hamburger toggle -->
<NeoNavigation color="blue" :links="links" aria-label="Main navigation" menuLabel="Menu" closeLabel="Close">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>\`
      }
    }
  },
  render: (args: NeoNavigationProps) => {
    return defineComponent({
      name: 'MobileMenuRender',
      setup() {
        return () => <NeoNavigation {...args} v-slots={{
          logo: () => renderBrandLogo(),
          actions: () => <NeoButton text="Sign Up" color={args.color} size="medium" variant="primary" rounded />
        }} />;
      }
    });
  }
}`,...(Ne=(be=m.parameters)==null?void 0:be.docs)==null?void 0:Ne.source}}};var ye,fe,xe;z.parameters={...z.parameters,docs:{...(ye=z.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  ...MobileMenu,
  tags: ['!dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Open mobile menu via toggle button', async () => {
      const menuButton = canvas.getByText('Menu');
      await userEvent.click(menuButton);
      await waitFor(() => expect(document.querySelector('.NeoSheet')).not.toBeNull());
      await waitFor(() => expect(args['onToggle-mobile-menu']).toHaveBeenCalledWith(true));
    });
    await step('Sheet overlay closes the mobile menu', async () => {
      const overlay = document.querySelector('.NeoSheet-overlay') as HTMLElement;
      expect(overlay).not.toBeNull();
      const rect = overlay.getBoundingClientRect();
      expect(rect.height).toBeGreaterThan(0);
      await userEvent.click(overlay);
      await waitFor(() => expect(document.querySelector('.NeoSheet')).toBeNull());
    });
  }
}`,...(xe=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var we,ke,Se;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
        code: \`<!-- Wrap in .u-onDark to activate dark-mode token overrides -->
<div class="u-onDark">
  <NeoNavigation color="blue" :links="links" aria-label="Main navigation">
    <template #logo>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoImage src="/favicon.svg" alt="" :width="24" :height="24" object-fit="contain" />
        <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
      </div>
    </template>
    <template #actions>
      <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    </template>
  </NeoNavigation>
</div>\`
      }
    }
  },
  render: (args: NeoNavigationProps) => {
    return defineComponent({
      name: 'OnDarkRender',
      setup() {
        return () => <NeoNavigation {...args} v-slots={{
          logo: () => renderBrandLogo(),
          actions: () => <NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
        }} />;
      }
    });
  }
}`,...(Se=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var Be,ze,Ae;M.parameters={...M.parameters,docs:{...(Be=M.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    direction: 'rtl'
  },
  args: {
    ariaLabel: 'التنقل الرئيسي',
    menuLabel: 'القائمة',
    closeLabel: 'إغلاق'
  }
}`,...(Ae=(ze=M.parameters)==null?void 0:ze.docs)==null?void 0:Ae.source}}};var Me,Ce,Le;d.parameters={...d.parameters,docs:{...(Me=d.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    },
    a11y: {
      config: {
        rules: [{
          id: 'landmark-unique',
          enabled: false
        }]
      }
    }
  },
  render: createSimpleColorShowcase(NeoNavigation, ['default'])
}`,...(Le=(Ce=d.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source}}};var Ie,De,Ee;g.parameters={...g.parameters,docs:{...(Ie=g.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  tags: ['snapshot'],
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    snapshot: {
      viewports: ['sm', 'xl']
    },
    a11y: {
      config: {
        rules: [{
          id: 'landmark-unique',
          enabled: false
        }]
      }
    }
  },
  render: createSimpleColorShowcase(NeoNavigation, ['default'], {
    dark: true
  })
}`,...(Ee=(De=g.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Re,Pe,Ue;C.parameters={...C.parameters,docs:{...(Re=C.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(Ue=(Pe=C.parameters)==null?void 0:Pe.docs)==null?void 0:Ue.source}}};var Oe,We,je;L.parameters={...L.parameters,docs:{...(Oe=L.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  ...AllColorsOnDark,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay()
}`,...(je=(We=L.parameters)==null?void 0:We.docs)==null?void 0:je.source}}};const bt=["Default","Compact","Flyout","FlyoutOpen","WithLogo","WithActions","Complete","WithRichActions","CollapseActionsMobile","CollapseActionsAlways","WithDropdowns","MinimalWithoutLinks","MobileMenu","MobileMenuInteraction","OnDark","RTL","AllColors","AllColorsOnDark","AllColorsA11y","AllColorsOnDarkA11y"];export{d as AllColors,C as AllColorsA11y,g as AllColorsOnDark,L as AllColorsOnDarkA11y,k as CollapseActionsAlways,w as CollapseActionsMobile,h as Compact,f as Complete,v as Default,p as Flyout,b as FlyoutOpen,B as MinimalWithoutLinks,m as MobileMenu,z as MobileMenuInteraction,A as OnDark,M as RTL,y as WithActions,S as WithDropdowns,N as WithLogo,x as WithRichActions,bt as __namedExportsOrder,ht as default};
