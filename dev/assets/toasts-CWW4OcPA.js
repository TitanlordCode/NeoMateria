import{u as i,j as e,M as r,T as t}from"./blocks-B9WoN3dn.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-Dwafgf8U.js";function o(s){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Foundation/Toasts",parameters:{backgrounds:{disable:!0},direction:{disable:!0}}}),`
`,e.jsx(t,{children:"Toasts"}),`
`,e.jsxs(n.p,{children:["Transient notifications for the moments after an async action — saved, failed, dismissed, retrying. NeoMateria ships a first-class toast system so you don't have to roll your own with ",e.jsx(n.code,{children:"v-if"})," and an inline ",e.jsx(n.code,{children:"NeoCallout"}),"."]}),`
`,e.jsxs(n.p,{children:["The design is ",e.jsx(n.strong,{children:"imperative"}),": trigger toasts from anywhere via ",e.jsx(n.code,{children:"useToast()"}),", no state management library required. A single ",e.jsx(n.code,{children:"<NeoToastContainer />"})," lives in your app shell and renders whatever's queued."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<!-- App.vue — mount once in your app shell -->
<script setup lang="ts">
import { NeoToastContainer } from 'neo-materia'
<\/script>

<template>
  <RouterView />
  <NeoToastContainer />
</template>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// any component, composable, store, or callback
import { useToast } from 'neo-materia'

const toast = useToast()
toast.success('Settings saved.')
`})}),`
`,e.jsx(n.p,{children:"That's it. The composable is pure JavaScript — call it during setup, in event handlers, in stores, in router guards. Toasts triggered before the container mounts are queued and flushed once it appears."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"severities-and-defaults",children:"Severities and defaults"}),`
`,e.jsxs(n.p,{children:[`| Severity | Default color | Default duration | ARIA live region |
|----------|---------------|------------------|------------------|
| `,e.jsx(n.code,{children:"success"})," | ",e.jsx(n.code,{children:"green"}),"  | 5 s              | ",e.jsx(n.code,{children:"polite"})," (",e.jsx(n.code,{children:'role="status"'}),`) |
| `,e.jsx(n.code,{children:"info"}),"    | ",e.jsx(n.code,{children:"blue"}),"   | 5 s              | ",e.jsx(n.code,{children:"polite"})," (",e.jsx(n.code,{children:'role="status"'}),`) |
| `,e.jsx(n.code,{children:"warning"})," | ",e.jsx(n.code,{children:"amber"}),"  | 8 s              | ",e.jsx(n.code,{children:"assertive"})," (",e.jsx(n.code,{children:'role="alert"'}),`) |
| `,e.jsx(n.code,{children:"error"}),"   | ",e.jsx(n.code,{children:"red"}),"    | 0 (persistent)   | ",e.jsx(n.code,{children:"assertive"})," (",e.jsx(n.code,{children:'role="alert"'}),") |"]}),`
`,e.jsxs(n.p,{children:["Errors persist by design — the user should acknowledge them. All defaults are overridable per call (see ",e.jsx(n.em,{children:"Options"})," below)."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"options",children:"Options"}),`
`,e.jsx(n.p,{children:"Every severity method accepts a second argument:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`toast.info('Project archived.', {
  duration: 10000,                    // ms; 0 = persistent
  closable: true,                     // show the × button (default)
  color: 'purple',                    // override the severity → color mapping
  icon: false,                        // hide the leading severity icon
  ariaLive: 'assertive',              // override the ARIA live mode
  action: {                           // optional action button
    label: 'Undo',
    onClick: (id) => unarchive(id),
  },
})
`})}),`
`,e.jsx(n.h3,{id:"action-buttons",children:"Action buttons"}),`
`,e.jsxs(n.p,{children:["A single action lives alongside the message — typically ",e.jsx(n.code,{children:"Undo"}),", ",e.jsx(n.code,{children:"Retry"}),", or ",e.jsx(n.code,{children:"View"}),". The callback receives the toast id and the action button is automatically dismissed when clicked."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`toast.info('Email moved to trash.', {
  action: { label: 'Undo', onClick: () => restore() },
})
`})}),`
`,e.jsx(n.h3,{id:"toastpromise",children:e.jsx(n.code,{children:"toast.promise()"})}),`
`,e.jsxs(n.p,{children:["For async flows, ",e.jsx(n.code,{children:"toast.promise"})," shows a ",e.jsx(n.code,{children:"loading"})," toast tied to the promise lifecycle, then replaces it in-place with the success or error result. The original promise is returned so you can ",e.jsx(n.code,{children:"await"})," it normally."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:"const data = await toast.promise(saveDocument(payload), {\n  loading: 'Saving…',\n  success: (saved) => `Saved as ${saved.title}`,\n  error: (reason) => `Failed: ${(reason as Error).message}`,\n})\n"})}),`
`,e.jsx(n.p,{children:"The replacement preserves the toast's position in the stack — no mount/unmount flicker."}),`
`,e.jsx(n.h3,{id:"manual-dismissal",children:"Manual dismissal"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const id = toast.error('Connection lost…', { duration: 0 })
// later, when reconnected
toast.dismiss(id)
// or wipe everything
toast.dismiss()
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"container-props",children:"Container props"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<NeoToastContainer>"})," is configured once at mount; per-toast options stay on the trigger call."]}),`
`,e.jsxs(n.p,{children:[`| Prop       | Type                                                                                   | Default      | Notes |
|------------|----------------------------------------------------------------------------------------|--------------|-------|
| `,e.jsx(n.code,{children:"position"})," | ",e.jsx(n.code,{children:"'top-start' \\| 'top-center' \\| 'top-end' \\| 'bottom-start' \\| 'bottom-center' \\| 'bottom-end'"})," | ",e.jsx(n.code,{children:"'top-end'"}),`  | Anchor edge in the viewport (logical, RTL-aware). |
| `,e.jsx(n.code,{children:"max"}),"      | ",e.jsx(n.code,{children:"number"}),"                                                                               | ",e.jsx(n.code,{children:"5"}),`          | Concurrent toast cap. When exceeded, the oldest is evicted (FIFO). |
| `,e.jsx(n.code,{children:"zIndex"}),"   | ",e.jsx(n.code,{children:"number"}),"                                                                               | ",e.jsx(n.code,{children:"9999"}),"       | Inline ",e.jsx(n.code,{children:"z-index"})," on the floating container. |"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<NeoToastContainer position="bottom-end" :max="3" />
`})}),`
`,e.jsxs(n.p,{children:["Multiple containers in the same app are not supported — keep one mount point. If you need different positions for different toast types, wrap ",e.jsx(n.code,{children:"useToast"})," with your own helper that picks the right configuration."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The component handles the standard ARIA wiring so you don't have to think about it:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'role="status"'})," + ",e.jsx(n.code,{children:'aria-live="polite"'})," for success/info — announced after the current speech finishes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'role="alert"'})," + ",e.jsx(n.code,{children:'aria-live="assertive"'})," for warning/error — announced immediately"]}),`
`,e.jsxs(n.li,{children:["The container is ",e.jsx(n.code,{children:'role="region"'})," with ",e.jsx(n.code,{children:'aria-label="Notifications"'})," so assistive tech can navigate to it"]}),`
`,e.jsxs(n.li,{children:["Auto-dismiss timers ",e.jsx(n.strong,{children:"pause on hover and focus-within"})," — screen-reader and keyboard users aren't rushed"]}),`
`,e.jsxs(n.li,{children:["Toasts never steal focus by default. If you include an ",e.jsx(n.code,{children:"action"}),", it joins the normal tab order"]}),`
`]}),`
`,e.jsxs(n.p,{children:["If your app needs a different aria-label or per-toast announcement priority, override ",e.jsx(n.code,{children:"ariaLive"})," per call."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"ssr--nuxt",children:"SSR / Nuxt"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<NeoToastContainer>"})," is SSR-safe: it guards ",e.jsx(n.code,{children:'<Teleport to="body">'})," behind a client-only ",e.jsx(n.code,{children:"mounted"})," ref. The render output during SSR is empty, and hydration kicks in cleanly. Toasts queued before hydration (e.g. from a Pinia store hydration step) appear once the container mounts."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useToast()"})," itself is pure JS and safe to import anywhere — there's no ",e.jsx(n.code,{children:"document"})," reference until something is actually pushed to the DOM."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"customizing-visuals",children:"Customizing visuals"}),`
`,e.jsxs(n.p,{children:["Toast colors map through the standard theme tokens (",e.jsx(n.code,{children:"--neo-theme-color"}),", ",e.jsx(n.code,{children:"--neo-theme-colorAccessible"}),"), so any theme override your app applies will flow through automatically. For finer control, override component variables in your own CSS:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.NeoToast {
  --NeoToast-sizing-padding: var(--neo-spacing-core-lg);
  --NeoToast-sizing-maxWidth: 500px;
  --NeoToast-color-shadow: 0 12px 32px rgb(0 0 0 / 18%);
}

.NeoToastContainer {
  --NeoToastContainer-sizing-edgeOffset: var(--neo-spacing-core-xl);
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"when-not-to-use-a-toast",children:["When ",e.jsx(n.em,{children:"not"})," to use a toast"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Form validation errors"})," — show them inline next to the failing field (",e.jsx(n.code,{children:"NeoInput"})," / ",e.jsx(n.code,{children:"NeoTextArea"})," have error states for this)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Persistent informational banners"})," — use ",e.jsx(n.code,{children:"NeoCallout"})," directly with ",e.jsx(n.code,{children:'variant="bordered"'})," or ",e.jsx(n.code,{children:'"filled"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Confirmation dialogs"})," — toasts auto-dismiss; if the user must confirm, render a modal or ",e.jsx(n.code,{children:"NeoSheet"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Toasts are best for ",e.jsx(n.strong,{children:"completed actions"})," and ",e.jsx(n.strong,{children:"transient status updates"})," the user can read in passing."]})]})}function l(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{l as default};
