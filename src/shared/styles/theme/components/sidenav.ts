// Material Dashboard 2 React base styles
import colors from '@theme/base/colors'
import borders from '@theme/base/borders'

// Material Dashboard 2 React helper functions
import pxToRem from '@theme/functions/pxToRem'
import type { Components } from '@mui/material/styles/components'

const { white } = colors
const { borderRadius } = borders

const sidenav: Components['MuiDrawer'] = {
	styleOverrides: {
		root: {
			width: pxToRem(250),
			whiteSpace: 'nowrap',
			border: 'none',
		},

		paper: {
			width: pxToRem(250),
			backgroundColor: white?.main,
			height: `calc(100vh - ${pxToRem(32)})`,
			margin: pxToRem(16),
			borderRadius: borderRadius.xl,
			border: 'none',
		},

		paperAnchorDockedLeft: {
			borderRight: 'none',
		},
	},
}

export default sidenav
