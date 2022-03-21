import { Helmet } from 'react-helmet-async'
import { Grid, Container } from '@mui/material'

import { PageTitleWrapper, Footer } from '@components/common'

import {
	PageHeader,
	AccountBalance,
	Wallets,
	AccountSecurity,
	WatchList,
} from '@components/pages/dashboard'

const DashboardCrypto = () => {
	return (
		<>
			<Helmet>
				<title>Crypto Dashboard</title>
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
			<Footer />
		</>
	)
}

export default DashboardCrypto
