import { SelectField } from '@components/common/select/SelectField'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
	title: 'Example/SelectField',
	component: SelectField,
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof SelectField>

const Template: ComponentStory<typeof SelectField> = (args) => <SelectField {...args} />

export const Default = Template.bind({})
Default.args = {
	style: {
		sx: {
			width: 400,
		},
	},
	option: ['banana', 'orange', 'strawberry'],
	label: '과일',
}

export const Icon = Template.bind({})
Icon.args = {
	style: {
		sx: {
			width: 400,
		},
	},
	label: '과일',
	isIcon: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
	style: {
		sx: {
			width: 400,
		},
	},
	label: '과일',
	isIcon: true,
	disabled: true,
}
