import{d as p,c as e,a as n}from"./iframe-D9nyRK5o.js";import{N as l}from"./NeoSection-YNQBYy8I.js";import{N as g}from"./NeoNavigation-JxGM2hny.js";import{N as m}from"./NeoFooter-vibwBzxb.js";import{N as f}from"./NeoHeadlinePrimary-5HFmFRaT.js";import{N as a}from"./NeoHeadlineSecondary-D8JvCPnR.js";import{N as v}from"./NeoHeadlineTertiary-BZG9UMLt.js";import{N as r}from"./NeoText-CvrIj8_p.js";import{N as y}from"./NeoButton-CODeixOj.js";import{N as h}from"./NeoBadge-DOaopeSJ.js";import{N as t}from"./NeoCallout-UMd5JbBN.js";import{p as N}from"./placeholder-CgeahcyT.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DerOYOQE.js";import"./NeoLink-D3-_A2js.js";import"./NeoIconButton-DtDeCrqL.js";import"./NeoIcon-Cexy51PO.js";import"./NeoNavItem-iFyaM9Wl.js";import"./NeoSheet-BwumCIPP.js";import"./NeoDropdown-mMc8jxMv.js";import"./NeoLinkGroup-DoFqSOaa.js";import"./NeoHeadlineQuaternary-Dpu8VyZq.js";import"./useHeadline-C_Gbmvfw.js";import"./useButton-B-Bpk_ne.js";const q={title:"Pages/NeoSectionShowcase",tags:["no-test"],parameters:{layout:"fullscreen",docs:{description:{component:"End-to-end demonstration of every `NeoSection` use case: default centered content, full-width variant, multi-column spans, full-bleed children that break the centered grid, and prop overrides (`columnGap`, `rowGap`, `padding`). The whole page renders inside a `NeoNavigation` + `NeoFooter` frame so you can verify that section content aligns with the nav and footer at every viewport."}}}},o=u=>({alignItems:"center",background:u,borderRadius:"8px",color:"white",display:"flex",fontFamily:"monospace",fontSize:"14px",justifyContent:"center",minBlockSize:"88px",padding:"16px"}),b=[{text:"Demos",href:"#demos"},{text:"Spans",href:"#spans"},{text:"Full bleed",href:"#full-bleed"},{text:"Variants",href:"#variants"}],x=[{title:"Library",links:[{text:"Atoms",href:"#"},{text:"Molecules",href:"#"},{text:"Organisms",href:"#"}]},{title:"Reference",links:[{text:"Tokens",href:"#"},{text:"Theming",href:"#"}]}],d={render:()=>p({name:"NeoSectionShowcaseRender",setup(){return()=>e("div",null,[e(g,{color:"blue",ariaLabel:"Main",menuAriaLabel:"Open menu",links:b},{logo:()=>e("strong",{style:{color:"var(--neo-color-blue600)"}},[n("NeoLayout")])}),e(l,{style:{paddingBlock:"48px"}},{default:()=>[e(t,{variant:"accent",size:"small",color:"blue"},{default:()=>[e("code",null,[n("<NeoSection>")]),n(" — default, content centered at")," ",e("code",null,[n("--neo-spacing-max-global-size")])]}),e(f,{tag:"h1",color:"blue",align:"start"},{default:()=>[n("NeoSection Layout Showcase")]}),e(r,{size:"lead"},{default:()=>[n("Every example below lives inside a NeoSection. Inspect any block to verify that its inline edges line up with the surrounding NeoNavigation and NeoFooter content.")]})]}),e(l,{style:{paddingBlock:"48px"}},{default:()=>[e(t,{variant:"accent",size:"small",color:"green"},{default:()=>[n("Multi-column children via "),e("code",null,[n("grid-column")]),n(" spans (6 + 6, 4 + 4 + 4).")]}),e(a,{tag:"h2",color:"green"},{default:()=>[n("Column spans")]}),e("div",{style:{...o("var(--neo-color-blue500)"),gridColumn:"content-start / span 6"}},[e("code",null,[n("content-start / span 6")])]),e("div",{style:{...o("var(--neo-color-purple500)"),gridColumn:"span 6 / content-end"}},[e("code",null,[n("span 6 / content-end")])]),e("div",{style:{...o("var(--neo-color-teal500)"),gridColumn:"content-start / span 4"}},[e("code",null,[n("span 4")])]),e("div",{style:{...o("var(--neo-color-orange500)"),gridColumn:"span 4"}},[e("code",null,[n("span 4")])]),e("div",{style:{...o("var(--neo-color-red500)"),gridColumn:"span 4 / content-end"}},[e("code",null,[n("span 4")])])]}),e(l,{style:{paddingBlock:"48px"}},{default:()=>[e(t,{variant:"accent",size:"small",color:"purple"},{default:()=>[n("Bleed variations — combine the named lines "),e("code",null,[n("full-start")]),n(" /")," ",e("code",null,[n("content-start")]),n(" / "),e("code",null,[n("content-end")]),n(" / "),e("code",null,[n("full-end")]),n(" per child.")]}),e(a,{tag:"h2",color:"purple"},{default:()=>[n("Bleed variations")]}),e("div",{style:o("var(--neo-color-grey700)")},[e("code",null,[n("content-start / content-end")]),n(" — no bleed (the default)")]),e("div",{style:{...o("var(--neo-color-blue500)"),gridColumn:"full-start / content-end"}},[e("code",null,[n("full-start / content-end")]),n(" — bleeds left edge only")]),e("div",{style:{...o("var(--neo-color-purple500)"),gridColumn:"content-start / full-end"}},[e("code",null,[n("content-start / full-end")]),n(" — bleeds right edge only")]),e("div",{style:{...o("var(--neo-color-pink500)"),gridColumn:"full-start / full-end"}},[e("code",null,[n("full-start / full-end")]),n(" — bleeds both edges, edge-to-edge")]),e("div",{style:{backgroundImage:`url("${N(2400,200,"#3b82f6")}")`,backgroundPosition:"center",backgroundSize:"cover",blockSize:"200px",gridColumn:"full-start / full-end"}},null),e("div",{style:{...o("var(--neo-color-teal500)"),gridColumn:"full-start / span 8"}},[e("code",null,[n("full-start / span 8")]),n(" — bleeds left, stops 4 cols short of right edge")]),e("div",{style:{...o("var(--neo-color-orange500)"),gridColumn:"span 8 / full-end"}},[e("code",null,[n("span 8 / full-end")]),n(" — starts 4 cols in, bleeds right")])]}),e(l,{fullWidth:!0,padding:"0",style:{paddingBlock:"0"}},{default:()=>[e("div",{style:{alignItems:"center",background:"var(--neo-color-indigo500)",color:"white",display:"flex",fontFamily:"monospace",fontSize:"14px",gridColumn:"full-start / full-end",justifyContent:"center",padding:"32px"}},[e("code",null,[n('<NeoSection fullWidth padding="0">')]),n(" — child fills the section with absolutely no padding around it")])]}),e(l,{fullWidth:!0,style:{background:"var(--neo-color-grey100)",paddingBlock:"48px"}},{default:()=>[e(t,{variant:"accent",size:"small",color:"red"},{default:()=>[e("code",null,[n("fullWidth")]),n(" variant — content spans the full container minus a fixed inline padding (no centering ceiling).")]}),e(a,{tag:"h2",color:"red"},{default:()=>[n("Full-width variant")]}),e("div",{style:o("var(--neo-color-red500)")},[e("code",null,[n("span 12")]),n(" in "),e("code",null,[n("fullWidth")]),n(" section")])]}),e(l,{style:{paddingBlock:"48px"},columnGap:"var(--neo-gap-lg)",rowGap:"var(--neo-gap-md)"},{default:()=>[e(t,{variant:"accent",size:"small",color:"amber"},{default:()=>[n("Prop overrides: "),e("code",null,[n("columnGap=lg")]),n(", "),e("code",null,[n("rowGap=md")]),n(".")]}),e(a,{tag:"h2",color:"amber"},{default:()=>[n("Custom gaps")]}),e("div",{style:{...o("var(--neo-color-amber500)"),gridColumn:"content-start / span 4"}},[e("code",null,[n("span 4")])]),e("div",{style:{...o("var(--neo-color-amber500)"),gridColumn:"span 4"}},[e("code",null,[n("span 4")])]),e("div",{style:{...o("var(--neo-color-amber500)"),gridColumn:"span 4 / content-end"}},[e("code",null,[n("span 4")])])]}),e(l,{style:{paddingBlock:"48px"}},{default:()=>[e(t,{variant:"accent",size:"small",color:"teal"},{default:()=>[n("Mixed: centered intro, full-bleed band, centered conclusion.")]}),e(v,{tag:"h3",color:"teal"},{default:()=>[n("Mixed content widths")]}),e(r,null,{default:()=>[n("Article-style layouts combine centered prose with the occasional edge-to-edge break — a hero image, a divider, a colored banner.")]}),e("div",{style:{alignItems:"center",background:"var(--neo-color-teal500)",color:"white",display:"flex",gap:"16px",gridColumn:"full-start / full-end",justifyContent:"center",padding:"32px"}},[e(h,{color:"white",size:"medium",text:"Full bleed"},null),e("span",{style:{fontFamily:"monospace"}},[n("grid-column: full-start / full-end")]),e(y,{color:"teal",variant:"secondary",text:"Action"},null)]),e(r,null,{default:()=>[n("And we're back in the centered content area, perfectly aligned with the header and footer.")]})]}),e(m,{color:"blue",layout:"multi-column",sections:x,copyrightText:"© 2026 NeoLayout. All rights reserved."},null)])}})};var i,c,s;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => defineComponent({
    name: 'NeoSectionShowcaseRender',
    setup() {
      return () => <div>
                        <NeoNavigation color="blue" ariaLabel="Main" menuAriaLabel="Open menu" links={navLinks} v-slots={{
          logo: () => <strong style={{
            color: 'var(--neo-color-blue600)'
          }}>NeoLayout</strong>
        }} />

                        {/* Intro — default section, full-span heading + paragraph */}
                        <NeoSection style={{
          paddingBlock: '48px'
        }}>
                            <NeoCallout variant="accent" size="small" color="blue">
                                <code>&lt;NeoSection&gt;</code> — default, content centered at{' '}
                                <code>--neo-spacing-max-global-size</code>
                            </NeoCallout>
                            <NeoHeadlinePrimary tag="h1" color="blue" align="start">
                                NeoSection Layout Showcase
                            </NeoHeadlinePrimary>
                            <NeoText size="lead">
                                Every example below lives inside a NeoSection. Inspect any block to verify that its
                                inline edges line up with the surrounding NeoNavigation and NeoFooter content.
                            </NeoText>
                        </NeoSection>

                        {/* Multi-column children — explicit grid-column spans */}
                        <NeoSection style={{
          paddingBlock: '48px'
        }}>
                            <NeoCallout variant="accent" size="small" color="green">
                                Multi-column children via <code>grid-column</code> spans (6 + 6, 4 + 4 + 4).
                            </NeoCallout>
                            <NeoHeadlineSecondary tag="h2" color="green">
                                Column spans
                            </NeoHeadlineSecondary>
                            <div style={{
            ...demoBlockStyle('var(--neo-color-blue500)'),
            gridColumn: 'content-start / span 6'
          }}>
                                <code>content-start / span 6</code>
                            </div>
                            <div style={{
            ...demoBlockStyle('var(--neo-color-purple500)'),
            gridColumn: 'span 6 / content-end'
          }}>
                                <code>span 6 / content-end</code>
                            </div>
                            <div style={{
            ...demoBlockStyle('var(--neo-color-teal500)'),
            gridColumn: 'content-start / span 4'
          }}>
                                <code>span 4</code>
                            </div>
                            <div style={{
            ...demoBlockStyle('var(--neo-color-orange500)'),
            gridColumn: 'span 4'
          }}>
                                <code>span 4</code>
                            </div>
                            <div style={{
            ...demoBlockStyle('var(--neo-color-red500)'),
            gridColumn: 'span 4 / content-end'
          }}>
                                <code>span 4</code>
                            </div>
                        </NeoSection>

                        {/* Bleed variations — every combination of left/right edges */}
                        <NeoSection style={{
          paddingBlock: '48px'
        }}>
                            <NeoCallout variant="accent" size="small" color="purple">
                                Bleed variations — combine the named lines <code>full-start</code> /{' '}
                                <code>content-start</code> / <code>content-end</code> / <code>full-end</code> per
                                child.
                            </NeoCallout>
                            <NeoHeadlineSecondary tag="h2" color="purple">
                                Bleed variations
                            </NeoHeadlineSecondary>

                            {/* 1. No bleed — default centered span */}
                            <div style={demoBlockStyle('var(--neo-color-grey700)')}>
                                <code>content-start / content-end</code> — no bleed (the default)
                            </div>

                            {/* 2. Left bleed only */}
                            <div style={{
            ...demoBlockStyle('var(--neo-color-blue500)'),
            gridColumn: 'full-start / content-end'
          }}>
                                <code>full-start / content-end</code> — bleeds left edge only
                            </div>

                            {/* 3. Right bleed only */}
                            <div style={{
            ...demoBlockStyle('var(--neo-color-purple500)'),
            gridColumn: 'content-start / full-end'
          }}>
                                <code>content-start / full-end</code> — bleeds right edge only
                            </div>

                            {/* 4. Full bleed — both edges */}
                            <div style={{
            ...demoBlockStyle('var(--neo-color-pink500)'),
            gridColumn: 'full-start / full-end'
          }}>
                                <code>full-start / full-end</code> — bleeds both edges, edge-to-edge
                            </div>

                            {/* 5. Edge-to-edge with image background */}
                            <div style={{
            backgroundImage: \`url("\${placeholder(2400, 200, '#3b82f6')}")\`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            blockSize: '200px',
            gridColumn: 'full-start / full-end'
          }} />

                            {/* 6. Asymmetric — full-start to mid-content */}
                            <div style={{
            ...demoBlockStyle('var(--neo-color-teal500)'),
            gridColumn: 'full-start / span 8'
          }}>
                                <code>full-start / span 8</code> — bleeds left, stops 4 cols short of right edge
                            </div>

                            {/* 7. Asymmetric — mid-content to full-end */}
                            <div style={{
            ...demoBlockStyle('var(--neo-color-orange500)'),
            gridColumn: 'span 8 / full-end'
          }}>
                                <code>span 8 / full-end</code> — starts 4 cols in, bleeds right
                            </div>
                        </NeoSection>

                        {/* Truly edge-to-edge — fullWidth + padding=0 — child fills the section with zero inline padding anywhere */}
                        <NeoSection fullWidth padding="0" style={{
          paddingBlock: '0'
        }}>
                            <div style={{
            alignItems: 'center',
            background: 'var(--neo-color-indigo500)',
            color: 'white',
            display: 'flex',
            fontFamily: 'monospace',
            fontSize: '14px',
            gridColumn: 'full-start / full-end',
            justifyContent: 'center',
            padding: '32px'
          }}>
                                <code>&lt;NeoSection fullWidth padding="0"&gt;</code> — child fills the section with
                                absolutely no padding around it
                            </div>
                        </NeoSection>

                        {/* Full-width variant — section fills container, content gets fixed padding instead of 1fr gutters */}
                        <NeoSection fullWidth style={{
          background: 'var(--neo-color-grey100)',
          paddingBlock: '48px'
        }}>
                            <NeoCallout variant="accent" size="small" color="red">
                                <code>fullWidth</code> variant — content spans the full container minus a fixed
                                inline padding (no centering ceiling).
                            </NeoCallout>
                            <NeoHeadlineSecondary tag="h2" color="red">
                                Full-width variant
                            </NeoHeadlineSecondary>
                            <div style={demoBlockStyle('var(--neo-color-red500)')}>
                                <code>span 12</code> in <code>fullWidth</code> section
                            </div>
                        </NeoSection>

                        {/* Prop overrides — columnGap, rowGap, padding */}
                        <NeoSection style={{
          paddingBlock: '48px'
        }} columnGap="var(--neo-gap-lg)" rowGap="var(--neo-gap-md)">
                            <NeoCallout variant="accent" size="small" color="amber">
                                Prop overrides: <code>columnGap=lg</code>, <code>rowGap=md</code>.
                            </NeoCallout>
                            <NeoHeadlineSecondary tag="h2" color="amber">
                                Custom gaps
                            </NeoHeadlineSecondary>
                            <div style={{
            ...demoBlockStyle('var(--neo-color-amber500)'),
            gridColumn: 'content-start / span 4'
          }}>
                                <code>span 4</code>
                            </div>
                            <div style={{
            ...demoBlockStyle('var(--neo-color-amber500)'),
            gridColumn: 'span 4'
          }}>
                                <code>span 4</code>
                            </div>
                            <div style={{
            ...demoBlockStyle('var(--neo-color-amber500)'),
            gridColumn: 'span 4 / content-end'
          }}>
                                <code>span 4</code>
                            </div>
                        </NeoSection>

                        {/* Mixed: centered + full-bleed in one section */}
                        <NeoSection style={{
          paddingBlock: '48px'
        }}>
                            <NeoCallout variant="accent" size="small" color="teal">
                                Mixed: centered intro, full-bleed band, centered conclusion.
                            </NeoCallout>
                            <NeoHeadlineTertiary tag="h3" color="teal">
                                Mixed content widths
                            </NeoHeadlineTertiary>
                            <NeoText>
                                Article-style layouts combine centered prose with the occasional edge-to-edge break
                                — a hero image, a divider, a colored banner.
                            </NeoText>
                            <div style={{
            alignItems: 'center',
            background: 'var(--neo-color-teal500)',
            color: 'white',
            display: 'flex',
            gap: '16px',
            gridColumn: 'full-start / full-end',
            justifyContent: 'center',
            padding: '32px'
          }}>
                                <NeoBadge color="white" size="medium" text="Full bleed" />
                                <span style={{
              fontFamily: 'monospace'
            }}>grid-column: full-start / full-end</span>
                                <NeoButton color="teal" variant="secondary" text="Action" />
                            </div>
                            <NeoText>
                                And we're back in the centered content area, perfectly aligned with the header and
                                footer.
                            </NeoText>
                        </NeoSection>

                        <NeoFooter color="blue" layout="multi-column" sections={footerSections} copyrightText="© 2026 NeoLayout. All rights reserved." />
                    </div>;
    }
  })
}`,...(s=(c=d.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const J=["Showcase"];export{d as Showcase,J as __namedExportsOrder,q as default};
