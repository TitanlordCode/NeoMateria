<script setup lang="ts">
import type { NeoHeadlineProps, NeoHeadlineSlots } from '../NeoHeadlineTypes'
import { useHeadline } from '../useHeadline'

const props = defineProps<NeoHeadlineProps>()
defineSlots<NeoHeadlineSlots>()

const { classes, style } = useHeadline('NeoHeadlinePrimary', props)
</script>

<template>
	<component :is="props.tag ?? 'h2'" :class="classes" :style="style">
		<slot />
	</component>
</template>

<style scoped>
@import url('../NeoHeadline-shared.css');
@import url('./NeoHeadlinePrimary-themed.css');
@import url('./NeoHeadlinePrimary-layout.css');

.NeoHeadlinePrimary {
	color: var(--NeoHeadlinePrimary-color-text);
	font-size: var(--NeoHeadlinePrimary-sizing-fontSize);
	font-weight: var(--neo-fontWeight-bold);
	letter-spacing: -0.02em;
	line-height: var(--neo-lineHeight-tight);
	margin: 0;
	overflow-wrap: break-word;
}
</style>
