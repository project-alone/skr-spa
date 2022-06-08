import { Select as MuiSelect } from '@mui/material'

// types
import type { SelectProps } from '@mui/material'

export const Select: React.FC<SelectProps> = ({ children, ...rest }) => {
	return <MuiSelect {...rest}>{children}</MuiSelect>
}
