// @mui material components
import Fade from '@mui/material/Fade'

// Material Dashboard 2 React base styles
import colors from '@theme/base/colors'
import typography from '@theme/base/typography'
import borders from '@theme/base/borders'

// Material Dashboard 2 React helper functions
import pxToRem from '@theme/functions/pxToRem'
import { Components } from '@mui/material'

const { black, light } = colors
const { size, fontWeightRegular } = typography
const { borderRadius } = borders

const tooltip: Components['MuiTooltip'] = {
	defaultProps: {
		arrow: true,
		TransitionComponent: Fade,
	},

	styleOverrides: {
		tooltip: {
			maxWidth: pxToRem(200),
			backgroundColor: black?.main,
			color: light?.main,
			fontSize: size.sm,
			fontWeight: fontWeightRegular,
			textAlign: 'center',
			borderRadius: borderRadius.md,
			opacity: 0.7,
			padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
		},

		arrow: {
			color: black?.main,
		},
	},
}

export default tooltip
