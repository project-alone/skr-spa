import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Lnb } from '@components/common'
import { LayoutStyled } from '@styles/common'

// icons
import { ReactComponent as IconMenu } from '@static/images/icons/menu.svg'
import { ReactComponent as IconBookmarks } from '@static/images/icons/bookmarks.svg'

export const DefaultLayout: React.FC = () => {
	const [menuData] = React.useState([
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
	])

	return (
		<>
			<Header />
			<LayoutStyled.Container>
				<Lnb menuData={menuData} />
				<LayoutStyled.Contents>
					<Outlet />
				</LayoutStyled.Contents>
			</LayoutStyled.Container>
		</>
	)
}
