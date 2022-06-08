import { Tooltip as MuiTooltip } from '@mui/material'

// types
import type { TooltipProps } from '@mui/material'

export const Tooltip: React.FC<TooltipProps> = ({ children, ...rest }) => {
	return <MuiTooltip {...rest}>{children}</MuiTooltip>
}
