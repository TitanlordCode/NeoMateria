import { describe, it, expect } from 'vitest'

/** Catches props that only exist in one branch of a discriminated union (e.g. `requiredText`), which silently fall out of the controls table. */

const stories = import.meta.glob('./components/**/*.stories.tsx', { eager: true }) as Record<
	string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	{ default: any }
>

// Documented globally (in .storybook/preview.ts) or framework-provided.
const EXEMPT_PROPS = new Set(['color', 'class'])

type Gap = { story: string; prop: string; reason: string }
const gaps: Gap[] = []

for (const [path, mod] of Object.entries(stories)) {
	const meta = mod.default
	const component = meta?.component
	if (!component?.props) continue

	const propNames: string[] = Array.isArray(component.props)
		? component.props
		: Object.keys(component.props)
	const argTypes = meta.argTypes ?? {}

	for (const prop of propNames) {
		if (EXEMPT_PROPS.has(prop)) continue
		const argType = argTypes[prop]
		if (argType?.table?.disable) continue
		if (!argType) {
			gaps.push({ story: path, prop, reason: 'no argType entry' })
		} else if (!argType.description) {
			gaps.push({ story: path, prop, reason: 'missing description' })
		} else if (!argType.table?.category) {
			gaps.push({ story: path, prop, reason: 'missing table.category' })
		}
	}
}

describe('argType coverage', () => {
	it('every documented prop has a description and table.category', () => {
		const message = gaps.map((gap) => `  ${gap.story} → "${gap.prop}": ${gap.reason}`).join('\n')
		expect(gaps, `\n${message}\n\n${gaps.length} gap(s)`).toEqual([])
	})
})
