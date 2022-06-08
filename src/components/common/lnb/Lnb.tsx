import React from 'react'
import { Wrap } from '@components/common/lnb/Lnb.styled'
import LnbItem from '@components/common/lnb/LnbItem'

// types
import type { MenuItemProps } from '@components/common/lnb/LnbItem'

const testMenuData: MenuItemProps[] = [
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
]

interface LnbProps {
	menuData: MenuItemProps[]
}

const Lnb: React.FC<LnbProps> = ({ menuData = testMenuData }) => {
	return (
		<Wrap>
			<ul>
				{menuData.map((item, index) => (
					<LnbItem key={`lnb-menuitem-key-${index}`} {...item} />
				))}
			</ul>
		</Wrap>
	)
}

export default Lnb
