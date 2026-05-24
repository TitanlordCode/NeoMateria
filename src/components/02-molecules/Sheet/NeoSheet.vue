<script setup lang="ts">
import { computed, nextTick, ref, watch, onMounted, onUnmounted } from 'vue'
import type { NeoSheetProps, NeoSheetSlots } from './NeoSheetTypes'
import { getClassNames } from '@/utils/classNames'
import { useSheetStack } from './useSheetStack'
import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'

const props = withDefaults(defineProps<NeoSheetProps>(), {
	variant: 'default',
	position: 'right',
	size: 'medium',
	open: false,
	closeOnOverlayClick: true,
	closeOnEscape: true,
	modal: true,
	// Must be undefined (not false) — Vue auto-defaults boolean props to false,
	// which would break the closeAriaLabel back-compat fallback below.
	showCloseButton: undefined,
})

defineSlots<NeoSheetSlots>()

const emit = defineEmits<{
	/** Emitted when the sheet should open or close. Receives the new boolean value. Must be handled to support overlay-click and Escape closing. */
	'update:open': [value: boolean]
}>()

const sheetRef = ref<HTMLElement | null>(null)
const previousActiveElement = ref<HTMLElement | null>(null)
const portalTarget = ref<string>('body')

const { register, unregister, updateSize, stackOffset, isTopSheet, stackIndex } = useSheetStack()

const SHEET_WIDTHS: Record<string, number> = { small: 280, medium: 380, large: 500, full: 9999 }
const SHEET_HEIGHTS: Record<string, number> = { small: 300, medium: 400, large: 500, full: 9999 }

const getSheetDimension = () => {
	const size = props.size ?? 'medium'
	return props.position === 'bottom' ? (SHEET_HEIGHTS[size] ?? 400) : (SHEET_WIDTHS[size] ?? 380)
}

