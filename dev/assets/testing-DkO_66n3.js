import{u as o,j as e,M as r,T as i}from"./blocks-BLo-g8Hr.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-C3onsmpW.js";function t(s){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Contributing/Testing",parameters:{backgrounds:{disable:!0},direction:{disable:!0}}}),`
`,e.jsx(i,{children:"Testing"}),`
`,e.jsxs(n.p,{children:["NeoMateria uses three automated test layers: ",e.jsx(n.strong,{children:"visual snapshot tests"})," to catch unintended rendering regressions across multiple viewports, ",e.jsx(n.strong,{children:"a11y tests"})," to enforce WCAG 2.1 AA compliance across all color combinations, and ",e.jsx(n.strong,{children:"unit tests"})," for composable logic."]}),`
`,e.jsx(n.p,{children:"All tests run via Vitest in Playwright's Chromium browser — no Storybook server required."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"running-tests-locally",children:"Running tests locally"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test                        # full suite: type-check + lint + all tests
npm run test:storybook              # a11y tests only
npm run test:storybook:snapshots    # visual snapshot tests only
npm run test:unit                   # unit tests only
`})}),`
`,e.jsx(n.p,{children:"First time setup — install the Playwright browser:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx playwright install --with-deps chromium
`})}),`
`,e.jsxs(n.p,{children:["All commands are also available in VS Code via ",e.jsx(n.strong,{children:"Run & Debug"})," (",e.jsx(n.code,{children:"F5"}),")."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"visual-snapshot-tests",children:"Visual snapshot tests"}),`
`,e.jsx(n.p,{children:"Snapshot tests capture a Playwright screenshot of each story at three viewport sizes and compare them pixel-by-pixel to committed PNG baselines using SSIM + pixelmatch (via playwright-core's built-in comparator). Any pixel change is a hard failure."}),`
`,e.jsxs(n.p,{children:["Stories opt in via the ",e.jsx(n.code,{children:"snapshot"})," tag:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export const Default: Story = {
  tags: ['snapshot'],
}
`})}),`
`,e.jsx(n.h3,{id:"viewports",children:"Viewports"}),`
`,e.jsx(n.p,{children:"Each snapshot story is captured at three sizes:"}),`
`,e.jsx(n.p,{children:`| Name | Width | Height |
|------|-------|--------|
| mobile | 375 px | 667 px |
| tablet | 768 px | 1 024 px |
| desktop | 1280 px | 800 px |`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"page.viewport()"})," resizes the Storybook preview iframe before each capture, so breakpoint mixins (",e.jsx(n.code,{children:"@mixin bp-md"}),", etc.) fire exactly as they would in a real browser."]}),`
`,e.jsx(n.h3,{id:"file-layout",children:"File layout"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`__snapshots__/                          ← committed to git (baselines)
├── atoms-button-neobutton--default--mobile.png
├── atoms-button-neobutton--default--tablet.png
├── atoms-button-neobutton--default--desktop.png
└── …

__snapshots_modified__/                 ← gitignored, written on failure
├── atoms-button-neobutton--default--desktop.png   ← what the component looks like NOW
└── …

__snapshots_diff__/                     ← gitignored, written on failure
├── atoms-button-neobutton--default--desktop--diff.png  ← pixel diff (red = changed)
└── …
`})}),`
`,e.jsxs(n.p,{children:["Both ",e.jsx(n.code,{children:"__snapshots_modified__/"})," and ",e.jsx(n.code,{children:"__snapshots_diff__/"})," are ",e.jsx(n.strong,{children:"cleared at the start of every run"}),", so they only ever contain failures from the most recent run."]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Commit everything in ",e.jsx(n.code,{children:"__snapshots__/"})]})," — these are the baselines future runs compare against."]}),`
`,e.jsx(n.h3,{id:"generating-baselines-for-the-first-time",children:"Generating baselines for the first time"}),`
`,e.jsxs(n.p,{children:["On first run (or after adding new snapshot stories), Vitest creates the baseline PNGs in ",e.jsx(n.code,{children:"__snapshots__/"})," automatically:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test:storybook:snapshots
`})}),`
`,e.jsx(n.h3,{id:"handling-snapshot-failures",children:"Handling snapshot failures"}),`
`,e.jsx(n.p,{children:"A failure means a story rendered differently. Both artifact directories are cleared before every run, so they only contain the current batch of failures."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test:storybook:snapshots    # see which stories fail
`})}),`
`,e.jsx(n.p,{children:"After the run:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"__snapshots_modified__/"})," — what each failing story looks like ",e.jsx(n.strong,{children:"now"})," (same filename as the baseline)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"__snapshots_diff__/"})," — pixel diff with changed pixels highlighted in red"]}),`
`]}),`
`,e.jsx(n.p,{children:"Decide whether each change is intentional:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Unintentional"})," — a regression. Fix the component, re-run until green."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Intentional"})," — drag the PNG from ",e.jsx(n.code,{children:"__snapshots_modified__/"})," into ",e.jsx(n.code,{children:"__snapshots__/"})," to accept it as the new baseline. Or use one of the update commands below."]}),`
`,e.jsx(n.h4,{id:"update-all-snapshots-at-once",children:"Update all snapshots at once"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test:storybook:update
`})}),`
`,e.jsx(n.h4,{id:"update-one-components-snapshots",children:"Update one component's snapshots"}),`
`,e.jsx(n.p,{children:"Pass the story file path as a Vitest filter:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test:storybook:update -- src/components/01-atoms/Button/NeoButton/NeoButton.stories.tsx
`})}),`
`,e.jsx(n.p,{children:"Multiple files work too:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test:storybook:update -- src/components/01-atoms/Badge/NeoBadge.stories.tsx src/components/01-atoms/Button/NeoButton/NeoButton.stories.tsx
`})}),`
`,e.jsx(n.h4,{id:"selective-review-after-a-bulk-update",children:"Selective review after a bulk update"}),`
`,e.jsx(n.p,{children:"Update everything, then restore the baselines you didn't intend to change:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test:storybook:update
git diff __snapshots__/
git checkout -- __snapshots__/atoms-button-neobutton--default--desktop.png
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"a11y-tests",children:"A11y tests"}),`
`,e.jsxs(n.p,{children:["A11y tests run axe-core (WCAG 2A + 2AA) against every color variant of every component. They live as hidden stories tagged ",e.jsx(n.code,{children:"!dev"})," so they don't appear in the sidebar during development:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export const AllColorsA11y: Story = {
  ...AllColors,
  tags: ['!dev', 'test-only'],
  play: createA11yPlay(),
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createA11yPlay"})," (",e.jsx(n.code,{children:".storybook/utils/createA11yPlay.ts"}),") runs axe directly against the canvas element and fails if there are any violations."]}),`
`,e.jsx(n.p,{children:"To run only a11y tests:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test:storybook
`})}),`
`,e.jsx(n.h3,{id:"non-wcag-compliant-combinations",children:"Non-WCAG compliant combinations"}),`
`,e.jsxs(n.p,{children:["Some color/variant combinations are inherently non-compliant on light backgrounds (e.g. yellow outlined buttons). These are documented in ",e.jsx(n.code,{children:".storybook/utils/colorShowcase.tsx"})," in the ",e.jsx(n.code,{children:"NonWCAGCompliantEntries"})," array rather than suppressed via story-level ",e.jsx(n.code,{children:"parameters.a11y"}),". The showcase renders a ",e.jsx(n.code,{children:'"not WCAG compliant"'})," label in place of the component for those combinations."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"unit-tests",children:"Unit tests"}),`
`,e.jsx(n.p,{children:"Composable logic is tested with Vitest + jsdom, independently of Storybook:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test:unit              # run once
npm run test:unit -- --watch   # watch mode
`})}),`
`,e.jsxs(n.p,{children:["Unit test files live co-located with the source file: ",e.jsx(n.code,{children:"useButton.test.ts"})," next to ",e.jsx(n.code,{children:"useButton.ts"}),"."]}),`
`,e.jsxs(n.p,{children:["Current coverage: ",e.jsx(n.code,{children:"useButton.ts"})," and ",e.jsx(n.code,{children:"useSheetStack.ts"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"ci-pipeline",children:"CI pipeline"}),`
`,e.jsxs(n.p,{children:["All three test layers run in CI on every push via ",e.jsx(n.code,{children:"npm run test"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run type-check      # vue-tsc --build
npm run lint:check      # eslint
npm run stylelint:css   # stylelint
npm run prettier:check  # prettier
vitest run              # all three Vitest projects (unit + storybook + storybook-snapshots)
`})}),`
`,e.jsxs(n.p,{children:["In CI (",e.jsx(n.code,{children:"process.env.CI"})," set) the snapshot command refuses to create or update baselines — missing or changed PNGs are hard failures, not silent writes. Locally, missing baselines are created automatically on first run."]}),`
`,e.jsx(n.p,{children:"No Storybook build or server step is needed — Vitest renders stories directly in Playwright."})]})}function d(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{d as default};
