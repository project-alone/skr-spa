import { DialogActions as MuiDialogActions } from '@mui/material'

// types
import type { DialogActionsProps } from '@mui/material'

export const DialogActions: React.FC<DialogActionsProps> = ({ children, ...rest }) => {
	return <MuiDialogActions {...rest}>{children}</MuiDialogActions>
}
