<script setup lang="ts">
import { ref } from 'vue'
import type { NeoTooltipProps, NeoTooltipSlots } from './NeoTooltipTypes'

const props = withDefaults(defineProps<NeoTooltipProps>(), {
	placement: 'top',
	openDelay: 0,
	visible: false,
})

defineSlots<NeoTooltipSlots>()

const isVisible = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const handleEnter = () => {
	if (props.visible) return
	if (props.openDelay > 0) {
		timer = setTimeout(() => {
			isVisible.value = true
		}, props.openDelay)
	} else {
		isVisible.value = true
	}
}

const handleLeave = () => {
	if (props.visible) return
	if (timer) {
		clearTimeout(timer)
		timer = null
	}
	isVisible.value = false
}

const show = () => (isVisible.value = true)
const hide = () => (isVisible.value = false)
</script>

<template>
	<div
		class="NeoTooltip-wrapper"
		@mouseenter="handleEnter"
		@mouseleave="handleLeave"
		@focusin="show"
		@focusout="hide"
	>
		<slot name="activator" />
		<div
			v-show="visible || isVisible"
			class="NeoTooltip"
			:class="`NeoTooltip--${placement}`"
			role="tooltip"
		>
			{{ text }}
		</div>
	</div>
</template>

<style scoped>
.NeoTooltip-wrapper {
	display: inline-flex;
	position: relative;
}

.NeoTooltip {
	--NeoTooltip-color-bg: var(--neo-color-grey900);
	--NeoTooltip-color-text: var(--neo-color-white);
	--NeoTooltip-spacing-padding: var(--neo-spacing-core-xs) var(--neo-spacing-core-sm);
	--NeoTooltip-sizing-radius: var(--neo-radius-sm);
	--NeoTooltip-sizing-gap: 6px;
	--NeoTooltip-sizing-fontSize: var(--neo-fontSize-textSm);

	@mixin onDark {
		--NeoTooltip-color-bg: var(--neo-color-grey700);
		--NeoTooltip-color-text: var(--neo-color-white);
	}

	background-color: var(--NeoTooltip-color-bg);
	border-radius: var(--NeoTooltip-sizing-radius);
	color: var(--NeoTooltip-color-text);
	font-size: var(--NeoTooltip-sizing-fontSize);
	padding: var(--NeoTooltip-spacing-padding);
	pointer-events: none;
	position: absolute;
	white-space: nowrap;
	z-index: 9999;
}

.NeoTooltip--top {
	inset-block-end: calc(100% + var(--NeoTooltip-sizing-gap));
	inset-inline-start: 50%;
	transform: translateX(-50%);
}

.NeoTooltip--bottom {
	inset-block-start: calc(100% + var(--NeoTooltip-sizing-gap));
	inset-inline-start: 50%;
	transform: translateX(-50%);
}

.NeoTooltip--left {
	inset-block-start: 50%;
	inset-inline-end: calc(100% + var(--NeoTooltip-sizing-gap));
	transform: translateY(-50%);
}

.NeoTooltip--right {
	inset-block-start: 50%;
	inset-inline-start: calc(100% + var(--NeoTooltip-sizing-gap));
	transform: translateY(-50%);
}
</style>
