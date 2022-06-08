import { Switch as MuiSwitch } from '@mui/material'

// types
import type { SwitchProps } from '@mui/material'

export const Switch: React.FC<SwitchProps> = ({ ...rest }) => {
	return <MuiSwitch {...rest} />
}
