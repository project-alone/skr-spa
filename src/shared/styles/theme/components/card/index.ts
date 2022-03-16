// Material Dashboard 2 React Base Styles
import colors from '@theme/base/colors'
import borders from '@theme/base/borders'
import boxShadows from '@theme/base/boxShadows'

// Material Dashboard 2 React Helper Function
import rgba from '@theme/functions/rgba'
import type { Components } from '@mui/material/styles/components'

const { black, white } = colors
const { borderWidth, borderRadius } = borders
const { md } = boxShadows

const card: Components['MuiCard'] = {
	styleOverrides: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			position: 'relative',
			minWidth: 0,
			wordWrap: 'break-word',
			backgroundColor: white?.main,
			backgroundClip: 'border-box',
			border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
			borderRadius: borderRadius.xl,
			boxShadow: md,
			overflow: 'visible',
		},
	},
}

export default card
