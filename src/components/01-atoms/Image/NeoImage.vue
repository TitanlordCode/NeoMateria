<script setup lang="ts">
import { computed, ref } from 'vue'
import type { NeoImageProps } from './NeoImageTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoImageProps>()

const emit = defineEmits<{
	(e: 'load', event: Event): void
	(e: 'error', event: Event): void
}>()

const isLoaded = ref(false)
const hasError = ref(false)

const handleLoad = (event: Event) => {
	isLoaded.value = true
	emit('load', event)
}

const handleError = (event: Event) => {
	hasError.value = true
	emit('error', event)
}

const classes = computed(() => {
	return getClassNames({
		component: 'NeoImage',
		modifiers: [
			props.objectFit ?? '',
			props.rounded ? 'rounded' : '',
			props.circle ? 'circle' : '',
			isLoaded.value ? 'loaded' : '',
			hasError.value ? 'error' : '',
		],
		additional: props.class,
	})
})

const imageStyle = computed(() => ({
	width: typeof props.width === 'number' ? `${props.width}px` : props.width,
	height: typeof props.height === 'number' ? `${props.height}px` : props.height,
}))
</script>

<template>
	<div :class="classes">
		<img
			:src="props.src"
			:alt="props.alt"
			:loading="props.loading ?? 'lazy'"
			:style="imageStyle"
			class="NeoImage-img"
			@load="handleLoad"
			@error="handleError"
		/>
		<div v-if="!isLoaded && !hasError" class="NeoImage-placeholder" aria-hidden="true">
			<span class="NeoImage-loader"></span>
		</div>
		<div v-if="hasError" class="NeoImage-errorState" role="alert">
			<span>Failed to load image</span>
		</div>
	</div>
</template>

<style scoped>
.NeoImage {
	display: inline-block;
	overflow: hidden;
	position: relative;
}

.NeoImage-img {
	block-size: 100%;
	display: block;
	inline-size: 100%;
	object-fit: contain;
}

.NeoImage--contain {
	& .NeoImage-img {
		object-fit: contain;
	}
}

.NeoImage--cover {
	& .NeoImage-img {
		object-fit: cover;
	}
}

.NeoImage--fill {
	& .NeoImage-img {
		object-fit: fill;
	}
}

.NeoImage--none {
	& .NeoImage-img {
		object-fit: none;
	}
}

.NeoImage--scale-down {
	& .NeoImage-img {
		object-fit: scale-down;
	}
}

.NeoImage--rounded {
	border-radius: 8px;
}

.NeoImage--circle {
	border-radius: 50%;
}

.NeoImage-placeholder {
	align-items: center;
	background: var(--neo-color-grey200);
	block-size: 100%;
	display: flex;
	inline-size: 100%;
	justify-content: center;
	left: 0;
	position: absolute;
	top: 0;
}

.NeoImage-loader {
	animation: spin 1s linear infinite;
	block-size: 32px;
	border: 3px solid var(--neo-color-grey300);
	border-radius: 50%;
	border-top-color: var(--neo-color-grey600);
	inline-size: 32px;
}

.NeoImage--loaded .NeoImage-placeholder {
	display: none;
}

.NeoImage-errorState {
	align-items: center;
	background: var(--neo-color-grey200);
	block-size: 100%;
	color: var(--neo-color-grey700);
	display: flex;
	font-size: 0.875rem;
	inline-size: 100%;
	justify-content: center;
	left: 0;
	padding: 16px;
	position: absolute;
	text-align: center;
	top: 0;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
</style>
