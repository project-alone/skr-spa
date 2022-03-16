// Material Dashboard 2 React base styles
import typography from '@theme/base/typography'
import colors from '@theme/base/colors'

const { size } = typography
const { text } = colors

const dialogContentText = {
	styleOverrides: {
		root: {
			fontSize: size.md,
			color: text.main,
		},
	},
}

export default dialogContentText
