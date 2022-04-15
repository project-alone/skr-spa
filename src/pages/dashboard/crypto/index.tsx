import { Helmet } from 'react-helmet-async'
import { Grid, Container } from '@mui/material'

import { PageTitleWrapper, PageHeader } from '@components/common'
import { AccountBalance } from '@pages/dashboard/crypto/_parts/AccountBalance'
import { Wallets } from '@pages/dashboard/crypto/_parts/Wallets'
import { AccountSecurity } from '@pages/dashboard/crypto/_parts/AccountSecurity'
import { WatchList } from '@pages/dashboard/crypto/_parts/WatchList'

const DashboardCrypto = () => {
	return (
		<>
			<Helmet>
				<title>Crypto Dashboard</title>
			</Helmet>
			<PageTitleWrapper>
				<PageHeader
					avatar="/static/images/avatars/1.jpg"
					title="Welcome, Catherine Pike!"
					subtitle="Today is a good day to start trading crypto assets!"
				/>
			</PageTitleWrapper>
			<Container maxWidth="lg">
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="stretch"
					spacing={3}>
					<Grid item xs={12}>
						<AccountBalance />
					</Grid>
					<Grid item lg={8} xs={12}>
						<Wallets />
					</Grid>
					<Grid item lg={4} xs={12}>
						<AccountSecurity />
					</Grid>
					<Grid item xs={12}>
						<WatchList />
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default DashboardCrypto
