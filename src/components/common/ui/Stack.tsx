import { Stack as MuiStack } from '@mui/material'

// types
import type { StackProps } from '@mui/material'

export const Stack: React.FC<StackProps> = ({ children, ...rest }) => {
	return <MuiStack {...rest}>{children}</MuiStack>
}
