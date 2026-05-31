import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, defineComponent, h } from 'vue'
import NeoSwitch from './NeoSwitch.vue'
import { switchSizes } from './NeoSwitchTypes'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import { ariaLabelArgType, disabledArgType } from '../../../../.storybook/utils/argTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../.storybook/utils/createA11yPlay'

const meta = {
	title: 'Atoms/NeoSwitch',
	component: NeoSwitch,
	tags: ['autodocs'],
	argTypes: {
		...ariaLabelArgType,
		...disabledArgType,
		label: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Visible label text. Mutually exclusive with `ariaLabel`.',
		},
		color: { description: 'Theme color for the switch track when on.' },
		size: {
			control: 'select',
			options: switchSizes,
			table: { category: 'Appearance' },
			description: 'Controls the switch track size and label font size.',
		},
		modelValue: {
			control: 'boolean',
			table: { category: 'State' },
			description: 'Whether the switch is on (true) or off (false).',
		},
	},
	args: {
		label: 'Enable feature',
		modelValue: false,
		color: 'blue',
		size: 'medium',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
}

export const On: Story = {
	tags: ['snapshot'],
	args: {
		modelValue: true,
	},
}

export const WithLabel: Story = {
	tags: ['snapshot'],
	args: {
		modelValue: true,
		label: 'Dark mode',
	},
}

export const Disabled: Story = {
	tags: ['snapshot'],
	args: {
		disabled: true,
	},
}

export const DisabledOn: Story = {
	tags: ['snapshot'],
	args: {
		disabled: true,
		modelValue: true,
	},
}

export const Small: Story = {
	tags: ['snapshot'],
	args: {
		size: 'small',
		modelValue: true,
	},
}

export const Large: Story = {
	tags: ['snapshot'],
	args: {
		size: 'large',
		modelValue: true,
	},
}

export const WithoutLabel: Story = {
	tags: ['snapshot'],
	args: {
		label: undefined,
		ariaLabel: 'Enable dark mode',
		modelValue: true,
	},
}

export const OnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	args: {
		modelValue: true,
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
}

export const Interactive: Story = {
	tags: ['no-test'],
	render: (args) =>
		defineComponent({
			name: 'InteractiveSwitch',
			setup() {
				const value = ref(args.modelValue ?? false)
				return () => (
					<NeoSwitch
						{...args}
						modelValue={value.value}
						onUpdate:modelValue={(v: boolean) => {
							value.value = v
						}}
					/>
				)
			},
		}),
}

const switchColorVariant = {
	variant: 'on',
	label: 'Switch',
	render: (color: string) =>
		h(NeoSwitch, {
			color: color as SurfaceColor,
			ariaLabel: color,
			modelValue: true,
		}),
}

export const AllColors: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createSimpleColorShowcase(NeoSwitch, [switchColorVariant]),
}

export const AllColorsOnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createSimpleColorShowcase(NeoSwitch, [switchColorVariant], { dark: true }),
}

export const AllColorsA11y: Story = {
	...AllColors,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}
