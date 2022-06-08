import { ListItemIcon as MuiListItemIcon } from '@mui/material'

// types
import type { ListItemIconProps } from '@mui/material'

export const ListItemIcon: React.FC<ListItemIconProps> = ({ children, ...rest }) => {
	return <MuiListItemIcon {...rest}>{children}</MuiListItemIcon>
}
