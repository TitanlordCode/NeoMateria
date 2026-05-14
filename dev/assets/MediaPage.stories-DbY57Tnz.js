import{d as s,c as t,a,i as w}from"./iframe-DpITHDOf.js";import{p as k}from"./placeholder-CgeahcyT.js";import{N as A}from"./NeoNavigation-CV0mgO5Q.js";import{N as D}from"./NeoFooter-IqcX1stS.js";import{N as T}from"./NeoCoverPanelGrid-CONNxqzb.js";import{N as M}from"./NeoCoverPanel-D2WlyqxI.js";import{N as R}from"./NeoProgressPanel-CS2etlPH.js";import{N as B}from"./NeoPennant-Bbo6Pn_V.js";import{N as c}from"./NeoLink-Ds5YpQ4s.js";import{N as $}from"./NeoButton-DRGCMDvH.js";import{N as F}from"./NeoHero-Ckh_Ww8R.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIconButton-Dd08mOmr.js";import"./NeoIcon-DLzm-cme.js";import"./NeoNavItem-o8-s--ip.js";import"./NeoSheet-DA8hfeWT.js";import"./NeoDropdown-Cnfikyru.js";import"./NeoLinkGroup-CndAi0tk.js";import"./NeoHeadlineQuaternary-BbTmAs0n.js";import"./useHeadline-DTYmNqgn.js";import"./NeoSection-C8Tm97MH.js";import"./NeoImage-D7oOMH6Q.js";import"./NeoProgressBar-BCBihsVp.js";import"./NeoHeadlineTertiary-6L1BsbfZ.js";import"./useButton-Bpy5cFTg.js";import"./NeoHeadlinePrimary-D_3pWkZO.js";function z(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!w(e)}const fe={title:"Pages/Media Library",tags:[],parameters:{layout:"fullscreen"}},G=[{text:"Browse",href:"#browse",active:!0},{text:"Top Rated",href:"#top-rated"},{text:"Genres",children:[{text:"Drama",href:"#drama"},{text:"Action",href:"#action"},{text:"Comedy",href:"#comedy"},{text:"Science Fiction",href:"#sci-fi"}]},{text:"New Releases",href:"#new"}],I=[{title:"Browse",links:[{text:"All Titles",href:"#all"},{text:"New Releases",href:"#new"},{text:"Top Rated",href:"#top"}]},{title:"Genres",links:[{text:"Drama",href:"#drama"},{text:"Action",href:"#action"},{text:"Science Fiction",href:"#sci-fi"}]},{title:"Account",links:[{text:"My List",href:"#list"},{text:"History",href:"#history"},{text:"Settings",href:"#settings"}]}],V=[{color:"blue",title:"The Last Expedition",subtitle:"Adventure · Drama · 2024",value:84,rank:"1"},{color:"grey",title:"Echoes of Tomorrow",subtitle:"Science Fiction · 2023",value:71,rank:"2"},{color:"red",title:"A Quiet Street",subtitle:"Drama · Comedy · 2024",value:63,rank:"3"}],d=["#64748b","#6366f1","#ec4899","#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#8b5cf6","#475569","#334155","#0ea5e9","#10b981","#f43f5e","#a855f7","#14b8a6"],H=Array.from({length:16},(e,r)=>({imageSrc:k(300,450,d[r%d.length]),imageAlt:`Library item ${r+1}`,title:`Title ${r+1}`})),m=s({name:"MediaPageRender",props:{color:{type:String,required:!0},dark:{type:Boolean,default:!1}},setup(e){return()=>{let r;return t("div",{class:e.dark?"u-onDark":void 0,style:{display:"flex",flexDirection:"column",fontFamily:"inherit",minBlockSize:"100vh",...e.dark?{background:"var(--neo-color-grey950, #0a0a0a)",color:"var(--neo-color-grey100)"}:{}}},[t(A,{color:e.color,ariaLabel:"Main navigation",menuLabel:"Menu",closeLabel:"Close",links:G},{logo:()=>t(c,{href:"#",color:e.color,size:"medium",variant:"default"},{default:()=>[t("strong",null,[a("CineVault")])]}),actions:()=>t($,{text:"My List",color:e.color,variant:"secondary",size:"small",rounded:!0},null)}),t(F,{title:"Your Streaming Library",subtitle:"Discover top-rated titles, browse by genre, and manage your personal list.",color:e.color,variant:"centered",size:"sm"},null),t("section",{id:"top-rated",style:{paddingBlock:"48px",paddingInline:"24px",...e.dark?{background:"var(--neo-color-grey900)"}:{}}},[t("div",{style:{margin:"0 auto",maxInlineSize:"1100px"}},[t("h2",{style:{fontSize:"1.5rem",fontWeight:"700",marginBlock:"0 24px"}},[a("Top Rated This Season")]),t("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxInlineSize:"480px"}},[V.map(o=>t(R,{key:o.rank,color:o.color,imageSrc:k(200,300),imageAlt:`${o.title} cover`,title:o.title,subtitle:o.subtitle,value:o.value,valueLabel:"of all votes",href:"#",rounded:!0},{pennant:()=>t(B,{color:o.color},{default:()=>[o.rank]})}))])])]),t("section",{id:"browse",style:{flex:"1",paddingBlock:"48px",paddingInline:"24px"}},[t("div",{style:{margin:"0 auto",maxInlineSize:"1100px"}},[t("div",{style:{alignItems:"center",display:"flex",justifyContent:"space-between",marginBlockEnd:"24px"}},[t("h2",{style:{fontSize:"1.5rem",fontWeight:"700",margin:"0"}},[a("Browse the Library")]),t(c,{href:"#",color:e.color,size:"medium",variant:"default"},{default:()=>[a("View all")]})]),t(T,{columns:5,gap:"medium",minColumnWidth:140},z(r=H.map(o=>t(M,{key:o.imageSrc,color:e.color,imageSrc:o.imageSrc,imageAlt:o.imageAlt,title:o.title,clickBehavior:"link",href:"#",rounded:!0},null)))?r:{default:()=>[r]})])]),t(D,{color:e.color,layout:"multi-column",sections:I,copyrightText:"© 2025 CineVault. All rights reserved."},null)])}}}),x=`const navLinks = [
  { text: 'Browse', href: '#browse', active: true },
  { text: 'Top Rated', href: '#top-rated' },
  {
    text: 'Genres',
    children: [
      { text: 'Drama', href: '#drama' },
      { text: 'Action', href: '#action' },
      { text: 'Comedy', href: '#comedy' },
      { text: 'Science Fiction', href: '#sci-fi' },
    ],
  },
  { text: 'New Releases', href: '#new' },
]`,P=`const topRated = [
  { color: 'blue', title: 'The Last Expedition', subtitle: 'Adventure · Drama · 2024', value: 84, rank: '1' },
  { color: 'grey', title: 'Echoes of Tomorrow', subtitle: 'Science Fiction · 2023', value: 71, rank: '2' },
  { color: 'red', title: 'A Quiet Street', subtitle: 'Drama · Comedy · 2024', value: 63, rank: '3' },
]`,S=`const libraryItems = [
  { imageSrc: 'https://placehold.co/300x450', imageAlt: 'Library item 1', title: 'Title 1' },
  { imageSrc: 'https://placehold.co/300x450', imageAlt: 'Library item 2', title: 'Title 2' },
  { imageSrc: 'https://placehold.co/300x450', imageAlt: 'Library item 3', title: 'Title 3' },
  { imageSrc: 'https://placehold.co/300x450', imageAlt: 'Library item 4', title: 'Title 4' },
]`,C=`const footerSections = [
  {
    title: 'Browse',
    links: [
      { text: 'All Titles', href: '#all' },
      { text: 'New Releases', href: '#new' },
      { text: 'Top Rated', href: '#top' },
    ],
  },
  {
    title: 'Genres',
    links: [
      { text: 'Drama', href: '#drama' },
      { text: 'Action', href: '#action' },
      { text: 'Science Fiction', href: '#sci-fi' },
    ],
  },
  {
    title: 'Account',
    links: [
      { text: 'My List', href: '#list' },
      { text: 'History', href: '#history' },
      { text: 'Settings', href: '#settings' },
    ],
  },
]`,L=e=>`<script setup lang="ts">
import NeoNavigation from 'neo-materia/NeoNavigation'
import NeoFooter from 'neo-materia/NeoFooter'
import NeoCoverPanelGrid from 'neo-materia/NeoCoverPanelGrid'
import NeoCoverPanel from 'neo-materia/NeoCoverPanel'
import NeoProgressPanel from 'neo-materia/NeoProgressPanel'
import NeoPennant from 'neo-materia/NeoPennant'
import NeoLink from 'neo-materia/NeoLink'
import NeoButton from 'neo-materia/NeoButton'
import NeoHero from 'neo-materia/NeoHero'

${x}

${P}

${S}

${C}
<\/script>

<template>
  <NeoNavigation color="${e}" :links="navLinks" aria-label="Main navigation" menu-label="Menu" close-label="Close">
    <template #logo>
      <NeoLink href="#" color="${e}" size="medium" variant="default">
        <strong>CineVault</strong>
      </NeoLink>
    </template>
    <template #actions>
      <NeoButton text="My List" color="${e}" variant="secondary" rounded />
    </template>
  </NeoNavigation>

  <NeoHero
    title="Your Streaming Library"
    subtitle="Discover top-rated titles, browse by genre, and manage your personal list."
    color="${e}"
    variant="centered"
    size="sm"
  />

  <section id="top-rated">
    <h2>Top Rated This Season</h2>
    <NeoProgressPanel
      v-for="item in topRated"
      :key="item.rank"
      :color="item.color"
      :title="item.title"
      :subtitle="item.subtitle"
      :value="item.value"
      value-label="of all votes"
      href="#"
      rounded
    >
      <template #pennant>
        <NeoPennant :color="item.color">{{ item.rank }}</NeoPennant>
      </template>
    </NeoProgressPanel>
  </section>

  <section id="browse">
    <h2>Browse the Library</h2>
    <NeoCoverPanelGrid :columns="5" gap="medium" :min-column-width="140">
      <NeoCoverPanel
        v-for="item in libraryItems"
        :key="item.imageSrc"
        color="${e}"
        :image-src="item.imageSrc"
        :image-alt="item.imageAlt"
        :title="item.title"
        click-behavior="link"
        href="#"
        rounded
      />
    </NeoCoverPanelGrid>
  </section>

  <NeoFooter
    color="${e}"
    layout="multi-column"
    :sections="footerSections"
    copyright-text="© 2025 CineVault. All rights reserved."
  />
</template>`,E=`<script setup lang="ts">
import NeoNavigation from 'neo-materia/NeoNavigation'
import NeoFooter from 'neo-materia/NeoFooter'
import NeoCoverPanelGrid from 'neo-materia/NeoCoverPanelGrid'
import NeoCoverPanel from 'neo-materia/NeoCoverPanel'
import NeoProgressPanel from 'neo-materia/NeoProgressPanel'
import NeoPennant from 'neo-materia/NeoPennant'
import NeoLink from 'neo-materia/NeoLink'
import NeoButton from 'neo-materia/NeoButton'
import NeoHero from 'neo-materia/NeoHero'

${x}

${P}

${S}

${C}
<\/script>

<template>
  <!-- Add u-onDark to root to activate dark mode styles -->
  <div class="u-onDark" style="min-height: 100vh; background: var(--neo-color-grey950, #0a0a0a); color: var(--neo-color-grey100);">
    <NeoNavigation color="blue" :links="navLinks" aria-label="Main navigation" menu-label="Menu" close-label="Close">
      <template #logo>
        <NeoLink href="#" color="blue" size="medium" variant="default">
          <strong>CineVault</strong>
        </NeoLink>
      </template>
      <template #actions>
        <NeoButton text="My List" color="blue" variant="secondary" rounded />
      </template>
    </NeoNavigation>

    <NeoHero
      title="Your Streaming Library"
      subtitle="Discover top-rated titles, browse by genre, and manage your personal list."
      color="blue"
      variant="centered"
      size="sm"
    />

    <section id="top-rated" style="background: var(--neo-color-grey900);">
      <h2>Top Rated This Season</h2>
      <NeoProgressPanel v-for="item in topRated" :key="item.rank" :color="item.color" :title="item.title" :subtitle="item.subtitle" :value="item.value" value-label="of all votes" href="#" rounded>
        <template #pennant>
          <NeoPennant :color="item.color">{{ item.rank }}</NeoPennant>
        </template>
      </NeoProgressPanel>
    </section>

    <section id="browse">
      <h2>Browse the Library</h2>
      <NeoCoverPanelGrid :columns="5" gap="medium" :min-column-width="140">
        <NeoCoverPanel v-for="item in libraryItems" :key="item.imageSrc" color="blue" :image-src="item.imageSrc" :image-alt="item.imageAlt" :title="item.title" click-behavior="link" href="#" rounded />
      </NeoCoverPanelGrid>
    </section>

    <NeoFooter color="blue" layout="multi-column" :sections="footerSections" copyright-text="© 2025 CineVault. All rights reserved." />
  </div>
</template>`,n={tags:["no-test"],args:{color:"blue"},parameters:{docs:{source:{code:L("blue")}}},render:e=>s({name:"DefaultStoryRender",setup(){return()=>t(m,{color:e.color},null)}})},i={tags:["no-test"],args:{color:"purple"},parameters:{docs:{source:{code:L("purple")}}},render:e=>s({name:"PurpleStoryRender",setup(){return()=>t(m,{color:e.color},null)}})},l={tags:["no-test"],args:{color:"blue"},globals:{backgrounds:"#000"},parameters:{docs:{source:{code:E}}},render:e=>s({name:"DarkModeStoryRender",setup(){return()=>t(m,{color:e.color,dark:!0},null)}})};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    color: 'blue'
  },
  parameters: {
    docs: {
      source: {
        code: mediaPageSourceCode('blue')
      }
    }
  },
  render: args => defineComponent({
    name: 'DefaultStoryRender',
    setup() {
      return () => <MediaPageComponent color={args.color} />;
    }
  })
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,N,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['no-test'],
  args: {
    color: 'purple'
  },
  parameters: {
    docs: {
      source: {
        code: mediaPageSourceCode('purple')
      }
    }
  },
  render: args => defineComponent({
    name: 'PurpleStoryRender',
    setup() {
      return () => <MediaPageComponent color={args.color} />;
    }
  })
}`,...(h=(N=i.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var v,y,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        code: darkMediaPageSourceCode
      }
    }
  },
  render: args => defineComponent({
    name: 'DarkModeStoryRender',
    setup() {
      return () => <MediaPageComponent color={args.color} dark={true} />;
    }
  })
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const Ne=["Default","Purple","DarkMode"];export{l as DarkMode,n as Default,i as Purple,Ne as __namedExportsOrder,fe as default};
