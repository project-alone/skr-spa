import { Typography } from '@mui/material'

export const PageHeader: React.FC = () => {
	const user = {
		name: 'Catherine Pike',
		avatar: '/static/images/avatars/1.jpg',
	}

	return (
		<>
			<Typography variant="h3" component="h3" gutterBottom>
				User Settings
			</Typography>
			<Typography variant="subtitle2">
				{user.name}, this could be your user settings panel.
			</Typography>
		</>
	)
}
