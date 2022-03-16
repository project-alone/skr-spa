// Material Dashboard 2 React base styles
import borders from '@theme/base/borders'
import colors from '@theme/base/colors'

// Material Dashboard 2 React helper functions
import pxToRem from '@theme/functions/pxToRem'
import type { Components } from '@mui/material'

const { borderRadius } = borders
const { light } = colors

const linearProgress: Components['MuiLinearProgress'] = {
	styleOverrides: {
		root: {
			height: pxToRem(6),
			borderRadius: borderRadius.md,
			overflow: 'visible',
			position: 'relative',
		},

		colorPrimary: {
			backgroundColor: light?.main,
		},

		colorSecondary: {
			backgroundColor: light?.main,
		},

		bar: {
			height: pxToRem(6),
			borderRadius: borderRadius.sm,
			position: 'absolute',
			transform: `translate(0, 0) !important`,
			transition: 'width 0.6s ease !important',
		},
	},
}

export default linearProgress
