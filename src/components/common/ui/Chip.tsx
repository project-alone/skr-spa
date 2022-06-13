import React from 'react'
import { Chip as MuiChip } from '@mui/material'

// types
import type { ChipProps as MuiChipProps } from '@mui/material'

export type ChipProps = MuiChipProps

export const Chip: React.FC<ChipProps> = ({ children, ...rest }) => {
	return <MuiChip {...rest}>{children}</MuiChip>
}
