import { Paper as MuiPaper } from '@mui/material'

// types
import type { PaperProps } from '@mui/material'

export const Paper: React.FC<PaperProps> = ({ children, ...rest }) => {
	return <MuiPaper {...rest}>{children}</MuiPaper>
}
