<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import type { NeoCoverPanelProps, NeoCoverPanelSlots } from './NeoCoverPanelTypes'
import { getClassNames } from '@/utils/classNames'
import NeoImage from '@/components/01-atoms/Image/NeoImage.vue'

const props = defineProps<NeoCoverPanelProps>()

const emit = defineEmits<{
	/** Emitted when the image is clicked. Only fires when `clickBehavior` is `'action'`. */
	'image-click': []
	/** Emitted when the action overlay button is clicked. */
	'action-click': []
}>()

defineSlots<NeoCoverPanelSlots>()

const slots = useSlots()

const imageLoadError = ref(false)

const classes = computed(() => {
	const panelClasses = getClassNames({
		component: 'NeoCoverPanel',
		modifiers: [props.rounded ? 'rounded' : ''],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${panelClasses} ${themedClasses}`
})

const imageSurface = computed(() => {
	if (props.clickBehavior === 'action') return 'button'
	if (props.clickBehavior === 'link') return 'a'
	return 'div'
})

const imageSurfaceAttrs = computed(() => {
	const base = {
		class: 'NeoCoverPanel-imageSurface',
		'aria-label': props.imageAriaLabel ?? props.title,
	}

	if (props.clickBehavior === 'action') {
		const actionActive =
			'actionActive' in props && props.actionActive !== undefined ? props.actionActive : undefined
		return {
			...base,
			type: 'button',
			'aria-pressed': actionActive,
		}
	}

	if (props.clickBehavior === 'link') {
		const linkProps = props as { href: string; external?: boolean }
		return {
			...base,
			href: linkProps.href,
			target: linkProps.external ? '_blank' : undefined,
			rel: linkProps.external ? 'noopener noreferrer' : undefined,
		}
	}

	return {
		class: 'NeoCoverPanel-imageSurface NeoCoverPanel-imageSurface--static',
		'aria-hidden': true,
	}
})

const showActionButton = computed(
	() => Boolean(props.actionAriaLabel) && Boolean(slots['action-icon']),
)

const actionIsActive = computed(() => {
	if ('actionActive' in props) return props.actionActive ?? false
	return false
})

const handleImageClick = () => {
	if (props.clickBehavior === 'action') {
		emit('image-click')
	}
}

const handleImageError = () => {
	imageLoadError.value = true
}
</script>

<template>
	<article :class="classes">
		<component :is="imageSurface" v-bind="imageSurfaceAttrs" @click="handleImageClick">
			<div v-if="imageLoadError" class="NeoCoverPanel-imageFallback" aria-hidden="true">
				<span class="NeoCoverPanel-imageFallbackText">{{ props.title }}</span>
			</div>
			<NeoImage
				v-else
				:src="props.imageSrc"
				:alt="props.imageAlt"
				object-fit="cover"
				class="NeoCoverPanel-image"
				@error="handleImageError"
			/>
			<div class="NeoCoverPanel-gradient" aria-hidden="true" />
		</component>

		<div v-if="$slots['pennants']" class="NeoCoverPanel-pennants">
			<slot name="pennants" />
		</div>

		<button
			v-if="showActionButton"
			type="button"
			class="NeoCoverPanel-action"
			:class="{ 'NeoCoverPanel-action--active': actionIsActive }"
			:aria-label="props.actionAriaLabel"
			:aria-pressed="
				'actionActive' in props && props.actionActive !== undefined ? props.actionActive : undefined
			"
			@click="emit('action-click')"
		>
			<slot name="action-icon" :active="actionIsActive" />
		</button>
	</article>
</template>

<style scoped>
@import url('./NeoCoverPanel-themed.css');
@import url('./NeoCoverPanel-layout.css');

.NeoCoverPanel {
	aspect-ratio: 2 / 3;
	border: 1px solid var(--NeoCoverPanel-color-border);
	border-radius: var(--NeoCoverPanel-sizing-borderRadius);
	container-type: inline-size;
	display: block;
	font-family: inherit;
	overflow: clip;
	overflow-clip-margin: var(--neo-gap-sm);
	position: relative;
}

.NeoCoverPanel-image {
	block-size: 100%;
	display: block;
	inline-size: 100%;
	transition: transform 0.3s ease;
}

.NeoCoverPanel-imageSurface {
	background: transparent;
	block-size: 100%;
	border: none;
	border-radius: var(--NeoCoverPanel-sizing-borderRadius);
	cursor: pointer;
	display: block;
	inline-size: 100%;
	overflow: hidden;
	padding: 0;
	position: relative;
	text-decoration: none;
	transition: none;

	&:focus-visible {
		outline: 2px solid var(--neo-theme-color);
		outline-offset: -2px;
	}

	&:hover .NeoCoverPanel-image {
		transform: scale(1.02);
	}
}

.NeoCoverPanel-imageSurface--static {
	cursor: default;
}

.NeoCoverPanel-imageFallback {
	align-items: center;
	background-color: var(--NeoCoverPanel-color-imageFallback);
	block-size: 100%;
	color: var(--neo-theme-colorText);
	display: flex;
	inline-size: 100%;
	justify-content: center;
	padding: var(--neo-spacing-core-md);
}

.NeoCoverPanel-imageFallbackText {
	font-weight: 600;
	overflow-wrap: break-word;
	text-align: center;
}

.NeoCoverPanel-pennants {
	direction: rtl;
	display: flex;
	gap: var(--neo-gap-xs);
	inset-block-start: 0;
	inset-inline-start: var(--NeoCoverPanel-sizing-borderRadius);
	position: absolute;
}

.NeoCoverPanel-pennants :deep(.NeoPennant) {
	--NeoPennant-sizing-width: 12cqi;

	flex-shrink: 0;
}

.NeoCoverPanel-gradient {
	background: linear-gradient(to top, rgb(0 0 0 / 65%), transparent);
	block-size: 40%;
	inset-block-end: 0;
	inset-inline: 0;
	position: absolute;
}

.NeoCoverPanel-action {
	align-items: center;
	backdrop-filter: blur(4px);
	background-color: var(--NeoCoverPanel-color-actionBackground);
	block-size: var(--NeoCoverPanel-sizing-actionSize);
	border: none;
	border-radius: 50%;
	color: var(--NeoCoverPanel-color-actionIcon);
	cursor: pointer;
	display: inline-flex;
	font-family: inherit;
	inline-size: var(--NeoCoverPanel-sizing-actionSize);
	inset-block-end: var(--neo-spacing-sm);
	inset-inline-end: var(--neo-spacing-sm);
	justify-content: center;
	padding: 0;
	position: absolute;
	transition:
		transform 0.2s ease,
		background-color 0.2s ease;

	&:hover {
		background-color: rgb(0 0 0 / 60%);
		transform: scale(1.1);
	}

	&:focus-visible {
		outline: 2px solid var(--neo-theme-color);
		outline-offset: 2px;
	}
}

.NeoCoverPanel-action--active {
	color: var(--NeoCoverPanel-color-actionIconActive);
}
</style>
