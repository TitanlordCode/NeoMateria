import{d as r,c as t,a as d,F as B}from"./iframe-Bl9mffZN.js";import{N as z}from"./NeoNavigation-CXvaWQZv.js";import{N as w}from"./NeoFooter-D5CSyjBm.js";import{N as H}from"./NeoCard-PrVUytlD.js";import{N as I}from"./NeoAccordion-CfDalGUi.js";import{N as p}from"./NeoButton-Dr34hEiF.js";import{N as $}from"./NeoLinkButton-BI3fskqk.js";import{N as F}from"./NeoLink-0mjgOxf8.js";import{N as T}from"./NeoHero-B05rt25r.js";import{N as u}from"./NeoHeadingGroup-D8YKuR1A.js";import{N as a}from"./NeoStat-JZ5tMQx4.js";import{N as P}from"./NeoCallout-CXKHaknd.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIconButton-DDy4m-rN.js";import"./NeoIcon-Dcg_Cr2g.js";import"./NeoNavItem-ChKjpbdA.js";import"./NeoSheet-CLDFZfRF.js";import"./NeoDropdown-DKXJm9Pq.js";import"./NeoLinkGroup-D5zGd3DI.js";import"./NeoHeadlineQuaternary-DN77cIh4.js";import"./useHeadline-ClMhnME8.js";import"./NeoImage-K5nOdJNx.js";import"./NeoBadge-CoWgrxEf.js";import"./NeoHeadlineTertiary-De8-gRAJ.js";import"./useButton-DYtkgqkE.js";import"./NeoHeadlinePrimary-DJ2fPgqg.js";import"./NeoSection-CrQJWByW.js";import"./NeoHeadlineSecondary-CbRAkBK8.js";const be={title:"Pages/Landing Page",tags:[],parameters:{layout:"fullscreen"}},V=[{text:"Components",href:"#components",active:!0},{text:"Docs",children:[{text:"Getting Started",href:"#getting-started"},{text:"Theming",href:"#theming"},{text:"Accessibility",href:"#a11y"}]},{text:"GitHub",href:"https://github.com/titanlordcode/NeoMateria",external:!0}],R=[{title:"Components",links:[{text:"Atoms",href:"#atoms"},{text:"Molecules",href:"#molecules"},{text:"Organisms",href:"#organisms"}]},{title:"Resources",links:[{text:"Getting Started",href:"#getting-started"},{text:"Storybook",href:"#storybook"},{text:"Changelog",href:"#changelog"}]},{title:"Community",links:[{text:"GitHub",href:"https://github.com/titanlordcode/NeoMateria",external:!0},{text:"npm",href:"https://npmjs.com/package/neo-materia",external:!0}]}],E=[{title:"Atomic Design",description:"Built on atomic design principles — atoms, molecules, and organisms compose naturally into any layout.",imageSrc:"https://placehold.co/600x340/e8f4fd/1a73e8?text=Atomic+Design",imageAlt:"Diagram showing atomic design layers",tags:[{text:"Design System"}]},{title:"Theme-Ready",description:"Every component adapts to your brand color. Light and dark mode support is built in with CSS custom properties.",imageSrc:"https://placehold.co/600x340/fdf3e8/e87c1a?text=Theming",imageAlt:"Color palette showing theme customization",tags:[{text:"CSS Variables"}]},{title:"Accessible by Default",description:"ARIA attributes, keyboard navigation, and focus management are included out of the box in every component.",imageSrc:"https://placehold.co/600x340/edf8f0/1a8a3c?text=Accessibility",imageAlt:"Accessibility icon with keyboard",tags:[{text:"WCAG 2.1"}]}],W=[{title:"How do I install NeoMateria?",content:"Install via npm: npm install neo-materia. Then import the CSS and register the components globally or locally in your Vue 3 project."},{title:"Does it support dark mode?",content:"Yes. All components include dark mode styles via CSS custom properties. Wrap your app in a dark-mode context and the components adapt automatically."},{title:"Can I use only specific components?",content:"Absolutely. NeoMateria is fully tree-shakeable. Import only the components you need and your bundle will only include those."},{title:"Is it TypeScript-friendly?",content:"Yes. Every component ships with TypeScript types for props, emits, and slots. Use them directly with vue-tsc for full type safety."}],c=r({name:"LandingPageRender",props:{color:{type:String,required:!0},dark:{type:Boolean,default:!1}},setup(e){return()=>t("div",{class:e.dark?"u-onDark":void 0,style:{display:"flex",flexDirection:"column",fontFamily:"inherit",minBlockSize:"100vh",...e.dark?{color:"var(--neo-color-grey100)",background:"#111"}:{}}},[t(z,{color:e.color,ariaLabel:"Main navigation",menuLabel:"Menu",closeLabel:"Close",links:V},{logo:()=>t(F,{href:"#",color:e.color,size:"medium",variant:"default"},{default:()=>[t("strong",null,[d("NeoMateria")])]}),actions:()=>t(p,{text:"Get Started",color:e.color,variant:"primary",size:"small"},null)}),t(T,{title:"A Vue 3 Component Library Built for Scale",subtitle:"NeoMateria provides accessible, theme-ready components following atomic design principles. Drop them into your Vue 3 project and ship faster.",color:e.color,variant:"centered",size:"lg"},{actions:()=>t(B,null,[t(p,{text:"Get Started",color:e.color,variant:"primary"},null),t($,{href:"#components",text:"View Components",color:e.color,variant:"secondary"},null)])}),t("section",{id:"components",style:{paddingBlock:"64px",paddingInline:"24px",backgroundColor:e.dark?"var(--neo-color-grey800)":"var(--neo-color-grey50)"}},[t("div",{style:{maxInlineSize:"1100px",margin:"0 auto"}},[t(u,{title:"Why NeoMateria?",subtitle:"Everything you need to build a consistent, accessible, and themeable Vue 3 application.",variant:"secondary",align:"center",color:e.color,style:{marginBlockEnd:"40px"}},null),t("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px"}},[E.map(o=>t(H,{key:o.title,color:e.color,title:o.title,description:o.description,imageSrc:o.imageSrc,imageAlt:o.imageAlt,tags:o.tags},null))])])]),t("section",{style:{paddingBlock:"64px",paddingInline:"24px"}},[t("div",{style:{maxInlineSize:"800px",margin:"0 auto",display:"flex",gap:"32px",justifyContent:"center",flexWrap:"wrap"}},[t(a,{value:"40+",label:"Components",color:e.color,size:"lg"},null),t(a,{value:"100%",label:"TypeScript",color:e.color,size:"lg"},null),t(a,{value:"WCAG 2.1",label:"Accessible",color:e.color,size:"lg"},null),t(a,{value:"0",label:"Dependencies",color:e.color,size:"lg"},null)])]),t("section",{style:{paddingBlock:"64px",paddingInline:"24px",backgroundColor:e.dark?"var(--neo-color-grey800)":"var(--neo-color-grey50)"}},[t("div",{style:{maxInlineSize:"720px",margin:"0 auto"}},[t(P,{color:e.color,variant:"filled",style:{marginBlockEnd:"32px"}},{default:()=>[d("NeoMateria is free to use in your projects. Contributions are welcome!")]}),t(u,{title:"Frequently Asked Questions",variant:"secondary",align:"center",color:e.color,style:{marginBlockEnd:"40px"}},null),t("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},[W.map(o=>t(I,{key:o.title,title:o.title,variant:"bordered"},{default:()=>[t("p",{style:{margin:"0"}},[o.content])]}))])])]),t(w,{color:e.color,layout:"multi-column",sections:R,copyrightText:"© 2025 NeoMateria by TitanlordCode. All rights reserved."},null)])}}),L=`const navLinks = [
  { text: 'Components', href: '#components', active: true },
  {
    text: 'Docs',
    children: [
      { text: 'Getting Started', href: '#getting-started' },
      { text: 'Theming', href: '#theming' },
      { text: 'Accessibility', href: '#a11y' },
    ],
  },
  { text: 'GitHub', href: 'https://github.com/titanlordcode/NeoMateria', external: true },
]`,G=`const features = [
  {
    title: 'Atomic Design',
    description: 'Built on atomic design principles — atoms, molecules, and organisms compose naturally into any layout.',
    imageSrc: 'https://placehold.co/600x340',
    imageAlt: 'Diagram showing atomic design layers',
    tags: [{ text: 'Design System' }],
  },
  {
    title: 'Theme-Ready',
    description: 'Every component adapts to your brand color. Light and dark mode support is built in with CSS custom properties.',
    imageSrc: 'https://placehold.co/600x340',
    imageAlt: 'Color palette showing theme customization',
    tags: [{ text: 'CSS Variables' }],
  },
  {
    title: 'Accessible by Default',
    description: 'ARIA attributes, keyboard navigation, and focus management are included out of the box in every component.',
    imageSrc: 'https://placehold.co/600x340',
    imageAlt: 'Accessibility icon with keyboard',
    tags: [{ text: 'WCAG 2.1' }],
  },
]`,M=`const faqItems = [
  {
    title: 'How do I install NeoMateria?',
    content: 'Install via npm: npm install neo-materia. Then import the CSS and register the components globally or locally in your Vue 3 project.',
  },
  {
    title: 'Does it support dark mode?',
    content: 'Yes. All components include dark mode styles via CSS custom properties. Wrap your app in a dark-mode context and the components adapt automatically.',
  },
  {
    title: 'Can I use only specific components?',
    content: 'Absolutely. NeoMateria is fully tree-shakeable. Import only the components you need and your bundle will only include those.',
  },
  {
    title: 'Is it TypeScript-friendly?',
    content: 'Yes. Every component ships with TypeScript types for props, emits, and slots. Use them directly with vue-tsc for full type safety.',
  },
]`,D=`const footerSections = [
  {
    title: 'Components',
    links: [
      { text: 'Atoms', href: '#atoms' },
      { text: 'Molecules', href: '#molecules' },
      { text: 'Organisms', href: '#organisms' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Getting Started', href: '#getting-started' },
      { text: 'Storybook', href: '#storybook' },
      { text: 'Changelog', href: '#changelog' },
    ],
  },
  {
    title: 'Community',
    links: [
      { text: 'GitHub', href: 'https://github.com/titanlordcode/NeoMateria', external: true },
      { text: 'npm', href: 'https://npmjs.com/package/neo-materia', external: true },
    ],
  },
]`,m=e=>`<script setup lang="ts">
import NeoNavigation from 'neo-materia/NeoNavigation'
import NeoFooter from 'neo-materia/NeoFooter'
import NeoCard from 'neo-materia/NeoCard'
import NeoAccordion from 'neo-materia/NeoAccordion'
import NeoButton from 'neo-materia/NeoButton'
import NeoLinkButton from 'neo-materia/NeoLinkButton'
import NeoLink from 'neo-materia/NeoLink'
import NeoHero from 'neo-materia/NeoHero'
import NeoHeadingGroup from 'neo-materia/NeoHeadingGroup'
import NeoStat from 'neo-materia/NeoStat'
import NeoCallout from 'neo-materia/NeoCallout'

${L}

${G}

${M}

${D}
<\/script>

<template>
  <NeoNavigation color="${e}" :links="navLinks">
    <template #logo>
      <NeoLink href="#" color="${e}" size="medium" variant="default">
        <strong>NeoMateria</strong>
      </NeoLink>
    </template>
    <template #actions>
      <NeoButton text="Get Started" color="${e}" variant="primary" size="small" />
    </template>
  </NeoNavigation>

  <NeoHero
    title="A Vue 3 Component Library Built for Scale"
    subtitle="NeoMateria provides accessible, theme-ready components following atomic design principles."
    color="${e}"
    variant="centered"
    size="lg"
  >
    <template #actions>
      <NeoButton text="Get Started" color="${e}" variant="primary" />
      <NeoLinkButton href="#components" text="View Components" color="${e}" variant="secondary" />
    </template>
  </NeoHero>

  <!-- Features -->
  <section id="components">
    <NeoHeadingGroup
      title="Why NeoMateria?"
      subtitle="Everything you need to build a consistent, accessible, and themeable Vue 3 application."
      variant="secondary"
      align="center"
      color="${e}"
    />
    <NeoCard
      v-for="feature in features"
      :key="feature.title"
      color="${e}"
      :title="feature.title"
      :description="feature.description"
      :image-src="feature.imageSrc"
      :image-alt="feature.imageAlt"
      :tags="feature.tags"
    />
  </section>

  <!-- Stats -->
  <section>
    <NeoStat value="40+" label="Components" color="${e}" size="lg" />
    <NeoStat value="100%" label="TypeScript" color="${e}" size="lg" />
    <NeoStat value="WCAG 2.1" label="Accessible" color="${e}" size="lg" />
    <NeoStat value="0" label="Dependencies" color="${e}" size="lg" />
  </section>

  <!-- FAQ -->
  <section>
    <NeoCallout color="${e}" variant="filled">
      NeoMateria is free to use in your projects. Contributions are welcome!
    </NeoCallout>
    <NeoHeadingGroup
      title="Frequently Asked Questions"
      variant="secondary"
      align="center"
      color="${e}"
    />
    <NeoAccordion
      v-for="item in faqItems"
      :key="item.title"
      :title="item.title"
      variant="bordered"
    >
      <p>{{ item.content }}</p>
    </NeoAccordion>
  </section>

  <NeoFooter
    color="${e}"
    layout="multi-column"
    :sections="footerSections"
    copyright-text="© 2025 NeoMateria by TitanlordCode. All rights reserved."
  />
</template>`,j=`<script setup lang="ts">
import NeoNavigation from 'neo-materia/NeoNavigation'
import NeoFooter from 'neo-materia/NeoFooter'
import NeoCard from 'neo-materia/NeoCard'
import NeoAccordion from 'neo-materia/NeoAccordion'
import NeoButton from 'neo-materia/NeoButton'
import NeoLinkButton from 'neo-materia/NeoLinkButton'
import NeoLink from 'neo-materia/NeoLink'
import NeoHero from 'neo-materia/NeoHero'
import NeoHeadingGroup from 'neo-materia/NeoHeadingGroup'
import NeoStat from 'neo-materia/NeoStat'
import NeoCallout from 'neo-materia/NeoCallout'

${L}

${G}

${M}

${D}
<\/script>

<template>
  <!-- Add u-onDark class to the root to activate dark mode styles -->
  <div class="u-onDark" style="min-height: 100vh; background: #111; color: var(--neo-color-grey100);">
    <NeoNavigation color="blue" :links="navLinks">
      <template #logo>
        <NeoLink href="#" color="blue" size="medium" variant="default">
          <strong>NeoMateria</strong>
        </NeoLink>
      </template>
      <template #actions>
        <NeoButton text="Get Started" color="blue" variant="primary" size="small" />
      </template>
    </NeoNavigation>

    <NeoHero
      title="A Vue 3 Component Library Built for Scale"
      subtitle="NeoMateria provides accessible, theme-ready components following atomic design principles."
      color="blue"
      variant="centered"
      size="lg"
    >
      <template #actions>
        <NeoButton text="Get Started" color="blue" variant="primary" />
        <NeoLinkButton href="#components" text="View Components" color="blue" variant="secondary" />
      </template>
    </NeoHero>

    <!-- Features -->
    <section id="components">
      <NeoHeadingGroup
        title="Why NeoMateria?"
        subtitle="Everything you need to build a consistent, accessible, and themeable Vue 3 application."
        variant="secondary"
        align="center"
        color="blue"
      />
      <NeoCard
        v-for="feature in features"
        :key="feature.title"
        color="blue"
        :title="feature.title"
        :description="feature.description"
        :image-src="feature.imageSrc"
        :image-alt="feature.imageAlt"
        :tags="feature.tags"
      />
    </section>

    <!-- Stats -->
    <section>
      <NeoStat value="40+" label="Components" color="blue" size="lg" />
      <NeoStat value="100%" label="TypeScript" color="blue" size="lg" />
      <NeoStat value="WCAG 2.1" label="Accessible" color="blue" size="lg" />
      <NeoStat value="0" label="Dependencies" color="blue" size="lg" />
    </section>

    <!-- FAQ -->
    <section>
      <NeoCallout color="blue" variant="filled">
        NeoMateria is free to use in your projects. Contributions are welcome!
      </NeoCallout>
      <NeoHeadingGroup
        title="Frequently Asked Questions"
        variant="secondary"
        align="center"
        color="blue"
      />
      <NeoAccordion
        v-for="item in faqItems"
        :key="item.title"
        :title="item.title"
        variant="bordered"
      >
        <p>{{ item.content }}</p>
      </NeoAccordion>
    </section>

    <NeoFooter
      color="blue"
      layout="multi-column"
      :sections="footerSections"
      copyright-text="© 2025 NeoMateria by TitanlordCode. All rights reserved."
    />
  </div>
</template>`,n={tags:["no-test"],args:{color:"blue"},parameters:{docs:{source:{code:m("blue")}}},render:e=>r({name:"DefaultStoryRender",setup(){return()=>t(c,{color:e.color},null)}})},i={tags:["no-test"],args:{color:"green"},parameters:{docs:{source:{code:m("green")}}},render:e=>r({name:"GreenStoryRender",setup(){return()=>t(c,{color:e.color},null)}})},l={tags:["no-test"],args:{color:"purple"},parameters:{docs:{source:{code:m("purple")}}},render:e=>r({name:"PurpleStoryRender",setup(){return()=>t(c,{color:e.color},null)}})},s={tags:["no-test"],args:{color:"blue"},globals:{backgrounds:"#000"},parameters:{docs:{source:{code:j}}},render:e=>r({name:"DarkModeStoryRender",setup(){return()=>t(c,{color:e.color,dark:!0},null)}})};var g,y,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    color: 'blue'
  },
  parameters: {
    docs: {
      source: {
        code: landingPageSourceCode('blue')
      }
    }
  },
  render: args => defineComponent({
    name: 'DefaultStoryRender',
    setup() {
      return () => <LandingPageComponent color={args.color} />;
    }
  })
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var N,h,b;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    color: 'green'
  },
  parameters: {
    docs: {
      source: {
        code: landingPageSourceCode('green')
      }
    }
  },
  render: args => defineComponent({
    name: 'GreenStoryRender',
    setup() {
      return () => <LandingPageComponent color={args.color} />;
    }
  })
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,x,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    color: 'purple'
  },
  parameters: {
    docs: {
      source: {
        code: landingPageSourceCode('purple')
      }
    }
  },
  render: args => defineComponent({
    name: 'PurpleStoryRender',
    setup() {
      return () => <LandingPageComponent color={args.color} />;
    }
  })
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,C,A;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    color: 'blue'
  },
  globals: {
    backgrounds: '#000'
  },
  parameters: {
    docs: {
      source: {
        code: darkLandingPageSourceCode
      }
    }
  },
  render: args => defineComponent({
    name: 'DarkModeStoryRender',
    setup() {
      return () => <LandingPageComponent color={args.color} dark={true} />;
    }
  })
}`,...(A=(C=s.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const ve=["Default","Green","Purple","DarkMode"];export{s as DarkMode,n as Default,i as Green,l as Purple,ve as __namedExportsOrder,be as default};
