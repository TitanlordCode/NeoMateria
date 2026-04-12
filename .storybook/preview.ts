import type { Decorator, Preview } from '@storybook/vue3-vite'
import { computed, defineComponent, onUnmounted, ref } from 'vue'
import { addons } from 'storybook/preview-api'
import { create } from 'storybook/theming'
import { colors } from '../src/assets/typescript/colors'

import '../src/assets/styles/globals.css'
import './preview.css'

const prefersDark =
	typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

const docsTheme = create({
	base: prefersDark ? 'dark' : 'light',
	colorPrimary: '#3b82f6',
	colorSecondary: '#3b82f6',
	fontBase: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
	fontCode: 'monospace',
})

function resolveColor(value: unknown, fallback: string): string {
	return typeof value === 'string' && value.startsWith('#') ? value : fallback
}

// context.globals holds the current active globals (including URL-persisted values from this
// session). Reading it on mount ensures docs story remounts (each in its own iframe) pick up
// the currently active toggle state instead of always resetting to white.
const withTheme: Decorator = (story, context) => {
	return defineComponent({
		name: 'WithThemeDecorator',
		components: { story },
		setup() {
			const bg = ref(resolveColor(context.globals?.backgrounds, '#fff'))
			const isDark = computed(() => bg.value === '#000')
			const direction = ref(resolveColor(context.globals?.direction, 'ltr'))

			const channel = addons.getChannel()
			const handleGlobalsUpdate = (event: { globals?: Record<string, unknown> }) => {
				if (event?.globals && 'backgrounds' in event.globals) {
					bg.value = resolveColor(event.globals.backgrounds, '#fff')
				}
				if (event?.globals && 'direction' in event.globals) {
					direction.value = resolveColor(event.globals.direction, 'ltr')
				}
			}
			channel.on('globalsUpdated', handleGlobalsUpdate)

			onUnmounted(() => {
				channel.off('globalsUpdated', handleGlobalsUpdate)
			})

			return { bg, isDark, direction }
		},
		template: `<div :class="isDark ? 'u-onDark' : 'u-onLight'" :dir="direction" :style="{ backgroundColor: bg }"><story /></div>`,
	})
}

const preview: Preview = {
	parameters: {
		docs: {
			theme: docsTheme,
		},
		options: {
			storySort: {
				order: [
					'Documentation',
					'Foundation',
					'Atoms',
					'Molecules',
					'Organisms',
					'Pages',
					'Contributing',
				],
			},
		},
		controls: {
			matchers: {
				date: /Date$/i,
			},
			exclude: /^on[A-Z].*/,
		},
		a11y: {
			// Exclude certain elements from the accessibility checks
			context: '#storybook-root', // only test inside the Storybook root
		},
	},

	argTypes: {
		$slots: { table: { disable: true } },
		color: {
			control: 'select',
			options: colors,
			description: `**Component color theme** - automatically optimized for accessibility.

**Light Mode:**
- Most colors use white text on darker shades (500+)
- **Yellow, Amber, Orange** use black text on shade 500

**Dark Mode:**
- All colors use black text on lighter shades

All combinations meet WCAG AA (4.5:1 contrast). See **Documentation > Color Accessibility** for complete details.`,
			table: {
				category: 'Appearance',
				type: {
					summary: 'Color',
				},
			},
		},
	},

	globalTypes: {
		backgrounds: {
			name: 'Background',
			description: 'Global theme background',
			defaultValue: '#fff',
			toolbar: {
				icon: 'photo',
				items: [
					{ value: '#fff', title: 'Light', icon: 'circlehollow' },
					{ value: '#000', title: 'Dark', icon: 'circle' },
				],
				dynamicTitle: true,
			},
		},
		direction: {
			name: 'Direction',
			description: 'Text direction',
			defaultValue: 'ltr',
			toolbar: {
				icon: 'transfer',
				items: [
					{ value: 'ltr', title: 'LTR', icon: 'arrowleft' },
					{ value: 'rtl', title: 'RTL', icon: 'arrowright' },
				],
				dynamicTitle: true,
			},
		},
	},

	tags: ['autodocs'],
	decorators: [withTheme],

	initialGlobals: {
		backgrounds: '#fff',
		direction: 'ltr',
	},
}

export default preview
