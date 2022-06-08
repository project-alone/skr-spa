import { Typography as MuiTypography } from '@mui/material'

// types
import type { TypographyProps } from '@mui/material'

export const Typography: React.FC<TypographyProps> = ({ children, ...rest }) => {
	return <MuiTypography {...rest}>{children}</MuiTypography>
}
