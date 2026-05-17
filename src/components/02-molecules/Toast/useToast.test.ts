import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useToast } from './useToast'
import { containerMaxRef, toasts, dismissToast } from './toastStore'

const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0))

describe('useToast', () => {
	beforeEach(() => {
		dismissToast()
		containerMaxRef.value = 5
	})

	afterEach(() => {
		dismissToast()
		containerMaxRef.value = 5
	})

	describe('severity methods', () => {
		it('success pushes with green / 5000ms / polite', () => {
			useToast().success('Saved.')
			expect(toasts.value).toHaveLength(1)
			expect(toasts.value[0]).toMatchObject({
				severity: 'success',
				message: 'Saved.',
				color: 'green',
				duration: 5000,
				ariaLive: 'polite',
				closable: true,
				showIcon: true,
			})
		})

		it('info pushes with blue / 5000ms / polite', () => {
			useToast().info('Update available.')
			expect(toasts.value[0]).toMatchObject({
				severity: 'info',
				color: 'blue',
				duration: 5000,
				ariaLive: 'polite',
			})
		})

		it('warning pushes with amber / 8000ms / assertive', () => {
			useToast().warning('Session expires soon.')
			expect(toasts.value[0]).toMatchObject({
				severity: 'warning',
				color: 'amber',
				duration: 8000,
				ariaLive: 'assertive',
			})
		})

		it('error pushes with red / 0ms (persistent) / assertive', () => {
			useToast().error('Save failed.')
			expect(toasts.value[0]).toMatchObject({
				severity: 'error',
				color: 'red',
				duration: 0,
				ariaLive: 'assertive',
			})
		})

		it('returns the new toast id', () => {
			const id = useToast().success('Saved.')
			expect(id).toBe(toasts.value[0].id)
		})

		it('generates unique ids for sequential toasts', () => {
			const toast = useToast()
			const a = toast.success('a')
			const b = toast.success('b')
			expect(a).not.toBe(b)
		})
	})

	describe('options', () => {
		it('overrides color', () => {
			useToast().success('x', { color: 'purple' })
			expect(toasts.value[0].color).toBe('purple')
		})

		it('overrides duration', () => {
			useToast().success('x', { duration: 1000 })
			expect(toasts.value[0].duration).toBe(1000)
		})

		it('overrides ariaLive', () => {
			useToast().success('x', { ariaLive: 'assertive' })
			expect(toasts.value[0].ariaLive).toBe('assertive')
		})

		it('icon: false hides the icon', () => {
			useToast().success('x', { icon: false })
			expect(toasts.value[0].showIcon).toBe(false)
		})

		it('closable: false makes the toast non-dismissable', () => {
			useToast().success('x', { closable: false })
			expect(toasts.value[0].closable).toBe(false)
		})

		it('attaches an action', () => {
			const onClick = vi.fn()
			useToast().info('Archived.', { action: { label: 'Undo', onClick } })
			expect(toasts.value[0].action).toEqual({ label: 'Undo', onClick })
		})
	})

	describe('custom()', () => {
		it('defaults to info severity when none given', () => {
			useToast().custom('Plain message.')
			expect(toasts.value[0]).toMatchObject({ severity: 'info', color: 'blue' })
		})

		it('respects an explicit severity', () => {
			useToast().custom('Heads up.', { severity: 'warning' })
			expect(toasts.value[0]).toMatchObject({ severity: 'warning', color: 'amber' })
		})
	})

	describe('dismiss()', () => {
		it('removes a single toast by id', () => {
			const toast = useToast()
			const a = toast.success('a')
			toast.success('b')
			toast.dismiss(a)
			expect(toasts.value).toHaveLength(1)
			expect(toasts.value[0].message).toBe('b')
		})

		it('clears all when called with no id', () => {
			const toast = useToast()
			toast.success('a')
			toast.error('b')
			toast.dismiss()
			expect(toasts.value).toHaveLength(0)
		})

		it('is a no-op for an unknown id', () => {
			useToast().success('a')
			useToast().dismiss('does-not-exist')
			expect(toasts.value).toHaveLength(1)
		})
	})

	describe('max overflow', () => {
		it('evicts the oldest toast when the cap is exceeded', () => {
			containerMaxRef.value = 3
			const toast = useToast()
			toast.success('a')
			toast.success('b')
			toast.success('c')
			toast.success('d')
			expect(toasts.value).toHaveLength(3)
			expect(toasts.value.map((entry) => entry.message)).toEqual(['b', 'c', 'd'])
		})
	})

	describe('promise()', () => {
		it('shows a persistent loading toast immediately', () => {
			useToast().promise(new Promise(() => {}), {
				loading: 'Saving…',
				success: 'Saved!',
				error: 'Failed.',
			})
			expect(toasts.value).toHaveLength(1)
			expect(toasts.value[0]).toMatchObject({
				severity: 'info',
				message: 'Saving…',
				duration: 0,
				closable: false,
			})
		})

		it('replaces loading with success on resolve, preserving position', async () => {
			const toast = useToast()
			toast.success('other-before')
			toast.promise(Promise.resolve('done'), {
				loading: 'Saving…',
				success: 'Saved!',
				error: 'Failed.',
			})
			toast.success('other-after')
			const loadingId = toasts.value[1].id

			await flushPromises()

			expect(toasts.value).toHaveLength(3)
			expect(toasts.value[1].id).toBe(loadingId) // position preserved
			expect(toasts.value[1]).toMatchObject({ severity: 'success', message: 'Saved!' })
		})

		it('replaces loading with error on reject', async () => {
			useToast().promise(Promise.reject(new Error('nope')), {
				loading: 'Saving…',
				success: 'Saved!',
				error: 'Failed.',
			})

			await flushPromises()

			expect(toasts.value[0]).toMatchObject({
				severity: 'error',
				message: 'Failed.',
				duration: 0,
			})
		})

		it('passes the resolved value to a function success message', async () => {
			useToast().promise(Promise.resolve({ name: 'Alice' }), {
				loading: '…',
				success: (data) => `Welcome ${data.name}`,
				error: 'oops',
			})

			await flushPromises()

			expect(toasts.value[0].message).toBe('Welcome Alice')
		})

		it('passes the rejection reason to a function error message', async () => {
			useToast().promise(Promise.reject(new Error('boom')), {
				loading: '…',
				success: 'ok',
				error: (reason) => `Got: ${(reason as Error).message}`,
			})

			await flushPromises()

			expect(toasts.value[0].message).toBe('Got: boom')
		})

		it('returns the original promise', async () => {
			const original = Promise.resolve('result')
			const returned = useToast().promise(original, {
				loading: '…',
				success: 'ok',
				error: 'oops',
			})
			expect(returned).toBe(original)
			await expect(returned).resolves.toBe('result')
		})
	})
})
