import { Dialog as MuiDialog } from '@mui/material'

// types
import type { DialogProps } from '@mui/material'

export const Dialog: React.FC<DialogProps> = ({ children, ...rest }) => {
	return <MuiDialog {...rest}>{children}</MuiDialog>
}
