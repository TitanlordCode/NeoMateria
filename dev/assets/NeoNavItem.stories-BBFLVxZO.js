import{d as s,c as e,r as S,a as w,F as be,m as ge}from"./iframe-CiKriRT1.js";import{N as n}from"./NeoNavItem-DVaqOXB5.js";import{d as Ne,a as Ie}from"./argTypes-VnJZhiy7.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";const fe=["small","medium","large"],{fn:P}=__STORYBOOK_MODULE_TEST__,we={title:"Atoms/NeoNavItem",component:n,tags:["autodocs"],argTypes:{...Ie,...Ne,label:{control:"text",table:{category:"Content"}},color:{description:"Theme color used for hover/active text and background states."},size:{control:"select",options:fe,table:{category:"Appearance"},description:"Controls font size and padding."},showConnector:{control:"boolean",table:{category:"Appearance"},description:"Draws a vertical connector line on the left edge to visualise hierarchy between sibling items."},active:{control:"boolean",table:{category:"State"},description:'Marks this item as representing the current page. Sets `aria-current="page"` and applies active styling.'},expanded:{control:"boolean",table:{category:"State"},description:"Whether the item's children are visible. Only meaningful when `hasChildren` is true. Rotates the chevron icon."},href:{control:"text",table:{category:"Behavior"}},external:{control:"boolean",table:{category:"Behavior"}},level:{control:{type:"number",min:0,max:10},table:{category:"Behavior"},description:"Nesting depth. Each level adds indentation. Used to build tree-style navigation hierarchies."},hasChildren:{control:"boolean",table:{category:"Behavior"},description:"Indicates the item has collapsible child items. Renders a chevron and changes the element from `<a>` to `<button>` regardless of whether `href` is set."}},args:{label:"Navigation Item",color:"blue",size:"medium",level:0,active:!1,disabled:!1,hasChildren:!1,expanded:!1,showConnector:!1,onClick:P(),onToggle:P()},parameters:{snapshot:{viewports:["sm","lg","xl"]}}},v={tags:["snapshot"]},m={tags:["snapshot"],args:{label:"Go to Dashboard",href:"/dashboard"}},u={tags:["snapshot"],args:{label:"Current Page",active:!0}},h={tags:["snapshot"],args:{label:"Disabled Item",disabled:!0}},b={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoNavItem label="Home" color="blue">
  <template #iconStart>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  </template>
</NeoNavItem>`}}},render:l=>s({name:"WithIconRender",setup(){return()=>e(n,l,{iconStart:()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},null),e("polyline",{points:"9 22 9 12 15 12 15 22"},null)])})}})},g={tags:["snapshot"],parameters:{docs:{source:{code:`<script setup>
const expanded = ref(false)
<\/script>

<template>
  <NeoNavItem
    label="Products"
    color="blue"
    has-children
    :expanded="expanded"
    @toggle="expanded = !expanded"
  >
    <template #iconStart><span>📦</span></template>
  </NeoNavItem>
  <template v-if="expanded">
    <NeoNavItem label="All Products" href="/products" color="blue" :level="1" />
    <NeoNavItem label="Categories" href="/products/categories" color="blue" :level="1" />
    <NeoNavItem label="Inventory" href="/products/inventory" color="blue" :level="1" active />
  </template>
</template>`}}},render:l=>s({name:"WithChildrenRender",setup(){const a=S(!1);return()=>e("div",{style:{inlineSize:"280px"}},[e(n,ge(l,{label:"Products",hasChildren:!0,expanded:a.value,onToggle:()=>{a.value=!a.value}}),{iconStart:()=>e("span",null,[w("📦")])}),a.value&&e("div",null,[e(n,{label:"All Products",href:"/products",color:l.color,level:1},null),e(n,{label:"Categories",href:"/products/categories",color:l.color,level:1},null),e(n,{label:"Inventory",href:"/products/inventory",color:l.color,level:1,active:!0},null)])])}})},N={tags:["snapshot"],parameters:{docs:{source:{code:`<!-- Font size and indentation reduce per level, capped at level 3 -->
<NeoNavItem label="Level 0 - Root item" color="blue" :level="0" />
<NeoNavItem label="Level 1 - First child" color="blue" :level="1" />
<NeoNavItem label="Level 2 - Nested deeper" color="blue" :level="2" />
<NeoNavItem label="Level 3 - Deep nesting" color="blue" :level="3" />
<NeoNavItem label="Level 3 - Sibling item" color="blue" :level="3" />
<NeoNavItem label="Level 4+ - Same as level 3" color="blue" :level="4" />
<NeoNavItem label="Level 5 - Visual cap reached" color="blue" :level="5" />`}}},render:l=>s({name:"NestedLevelsRender",setup(){return()=>e("div",{style:{inlineSize:"320px"}},[e("p",{style:{marginBlockEnd:"16px",fontSize:"14px",color:"var(--neo-color-grey600)"}},[w("Font size reduces progressively per level (capped at level 3). Each level also has increased indentation.")]),e(n,{label:"Level 0 - Root item",color:l.color,level:0},null),e(n,{label:"Level 1 - First child",color:l.color,level:1},null),e(n,{label:"Level 2 - Nested deeper",color:l.color,level:2},null),e(n,{label:"Level 3 - Deep nesting",color:l.color,level:3},null),e(n,{label:"Level 3 - Sibling item",color:l.color,level:3},null),e(n,{label:"Level 4+ - Same as level 3",color:l.color,level:4},null),e(n,{label:"Level 5 - Visual cap reached",color:l.color,level:5},null)])}})},I={tags:["snapshot"],parameters:{docs:{source:{code:`<!-- show-connector adds vertical/horizontal lines to indicate hierarchy -->
<NeoNavItem label="Parent Item" color="blue" :level="0" />
<NeoNavItem label="Child with connector" color="blue" :level="1" show-connector />
<NeoNavItem label="Another child" color="blue" :level="1" show-connector />
<NeoNavItem label="Nested child" color="blue" :level="2" show-connector />
<NeoNavItem label="Deep nested" color="blue" :level="3" show-connector />`}}},render:l=>s({name:"WithConnectorsRender",setup(){return()=>e("div",{style:{inlineSize:"320px"}},[e("p",{style:{marginBlockEnd:"16px",fontSize:"14px",color:"var(--neo-color-grey600)"}},[w("Connectors show visual hierarchy with vertical/horizontal lines.")]),e(n,{label:"Parent Item",color:l.color,level:0},null),e(n,{label:"Child with connector",color:l.color,level:1,showConnector:!0},null),e(n,{label:"Another child",color:l.color,level:1,showConnector:!0},null),e(n,{label:"Nested child",color:l.color,level:2,showConnector:!0},null),e(n,{label:"Deep nested",color:l.color,level:3,showConnector:!0},null)])}})},f={tags:["snapshot"],parameters:{docs:{source:{code:`<NeoNavItem label="Small Size" color="blue" size="small" />
<NeoNavItem label="Medium Size" color="blue" size="medium" />
<NeoNavItem label="Large Size" color="blue" size="large" />`}}},render:l=>s({name:"SizesRender",setup(){return()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"8px",inlineSize:"280px"}},[e(n,{label:"Small Size",color:l.color,size:"small"},null),e(n,{label:"Medium Size",color:l.color,size:"medium"},null),e(n,{label:"Large Size",color:l.color,size:"large"},null)])}})},x={tags:["no-test"],parameters:{docs:{source:{code:`<script setup>
const expanded = ref({})
const toggle = (id) => expanded.value[id] = !expanded.value[id]
<\/script>

<template>
  <nav style="display: flex; flex-direction: column; gap: 2px;">
    <NeoNavItem label="Home" href="/" color="blue">
      <template #iconStart><span>🏠</span></template>
    </NeoNavItem>

    <!-- Expandable item with nested children -->
    <NeoNavItem
      label="Products"
      color="blue"
      has-children
      :expanded="expanded.products"
      @toggle="toggle('products')"
    >
      <template #iconStart><span>📦</span></template>
    </NeoNavItem>
    <template v-if="expanded.products">
      <NeoNavItem label="All Products" href="/products" color="blue" :level="1" />
      <NeoNavItem label="Categories" href="/products/categories" color="blue" :level="1" />
    </template>

    <NeoNavItem label="Orders" href="/orders" color="blue">
      <template #iconStart><span>🛒</span></template>
    </NeoNavItem>
  </nav>
</template>`}}},render:l=>s({name:"CompleteNavigationRender",setup(){const a=S({}),t=o=>{a.value[o]=!a.value[o]},L=[{id:"home",label:"Home",href:"/",icon:"🏠"},{id:"dashboard",label:"Dashboard",href:"/dashboard",icon:"📊",active:!0},{id:"products",label:"Products",icon:"📦",children:[{label:"All Products",href:"/products"},{label:"Categories",href:"/products/categories"},{id:"inventory",label:"Inventory",children:[{label:"Stock Levels",href:"/products/inventory/stock"},{label:"Reorder",href:"/products/inventory/reorder"}]}]},{id:"orders",label:"Orders",href:"/orders",icon:"🛒"},{id:"settings",label:"Settings",icon:"⚙️",children:[{label:"General",href:"/settings/general"},{label:"Security",href:"/settings/security"}]}],c=(o,i=0)=>{const d=!!o.children,r=o.id?a.value[o.id]:!1;return e("div",{key:o.id??o.label},[e(n,{label:o.label,href:d?void 0:o.href,color:l.color,level:i,active:o.active,hasChildren:d,expanded:r,onToggle:o.id?()=>t(o.id):void 0},o.icon?{iconStart:()=>e("span",null,[o.icon])}:void 0),d&&r&&e("div",null,[o.children.map(p=>c(p,i+1))])])};return()=>e("div",{style:{inlineSize:"280px",padding:"16px",backgroundColor:"var(--neo-color-grey50)",borderRadius:"8px"}},[e("nav",{style:{display:"flex",flexDirection:"column",gap:"2px"}},[L.map(o=>c(o))])])}})},z={tags:["no-test"],parameters:{docs:{source:{code:`<script setup>
// Recursive navigation tree — visual styling caps at level 3,
// but NeoNavItem supports unlimited logical depth.
const expanded = ref({ docs: true, components: true })
const toggle = (id) => expanded.value[id] = !expanded.value[id]
<\/script>

<template>
  <nav aria-label="Documentation navigation">
    <!-- Level 0 — root section -->
    <NeoNavItem label="Documentation" color="blue" has-children
      :expanded="expanded.docs" @toggle="toggle('docs')" />

    <template v-if="expanded.docs">
      <NeoNavItem label="Getting Started" href="/docs/getting-started" color="blue" :level="1" show-connector />

      <!-- Level 1 — subsection -->
      <NeoNavItem label="Components" color="blue" :level="1" has-children show-connector
        :expanded="expanded.components" @toggle="toggle('components')" />

      <template v-if="expanded.components">
        <NeoNavItem label="Button" href="/docs/components/button" color="blue" :level="2" show-connector />
        <NeoNavItem label="Input"  href="/docs/components/input"  color="blue" :level="2" show-connector />
      </template>
    </template>
  </nav>
</template>`}}},render:l=>s({name:"DeepNavigationRender",setup(){const a=S({docs:!0,components:!0,atoms:!0}),t=o=>{a.value[o]=!a.value[o]},L=[{id:"docs",label:"Documentation",children:[{id:"getting-started",label:"Getting Started",href:"/docs/getting-started"},{id:"components",label:"Components",children:[{id:"atoms",label:"Atoms",children:[{id:"button",label:"Button",href:"/docs/components/atoms/button"},{id:"input",label:"Input",href:"/docs/components/atoms/input"},{id:"badge",label:"Badge",href:"/docs/components/atoms/badge"}]},{id:"molecules",label:"Molecules",children:[{id:"card",label:"Card",href:"/docs/components/molecules/card"},{id:"select",label:"Select",href:"/docs/components/molecules/select"}]},{id:"organisms",label:"Organisms",children:[{id:"navigation",label:"Navigation",href:"/docs/components/organisms/navigation"},{id:"footer",label:"Footer",href:"/docs/components/organisms/footer"}]}]},{id:"theming",label:"Theming",href:"/docs/theming"}]},{id:"api",label:"API Reference",children:[{id:"props",label:"Props",href:"/api/props"},{id:"events",label:"Events",href:"/api/events"}]}],c=(o,i=0,d=!0)=>d?o.map(r=>{var k;const p=!!((k=r.children)!=null&&k.length),D=a.value[r.id]??!1;return e("div",{key:r.id},[e(n,{label:r.label,href:p?void 0:r.href,color:l.color,size:l.size,level:i,hasChildren:p,expanded:D,showConnector:i>0,onToggle:()=>t(r.id)},null),p&&c(r.children,i+1,D)])}):[];return()=>e("div",{style:{inlineSize:"320px",padding:"16px",backgroundColor:"var(--neo-color-grey50)",borderRadius:"8px"}},[e("p",{style:{marginBlockEnd:"16px",fontSize:"12px",color:"var(--neo-color-grey700)"}},[w("Deep navigation tree. Visual styling caps at level 3 but supports infinite logical depth.")]),e("nav",{"aria-label":"Documentation navigation"},[c(L)])])}})},C={tags:["no-test"],parameters:{docs:{source:{code:`<!-- size and level are orthogonal — combine freely -->
<NeoNavItem label="Level 0" color="blue" size="small" :level="0" />
<NeoNavItem label="Level 1" color="blue" size="small" :level="1" />
<NeoNavItem label="Level 2" color="blue" size="small" :level="2" />
<NeoNavItem label="Level 3" color="blue" size="small" :level="3" />
<NeoNavItem label="Level 0" color="blue" size="medium" :level="0" />
<NeoNavItem label="Level 1" color="blue" size="medium" :level="1" />
<NeoNavItem label="Level 2" color="blue" size="medium" :level="2" />
<NeoNavItem label="Level 3" color="blue" size="medium" :level="3" />
<NeoNavItem label="Level 0" color="blue" size="large" :level="0" />
<NeoNavItem label="Level 1" color="blue" size="large" :level="1" />
<NeoNavItem label="Level 2" color="blue" size="large" :level="2" />
<NeoNavItem label="Level 3" color="blue" size="large" :level="3" />`}}},render:l=>s({name:"AllSizesWithLevelsRender",setup(){const a=["small","medium","large"];return()=>e("div",{style:{display:"flex",gap:"32px",flexWrap:"wrap"}},[a.map(t=>e("div",{key:t,style:{inlineSize:"280px"}},[e("h4",{style:{marginBlockEnd:"8px",textTransform:"capitalize"}},[t]),e(n,{label:"Level 0",color:l.color,size:t,level:0},null),e(n,{label:"Level 1",color:l.color,size:t,level:1},null),e(n,{label:"Level 2",color:l.color,size:t,level:2},null),e(n,{label:"Level 3",color:l.color,size:t,level:3},null)]))])}})},y={tags:["snapshot"],globals:{backgrounds:"#000"},parameters:{snapshot:{viewports:["sm","xl"]},docs:{source:{code:`<!-- Wrap in .u-onDark to activate dark-mode token overrides -->
<div class="u-onDark">
  <NeoNavItem label="Parent Item" color="blue" has-children :expanded="expanded"
    @toggle="expanded = !expanded" />
  <template v-if="expanded">
    <NeoNavItem label="Child 1" color="blue" :level="1" show-connector />
    <NeoNavItem label="Child 2" color="blue" :level="1" show-connector active />
  </template>
</div>`}}},render:l=>s({name:"OnDarkRender",setup(){const a=S(!0);return()=>e("div",{style:{inlineSize:"280px"}},[e(n,{label:"Parent Item",color:l.color,hasChildren:!0,expanded:a.value,onToggle:()=>{a.value=!a.value}},null),a.value&&e(be,null,[e(n,{label:"Child 1",color:l.color,level:1,showConnector:!0},null),e(n,{label:"Child 2",color:l.color,level:1,showConnector:!0,active:!0},null),e(n,{label:"Nested",color:l.color,level:2,showConnector:!0},null)])])}})};var E,R,A;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['snapshot']
}`,...(A=(R=v.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var B,T,W;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Go to Dashboard',
    href: '/dashboard'
  }
}`,...(W=(T=m.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var F,O,M;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Current Page',
    active: true
  }
}`,...(M=(O=u.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var H,V,G;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['snapshot'],
  args: {
    label: 'Disabled Item',
    disabled: true
  }
}`,...(G=(V=h.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var _,U,K;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoNavItem label="Home" color="blue">
  <template #iconStart>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  </template>
</NeoNavItem>\`
      }
    }
  },
  render: (args: NeoNavItemProps) => {
    return defineComponent({
      name: 'WithIconRender',
      setup() {
        return () => <NeoNavItem {...args} v-slots={{
          iconStart: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
        }} />;
      }
    });
  }
}`,...(K=(U=b.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Y,j,q;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const expanded = ref(false)
<\/script>

<template>
  <NeoNavItem
    label="Products"
    color="blue"
    has-children
    :expanded="expanded"
    @toggle="expanded = !expanded"
  >
    <template #iconStart><span>📦</span></template>
  </NeoNavItem>
  <template v-if="expanded">
    <NeoNavItem label="All Products" href="/products" color="blue" :level="1" />
    <NeoNavItem label="Categories" href="/products/categories" color="blue" :level="1" />
    <NeoNavItem label="Inventory" href="/products/inventory" color="blue" :level="1" active />
  </template>
</template>\`
      }
    }
  },
  render: (args: NeoNavItemProps) => {
    return defineComponent({
      name: 'WithChildrenRender',
      setup() {
        const expanded = ref(false);
        return () => <div style={{
          inlineSize: '280px'
        }}>
                        <NeoNavItem {...args} label="Products" hasChildren expanded={expanded.value} onToggle={() => {
            expanded.value = !expanded.value;
          }} v-slots={{
            iconStart: () => <span>📦</span>
          }} />
                        {expanded.value && <div>
                                <NeoNavItem label="All Products" href="/products" color={args.color} level={1} />
                                <NeoNavItem label="Categories" href="/products/categories" color={args.color} level={1} />
                                <NeoNavItem label="Inventory" href="/products/inventory" color={args.color} level={1} active />
                            </div>}
                    </div>;
      }
    });
  }
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var J,Q,X;N.parameters={...N.parameters,docs:{...(J=N.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<!-- Font size and indentation reduce per level, capped at level 3 -->
<NeoNavItem label="Level 0 - Root item" color="blue" :level="0" />
<NeoNavItem label="Level 1 - First child" color="blue" :level="1" />
<NeoNavItem label="Level 2 - Nested deeper" color="blue" :level="2" />
<NeoNavItem label="Level 3 - Deep nesting" color="blue" :level="3" />
<NeoNavItem label="Level 3 - Sibling item" color="blue" :level="3" />
<NeoNavItem label="Level 4+ - Same as level 3" color="blue" :level="4" />
<NeoNavItem label="Level 5 - Visual cap reached" color="blue" :level="5" />\`
      }
    }
  },
  render: (args: NeoNavItemProps) => {
    return defineComponent({
      name: 'NestedLevelsRender',
      setup() {
        return () => <div style={{
          inlineSize: '320px'
        }}>
                        <p style={{
            marginBlockEnd: '16px',
            fontSize: '14px',
            color: 'var(--neo-color-grey600)'
          }}>
                            Font size reduces progressively per level (capped at level 3). Each level also has
                            increased indentation.
                        </p>
                        <NeoNavItem label="Level 0 - Root item" color={args.color} level={0} />
                        <NeoNavItem label="Level 1 - First child" color={args.color} level={1} />
                        <NeoNavItem label="Level 2 - Nested deeper" color={args.color} level={2} />
                        <NeoNavItem label="Level 3 - Deep nesting" color={args.color} level={3} />
                        <NeoNavItem label="Level 3 - Sibling item" color={args.color} level={3} />
                        <NeoNavItem label="Level 4+ - Same as level 3" color={args.color} level={4} />
                        <NeoNavItem label="Level 5 - Visual cap reached" color={args.color} level={5} />
                    </div>;
      }
    });
  }
}`,...(X=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<!-- show-connector adds vertical/horizontal lines to indicate hierarchy -->
<NeoNavItem label="Parent Item" color="blue" :level="0" />
<NeoNavItem label="Child with connector" color="blue" :level="1" show-connector />
<NeoNavItem label="Another child" color="blue" :level="1" show-connector />
<NeoNavItem label="Nested child" color="blue" :level="2" show-connector />
<NeoNavItem label="Deep nested" color="blue" :level="3" show-connector />\`
      }
    }
  },
  render: (args: NeoNavItemProps) => {
    return defineComponent({
      name: 'WithConnectorsRender',
      setup() {
        return () => <div style={{
          inlineSize: '320px'
        }}>
                        <p style={{
            marginBlockEnd: '16px',
            fontSize: '14px',
            color: 'var(--neo-color-grey600)'
          }}>
                            Connectors show visual hierarchy with vertical/horizontal lines.
                        </p>
                        <NeoNavItem label="Parent Item" color={args.color} level={0} />
                        <NeoNavItem label="Child with connector" color={args.color} level={1} showConnector />
                        <NeoNavItem label="Another child" color={args.color} level={1} showConnector />
                        <NeoNavItem label="Nested child" color={args.color} level={2} showConnector />
                        <NeoNavItem label="Deep nested" color={args.color} level={3} showConnector />
                    </div>;
      }
    });
  }
}`,...(ee=($=I.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var le,ne,oe;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['snapshot'],
  parameters: {
    docs: {
      source: {
        code: \`<NeoNavItem label="Small Size" color="blue" size="small" />
<NeoNavItem label="Medium Size" color="blue" size="medium" />
<NeoNavItem label="Large Size" color="blue" size="large" />\`
      }
    }
  },
  render: (args: NeoNavItemProps) => {
    return defineComponent({
      name: 'SizesRender',
      setup() {
        return () => <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          inlineSize: '280px'
        }}>
                        <NeoNavItem label="Small Size" color={args.color} size="small" />
                        <NeoNavItem label="Medium Size" color={args.color} size="medium" />
                        <NeoNavItem label="Large Size" color={args.color} size="large" />
                    </div>;
      }
    });
  }
}`,...(oe=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,te,re;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const expanded = ref({})
const toggle = (id) => expanded.value[id] = !expanded.value[id]
<\/script>

<template>
  <nav style="display: flex; flex-direction: column; gap: 2px;">
    <NeoNavItem label="Home" href="/" color="blue">
      <template #iconStart><span>🏠</span></template>
    </NeoNavItem>

    <!-- Expandable item with nested children -->
    <NeoNavItem
      label="Products"
      color="blue"
      has-children
      :expanded="expanded.products"
      @toggle="toggle('products')"
    >
      <template #iconStart><span>📦</span></template>
    </NeoNavItem>
    <template v-if="expanded.products">
      <NeoNavItem label="All Products" href="/products" color="blue" :level="1" />
      <NeoNavItem label="Categories" href="/products/categories" color="blue" :level="1" />
    </template>

    <NeoNavItem label="Orders" href="/orders" color="blue">
      <template #iconStart><span>🛒</span></template>
    </NeoNavItem>
  </nav>
</template>\`
      }
    }
  },
  render: (args: NeoNavItemProps) => {
    return defineComponent({
      name: 'CompleteNavigationRender',
      setup() {
        const expandedItems = ref<Record<string, boolean>>({});
        const toggleItem = (id: string) => {
          expandedItems.value[id] = !expandedItems.value[id];
        };
        interface NavItem {
          id?: string;
          label: string;
          href?: string;
          icon?: string;
          active?: boolean;
          children?: NavItem[];
        }
        const navItems: NavItem[] = [{
          id: 'home',
          label: 'Home',
          href: '/',
          icon: '🏠'
        }, {
          id: 'dashboard',
          label: 'Dashboard',
          href: '/dashboard',
          icon: '📊',
          active: true
        }, {
          id: 'products',
          label: 'Products',
          icon: '📦',
          children: [{
            label: 'All Products',
            href: '/products'
          }, {
            label: 'Categories',
            href: '/products/categories'
          }, {
            id: 'inventory',
            label: 'Inventory',
            children: [{
              label: 'Stock Levels',
              href: '/products/inventory/stock'
            }, {
              label: 'Reorder',
              href: '/products/inventory/reorder'
            }]
          }]
        }, {
          id: 'orders',
          label: 'Orders',
          href: '/orders',
          icon: '🛒'
        }, {
          id: 'settings',
          label: 'Settings',
          icon: '⚙️',
          children: [{
            label: 'General',
            href: '/settings/general'
          }, {
            label: 'Security',
            href: '/settings/security'
          }]
        }];
        const renderNavItem = (item: NavItem, level: number = 0): VNode => {
          const hasChildren = Boolean(item.children);
          const isExpanded = item.id ? expandedItems.value[item.id] : false;
          return <div key={item.id ?? item.label}>
                            <NeoNavItem label={item.label} href={hasChildren ? undefined : item.href} color={args.color} level={level} active={item.active} hasChildren={hasChildren} expanded={isExpanded} onToggle={item.id ? () => toggleItem(item.id!) : undefined} v-slots={item.icon ? {
              iconStart: () => <span>{item.icon}</span>
            } : undefined} />
                            {hasChildren && isExpanded && <div>{item.children!.map(child => renderNavItem(child, level + 1))}</div>}
                        </div>;
        };
        return () => <div style={{
          inlineSize: '280px',
          padding: '16px',
          backgroundColor: 'var(--neo-color-grey50)',
          borderRadius: '8px'
        }}>
                        <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px'
          }}>
                            {navItems.map(item => renderNavItem(item))}
                        </nav>
                    </div>;
      }
    });
  }
}`,...(re=(te=x.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ie,ce;z.parameters={...z.parameters,docs:{...(se=z.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
// Recursive navigation tree — visual styling caps at level 3,
// but NeoNavItem supports unlimited logical depth.
const expanded = ref({ docs: true, components: true })
const toggle = (id) => expanded.value[id] = !expanded.value[id]
<\/script>

<template>
  <nav aria-label="Documentation navigation">
    <!-- Level 0 — root section -->
    <NeoNavItem label="Documentation" color="blue" has-children
      :expanded="expanded.docs" @toggle="toggle('docs')" />

    <template v-if="expanded.docs">
      <NeoNavItem label="Getting Started" href="/docs/getting-started" color="blue" :level="1" show-connector />

      <!-- Level 1 — subsection -->
      <NeoNavItem label="Components" color="blue" :level="1" has-children show-connector
        :expanded="expanded.components" @toggle="toggle('components')" />

      <template v-if="expanded.components">
        <NeoNavItem label="Button" href="/docs/components/button" color="blue" :level="2" show-connector />
        <NeoNavItem label="Input"  href="/docs/components/input"  color="blue" :level="2" show-connector />
      </template>
    </template>
  </nav>
</template>\`
      }
    }
  },
  render: (args: NeoNavItemProps) => {
    return defineComponent({
      name: 'DeepNavigationRender',
      setup() {
        const expandedItems = ref<Record<string, boolean>>({
          docs: true,
          components: true,
          atoms: true
        });
        const toggleItem = (id: string) => {
          expandedItems.value[id] = !expandedItems.value[id];
        };
        interface NavItem {
          id: string;
          label: string;
          href?: string;
          children?: NavItem[];
        }
        const navData: NavItem[] = [{
          id: 'docs',
          label: 'Documentation',
          children: [{
            id: 'getting-started',
            label: 'Getting Started',
            href: '/docs/getting-started'
          }, {
            id: 'components',
            label: 'Components',
            children: [{
              id: 'atoms',
              label: 'Atoms',
              children: [{
                id: 'button',
                label: 'Button',
                href: '/docs/components/atoms/button'
              }, {
                id: 'input',
                label: 'Input',
                href: '/docs/components/atoms/input'
              }, {
                id: 'badge',
                label: 'Badge',
                href: '/docs/components/atoms/badge'
              }]
            }, {
              id: 'molecules',
              label: 'Molecules',
              children: [{
                id: 'card',
                label: 'Card',
                href: '/docs/components/molecules/card'
              }, {
                id: 'select',
                label: 'Select',
                href: '/docs/components/molecules/select'
              }]
            }, {
              id: 'organisms',
              label: 'Organisms',
              children: [{
                id: 'navigation',
                label: 'Navigation',
                href: '/docs/components/organisms/navigation'
              }, {
                id: 'footer',
                label: 'Footer',
                href: '/docs/components/organisms/footer'
              }]
            }]
          }, {
            id: 'theming',
            label: 'Theming',
            href: '/docs/theming'
          }]
        }, {
          id: 'api',
          label: 'API Reference',
          children: [{
            id: 'props',
            label: 'Props',
            href: '/api/props'
          }, {
            id: 'events',
            label: 'Events',
            href: '/api/events'
          }]
        }];
        const renderNavItems = (items: NavItem[], level: number = 0, parentExpanded: boolean = true): VNode[] => {
          if (!parentExpanded) return [];
          return items.map(item => {
            const hasChildren = Boolean(item.children?.length);
            const isExpanded = expandedItems.value[item.id] ?? false;
            return <div key={item.id}>
                                <NeoNavItem label={item.label} href={hasChildren ? undefined : item.href} color={args.color} size={args.size} level={level} hasChildren={hasChildren} expanded={isExpanded} showConnector={level > 0} onToggle={() => toggleItem(item.id)} />
                                {hasChildren && renderNavItems(item.children!, level + 1, isExpanded)}
                            </div>;
          });
        };
        return () => <div style={{
          inlineSize: '320px',
          padding: '16px',
          backgroundColor: 'var(--neo-color-grey50)',
          borderRadius: '8px'
        }}>
                        <p style={{
            marginBlockEnd: '16px',
            fontSize: '12px',
            color: 'var(--neo-color-grey700)'
          }}>
                            Deep navigation tree. Visual styling caps at level 3 but supports infinite logical
                            depth.
                        </p>
                        <nav aria-label="Documentation navigation">{renderNavItems(navData)}</nav>
                    </div>;
      }
    });
  }
}`,...(ce=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,ve;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['no-test'],
  parameters: {
    docs: {
      source: {
        code: \`<!-- size and level are orthogonal — combine freely -->
<NeoNavItem label="Level 0" color="blue" size="small" :level="0" />
<NeoNavItem label="Level 1" color="blue" size="small" :level="1" />
<NeoNavItem label="Level 2" color="blue" size="small" :level="2" />
<NeoNavItem label="Level 3" color="blue" size="small" :level="3" />
<NeoNavItem label="Level 0" color="blue" size="medium" :level="0" />
<NeoNavItem label="Level 1" color="blue" size="medium" :level="1" />
<NeoNavItem label="Level 2" color="blue" size="medium" :level="2" />
<NeoNavItem label="Level 3" color="blue" size="medium" :level="3" />
<NeoNavItem label="Level 0" color="blue" size="large" :level="0" />
<NeoNavItem label="Level 1" color="blue" size="large" :level="1" />
<NeoNavItem label="Level 2" color="blue" size="large" :level="2" />
<NeoNavItem label="Level 3" color="blue" size="large" :level="3" />\`
      }
    }
  },
  render: (args: NeoNavItemProps) => {
    return defineComponent({
      name: 'AllSizesWithLevelsRender',
      setup() {
        const sizes = ['small', 'medium', 'large'] as const;
        return () => <div style={{
          display: 'flex',
          gap: '32px',
          flexWrap: 'wrap'
        }}>
                        {sizes.map(size => <div key={size} style={{
            inlineSize: '280px'
          }}>
                                <h4 style={{
              marginBlockEnd: '8px',
              textTransform: 'capitalize'
            }}>{size}</h4>
                                <NeoNavItem label="Level 0" color={args.color} size={size} level={0} />
                                <NeoNavItem label="Level 1" color={args.color} size={size} level={1} />
                                <NeoNavItem label="Level 2" color={args.color} size={size} level={2} />
                                <NeoNavItem label="Level 3" color={args.color} size={size} level={3} />
                            </div>)}
                    </div>;
      }
    });
  }
}`,...(ve=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var me,ue,he;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
  <NeoNavItem label="Parent Item" color="blue" has-children :expanded="expanded"
    @toggle="expanded = !expanded" />
  <template v-if="expanded">
    <NeoNavItem label="Child 1" color="blue" :level="1" show-connector />
    <NeoNavItem label="Child 2" color="blue" :level="1" show-connector active />
  </template>
</div>\`
      }
    }
  },
  render: (args: NeoNavItemProps) => {
    return defineComponent({
      name: 'OnDarkRender',
      setup() {
        const expanded = ref(true);
        return () => <div style={{
          inlineSize: '280px'
        }}>
                        <NeoNavItem label="Parent Item" color={args.color} hasChildren expanded={expanded.value} onToggle={() => {
            expanded.value = !expanded.value;
          }} />
                        {expanded.value && <>
                                <NeoNavItem label="Child 1" color={args.color} level={1} showConnector />
                                <NeoNavItem label="Child 2" color={args.color} level={1} showConnector active />
                                <NeoNavItem label="Nested" color={args.color} level={2} showConnector />
                            </>}
                    </div>;
      }
    });
  }
}`,...(he=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};const Le=["Default","AsLink","Active","Disabled","WithIcon","WithChildren","NestedLevels","WithConnectors","Sizes","CompleteNavigation","DeepNavigation","AllSizesWithLevels","OnDark"];export{u as Active,C as AllSizesWithLevels,m as AsLink,x as CompleteNavigation,z as DeepNavigation,v as Default,h as Disabled,N as NestedLevels,y as OnDark,f as Sizes,g as WithChildren,I as WithConnectors,b as WithIcon,Le as __namedExportsOrder,we as default};
