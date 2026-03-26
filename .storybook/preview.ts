import type { Decorator, Preview } from '@storybook/vue3-vite'
import { colors } from '../src/assets/typescript/colors'

import '../src/assets/styles/globals.css'
import './preview.css'

// Helper to safely access Storybook's addons channel
const getStorybookChannel = () => {
	// @ts-expect-error __STORYBOOK_ADDONS_CHANNEL__ exists
	return window.__STORYBOOK_ADDONS_CHANNEL__ || null
}

const withTheme: Decorator = (story, context) => {
	return {
		components: { story },
		template: `<div v-bind="isDark ? { class: 'u-onDark' } : {}" :dir="direction" :style="{ backgroundColor: currentBg }"><story /></div>`,
		data() {
			return {
				isDark: false,
				currentBg: '#fff',
				direction: 'ltr',
			}
		},
		mounted() {
			this.updateTheme()

			// Listen for Storybook global updates
			const addonsChannel = getStorybookChannel()
			if (addonsChannel) {
				addonsChannel.on('globalsUpdated', this.handleGlobalsUpdate)
			}
		},
		beforeUnmount() {
			const addonsChannel = getStorybookChannel()
			if (addonsChannel) {
				addonsChannel.off('globalsUpdated', this.handleGlobalsUpdate)
			}
		},
		methods: {
			updateTheme() {
				// In Storybook v10, backgrounds is a direct string value (not an object)
				let bgValue = context.globals?.backgrounds || '#fff'
				let dirValue = context.globals?.direction || 'ltr'

				// If not available, try to get from URL parameters
				if (bgValue === '#fff' || dirValue === 'ltr') {
					const urlParams = new URLSearchParams(window.location.search)
					const globalsParam = urlParams.get('globals')
					if (globalsParam) {
						try {
							const globals = JSON.parse(decodeURIComponent(globalsParam))
							bgValue = globals.backgrounds || '#fff'
							dirValue = globals.direction || 'ltr'
						} catch (e) {
							// Keep default
							console.warn(e)
						}
					}
				}

				this.currentBg = bgValue
				this.isDark = bgValue === '#000'
				this.direction = dirValue
			},
			handleGlobalsUpdate(data) {
				// Update when globals change
				if (data && data.globals) {
					if (data.globals.backgrounds !== undefined) {
						this.currentBg = data.globals.backgrounds || '#fff'
						this.isDark = this.currentBg === '#000'
					}
					if (data.globals.direction !== undefined) {
						this.direction = data.globals.direction || 'ltr'
					}
				} else {
					// Fallback to re-reading everything
					this.updateTheme()
				}
			},
		},
	}
}

const preview: Preview = {
	parameters: {
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
