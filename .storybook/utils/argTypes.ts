export const hiddenArgType = { table: { disable: true } } as const

export const ariaLabelArgType = {
	ariaLabel: {
		control: 'text',
		description: 'Accessible label read by screen readers. Required when the component has no visible text label.',
		table: { category: 'Accessibility' },
	},
} as const

export const disabledArgType = {
	disabled: {
		control: 'boolean',
		description: 'Prevents interaction and applies a disabled visual style. Does not suppress focus for keyboard users — use `aria-disabled` semantics where needed.',
		table: { category: 'State' },
	},
} as const
