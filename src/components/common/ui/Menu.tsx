import { Menu as MuiMenu } from '@mui/material'

// types
import type { MenuProps } from '@mui/material'

export const Menu: React.FC<MenuProps> = ({ children, ...rest }) => {
	return <MuiMenu {...rest}>{children}</MuiMenu>
}
