export const breakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
} as const

export type BreakpointKey = keyof typeof breakpoints

export const mediaQueries = {
	sm: `(width >= ${breakpoints.sm}px)`,
	md: `(width >= ${breakpoints.md}px)`,
	lg: `(width >= ${breakpoints.lg}px)`,
	xl: `(width >= ${breakpoints.xl}px)`,
} as const
