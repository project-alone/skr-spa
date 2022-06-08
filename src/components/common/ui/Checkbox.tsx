import { Checkbox as MuiCheckBox } from '@mui/material'

// types
import type { CheckboxProps } from '@mui/material'

export const Checkbox: React.FC<CheckboxProps> = ({ children, ...rest }) => {
	return <MuiCheckBox {...rest}>{children}</MuiCheckBox>
}
