import { DialogContent as MuiDialogContent } from '@mui/material'

// types
import type { DialogContentProps } from '@mui/material'

export const DialogContent: React.FC<DialogContentProps> = ({ children, ...rest }) => {
	return <MuiDialogContent {...rest}>{children}</MuiDialogContent>
}
