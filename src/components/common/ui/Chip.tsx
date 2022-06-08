import React from 'react'
import { Chip as MuiChip } from '@mui/material'

// types
import type { ChipProps } from '@mui/material'

export const Chip: React.FC<ChipProps> = ({ children, ...rest }) => {
	return <MuiChip {...rest}>{children}</MuiChip>
}
