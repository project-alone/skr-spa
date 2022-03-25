import React from 'react'
import {
	Box,
	Menu,
	IconButton,
	Button,
	ListItemText,
	ListItem,
	List,
	Typography,
	styled,
} from '@mui/material'
import {
	DeleteTwoTone as DeleteTwoToneIcon,
	MoreVertTwoTone as MoreVertTwoToneIcon,
} from '@mui/icons-material'

const ButtonError = styled(Button)(
	({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `,
)

export const BulkActions: React.FC = () => {
	const [onMenuOpen, menuOpen] = React.useState<boolean>(false)
	const moreRef = React.useRef<HTMLButtonElement | null>(null)

	const openMenu = (): void => {
		menuOpen(true)
	}

	const closeMenu = (): void => {
		menuOpen(false)
	}

	return (
		<>
			<Box display="flex" alignItems="center" justifyContent="space-between">
				<Box display="flex" alignItems="center">
					<Typography variant="h5" color="text.secondary">
						Bulk actions:
					</Typography>
					<ButtonError
						sx={{ ml: 1 }}
						startIcon={<DeleteTwoToneIcon />}
						variant="contained">
						Delete
					</ButtonError>
				</Box>
				<IconButton color="primary" onClick={openMenu} ref={moreRef} sx={{ ml: 2, p: 1 }}>
					<MoreVertTwoToneIcon />
				</IconButton>
			</Box>

			<Menu
				keepMounted
				anchorEl={moreRef.current}
				open={onMenuOpen}
				onClose={closeMenu}
				anchorOrigin={{
					vertical: 'center',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'center',
					horizontal: 'center',
				}}>
				<List sx={{ p: 1 }} component="nav">
					<ListItem button>
						<ListItemText primary="Bulk delete selected" />
					</ListItem>
					<ListItem button>
						<ListItemText primary="Bulk edit selected" />
					</ListItem>
				</List>
			</Menu>
		</>
	)
}