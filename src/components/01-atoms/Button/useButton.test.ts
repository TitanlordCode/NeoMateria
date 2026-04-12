import { describe, it, expect } from 'vitest'
import { reactive, nextTick } from 'vue'
import { useButton } from './useButton'
import type { UseButtonOptions } from './useButton'

describe('useButton', () => {
	it('generates base classes with defaults', () => {
		const { classes } = useButton({})
		expect(classes.value).toBe('NeoButton NeoButton--medium NeoButton--primary Themed Themed--blue')
	})

	it('applies custom size', () => {
		const { classes } = useButton({ size: 'large' })
		expect(classes.value).toContain('NeoButton--large')
		expect(classes.value).not.toContain('NeoButton--medium')
	})

	it('applies custom variant', () => {
		const { classes } = useButton({ variant: 'secondary' })
		expect(classes.value).toContain('NeoButton--secondary')
		expect(classes.value).not.toContain('NeoButton--primary')
	})

	it('applies custom color', () => {
		const { classes } = useButton({ color: 'red' })
		expect(classes.value).toContain('Themed--red')
		expect(classes.value).not.toContain('Themed--blue')
	})

	it('applies rounded modifier when true', () => {
		const { classes } = useButton({ rounded: true })
		expect(classes.value).toContain('NeoButton--rounded')
	})

	it('does not apply rounded modifier when false', () => {
		const { classes } = useButton({ rounded: false })
		expect(classes.value).not.toContain('NeoButton--rounded')
	})

	it('applies fullWidth modifier when true', () => {
		const { classes } = useButton({ fullWidth: true })
		expect(classes.value).toContain('NeoButton--fullWidth')
	})

	it('applies pressed modifier when true', () => {
		const { classes } = useButton({ pressed: true })
		expect(classes.value).toContain('NeoButton--pressed')
	})

	it('is reactive to color changes', async () => {
		const props = reactive<UseButtonOptions>({ color: 'blue' })
		const { classes } = useButton(props)
		expect(classes.value).toContain('Themed--blue')
		props.color = 'red'
		await nextTick()
		expect(classes.value).toContain('Themed--red')
		expect(classes.value).not.toContain('Themed--blue')
	})

	it('is reactive to boolean prop changes', async () => {
		const props = reactive<UseButtonOptions>({ pressed: false })
		const { classes } = useButton(props)
		expect(classes.value).not.toContain('NeoButton--pressed')
		props.pressed = true
		await nextTick()
		expect(classes.value).toContain('NeoButton--pressed')
	})
})
