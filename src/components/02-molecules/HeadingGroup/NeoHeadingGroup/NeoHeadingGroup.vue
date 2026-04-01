<script setup lang="ts">
import { computed } from 'vue'
import type { NeoHeadingGroupProps } from './NeoHeadingGroupTypes'
import { getClassNames } from '@/utils/classNames'
import NeoHeadlinePrimary from '@/components/01-atoms/Headline/NeoHeadlinePrimary/NeoHeadlinePrimary.vue'
import NeoHeadlineSecondary from '@/components/01-atoms/Headline/NeoHeadlineSecondary/NeoHeadlineSecondary.vue'
import NeoHeadlineTertiary from '@/components/01-atoms/Headline/NeoHeadlineTertiary/NeoHeadlineTertiary.vue'

const props = defineProps<NeoHeadingGroupProps>()

const classes = computed(() => {
	const groupClasses = getClassNames({
		component: 'NeoHeadingGroup',
		modifiers: [props.align ? `align-${props.align}` : ''],
		additional: props.class,
	})
	const themedClasses = props.color
		? getClassNames({ component: 'Themed', modifiers: [props.color] })
		: ''
	return themedClasses ? `${groupClasses} ${themedClasses}` : groupClasses
})

const overlineStyle = computed(() => {
	if (!props.color) return undefined
	return { '--NeoHeadingGroup-color-overline': 'var(--neo-theme-colorAccessible)' }
})
</script>

<template>
	<div :class="classes">
		<p v-if="props.overline" class="NeoHeadingGroup-overline" :style="overlineStyle">
			{{ props.overline }}
		</p>
		<NeoHeadlinePrimary
			v-if="(props.variant ?? 'primary') === 'primary'"
			:tag="props.headingTag ?? 'h2'"
			:align="props.align"
			:color="props.color"
		>
			{{ props.title }}
		</NeoHeadlinePrimary>
		<NeoHeadlineSecondary
			v-else-if="props.variant === 'secondary'"
			:tag="props.headingTag ?? 'h2'"
			:align="props.align"
			:color="props.color"
		>
			{{ props.title }}
		</NeoHeadlineSecondary>
		<NeoHeadlineTertiary
			v-else
			:tag="props.headingTag ?? 'h2'"
			:align="props.align"
			:color="props.color"
		>
			{{ props.title }}
		</NeoHeadlineTertiary>
		<p v-if="props.subtitle" class="NeoHeadingGroup-subtitle">{{ props.subtitle }}</p>
	</div>
</template>

<style scoped>
@import url('./NeoHeadingGroup-themed.css');
@import url('./NeoHeadingGroup-layout.css');

.NeoHeadingGroup {
	display: flex;
	flex-direction: column;
	gap: var(--NeoHeadingGroup-sizing-gap);
}

.NeoHeadingGroup--align-center {
	align-items: center;
	text-align: center;
}

.NeoHeadingGroup--align-end {
	align-items: flex-end;
	text-align: end;
}

.NeoHeadingGroup-overline {
	color: var(--NeoHeadingGroup-color-overline);
	font-size: var(--neo-fontSize-textSm);
	font-weight: var(--neo-fontWeight-semibold);
	letter-spacing: 0.08em;
	margin: 0;
	overflow-wrap: break-word;
	text-transform: uppercase;
}

.NeoHeadingGroup-subtitle {
	color: var(--NeoHeadingGroup-color-subtitle);
	font-size: var(--neo-fontSize-textLg);
	line-height: var(--neo-lineHeight-normal);
	margin: 0;
	overflow-wrap: break-word;
}
</style>
