import { Link } from 'react-router-dom'
import { styled, Stack, IconButton, Avatar, Typography } from '@mui/material'

// icons
import { ReactComponent as IconMenu } from '@static/images/icons/menu.svg'
import { ReactComponent as IconBookmarks } from '@static/images/icons/bookmarks.svg'

const LnbWrap = styled('div')(({ theme }) => ({
	// color: `${theme.palette.grey[400]}`,
	width: '65px',
	display: 'flex',
	flex: 'none',
	borderRight: `1px solid ${theme.palette.border[700]}`,
	boxSizing: 'border-box',
}))

/** FIXME: 미사용 */
// const LnbInner = styled('div')(({ theme }) => ({
// 	padding: '13px 11px 12px',
// }))

const LnbMenuIcon = styled('li')(({ theme }) => ({
	padding: '13px 11px 12px',
}))

const LnbMenu = styled('li')(({ theme }) => ({
	padding: '14px 18px 13px',
}))

const LnbLink = styled(Link)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	color: `${theme.palette.grey[600]}`,
	'&:hover, &:focus': {
		color: `${theme.palette.primary.light}`,
	},
}))

const LnbIcon = styled('div')(({ theme }) => ({
	textAlign: 'center',
	width: '20px',
	height: '20px',
	marginBottom: 2,
}))

/** FIXME: 미사용 */
// const LnbUtility = styled('div')(({ theme }) => ({
// 	display: 'flex',
// 	gap: '10px',
// }))

const testMenuData = [
	{
		name: '전체메뉴',
		link: '/',
		icon: <IconMenu />,
	},
	{
		name: '즐겨찾기',
		link: '/',
		icon: <IconBookmarks />,
	},
	{
		name: '사용자',
		link: '/user',
	},
	{
		name: '직무관리',
		link: '/task',
	},
]

interface LnbProps {
	menuData: {
		// type: 'menu' | 'bookmark' | 'default'
		link: string
		name: string
		icon?: JSX.Element
	}[]
}

export const Lnb: React.FC<LnbProps> = ({ menuData = testMenuData }) => {
	return (
		<LnbWrap>
			<ul>
				{menuData.map((menu, idx) =>
					menu.icon ? (
						<LnbMenuIcon key={idx}>
							<LnbLink to={menu.link}>
								<LnbIcon>{menu.icon}</LnbIcon>
								<Typography variant="ct">{menu.name}</Typography>
							</LnbLink>
						</LnbMenuIcon>
					) : (
						<LnbMenu key={idx}>
							<LnbLink to={menu.link}>
								<Typography variant="h4">{menu.name}</Typography>
							</LnbLink>
						</LnbMenu>
					),
				)}
			</ul>
		</LnbWrap>
	)
}
