import { ToggleButton as MuiToggleButton } from '@mui/material'

// types
import type { ToggleButtonProps } from '@mui/material'

export const ToggleButton: React.FC<ToggleButtonProps> = ({ children, ...rest }) => {
	return <MuiToggleButton {...rest}>{children}</MuiToggleButton>
}
