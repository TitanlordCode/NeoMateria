import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { colors, type Color } from '@/assets/typescript/colors'

import NeoPennant from './NeoPennant.vue'
import type { NeoPennantProps } from './NeoPennantTypes'

const meta = {
	title: 'Atoms/NeoPennant',
	component: NeoPennant,
	tags: ['autodocs'],
	argTypes: {
		color: { description: 'Theme color of the pennant shape.' },
		href: { control: 'text', table: { category: 'Behavior' } },
		ariaLabel: { control: 'text', table: { category: 'Accessibility' } },
		external: { control: 'boolean', table: { category: 'Behavior' } },
	},
	args: {
		color: 'blue',
	},
} satisfies Meta<typeof NeoPennant>

export default meta
type Story = StoryObj<typeof meta>

const StarIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
	</svg>
)

/* Platform brand icons — paths from Simple Icons (simpleicons.org), CC0 license.
   Logos are trademarks of their respective owners; used here for platform identification. */

const SteamIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
	</svg>
)

const PlayStationIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661 1.848.601 2.04 1.472 1.576 2.072-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073-1.939.331-3.996.196-6.038-.479z" />
	</svg>
)

const EpicGamesIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M3.537 0C2.165 0 1.66.506 1.66 1.879V18.44a4 4 0 0 0 .02.433c.031.3.037.59.316.92c.027.033.311.245.311.245c.153.075.258.13.43.2l8.335 3.491c.433.199.614.276.928.27h.002c.314.006.495-.071.928-.27l8.335-3.492c.172-.07.277-.124.43-.2c0 0 .284-.211.311-.243c.28-.33.285-.621.316-.92a4 4 0 0 0 .02-.434V1.879c0-1.373-.506-1.88-1.878-1.88zm13.366 3.11h.68c1.138 0 1.688.553 1.688 1.696v1.88h-1.374v-1.8c0-.369-.17-.54-.523-.54h-.235c-.367 0-.537.17-.537.539v5.81c0 .369.17.54.537.54h.262c.353 0 .523-.171.523-.54V8.619h1.373v2.143c0 1.144-.562 1.71-1.7 1.71h-.694c-1.138 0-1.7-.566-1.7-1.71V4.82c0-1.144.562-1.709 1.7-1.709zm-12.186.08h3.114v1.274H6.117v2.603h1.648v1.275H6.117v2.774h1.74v1.275h-3.14zm3.816 0h2.198c1.138 0 1.7.564 1.7 1.708v2.445c0 1.144-.562 1.71-1.7 1.71h-.799v3.338h-1.4zm4.53 0h1.4v9.201h-1.4zm-3.13 1.235v3.392h.575c.354 0 .523-.171.523-.54V4.965c0-.368-.17-.54-.523-.54zm-3.74 10.147a1.7 1.7 0 0 1 .591.108a1.8 1.8 0 0 1 .49.299l-.452.546a1.3 1.3 0 0 0-.308-.195a.9.9 0 0 0-.363-.068a.7.7 0 0 0-.28.06a.7.7 0 0 0-.224.163a.8.8 0 0 0-.151.243a.8.8 0 0 0-.056.299v.008a.9.9 0 0 0 .056.31a.7.7 0 0 0 .157.245a.7.7 0 0 0 .238.16a.8.8 0 0 0 .303.058a.8.8 0 0 0 .445-.116v-.339h-.548v-.565H7.37v1.255a2 2 0 0 1-.524.307a1.8 1.8 0 0 1-.683.123a1.6 1.6 0 0 1-.602-.107a1.5 1.5 0 0 1-.478-.3a1.4 1.4 0 0 1-.318-.455a1.4 1.4 0 0 1-.115-.58v-.008a1.4 1.4 0 0 1 .113-.57a1.5 1.5 0 0 1 .312-.46a1.4 1.4 0 0 1 .474-.309a1.6 1.6 0 0 1 .598-.111h.045zm11.963.008a2 2 0 0 1 .612.094a1.6 1.6 0 0 1 .507.277l-.386.546a1.6 1.6 0 0 0-.39-.205a1.2 1.2 0 0 0-.388-.07a.35.35 0 0 0-.208.052a.15.15 0 0 0-.07.127v.008a.16.16 0 0 0 .022.084a.2.2 0 0 0 .076.066a1 1 0 0 0 .147.06q.093.03.236.061a3 3 0 0 1 .43.122a1.3 1.3 0 0 1 .328.17a.7.7 0 0 1 .207.24a.74.74 0 0 1 .071.337v.008a.9.9 0 0 1-.081.382a.8.8 0 0 1-.229.285a1 1 0 0 1-.353.18a1.6 1.6 0 0 1-.46.061a2.2 2.2 0 0 1-.71-.116a1.7 1.7 0 0 1-.593-.346l.43-.514q.416.335.9.335a.46.46 0 0 0 .236-.05a.16.16 0 0 0 .082-.142v-.008a.15.15 0 0 0-.02-.077a.2.2 0 0 0-.073-.066a1 1 0 0 0-.143-.062a3 3 0 0 0-.233-.062a5 5 0 0 1-.413-.113a1.3 1.3 0 0 1-.331-.16a.7.7 0 0 1-.222-.243a.73.73 0 0 1-.082-.36v-.008a.9.9 0 0 1 .074-.359a.8.8 0 0 1 .214-.283a1 1 0 0 1 .34-.185a1.4 1.4 0 0 1 .448-.066zm-9.358.025h.742l1.183 2.81h-.825l-.203-.499H8.623l-.198.498h-.81zm2.197.02h.814l.663 1.08l.663-1.08h.814v2.79h-.766v-1.602l-.711 1.091h-.016l-.707-1.083v1.593h-.754zm3.469 0h2.235v.658h-1.473v.422h1.334v.61h-1.334v.442h1.493v.658h-2.255zm-5.3.897l-.315.793h.624zm-1.145 5.19h8.014l-4.09 1.348z" />
	</svg>
)

const NintendoSwitchIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M14.176 24h3.674c3.376 0 6.15-2.774 6.15-6.15V6.15C24 2.775 21.226 0 17.85 0H14.1c-.074 0-.15.074-.15.15v23.7c-.001.076.075.15.226.15m4.574-13.199c1.351 0 2.399 1.125 2.399 2.398c0 1.352-1.125 2.4-2.399 2.4c-1.35 0-2.4-1.049-2.4-2.4c-.075-1.349 1.05-2.398 2.4-2.398M11.4 0H6.15C2.775 0 0 2.775 0 6.15v11.7C0 21.226 2.775 24 6.15 24h5.25c.074 0 .15-.074.15-.149V.15c.001-.076-.075-.15-.15-.15M9.676 22.051H6.15a4.194 4.194 0 0 1-4.201-4.201V6.15A4.194 4.194 0 0 1 6.15 1.949H9.6zM3.75 7.199c0 1.275.975 2.25 2.25 2.25s2.25-.975 2.25-2.25c0-1.273-.975-2.25-2.25-2.25s-2.25.977-2.25 2.25" />
	</svg>
)

export const Default: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoPennant color="blue">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
</NeoPennant>`,
			},
		},
	},
	render: (args: NeoPennantProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => (
					<div style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
						<NeoPennant {...args}>{StarIcon}</NeoPennant>
					</div>
				)
			},
		})
	},
}

export const Link: Story = {
	args: {
		href: '#platform',
		ariaLabel: 'View platform details',
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Provide href to render an <a> wrapper around the pennant -->
<NeoPennant color="blue" href="#platform" aria-label="View platform details">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
</NeoPennant>`,
			},
		},
	},
	render: (args: NeoPennantProps) => {
		return defineComponent({
			name: 'LinkRender',
			setup() {
				return () => (
					<div style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
						<NeoPennant {...args}>{StarIcon}</NeoPennant>
					</div>
				)
			},
		})
	},
}

const renderColorRow = (dark: boolean) =>
	defineComponent({
		name: `ColorsRender${dark ? 'Dark' : 'Light'}`,
		setup() {
			return () => (
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '24px' }}>
					{colors.map((color: Color) => (
						<NeoPennant key={color} color={color}>
							{StarIcon}
						</NeoPennant>
					))}
				</div>
			)
		},
	})

export const Colors: Story = {
	parameters: {
		docs: {
			source: {
				code: `<!-- NeoPennant supports all theme colors. Pass any SVG as the default slot. -->
<template v-for="color in colors" :key="color">
  <NeoPennant :color="color">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  </NeoPennant>
</template>`,
			},
		},
	},
	render: () => renderColorRow(false),
}

export const ColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		docs: {
			source: {
				code: `<div class="u-onDark">
  <template v-for="color in colors" :key="color">
    <NeoPennant :color="color">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </NeoPennant>
  </template>
</div>`,
			},
		},
	},
	render: () => renderColorRow(true),
}

/**
 * Real gaming platform logos as inline SVGs (Simple Icons, CC0).
 * The `<img>` approach works identically — swap the SVG child for
 * `<img src="/assets/steam-logo.png" alt="" />` and the pennant scales it the same way.
 */
export const PlatformLogoExample: Story = {
	parameters: {
		docs: {
			source: {
				code: `<!-- Pass any SVG as the default slot — NeoPennant clips and scales it automatically.
     An <img> works too: <img src="/assets/steam-logo.png" alt="" /> -->
<NeoPennant color="blueGrey" href="#steam" aria-label="Steam">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0z" />
  </svg>
</NeoPennant>
<NeoPennant color="blue" href="#playstation" aria-label="PlayStation">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502z" />
  </svg>
</NeoPennant>`,
			},
		},
	},
	render: () => {
		return defineComponent({
			name: 'PlatformLogoExampleRender',
			setup() {
				return () => (
					<div
						style={{
							display: 'flex',
							alignItems: 'flex-start',
							gap: '4px',
							background: '#1a1a2e',
							padding: '32px 16px 16px',
							borderRadius: '8px',
							inlineSize: 'fit-content',
						}}
					>
						<NeoPennant color="blueGrey" href="#steam" ariaLabel="Steam">
							{SteamIcon}
						</NeoPennant>
						<NeoPennant color="blue" href="#playstation" ariaLabel="PlayStation">
							{PlayStationIcon}
						</NeoPennant>
						<NeoPennant color="grey" href="#epic" ariaLabel="Epic Games">
							{EpicGamesIcon}
						</NeoPennant>
						<NeoPennant color="red" href="#switch" ariaLabel="Nintendo Switch">
							{NintendoSwitchIcon}
						</NeoPennant>
					</div>
				)
			},
		})
	},
}
