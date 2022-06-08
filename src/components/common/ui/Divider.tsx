import { Divider as MuiDivider } from '@mui/material'

// types
import type { DividerProps } from '@mui/material'

export const Divider: React.FC<DividerProps> = ({ children, ...rest }) => {
	return <MuiDivider {...rest}>{children}</MuiDivider>
}
