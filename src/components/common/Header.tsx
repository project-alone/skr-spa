import { Link } from 'react-router-dom'
import { styled, Stack, Avatar } from '@mui/material'
import { IconButton } from '@components/common'

// icons
import { ReactComponent as IconHelp } from '@static/images/icons/help.svg'
import { ReactComponent as IconSetting } from '@static/images/icons/settings.svg'

const HeaderWrap = styled('div')(({ theme }) => ({
	// color: `${theme.palette.grey[400]}`,
	width: '100%',
	height: '50px',
	borderBottom: `1px solid ${theme.palette.border[700]}`,
}))
const HeaderStyled = {
	Inner: styled('div')(() => ({
		padding: '0 20px',
		display: 'flex',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
	})),
	Logo: styled('h1')(() => ({
		margin: 0,
	})),
	Utility: styled('div')(() => ({
		display: 'flex',
		gap: '10px',
	})),
}
const UserProfile = styled(Avatar)(({ theme }) => ({
	'&.MuiAvatar-root': {
		width: '24px',
		height: '24px',
		borderRadius: 2,
		fontSize: '0.75rem',
		backgroundColor: `${theme.palette.primary.main}`,
	},
}))

export const Header: React.FC = () => {
	return (
		<HeaderWrap>
			<HeaderStyled.Inner>
				<HeaderStyled.Logo>
					<Link to="/">
						<img src="/static/images/logo.svg" alt="SK 렌터카 EV PARK" />
					</Link>
				</HeaderStyled.Logo>
				<HeaderStyled.Utility>
					<Stack direction="row" spacing={5}>
						<IconButton color="function" size="small">
							<IconHelp />
						</IconButton>
						<IconButton color="function" size="small">
							<IconSetting />
						</IconButton>
					</Stack>
					<UserProfile>홍길</UserProfile>
				</HeaderStyled.Utility>
			</HeaderStyled.Inner>
		</HeaderWrap>
	)
}
