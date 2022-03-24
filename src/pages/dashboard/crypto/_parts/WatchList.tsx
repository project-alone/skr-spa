import React from 'react'
import {
	Button,
	Box,
	ToggleButton,
	ToggleButtonGroup,
	Grid,
	Card,
	Typography,
	styled,
} from '@mui/material'
import {
	ViewWeekTwoTone as ViewWeekTwoToneIcon,
	TableRowsTwoTone as TableRowsTwoToneIcon,
} from '@mui/icons-material'
import { WatchItem } from '@pages/dashboard/crypto/_parts/WatchItem'
import type { WachItemProps } from '@pages/dashboard/crypto/_parts/WatchItem'
import { WatchListRow } from '@pages/dashboard/crypto/_parts/WatchListRow'

const EmptyResultsWrapper = styled('img')(
	({ theme }) => `
      max-width: 100%;
      width: ${theme.spacing(66)};
      height: ${theme.spacing(34)};
`,
)

export const WatchList: React.FC = () => {
	const [tabs, setTab] = React.useState<string | null>('watch_list_columns')
	const watchData: WachItemProps[] = [
		{
			name: 'BTC',
			currentValue: { value: 3586.22, percentage: 12.5 },
			incValue: 500,
			weekData: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16],
		},
		{
			name: 'ETH',
			currentValue: { value: 1968, percentage: -3.24 },
			incValue: -90,
			weekData: [1.854, 1.773, 2.092, 2.009, 1.909, 1.842, 1.884],
		},
		{
			name: 'ADA',
			currentValue: { value: 23, percentage: -0.33 },
			incValue: -5,
			weekData: [13, 16, 14, 21, 8, 11, 20],
		},
	]

	const handleViewOrientation = (
		event: React.MouseEvent<HTMLElement>,
		newValue: string | null,
	) => {
		setTab(newValue)
	}

	return (
		<>
			<Box display="flex" alignItems="center" justifyContent="space-between" sx={{ pb: 3 }}>
				<Typography variant="h3">Watch List</Typography>
				<ToggleButtonGroup value={tabs} exclusive onChange={handleViewOrientation}>
					<ToggleButton disableRipple value="watch_list_columns">
						<ViewWeekTwoToneIcon />
					</ToggleButton>
					<ToggleButton disableRipple value="watch_list_rows">
						<TableRowsTwoToneIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="stretch"
				spacing={3}>
				{tabs === 'watch_list_columns' && (
					<>
						{watchData.map((props) => (
							<Grid key={props.name} item lg={4} xs={12}>
								<WatchItem {...props} />
							</Grid>
						))}
					</>
				)}

				{tabs === 'watch_list_rows' && (
					<Grid item xs={12}>
						<WatchListRow />
					</Grid>
				)}

				{!tabs && (
					<Grid item xs={12}>
						<Card sx={{ textAlign: 'center', p: 3 }}>
							<EmptyResultsWrapper src="/static/images/placeholders/illustrations/1.svg" />
							<Typography
								align="center"
								variant="h2"
								fontWeight="normal"
								color="text.secondary"
								sx={{ mt: 3 }}
								gutterBottom>
								Click something, anything!
							</Typography>
							<Button variant="contained" size="large" sx={{ mt: 4 }}>
								Maybe, a button?
							</Button>
						</Card>
					</Grid>
				)}
			</Grid>
		</>
	)
}
