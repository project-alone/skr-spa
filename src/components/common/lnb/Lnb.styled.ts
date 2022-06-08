import { styled } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const Wrap = styled('div')(({ theme }) => ({
	// color: `${theme.palette.grey[400]}`,
	width: '65px',
	display: 'flex',
	flex: 'none',
	borderRight: `1px solid ${theme.palette.border[700]}`,
	boxSizing: 'border-box',
}))

// const Inner = styled('li')(({ theme }) => ({
// 	padding: '13px 11px 12px',
// }))

export const MenuIcon = styled('li')(({ theme }) => ({
	padding: '13px 11px 12px',
}))

export const Menu = styled('li')(({ theme }) => ({
	padding: '14px 18px 13px',
}))

export const Link = styled(RouterLink)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	color: `${theme.palette.grey[600]}`,
	'&:hover, &:focus': {
		color: `${theme.palette.primary.light}`,
	},
}))

export const Icon = styled('div')(({ theme }) => ({
	textAlign: 'center',
	width: '20px',
	height: '20px',
	marginBottom: 2,
}))

// export const Utility = {
// 	display: 'flex',
// 	gap: '10px',
// }
