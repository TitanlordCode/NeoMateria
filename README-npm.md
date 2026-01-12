# NeoMateria

A modern Vue 3 component library built with Atomic Design principles and Material Design colors, featuring automatic WCAG AA accessibility compliance.

[![npm version](https://img.shields.io/npm/v/neo-materia.svg)](https://www.npmjs.com/package/neo-materia)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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

### Atoms
- **NeoButton** - Versatile button component with multiple variants
- **NeoInput** - Accessible text input with validation support
- **NeoCheckbox** - Checkbox with keyboard navigation
- **NeoRadio** - Radio button component
- **NeoTextArea** - Multi-line text input
- **NeoImage** - Responsive image component
- **NeoLink** - Accessible link component
- **NeoSpinner** - Loading spinner
- **NeoBadge** - Badge and tag component
- **NeoIcon** - SVG icon component

### Molecules
- **NeoSelect** - Accessible select dropdown with search and multi-select support

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

Explore the full component library with interactive examples:

**[View Storybook Documentation](https://titanlordcode.github.io/NeoMateria/)**

The Storybook includes:
- Live component previews
- Interactive props controls
- Accessibility checks
- Dark mode toggle
- RTL (Right-to-Left) support examples

## TypeScript

NeoMateria is written in TypeScript and provides full type definitions:

```typescript
import type {
  NeoButtonProps,
  NeoInputProps,
  NeoCheckboxProps,
  NeoRadioProps,
  NeoTextAreaProps,
  NeoSelectProps,
  NeoImageProps,
  NeoLinkProps,
  NeoSpinnerProps,
  NeoBadgeProps,
  NeoIconProps,
  Color
} from 'neo-materia'
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Vue 3 compatible environments

## License

MIT License - see [LICENSE](https://github.com/TitanlordCode/NeoMateria/blob/master/LICENSE) for details.

## Links

- [GitHub Repository](https://github.com/TitanlordCode/NeoMateria)
- [Storybook Documentation](https://titanlordcode.github.io/NeoMateria/)
- [npm Package](https://www.npmjs.com/package/neo-materia)

## Author

Created by [TitanlordCode](https://github.com/TitanlordCode)
