// Material Dashboard 2 React helper functions
import pxToRem from '@theme/functions/pxToRem'
import type { Components } from '@mui/material/styles/components'

const svgIcon: Components['MuiSvgIcon'] = {
	defaultProps: {
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

export default svgIcon
