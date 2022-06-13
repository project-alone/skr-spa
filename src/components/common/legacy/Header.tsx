import { Link } from 'react-router-dom'
import { Stack, IconButton } from '@components/common/ui'
import { Wrap, Inner, Logo, Utility, UserProfile } from '@components/common/legacy/Header.styled'
import * as Icons from '@components/common/ui/Icons'

interface HeaderProps {
	userName: string
}

export const Header: React.FC<HeaderProps> = ({ userName = '홍길' }) => {
	return (
		<Wrap>
			<Inner>
				<Logo>
					<Link to="/">
						<img src="/images/logo.svg" alt="SK 렌터카 EV PARK" />
					</Link>
				</Logo>
				<Utility>
					<Stack direction="row" spacing={5}>
						<IconButton color="function" size="small">
							<Icons.IconHelp />
						</IconButton>
						<IconButton color="function" size="small">
							<Icons.IconSetting />
						</IconButton>
					</Stack>
					<UserProfile>{userName}</UserProfile>
				</Utility>
			</Inner>
		</Wrap>
	)
}
