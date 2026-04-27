<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'
import type { NeoTooltipProps, NeoTooltipSlots } from './NeoTooltipTypes'

const props = withDefaults(defineProps<NeoTooltipProps>(), {
	placement: 'top',
	openDelay: 0,
	visible: false,
})

defineSlots<NeoTooltipSlots>()

const wrapperElement = ref<HTMLElement | null>(null)
const tooltipElement = ref<HTMLElement | null>(null)

// 'hidden': display:none via v-show
// 'measuring': display:block + visibility:hidden — measurable but invisible
// 'visible': fully shown
type Phase = 'hidden' | 'measuring' | 'visible'
const phase = ref<Phase>('hidden')
const position = ref({ top: 0, left: 0 })

let delayTimer: ReturnType<typeof setTimeout> | null = null

// Must match --NeoTooltip-sizing-gap in NeoTooltip-layout.css
const TOOLTIP_GAP = 6

const calculatePosition = () => {
	if (!wrapperElement.value || !tooltipElement.value) return

	const activator = wrapperElement.value.getBoundingClientRect()
	const tooltip = tooltipElement.value.getBoundingClientRect()
	const viewportWidth = window.innerWidth
	const viewportHeight = window.innerHeight

	let resolvedPlacement = props.placement

	// Flip to the opposite side if the preferred side has insufficient room
	if (resolvedPlacement === 'top' && activator.top < tooltip.height + TOOLTIP_GAP) {
		resolvedPlacement = 'bottom'
	} else if (
		resolvedPlacement === 'bottom' &&
		activator.bottom + tooltip.height + TOOLTIP_GAP > viewportHeight
	) {
		resolvedPlacement = 'top'
	} else if (resolvedPlacement === 'left' && activator.left < tooltip.width + TOOLTIP_GAP) {
		resolvedPlacement = 'right'
	} else if (
		resolvedPlacement === 'right' &&
		activator.right + tooltip.width + TOOLTIP_GAP > viewportWidth
	) {
		resolvedPlacement = 'left'
	}

	let top = 0
	let left = 0

	if (resolvedPlacement === 'top') {
		top = activator.top - tooltip.height - TOOLTIP_GAP
		left = activator.left + activator.width / 2 - tooltip.width / 2
	} else if (resolvedPlacement === 'bottom') {
		top = activator.bottom + TOOLTIP_GAP
		left = activator.left + activator.width / 2 - tooltip.width / 2
	} else if (resolvedPlacement === 'left') {
		top = activator.top + activator.height / 2 - tooltip.height / 2
		left = activator.left - tooltip.width - TOOLTIP_GAP
	} else {
		top = activator.top + activator.height / 2 - tooltip.height / 2
		left = activator.right + TOOLTIP_GAP
	}

	// Clamp to viewport so the panel never overflows any edge
	left = Math.max(TOOLTIP_GAP, Math.min(left, viewportWidth - tooltip.width - TOOLTIP_GAP))
	top = Math.max(TOOLTIP_GAP, Math.min(top, viewportHeight - tooltip.height - TOOLTIP_GAP))

	position.value = { top, left }
}

const showTooltip = async () => {
	phase.value = 'measuring'
	await nextTick()
	calculatePosition()
	phase.value = 'visible'
}

const hideTooltip = () => {
	phase.value = 'hidden'
}

const startShow = () => {
	if (props.visible) return
	if (delayTimer) clearTimeout(delayTimer)
	if (props.openDelay > 0) {
		delayTimer = setTimeout(showTooltip, props.openDelay)
	} else {
		showTooltip()
	}
}

const startHide = () => {
	if (props.visible) return
	if (delayTimer) {
		clearTimeout(delayTimer)
		delayTimer = null
	}
	hideTooltip()
}

const handleResize = () => {
	if (phase.value === 'visible') calculatePosition()
}

onMounted(async () => {
	window.addEventListener('resize', handleResize)
	if (props.visible) await showTooltip()
})

onUnmounted(() => {
	window.removeEventListener('resize', handleResize)
	if (delayTimer) clearTimeout(delayTimer)
})

watch(
	() => props.visible,
	async (value) => {
		if (value) await showTooltip()
		else hideTooltip()
	},
)
</script>

<template>
	<div
		ref="wrapperElement"
		class="NeoTooltip-wrapper"
		@mouseenter="startShow"
		@mouseleave="startHide"
		@focusin="startShow"
		@focusout="startHide"
	>
		<slot name="activator" />
		<div
			v-show="phase !== 'hidden'"
			ref="tooltipElement"
			class="NeoTooltip"
			role="tooltip"
			:style="{
				top: `${position.top}px`,
				left: `${position.left}px`,
				visibility: phase === 'measuring' ? 'hidden' : undefined,
			}"
		>
			{{ text }}
		</div>
	</div>
</template>

<style scoped>
@import url('./NeoTooltip-layout.css');
@import url('./NeoTooltip-themed.css');

.NeoTooltip-wrapper {
	display: inline-flex;
}

.NeoTooltip {
	background-color: var(--NeoTooltip-color-bg);
	border-radius: var(--NeoTooltip-sizing-radius);
	color: var(--NeoTooltip-color-text);
	font-size: var(--NeoTooltip-sizing-fontSize);
	padding: var(--NeoTooltip-spacing-padding);
	pointer-events: none;
	position: fixed;
	white-space: nowrap;
	z-index: 9999;
}
</style>
