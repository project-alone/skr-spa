import React from 'react'
import { Typography } from '@components/common/ui'
import { Menu, MenuIcon, Link, Icon } from '@components/common/lnb/Lnb.styled'
import * as Icons from '@components/common/ui/Icons'

// types
import { To } from 'react-router-dom'

export interface MenuItemProps {
	type: 'menu' | 'bookmark' | 'basic'
	name: string
	to: To
}

const LnbItem: React.FC<MenuItemProps> = ({ type, name, to }) => {
	const ListItemDict = {
		menu: MenuIcon,
		bookmark: MenuIcon,
		basic: Menu,
	}

	const ListItem = React.useMemo(() => {
		return ListItemDict[type]
	}, [type])

	const isBasic = React.useMemo(() => {
		return type === 'basic'
	}, [type])

	return (
		<ListItem>
			<Link to={to}>
				{!isBasic && (
					<Icon>
						{type === 'bookmark' && <Icons.IconBookmarks />}
						{type === 'menu' && <Icons.IconMenu />}
					</Icon>
				)}
				<Typography variant={isBasic ? 'h4' : 'ct'}>{name}</Typography>
			</Link>
		</ListItem>
	)
}

export default LnbItem
