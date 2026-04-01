import{d as a,c as t,F as r,r as A}from"./iframe-BNVHVJhn.js";import{N as n}from"./NeoNavigation-Edb75G5J.js";import{N as o}from"./NeoButton-364jGlWI.js";import{N as Ae}from"./NeoImage-C_2VXNk2.js";import{a as Ce}from"./argTypes-VnJZhiy7.js";import{c as ze}from"./colorShowcase-BzxvNubM.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoLink-Dv5qr27E.js";import"./NeoIconButton-DTPVzKGD.js";import"./NeoIcon-CGZgoonz.js";import"./NeoNavItem-DtNjmEPj.js";import"./NeoSheet-fCqCaXsT.js";import"./NeoDropdown-5Surbfda.js";import"./useButton-DryRKbhE.js";const Le=["default","compact","flyout"],Ie=["mobile","always"],{expect:u,fn:De,userEvent:C,waitFor:M,within:Ee}=__STORYBOOK_MODULE_TEST__,Re=[{text:"Home",href:"/",active:!0},{text:"Games",href:"/games"},{text:"About",href:"/about"},{text:"Contact",href:"/contact"}],Se=[{text:"Home",href:"/",active:!0},{text:"Products",children:[{text:"All Products",href:"/products"},{text:"Featured",href:"/products/featured"},{text:"New Arrivals",href:"/products/new"},{text:"On Sale",href:"/products/sale"}]},{text:"Categories",children:[{text:"Electronics",href:"/categories/electronics"},{text:"Clothing",href:"/categories/clothing"},{text:"Home & Garden",href:"/categories/home"}]},{text:"About",href:"/about"},{text:"Contact",href:"/contact"}],i=(e="NeoMateria")=>t("div",{style:{alignItems:"center",display:"flex",gap:"8px"}},[t(Ae,{src:"/favicon.ico",alt:"",width:24,height:24,objectFit:"contain"},null),t("span",{style:{color:"var(--neo-theme-color)",fontSize:"18px",fontWeight:"bold"}},[e])]),Qe={title:"Organisms/NeoNavigation",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[()=>({template:'<story /><main style="padding: 24px; min-block-size: 1500px;"><p aria-hidden="true" style="visibility: hidden;">Page content goes here. Scroll to see the sticky navigation.</p></main>'})],argTypes:{...Ce,color:{description:"Theme color for active link states, hover accents, and the mobile menu header.",table:{category:"Appearance"}},links:{control:!1,description:"Array of navigation links. Each link: `{ text, href, active?, external?, children? }`. Add a `children` array to create a dropdown.",table:{category:"Content"}},menuLabel:{control:"text",description:"Text for the mobile hamburger menu button.",table:{category:"Content"}},closeLabel:{control:"text",description:"Text for the mobile menu close button.",table:{category:"Content"}},menuAriaLabel:{control:"text",description:"Accessible label for the mobile menu toggle button. Used when `menuLabel` is not descriptive enough on its own.",table:{category:"Accessibility"}},variant:{control:"select",options:Le,description:"`default`: standard nav with inline dropdowns. `compact`: always shows the mobile hamburger toggle; actions remain visible on desktop. `flyout`: parent links open a full-width panel below the bar instead of an inline dropdown.",table:{category:"Appearance"}},collapseActions:{control:"select",options:[void 0,...Ie],description:"`mobile`: action slot buttons are visible inline on desktop, collapsed into a dropdown on mobile. `always`: action buttons are always collapsed into a dropdown regardless of viewport.",table:{category:"Behavior"}},actionsMenuAriaLabel:{control:"text",description:"Accessible label for the 'more actions' dropdown trigger button shown when `collapseActions` is set.",table:{category:"Accessibility"}},mobileBreakpoint:{control:"select",options:["sm","md","lg"],description:"Viewport breakpoint at which the navigation switches from the mobile hamburger layout to the full desktop layout.",table:{category:"Behavior"}}},args:{color:"blue",variant:"default",ariaLabel:"Main navigation",menuLabel:"Menu",closeLabel:"Close",links:Re,"onToggle-mobile-menu":De()}},d={},p={args:{variant:"compact"},parameters:{docs:{source:{code:`<!-- Compact: always shows mobile menu toggle, actions still visible on desktop -->
<NeoNavigation color="blue" variant="compact" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"CompactRender",setup(){return()=>t(n,e,{logo:()=>i(),actions:()=>t(r,null,[t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null),t(o,{text:"Sign Up",color:e.color,size:"medium",variant:"primary",rounded:!0},null)])})}})},g={args:{variant:"flyout",links:Se},parameters:{docs:{source:{code:`<!-- Flyout: parent links open a full-width panel below the nav bar instead of inline dropdowns -->
<NeoNavigation color="blue" variant="flyout" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"FlyoutRender",setup(){return()=>t(n,e,{logo:()=>i(),actions:()=>t(r,null,[t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null),t(o,{text:"Sign Up",color:e.color,size:"medium",variant:"primary",rounded:!0},null)])})}})},v={parameters:{docs:{source:{code:`<NeoNavigation color="blue" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
</NeoNavigation>`}}},render:e=>a({name:"WithLogoRender",setup(){return()=>t(n,e,{logo:()=>i()})}})},N={parameters:{docs:{source:{code:`<NeoNavigation color="blue" :links="links" aria-label="Main navigation">
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"WithActionsRender",setup(){return()=>t(n,e,{actions:()=>t(r,null,[t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null),t(o,{text:"Sign Up",color:e.color,size:"medium",variant:"primary",rounded:!0},null)])})}})},h={parameters:{docs:{source:{code:`<NeoNavigation color="blue" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">Titanlord</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"CompleteRender",setup(){return()=>t(n,e,{logo:()=>i("Titanlord"),actions:()=>t(r,null,[t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null),t(o,{text:"Sign Up",color:e.color,size:"medium",variant:"primary",rounded:!0},null)])})}})},b={parameters:{docs:{source:{code:`<!-- The actions slot accepts any content — buttons, icon buttons, dropdowns, toggles, etc. -->
<script setup>
const isDark = ref(false)
const language = ref('EN')
<\/script>

<template>
  <NeoNavigation color="blue" :links="links" aria-label="Main navigation" menuLabel="Menu" closeLabel="Close">
    <template #logo>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
        <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">Titanlord</span>
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
</template>`}}},render:e=>a({name:"WithRichActionsRender",setup(){const s=A(!1),l=A("EN");return()=>t(n,e,{logo:()=>i("Titanlord"),actions:()=>t(r,null,[t(o,{text:l.value==="EN"?"DE":"EN",color:e.color,size:"small",variant:"ghost",onClick:()=>{l.value=l.value==="EN"?"DE":"EN"}},null),t(o,{text:s.value?"Light":"Dark",color:e.color,size:"small",variant:"ghost",onClick:()=>{s.value=!s.value}},null),t(o,{text:"Log in",color:e.color,size:"small",variant:"tertiary"},null),t(o,{text:"Sign up",color:e.color,size:"small",variant:"primary",rounded:!0},null)])})}})},y={args:{collapseActions:"mobile"},parameters:{docs:{source:{code:`<!-- collapseActions="mobile": on mobile the actions are hidden behind a three-dots button;
     on desktop they render inline as normal -->
<NeoNavigation color="blue" :links="links" collapse-actions="mobile" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"CollapseActionsMobileRender",setup(){return()=>t(n,e,{logo:()=>i(),actions:()=>t(r,null,[t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null),t(o,{text:"Sign Up",color:e.color,size:"medium",variant:"primary",rounded:!0},null)])})}})},f={args:{collapseActions:"always"},parameters:{docs:{source:{code:`<!-- collapseActions="always": actions always behind the three-dots button regardless of viewport -->
<NeoNavigation color="blue" :links="links" collapse-actions="always" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Profile" color="blue" size="medium" variant="ghost" />
    <NeoButton text="Settings" color="blue" size="medium" variant="ghost" />
    <NeoButton text="Sign Out" color="blue" size="medium" variant="tertiary" />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"CollapseActionsAlwaysRender",setup(){return()=>t(n,e,{logo:()=>i(),actions:()=>t(r,null,[t(o,{text:"Profile",color:e.color,size:"medium",variant:"ghost"},null),t(o,{text:"Settings",color:e.color,size:"medium",variant:"ghost"},null),t(o,{text:"Sign Out",color:e.color,size:"medium",variant:"tertiary"},null)])})}})},x={args:{links:Se},parameters:{docs:{source:{code:`<!-- Add children arrays to link items to create dropdown menus -->
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
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"WithDropdownsRender",setup(){return()=>t(n,e,{logo:()=>i(),actions:()=>t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null)})}})},k={args:{links:[]},parameters:{docs:{source:{code:`<!-- Pass an empty links array to render a navbar with only logo + actions -->
<NeoNavigation color="blue" :links="[]" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">Brand</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Action" color="blue" size="medium" variant="primary" />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"MinimalWithoutLinksRender",setup(){return()=>t(n,e,{logo:()=>i("Brand"),actions:()=>t(o,{text:"Action",color:e.color,size:"medium",variant:"primary"},null)})}})},m={parameters:{viewport:{defaultViewport:"mobile1"},docs:{source:{code:`<!-- At mobile viewport the nav hides desktop links and shows the hamburger toggle -->
<NeoNavigation color="blue" :links="links" aria-label="Main navigation" menuLabel="Menu" closeLabel="Close">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`}}},render:e=>a({name:"MobileMenuRender",setup(){return()=>t(n,e,{logo:()=>i(),actions:()=>t(o,{text:"Sign Up",color:e.color,size:"medium",variant:"primary",rounded:!0},null)})}})},w={...m,tags:["!dev"],play:async({args:e,canvasElement:s,step:l})=>{const Be=Ee(s);await l("Open mobile menu via toggle button",async()=>{const c=Be.getByText("Menu");await C.click(c),await M(()=>u(document.querySelector(".NeoSheet")).not.toBeNull()),await M(()=>u(e["onToggle-mobile-menu"]).toHaveBeenCalledWith(!0))}),await l("Sheet overlay closes the mobile menu",async()=>{const c=document.querySelector(".NeoSheet-overlay");u(c).not.toBeNull();const Me=c.getBoundingClientRect();u(Me.height).toBeGreaterThan(0),await C.click(c),await M(()=>u(document.querySelector(".NeoSheet")).toBeNull())})}},z={globals:{backgrounds:"#000"},parameters:{docs:{source:{code:`<!-- Wrap in .u-onDark to activate dark-mode token overrides -->
<div class="u-onDark">
  <NeoNavigation color="blue" :links="links" aria-label="Main navigation">
    <template #logo>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
        <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
      </div>
    </template>
    <template #actions>
      <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    </template>
  </NeoNavigation>
</div>`}}},render:e=>a({name:"OnDarkRender",setup(){return()=>t(n,e,{logo:()=>i(),actions:()=>t(o,{text:"Sign In",color:e.color,size:"medium",variant:"tertiary"},null)})}})},S={parameters:{a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}},render:ze(n,["default"])},B={globals:{backgrounds:"#000"},parameters:{a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}},render:ze(n,["default"],{dark:!0})};var L,I,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(D=(I=d.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var E,R,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'compact'
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Compact: always shows mobile menu toggle, actions still visible on desktop -->
<NeoNavigation color="blue" variant="compact" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
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
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var U,P,W;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'flyout',
    // @ts-expect-error - Vue slot inference conflict with prop type
    links: nestedLinks
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Flyout: parent links open a full-width panel below the nav bar instead of inline dropdowns -->
<NeoNavigation color="blue" variant="flyout" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
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
}`,...(W=(P=g.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var j,O,F;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<NeoNavigation color="blue" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
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
}`,...(F=(O=v.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var q,H,_;N.parameters={...N.parameters,docs:{...(q=N.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(H=N.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var V,G,K;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<NeoNavigation color="blue" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">Titanlord</span>
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
          logo: () => renderBrandLogo('Titanlord'),
          actions: () => <>
                                    <NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
                                    <NeoButton text="Sign Up" color={args.color} size="medium" variant="primary" rounded />
                                </>
        }} />;
      }
    });
  }
}`,...(K=(G=h.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Y,J,Q;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<!-- The actions slot accepts any content — buttons, icon buttons, dropdowns, toggles, etc. -->
<script setup>
const isDark = ref(false)
const language = ref('EN')
<\/script>

<template>
  <NeoNavigation color="blue" :links="links" aria-label="Main navigation" menuLabel="Menu" closeLabel="Close">
    <template #logo>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
        <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">Titanlord</span>
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
          logo: () => renderBrandLogo('Titanlord'),
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
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
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
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,oe;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
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
}`,...(oe=(te=f.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,ae,ie;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
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
}`,...(ie=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var re,le,se;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
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
}`,...(se=(le=k.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ce,ue,me;m.parameters={...m.parameters,docs:{...(ce=m.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
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
}`,...(me=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var de,pe,ge;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ge=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ve,Ne,he;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    docs: {
      source: {
        code: \`<!-- Wrap in .u-onDark to activate dark-mode token overrides -->
<div class="u-onDark">
  <NeoNavigation color="blue" :links="links" aria-label="Main navigation">
    <template #logo>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
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
}`,...(he=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:he.source}}};var be,ye,fe;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  parameters: {
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
}`,...(fe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var xe,ke,we;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  globals: {
    backgrounds: '#000'
  },
  parameters: {
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
}`,...(we=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};const Xe=["Default","Compact","Flyout","WithLogo","WithActions","Complete","WithRichActions","CollapseActionsMobile","CollapseActionsAlways","WithDropdowns","MinimalWithoutLinks","MobileMenu","MobileMenuInteraction","OnDark","AllColors","AllColorsOnDark"];export{S as AllColors,B as AllColorsOnDark,f as CollapseActionsAlways,y as CollapseActionsMobile,p as Compact,h as Complete,d as Default,g as Flyout,k as MinimalWithoutLinks,m as MobileMenu,w as MobileMenuInteraction,z as OnDark,N as WithActions,x as WithDropdowns,v as WithLogo,b as WithRichActions,Xe as __namedExportsOrder,Qe as default};
