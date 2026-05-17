import{u as t,j as e,M as o,T as i}from"./blocks-ph9Ozxth.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-CiKriRT1.js";function r(s){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Contributing/Project Setup",parameters:{backgrounds:{disable:!0},direction:{disable:!0}}}),`
`,e.jsx(i,{children:"Project Setup"}),`
`,e.jsx(n.p,{children:"Everything you need to set up a local development environment and run the full toolchain."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"system-requirements",children:"System Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Node.js"})," v22 or higher"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"npm"})," v9 or higher"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Docker"})," — required for snapshot tests and the containerised Storybook dev server"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install
npm run dev        # generates files, then starts Storybook in Docker at http://localhost:3000
`})}),`
`,e.jsx(n.p,{children:"To run Storybook locally without Docker:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run storybook  # http://localhost:3000
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"development-commands",children:"Development Commands"}),`
`,e.jsx(n.h3,{id:"file-generation",children:"File Generation"}),`
`,e.jsxs(n.p,{children:["Several source files are auto-generated from color configs and markdown. Regenerate them after changes to Material color config or files in ",e.jsx(n.code,{children:"/docs"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run generate:files
`})}),`
`,e.jsx(n.p,{children:"Outputs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"src/assets/typescript/colors.ts"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"src/assets/styles/colors.css"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"src/assets/styles/globals.css"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"docs/colors.md"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"src/components/00-foundations/colors.mdx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"src/components/docs/*.mdx"})}),`
`]}),`
`,e.jsx(n.h3,{id:"building",children:"Building"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run build       # generate files → compile TypeScript → bundle with Vite → dist/
`})}),`
`,e.jsx(n.h3,{id:"testing",children:"Testing"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test                        # full suite: type-check + lint + all tests
npm run test:storybook              # a11y tests only (51 tests)
npm run test:storybook:snapshots    # visual snapshot tests (requires Docker)
npm run test:unit                   # unit tests only
`})}),`
`,e.jsx(n.p,{children:"First-time setup — install the Playwright browser:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx playwright install --with-deps chromium
`})}),`
`,e.jsx(n.h3,{id:"code-quality",children:"Code Quality"}),`
`,e.jsx(n.p,{children:"Run these after every change:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run type-check        # vue-tsc --build (stricter than --noEmit, catches JSX/slot errors)
npm run lint:fix          # eslint . --fix
npm run stylelint:css     # stylelint "src/**/*.{css,vue}"
npm run prettier:fix      # npx prettier --write src/
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"project-structure",children:"Project Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`src/
├── assets/
│   ├── icons/              # SVG icons
│   ├── styles/             # Global CSS, tokens, mixins (colors.css + globals.css auto-generated)
│   └── typescript/         # Auto-generated TypeScript color types
├── components/
│   ├── 00-foundations/     # Design system foundations (Typography, Colors, Breakpoints, Icons)
│   ├── 01-atoms/           # Basic building blocks (Button, Input, Badge, Icon…)
│   ├── 02-molecules/       # Combinations of atoms (Card, Accordion, Dropdown, Select…)
│   ├── 03-organisms/       # Complex compositions (Navigation, Footer, Hero, FeatureLine…)
│   ├── 04-templates/       # Page-level layout shells (reserved for future use)
│   ├── 05-pages/           # Full-page Storybook examples — not exported from the library
│   ├── 06-contributing/    # Contributor documentation (this section)
│   ├── 99-drafts/          # Work in progress — not exported
│   └── docs/               # Auto-generated Storybook MDX docs (do not edit manually)
├── stores/                 # Shared Vue state (e.g. sheet stacking)
├── utils/                  # Utility functions (classNames, WCAG contrast, ID generation…)
└── index.ts                # Library entry point — all public exports

scripts/
├── generate-colors.ts      # Color CSS/TS generation with WCAG validation
├── generate-globals.ts     # Global CSS token generation
├── generate-docs.ts        # Storybook MDX generation from /docs markdown
└── pre-flight.ts           # Orchestrates all generation scripts

docs/
├── getting_started.md      # User-facing getting started guide
├── color-accessibility.md  # Color system and WCAG strategy
└── colors.md               # Auto-generated color reference table
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"creating-a-new-component",children:"Creating a New Component"}),`
`,e.jsx(n.p,{children:"Each component lives in a dedicated folder at the appropriate atomic level:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`ComponentName/
├── NeoComponentName.vue            # Main component
├── NeoComponentNameTypes.ts        # TypeScript types and constants
├── NeoComponentName.stories.tsx    # Storybook stories
├── NeoComponentName-layout.css     # Sizing, spacing, layout CSS variables
└── NeoComponentName-themed.css     # Color and theme CSS variables
`})}),`
`,e.jsx(n.p,{children:"Steps:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Create the folder in the correct atomic level (",e.jsx(n.code,{children:"01-atoms"})," through ",e.jsx(n.code,{children:"03-organisms"}),")"]}),`
`,e.jsxs(n.li,{children:["Define types and constants in ",e.jsx(n.code,{children:"*Types.ts"})," — use ",e.jsx(n.code,{children:"as const"})," arrays to derive union types"]}),`
`,e.jsxs(n.li,{children:["Implement the component using ",e.jsx(n.code,{children:"getClassNames"})," for BEM class composition"]}),`
`,e.jsxs(n.li,{children:["Write Storybook stories covering all variants; tag key stories with ",e.jsx(n.code,{children:"snapshot"})]}),`
`,e.jsxs(n.li,{children:["Export component and types from ",e.jsx(n.code,{children:"src/index.ts"})]}),`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:"npm run test"})," to verify accessibility and type correctness"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"development-guidelines",children:"Development Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Follow the CSS variable naming pattern: ",e.jsx(n.code,{children:"--ComponentName-category-property"})]}),`
`,e.jsxs(n.li,{children:["Use logical CSS properties (",e.jsx(n.code,{children:"inline-size"}),", ",e.jsx(n.code,{children:"padding-block"}),") — physical properties are linted as errors"]}),`
`,e.jsxs(n.li,{children:["Declare component CSS variable defaults in ",e.jsx(n.code,{children:"*-layout.css"})," / ",e.jsx(n.code,{children:"*-themed.css"}),"; use them in scoped styles — never reference ",e.jsx(n.code,{children:"--neo-*"})," tokens directly in property declarations"]}),`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:"npm run test"})," before committing"]}),`
`,e.jsxs(n.li,{children:["See ",e.jsx(n.strong,{children:"Contributing/Architecture"})," for the full component API and CSS conventions"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"release-process",children:"Release Process"}),`
`,e.jsxs(n.p,{children:["Releases are fully automated via ",e.jsx(n.strong,{children:"semantic-release"}),". You never manually change the ",e.jsx(n.code,{children:"version"})," field in ",e.jsx(n.code,{children:"package.json"})," — the CI does it for you based on commit messages."]}),`
`,e.jsx(n.h3,{id:"branch--release-flow",children:"Branch → Release flow"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-mermaid",children:`flowchart TD
    FB[Feature branch] -->|PR merged| DEV[develop]
    DEV -->|push| DEVCI{CI on develop}
    DEVCI -->|semantic-release| DEVPKG["Publishes pre-release\\ne.g. 0.1.0-dev.1\\nnpm tag: dev"]
    DEVPKG --> DEVRE["GitHub pre-release created\\nCHANGELOG not updated"]

    DEV -->|PR merged to main| MAIN[main]
    MAIN -->|push| MAINCI{CI on main}
    MAINCI -->|semantic-release| STABLE["Determines version from commits\\nPublishes stable to npm\\nnpm tag: latest"]
    STABLE --> MAINOUT["CHANGELOG.md updated\\ngit tag created e.g. v0.1.0\\nGitHub Release created\\npackage.json committed back"]
