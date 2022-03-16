// Material Dashboard 2 React base styles
import boxShadows from '@theme/base/boxShadows'
import typography from '@theme/base/typography'
import colors from '@theme/base/colors'
import borders from '@theme/base/borders'

// Material Dashboard 2 React helper functions
import pxToRem from '@theme/functions/pxToRem'
import { Components } from '@mui/material/'

const { lg } = boxShadows
const { size } = typography
const { text, white } = colors
const { borderRadius } = borders

const menu: Components['MuiMenu'] = {
	defaultProps: {
		disableAutoFocusItem: true,
	},

	styleOverrides: {
		paper: {
			minWidth: pxToRem(160),
			boxShadow: lg,
			padding: `${pxToRem(16)} ${pxToRem(8)}`,
			fontSize: size.sm,
			color: text.main,
			textAlign: 'left',
			backgroundColor: `${white.main} !important`,
			borderRadius: borderRadius.md,
		},
	},
}

export default menu
