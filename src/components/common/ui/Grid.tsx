import { Grid as MuiGrid } from '@mui/material'

// types
import type { GridProps } from '@mui/material'

export const Grid: React.FC<GridProps> = ({ children, ...rest }) => {
	return <MuiGrid {...rest}>{children}</MuiGrid>
}
