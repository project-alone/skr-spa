import { Avatar as MuiAvatar } from '@mui/material'

// types
import type { AvatarProps } from '@mui/material'

export const Avatar: React.FC<AvatarProps> = ({ children, ...rest }) => {
	return <MuiAvatar {...rest}>{children}</MuiAvatar>
}
