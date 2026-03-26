import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, userEvent, within } from 'storybook/test'
import { defineComponent, ref } from 'vue'

import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import NeoSpinner from '@/components/01-atoms/Spinner/NeoSpinner.vue'
import { buttonSizes, buttonVariants } from './NeoButtonTypes'
import { ariaLabelArgType, disabledArgType } from '../../../../../.storybook/utils/argTypes'
import { AddIcon, DeleteIcon } from '../../Icon/defaultIcons'
import { createSimpleColorShowcase } from '../../../../../.storybook/utils/colorShowcase'

const meta = {
	title: 'Atoms/Button/NeoButton',
	component: NeoButton,
	tags: ['autodocs'],
	argTypes: {
		...ariaLabelArgType,
		...disabledArgType,
		text: { control: 'text', table: { category: 'Content' } },
		color: {
			description:
				'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: buttonSizes,
			description: 'Controls padding and font size. Defaults to `medium`.',
			table: { category: 'Appearance' },
		},
		variant: {
			control: 'select',
			options: buttonVariants,
			description:
				'Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.',
			table: { category: 'Appearance' },
		},
		rounded: {
			control: 'boolean',
			description: 'Applies fully rounded corners (`border-radius: 9999px`) for a pill shape.',
			table: { category: 'Appearance' },
		},
		fullWidth: {
			control: 'boolean',
			description: "Stretches the button to fill its container's full inline size.",
			table: { category: 'Appearance' },
		},
		pressed: {
			control: 'boolean',
			description:
				'Marks the button as toggled on. Sets `aria-pressed="true"` and applies the `NeoButton--pressed` CSS modifier.',
			table: { category: 'State' },
		},
	},
	args: {
		text: 'Click me',
		size: 'medium',
		color: 'blue',
		variant: 'primary',
		disabled: false,
		rounded: false,
		fullWidth: false,
		onClick: fn(),
	},
} satisfies Meta<typeof NeoButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Small: Story = {
	args: {
		size: 'small',
	},
}
export const large: Story = {
	args: {
		size: 'large',
	},
}

export const Disabled: Story = {
	args: {
		text: 'Disabled NeoButton',
		disabled: true,
	},
}

export const Rounded: Story = {
	args: {
		text: 'Rounded NeoButton',
		rounded: true,
	},
}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
}

export const Tertiary: Story = {
	args: {
		variant: 'tertiary',
	},
}

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		text: 'Ghost Button',
	},
}

export const GhostWithIcon: Story = {
	args: {
		variant: 'ghost',
		text: 'Expand',
		iconEnd: () => AddIcon,
	},
}

export const FullWidth: Story = {
	args: {
		variant: 'ghost',
		text: 'Full Width Button',
		fullWidth: true,
		iconEnd: () => AddIcon,
	},
}

export const WithIconStart: Story = {
	args: {
		text: 'With Icon Start',
		iconStart: () => AddIcon,
	},
}

export const WithIconEnd: Story = {
	args: {
		text: 'With Icon End',
		iconEnd: () => DeleteIcon,
	},
}

export const WithIconStartAndEnd: Story = {
	args: {
		text: 'With Both Icon',
		iconStart: () => AddIcon,
		iconEnd: () => DeleteIcon,
	},
}

export const Pressed: Story = {
	args: {
		pressed: true,
	},
}

export const PressedDisabled: Story = {
	args: {
		pressed: true,
		disabled: true,
	},
}

export const SlotDefault: Story = {
	parameters: {
		docs: {
			source: {
				code: `<!-- Use the default slot for custom button content -->
<NeoButton color="blue" variant="primary">
  <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  <span>Processing...</span>
</NeoButton>`,
			},
		},
	},
	render: (args) => {
		return defineComponent({
			name: 'SlotDefaultRender',
			setup() {
				return () => (
					<NeoButton
						color={args.color}
						variant={args.variant}
						v-slots={{
							default: () => (
								<>
									<NeoSpinner size="small" color={args.color} ariaHidden={true} />
									<span>Processing...</span>
								</>
							),
						}}
					/>
				)
			},
		})
	},
}

export const Loading: Story = {
	args: {
		text: 'Loading...',
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Use the prefix slot for a leading spinner -->
<NeoButton text="Loading..." color="blue" variant="primary">
  <template #prefix>
    <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  </template>
</NeoButton>`,
			},
		},
	},
	render: (args) => {
		return defineComponent({
			name: 'LoadingRender',
			setup() {
				return () => (
					<NeoButton
						{...args}
						v-slots={{
							prefix: () => <NeoSpinner size="small" color={args.color} ariaHidden={true} />,
						}}
					/>
				)
			},
		})
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
					<NeoButton
						color="blue"
						variant="primary"
						onClick={() => {
							clicked.value = true
						}}
					>
						{clicked.value ? 'Clicked!' : 'Click me'}
					</NeoButton>
				)
			},
		}),
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		await step('Click fires and updates component state', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Click me' }))
			await expect(canvas.getByRole('button')).toHaveTextContent('Clicked!')
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
	args: {
		text: 'انقر هنا',
	},
}

export const AllColors: Story = {
	render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary', 'ghost']),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary', 'ghost'], {
		dark: true,
	}),
}
