import React from 'react'
import {
	Box,
	Divider,
	Drawer,
	Fab,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import { Add as AddIcon, Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material'

export const PublishingFab: React.FC = () => {
	const [open, setOpen] = React.useState(false)
	const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event &&
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return
		}

		setOpen(!open)
	}

	return (
		<React.Fragment>
			<Fab
				color="primary"
				aria-label="add"
				sx={{ position: 'fixed', right: 50, bottom: 50 }}
				onClick={toggleDrawer}>
				<AddIcon />
			</Fab>
			<Drawer anchor="left" open={open} onClose={toggleDrawer}>
				<Box
					sx={{ width: 250 }}
					role="presentation"
					onClick={toggleDrawer}
					onKeyDown={toggleDrawer}>
					<List>
						{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</React.Fragment>
	)
}
