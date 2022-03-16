// Material Dashboard 2 React helper functions
import pxToRem from '@theme/functions/pxToRem'
import type { Components } from '@mui/material/styles/components'

const icon: Components['MuiIcon'] = {
	defaultProps: {
		baseClassName: 'material-icons-round',
		fontSize: 'inherit',
	},

	styleOverrides: {
		fontSizeInherit: {
			fontSize: 'inherit !important',
		},

		fontSizeSmall: {
			fontSize: `${pxToRem(20)} !important`,
		},

		fontSizeLarge: {
			fontSize: `${pxToRem(36)} !important`,
		},
	},
}

export default icon
