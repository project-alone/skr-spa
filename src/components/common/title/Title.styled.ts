import { styled } from '@mui/material'
import { Box, Stack, Typography } from '@components/common/ui'

export const PageTitleWrap = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	paddingBottom: '16px',
}))

export const PageTitleItem = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '5px',
}))

export const SubTitleWrap = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}))

export const SubTitleArea = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '5px',
	'&:before': {
		content: "''",
		display: 'inline-block',
		width: '6px',
		height: '6px',
		clear: 'both',
		backgroundColor: `${theme.palette.primary.bright}`,
		borderRadius: 1,
	},
}))

export const SubTitleDescription = styled(Typography)(({ theme }) => ({
	color: `${theme.palette.grey[600]}`,
}))

export const TableTitleWrap = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}))

export const TableTitleArea = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '5px',
	'&:before': {
		content: "''",
		display: 'inline-block',
		width: '6px',
		height: '6px',
		clear: 'both',
		backgroundColor: `${theme.palette.primary.bright}`,
		borderRadius: 1,
	},
}))

export const TableTitleDescription = styled(Typography)(({ theme }) => ({
	color: `${theme.palette.grey[600]}`,
}))

export const LayerSectionTitle = styled(Box)({
	display: 'flex',
	width: '100%',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingBottom: '25px',
})

export const LayerSectionContent = styled(Stack)({
	gap: '5px',
	alignItems: 'flex-end',
	flexDirection: 'row !important' as 'row',
})
