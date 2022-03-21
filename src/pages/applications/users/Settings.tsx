import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container, Tabs, Tab, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

import { PageTitleWrapper, Footer } from '@components/common'
import {
	PageHeader,
	ActivityTab,
	EditProfileTab,
	NotificationsTab,
	SecurityTab,
} from '@components/pages/application/users/settings'

const TabsWrapper = styled(Tabs)(
	() => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`,
)

const ManagementUserSettings: React.FC = () => {
	const [currentTab, setCurrentTab] = React.useState<string>('activity')

	const tabs = [
		{ value: 'activity', label: 'Activity' },
		{ value: 'edit_profile', label: 'Edit Profile' },
		{ value: 'notifications', label: 'Notifications' },
		{ value: 'security', label: 'Passwords/Security' },
	]

	const handleTabsChange = (event: React.SyntheticEvent, value: string): void => {
		setCurrentTab(value)
	}

	return (
		<>
			<Helmet>
				<title>User Settings - Applications</title>
			</Helmet>
			<PageTitleWrapper>
				<PageHeader />
			</PageTitleWrapper>
			<Container maxWidth="lg">
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="stretch"
					spacing={3}>
					<Grid item xs={12}>
						<TabsWrapper
							onChange={handleTabsChange}
							value={currentTab}
							variant="scrollable"
							scrollButtons="auto"
							textColor="primary"
							indicatorColor="primary">
							{tabs.map((tab) => (
								<Tab key={tab.value} label={tab.label} value={tab.value} />
							))}
						</TabsWrapper>
					</Grid>
					<Grid item xs={12}>
						{currentTab === 'activity' && <ActivityTab />}
						{currentTab === 'edit_profile' && <EditProfileTab />}
						{currentTab === 'notifications' && <NotificationsTab />}
						{currentTab === 'security' && <SecurityTab />}
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	)
}

export default ManagementUserSettings
