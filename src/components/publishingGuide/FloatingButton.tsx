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
	return (
		<React.Fragment>
			<Fab color="primary" aria-label="add">
				<AddIcon />
			</Fab>
			{/* <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
				<Box
					sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
					role="presentation"
					onClick={toggleDrawer(anchor, false)}
					onKeyDown={toggleDrawer(anchor, false)}>
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
			</Drawer> */}
		</React.Fragment>
	)
}
