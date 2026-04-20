module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
	plugins: ['stylelint-order'],
	overrides: [
		{
			files: ['**/*.vue', '**/*.html', '**/*.css'],
			customSyntax: 'postcss-html',
		},
		{
			// Layout and themed CSS files must only contain CSS custom property declarations.
			// Actual CSS rules belong in the component's .vue <style scoped> block.
			files: ['**/*-layout.css', '**/*-themed.css'],
			rules: {
				'property-allowed-list': [],
			},
		},
	],
	rules: {
		'declaration-block-no-redundant-longhand-properties': null,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['define-mixin', 'mixin'],
			},
		],
		'length-zero-no-unit': true,
		'order/order': ['custom-properties', 'declarations'],
		'order/properties-alphabetical-order': true,
		'custom-property-pattern':
			'^(neo|[A-Z][a-zA-Z0-9]*)-(color|sizing|fontSize|fontFamily|fontWeight|lineHeight|border|theme|spacing|gap|radius)(-[a-zA-Z0-9]+)+$',
		'selector-class-pattern':
			'^(is-[a-z]+|[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*(?:--[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)?)$',
		'property-disallowed-list': [
			[
				// Disallow physical properties in favor of logical properties
				'width',
				'min-width',
				'max-width',
				'height',
				'min-height',
				'max-height',
				'margin-left',
				'margin-right',
				'margin-top',
				'margin-bottom',
				'padding-left',
				'padding-right',
				'padding-top',
				'padding-bottom',
				'border-left',
				'border-right',
				'border-top',
				'border-bottom',
				'border-top-left-radius',
				'border-top-right-radius',
				'border-bottom-left-radius',
				'border-bottom-right-radius',
				'left',
				'right',
				'top',
				'bottom',
			],
			{
				message:
					'Use logical properties instead of physical properties (e.g., inline-size instead of width, margin-inline-start instead of margin-left)',
			},
		],
	},
}
