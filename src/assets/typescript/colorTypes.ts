import type { Color } from './colors'

// Colors valid for use as surface or accent colors on light backgrounds.
// White is excluded because it is invisible against the default white canvas.
//
// For dark backgrounds (borders, focus rings, filled surfaces on dark):
//   - Wrap the container in `u-onDark` — the @mixin onDark in themed CSS
//     automatically adjusts component colors to accessible lighter shades.
//   - Use 'black' as the color prop — the black→white flip in the theme
//     system renders it white inside a dark/colored setOnDark context.
//
// 'white' as a color prop is never the right mechanism for dark-mode adaptation.
export type SurfaceColor = Exclude<Color, 'white'>
