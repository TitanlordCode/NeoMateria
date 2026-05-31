<script setup lang="ts">
import type { NeoHeadlineProps, NeoHeadlineSlots } from '../NeoHeadlineTypes'
import { useHeadline } from '../useHeadline'

const props = defineProps<NeoHeadlineProps>()
defineSlots<NeoHeadlineSlots>()

const { classes, style } = useHeadline('NeoHeadlineQuaternary', props)
</script>

<template>
	<component :is="props.tag ?? 'h4'" :class="classes" :style="style">
		<slot />
	</component>
</template>

<style scoped>
@import url('../NeoHeadline-shared.css');
@import url('./NeoHeadlineQuaternary-themed.css');
@import url('./NeoHeadlineQuaternary-layout.css');

.NeoHeadlineQuaternary {
	color: var(--NeoHeadlineQuaternary-color-text);
	font-size: var(--NeoHeadlineQuaternary-fontSize-value);
	font-weight: var(--NeoHeadlineQuaternary-fontWeight-value);
	letter-spacing: 0;
	line-height: var(--NeoHeadlineQuaternary-lineHeight-value);
	margin: 0;
	overflow-wrap: break-word;
}
</style>