const classes = computed(() => {
	const sheetClasses = getClassNames({
		component: 'NeoSheet',
		modifiers: [props.position, props.size, props.variant],
		states: [props.open ? 'open' : '', !isTopSheet.value && props.open ? 'stacked' : ''],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${sheetClasses} ${themedClasses}`
})

const sheetStyles = computed(() => {
	const styles: Record<string, string | number> = {}

	const baseZIndex = props.zIndex ?? 1000
	styles['--NeoSheet-sizing-zIndex'] = baseZIndex + stackIndex.value

	if (stackOffset.value > 0) {
		let transform = ''
		switch (props.position) {
			case 'left':
				transform = `translateX(${stackOffset.value}px)`
				break
			case 'right':
				transform = `translateX(-${stackOffset.value}px)`
				break
			case 'bottom':
				transform = `translateY(-${stackOffset.value}px)`
				break
		}
		styles.transform = transform
	}

	return styles
})

const overlayStyles = computed(() => {
	const baseZIndex = props.zIndex ?? 999
	return {
		'--NeoSheet-sizing-zIndex': baseZIndex + stackIndex.value,
		cursor: props.closeOnOverlayClick ? 'pointer' : 'not-allowed',
	}
})

const close = () => {
	emit('update:open', false)
}

const handleOverlayClick = () => {
	if (props.closeOnOverlayClick && isTopSheet.value) {
		close()
	}
}

const handleKeydown = (event: KeyboardEvent) => {
	if (!props.open || !isTopSheet.value) return

	if (event.key === 'Escape' && props.closeOnEscape) {
		event.preventDefault()
		close()
		return
	}

	if (event.key === 'Tab' && props.modal && sheetRef.value) {
		const focusableElements = sheetRef.value.querySelectorAll<HTMLElement>(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
		)
		const firstElement = focusableElements[0]
		const lastElement = focusableElements[focusableElements.length - 1]

		if (event.shiftKey && document.activeElement === firstElement) {
			event.preventDefault()
			lastElement?.focus()
		} else if (!event.shiftKey && document.activeElement === lastElement) {
			event.preventDefault()
			firstElement?.focus()
		}
	}
}

const focusFirstElement = () => {
	if (!sheetRef.value || !props.modal) return

	nextTick(() => {
		const focusableElements = sheetRef.value?.querySelectorAll<HTMLElement>(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
		)
		if (focusableElements && focusableElements.length > 0) {
			focusableElements[0].focus()
		} else {
			sheetRef.value?.focus()
		}
	})
}

const restoreFocus = () => {
	if (previousActiveElement.value) {
		previousActiveElement.value.focus()
		previousActiveElement.value = null
	}
}

watch(
	() => props.open,
	(isOpen) => {
		if (isOpen) {
			register(getSheetDimension(), props.position)
			previousActiveElement.value = document.activeElement as HTMLElement
			focusFirstElement()
			if (props.modal) {
				document.body.style.overflow = 'hidden'
			}
		} else {
			unregister()
			restoreFocus()
			document.body.style.overflow = ''
		}
	},
)

watch([() => props.size, () => props.position], () => {
	if (props.open) updateSize(getSheetDimension(), props.position)
})

const resolvePortalTarget = (): string => {
	if (props.teleportTo) return props.teleportTo
	return 'body'
}

onMounted(() => {
	portalTarget.value = resolvePortalTarget()
	document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
	document.removeEventListener('keydown', handleKeydown)
	document.body.style.overflow = ''
	unregister()
})
</script>

<template>
	<Teleport :to="portalTarget">
		<Transition name="NeoSheet-overlay">
			<div
				v-if="props.open && props.modal"
				class="NeoSheet-overlay"
				:class="{ 'is-stacked': !isTopSheet }"
				:style="overlayStyles"
				@click="handleOverlayClick"
			/>
		</Transition>
		<Transition :name="`NeoSheet-slide-${props.position}`">
			<div
				v-if="props.open"
				ref="sheetRef"
				:class="classes"
				:style="sheetStyles"
				role="dialog"
				:aria-modal="props.modal"
				:aria-label="props.ariaLabel"
				:aria-labelledby="props.ariaLabelledby"
				tabindex="-1"
			>
				<div v-if="props.showCloseButton ?? Boolean(props.closeAriaLabel)" class="NeoSheet-header">
					<NeoButton
						:color="props.color ?? 'blue'"
						size="small"
						variant="ghost"
						:ariaLabel="props.closeAriaLabel ?? 'Close'"
						@click="close"
					>
						<slot v-if="!!$slots.closeIcon" name="closeIcon" />
						<template v-else>×</template>
					</NeoButton>
				</div>
				<div class="NeoSheet-content" tabindex="0">
					<slot />
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped>
@import url('./NeoSheet-themed.css');
@import url('./NeoSheet-layout.css');

.NeoSheet--filled {
	color: var(--NeoSheet-color-text);
}

.NeoSheet-overlay {
	--NeoSheet-sizing-offsetBlockStart: var(--NeoNavigation-sizing-blockSize, 0);

	backdrop-filter: blur(4px);
	background-color: var(--NeoSheet-color-overlay);
	inline-size: 100%;
	inset-block-end: 0;
	inset-block-start: var(--NeoSheet-sizing-offsetBlockStart);
	inset-inline-start: 0;
	position: fixed;
	z-index: var(--NeoSheet-sizing-zIndex, 999);
}

.NeoSheet-overlay.is-stacked {
	background-color: transparent;
}

.NeoSheet {
	--NeoSheet-sizing-offsetBlockStart: var(--NeoNavigation-sizing-blockSize, 0);

	background-color: var(--NeoSheet-color-background);
	box-shadow: var(--NeoSheet-color-shadow);
	display: flex;
	flex-direction: column;
	font-family:
		system-ui,
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		'Helvetica Neue',
		Arial,
		sans-serif;
	position: fixed;
	transition: transform 0.3s ease;
	z-index: var(--NeoSheet-sizing-zIndex, 1000);
}

.NeoSheet.is-stacked {
	filter: brightness(0.95);
}

.NeoSheet-header {
	display: flex;
	flex-shrink: 0;
	justify-content: flex-end;
	padding-block-start: var(--NeoSheet-sizing-padding);
	padding-inline: var(--NeoSheet-sizing-padding);
}

.NeoSheet-content {
	display: flex;
	flex: 1;
	flex-direction: column;
	overflow-y: auto;
	padding: var(--NeoSheet-sizing-padding);
}

.NeoSheet-header + .NeoSheet-content {
	padding-block-start: 0;
}

.NeoSheet--left {
	inline-size: var(--NeoSheet-sizing-width);
	inset-block-end: 0;
	inset-block-start: var(--NeoSheet-sizing-offsetBlockStart);
	inset-inline-start: 0;
	max-inline-size: 100vw;
}

.NeoSheet--right {
	inline-size: var(--NeoSheet-sizing-width);
	inset-block-end: 0;
	inset-block-start: var(--NeoSheet-sizing-offsetBlockStart);
	inset-inline-end: 0;
	max-inline-size: 100vw;
}

.NeoSheet--bottom {
	block-size: var(--NeoSheet-sizing-height);
	inline-size: 100%;
	inset-block-end: 0;
	inset-inline-start: 0;
	max-block-size: 90vh;
}

.NeoSheet-overlay-enter-active,
.NeoSheet-overlay-leave-active {
	transition: opacity 0.3s ease;
}

.NeoSheet-overlay-enter-from,
.NeoSheet-overlay-leave-to {
	opacity: 0;
}

.NeoSheet-slide-left-enter-active,
.NeoSheet-slide-left-leave-active {
	transition: transform 0.3s ease;
}

.NeoSheet-slide-left-enter-from,
.NeoSheet-slide-left-leave-to {
	transform: translateX(-100%);
}

.NeoSheet-slide-right-enter-active,
.NeoSheet-slide-right-leave-active {
	transition: transform 0.3s ease;
}

.NeoSheet-slide-right-enter-from,
.NeoSheet-slide-right-leave-to {
	transform: translateX(100%);
}

.NeoSheet-slide-bottom-enter-active,
.NeoSheet-slide-bottom-leave-active {
	transition: transform 0.3s ease;
}

.NeoSheet-slide-bottom-enter-from,
.NeoSheet-slide-bottom-leave-to {
	transform: translateY(100%);
}
</style>
