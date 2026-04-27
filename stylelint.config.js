module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
	plugins: ['stylelint-order', './stylelint-plugins/neo-materia.js'],
	overrides: [
		{
			files: ['**/*.vue', '**/*.html'],
			customSyntax: 'postcss-html',
		},
		{
			// Layout and themed CSS files must only contain CSS custom property declarations.
			// Actual CSS rules belong in the component's .vue <style scoped> block.
			files: ['**/*-layout.css', '**/*-themed.css'],
			rules: {
				'property-allowed-list': ['/^--/'],
			},
		},
		{
			// Scrollbar pseudo-elements (::-webkit-scrollbar-*) require physical width/height —
			// no logical property equivalent exists. Nesting inside @define-mixin also causes
			// false positives for scoping-root and position-declaration rules.
			files: ['src/assets/styles/mixins/scrollbar.css'],
			rules: {
				'nesting-selector-no-missing-scoping-root': null,
				'no-invalid-position-declaration': null,
				'property-disallowed-list': null,
			},
		},
		{
			// Vendor-prefixed -webkit-line-clamp/-webkit-box-orient must precede their standard
			// counterparts for progressive enhancement — alphabetical order conflicts with this.
			files: ['src/assets/styles/mixins/lineClamp.css'],
			rules: {
				'order/properties-alphabetical-order': null,
			},
		},
		{
			// --neo-is-dark is an internal theming mechanism variable consumed only via mixins,
			// not a component token — the naming pattern does not apply.
			files: ['src/assets/styles/mixins/theming.css'],
			rules: {
				'custom-property-pattern': null,
			},
		},
	],
	rules: {
		'neo-materia/no-direct-neo-var-in-property': true,
		'neo-materia/themed-css-color-vars-only': true,
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
