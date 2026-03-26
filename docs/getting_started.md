# Project Setup

## System Requirements

- **Node.js**: v22 or higher
- **npm**: v9 or higher
- **Docker**: Required for running Storybook in containerized environment

## Getting Started

### 1. Install Dependencies

```sh
npm install
```

### 2. Start Development

To start Storybook with hot-reload in Docker:

```sh
npm run start
```

This command will:
- Generate all auto-generated files (colors, docs)
- Build and start Storybook in a Docker container
- Open at `http://localhost:3000`

Alternatively, run Storybook locally without Docker:

```sh
npm run storybook
```

## Development Commands

### File Generation

The project uses auto-generated files for colors and documentation. After making changes to:
- Material color configurations
- Documentation files in `/docs` folder

Run the generation script:

```sh
npm run generate:files
```

This generates:
- `src/assets/typescript/colors.ts` - TypeScript color definitions
- `src/assets/styles/colors.css` - CSS color variables
- `docs/colors.md` - Color reference table
- `src/components/00-foundations/colors.mdx` - Storybook color showcase
- `src/components/docs/*.mdx` - Storybook documentation pages

### Building

Build the library for production:

```sh
npm run build
```

This command:
- Runs file generation
- Compiles TypeScript
- Bundles components with Vite
- Outputs to `/dist` directory

### Testing

Run all quality checks (type checking, linting, formatting):

```sh
npm run test
```

Run unit tests with Vitest:

```sh
npm run test:unit
```

Run Storybook interaction tests:

```sh
npm run test:storybook
```

### Code Quality

Type checking with TypeScript:

```sh
npm run type-check
```

Lint JavaScript/TypeScript:

```sh
npm run lint:check        # Check only
npm run lint:fix          # Fix issues
```

Lint CSS:

```sh
npm run stylelint:css     # Check only
npm run stylelint:css:fix # Fix issues
```

Format code with Prettier:

```sh
npm run prettier:check    # Check only
npm run prettier:fix      # Format files
```

## Docker Commands

Build Docker images:

```sh
npm run docker:build
```

Or use Docker Compose directly:

```sh
docker-compose up --build storybook
```

## Project Structure

```
src/
├── assets/
│   ├── icons/              # SVG icons
│   ├── styles/             # Global CSS and mixins
│   └── typescript/         # Generated TypeScript files
├── components/
│   ├── 00-foundations/     # Design system foundations
│   ├── 01-atoms/           # Atomic components
│   ├── 02-molecules/       # Molecular components
│   ├── 03-organisms/       # Organism components
│   └── docs/               # Auto-generated Storybook docs
├── pages/                  # Full-page Storybook examples (not exported)
├── utils/                  # Utility functions
└── index.ts                # Library entry point

scripts/
├── generate-colors.ts      # Color generation script
├── generate-globals.ts     # Global CSS generation
├── generate-docs.ts        # Documentation generation
└── pre-flight.ts           # Orchestrates all generation

docs/
├── getting_started.md      # This file
├── color-accessibility.md  # Color system documentation
└── colors.md               # Auto-generated color reference
```

## Component Development

Each component follows this structure:

```
ComponentName/
├── NeoComponentName.vue            # Main component
├── NeoComponentNameTypes.ts        # TypeScript types
├── NeoComponentName.stories.tsx    # Storybook stories
├── NeoComponentName-layout.css     # Layout styles
└── NeoComponentName-themed.css     # Color theme styles
```

### Creating a New Component

1. Create component folder in appropriate atomic level
2. Add component files following the naming convention
3. Define TypeScript types in `*Types.ts`
4. Create Storybook stories for all variants
5. Export component in `/src/index.ts`
6. Test accessibility and responsiveness

## Development Guidelines

- Follow the existing code style and conventions
- Use TypeScript for type safety
- Write Storybook stories for all components
- Ensure WCAG AA accessibility compliance
- Test in both light and dark modes
- Run `npm run test` before committing
- Use BEM naming convention for CSS classes
