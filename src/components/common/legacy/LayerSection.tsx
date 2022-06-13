import { Stack } from '@mui/material'
import { omit } from 'lodash-es'

// types
import type { StackProps } from '@mui/material'

type LayerSectionProps = StackProps

export const LayerSection: React.FC<LayerSectionProps> = ({ children, ...rest }) => {
	return (
		<Stack spacing={30} {...omit(rest, ['spacing'])}>
			{children}
		</Stack>
	)
}
