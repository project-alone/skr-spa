import { Card, Box, Typography, Avatar } from '@mui/material'

import { styled } from '@mui/material/styles'
import { Label, Text } from '@components/common'
import { WatchListColumn1Chart } from '@pages/dashboard/crypto/_parts/WatchListColumn1Chart'

const AvatarWrapper = styled(Avatar)(
	({ theme }) => `
        background: transparent;
        margin-right: ${theme.spacing(0.5)};
`,
)

const WatchListColumn1ChartWrapper = styled(WatchListColumn1Chart)(
	() => `
          height: 130px;
  `,
)

export const WatchListColumn2: React.FC = () => {
	const price = {
		week: {
			labels: ['Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			data: [1.854, 1.773, 2.092, 2.009, 1.909, 1.842, 1.884],
		},
	}

	return (
		<Card>
			<Box sx={{ p: 3 }}>
				<Box display="flex" alignItems="center">
					<AvatarWrapper>
						<img alt="ETH" src="/static/images/placeholders/logo/ethereum.png" />
					</AvatarWrapper>
					<Box>
						<Typography variant="h4" noWrap>
							Ethereum
						</Typography>
						<Typography variant="subtitle1" noWrap>
							ETH
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						pt: 3,
					}}>
					<Typography variant="h2" sx={{ pr: 1, mb: 1 }}>
						$1,968.00
					</Typography>
					<Text color="error">
						<b>-3.24%</b>
					</Text>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
					}}>
					<Label color="error">-$90</Label>
					<Typography variant="body2" color="text.secondary" sx={{ pl: 1 }}>
						last 24h
					</Typography>
				</Box>
			</Box>
			<Box height={130} sx={{ ml: -1.5 }}>
				{/* height: 130px; */}
				<WatchListColumn1ChartWrapper data={price.week.data} labels={price.week.labels} />
			</Box>
		</Card>
	)
}
