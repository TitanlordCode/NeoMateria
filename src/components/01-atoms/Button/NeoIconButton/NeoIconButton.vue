<script setup lang="ts">
import type { NeoIconButtonProps, NeoIconButtonSlots } from './NeoIconButtonTypes'
import NeoButton from '../NeoButton/NeoButton.vue'
import NeoIcon from '../../Icon/NeoIcon.vue'

const props = defineProps<NeoIconButtonProps>()

defineSlots<NeoIconButtonSlots>()

const emit = defineEmits<{
	/** Emitted when the button is clicked. Not fired when `disabled` is `true`. */
	click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
	emit('click', event)
}
</script>

<template>
	<NeoButton
		:aria-label="props.ariaLabel"
		:color="props.color"
		:disabled="props.disabled"
		:pressed="props.pressed"
		:rounded="props.rounded"
		:size="props.size"
		:variant="props.variant"
		@click="handleClick"
	>
		<NeoIcon size="medium" aria-hidden>
			<slot />
		</NeoIcon>
	</NeoButton>
</template>
