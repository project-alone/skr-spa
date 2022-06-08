import React from 'react'
import { IconButton as MuiIconButton } from '@mui/material'

// types
import type { IconButtonProps } from '@mui/material'

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	({ children, ...rest }, ref) => {
		return (
			<MuiIconButton {...rest} ref={ref}>
				{children}
			</MuiIconButton>
		)
	},
)

IconButton.displayName = 'IconButton'
