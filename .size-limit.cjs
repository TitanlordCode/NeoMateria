/**
 * Bundle-size budgets enforced in CI. Measures what a typical consumer would
 * actually ship after webpack/rollup + brotli — so changes that bloat one
 * import path (e.g. dragging in a heavy peer) are caught before publish.
 *
 * Tree-shake budgets include each component's per-chunk CSS (auto-imported via
 * ESM side-effects after the cssCodeSplit refactor) plus the foundations CSS
 * that ships with the index entry. The previous budgets only measured JS.
 *
 * Update the `limit` values when an addition is justified. Tightening them
 * deliberately as the library matures is also encouraged.
 */
module.exports = [
	{
		name: 'Full library (full import — JS + all per-component CSS + foundations)',
		path: 'dist/index.js',
		import: '*',
		limit: '52 KB',
	},
	{
		name: 'NeoButton only (tree-shaken — JS + NeoButton CSS + foundations + transitive deps)',
		path: 'dist/index.js',
		import: '{ NeoButton }',
		limit: '22 KB',
	},
	{
		name: 'useToast + NeoToastContainer (tree-shaken)',
		path: 'dist/index.js',
		import: '{ useToast, NeoToastContainer }',
		limit: '33 KB',
	},
	{
		name: 'NeoCallout (tree-shaken — used by consumers as inline message)',
		path: 'dist/index.js',
		import: '{ NeoCallout }',
		limit: '21 KB',
	},
	{
		name: 'Stylesheet (full CSS aggregator — back-compat for old import path)',
		path: 'dist/neo-materia.css',
		limit: '19 KB',
	},
	{
		name: 'Stylesheet (foundations only — for cherry-picking consumers)',
		path: 'dist/assets/styles/globals.css',
		limit: '4 KB',
	},
]
