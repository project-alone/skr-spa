import { Helmet } from 'react-helmet-async'
import { Grid, Container } from '@mui/material'
import { PageTitleWrapper, Footer } from '@components/common'

import { PageHeader } from '@pages/applications/transactions/_parts/PageHeader'
import { RecentOrders } from '@pages/applications/transactions/_parts/RecentOrders'

const ApplicationsTransactions: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Transactions - Applications</title>
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
						<RecentOrders />
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	)
}

export default ApplicationsTransactions
