<script setup lang="ts">
import { getClassNames } from '@/utils/classNames'
import { computed } from 'vue'
import type { NeoIconProps } from './NeoIconTypes'

const props = defineProps<NeoIconProps>()

const classes = computed(() => {
	const buttonClasses = getClassNames({
		component: 'NeoIcon',
		modifiers: [props.size ?? 'small'],
		additional: props.class,
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'grey500'],
	})
	return `${buttonClasses} ${themedClasses}`
})
</script>

<template>
	<span :class="classes">
		<slot />
	</span>
</template>

<style scoped>
.NeoIcon {
	align-items: center;
	color: var(--neo-theme-color);
	display: inline-flex;
	justify-content: center;
}
</style>
