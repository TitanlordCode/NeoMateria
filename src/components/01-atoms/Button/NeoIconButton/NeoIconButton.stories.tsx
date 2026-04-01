import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, userEvent, within } from 'storybook/test'
import { defineComponent, ref } from 'vue'

import NeoIconButton from '@/components/01-atoms/Button/NeoIconButton/NeoIconButton.vue'
import { disabledArgType } from '../../../../../.storybook/utils/argTypes'
import { AddIcon, DeleteIcon, HeartIcon, HeartFilledIcon } from '../../Icon/defaultIcons'
import { createSimpleColorShowcase } from '../../../../../.storybook/utils/colorShowcase'
import { iconButtonSizes, iconButtonVariants } from './NeoIconButtonTypes'

const meta = {
	title: 'Atoms/Button/NeoIconButton',
	component: NeoIconButton,
	tags: ['autodocs'],
	argTypes: {
		...disabledArgType,
		color: {
			description:
				'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: iconButtonSizes,
			description: "Controls the button's overall size (padding and icon area).",
			table: { category: 'Appearance' },
		},
		variant: {
			control: 'select',
			options: iconButtonVariants,
			description:
				'Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.',
			table: { category: 'Appearance' },
		},
		rounded: {
			control: 'boolean',
			description: 'Applies fully rounded corners for a circular shape.',
			table: { category: 'Appearance' },
		},
		pressed: {
			control: 'boolean',
			description: 'Marks the button as toggled on. Sets `aria-pressed="true"`.',
			table: { category: 'State' },
		},
		ariaLabel: { control: 'text', table: { category: 'Accessibility' } },
		default: {
			control: false,
			table: { category: 'Slots' },
		},
	},
	args: {
		color: 'blue',
		size: 'medium',
		variant: 'primary',
		disabled: false,
		rounded: false,
		ariaLabel: 'Add item',
		onClick: fn(),
		default: () => AddIcon,
	},
} satisfies Meta<typeof NeoIconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
	args: { size: 'small' },
}

export const Large: Story = {
	args: { size: 'large' },
}

export const Rounded: Story = {
	args: { rounded: true },
}

export const Disabled: Story = {
	args: { disabled: true },
}

export const Secondary: Story = {
	args: { variant: 'secondary' },
}

export const Tertiary: Story = {
	args: { variant: 'tertiary' },
}

export const Ghost: Story = {
	args: { variant: 'ghost' },
}

export const Delete: Story = {
	args: {
		ariaLabel: 'Delete item',
		default: () => DeleteIcon,
	},
}

export const Favourite: Story = {
	args: {
		color: 'pink',
		ariaLabel: 'Add to favourites',
		default: () => HeartIcon,
	},
}

export const FavouriteActive: Story = {
	args: {
		color: 'pink',
		ariaLabel: 'Remove from favourites',
		default: () => HeartFilledIcon,
	},
}

export const Pressed: Story = {
	args: {
		pressed: true,
		ariaLabel: 'Favourite (active)',
		default: () => HeartFilledIcon,
		color: 'pink',
	},
}

export const interaction: Story = {
	tags: ['!dev'],
	render: () =>
		defineComponent({
			name: 'InteractionRender',
			setup() {
				const clicked = ref(false)
				return () => (
					<NeoIconButton
						color="blue"
						variant="primary"
						ariaLabel={clicked.value ? 'Clicked!' : 'Click me'}
						onClick={() => {
							clicked.value = true
						}}
					>
						{AddIcon}
					</NeoIconButton>
				)
			},
		}),
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		await step('Click fires and updates aria-label', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Click me' }))
			await expect(canvas.getByRole('button', { name: 'Clicked!' })).toBeInTheDocument()
		})
	},
}

export const OnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
}

export const RTL: Story = {
	globals: {
		direction: 'rtl',
	},
}

export const AllColors: Story = {
	render: createSimpleColorShowcase(
		NeoIconButton,
		iconButtonVariants.map((variant) => ({
			variant,
			render: (color) => (
				<NeoIconButton color={color} variant={variant} ariaLabel="Action">
					{AddIcon}
				</NeoIconButton>
			),
		})),
	),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	render: createSimpleColorShowcase(
		NeoIconButton,
		iconButtonVariants.map((variant) => ({
			variant,
			render: (color) => (
				<NeoIconButton color={color} variant={variant} ariaLabel="Action">
					{AddIcon}
				</NeoIconButton>
			),
		})),
		{ dark: true },
	),
}
