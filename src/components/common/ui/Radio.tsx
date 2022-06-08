import { Radio as MuiRadio } from '@mui/material'

// types
import type { RadioProps } from '@mui/material'

export const Radio: React.VFC<RadioProps> = ({ ...rest }) => {
	return <MuiRadio {...rest} />
}
