<script setup lang="ts">
import { computed } from 'vue'
import type { NeoTextBlockProps } from './NeoTextBlockTypes'
import { getClassNames } from '@/utils/classNames'
import NeoHeadingGroup from '@/components/02-molecules/HeadingGroup/NeoHeadingGroup/NeoHeadingGroup.vue'
import NeoLinkButton from '@/components/01-atoms/Button/NeoLinkButton/NeoLinkButton.vue'

const props = defineProps<NeoTextBlockProps>()

const classes = computed(() => {
	const blockClasses = getClassNames({
		component: 'NeoTextBlock',
		modifiers: [props.align ? `align-${props.align}` : ''],
		additional: props.class,
	})
	return blockClasses
})
</script>

<template>
	<div :class="classes">
		<NeoHeadingGroup
			:title="props.heading"
			:heading-tag="props.headingTag"
			:variant="props.headingVariant ?? 'secondary'"
			:align="props.align"
			:color="props.color"
		/>
		<p v-if="props.body" class="NeoTextBlock-body">{{ props.body }}</p>
		<div v-if="props.ctaText && props.ctaHref" class="NeoTextBlock-actions">
			<NeoLinkButton
				:href="props.ctaHref"
				:text="props.ctaText"
				:color="props.color ?? 'blue'"
				variant="primary"
			/>
		</div>
	</div>
</template>

<style scoped>
@import url('./NeoTextBlock-themed.css');
@import url('./NeoTextBlock-layout.css');

.NeoTextBlock {
	display: flex;
	flex-direction: column;
	gap: var(--NeoTextBlock-sizing-gap);
}

.NeoTextBlock--align-center {
	align-items: center;
	text-align: center;
}

.NeoTextBlock--align-end {
	align-items: flex-end;
	text-align: end;
}

.NeoTextBlock-body {
	color: var(--NeoTextBlock-color-body);
	font-size: var(--neo-fontSize-textLg);
	line-height: var(--neo-lineHeight-relaxed);
	margin: 0;
	overflow-wrap: break-word;
}

.NeoTextBlock-actions {
	display: flex;
	gap: var(--neo-gap-md);
}
</style>
