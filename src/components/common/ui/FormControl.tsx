import { DefaultFormControl } from '@styles/common'

// types
import type { FormControlProps as MuiFormControlProps } from '@mui/material'

export interface FormControlProps extends MuiFormControlProps {
	basic?: boolean
}

export const FormControl: React.FC<FormControlProps> = ({ children, ...rest }) => {
	return <DefaultFormControl {...rest}>{children}</DefaultFormControl>
}
