import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	disableWhatsNewNotifications: true,
	disableTelemetry: true,
	features: {
		sidebarOnboardingChecklist: false,
	},
	addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
	staticDirs: ['../public'],
	framework: {
		name: '@storybook/vue3-vite',
		options: {
			docgen: 'vue-component-meta',
		},
	},
	viteFinal: async (config) => {
		if (config.server) {
			config.server.watch = {
				...config.server.watch,
				usePolling: true,
				interval: 2000,
				ignored: [
					'**/node_modules/**',
					'**/.git/**',
					'**/dist/**',
					'**/__snapshots__/**',
					'**/__snapshots_diff__/**',
					'**/__snapshots_modified__/**',
				],
			}
			config.server.hmr = {
				...config.server.hmr,
				host: 'localhost',
				port: 3000,
			}
		}
		return config
	},
}
export default config
