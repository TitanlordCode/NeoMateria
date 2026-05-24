import{d as o,c as t,a as u,F as P}from"./iframe-BF-isInV.js";import{p as m}from"./placeholder-CgeahcyT.js";import{N as A}from"./NeoNavigation-C7CM1oTA.js";import{N as B}from"./NeoFooter-Wh-2HQFw.js";import{N as d}from"./NeoFeatureLine-CmleOmYs.js";import{N as D}from"./NeoHero-BAJy7kbi.js";import{N as L}from"./NeoHeadingGroup-C1WCxq_f.js";import{N as r}from"./NeoStat-DKNJ-0CB.js";import{N as M}from"./NeoCallout-Cwgg0U17.js";import{N as T}from"./NeoTextBlock-Boclpvgj.js";import{N as z}from"./NeoLink-CRoy5d8e.js";import{N as p}from"./NeoButton-DHToiIFj.js";import{N as G}from"./NeoLinkButton-CwKQhP8e.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIconButton-BVfU8KyK.js";import"./NeoIcon-BIwAnHaT.js";import"./NeoNavItem-DR-b9zOM.js";import"./NeoSheet-BYJKzysL.js";import"./NeoDropdown-C-LpLLtW.js";import"./NeoLinkGroup-BvRh1FwB.js";import"./NeoHeadlineQuaternary-Bl-S41bn.js";import"./useHeadline-CEiJuF5o.js";import"./NeoImage-Bbm4vtnN.js";import"./NeoSection-CpGIdj-6.js";import"./NeoHeadlinePrimary-yjoGdqD5.js";import"./NeoHeadlineSecondary-Bh4dmy74.js";import"./NeoHeadlineTertiary-1YtgnHBT.js";import"./useButton-DwgPL1zv.js";const de={title:"Pages/Feature Page",tags:[],parameters:{layout:"fullscreen"}},H=[{text:"Features",href:"#features",active:!0},{text:"Pricing",href:"#pricing"},{text:"Resources",children:[{text:"Documentation",href:"#docs"},{text:"Changelog",href:"#changelog"},{text:"Blog",href:"#blog"}]},{text:"GitHub",href:"https://github.com/titanlordcode/NeoMateria",external:!0}],R=[{title:"Product",links:[{text:"Features",href:"#features"},{text:"Pricing",href:"#pricing"},{text:"Changelog",href:"#changelog"}]},{title:"Developers",links:[{text:"Documentation",href:"#docs"},{text:"GitHub",href:"https://github.com/titanlordcode/NeoMateria",external:!0},{text:"npm",href:"https://npmjs.com/package/neo-materia",external:!0}]},{title:"Company",links:[{text:"About",href:"#about"},{text:"Blog",href:"#blog"},{text:"Contact",href:"#contact"}]}],s=o({name:"FeaturePageRender",props:{color:{type:String,required:!0},dark:{type:Boolean,default:!1}},setup(e){return()=>t("div",{class:e.dark?"u-onDark":void 0,style:{display:"flex",flexDirection:"column",fontFamily:"inherit",minBlockSize:"100vh",...e.dark?{background:"#111",color:"var(--neo-color-grey100)"}:{}}},[t(A,{color:e.color,ariaLabel:"Main navigation",menuLabel:"Menu",closeLabel:"Close",links:H},{logo:()=>t(z,{href:"#",color:e.color,size:"medium",variant:"default"},{default:()=>[t("strong",null,[u("NeoMateria")])]}),actions:()=>t(p,{text:"Get Started",color:e.color,variant:"primary",size:"small"},null)}),t(D,{title:"Build Interfaces That Scale",subtitle:"NeoMateria gives teams a shared design language — accessible, themeable, and ready for production.",color:e.color,variant:"centered",size:"lg"},{actions:()=>t(P,null,[t(p,{text:"Get Started Free",color:e.color,variant:"primary"},null),t(G,{href:"#features",text:"Explore Features",color:e.color,variant:"secondary"},null)])}),t("section",{style:{paddingBlock:"64px",paddingInline:"24px"}},[t("div",{style:{maxInlineSize:"900px",margin:"0 auto",display:"flex",gap:"32px",justifyContent:"center",flexWrap:"wrap"}},[t(r,{value:"40+",label:"Components",color:e.color,size:"lg"},null),t(r,{value:"100%",label:"TypeScript",color:e.color,size:"lg"},null),t(r,{value:"WCAG 2.1",label:"Accessible",color:e.color,size:"lg"},null),t(r,{value:"0",label:"Dependencies",color:e.color,size:"lg"},null)])]),t("section",{id:"features",style:{paddingBlock:"80px",paddingInline:"24px",backgroundColor:e.dark?"var(--neo-color-grey800)":"var(--neo-color-grey50)"}},[t("div",{style:{maxInlineSize:"1100px",margin:"0 auto"}},[t(L,{title:"Everything your team needs",subtitle:"From a single button to full page layouts — compose with confidence.",variant:"secondary",align:"center",color:e.color,style:{marginBlockEnd:"64px"}},null),t("div",{style:{display:"flex",flexDirection:"column",gap:"80px"}},[t(d,{imageSrc:m(800,600),imageAlt:"Accessible component illustration",title:"Accessible by Default",subtitle:"WCAG 2.1 AA compliance",body:"Every component ships with ARIA attributes, keyboard navigation, and focus management — built in, not bolted on. Tested with automated tooling and real screen readers.",color:e.color,ctaText:"View accessibility docs",ctaHref:"#docs"},null),t(d,{imageSrc:m(800,600),imageAlt:"Theme customization illustration",title:"One Prop. Every Color.",subtitle:"Design token architecture",body:"Pass a single color prop and watch it cascade through the entire component tree via CSS custom properties. Light and dark mode support comes for free.",color:e.color,reverse:!0,ctaText:"Explore theming",ctaHref:"#docs"},null)])])]),t("section",{style:{paddingBlock:"64px",paddingInline:"24px"}},[t("div",{style:{maxInlineSize:"800px",margin:"0 auto"}},[t(M,{color:e.color,variant:"filled",style:{marginBlockEnd:"48px"}},{default:()=>[u("NeoMateria is free to use in personal and commercial projects.")]}),t(T,{heading:"Ready to get started?",headingVariant:"secondary",body:"Install NeoMateria in seconds and start composing your first page. Full TypeScript types, Storybook stories, and documentation included.",ctaText:"Read the docs",ctaHref:"#docs",color:e.color,align:"center"},null)])]),t(B,{color:e.color,layout:"multi-column",sections:R,copyrightText:"© 2025 NeoMateria by TitanlordCode. All rights reserved."},null)])}}),c=e=>`<script setup lang="ts">
import NeoNavigation from 'neo-materia/NeoNavigation'
import NeoFooter from 'neo-materia/NeoFooter'
import NeoFeatureLine from 'neo-materia/NeoFeatureLine'
import NeoHero from 'neo-materia/NeoHero'
import NeoHeadingGroup from 'neo-materia/NeoHeadingGroup'
import NeoStat from 'neo-materia/NeoStat'
import NeoCallout from 'neo-materia/NeoCallout'
import NeoTextBlock from 'neo-materia/NeoTextBlock'
import NeoLink from 'neo-materia/NeoLink'
import NeoButton from 'neo-materia/NeoButton'
import NeoLinkButton from 'neo-materia/NeoLinkButton'

const navLinks = [
  { text: 'Features', href: '#features', active: true },
  { text: 'Pricing', href: '#pricing' },
  { text: 'GitHub', href: 'https://github.com/titanlordcode/NeoMateria', external: true },
]

const footerSections = [
  {
    title: 'Product',
    links: [
      { text: 'Features', href: '#features' },
      { text: 'Pricing', href: '#pricing' },
      { text: 'Changelog', href: '#changelog' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { text: 'Documentation', href: '#docs' },
      { text: 'GitHub', href: 'https://github.com/titanlordcode/NeoMateria', external: true },
      { text: 'npm', href: 'https://npmjs.com/package/neo-materia', external: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About', href: '#about' },
      { text: 'Blog', href: '#blog' },
      { text: 'Contact', href: '#contact' },
    ],
  },
]
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
    title="Build Interfaces That Scale"
    subtitle="NeoMateria gives teams a shared design language — accessible, themeable, and ready for production."
    color="${e}"
    variant="centered"
    size="lg"
  >
    <template #actions>
      <NeoButton text="Get Started Free" color="${e}" variant="primary" />
      <NeoLinkButton href="#features" text="Explore Features" color="${e}" variant="secondary" />
    </template>
  </NeoHero>

  <!-- Stats -->
  <section>
    <NeoStat value="40+" label="Components" color="${e}" size="lg" />
    <NeoStat value="100%" label="TypeScript" color="${e}" size="lg" />
    <NeoStat value="WCAG 2.1" label="Accessible" color="${e}" size="lg" />
    <NeoStat value="0" label="Dependencies" color="${e}" size="lg" />
  </section>

  <!-- Features -->
  <section id="features">
    <NeoHeadingGroup
      title="Everything your team needs"
      subtitle="From a single button to full page layouts — compose with confidence."
      variant="secondary"
      align="center"
      color="${e}"
    />
    <NeoFeatureLine
      image-src="..."
      image-alt="Accessible component illustration"
      title="Accessible by Default"
      subtitle="WCAG 2.1 AA compliance"
      body="Every component ships with ARIA attributes, keyboard navigation, and focus management."
      color="${e}"
      cta-text="View accessibility docs"
      cta-href="#docs"
    />
    <NeoFeatureLine
      image-src="..."
      image-alt="Theme customization illustration"
      title="One Prop. Every Color."
      subtitle="Design token architecture"
      body="Pass a single color prop and watch it cascade through the entire component tree via CSS custom properties."
      color="${e}"
      reverse
      cta-text="Explore theming"
      cta-href="#docs"
    />
  </section>

  <!-- CTA -->
  <section>
    <NeoCallout color="${e}" variant="filled">
      NeoMateria is open source under the MIT license. Free to use in personal and commercial projects.
    </NeoCallout>
    <NeoTextBlock
      heading="Ready to get started?"
      heading-variant="secondary"
      body="Install NeoMateria in seconds and start composing your first page."
      cta-text="Read the docs"
      cta-href="#docs"
      color="${e}"
      align="center"
    />
  </section>

  <NeoFooter
    color="${e}"
    layout="multi-column"
    :sections="footerSections"
    copyright-text="© 2025 NeoMateria by TitanlordCode. All rights reserved."
  />
</template>`,a={tags:["no-test"],args:{color:"blue"},parameters:{docs:{source:{code:c("blue")}}},render:e=>o({name:"DefaultStoryRender",setup(){return()=>t(s,{color:e.color},null)}})},n={tags:["no-test"],args:{color:"green"},parameters:{docs:{source:{code:c("green")}}},render:e=>o({name:"GreenStoryRender",setup(){return()=>t(s,{color:e.color},null)}})},i={tags:["no-test"],args:{color:"purple"},parameters:{docs:{source:{code:c("purple")}}},render:e=>o({name:"PurpleStoryRender",setup(){return()=>t(s,{color:e.color},null)}})},l={tags:["no-test"],args:{color:"blue"},globals:{backgrounds:"#000"},parameters:{docs:{source:{code:c("blue")}}},render:e=>o({name:"DarkModeStoryRender",setup(){return()=>t(s,{color:e.color,dark:!0},null)}})};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    color: 'blue'
  },
  parameters: {
    docs: {
      source: {
        code: featurePageSourceCode('blue')
      }
    }
  },
  render: args => defineComponent({
    name: 'DefaultStoryRender',
    setup() {
      return () => <FeaturePageComponent color={args.color} />;
    }
  })
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var N,x,y;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    color: 'green'
  },
  parameters: {
    docs: {
      source: {
        code: featurePageSourceCode('green')
      }
    }
  },
  render: args => defineComponent({
    name: 'GreenStoryRender',
    setup() {
      return () => <FeaturePageComponent color={args.color} />;
    }
  })
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,v,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    color: 'purple'
  },
  parameters: {
    docs: {
      source: {
        code: featurePageSourceCode('purple')
      }
    }
  },
  render: args => defineComponent({
    name: 'PurpleStoryRender',
    setup() {
      return () => <FeaturePageComponent color={args.color} />;
    }
  })
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var S,C,F;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        code: featurePageSourceCode('blue')
      }
    }
  },
  render: args => defineComponent({
    name: 'DarkModeStoryRender',
    setup() {
      return () => <FeaturePageComponent color={args.color} dark={true} />;
    }
  })
}`,...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const pe=["Default","Green","Purple","DarkMode"];export{l as DarkMode,a as Default,n as Green,i as Purple,pe as __namedExportsOrder,de as default};
