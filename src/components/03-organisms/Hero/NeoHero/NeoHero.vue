<script setup lang="ts">
import { computed } from 'vue'
import type { NeoHeroProps, NeoHeroSlots } from './NeoHeroTypes'
import { getClassNames } from '@/utils/classNames'
import NeoHeadlinePrimary from '@/components/01-atoms/Headline/NeoHeadlinePrimary/NeoHeadlinePrimary.vue'
import NeoSection from '@/components/02-molecules/Section/NeoSection.vue'

const props = defineProps<NeoHeroProps>()
defineSlots<NeoHeroSlots>()

const headlineAlign = computed(() =>
	(props.variant ?? 'centered') === 'centered' ? 'center' : 'start',
)

const classes = computed(() =>
	getClassNames({
		component: 'NeoHero',
		modifiers: [props.variant ?? 'centered', props.size ?? 'md'],
		additional: props.class,
	}),
)
</script>

<template>
	<NeoSection v-bind="props.section">
		<div :class="classes">
			<div class="NeoHero-content">
				<NeoHeadlinePrimary
					:tag="props.headingTag ?? 'h1'"
					:color="props.color"
					:align="headlineAlign"
				>
					{{ props.title }}
				</NeoHeadlinePrimary>
				<p v-if="props.subtitle" class="NeoHero-subtitle">{{ props.subtitle }}</p>
				<div v-if="$slots.actions" class="NeoHero-actions">
					<slot name="actions" />
				</div>
			</div>
			<div v-if="$slots.media" class="NeoHero-media">
				<slot name="media" />
			</div>
		</div>
	</NeoSection>
</template>

<style scoped>
@import url('./NeoHero-themed.css');
@import url('./NeoHero-layout.css');

.NeoHero {
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: var(--NeoHero-sizing-gap);
	padding-block: var(--NeoHero-sizing-paddingBlock);
	padding-inline: var(--NeoHero-sizing-paddingInline);

	@mixin bp-md {
		flex-direction: row;
		justify-content: space-between;
	}
}

.NeoHero--centered {
	flex-direction: column;
	text-align: center;

	@mixin bp-md {
		flex-direction: column;
	}
}

.NeoHero-content {
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: var(--NeoHero-sizing-contentGap);
	min-inline-size: 0;
}

.NeoHero--centered .NeoHero-content {
	align-items: center;
	max-inline-size: 720px;
}

.NeoHero-subtitle {
	color: var(--NeoHero-color-subtitle);
	font-size: var(--NeoHero-sizing-subtitleFontSize);
	line-height: var(--NeoHero-sizing-subtitleLineHeight);
	margin: 0;
	overflow-wrap: break-word;
}

.NeoHero-actions {
	display: flex;
	flex-wrap: wrap;
	gap: var(--NeoHero-sizing-actionsGap);
}

.NeoHero--centered .NeoHero-actions {
	justify-content: center;
}

.NeoHero-media {
	flex-shrink: 0;
	inline-size: 100%;
	max-inline-size: 560px;

	@mixin bp-md {
		inline-size: 45%;
	}
}
</style>
