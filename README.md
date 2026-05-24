# NeoMateria

A modern Vue 3 component library built with Atomic Design principles and Material Design colors, featuring automatic WCAG AA accessibility compliance.

[![npm version](https://img.shields.io/npm/v/neo-materia.svg)](https://www.npmjs.com/package/neo-materia)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](./LICENSE)

> **For npm users**: Looking for installation instructions? See [README-npm.md](./README-npm.md) or visit the [npm package page](https://www.npmjs.com/package/neo-materia).

## For Developers

This README is for developers working on the NeoMateria library itself. For usage documentation, see the [Storybook Documentation](https://titanlordcode.github.io/NeoMateria/).

## Features

- **Accessible by Default**: Automatic WCAG AA compliance with intelligent color contrast
- **Atomic Design**: Components organized by atoms and molecules for better composition
- **Material Colors**: Full Material Design color palette with light/dark mode support
- **TypeScript Support**: Fully typed components and props
- **Responsive**: Mobile-first responsive components
- **Customizable**: CSS custom properties for easy theming
- **Vue 3**: Built with the latest Vue 3 Composition API

## Tech Stack

- **Vue 3.5** with Composition API
- **TypeScript** for type safety
- **Vite** for build tooling
- **Vitest** for unit testing
- **Storybook 10** for component documentation
- **Material Colors** for color palette
- **Docker** for containerized development

## Getting Started

For complete development setup instructions, available commands, and workflows, see the **Contributing/Project Setup** page in Storybook, or the source at [`src/components/06-contributing/setup.mdx`](./src/components/06-contributing/setup.mdx).

### Quick Setup

```sh
npm install
npm run dev         # Native Storybook (recommended on Windows)
npm run dev:docker  # Containerised Storybook (matches snapshot env)
```

## Project Structure

```
src/
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
│   ├── 06-contributing/    # Contributor documentation stories
│   ├── 99-drafts/          # Work in progress — not exported
│   └── docs/               # Auto-generated Storybook MDX docs (do not edit manually)
├── stores/                 # Shared Vue state (e.g. sheet stacking)
├── utils/                  # Utility functions (classNames, WCAG contrast, ID generation…)
└── index.ts                # Library entry point

scripts/
├── generate-colors.ts      # Generates color CSS/TS with WCAG validation
├── generate-globals.ts     # Generates global CSS variables
├── generate-docs.ts        # Generates Storybook MDX from markdown
└── pre-flight.ts           # Orchestrates all generation scripts

docs/
├── getting_started.md      # User-facing getting started guide
├── color-accessibility.md  # Color system and WCAG strategy
└── colors.md               # Auto-generated color reference table
```

## Architecture

### Component Structure

Each component follows this structure:

```
ComponentName/
├── NeoComponentName.vue            # Main component
├── NeoComponentNameTypes.ts        # TypeScript interfaces
├── NeoComponentName.stories.tsx    # Storybook stories
├── NeoComponentName-layout.css     # Layout/sizing styles
└── NeoComponentName-themed.css     # Color theme styles
```

### Naming Conventions

- **Components**: PascalCase with "Neo" prefix (e.g., `NeoButton`)
- **CSS Classes**: BEM methodology (e.g., `NeoButton--primary`)
- **Files**: Match component names exactly
- **CSS Variables**: Kebab-case with component prefix (e.g., `--NeoButton-color-background`)

### Auto-Generated Files

The following files are auto-generated and should **NOT** be edited manually:

- `src/assets/typescript/colors.ts`
- `src/assets/styles/colors.css`
- `src/assets/styles/globals.css`
- `docs/colors.md`
- `src/components/00-foundations/colors.mdx`
- `src/components/docs/*.mdx`

To regenerate these files after changes:

```sh
npm run generate:files
```

## Color System

The color system automatically selects optimal shades to meet WCAG AA standards (4.5:1 contrast ratio):

- **Light Mode**: Finds darkest shade that works with white text (or black for yellow/amber/orange)
- **Dark Mode**: Finds lightest shade that works with black text
- **Validation**: All combinations validated at build time

See [docs/color-accessibility.md](./docs/color-accessibility.md) for details.

## Development Guidelines

- Follow existing code style and conventions
- Use TypeScript for type safety
- Write Storybook stories for all component variants
- Ensure WCAG AA accessibility compliance
- Test in both light and dark modes
- Run `npm run test` before committing
- Use BEM naming for CSS classes
- Add JSDoc comments to utility functions

## Documentation

- **User Documentation**: [Storybook](https://titanlordcode.github.io/NeoMateria/)
- **Color Strategy**: [docs/color-accessibility.md](./docs/color-accessibility.md)
- **User Getting Started**: [docs/getting_started.md](./docs/getting_started.md)
- **Development Setup**: [Contributing/Project Setup](./src/components/06-contributing/setup.mdx) (Storybook)

## Release Process

Releases are automated via **semantic-release**. Version numbers are determined by commit message types — you never manually bump `package.json`.

| Branch | What happens |
|---|---|
| `develop` push | Pre-release published to npm (`neo-materia@dev`) |
| `main` push | Stable release: version bumped, `CHANGELOG.md` updated, GitHub Release created, npm `latest` updated |

See the **Contributing/Project Setup** page in Storybook for the full release workflow, commit conventions, and how to mark breaking changes.

## License

Proprietary — free to use, no modification or redistribution. See [LICENSE](./LICENSE) for details.

## Author

Created by [TitanlordCode](https://github.com/TitanlordCode)
