module.exports = {
	plugins: {
		'postcss-mixins': {
			mixinsDir: 'src/assets/styles/mixins',
		},
		'postcss-pxtorem': {
			rootValue: 16,
			unitPrecision: 5,
			propList: ['*'],
			selectorBlackList: [],
			replace: true,
			mediaQuery: false,
			minPixelValue: 0,
		},
	},
}
