import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

const theme = create({
	base: 'light',
	brandTitle: 'NeoMateria',
	brandUrl: 'https://github.com/TitanlordCode/NeoMateria',
	brandImage: '/favicon.ico',
	brandTarget: '_blank',

	// Typography
	fontBase: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
	fontCode: 'monospace',

	// Colors
	colorPrimary: '#3b82f6',
	colorSecondary: '#3b82f6',
})

addons.setConfig({
	theme,
})
