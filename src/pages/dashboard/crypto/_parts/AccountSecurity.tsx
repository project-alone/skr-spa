import React from 'react'
import {
	Card,
	CardHeader,
	ListItemText,
	List,
	ListItem,
	Divider,
	Switch,
	ListItemAvatar,
	Avatar,
	styled,
} from '@mui/material'
import {
	LockTwoTone as LockTwoToneIcon,
	PhoneLockedTwoTone as PhoneLockedTwoToneIcon,
	EmailTwoTone as EmailTwoToneIcon,
} from '@mui/icons-material'
import { Text } from '@components/common'

const AvatarWrapperError = styled(Avatar)(
	({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`,
)

const AvatarWrapperSuccess = styled(Avatar)(
	({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`,
)

const AvatarWrapperWarning = styled(Avatar)(
	({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
`,
)

export const AccountSecurity: React.FC = () => {
	const [checked, setChecked] = React.useState(['phone_verification'])

	const handleToggle = (value: string) => () => {
		const currentIndex = checked.indexOf(value)
		const newChecked = [...checked]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		setChecked(newChecked)
	}

	return (
		<Card>
			<CardHeader title="Account Security" />
			<Divider />
			<List disablePadding>
				<ListItem sx={{ py: 2 }}>
					<ListItemAvatar>
						<AvatarWrapperError>
							<LockTwoToneIcon fontSize="medium" />
						</AvatarWrapperError>
					</ListItemAvatar>
					<ListItemText
						primary={<Text color="black">2FA Authentication</Text>}
						primaryTypographyProps={{
							variant: 'body1',
							fontWeight: 'bold',
							color: 'textPrimary',
							gutterBottom: true,
							noWrap: true,
						}}
						secondary={<Text color="error">Disabled</Text>}
						secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
					/>
					<Switch
						edge="end"
						color="primary"
						onChange={handleToggle('2fa')}
						checked={checked.indexOf('2fa') !== -1}
					/>
				</ListItem>
				<Divider />
				<ListItem sx={{ py: 2 }}>
					<ListItemAvatar>
						<AvatarWrapperSuccess>
							<PhoneLockedTwoToneIcon fontSize="medium" />
						</AvatarWrapperSuccess>
					</ListItemAvatar>
					<ListItemText
						primary={<Text color="black">Phone Verification</Text>}
						primaryTypographyProps={{
							variant: 'body1',
							fontWeight: 'bold',
							color: 'textPrimary',
							gutterBottom: true,
							noWrap: true,
						}}
						secondary={<Text color="success">Active</Text>}
						secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
					/>
					<Switch
						edge="end"
						color="primary"
						onChange={handleToggle('phone_verification')}
						checked={checked.indexOf('phone_verification') !== -1}
					/>
				</ListItem>
				<Divider />
				<ListItem sx={{ py: 2 }}>
					<ListItemAvatar>
						<AvatarWrapperWarning>
							<EmailTwoToneIcon fontSize="medium" />
						</AvatarWrapperWarning>
					</ListItemAvatar>
					<ListItemText
						primary={<Text color="black">Recovery Email</Text>}
						primaryTypographyProps={{
							variant: 'body1',
							fontWeight: 'bold',
							color: 'textPrimary',
							gutterBottom: true,
							noWrap: true,
						}}
						secondary={<Text color="warning">Not completed</Text>}
						secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
					/>
					<Switch
						edge="end"
						color="primary"
						onChange={handleToggle('recovery_email')}
						checked={checked.indexOf('recovery_email') !== -1}
					/>
				</ListItem>
			</List>
		</Card>
	)
}