import { DialogTitle as MuiDialogTitle } from '@mui/material'

// types
import type { DialogTitleProps as MuiDialogTitleProps } from '@mui/material'

export type DialogTitleProps = MuiDialogTitleProps

export const DialogTitle: React.FC<DialogTitleProps> = ({ children, ...rest }) => {
	return <MuiDialogTitle {...rest}>{children}</MuiDialogTitle>
}
