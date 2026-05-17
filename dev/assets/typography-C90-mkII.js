import{u as o,j as e,M as s,T as t}from"./blocks-INTvwvMl.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-CyJA5eW2.js";function r(l){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...o(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Foundation/Typography",parameters:{backgrounds:{disable:!0},direction:{disable:!0}}}),`
`,e.jsx(t,{children:"Typography"}),`
`,e.jsx(n.h2,{id:"font-family",children:"Font family"}),`
`,e.jsx(n.p,{children:"NeoMateria ships with a system font stack by default — no Google Fonts import, no external requests. All components inherit font from the document root, so swapping the font is a single CSS variable change."}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --neo-fontFamily-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
}
`})}),`
`,e.jsxs(n.p,{children:["The variable is applied to ",e.jsx(n.code,{children:":root"})," in the delivered CSS, so every NeoMateria component inherits it automatically."]}),`
`,e.jsx(n.h3,{id:"using-a-custom-font",children:"Using a custom font"}),`
`,e.jsxs(n.p,{children:["Import your font (Google Fonts, self-hosted, or system), then override ",e.jsx(n.code,{children:"--neo-fontFamily-base"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* main.css — loaded before NeoMateria components render */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --neo-fontFamily-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
`})}),`
`,e.jsxs(n.p,{children:["Set it on ",e.jsx(n.code,{children:":root"})," to apply document-wide, or on any container element — paired with ",e.jsx(n.code,{children:"font-family: var(--neo-fontFamily-base)"})," — to scope it to a subtree."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"text-overflow-strategies",children:"Text overflow strategies"}),`
`,e.jsxs(n.p,{children:["NeoMateria uses a three-strategy system for handling text that exceeds its container. Every text element applies ",e.jsx(n.strong,{children:"at least one strategy"})," depending on whether the element is UI chrome (navigation, labels) or content (cards, panels)."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"strategy-1--single-line-truncation",children:"Strategy 1 — Single-line truncation"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When to use:"})," UI chrome elements where wrapping would break layout — navigation labels, table cells, compact list items."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.Element-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Applied to:"})," ",e.jsx(n.code,{children:"NeoNavItem"})," labels."]}),`
`,e.jsx("div",{style:{padding:"16px"},children:e.jsx("div",{style:{border:"1px solid var(--docs-color-border)",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"4px",inlineSize:"220px",padding:"8px"},children:["Short label","A slightly longer navigation label","An extremely long navigation label that would normally wrap onto a second line"].map(i=>e.jsx("div",{style:{borderRadius:"6px",color:"var(--docs-color-text-label)",fontSize:"0.875rem",overflow:"hidden",padding:"6px 10px",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i},i))})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"strategy-2--line-clamp",children:"Strategy 2 — Line clamp"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When to use:"})," Content previews where the element has a fixed role — card titles, card descriptions, panel titles."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.Element-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--Element-sizing-titleClamp);
  line-clamp: var(--Element-sizing-titleClamp);
  overflow: hidden;
}
`})}),`
`,e.jsx(n.p,{children:"The clamp count is exposed as a CSS variable so consumers can override it without a prop:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.my-context .NeoCard {
  --NeoCard-sizing-titleClamp: 1;
  --NeoCard-sizing-descriptionClamp: 2;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Applied to:"})," ",e.jsx(n.code,{children:"NeoCard"})," title (2 lines), ",e.jsx(n.code,{children:"NeoCard"})," description (3 lines), ",e.jsx(n.code,{children:"NeoProgressPanel"})," title (2 lines)."]}),`
`,e.jsx("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",padding:"16px"},children:[{label:"Short title — no clamp",title:"A Normal Card Title",clamp:2},{label:"Long title — clamped at 2 lines",title:"An Extraordinarily Long Title That Will Be Clamped After Two Lines Because It Just Keeps Going",clamp:2},{label:"Long description — clamped at 3 lines",title:"Normal Title",description:"This is a very long description that goes well beyond three lines of text. It demonstrates how the line-clamp strategy cuts off content cleanly with an ellipsis after the configured number of lines, keeping the card height consistent regardless of how much text is provided by the consumer.",clamp:3}].map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{color:"var(--docs-color-text-secondary)",fontSize:"0.75rem",margin:"0"},children:i.label}),e.jsxs("div",{style:{border:"1px solid var(--docs-color-border)",borderRadius:"8px",overflow:"hidden"},children:[e.jsx("div",{style:{background:"var(--neo-color-blue100)",blockSize:"120px"}}),e.jsxs("div",{style:{padding:"12px"},children:[e.jsx("p",{style:{WebkitBoxOrient:"vertical",WebkitLineClamp:2,display:"-webkit-box",fontWeight:"600",lineHeight:"1.3",margin:"0 0 6px",overflow:"hidden"},children:i.title}),i.description&&e.jsx("p",{style:{WebkitBoxOrient:"vertical",WebkitLineClamp:i.clamp,color:"var(--docs-color-text-secondary)",display:"-webkit-box",fontSize:"0.875rem",lineHeight:"1.5",margin:"0",overflow:"hidden"},children:i.description})]})]})]},i.label))}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"strategy-3--overflow-wrap--hyphenation",children:"Strategy 3 — Overflow wrap + hyphenation"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When to use:"})," All multi-line text as a baseline safety net. Prevents a single long word or URL from causing horizontal overflow without restricting line count."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.Element {
  hyphens: auto;
  overflow-wrap: break-word;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"hyphens: auto"})," requires a ",e.jsx(n.code,{children:"lang"})," attribute"]})," on the element or an ancestor — typically ",e.jsx(n.code,{children:'<html lang="de">'}),". Without it the property has no effect and ",e.jsx(n.code,{children:"overflow-wrap"})," acts as a fallback. This is by design: the component sets the capability, the app provides the language context."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- app root — enables hyphenation for all components -->
<html lang="de">

<!-- or per-section -->
<section lang="de">
  <NeoCard title="Donaudampfschifffahrtsgesellschaft" ... />
</section>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Applied to:"})," ",e.jsx(n.code,{children:"NeoButton"}),", ",e.jsx(n.code,{children:"NeoCard"}),", ",e.jsx(n.code,{children:"NeoProgressPanel"}),", and all other multi-line text elements as a baseline."]}),`
`,e.jsx(n.h3,{id:"hyphenation-demo",children:"Hyphenation demo"}),`
`,e.jsxs(n.p,{children:["Both boxes use ",e.jsx(n.code,{children:"overflow-wrap: break-word"})," and ",e.jsx(n.code,{children:"hyphens: auto"}),". Only the one with ",e.jsx(n.code,{children:'lang="de"'})," produces proper German hyphenation."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"In your app:"})," set ",e.jsx(n.code,{children:'lang="de"'})," on ",e.jsx(n.code,{children:"<html>"})," or the nearest relevant ancestor. NeoMateria components declare ",e.jsx(n.code,{children:"hyphens: auto"})," — the browser does the rest."]}),`
`]}),`
`,e.jsxs("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:"1fr 1fr",padding:"16px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{color:"var(--docs-color-text-secondary)",fontSize:"0.75rem",fontWeight:"600",margin:"0"},children:e.jsxs(n.p,{children:["Without ",e.jsx("code",{children:"lang"})," — arbitrary break"]})}),["Donaudampfschifffahrtsgesellschaft","Kraftfahrzeughaftpflichtversicherung und Rechtsschutzversicherungsbedingungen"].map(i=>e.jsx("div",{style:{inlineSize:"140px"},children:e.jsx("p",{style:{background:"var(--docs-color-bg-subtle)",border:"1px solid var(--docs-color-border)",borderRadius:"8px",fontFamily:"inherit",fontSize:"0.875rem",lineHeight:"1.5",margin:"0",overflowWrap:"break-word",padding:"12px"},children:i})},i))]}),e.jsxs("div",{lang:"de",style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{color:"var(--docs-color-text-secondary)",fontSize:"0.75rem",fontWeight:"600",margin:"0"},children:e.jsxs(n.p,{children:["With ",e.jsx("code",{children:'lang="de"'})," — syllable break"]})}),["Donaudampfschifffahrtsgesellschaft","Kraftfahrzeughaftpflichtversicherung und Rechtsschutzversicherungsbedingungen"].map(i=>e.jsx("div",{style:{inlineSize:"140px"},children:e.jsx("p",{style:{background:"var(--docs-color-bg-subtle)",border:"1px solid var(--docs-color-border)",borderRadius:"8px",fontFamily:"inherit",fontSize:"0.875rem",hyphens:"auto",lineHeight:"1.5",margin:"0",overflowWrap:"break-word",padding:"12px"},children:i})},i))]})]}),`
`,e.jsx(n.h3,{id:"overflow-wrap-demo",children:"Overflow wrap demo"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"overflow-wrap: break-word"})," is applied as a baseline to all text elements. It prevents a single long token — a URL, a compound identifier, or an untranslated key — from causing horizontal overflow."]}),`
`,e.jsx("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",padding:"16px"},children:[{label:"Long URL in title — wraps without overflow",title:"https://very-long-url-example.com/path/to/some/deeply/nested/resource?with=query&params=here",description:"Description stays readable below."},{label:"Long translation key — breaks at word boundary",title:"TRANSLATION_KEY_COMPONENT_SECTION_SUBSECTION_ELEMENT_STATE_VARIANT",description:"Useful when keys are shown in development or error states."}].map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{color:"var(--docs-color-text-secondary)",fontSize:"0.75rem",margin:"0"},children:i.label}),e.jsxs("div",{style:{border:"1px solid var(--docs-color-border)",borderRadius:"8px",overflow:"hidden"},children:[e.jsx("div",{style:{background:"var(--neo-color-blue100)",blockSize:"80px"}}),e.jsxs("div",{style:{padding:"12px"},children:[e.jsx("p",{style:{fontWeight:"600",lineHeight:"1.3",margin:"0 0 6px",overflowWrap:"break-word"},children:i.title}),e.jsx("p",{style:{color:"var(--docs-color-text-secondary)",fontSize:"0.875rem",lineHeight:"1.5",margin:"0"},children:i.description})]})]})]},i.label))}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"line-clamp--clamp-prop-and-css-mixin",children:["Line clamp — ",e.jsx(n.code,{children:"clamp"})," prop and CSS mixin"]}),`
`,e.jsxs(n.h3,{id:"consumer-api--clamp-prop",children:["Consumer API — ",e.jsx(n.code,{children:"clamp"})," prop"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NeoText"})," and all four ",e.jsx(n.code,{children:"NeoHeadline"})," variants accept a ",e.jsx(n.code,{children:"clamp"})," prop. Pass any positive integer to limit the element to that many lines."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- NeoHeadlinePrimary.vue -->
<NeoHeadlinePrimary :clamp="3">Long headline that will be cut after three lines…</NeoHeadlinePrimary>

<!-- NeoText.vue -->
<NeoText :clamp="2">Long body copy that will be cut after two lines…</NeoText>
`})}),`
`,e.jsxs(n.p,{children:["The prop adds the ",e.jsx(n.code,{children:"--clamped"})," modifier class and sets ",e.jsx(n.code,{children:"--ComponentName-sizing-clamp"})," as an inline style. Internally this drives ",e.jsx(n.code,{children:"-webkit-line-clamp"})," and the standard ",e.jsx(n.code,{children:"line-clamp"})," property."]}),`
`,e.jsx(n.h3,{id:"css-variable-override-no-prop-needed",children:"CSS variable override (no prop needed)"}),`
`,e.jsx(n.p,{children:"Because the clamp count is a CSS variable, you can override it in context without touching the component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.my-context .NeoText {
  --NeoText-sizing-clamp: 4;
}
`})}),`
`,e.jsx(n.h3,{id:"css-mixin--for-library-contributors-only",children:"CSS mixin — for library contributors only"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.MyComponent-title {
  @mixin line-clamp 3;
}
`})}),`
`,e.jsxs(n.p,{children:["Expands to the full ",e.jsx(n.code,{children:"display: -webkit-box"})," block. Requires PostCSS with ",e.jsx(n.code,{children:"postcss-mixins"})," configured to load NeoMateria's mixin files — ",e.jsx(n.strong,{children:"not available to library consumers"}),". Use the ",e.jsx(n.code,{children:"clamp"})," prop or the CSS variable override instead."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"combining-strategies",children:"Combining strategies"}),`
`,e.jsxs(n.p,{children:["Strategies are not mutually exclusive. ",e.jsx(n.code,{children:"NeoProgressPanel"})," subtitle uses all three: clamped to 1 line, truncated with ellipsis, and wrapped on long words:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.NeoProgressPanel-subtitle {
  hyphens: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`})})]})}function h(l={}){const{wrapper:n}={...o(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(r,{...l})}):r(l)}export{h as default};
