import { InputAdornment as MuiInputAdornment } from '@mui/material'

// types
import type { InputAdornmentProps } from '@mui/material'

export const InputAdornment: React.FC<InputAdornmentProps> = ({ children, ...rest }) => {
	return <MuiInputAdornment {...rest}>{children}</MuiInputAdornment>
}
