import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { expect } from 'storybook/test'

import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

const meta = {
	title: 'Foundation/Theming',
	parameters: {
		docs: {
			description: {
				component: `
NeoMateria's dark mode system uses **CSS custom properties + container style queries** — not media queries or a global class toggle. Any element can activate a dark context, and the system nests arbitrarily.

---

### How it works

When a context element is present, it sets \`--neo-is-dark: 1\` and establishes an \`on-dark\` CSS container. Component CSS uses \`@mixin onDark\` — which compiles to \`@container on-dark style(--neo-is-dark: 1)\` — to apply dark-mode variable overrides at any nesting depth.

---

### Utility classes (HTML / JSX)

| Class | Effect |
|---|---|
| \`u-onDark\` | Activates dark context on the element and all descendants |
| \`u-unsetDark\` | Resets to light context, even inside a \`u-onDark\` ancestor |

Nesting is arbitrary: \`u-onDark → u-unsetDark → u-onDark → …\` works at any depth.

---

### Accessibility utility (HTML / JSX)

| Class | Effect |
|---|---|
| \`sr-only\` | Visually hides the element while keeping it in the accessibility tree — for screen-reader-only labels, descriptions, and announcements. |

---

### CSS mixins (component styles only)

| Mixin | When to use |
|---|---|
| \`@mixin setOnDark\` | A component that **establishes its own dark background** regardless of context — e.g. \`.NeoButton--primary\`. Apply so children (icons, spinners) know they are on a dark surface. |
| \`@mixin unsetOnDark\` | A surface that must **always appear light** regardless of context — e.g. \`.NeoDropdown-panel\`. Resets context so nested components use light-mode styles. |
| \`@mixin onDark\` | Respond to the nearest dark context ancestor. Used inside component-themed CSS to override CSS variables when dark mode is active. |
| \`@mixin prefersDark\` | Wraps styles in \`@media (prefers-color-scheme: dark)\`. Use when you need to respond to the OS dark mode preference **independently** of the container-based dark context. |
| \`@mixin prefersLight\` | Wraps styles in \`@media (prefers-color-scheme: light)\`. Mirror of \`prefersDark\`. |

> **Rule:** only apply \`setOnDark\` to components where \`--neo-theme-colorText\` resolves to white (dark/saturated surfaces). Light-surface colors like yellow, amber, orange, and white are excluded via \`:not(.Themed--yellow, …)\`.
				`,
			},
		},
	},
	args: {
		color: 'blue',
	},
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

// ─── shared styles ───────────────────────────────────────────────────────────

const layerBase = {
	borderRadius: '8px',
	display: 'flex',
	flexDirection: 'column' as const,
	gap: '12px',
	padding: '20px',
}

const label = {
	fontSize: '13px',
	fontFamily: 'monospace',
	margin: '0',
}

const lightLayer = {
	...layerBase,
	background: '#fff',
	border: '2px solid #e0e0e0',
	color: '#111',
}

const darkLayer = {
	...layerBase,
	background: '#111',
	border: '2px dashed #555',
	color: '#f0f0f0',
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export const DarkModeNesting: Story = {
	tags: ['!dev'], // TODO: check if this is fine and tests are still picked up by vitest
	globals: { backgrounds: '#fff' },
	parameters: {
		docs: {
			description: {
				story:
					'Five nested boxes alternating between `u-onDark` and `u-unsetDark`. Each level renders a primary NeoButton — watch its background flip between dark and light to confirm the context is applied correctly at every depth.',
			},
		},
	},
	render: (args) =>
		defineComponent({
			name: 'DarkModeNestingRender',
			setup() {
				return () => (
					<div data-testid="level-root" style={lightLayer}>
						<p style={label}>Level 0 — no context (inherits light)</p>
						<NeoButton
							data-testid="btn-root"
							color={(args as { color: SurfaceColor }).color}
							variant="primary"
							text="Primary Button"
						/>

						<div class="u-onDark" data-testid="level-dark-1" style={darkLayer}>
							<p style={label}>Level 1 — u-onDark → dark</p>
							<NeoButton
								data-testid="btn-dark-1"
								color={(args as { color: SurfaceColor }).color}
								variant="primary"
								text="Primary Button"
							/>

							<div class="u-unsetDark" data-testid="level-light-2" style={lightLayer}>
								<p style={label}>Level 2 — u-unsetDark → light reset</p>
								<NeoButton
									data-testid="btn-light-2"
									color={(args as { color: SurfaceColor }).color}
									variant="primary"
									text="Primary Button"
								/>

								<div class="u-onDark" data-testid="level-dark-3" style={darkLayer}>
									<p style={label}>Level 3 — u-onDark → dark again</p>
									<NeoButton
										data-testid="btn-dark-3"
										color={(args as { color: SurfaceColor }).color}
										variant="primary"
										text="Primary Button"
									/>

									<div class="u-unsetDark" data-testid="level-light-4" style={lightLayer}>
										<p style={label}>Level 4 — u-unsetDark → light again</p>
										<NeoButton
											data-testid="btn-light-4"
											color={(args as { color: SurfaceColor }).color}
											variant="primary"
											text="Primary Button"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			},
		}),

	play: async ({ canvasElement, step }) => {
		const dark1 = canvasElement.querySelector('[data-testid="level-dark-1"]') as HTMLElement
		const light2 = canvasElement.querySelector('[data-testid="level-light-2"]') as HTMLElement
		const dark3 = canvasElement.querySelector('[data-testid="level-dark-3"]') as HTMLElement
		const light4 = canvasElement.querySelector('[data-testid="level-light-4"]') as HTMLElement

		const btnDark1 = canvasElement.querySelector('[data-testid="btn-dark-1"]') as HTMLElement
		const btnLight2 = canvasElement.querySelector('[data-testid="btn-light-2"]') as HTMLElement
		const btnDark3 = canvasElement.querySelector('[data-testid="btn-dark-3"]') as HTMLElement
		const btnLight4 = canvasElement.querySelector('[data-testid="btn-light-4"]') as HTMLElement

		await step('u-onDark sets --neo-is-dark to 1', () => {
			expect(getComputedStyle(dark1).getPropertyValue('--neo-is-dark').trim()).toBe('1')
			expect(getComputedStyle(dark3).getPropertyValue('--neo-is-dark').trim()).toBe('1')
		})

		await step('u-unsetDark resets --neo-is-dark to 0', () => {
			expect(getComputedStyle(light2).getPropertyValue('--neo-is-dark').trim()).toBe('0')
			expect(getComputedStyle(light4).getPropertyValue('--neo-is-dark').trim()).toBe('0')
		})

		await step('every context layer establishes an on-dark container', () => {
			expect(getComputedStyle(dark1).containerName).toBe('on-dark')
			expect(getComputedStyle(light2).containerName).toBe('on-dark')
			expect(getComputedStyle(dark3).containerName).toBe('on-dark')
			expect(getComputedStyle(light4).containerName).toBe('on-dark')
		})

		await step('NeoButton primary background differs between dark and light contexts', () => {
			const bgDark1 = getComputedStyle(btnDark1).backgroundColor
			const bgDark3 = getComputedStyle(btnDark3).backgroundColor
			const bgLight2 = getComputedStyle(btnLight2).backgroundColor
			const bgLight4 = getComputedStyle(btnLight4).backgroundColor

			// Both dark levels should resolve to the same background
			expect(bgDark1).toBe(bgDark3)
			// Both light levels should resolve to the same background
			expect(bgLight2).toBe(bgLight4)
			// Dark and light backgrounds must differ — proves @mixin onDark is applied
			expect(bgDark1).not.toBe(bgLight2)
		})
	},
}
