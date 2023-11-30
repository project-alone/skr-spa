import { Typography as MuiTypography } from '@mui/material'

// types
import type { TypographyProps as MuiTypographyProps } from '@mui/material'

type TypographyProps = MuiTypographyProps

export const Typography: React.FC<TypographyProps> = ({ children, ...rest }) => {
	return <MuiTypography {...rest}>{children}</MuiTypography>
}
