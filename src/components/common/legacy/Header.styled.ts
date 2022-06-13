import { styled } from '@mui/material'
import { Avatar } from '@components/common/ui'

export const Wrap = styled('div')(({ theme }) => ({
	// color: `${theme.palette.grey[400]}`,
	width: '100%',
	height: '50px',
	borderBottom: `1px solid ${theme.palette.border[700]}`,
}))

export const Inner = styled('div')(({ theme }) => ({
	padding: '0 20px',
	display: 'flex',
	height: '100%',
	alignItems: 'center',
	justifyContent: 'space-between',
}))

export const Logo = styled('h1')(({ theme }) => ({
	margin: 0,
}))

export const Utility = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: '10px',
}))

export const UserProfile = styled(Avatar)(({ theme }) => ({
	'&.MuiAvatar-root': {
		width: '24px',
		height: '24px',
		borderRadius: 2,
		fontSize: '0.75rem',
		backgroundColor: `${theme.palette.primary.main}`,
	},
}))
