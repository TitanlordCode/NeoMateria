import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NeoSpinner from './NeoSpinner.vue'
import NeoButton from '../Button/NeoButton/NeoButton.vue'
import { defineComponent } from 'vue'
import type { NeoSpinnerProps } from './NeoSpinnerTypes'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import { spinnerSizes } from './NeoSpinnerTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../.storybook/utils/createA11yPlay'

const meta = {
	title: 'Atoms/NeoSpinner',
	component: NeoSpinner,
	tags: ['autodocs'],
	argTypes: {
		color: { description: 'Theme color of the spinning indicator.' },
		size: {
			control: 'select',
			options: spinnerSizes,
			table: { category: 'Appearance' },
			description: 'Controls the spinner diameter.',
		},
		label: {
			control: 'text',
			table: { category: 'Accessibility' },
			description: 'Visible text label rendered alongside the spinner.',
		},
		ariaLabel: {
			control: 'text',
			table: { category: 'Accessibility' },
			description:
				"Screen-reader label when no visible label is shown. Defaults to 'Loading' if omitted.",
		},
	},
	args: {
		size: 'medium',
		color: 'blue',
		ariaLabel: 'Loading',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoSpinner>

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

export const Large: Story = {
	tags: ['snapshot'],
	args: {
		size: 'large',
	},
}

export const LabelRow: Story = {
	tags: ['snapshot'],
	args: {
		label: 'Please wait...',
		dir: 'row',
	},
}
export const CustomLabel: Story = {
	tags: ['snapshot'],
	args: {
		label: 'Please wait...',
	},
}

export const WithoutLabel: Story = {
	tags: ['snapshot'],
}

export const InButton: Story = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<NeoButton text="Loading..." color="blue" variant="primary">
  <template #prefix>
    <NeoSpinner size="small" color="blue" :aria-hidden="true" />
  </template>
</NeoButton>`,
			},
		},
	},
	render: (args: NeoSpinnerProps) => {
		return defineComponent({
			name: 'InButtonRender',
			setup() {
				return () => (
					<NeoButton
						color={args.color as SurfaceColor}
						variant="primary"
						text="Loading..."
						v-slots={{
							prefix: () => <NeoSpinner size="small" color={args.color} ariaHidden={true} />,
						}}
					/>
				)
			},
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
		label: 'جاري التحميل...',
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
	render: createSimpleColorShowcase(NeoSpinner, [
		{
			variant: 'default',
			label: 'Spinner',
			render: (color, _, args) => {
				return (
					<NeoSpinner
						{...args}
						ariaLabel={undefined}
						ariaHidden={undefined}
						color={color}
						label={color}
					/>
				)
			},
		},
	]),
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
		NeoSpinner,
		[
			{
				variant: 'default',
				label: 'Spinner',
				render: (color, _, args) => {
					return (
						<NeoSpinner
							{...args}
							ariaLabel={undefined}
							ariaHidden={undefined}
							color={color}
							label={color}
						/>
					)
				},
			},
		],
		{
			dark: true,
		},
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
