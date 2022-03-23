import { Box, Container, Card, styled } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { LogoSign } from '@components/common'
import { Hero } from '@pages/overview/_parts/Hero'

const OverviewWrapper = styled(Box)(
	() => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`,
)

const Overview: React.FC = () => {
	return (
		<OverviewWrapper>
			<Helmet>
				<title>Tokyo Free White React Admin Dashboard</title>
			</Helmet>
			<Container maxWidth="lg">
				<Box display="flex" justifyContent="center" py={5} alignItems="center">
					<LogoSign />
				</Box>
				<Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
					<Hero />
				</Card>
			</Container>
		</OverviewWrapper>
	)
}

export default Overview
