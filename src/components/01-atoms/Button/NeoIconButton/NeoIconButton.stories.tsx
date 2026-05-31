import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, userEvent, within } from 'storybook/test'
import { defineComponent, ref } from 'vue'

import NeoIconButton from '@/components/01-atoms/Button/NeoIconButton/NeoIconButton.vue'
import NeoTooltip from '@/components/01-atoms/Tooltip/NeoTooltip.vue'
import { disabledArgType } from '../../../../../.storybook/utils/argTypes'
import { addIconSvg } from '../../../../../.storybook/utils/iconSnippets'
import { AddIcon, DeleteIcon, HeartIcon, HeartFilledIcon } from '../../Icon/defaultIcons'
import { createSimpleColorShowcase } from '../../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../../.storybook/utils/createA11yPlay'
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
		ariaLabel: {
			control: 'text',
			table: { category: 'Accessibility' },
			description: 'Accessible name for the icon-only button. Required for screen readers.',
		},
		default: {
			control: false,
			table: { category: 'Slots' },
			description: 'The icon content. Pass a raw SVG element or a Vue component.',
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
		default: AddIcon,
	},
	render: (args) =>
		defineComponent({
			name: 'NeoIconButtonRender',
			render: () => <NeoIconButton {...args}>{args.default}</NeoIconButton>,
		}),
	parameters: {
		snapshot: { viewports: ['sm', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoIconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
}

export const Small: Story = {
	tags: ['snapshot'],
	args: { size: 'small' },
}

export const Large: Story = {
	tags: ['snapshot'],
	args: { size: 'large' },
}

export const Rounded: Story = {
	tags: ['snapshot'],
	args: { rounded: true },
}

export const Disabled: Story = {
	tags: ['snapshot'],
	args: { disabled: true },
}

export const Secondary: Story = {
	tags: ['snapshot'],
	args: { variant: 'secondary' },
}

export const Tertiary: Story = {
	tags: ['snapshot'],
	args: { variant: 'tertiary' },
}

export const Ghost: Story = {
	tags: ['snapshot'],
	args: { variant: 'ghost' },
}

export const Delete: Story = {
	tags: ['snapshot'],
	args: {
		ariaLabel: 'Delete item',
		default: DeleteIcon,
	},
}

export const Favourite: Story = {
	tags: ['snapshot'],
	args: {
		color: 'pink',
		ariaLabel: 'Add to favourites',
		default: HeartIcon,
	},
}

export const FavouriteActive: Story = {
	tags: ['snapshot'],
	args: {
		color: 'pink',
		ariaLabel: 'Remove from favourites',
		default: HeartFilledIcon,
	},
}

export const Pressed: Story = {
	tags: ['snapshot'],
	args: {
		pressed: true,
		ariaLabel: 'Favourite (active)',
		default: HeartFilledIcon,
		color: 'pink',
	},
}

export const WithTooltip: Story = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<NeoTooltip text="Add item" placement="bottom">
  <template #activator>
    <NeoIconButton color="blue" variant="primary" ariaLabel="Add item">
      ${addIconSvg}
    </NeoIconButton>
  </template>
</NeoTooltip>`,
			},
		},
	},
	render: () =>
		defineComponent({
			name: 'WithTooltipRender',
			render: () => (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						minBlockSize: '120px',
						padding: '40px 80px',
					}}
				>
					<NeoTooltip text="Add item" placement="bottom">
						{{
							activator: () => (
								<NeoIconButton color="blue" variant="primary" ariaLabel="Add item">
									{AddIcon}
								</NeoIconButton>
							),
						}}
					</NeoTooltip>
				</div>
			),
		}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		await userEvent.hover(canvas.getByRole('button', { name: 'Add item' }))
		await expect(canvas.getByRole('tooltip')).toBeVisible()
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
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
}

export const RTL: Story = {
	tags: ['snapshot'],
	globals: {
		direction: 'rtl',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
}

export const AllColors: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
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
	),
}

export const AllColorsOnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
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

export const AllColorsA11y: Story = {
	...AllColors,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}

export const AllColorsOnDarkA11y: Story = {
	...AllColorsOnDark,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}
