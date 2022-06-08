import { FormControlLabel as MuiFormControlLabel } from '@mui/material'

// types
import type { FormControlLabelProps } from '@mui/material'

export const FormControlLabel: React.VFC<FormControlLabelProps> = ({ ...rest }) => {
	return <MuiFormControlLabel {...rest} />
}
