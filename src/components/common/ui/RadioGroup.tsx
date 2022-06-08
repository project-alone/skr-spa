import { RadioGroup as MuiRadioGroup } from '@mui/material'

// types
import type { RadioGroupProps } from '@mui/material'

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, ...rest }) => {
	return <MuiRadioGroup {...rest}>{children}</MuiRadioGroup>
}
