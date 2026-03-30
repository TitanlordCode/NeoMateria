import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'

const meta = {
	tags: ['!dev'],
	title: 'Foundation/Scrollbar',
	parameters: {
		docs: {
			description: {
				component: `
NeoMateria provides a custom scrollbar system. Use the compiled utility classes in your own projects — the PostCSS mixin is for contributors building components inside the library.

---

### Utility classes — for library consumers ✓

These are compiled into the library's CSS output and available in any project that imports NeoMateria.

| Class | Effect |
|---|---|
| \`u-scrollbar\` | Applies \`overflow: auto\` and custom scrollbar styles |
| \`u-scrollbar--rounded\` | Rounds the track and thumb corners — must be combined with \`u-scrollbar\` |

---

### CSS mixin — for library contributors only

\`\`\`css
.MyScrollableArea {
  @mixin addScrollbar;
}
\`\`\`

This requires PostCSS with \`postcss-mixins\` configured to load NeoMateria's mixin files. It is **not** available to library consumers unless they replicate that PostCSS setup. Use the \`u-scrollbar\` utility class instead.

The mixin respects dark mode via \`@mixin onDark\` and provides a \`scrollbar-width: thin\` fallback for Firefox. Rounded corners are driven by the CSS variable \`--neo-scrollbar-radius\` (default \`0px\`).
				`,
			},
		},
	},
	argTypes: {
		color: { table: { disable: true } },
	},
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const scrollContent = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`)

const scrollItems = defineComponent({
	name: 'ScrollItems',
	setup() {
		return () => (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxInlineSize: '320px' }}>
				{scrollContent.map((item) => (
					<div
						key={item}
						style={{
							padding: '8px 12px',
							background: 'var(--neo-color-grey100)',
							borderRadius: '4px',
							fontSize: '14px',
						}}
					>
						{item}
					</div>
				))}
			</div>
		)
	},
})

const darkScrollItems = defineComponent({
	name: 'DarkScrollItems',
	setup() {
		return () => (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxInlineSize: '320px' }}>
				{scrollContent.map((item) => (
					<div
						key={item}
						style={{
							padding: '8px 12px',
							background: 'var(--neo-color-grey800)',
							borderRadius: '4px',
							color: 'var(--neo-color-grey100)',
							fontSize: '14px',
						}}
					>
						{item}
					</div>
				))}
			</div>
		)
	},
})

export const Default: Story = {
	render: () => scrollItems,
	decorators: [
		() => ({
			template: `<div class="u-scrollbar" style="block-size: 240px; border: 1px solid var(--neo-color-grey200); border-radius: 8px; padding: 16px;"><story /></div>`,
		}),
	],
	parameters: {
		docs: {
			source: {
				code: `<div class="u-scrollbar" style="block-size: 240px;">
  <div v-for="item in items" :key="item" style="padding: 8px 12px; background: var(--neo-color-grey100); border-radius: 4px; font-size: 14px;">
    {{ item }}
  </div>
</div>`,
			},
		},
	},
}

export const Rounded: Story = {
	render: () => scrollItems,
	decorators: [
		() => ({
			template: `<div class="u-scrollbar u-scrollbar--rounded" style="block-size: 240px; border: 1px solid var(--neo-color-grey200); border-radius: 8px; padding: 16px;"><story /></div>`,
		}),
	],
	parameters: {
		docs: {
			source: {
				code: `<div class="u-scrollbar u-scrollbar--rounded" style="block-size: 240px;">
  <div v-for="item in items" :key="item" style="padding: 8px 12px; background: var(--neo-color-grey100); border-radius: 4px; font-size: 14px;">
    {{ item }}
  </div>
</div>`,
			},
		},
	},
}

export const OnDark: Story = {
	globals: { backgrounds: '#000' },
	render: () => darkScrollItems,
	decorators: [
		() => ({
			template: `<div class="u-onDark u-scrollbar u-scrollbar--rounded" style="block-size: 240px; background: #111; border: 1px solid var(--neo-color-grey700); border-radius: 8px; padding: 16px;"><story /></div>`,
		}),
	],
	parameters: {
		docs: {
			source: {
				code: `<div class="u-onDark u-scrollbar u-scrollbar--rounded" style="block-size: 240px; background: #111;">
  <div v-for="item in items" :key="item" style="padding: 8px 12px; background: var(--neo-color-grey800); border-radius: 4px; color: var(--neo-color-grey100); font-size: 14px;">
    {{ item }}
  </div>
</div>`,
			},
		},
	},
}
