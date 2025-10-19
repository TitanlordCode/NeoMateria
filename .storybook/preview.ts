import type { Decorator, Preview } from '@storybook/vue3'

import '../src/assets/styles/globals.css'
import './preview.css'

const backgrounds = [
	// ✅ must be an array
	{ name: 'Dark', value: '#000' },
	{ name: 'Light', value: '#fff' },
]

// Helper to safely access Storybook's addons channel
const getStorybookChannel = () => {
	// @ts-expect-error __STORYBOOK_ADDONS_CHANNEL__ exists
	return window.__STORYBOOK_ADDONS_CHANNEL__ || null
}

const withTheme: Decorator = (story, context) => {
	return {
		components: { story },
		template: `<div v-bind="isDark ? { class: 'u-onDark' } : {}"><story /></div>`,
		data() {
			return {
				isDark: false,
				currentBg: '#fff',
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
				// Try to get from context first
				let bgValue = context.globals?.backgrounds?.value || '#fff'

				// If not available, try to get from URL parameters
				if (bgValue === '#fff') {
					const urlParams = new URLSearchParams(window.location.search)
					const globalsParam = urlParams.get('globals')
					if (globalsParam) {
						try {
							const globals = JSON.parse(decodeURIComponent(globalsParam))
							bgValue = globals.backgrounds?.value || '#fff'
						} catch (e) {
							// Keep default
							console.warn(e)
						}
					}
				}

				this.currentBg = bgValue
				this.isDark = bgValue === '#000'
			},
			handleGlobalsUpdate(data) {
				// Update when globals change
				if (data && data.globals && data.globals.backgrounds) {
					this.currentBg = data.globals.backgrounds.value || '#fff'
					this.isDark = this.currentBg === '#000'
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
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			// Exclude certain elements from the accessibility checks
			element: '#storybook-root', // only test inside the Storybook root
		},
		backgrounds: {
			default: 'Light',
			values: backgrounds,
		},
	},
	tags: ['autodocs'],
	decorators: [withTheme],
}

export default preview
