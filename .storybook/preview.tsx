import type { Preview } from '@storybook/vue3'

import '../src/assets/styles/globals.css'

export const globalTypes = {
	backgrounds: {
		name: 'Backgrounds',
		description: 'Switch between light/dark themes',
		defaultValue: 'light',
	},
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
	},
	globalTypes,
	tags: ['autodocs'],
	decorators: [
		(Story, context) => {
			const { backgrounds } = context.globals // Use context.globals directly

			switch (backgrounds) {
				case 'dark':
					return {
						components: { Story },
						template: `<div class="u-onDark"><story /></div>`,
					}
				default:
					return {
						components: { Story },
						template: `<story />`,
					}
			}
		},
	],
}

export default preview
