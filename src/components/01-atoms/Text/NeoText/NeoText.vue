<script setup lang="ts">
import { computed } from 'vue'
import type { NeoTextProps, NeoTextSlots } from './NeoTextTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoTextProps>()
defineSlots<NeoTextSlots>()

const classes = computed(() => {
	const textClasses = getClassNames({
		component: 'NeoText',
		modifiers: [
			props.size ?? 'base',
			props.weight ? `weight-${props.weight}` : '',
			props.truncate ? 'truncate' : '',
			props.clamp ? 'clamped' : '',
		],
		additional: props.class,
	})
	const themedClasses = props.color
		? getClassNames({ component: 'Themed', modifiers: [props.color] })
		: ''
	return themedClasses ? `${textClasses} ${themedClasses}` : textClasses
})

const style = computed(() => {
	const result: Record<string, string> = {}
	if (props.color) result['--NeoText-color-text'] = 'var(--neo-theme-colorAccessible)'
	if (props.clamp) result['--NeoText-sizing-clamp'] = String(props.clamp)
	return Object.keys(result).length ? result : undefined
})
</script>

<template>
	<component :is="props.tag ?? 'p'" :class="classes" :style="style">
		<slot />
	</component>
</template>

<style scoped>
@import url('./NeoText-themed.css');
@import url('./NeoText-layout.css');

.NeoText {
	color: var(--NeoText-color-text);
	font-size: var(--NeoText-sizing-fontSize);
	line-height: var(--NeoText-sizing-lineHeight);
	margin: 0;
	overflow-wrap: break-word;
}

.NeoText--weight-medium {
	font-weight: var(--neo-fontWeight-medium);
}

.NeoText--weight-semibold {
	font-weight: var(--neo-fontWeight-semibold);
}

.NeoText--weight-bold {
	font-weight: var(--neo-fontWeight-bold);
}

.NeoText--truncate {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.NeoText--clamped {
	align-self: stretch;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	-webkit-line-clamp: var(--NeoText-sizing-clamp);
	line-clamp: var(--NeoText-sizing-clamp);
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
