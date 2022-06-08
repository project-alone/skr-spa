import { FormGroup as MuiFormGroup } from '@mui/material'

// types
import type { FormGroupProps } from '@mui/material'

export const FormGroup: React.FC<FormGroupProps> = ({ children, ...rest }) => {
	return <MuiFormGroup {...rest}>{children}</MuiFormGroup>
}
