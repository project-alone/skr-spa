import { styled } from '@mui/material'
import { TextField, MenuItem, FormControl } from '@mui/material'

//custom textField
const DefaultTextField = styled(TextField)(({ theme }) => ({
	'&.MuiFormControl-root': {
		flexDirection: 'row',
		position: 'relative',
		alignItems: 'center',
	},
	'& .MuiInputLabel-root': {
		display: 'inline',
		Width: '120px',
		flex: '0 0 120px',
	},
	'& .MuiInput-root': {
		width: 'calc(100% - 120px)',
		flex: '0 0 calc(100% - 120px)',
	},
	'& .MuiFormHelperText-root': {
		position: 'absolute',
		left: '120px',
		bottom: '-18px',
	},
}))

//placeholder
interface PlaceholderProps {
	align?: 'left'
}
const Placeholder = styled('div')<PlaceholderProps>(({ theme, align }) => {
	const leftStyle = align === 'left' ? {} : { paddingLeft: '12px' }

	return {
		placeholder: {
			color: `${theme.palette.grey[400]}`,
			...leftStyle,
		},
	}
})

//select
const SelectCombo = styled(MenuItem)(({ theme }) => ({
	height: '30px',
	padding: '8px',
	color: `${theme.palette.grey[700]}`,
	'&:hover': {
		backgroundColor: `${theme.palette.background[300]}`,
		'& .MuiListItemIcon-root': {
			svg: {
				'& path': {
					fill: `${theme.palette.primary.main}`,
				},
			},
		},
		// color: `${theme.palette.primary.main}`,
	},
	'&:disabled': {
		backgroundColor: `${theme.palette.background[700]}`,
	},

	'& .MuiListItemIcon-root': {
		minWidth: '14px',
		marginRight: '5px',
		svg: {
			'& path': {
				fill: `${theme.palette.grey[700]}`,
			},
		},
	},
	'& .MuiListItemText-root': {
		margin: 0,
		'& .MuiTypography-root': {
			margin: 0,
		},
	},
	'&.Mui-selected:hover': {
		backgroundColor: `${theme.palette.background[300]}`,
	},
}))
const DefaultFormControl = styled(FormControl)<{ basic?: boolean }>(({ theme, basic }) =>
	basic
		? {
				'&.MuiFormControl-root': {
					flexDirection: 'row',
					position: 'relative',
					alignItems: 'center',
				},
				'& .MuiInputLabel-root': {
					display: 'inline',
					Width: '120px',
					flex: '0 0 120px',
				},
				'& .MuiInput-root': {
					width: 'calc(100% - 120px)',
					flex: '0 0 calc(100% - 120px)',
				},
		  }
		: {},
)
const LayoutStyled = {
	Container: styled('div')(({ theme }) => ({
		display: 'flex',
		flex: 1,
		width: '100%',
		// flexDirection: "row",
	})),
	Contents: styled('div')(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		// width: "calc(100% - 65px)",
	})),
	Page: styled('div')(({ theme }) => ({
		width: '100%',
		minHeight: 'calc(100% - 57px)',
		// backgroundColor: `${theme.palette.background[700]}`,
		backgroundColor: '#F2F5F5',
		padding: '30px 50px',
	})),
}

export { DefaultTextField, Placeholder, SelectCombo, DefaultFormControl, LayoutStyled }
