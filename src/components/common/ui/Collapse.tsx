import { Collapse as MuiCollapse } from '@mui/material'

// types
import type { CollapseProps } from '@mui/material'

export const Collapse: React.FC<CollapseProps> = ({ children, ...rest }) => {
	return <MuiCollapse {...rest}>{children}</MuiCollapse>
}
