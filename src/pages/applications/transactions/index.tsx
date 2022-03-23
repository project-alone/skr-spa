import { Helmet } from 'react-helmet-async'
import { Grid, Container, Button } from '@mui/material'
import { AddTwoTone as AddTwoToneIcon } from '@mui/icons-material'
import { PageHeader, PageTitleWrapper, Footer } from '@components/common'
import { RecentOrders } from '@pages/applications/transactions/_parts/RecentOrders'

const ApplicationsTransactions: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Transactions - Applications</title>
			</Helmet>
			<PageTitleWrapper>
				<PageHeader
					title="Transactions"
					subtitle="Catherine Pike, these are your recent transactions"
					avatar="/static/images/avatars/1.jpg"
					buttons={
						<Button
							sx={{ mt: { xs: 2, md: 0 } }}
							variant="contained"
							startIcon={<AddTwoToneIcon fontSize="small" />}>
							Create transaction
						</Button>
					}
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
						<RecentOrders />
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	)
}

export default ApplicationsTransactions
