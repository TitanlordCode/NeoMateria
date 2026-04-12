import{d as s,c as o,a,i as w}from"./iframe-BBbPLObx.js";import{p as k}from"./placeholder-J2GqGUFJ.js";import{N as A}from"./NeoNavigation-DLqYe4Wc.js";import{N as D}from"./NeoFooter-sxsTivd1.js";import{N as T}from"./NeoCoverPanelGrid-fLZ2G1fm.js";import{N as M}from"./NeoCoverPanel-B8KaEhG8.js";import{N as R}from"./NeoProgressPanel-8KXJ1kp3.js";import{N as B}from"./NeoPennant-qYavnZWh.js";import{N as c}from"./NeoLink-Crcw9R3O.js";import{N as $}from"./NeoButton-CsxJoi-B.js";import{N as F}from"./NeoHero-D2Pwa0LM.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoIconButton-Cudma5qn.js";import"./NeoIcon-DXYOa7dd.js";import"./NeoNavItem-B9keAFjK.js";import"./NeoSheet-DQubbqbT.js";import"./NeoDropdown-CQnSb9S1.js";import"./NeoLinkGroup-DW967dsp.js";import"./NeoHeadlineQuaternary-BIlxhCZk.js";import"./useHeadline-pIEPZDoK.js";import"./NeoImage-DB5DIDKj.js";import"./NeoProgressBar-BWka5Ybk.js";import"./NeoHeadlineTertiary-D8CWt5r_.js";import"./useButton-otF8SIdU.js";import"./NeoHeadlinePrimary-CaTXF9rw.js";function z(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!w(e)}const ge={title:"Pages/Media Library",tags:[],parameters:{layout:"fullscreen",a11y:{config:{rules:[{id:"heading-order",enabled:!1}]}}}},G=[{text:"Browse",href:"#browse",active:!0},{text:"Top Rated",href:"#top-rated"},{text:"Genres",children:[{text:"Drama",href:"#drama"},{text:"Action",href:"#action"},{text:"Comedy",href:"#comedy"},{text:"Science Fiction",href:"#sci-fi"}]},{text:"New Releases",href:"#new"}],I=[{title:"Browse",links:[{text:"All Titles",href:"#all"},{text:"New Releases",href:"#new"},{text:"Top Rated",href:"#top"}]},{title:"Genres",links:[{text:"Drama",href:"#drama"},{text:"Action",href:"#action"},{text:"Science Fiction",href:"#sci-fi"}]},{title:"Account",links:[{text:"My List",href:"#list"},{text:"History",href:"#history"},{text:"Settings",href:"#settings"}]}],V=[{color:"blue",title:"The Last Expedition",subtitle:"Adventure · Drama · 2024",value:84,rank:"1"},{color:"grey",title:"Echoes of Tomorrow",subtitle:"Science Fiction · 2023",value:71,rank:"2"},{color:"red",title:"A Quiet Street",subtitle:"Drama · Comedy · 2024",value:63,rank:"3"}],d=["#64748b","#6366f1","#ec4899","#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#8b5cf6","#475569","#334155","#0ea5e9","#10b981","#f43f5e","#a855f7","#14b8a6"],H=Array.from({length:16},(e,r)=>({imageSrc:k(300,450,d[r%d.length]),imageAlt:`Library item ${r+1}`,title:`Title ${r+1}`})),m=s({name:"MediaPageRender",props:{color:{type:String,required:!0},dark:{type:Boolean,default:!1}},setup(e){return()=>{let r;return o("div",{class:e.dark?"u-onDark":void 0,style:{display:"flex",flexDirection:"column",fontFamily:"inherit",minBlockSize:"100vh",...e.dark?{background:"var(--neo-color-grey950, #0a0a0a)",color:"var(--neo-color-grey100)"}:{}}},[o(A,{color:e.color,ariaLabel:"Main navigation",menuLabel:"Menu",closeLabel:"Close",links:G},{logo:()=>o(c,{href:"#",color:e.color,size:"medium",variant:"default"},{default:()=>[o("strong",null,[a("CineVault")])]}),actions:()=>o($,{text:"My List",color:e.color,variant:"secondary",size:"small",rounded:!0},null)}),o(F,{title:"Your Streaming Library",subtitle:"Discover top-rated titles, browse by genre, and manage your personal list.",color:e.color,variant:"centered",size:"sm"},null),o("section",{id:"top-rated",style:{paddingBlock:"48px",paddingInline:"24px",...e.dark?{background:"var(--neo-color-grey900)"}:{}}},[o("div",{style:{margin:"0 auto",maxInlineSize:"1100px"}},[o("h2",{style:{fontSize:"1.5rem",fontWeight:"700",marginBlock:"0 24px"}},[a("Top Rated This Season")]),o("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxInlineSize:"480px"}},[V.map(t=>o(R,{key:t.rank,color:t.color,imageSrc:k(200,300),imageAlt:`${t.title} cover`,title:t.title,subtitle:t.subtitle,value:t.value,valueLabel:"of all votes",href:"#",rounded:!0},{pennant:()=>o(B,{color:t.color},{default:()=>[t.rank]})}))])])]),o("section",{id:"browse",style:{flex:"1",paddingBlock:"48px",paddingInline:"24px"}},[o("div",{style:{margin:"0 auto",maxInlineSize:"1100px"}},[o("div",{style:{alignItems:"center",display:"flex",justifyContent:"space-between",marginBlockEnd:"24px"}},[o("h2",{style:{fontSize:"1.5rem",fontWeight:"700",margin:"0"}},[a("Browse the Library")]),o(c,{href:"#",color:e.color,size:"medium",variant:"default"},{default:()=>[a("View all")]})]),o(T,{columns:5,gap:"medium",minColumnWidth:140},z(r=H.map(t=>o(M,{key:t.imageSrc,color:e.color,imageSrc:t.imageSrc,imageAlt:t.imageAlt,title:t.title,clickBehavior:"link",href:"#",rounded:!0},null)))?r:{default:()=>[r]})])]),o(D,{color:e.color,layout:"multi-column",sections:I,copyrightText:"© 2025 CineVault. All rights reserved."},null)])}}}),x=`const navLinks = [
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
</template>`,i={args:{color:"blue"},parameters:{docs:{source:{code:L("blue")}}},render:e=>s({name:"DefaultStoryRender",setup(){return()=>o(m,{color:e.color},null)}})},n={args:{color:"purple"},parameters:{docs:{source:{code:L("purple")}}},render:e=>s({name:"PurpleStoryRender",setup(){return()=>o(m,{color:e.color},null)}})},l={args:{color:"blue"},globals:{backgrounds:"#000"},parameters:{docs:{source:{code:E}}},render:e=>s({name:"DarkModeStoryRender",setup(){return()=>o(m,{color:e.color,dark:!0},null)}})};var u,p,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,N,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(N=n.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var v,y,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const fe=["Default","Purple","DarkMode"];export{l as DarkMode,i as Default,n as Purple,fe as __namedExportsOrder,ge as default};
