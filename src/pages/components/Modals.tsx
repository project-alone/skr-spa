import { Helmet } from 'react-helmet-async'
import React from 'react'
import {
	Container,
	Grid,
	Card,
	CardHeader,
	CardContent,
	Divider,
	Button,
	Typography,
} from '@mui/material'
import { PageTitle, PageTitleWrapper, Footer } from '@components/common'
import { useModal } from '@hooks/useModal'
import modal from '@components/modal'

const Modals: React.FC = () => {
	const { openModal } = useModal()

	const handleClick = () => {
		openModal(modal.Simple, { open: true })
	}

	return (
		<>
			<Helmet>
				<title>Modals - Components</title>
			</Helmet>
			<PageTitleWrapper>
				<PageTitle
					heading="Modals"
					subHeading="Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks."
					docs="https://material-ui.com/components/dialogs/"
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
						<Card>
							<CardHeader title="Basic Dialog" />
							<Divider />
							<CardContent>
								<Typography variant="subtitle1" component="div">
									{/* Selected: {selectedValue} */}
								</Typography>
								<br />
								<Button variant="outlined" onClick={handleClick}>
									Open simple dialog
								</Button>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	)
}

export default Modals
