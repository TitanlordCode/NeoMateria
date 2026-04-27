import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

function getTagValues(node) {
	if (!node || node.type !== 'ArrayExpression') return []
	return node.elements
		.filter((element) => element?.type === 'Literal' && typeof element.value === 'string')
		.map((element) => element.value)
}

function unwrapToObject(node) {
	if (!node) return null
	if (node.type === 'TSAsExpression' || node.type === 'TSSatisfiesExpression') {
		return unwrapToObject(node.expression)
	}
	if (node.type === 'ObjectExpression') return node
	return null
}

export default defineConfigWithVueTs(
	{
		name: 'app/files-to-lint',
		files: ['**/*.{ts,mts,tsx,vue}'],
	},

	{
		name: 'app/files-to-ignore',
		ignores: [
			'**/dist/**',
			'**/dist-ssr/**',
			'**/coverage/**',
			'**/storybook-static/**',
			'**/node_modules/**',
			'**/*.d.ts',
			'stylelint-plugins/**',
			'**/src/**/05-pages/**/*.stories.{ts,tsx}',
			'**/src/**/06-contributing/**/*.stories.{ts,tsx}',
		],
	},

	pluginVue.configs['flat/essential'],
	vueTsConfigs.recommended,

	{
		...pluginVitest.configs.recommended,
		files: ['src/**/*.test.ts'],
	},

	{
		name: 'app/story-test-coverage',
		files: ['**/*.stories.tsx'],
		plugins: {
			local: {
				rules: {
					'story-has-test': {
						meta: {
							type: 'suggestion',
							messages: {
								missingTest:
									"Story '{{ name }}' has no test coverage. Add tags: ['snapshot'], a play() function, or tags: ['no-test'] to explicitly opt out.",
							},
						},
						create(context) {
							// Collect meta-level tags from the default export
							let metaTags = []

							return {
								// export default meta  →  find the variable it references
								ExportDefaultDeclaration(node) {
									if (node.declaration.type !== 'Identifier') return
									const metaName = node.declaration.name
									const scope = context.getScope?.() ?? context.sourceCode.getScope(node)
									const variable =
										scope.variables.find((v) => v.name === metaName) ??
										scope.upper?.variables.find((v) => v.name === metaName)
									const init = variable?.defs?.[0]?.node?.init
									const obj = unwrapToObject(init)
									if (!obj) return
									const tagsProp = obj.properties.find(
										(property) =>
											property.type === 'Property' &&
											property.key?.type === 'Identifier' &&
											property.key.name === 'tags',
									)
									metaTags = getTagValues(tagsProp?.value)
								},

								// export const StoryName: Story = { ... }
								ExportNamedDeclaration(node) {
									if (node.declaration?.type !== 'VariableDeclaration') return

									for (const declarator of node.declaration.declarations) {
										if (declarator.id?.type !== 'Identifier') continue
										const storyName = declarator.id.name
										if (storyName === 'meta') continue

										const obj = unwrapToObject(declarator.init)
										if (!obj) continue

										const storyTags = []
										let hasPlay = false

										for (const property of obj.properties) {
											if (property.type !== 'Property') continue
											if (property.key?.type !== 'Identifier') continue

											if (property.key.name === 'tags') {
												storyTags.push(...getTagValues(property.value))
											}
											if (property.key.name === 'play') {
												hasPlay = true
											}
										}

										const effectiveTags = [...new Set([...metaTags, ...storyTags])]

										const isExempt =
											hasPlay ||
											effectiveTags.includes('snapshot') ||
											effectiveTags.includes('no-test') ||
											effectiveTags.includes('!dev')

										if (!isExempt) {
											context.report({
												node: declarator.id,
												messageId: 'missingTest',
												data: { name: storyName },
											})
										}
									}
								},
							}
						},
					},
				},
			},
		},
		rules: {
			'local/story-has-test': 'error',
		},
	},

	skipFormatting,
)
