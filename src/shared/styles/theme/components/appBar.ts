import { Components } from '@mui/material'

const appBar: Components['MuiAppBar'] = {
	defaultProps: {
		color: 'transparent',
	},

	styleOverrides: {
		root: {
			boxShadow: 'none',
		},
	},
}

export default appBar
