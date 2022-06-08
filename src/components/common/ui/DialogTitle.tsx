import { DialogTitle as MuiDialogTitle } from '@mui/material'

// types
import type { DialogTitleProps } from '@mui/material'

export const DialogTitle: React.FC<DialogTitleProps> = ({ children, ...rest }) => {
	return <MuiDialogTitle {...rest}>{children}</MuiDialogTitle>
}
