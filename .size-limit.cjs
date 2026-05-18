/**
 * Bundle-size budgets enforced in CI. Measures what a typical consumer would
 * actually ship after webpack/rollup + brotli — so changes that bloat one
 * import path (e.g. dragging in a heavy peer) are caught before publish.
 *
 * Update the `limit` values when an addition is justified. Tightening them
 * deliberately as the library matures is also encouraged.
 */
module.exports = [
	{
		name: 'Full library (full import)',
		path: 'dist/index.js',
		import: '*',
		limit: '42 KB',
	},
	{
		name: 'NeoButton only (tree-shaken)',
		path: 'dist/index.js',
		import: '{ NeoButton }',
		limit: '7 KB',
	},
	{
		name: 'useToast + NeoToastContainer (tree-shaken)',
		path: 'dist/index.js',
		import: '{ useToast, NeoToastContainer }',
		limit: '20 KB',
	},
	{
		name: 'NeoCallout (tree-shaken — used by consumers as inline message)',
		path: 'dist/index.js',
		import: '{ NeoCallout }',
		limit: '6 KB',
	},
	{
		name: 'Stylesheet (full CSS)',
		path: 'dist/neo-materia.css',
		limit: '21 KB',
	},
]
