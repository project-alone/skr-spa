import { Box as MuiBox } from '@mui/material'

// types
import type { BoxProps } from '@mui/material'

export const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
	return <MuiBox {...rest}>{children}</MuiBox>
}
