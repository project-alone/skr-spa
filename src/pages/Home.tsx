import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container, Grid } from '@mui/material'
import { PageTitle, PageTitleWrapper } from '@root/components/ex'

const HomePage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Buttons - Components</title>
			</Helmet>
			<PageTitleWrapper>
				<PageTitle
					heading="Index"
					subHeading="examples for data-sdsdsdsd"
					docs="https://material-ui.com/components/buttons/"
				/>
			</PageTitleWrapper>
			<Container maxWidth="lg">
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="stretch"
					spacing={3}>
					<Grid item width="100%"></Grid>
				</Grid>
			</Container>
		</>
	)
}

export default HomePage
