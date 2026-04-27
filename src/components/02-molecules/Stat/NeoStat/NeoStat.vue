<script setup lang="ts">
import { computed } from 'vue'
import type { NeoStatProps } from './NeoStatTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoStatProps>()

const classes = computed(() => {
	const statClasses = getClassNames({
		component: 'NeoStat',
		modifiers: [props.size ?? 'md'],
		additional: props.class,
	})
	const themedClasses = props.color
		? getClassNames({ component: 'Themed', modifiers: [props.color] })
		: ''
	return themedClasses ? `${statClasses} ${themedClasses}` : statClasses
})

const style = computed(() => {
	if (!props.color) return undefined
	return { '--NeoStat-color-value': 'var(--neo-theme-colorAccessible)' }
})
</script>

<template>
	<div :class="classes" :style="style">
		<p class="NeoStat-value">{{ props.value }}</p>
		<p class="NeoStat-label">{{ props.label }}</p>
	</div>
</template>

<style scoped>
@import url('./NeoStat-themed.css');
@import url('./NeoStat-layout.css');

.NeoStat {
	display: flex;
	flex-direction: column;
	gap: var(--NeoStat-sizing-gap);
}

.NeoStat-value {
	color: var(--NeoStat-color-value);
	font-size: var(--NeoStat-sizing-valueSize);
	font-weight: var(--NeoStat-fontWeight-value);
	letter-spacing: -0.02em;
	line-height: var(--NeoStat-lineHeight-value);
	margin: 0;
	overflow-wrap: break-word;
}

.NeoStat-label {
	color: var(--NeoStat-color-label);
	font-size: var(--NeoStat-sizing-labelSize);
	line-height: var(--NeoStat-lineHeight-label);
	margin: 0;
	overflow-wrap: break-word;
}
</style>
