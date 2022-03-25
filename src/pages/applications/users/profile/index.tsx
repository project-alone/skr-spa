import { Helmet } from 'react-helmet-async'
import { Grid, Container } from '@mui/material'
import { Footer } from '@components/common'
import { ProfileCover } from '@pages/applications/users/profile/_parts/ProfileCover'
import { RecentActivity } from '@pages/applications/users/profile/_parts/RecentActivity'
import { Feed } from '@pages/applications/users/profile/_parts/Feed'
import { PopularTags } from '@pages/applications/users/profile/_parts/PopularTags'
import { MyCards } from '@pages/applications/users/profile/_parts/MyCards'
import { Addresses } from '@pages/applications/users/profile/_parts/Addresses'

const ManagementUserProfile: React.FC = () => {
	const user = {
		savedCards: 7,
		name: 'Catherine Pike',
		coverImg: '/static/images/placeholders/covers/5.jpg',
		avatar: '/static/images/avatars/4.jpg',
		description:
			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
		jobtitle: 'Web Developer',
		location: 'Barcelona, Spain',
		followers: '465',
	}

	return (
		<>
			<Helmet>
				<title>User Details - Management</title>
			</Helmet>
			<Container sx={{ mt: 3 }} maxWidth="lg">
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="stretch"
					spacing={3}>
					<Grid item xs={12} md={8}>
						<ProfileCover user={user} />
					</Grid>
					<Grid item xs={12} md={4}>
						<RecentActivity />
					</Grid>
					<Grid item xs={12} md={8}>
						<Feed />
					</Grid>
					<Grid item xs={12} md={4}>
						<PopularTags />
					</Grid>
					<Grid item xs={12} md={7}>
						<MyCards />
					</Grid>
					<Grid item xs={12} md={5}>
						<Addresses />
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	)
}

export default ManagementUserProfile