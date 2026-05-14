import{u as a,j as e,M as r,b as i}from"./blocks-CawEWNM6.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-DpITHDOf.js";const l=`# Getting Started

NeoMateria is a Vue 3 component library built with Atomic Design principles and automatic WCAG AA accessibility compliance. All components are fully typed and theme-able via a single \`color\` prop.

## Prerequisites

- Vue 3.3 or higher
- A modern bundler (Vite, webpack, Nuxt, etc.)

## Installation

\`\`\`sh
npm install neo-materia
\`\`\`

## Setup

Import the stylesheet once in your application's entry file (e.g. \`main.ts\`):

\`\`\`ts
import 'neo-materia/dist/neo-materia.css'
\`\`\`

## Quick Start

\`\`\`vue
<script setup lang="ts">
import { NeoButton, NeoInput } from 'neo-materia'
<\/script>

<template>
  <NeoButton
    text="Get started"
    color="blue"
    variant="primary"
  />

  <NeoInput
    name="email"
    label="Email address"
    placeholder="you@example.com"
    color="blue"
  />
</template>
\`\`\`

## Color System

Every component accepts a \`color\` prop that drives the entire visual theme — background, border, focus ring, and interactive states. The library automatically selects the correct shade to meet WCAG AA contrast requirements in both light and dark mode.

\`\`\`vue
<NeoButton color="blue"       variant="primary" text="Blue" />
<NeoButton color="purple"     variant="primary" text="Purple" />
<NeoButton color="green"      variant="secondary" text="Green" />
<NeoCheckbox color="indigo"   label="Indigo checkbox" />
<NeoInput    color="teal"     label="Teal input" />
\`\`\`

### Available Colors

All Material Design colors are supported:

\`red\` · \`pink\` · \`purple\` · \`deepPurple\` · \`indigo\` · \`blue\` · \`lightBlue\` · \`cyan\` · \`teal\` · \`green\` · \`lightGreen\` · \`lime\` · \`yellow\` · \`amber\` · \`orange\` · \`deepOrange\` · \`brown\` · \`grey\` · \`blueGrey\` · \`black\`

> **Note:** \`white\` is intentionally excluded from surface components — interactive states (hover, active) rely on a darker shade of the component color, which is invisible on a white canvas. Use \`color="black"\` with a dark-mode wrapper instead.

## Dark Mode

Wrap any section in \`u-onDark\` to switch it to dark mode. The color system adapts automatically — no extra props needed.

\`\`\`vue
<div class="u-onDark" style="background: #111; padding: 24px;">
  <NeoButton color="blue" variant="primary" text="Dark mode button" />
</div>
\`\`\`

## TypeScript

All components are fully typed. Import prop types alongside the components:

\`\`\`ts
import { NeoButton, type NeoButtonProps } from 'neo-materia'
import { NeoCard,   type NeoCardProps   } from 'neo-materia'
import { NeoInput,  type NeoInputProps  } from 'neo-materia'
\`\`\`

The \`Color\` and \`SurfaceColor\` types are also exported for use in your own components:

\`\`\`ts
import type { Color, SurfaceColor } from 'neo-materia'
\`\`\`

## Layout

\`NeoSection\` provides a 12-column CSS grid layout with a configurable max-width cap. Wrap organisms in it to get a consistent page grid:

\`\`\`vue
<NeoSection padding="var(--neo-spacing-layout-md)">
  <NeoHero title="Welcome" color="blue" />
</NeoSection>

<NeoSection :full-width="true" padding="var(--neo-spacing-layout-sm)">
  <!-- stretches to full viewport width -->
</NeoSection>
\`\`\`

Children span all 12 columns by default. Override with \`gridColumn\` to place them manually:

\`\`\`vue
<NeoSection>
  <div style="grid-column: span 6">Left half</div>
  <div style="grid-column: span 6">Right half</div>
  <div style="grid-column: full-start / full-end">Full bleed</div>
</NeoSection>
\`\`\`

## Explore the Components

The full interactive component library is available in Storybook:

- **Stable release**: [titanlordcode.github.io/NeoMateria](https://titanlordcode.github.io/NeoMateria/)
- **Dev builds**: [titanlordcode.github.io/NeoMateria/dev](https://titanlordcode.github.io/NeoMateria/dev)
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documentation/Getting Started"}),`
`,`
`,e.jsx(i,{children:l})]})}function u(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{u as default};
