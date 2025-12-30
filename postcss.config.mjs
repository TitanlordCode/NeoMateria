import path from 'path'
import { fileURLToPath } from 'url'
import postcssMixins from 'postcss-mixins'
import postcssPxToRem from 'postcss-pxtorem'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
	plugins: [
		postcssMixins({
			mixinsFiles: [
				path.join(__dirname, 'src/assets/styles/mixins/breakpoints.css'),
				path.join(__dirname, 'src/assets/styles/mixins/lineClamp.css'),
				path.join(__dirname, 'src/assets/styles/mixins/scrollbar.css'),
				path.join(__dirname, 'src/assets/styles/mixins/theming.css'),
			],
		}),
		postcssPxToRem({
			rootValue: 16,
			unitPrecision: 5,
			propList: ['*'],
			selectorBlackList: [],
			replace: true,
			mediaQuery: false,
			minPixelValue: 0,
		}),
	],
}
