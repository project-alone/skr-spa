// Material Dashboard 2 React Button Styles
import root from '@styles/theme/components/button/root'
import contained from '@theme/components/button/contained'
import outlined from '@theme/components/button/outlined'
import buttonText from '@theme/components/button/text'
import type { Components } from '@mui/material/styles/components'

const button: Components['MuiButton'] = {
	defaultProps: {
		disableRipple: false,
	},
	styleOverrides: {
		root: { ...root },
		contained: { ...contained.base },
		containedSizeSmall: { ...contained.small },
		containedSizeLarge: { ...contained.large },
		containedPrimary: { ...contained.primary },
		containedSecondary: { ...contained.secondary },
		outlined: { ...outlined.base },
		outlinedSizeSmall: { ...outlined.small },
		outlinedSizeLarge: { ...outlined.large },
		outlinedPrimary: { ...outlined.primary },
		outlinedSecondary: { ...outlined.secondary },
		text: { ...buttonText.base },
		textSizeSmall: { ...buttonText.small },
		textSizeLarge: { ...buttonText.large },
		textPrimary: { ...buttonText.primary },
		textSecondary: { ...buttonText.secondary },
	},
}

export default button
