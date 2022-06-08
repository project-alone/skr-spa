import { FormControl as MuiFormControl } from '@mui/material'

// types
import type { FormControlProps } from '@mui/material'

export const FormControl: React.FC<FormControlProps> = ({ children, ...rest }) => {
	return <MuiFormControl {...rest}>{children}</MuiFormControl>
}
