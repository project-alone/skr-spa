import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@components/common/legacy'
import { Lnb } from '@components/common/lnb/Lnb'
import { LayoutStyled } from '@styles/common'
import type { MenuItemProps } from '@components/common/lnb/LnbItem'

// icons
import { ReactComponent as IconMenu } from '@static/images/icons/menu.svg'
import { ReactComponent as IconBookmarks } from '@static/images/icons/bookmarks.svg'

export const DefaultLayout: React.FC = () => {
	const [menuData] = React.useState<MenuItemProps[]>([
		{
			type: 'menu',
			name: '전체메뉴',
			to: '/',
		},
		{
			type: 'bookmark',
			name: '즐겨찾기',
			to: '/',
		},
		{
			type: 'basic',
			name: '사용자',
			to: '/user',
		},
		{
			type: 'basic',
			name: '직무관리',
			to: '/task',
		},
	])

	return (
		<>
			<Header userName="홍길동" />
			<LayoutStyled.Container>
				<Lnb menuData={menuData} />
				<LayoutStyled.Contents>
					<Outlet />
				</LayoutStyled.Contents>
			</LayoutStyled.Container>
		</>
	)
}
