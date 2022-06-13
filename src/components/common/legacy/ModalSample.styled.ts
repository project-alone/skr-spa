import { Dialog } from '@components/common/ui'
import { styled } from '@mui/material'

export const ModalStyled = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogTitle-root': {
		fontSize: `${theme.typography.h4.fontSize}`,
		fontWeight: `${theme.typography.h4.fontWeight}`,
		display: 'flex',
		alignItems: 'center',
		gap: '5px',
		position: 'relative',
		'&:before': {
			content: "''",
			display: 'inline-block',
			width: '6px',
			height: '6px',
			backgroundColor: `${theme.palette.primary.bright}`,
			clear: 'both',
			borderRadius: 1,
		},
		'& .MuiIconButton-root': {
			width: '24px',
			height: '24px',
			padding: '5.62px',
			svg: {
				width: '100%',
				height: '100%',
			},
			position: 'absolute',
			right: 0,
			top: '50%',
			transform: 'translateY(-50%)',
		},
	},
}))