`})}),`
`,e.jsx(n.h3,{id:"commit-type--version-bump",children:"Commit type → version bump"}),`
`,e.jsxs(n.p,{children:[`| Commit type | Example | Version bump |
|---|---|---|
| `,e.jsx(n.code,{children:"fix"})," | ",e.jsx(n.code,{children:"fix(button): correct focus ring color"})," | Patch — ",e.jsx(n.code,{children:"0.1.0"})," → ",e.jsx(n.code,{children:"0.1.1"}),` |
| `,e.jsx(n.code,{children:"feat"})," | ",e.jsx(n.code,{children:"feat(table): add sortable columns"})," | Minor — ",e.jsx(n.code,{children:"0.1.0"})," → ",e.jsx(n.code,{children:"0.2.0"}),` |
| Breaking change | `,e.jsx(n.code,{children:"feat!: remove deprecated prop"})," | Minor — ",e.jsx(n.code,{children:"0.1.0"})," → ",e.jsx(n.code,{children:"0.2.0"}),` ¹ |
| `,e.jsx(n.code,{children:"chore"}),", ",e.jsx(n.code,{children:"build"}),", ",e.jsx(n.code,{children:"docs"}),", ",e.jsx(n.code,{children:"style"}),", ",e.jsx(n.code,{children:"refactor"}),", ",e.jsx(n.code,{children:"test"})," | — | No release |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["¹ Breaking changes bump the ",e.jsx(n.strong,{children:"minor"})," (not major) until the library reaches production-stable ",e.jsx(n.code,{children:"1.0.0"}),". When the library is ready for its first stable release, update ",e.jsx(n.code,{children:".releaserc.json"})," to change ",e.jsx(n.code,{children:'"breaking": true → "release": "major"'}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"marking-a-breaking-change",children:"Marking a breaking change"}),`
`,e.jsx(n.p,{children:"Two equivalent ways — both trigger a minor version bump:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Option A: exclamation mark after the type
feat!: remove deprecated \`text\` prop from NeoButton

# Option B: BREAKING CHANGE footer (allows a longer description)
feat(button): remove deprecated prop

BREAKING CHANGE: The \`text\` prop is removed. Use the default slot instead:
<NeoButton color="blue" variant="primary">Label text</NeoButton>
`})}),`
`,e.jsx(n.h3,{id:"dev-pre-releases",children:"Dev pre-releases"}),`
`,e.jsxs(n.p,{children:["Every push to ",e.jsx(n.code,{children:"develop"})," publishes a pre-release to npm tagged ",e.jsx(n.code,{children:"dev"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install neo-materia@dev   # always gets the latest dev build
`})}),`
`,e.jsx(n.p,{children:"Old dev builds are deprecated automatically by CI after each new publish."})]})}function d(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{d as default};
