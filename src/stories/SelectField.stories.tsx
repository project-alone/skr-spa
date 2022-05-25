import { SelectField } from '@components/common'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
	title: 'Example/SelectField',
	component: SelectField,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof SelectField>

const Template: ComponentStory<typeof SelectField> = (args) => <SelectField {...args} />

export const Default = Template.bind({})
Default.args = {
	label: '과일',
	style: { width: 200 },
	option: ['banana', 'orange', 'storawberry'],
}

export const Icon = Template.bind({})
Icon.args = {
	label: '과일',
	style: { width: 200 },
	option: ['banana', 'orange', 'storawberry'],
	isIcon: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
	label: '과일',
	style: { width: 200 },
	option: ['banana', 'orange', 'storawberry'],
	isIcon: true,
	disabled: true,
}
