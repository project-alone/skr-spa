import { ButtonGroup as MuiButtonGroup } from '@mui/material'

// types
import type { ButtonGroupProps } from '@mui/material'

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, ...rest }) => {
	return <MuiButtonGroup {...rest}>{children}</MuiButtonGroup>
}
