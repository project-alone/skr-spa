import { styled, Box, Grid } from '@mui/material'

export const LayerContainer = styled('div')(() => ({
	display: 'flex',
	gap: '30px',
}))

export const GridItemSticky = styled('div')(() => ({
	width: '300px',
	flexShrink: '0',
}))
