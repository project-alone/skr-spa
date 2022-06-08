import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material'

// types
import type { BreadcrumbsProps } from '@mui/material'

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children, ...rest }) => {
	return <MuiBreadcrumbs {...rest}>{children}</MuiBreadcrumbs>
}
