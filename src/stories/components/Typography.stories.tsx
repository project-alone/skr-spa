import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { Typography } from '@components/common/ui'

export default {
	title: 'components/Typography',
	component: Typography,
	argTypes: {},
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

export const Primary = Template.bind({})
