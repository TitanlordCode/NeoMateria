<script setup lang="ts">
import { computed } from 'vue'
import type { NeoBadgeProps } from './NeoBadgeTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoBadgeProps>()

const classes = computed(() => {
	const badgeClasses = getClassNames({
		component: 'NeoBadge',
		modifiers: [props.size ?? 'medium', props.variant ?? 'solid', props.rounded ? 'rounded' : ''],
		additional: props.class,
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'grey500'],
	})
	return `${badgeClasses} ${themedClasses}`
})
</script>

<template>
	<span :class="classes" role="status">
		<slot>{{ props.text }}</slot>
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
</style>
