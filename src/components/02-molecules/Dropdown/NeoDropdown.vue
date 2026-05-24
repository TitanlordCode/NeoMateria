<script setup lang="ts">
import {
	computed,
	nextTick,
	onMounted,
	onUnmounted,
	ref,
	useId,
	watch,
	type CSSProperties,
} from 'vue'
import type { NeoDropdownProps, NeoDropdownSlots } from './NeoDropdownTypes'

const props = withDefaults(defineProps<NeoDropdownProps>(), {
	placement: 'bottom-start',
	closeOnEscape: true,
	closeOnClickOutside: true,
})

defineSlots<NeoDropdownSlots>()

const emit = defineEmits<{
	/** Emitted whenever the open state changes. Receives the new boolean value. */
	'update:open': [isOpen: boolean]
}>()

const internalOpen = ref(props.defaultOpen ?? false)
const panelId = useId()
const wrapperRef = ref<HTMLElement | null>(null)
const panelRef = ref<HTMLElement | null>(null)
const teleportedPanelStyles = ref<CSSProperties>({})

const isOpen = computed(() => props.open ?? internalOpen.value)
const isTeleported = computed(() => Boolean(props.teleportTo))

const toggle = () => {
	const nextValue = !isOpen.value
	internalOpen.value = nextValue
	emit('update:open', nextValue)
}

const close = () => {
	if (!isOpen.value) return
	internalOpen.value = false
	emit('update:open', false)
}

const handleKeydown = (event: KeyboardEvent) => {
	if (props.closeOnEscape && event.key === 'Escape' && isOpen.value) {
		event.stopPropagation()
		close()
	}
}

const PANEL_OFFSET = 4
const updateTeleportedPosition = () => {
	if (!isTeleported.value || !isOpen.value || !wrapperRef.value) return
	const triggerRect = wrapperRef.value.getBoundingClientRect()
	const panelHeight = panelRef.value?.offsetHeight ?? 0
	const styles: CSSProperties = { position: 'fixed' }
	switch (props.placement) {
		case 'bottom-start':
			styles.top = `${triggerRect.bottom + PANEL_OFFSET}px`
			styles.left = `${triggerRect.left}px`
			break
		case 'bottom-end':
			styles.top = `${triggerRect.bottom + PANEL_OFFSET}px`
			styles.right = `${window.innerWidth - triggerRect.right}px`
			break
		case 'top-start':
			styles.top = `${triggerRect.top - panelHeight - PANEL_OFFSET}px`
			styles.left = `${triggerRect.left}px`
			break
		case 'top-end':
			styles.top = `${triggerRect.top - panelHeight - PANEL_OFFSET}px`
			styles.right = `${window.innerWidth - triggerRect.right}px`
			break
	}
	teleportedPanelStyles.value = styles
}

watch(isOpen, async (open) => {
	if (!isTeleported.value) return
	if (open) {
		await nextTick()
		updateTeleportedPosition()
		// Second tick: panelHeight is only measurable after the first render, needed for top-* placements.
		await nextTick()
		updateTeleportedPosition()
		window.addEventListener('scroll', updateTeleportedPosition, true)
		window.addEventListener('resize', updateTeleportedPosition)
	} else {
		window.removeEventListener('scroll', updateTeleportedPosition, true)
		window.removeEventListener('resize', updateTeleportedPosition)
	}
})

onMounted(() => {
	document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
	document.removeEventListener('keydown', handleKeydown)
	window.removeEventListener('scroll', updateTeleportedPosition, true)
	window.removeEventListener('resize', updateTeleportedPosition)
})
</script>

<template>
	<div ref="wrapperRef" class="NeoDropdown">
		<slot name="trigger" :is-open="isOpen" :toggle="toggle" />
		<template v-if="!isTeleported">
			<div v-if="isOpen && props.closeOnClickOutside" class="NeoDropdown-backdrop" @click="close" />
			<Transition name="NeoDropdown-panel">
				<div
					v-if="isOpen"
					:id="panelId"
					class="NeoDropdown-panel"
					:class="`NeoDropdown-panel--${props.placement}`"
				>
					<slot />
				</div>
			</Transition>
		</template>
		<Teleport v-else :to="props.teleportTo">
			<div v-if="isOpen && props.closeOnClickOutside" class="NeoDropdown-backdrop" @click="close" />
			<Transition name="NeoDropdown-panel">
				<div
					v-if="isOpen"
					:id="panelId"
					ref="panelRef"
					class="NeoDropdown-panel NeoDropdown-panel--teleported"
					:class="`NeoDropdown-panel--${props.placement}`"
					:style="teleportedPanelStyles"
				>
					<slot />
				</div>
			</Transition>
		</Teleport>
	</div>
</template>

<style scoped>
@import url('./NeoDropdown-themed.css');
@import url('./NeoDropdown-layout.css');

.NeoDropdown {
	display: inline-flex;
	position: relative;
}

.NeoDropdown-backdrop {
	inset: 0;
	position: fixed;
	z-index: 199;
}

.NeoDropdown-panel {
	align-items: center;
	background-color: var(--NeoDropdown-color-panelBackground);
	border: 1px solid var(--NeoDropdown-color-panelBorder);
	border-radius: var(--NeoDropdown-sizing-borderRadius);
	box-shadow: 0 4px 16px var(--NeoDropdown-color-panelShadow);
	color: var(--NeoDropdown-color-panelText);
	display: flex;
	flex-direction: column;
	gap: var(--NeoDropdown-sizing-panelGap);
	inline-size: max-content;
	max-inline-size: var(--NeoDropdown-sizing-panelMaxInlineSize);
	padding: var(--NeoDropdown-sizing-panelPadding);
	position: absolute;
	z-index: 200;
}

/* Teleported panel uses inline `position: fixed` styles; neutralize the
   wrapper-anchored placement classes below. */
.NeoDropdown-panel--teleported {
	inset: auto;
}

.NeoDropdown-panel--bottom-start {
	inset-block-start: calc(100% + var(--NeoDropdown-sizing-panelOffset));
	inset-inline-start: 0;
}

.NeoDropdown-panel--bottom-end {
	inset-block-start: calc(100% + var(--NeoDropdown-sizing-panelOffset));
	inset-inline-end: 0;
}

.NeoDropdown-panel--top-start {
	inset-block-end: calc(100% + var(--NeoDropdown-sizing-panelOffset));
	inset-inline-start: 0;
}

.NeoDropdown-panel--top-end {
	inset-block-end: calc(100% + var(--NeoDropdown-sizing-panelOffset));
	inset-inline-end: 0;
}

.NeoDropdown-panel-enter-active,
.NeoDropdown-panel-leave-active {
	transition:
		opacity 0.15s ease,
		transform 0.15s ease;
}

.NeoDropdown-panel-enter-from,
.NeoDropdown-panel-leave-to {
	opacity: 0;
	transform: translateY(calc(var(--NeoDropdown-sizing-panelSlideOffset) * -1));
}

.NeoDropdown-panel--top-start.NeoDropdown-panel-enter-from,
.NeoDropdown-panel--top-start.NeoDropdown-panel-leave-to,
.NeoDropdown-panel--top-end.NeoDropdown-panel-enter-from,
.NeoDropdown-panel--top-end.NeoDropdown-panel-leave-to {
	transform: translateY(var(--NeoDropdown-sizing-panelSlideOffset));
}
</style>
