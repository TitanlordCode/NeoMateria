<script setup lang="ts">
import { computed } from 'vue'
import type { NeoBadgeProps, NeoBadgeSlots } from './NeoBadgeTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoBadgeProps>()

defineSlots<NeoBadgeSlots>()

const emit = defineEmits<{
	/** Emitted when the dismiss button is clicked. Only fired when `dismissible` is `true`. */
	dismiss: []
}>()

const classes = computed(() => {
	const badgeClasses = getClassNames({
		component: 'NeoBadge',
		modifiers: [
			props.size ?? 'medium',
			props.variant ?? 'solid',
			props.rounded ? 'rounded' : '',
			props.dismissible ? 'dismissible' : '',
		],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${badgeClasses} ${themedClasses}`
})
</script>

<template>
	<span :class="classes" role="status">
		<slot v-if="variant !== 'dot'">{{ props.text }}</slot>
		<button
			v-if="props.dismissible"
			type="button"
			class="NeoBadge-dismiss"
			aria-label="Dismiss"
			@click="emit('dismiss')"
		>
			×
		</button>
	</span>
</template>

<style scoped>
@import url('./NeoBadge-layout.css');
@import url('./NeoBadge-themed.css');

.NeoBadge {
	align-items: center;
	background: var(--NeoBadge-color-background);
	border-color: var(--NeoBadge-color-border);
	border-radius: var(--NeoBadge-sizing-borderRadius);
	border-style: solid;
	border-width: var(--NeoBadge-sizing-borderWidth);
	color: var(--NeoBadge-color-text);
	display: inline-flex;
	font-family: inherit;
	font-size: var(--NeoBadge-sizing-fontSize);
	font-weight: 600;
	justify-content: center;
	line-height: 1;
	padding: var(--NeoBadge-sizing-padding);
	text-align: center;
	white-space: nowrap;
}

.NeoBadge--dot {
	block-size: var(--NeoBadge-sizing-dotSize);
	inline-size: var(--NeoBadge-sizing-dotSize);
	padding: 0;
}

.NeoBadge--dismissible {
	gap: var(--neo-gap-sm);
	padding-inline-end: var(--neo-spacing-core-sm);
}

.NeoBadge-dismiss {
	align-items: center;
	background: transparent;
	block-size: 1em;
	border: none;
	color: inherit;
	cursor: pointer;
	display: inline-flex;
	font-size: 1.3em;
	justify-content: center;
	line-height: 0;
	padding: 0;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.7;
	}

	&:focus-visible {
		opacity: 0.7;
		outline: 2px solid currentcolor;
		outline-offset: 1px;
	}
}
</style>
