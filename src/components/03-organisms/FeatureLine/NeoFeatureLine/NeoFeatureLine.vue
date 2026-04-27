<script setup lang="ts">
import { computed } from 'vue'
import type { NeoFeatureLineProps } from './NeoFeatureLineTypes'
import { getClassNames } from '@/utils/classNames'
import NeoImage from '@/components/01-atoms/Image/NeoImage.vue'
import NeoHeadingGroup from '@/components/02-molecules/HeadingGroup/NeoHeadingGroup/NeoHeadingGroup.vue'
import NeoLinkButton from '@/components/01-atoms/Button/NeoLinkButton/NeoLinkButton.vue'
import NeoSection from '@/components/02-molecules/Section/NeoSection.vue'

const props = defineProps<NeoFeatureLineProps>()

const ratioModifier = computed(() => {
	if (props.imageRatio === '16/9') return 'ratio-16-9'
	if (props.imageRatio === '1/1') return 'ratio-1-1'
	return ''
})

const classes = computed(() => {
	const lineClasses = getClassNames({
		component: 'NeoFeatureLine',
		modifiers: [props.reverse ? 'reverse' : '', ratioModifier.value],
		additional: props.class,
	})
	return lineClasses
})
</script>

<template>
	<NeoSection v-bind="props.section">
		<div :class="classes">
			<div class="NeoFeatureLine-imageWrapper">
				<NeoImage
					:src="props.imageSrc"
					:alt="props.imageAlt"
					object-fit="cover"
					class="NeoFeatureLine-image"
				/>
			</div>
			<div class="NeoFeatureLine-content">
				<NeoHeadingGroup
					:title="props.title"
					:subtitle="props.subtitle"
					:heading-tag="props.headingTag ?? 'h2'"
					:variant="props.headingVariant ?? 'secondary'"
					:color="props.color"
				/>
				<p v-if="props.body" class="NeoFeatureLine-body">{{ props.body }}</p>
				<div v-if="props.ctaText && props.ctaHref" class="NeoFeatureLine-actions">
					<NeoLinkButton
						:href="props.ctaHref"
						:text="props.ctaText"
						:color="props.color ?? 'blue'"
						variant="primary"
					/>
				</div>
			</div>
		</div>
	</NeoSection>
</template>

<style scoped>
@import url('./NeoFeatureLine-themed.css');
@import url('./NeoFeatureLine-layout.css');

.NeoFeatureLine {
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: var(--NeoFeatureLine-sizing-gap);

	@mixin bp-md {
		flex-direction: row;
	}
}

.NeoFeatureLine--reverse {
	@mixin bp-md {
		flex-direction: row-reverse;
	}
}

.NeoFeatureLine-imageWrapper {
	aspect-ratio: var(--NeoFeatureLine-sizing-imageRatio);
	border-radius: 12px;
	flex-shrink: 0;
	inline-size: 100%;
	overflow: hidden;

	@mixin bp-md {
		inline-size: 45%;
	}
}

.NeoFeatureLine-image {
	block-size: 100%;
	inline-size: 100%;
}

.NeoFeatureLine-content {
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: var(--NeoFeatureLine-sizing-contentGap);
	min-inline-size: 0;
}

.NeoFeatureLine-body {
	color: var(--NeoFeatureLine-color-body);
	font-size: var(--NeoFeatureLine-sizing-bodyFontSize);
	line-height: var(--NeoFeatureLine-sizing-bodyLineHeight);
	margin: 0;
	overflow-wrap: break-word;
}

.NeoFeatureLine-actions {
	display: flex;
	gap: var(--NeoFeatureLine-sizing-actionsGap);
}
</style>
