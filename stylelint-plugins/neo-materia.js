'use strict'

const stylelint = require('stylelint')

// Rule: in .vue scoped styles, property declarations must not use --neo-* variables directly.
// Component variables (--NeoX-category-name) must be used instead.
const noDirectNeoVar = (() => {
	const ruleName = 'neo-materia/no-direct-neo-var-in-property'
	const messages = stylelint.utils.ruleMessages(ruleName, {
		rejected: (prop) =>
			`"${prop}" uses a --neo-* variable directly. Define a component variable in *-layout.css or *-themed.css and reference it here.`,
	})
	const meta = { url: '' }

	const rule = (primaryOption) => (root, result) => {
		const validOptions = stylelint.utils.validateOptions(result, ruleName, {
			actual: primaryOption,
			possible: [true],
		})
		if (!validOptions) return

		const file = root.source?.input?.file ?? ''
		if (!file.endsWith('.vue')) return

		root.walkDecls((decl) => {
			if (decl.prop.startsWith('--')) return
			if (!decl.value.includes('var(--neo-')) return

			stylelint.utils.report({
				message: messages.rejected(decl.prop),
				node: decl,
				result,
				ruleName,
				word: '--neo-',
			})
		})
	}

	rule.ruleName = ruleName
	rule.messages = messages
	rule.meta = meta
	return { ruleName, rule }
})()

// Rule: in *-themed.css files, only --ComponentName-color-* custom properties are allowed.
// Sizing, spacing, and other non-color variables belong in *-layout.css.
const themedColorVarsOnly = (() => {
	const ruleName = 'neo-materia/themed-css-color-vars-only'
	const messages = stylelint.utils.ruleMessages(ruleName, {
		rejected: (prop) =>
			`"${prop}" is not a color variable. Only --ComponentName-color-* properties belong in themed CSS files. Move sizing/spacing/font vars to *-layout.css.`,
	})
	const meta = { url: '' }

	// System variables used by the setOnDark/unsetOnDark theming mechanism
	const systemVarExceptions = new Set(['--neo-is-dark'])

	const rule = (primaryOption) => (root, result) => {
		const validOptions = stylelint.utils.validateOptions(result, ruleName, {
			actual: primaryOption,
			possible: [true],
		})
		if (!validOptions) return

		const file = root.source?.input?.file ?? ''
		if (!file.endsWith('-themed.css')) return

		root.walkDecls(/^--/, (decl) => {
			if (systemVarExceptions.has(decl.prop)) return
			if (/^--[A-Z][a-zA-Z0-9]+-color-/.test(decl.prop)) return

			stylelint.utils.report({
				message: messages.rejected(decl.prop),
				node: decl,
				result,
				ruleName,
				word: decl.prop,
			})
		})
	}

	rule.ruleName = ruleName
	rule.messages = messages
	rule.meta = meta
	return { ruleName, rule }
})()

module.exports = [
	{ ruleName: noDirectNeoVar.ruleName, rule: noDirectNeoVar.rule },
	{ ruleName: themedColorVarsOnly.ruleName, rule: themedColorVarsOnly.rule },
]
