import { Pagination as MuiPagination } from '@mui/material'

// type
import type { PaginationProps } from '@mui/material'

export const Pagination: React.FC<PaginationProps> = ({ children, ...rest }) => {
	return <MuiPagination {...rest}>{children}</MuiPagination>
}
