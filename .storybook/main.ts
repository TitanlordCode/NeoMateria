import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  viteFinal: async (config) => {
    // Enable HMR for Docker environments
    if (config.server) {
      config.server.watch = {
        ...config.server.watch,
        usePolling: true,
        interval: 1000,
      }
      config.server.hmr = {
        ...config.server.hmr,
        host: '0.0.0.0',
        port: 3000,
      }
    }
    return config
  },
}
export default config
