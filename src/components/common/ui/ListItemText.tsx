import { ListItemText as MuiListItemText } from '@mui/material'

// types
import type { ListItemTextProps } from '@mui/material'

export const ListItemText: React.FC<ListItemTextProps> = ({ children, ...rest }) => {
	return <MuiListItemText {...rest}>{children}</MuiListItemText>
}
