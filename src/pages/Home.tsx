import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container, Grid } from '@mui/material'
import { PageTitle, PageTitleWrapper } from '@root/components/ex'

// test
import { IconButton } from '@components/common/ui/IconButton'
import { Tooltip } from '@components/common/ui/Tooltip'
import { Delete as IconDelete } from '@mui/icons-material'

const HomePage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Buttons - Components</title>
			</Helmet>
			<PageTitle
				heading="Index"
				subHeading="examples for data-sdsdsdsd"
				docs="https://material-ui.com/components/buttons/"
			/>
			<div></div>
			<Container maxWidth="lg" sx={{ height: 'auto' }}>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="stretch"
					spacing={3}>
					<Grid item width="100%">
						<Tooltip title="tooltip test">
							<IconButton>
								<IconDelete />
							</IconButton>
						</Tooltip>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default HomePage
