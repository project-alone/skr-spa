// Material Dashboard 2 React helper functions
import pxToRem from '@theme/functions/pxToRem'

// Material Dashboard 2 React base styles
import colors from '@theme/base/colors'
import boxShadows from '@theme/base/boxShadows'
import borders from '@theme/base/borders'

const { transparent } = colors
const { lg } = boxShadows
const { borderRadius } = borders

const popover = {
	styleOverrides: {
		paper: {
			backgroundColor: transparent.main,
			boxShadow: lg,
			padding: pxToRem(8),
			borderRadius: borderRadius.md,
		},
	},
}

export default popover
