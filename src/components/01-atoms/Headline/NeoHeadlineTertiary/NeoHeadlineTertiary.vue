<script setup lang="ts">
import type { NeoHeadlineProps, NeoHeadlineSlots } from '../NeoHeadlineTypes'
import { useHeadline } from '../useHeadline'

const props = defineProps<NeoHeadlineProps>()
defineSlots<NeoHeadlineSlots>()

const { classes, style } = useHeadline('NeoHeadlineTertiary', props)
</script>

<template>
	<component :is="props.tag ?? 'h3'" :class="classes" :style="style">
		<slot />
	</component>
</template>

<style scoped>
@import url('../NeoHeadline-shared.css');
@import url('./NeoHeadlineTertiary-themed.css');
@import url('./NeoHeadlineTertiary-layout.css');

.NeoHeadlineTertiary {
	color: var(--NeoHeadlineTertiary-color-text);
	font-size: var(--NeoHeadlineTertiary-fontSize-value);
	font-weight: var(--NeoHeadlineTertiary-fontWeight-value);
	letter-spacing: 0;
	line-height: var(--NeoHeadlineTertiary-lineHeight-value);
	margin: 0;
	overflow-wrap: break-word;
}
</style>
