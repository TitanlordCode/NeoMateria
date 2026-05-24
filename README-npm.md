# NeoMateria

A modern Vue 3 component library built with Atomic Design principles and Material Design colors, featuring automatic WCAG AA accessibility compliance.

[![npm version](https://img.shields.io/npm/v/neo-materia.svg)](https://www.npmjs.com/package/neo-materia)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](https://github.com/TitanlordCode/NeoMateria/blob/master/LICENSE)

## Features

- **Accessible by Default**: Automatic WCAG AA compliance with intelligent color contrast
- **Atomic Design**: Components organized by atoms and molecules for better composition
- **Material Colors**: Full Material Design color palette with light/dark mode support
- **TypeScript Support**: Fully typed components and props
- **Responsive**: Mobile-first responsive components
- **Customizable**: CSS custom properties for easy theming
- **Vue 3**: Built with the latest Vue 3 Composition API

## Installation

### npm
```sh
npm install neo-materia
```

### yarn
```sh
yarn add neo-materia
```

### pnpm
```sh
pnpm add neo-materia
```

### bun
```sh
bun add neo-materia
```

## Setup

### CSS imports — recommended (tree-shaken)

NeoMateria splits its CSS per component. If your bundler honors ESM side-effects (Vite, Webpack 5, Rollup, esbuild), **you don't need to import any stylesheet manually** — importing a component pulls only its own CSS:

```ts
import { NeoButton } from 'neo-materia'
// ↑ side-effect import auto-pulls NeoButton.css + foundations
```

The library entry imports the foundation tokens (`globals.css`) once, and each component imports its own scoped CSS chunk. Importing `{ NeoButton }` ships ~5 KB of component CSS instead of the full ~17 KB bundle.

### CSS imports — explicit (cherry-picking or strict-mode bundlers)

If your bundler ignores ESM CSS side-effects, or you import components from deep paths and skip the entry, import foundations manually once at app entry:

```ts
import 'neo-materia/styles/foundations.css'
```

### CSS imports — back-compat (everything in one file)

The classic monolithic stylesheet still ships and works exactly like before:

```ts
import 'neo-materia/dist/neo-materia.css'
```

This pulls the full ~17 KB stylesheet whether you use one component or all of them — no tree-shaking. Prefer the recommended approach above for new projects.

### Font loading

NeoMateria uses the **Inter** font. Load it in your HTML before your app renders — the recommended way is via Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

Or self-host Inter via [Fontsource](https://fontsource.org/fonts/inter):

```sh
npm install @fontsource/inter
```

```ts
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
```

To use a different font entirely, override the CSS variable in your global stylesheet after importing `neo-materia.css`:

```css
:root {
  --neo-fontFamily-base: 'Your Font', sans-serif;
}
```

## Quick Start

```vue
<script setup lang="ts">
import { NeoButton, NeoInput } from 'neo-materia'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<template>
  <NeoButton
    text="Click me"
    color="blue"
    variant="primary"
    @click="handleClick"
  />

  <NeoInput
    name="email"
    label="Email Address"
    placeholder="Enter your email"
    color="green"
  />
</template>
```

## Available Components

All components use the `Neo` prefix (e.g. `NeoButton`, `NeoCard`, `NeoNavigation`) and are directly importable from `neo-materia`.

NeoMateria covers **atoms** (Button, Input, Checkbox, Icon, NavItem…), **molecules** (Card, Select, Accordion, Sheet…) and **organisms** (Navigation, Footer).

**[View full component library →](https://titanlordcode.github.io/NeoMateria/)**

## Component Props

All components are fully typed with TypeScript. Import the types alongside components:

```typescript
import { NeoButton, type NeoButtonProps } from 'neo-materia'
import { NeoInput, type NeoInputProps } from 'neo-materia'
import { NeoSelect, type NeoSelectProps } from 'neo-materia'
```

## Color System

NeoMateria automatically selects optimal color shades to ensure WCAG AA accessibility (4.5:1 contrast ratio). Simply specify a color and the system handles the rest:

```vue
<NeoButton color="blue" variant="primary" text="Blue Button" />
<NeoInput color="green" label="Green Input" />
<NeoCheckbox color="purple" label="Purple Checkbox" />
```

### Available Colors

All Material Design colors are supported:
- `red`, `pink`, `purple`, `deepPurple`, `indigo`, `blue`, `lightBlue`, `cyan`
- `teal`, `green`, `lightGreen`, `lime`, `yellow`, `amber`, `orange`, `deepOrange`
- `brown`, `grey`, `blueGrey`

The color system automatically adapts for both light and dark modes.

## Component Variants

Most components support multiple variants:

### Button Variants
- `primary` - Solid background with color
- `secondary` - Outlined with border
- `tertiary` - Text only, no background

### Sizes
- `small` - Compact size
- `medium` - Default size (default)
- `large` - Larger size

Example:
```vue
<NeoButton
  text="Large Primary Button"
  color="blue"
  variant="primary"
  size="large"
/>
```

## Accessibility

All components are built with accessibility in mind:
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Readers**: Proper ARIA attributes and semantic HTML
- **Color Contrast**: Automatic WCAG AA compliance (4.5:1 contrast ratio)
- **Focus Management**: Clear focus indicators and logical tab order

## Documentation

| Channel | Storybook | npm |
|---------|-----------|-----|
| Stable (`main`) | [titanlordcode.github.io/NeoMateria](https://titanlordcode.github.io/NeoMateria/) | `npm install neo-materia` |
| Dev (`develop`) | [titanlordcode.github.io/NeoMateria/dev](https://titanlordcode.github.io/NeoMateria/dev) | `npm install neo-materia@dev` |

## TypeScript

NeoMateria is written in TypeScript and provides full type definitions:

```typescript
import type { NeoButtonProps, NeoCardProps, /* ... */ Color } from 'neo-materia'
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Vue 3 compatible environments

## License

Proprietary — free to use, no modification or redistribution. See [LICENSE](https://github.com/TitanlordCode/NeoMateria/blob/master/LICENSE) for details.

## Links

- [GitHub Repository](https://github.com/TitanlordCode/NeoMateria)
- [Storybook Documentation](https://titanlordcode.github.io/NeoMateria/)
- [npm Package](https://www.npmjs.com/package/neo-materia)

## Author

Created by [TitanlordCode](https://github.com/TitanlordCode)
