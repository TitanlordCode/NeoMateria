<script setup lang="ts">
import { computed, ref } from 'vue'
import type { NeoProgressPanelProps, NeoProgressPanelSlots } from './NeoProgressPanelTypes'
import { getClassNames } from '@/utils/classNames'
import NeoImage from '@/components/01-atoms/Image/NeoImage.vue'
import NeoProgressBar from '@/components/01-atoms/ProgressBar/NeoProgressBar.vue'
import NeoHeadlineTertiary from '@/components/01-atoms/Headline/NeoHeadlineTertiary/NeoHeadlineTertiary.vue'

const props = defineProps<NeoProgressPanelProps>()

defineSlots<NeoProgressPanelSlots>()

const imageLoadError = ref(false)

const isClickable = computed(() => Boolean(props.href))

const classes = computed(() => {
	const panelClasses = getClassNames({
		component: 'NeoProgressPanel',
		modifiers: [props.rounded ? 'rounded' : '', isClickable.value ? 'clickable' : ''],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${panelClasses} ${themedClasses}`
})

const progressAriaLabel = computed(() => {
	const base = `${props.value}%`
	return props.valueLabel ? `${base} ${props.valueLabel}` : base
})

const handleImageError = () => {
	imageLoadError.value = true
}
</script>

<template>
	<component
		:is="isClickable ? 'a' : 'article'"
		:class="classes"
		:href="isClickable ? props.href : undefined"
		:target="isClickable && props.external ? '_blank' : undefined"
		:rel="isClickable && props.external ? 'noopener noreferrer' : undefined"
	>
		<div class="NeoProgressPanel-imageWrapper">
			<div v-if="imageLoadError" class="NeoProgressPanel-imageFallback" aria-hidden="true">
				<span class="NeoProgressPanel-imageFallbackText">{{ props.title }}</span>
			</div>
			<NeoImage
				v-else
				:src="props.imageSrc"
				:alt="props.imageAlt"
				object-fit="cover"
				class="NeoProgressPanel-image"
				@error="handleImageError"
			/>
			<div v-if="$slots.pennant" class="NeoProgressPanel-pennant">
				<slot name="pennant" />
			</div>
		</div>

		<div class="NeoProgressPanel-content">
			<div class="NeoProgressPanel-header">
				<NeoHeadlineTertiary :tag="props.headingTag ?? 'h3'" class="NeoProgressPanel-title">{{
					props.title
				}}</NeoHeadlineTertiary>
				<p v-if="props.subtitle" class="NeoProgressPanel-subtitle">{{ props.subtitle }}</p>
			</div>
			<div class="NeoProgressPanel-footer">
				<div class="NeoProgressPanel-progressRow">
					<NeoProgressBar
						:value="props.value"
						:color="props.color"
						:ariaLabel="progressAriaLabel"
						size="small"
						rounded
						class="NeoProgressPanel-bar"
					/>
					<span class="NeoProgressPanel-value">{{ props.value }}%</span>
				</div>
				<span v-if="props.valueLabel" class="NeoProgressPanel-valueLabel">{{
					props.valueLabel
				}}</span>
			</div>
		</div>
	</component>
</template>

<style scoped>
@import url('./NeoProgressPanel-themed.css');
@import url('./NeoProgressPanel-layout.css');

.NeoProgressPanel {
	background-color: var(--NeoProgressPanel-color-background);
	border: 2px solid var(--neo-theme-color);
	border-radius: var(--NeoProgressPanel-sizing-borderRadius);
	display: flex;
	flex-direction: row;
	font-family: inherit;
	overflow: hidden;
	position: relative;
	transition: box-shadow 0.2s ease;
}

.NeoProgressPanel--clickable {
	cursor: pointer;
	text-decoration: none;

	&:hover {
		box-shadow: 0 0 0 3px var(--neo-theme-color);
	}

	&:focus-visible {
		outline: 2px solid var(--neo-theme-color);
		outline-offset: 2px;
	}
}

.NeoProgressPanel-imageWrapper {
	aspect-ratio: 2 / 3;
	flex-shrink: 0;
	inline-size: var(--NeoProgressPanel-sizing-imageWidth);
	overflow: hidden;
	position: relative;
}

.NeoProgressPanel-image {
	block-size: 100%;
	inline-size: 100%;
}

.NeoProgressPanel-imageFallback {
	align-items: center;
	background-color: var(--neo-theme-color);
	block-size: 100%;
	color: var(--neo-theme-colorText);
	display: flex;
	inline-size: 100%;
	justify-content: center;
	padding: var(--neo-spacing-core-xs);
}

.NeoProgressPanel-imageFallbackText {
	font-size: 0.75rem;
	font-weight: 600;
	overflow-wrap: break-word;
	text-align: center;
}

.NeoProgressPanel-pennant {
	inset-block-start: 0;
	inset-inline-end: 0;
	position: absolute;
}

/* Scale the pennant to at most 30% of the image width */
.NeoProgressPanel-pennant :deep(.NeoPennant) {
	--NeoPennant-sizing-width: calc(var(--NeoProgressPanel-sizing-imageWidth) * 0.3);
	--NeoPennant-sizing-height: calc(var(--NeoProgressPanel-sizing-imageWidth) * 0.3 * 60 / 44);
}

.NeoProgressPanel-content {
	display: flex;
	flex: 1;
	flex-direction: column;
	min-inline-size: 0;
	padding: var(--NeoProgressPanel-sizing-padding);
}

.NeoProgressPanel-header {
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: var(--neo-gap-xs);
}

.NeoProgressPanel-title {
	-webkit-box-orient: vertical;
	color: var(--NeoProgressPanel-color-title);
	display: -webkit-box;
	font-size: var(--neo-fontSize-textMd, 0.875rem);
	font-weight: 600;
	hyphens: auto;
	-webkit-line-clamp: var(--NeoProgressPanel-sizing-titleClamp);
	line-clamp: var(--NeoProgressPanel-sizing-titleClamp);
	line-height: 1.3;
	margin: 0;
	overflow: hidden;
	overflow-wrap: break-word;
}

.NeoProgressPanel-subtitle {
	color: var(--NeoProgressPanel-color-subtitle);
	font-size: var(--neo-fontSize-textSm, 0.75rem);
	hyphens: auto;
	line-height: 1.3;
	margin: 0;
	overflow: hidden;
	overflow-wrap: break-word;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.NeoProgressPanel-footer {
	display: flex;
	flex-direction: column;
	gap: var(--neo-gap-xs);
	margin-block-start: auto;
	padding-block-start: var(--neo-spacing-core-sm);
}

.NeoProgressPanel-progressRow {
	align-items: center;
	display: flex;
	gap: var(--neo-gap-sm);
}

.NeoProgressPanel-bar {
	flex: 1;
}

.NeoProgressPanel-value {
	color: var(--neo-theme-colorAccessible);
	flex-shrink: 0;
	font-size: var(--neo-fontSize-textSm, 0.75rem);
	font-weight: 700;
	line-height: 1;
}

.NeoProgressPanel-valueLabel {
	color: var(--NeoProgressPanel-color-valueLabel);
	font-size: var(--neo-fontSize-textSm, 0.75rem);
	overflow: hidden;
	overflow-wrap: break-word;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
