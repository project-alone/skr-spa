import { styled } from '@mui/material'
import { Paper } from '@components/common/ui'

export const SectionStyle = styled(Paper)(({ theme }) => ({
	position: 'relative',
	height: 'auto',
	padding: '30px',
	margin: 0,
	border: 'none',
	borderRadius: `${theme.shape.borderRadius}px`,
	boxShadow: `${theme.shadows[2]}`,
	'&.section': {
		'&-default': {
			padding: '30px',
		},
		'&-data': {
			padding: '30px 30px 25px 30px',
		},
	},
}))
