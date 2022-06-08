import { InputLabel as MuiInputLabel } from '@mui/material'

// types
import type { InputLabelProps } from '@mui/material'

export const InputLabel: React.FC<InputLabelProps> = ({ children, ...rest }) => {
	return <MuiInputLabel {...rest}>{children}</MuiInputLabel>
}
