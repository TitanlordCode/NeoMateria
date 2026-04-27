<script setup lang="ts">
import { computed } from 'vue'
import type { NeoFeatureCardProps } from './NeoFeatureCardTypes'
import { getClassNames } from '@/utils/classNames'
import NeoImage from '@/components/01-atoms/Image/NeoImage.vue'
import NeoHeadlineSecondary from '@/components/01-atoms/Headline/NeoHeadlineSecondary/NeoHeadlineSecondary.vue'

const props = defineProps<NeoFeatureCardProps>()

const isClickable = computed(() => Boolean(props.href))

const classes = computed(() => {
	const cardClasses = getClassNames({
		component: 'NeoFeatureCard',
		modifiers: [isClickable.value ? 'clickable' : ''],
		additional: props.class,
	})
	const themedClasses = props.color
		? getClassNames({ component: 'Themed', modifiers: [props.color] })
		: ''
	return themedClasses ? `${cardClasses} ${themedClasses}` : cardClasses
})

const categoryStyle = computed(() => {
	if (!props.color) return undefined
	return { '--NeoFeatureCard-color-category': 'var(--neo-theme-colorAccessible)' }
})
</script>

<template>
	<component
		:is="isClickable ? 'a' : 'article'"
		:class="classes"
		:href="isClickable ? props.href : undefined"
	>
		<div class="NeoFeatureCard-imageWrapper">
			<NeoImage
				:src="props.imageSrc"
				:alt="props.imageAlt"
				object-fit="cover"
				class="NeoFeatureCard-image"
			/>
		</div>
		<div class="NeoFeatureCard-content">
			<p v-if="props.category" class="NeoFeatureCard-category" :style="categoryStyle">
				{{ props.category }}
			</p>
			<NeoHeadlineSecondary :tag="props.headingTag ?? 'h3'" :color="props.color" :clamp="3">
				{{ props.title }}
			</NeoHeadlineSecondary>
			<p v-if="props.excerpt" class="NeoFeatureCard-excerpt">{{ props.excerpt }}</p>
		</div>
	</component>
</template>

<style scoped>
@import url('./NeoFeatureCard-themed.css');
@import url('./NeoFeatureCard-layout.css');

.NeoFeatureCard {
	border-radius: var(--NeoFeatureCard-sizing-borderRadius);
	display: flex;
	flex-direction: column;
	gap: var(--NeoFeatureCard-sizing-gap);
	overflow: hidden;
}

.NeoFeatureCard--clickable {
	cursor: pointer;
	text-decoration: none;
	transition: transform 0.2s ease;

	&:hover {
		transform: translateY(-2px);
	}

	&:focus-visible {
		outline: 2px solid var(--NeoFeatureCard-color-focus);
		outline-offset: 2px;
	}
}

.NeoFeatureCard-imageWrapper {
	aspect-ratio: 16 / 9;
	border-radius: var(--NeoFeatureCard-sizing-borderRadius);
	overflow: hidden;
}

.NeoFeatureCard-image {
	block-size: 100%;
	inline-size: 100%;
}

.NeoFeatureCard-content {
	display: flex;
	flex-direction: column;
	gap: var(--NeoFeatureCard-sizing-contentGap);
}

.NeoFeatureCard-category {
	color: var(--NeoFeatureCard-color-category);
	font-size: var(--NeoFeatureCard-sizing-categoryFontSize);
	font-weight: var(--NeoFeatureCard-fontWeight-category);
	letter-spacing: 0.06em;
	margin: 0;
	overflow-wrap: break-word;
	text-transform: uppercase;
}

.NeoFeatureCard-excerpt {
	color: var(--NeoFeatureCard-color-excerpt);
	font-size: var(--NeoFeatureCard-sizing-excerptFontSize);
	line-height: var(--NeoFeatureCard-lineHeight-excerpt);
	margin: 0;
	overflow-wrap: break-word;
}
</style>
