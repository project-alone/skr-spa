// Material Dashboard 2 React helper functions
import hexToRgb from '@theme/functions/hexToRgb'

function rgba(color = '', opacity: number) {
	return `rgba(${hexToRgb(color)}, ${opacity})`
}

export default rgba
