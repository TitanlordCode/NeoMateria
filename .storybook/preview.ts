import type { Preview } from '@storybook/vue3'

import '../src/assets/styles/globals.css'

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
	tags: ['autodocs'],
}

export default preview
