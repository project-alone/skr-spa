import { Button as MuiButton } from '@mui/material'

// types
import type { ButtonProps } from '@mui/material'

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
	return <MuiButton {...rest}>{children}</MuiButton>
}
