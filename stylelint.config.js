module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
	plugins: ['stylelint-order'],
	overrides: [
		{
			files: ['**/*.vue', '**/*.html', '**/*.css'],
			customSyntax: 'postcss-html',
		},
	],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['define-mixin'],
			},
		],
		'length-zero-no-unit': true,
		'order/order': ['custom-properties', 'declarations'],
		'order/properties-alphabetical-order': true,
		'custom-property-pattern':
			'^(neo|[A-Z][a-zA-Z0-9]*)-(color|sizing|fontSize|border|theme)-[a-zA-Z0-9]+(-[a-zA-Z0-9]+)?$',
		'selector-class-pattern':
			'^(is-[a-z]+|[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*(?:--[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)?)$',
	},
}
