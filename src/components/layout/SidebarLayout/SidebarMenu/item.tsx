import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import clsx from 'clsx'
import { SidebarContext } from '@context/Sidebar'
import { Button, Badge, Collapse, ListItem } from '@mui/material'
import {
	ExpandLessTwoTone as ExpandLessTwoToneIcon,
	ExpandMoreTwoTone as ExpandMoreTwoToneIcon,
} from '@mui/icons-material'

const RouterLink = React.forwardRef<
	HTMLAnchorElement,
	NavLinkProps & { activeLinkClassName: string }
>(({ activeLinkClassName, className, ...props }, ref) => {
	return (
		<NavLink
			ref={ref}
			className={({ isActive }) =>
				`${clsx({ [activeLinkClassName]: isActive })} ${className}`
			}
			{...props}
		/>
	)
})
RouterLink.displayName = 'RouterLink'

interface SidebarMenuItemProps {
	link?: string
	icon?: React.ComponentType
	badge?: string
	open?: boolean
	active?: boolean
	name: string
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
	children,
	link = '',
	icon: Icon,
	badge,
	open: openParent = false,
	active,
	name,
	...rest
}) => {
	const [menuToggle, setMenuToggle] = React.useState<boolean>(openParent)

	const { toggleSidebar } = React.useContext(SidebarContext)

	const toggleMenu = (): void => {
		setMenuToggle((open) => !open)
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
				activeLinkClassName="Mui-active"
				component={RouterLink}
				onClick={toggleSidebar}
				to={link}
				startIcon={Icon && <Icon />}>
				{name}
				{badge && <Badge badgeContent={badge} />}
			</Button>
		</ListItem>
	)
}

export default SidebarMenuItem
