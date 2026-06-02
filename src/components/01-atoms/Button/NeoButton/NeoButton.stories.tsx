import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, userEvent, within } from 'storybook/test'
import { defineComponent, ref } from 'vue'

import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import NeoSpinner from '@/components/01-atoms/Spinner/NeoSpinner.vue'
import { buttonSizes, buttonVariants } from './NeoButtonTypes'
import { ariaLabelArgType, disabledArgType } from '../../../../../.storybook/utils/argTypes'
import { AddIcon, DeleteIcon } from '../../Icon/defaultIcons'
import { createSimpleColorShowcase } from '../../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../../.storybook/utils/createA11yPlay'

const meta = {
	title: 'Atoms/Button/NeoButton',
	component: NeoButton,
	tags: ['autodocs', 'grimeria'],
	argTypes: {
		...ariaLabelArgType,
		...disabledArgType,
		text: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Button label text. Falls back to the default slot if omitted.',
		},
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
		default: {
			control: false,
			description:
				'Default slot content rendered inside the button. Falls back to the `text` prop if empty.',
			table: { category: 'Slots' },
		},
		prefix: {
			control: false,
			description: 'Content rendered before the label and start icon (e.g. a loading spinner).',
			table: { category: 'Slots' },
		},
		iconStart: {
			control: false,
			description:
				'Icon rendered at the leading edge of the button. Pass a raw SVG element or a Vue component.',
			table: { category: 'Slots' },
		},
		iconEnd: {
			control: false,
			description:
				'Icon rendered at the trailing edge of the button. Pass a raw SVG element or a Vue component.',
			table: { category: 'Slots' },
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
	render: (args) =>
		defineComponent({
			name: 'NeoButtonRender',
			render: () => (
				<NeoButton
					{...args}
					v-slots={{
						...(args.iconStart ? { iconStart: () => args.iconStart } : {}),
						...(args.iconEnd ? { iconEnd: () => args.iconEnd } : {}),
					}}
				/>
			),
		}),
	parameters: {
		snapshot: { viewports: ['sm', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
}
export const Small: Story = {
	tags: ['snapshot'],
	args: {
		size: 'small',
	},
}
export const large: Story = {
	tags: ['snapshot'],
	args: {
		size: 'large',
	},
}

export const Disabled: Story = {
	tags: ['snapshot'],
	args: {
		text: 'Disabled NeoButton',
		disabled: true,
	},
}

export const Rounded: Story = {
	tags: ['snapshot'],
	args: {
		text: 'Rounded NeoButton',
		rounded: true,
	},
}

export const Secondary: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'secondary',
	},
}

export const Tertiary: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'tertiary',
	},
}

export const Ghost: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'ghost',
		text: 'Ghost Button',
	},
}

export const GhostWithIcon: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'ghost',
		text: 'Expand',
		iconEnd: AddIcon,
	},
}

export const FullWidth: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'ghost',
		text: 'Full Width Button',
		fullWidth: true,
		iconEnd: AddIcon,
	},
}

export const WithIconStart: Story = {
	tags: ['snapshot'],
	args: {
		text: 'With Icon Start',
		iconStart: AddIcon,
	},
}

export const WithIconEnd: Story = {
	tags: ['snapshot'],
	args: {
		text: 'With Icon End',
		iconEnd: DeleteIcon,
	},
}

export const WithIconStartAndEnd: Story = {
	tags: ['snapshot'],
	args: {
		text: 'With Both Icon',
		iconStart: AddIcon,
		iconEnd: DeleteIcon,
	},
}

export const Pressed: Story = {
	tags: ['snapshot'],
	args: {
		pressed: true,
	},
}

export const PressedDisabled: Story = {
	tags: ['snapshot'],
	args: {
		pressed: true,
		disabled: true,
	},
}

export const SlotDefault: Story = {
	tags: ['snapshot'],
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
	tags: ['snapshot'],
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
	args: {
		text: 'انقر هنا',
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
	render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary', 'ghost']),
}

export const AllColorsOnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary', 'ghost'], {
		dark: true,
	}),
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
