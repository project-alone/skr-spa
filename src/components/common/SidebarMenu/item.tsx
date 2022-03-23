import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import clsx from 'clsx'
import { SidebarContext } from '@context/Sidebar'

import { Button, Badge, Collapse, ListItem } from '@mui/material'

import {
	ExpandLessTwoTone as ExpandLessTwoToneIcon,
	ExpandMoreTwoTone as ExpandMoreTwoToneIcon,
} from '@mui/icons-material'

interface SidebarMenuItemProps {
	children?: React.ReactNode
	link?: string
	icon?: React.ComponentType
	badge?: string
	open?: boolean
	active?: boolean
	name: string
}

const RouterNavLink = React.forwardRef<
	HTMLAnchorElement,
	NavLinkProps & { activeClassName: string | NavLinkProps['className'] }
>((props, ref) => {
	return (
		<NavLink ref={ref} {...props} className={props.activeClassName}>
			{props.children}
		</NavLink>
	)
})
RouterNavLink.displayName = 'NavLink'

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
	open: openParent = false,
	active = false,
	children,
	link,
	icon: Icon,
	badge,
	name,
	...rest
}) => {
	const [menuToggle, setMenuToggle] = React.useState<boolean>(!!openParent)

	const { toggleSidebar } = React.useContext(SidebarContext)

	const toggleMenu = (): void => {
		setMenuToggle((Open) => !Open)
	}

	if (children) {
		return (
			<ListItem component="div" className="Mui-children" key={name} {...rest}>
				<Button
					className={clsx({ 'Mui-active': menuToggle })}
					startIcon={Icon && <Icon />}
					endIcon={menuToggle ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />}
					onClick={toggleMenu}>
					{name}
				</Button>
				<Collapse in={menuToggle}>{children}</Collapse>
			</ListItem>
		)
	}

	return (
		<ListItem component="div" key={name} {...rest}>
			<Button
				activeClassName="Mui-active"
				component={RouterNavLink}
				onClick={toggleSidebar}
				to={link || ''}
				startIcon={Icon && <Icon />}>
				{name}
				{badge && <Badge badgeContent={badge} />}
			</Button>
		</ListItem>
	)
}

export default SidebarMenuItem
