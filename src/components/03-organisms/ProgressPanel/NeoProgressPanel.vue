<script setup lang="ts">
import { computed, ref } from 'vue'
import type { NeoProgressPanelProps, NeoProgressPanelSlots } from './NeoProgressPanelTypes'
import { getClassNames } from '@/utils/classNames'
import { formatPercent } from '@/utils/formatPercent'
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

const formattedValue = computed(() =>
	formatPercent(props.value, { decimals: props.decimals, locale: props.locale }),
)

const progressAriaLabel = computed(() => {
	const base = `${formattedValue.value}%`
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
				<NeoHeadlineTertiary :tag="props.headingTag ?? 'h2'" class="NeoProgressPanel-title">{{
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
						:decimals="props.decimals"
						:locale="props.locale"
						size="small"
						rounded
						class="NeoProgressPanel-bar"
					/>
					<span class="NeoProgressPanel-value">{{ formattedValue }}%</span>
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
	border: 2px solid var(--NeoProgressPanel-color-border);
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
		box-shadow: 0 0 0 3px var(--NeoProgressPanel-color-hoverShadow);
	}

	&:focus-visible {
		outline: 2px solid var(--NeoProgressPanel-color-outline);
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
	background-color: var(--NeoProgressPanel-color-imageFallbackBg);
	block-size: 100%;
	color: var(--NeoProgressPanel-color-imageFallbackText);
	display: flex;
	inline-size: 100%;
	justify-content: center;
	padding: var(--NeoProgressPanel-sizing-imageFallbackPadding);
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
	gap: var(--NeoProgressPanel-sizing-headerGap);
}

.NeoProgressPanel-title {
	-webkit-box-orient: vertical;
	color: var(--NeoProgressPanel-color-title);
	display: -webkit-box;
	font-size: var(--NeoProgressPanel-fontSize-title);
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
	font-size: var(--NeoProgressPanel-fontSize-subtitle);
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
	gap: var(--NeoProgressPanel-sizing-footerGap);
	margin-block-start: auto;
	padding-block-start: var(--NeoProgressPanel-sizing-footerPaddingBlockStart);
}

.NeoProgressPanel-progressRow {
	align-items: center;
	display: flex;
	gap: var(--NeoProgressPanel-sizing-progressRowGap);
}

.NeoProgressPanel-bar {
	flex: 1;
}

.NeoProgressPanel-value {
	color: var(--NeoProgressPanel-color-value);
	flex-shrink: 0;
	font-size: var(--NeoProgressPanel-fontSize-value);
	font-weight: 700;
	line-height: 1;
}

.NeoProgressPanel-valueLabel {
	color: var(--NeoProgressPanel-color-valueLabel);
	font-size: var(--NeoProgressPanel-fontSize-valueLabel);
	overflow: hidden;
	overflow-wrap: break-word;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
