import React from 'react'
import { Card, Box, Typography, Avatar, styled } from '@mui/material'
import { Label, Text } from '@components/common'
import { WatchListColumn1Chart } from '@pages/dashboard/crypto/_parts/ColumnChart'
import { isObject } from 'lodash-es'

const AvatarWrapper = styled(Avatar)(
	({ theme }) => `
        background: transparent;
        margin-right: ${theme.spacing(0.5)};
`,
)

const WatchListColumn1ChartWrapper = styled(WatchListColumn1Chart)(() => `height: 130px;`)

const coinAbbreviation = {
	ETH: 'Ethereum',
	BTC: 'Bitcoin',
	ADA: 'Cardano',
}

export interface WachItemProps {
	name: 'ETH' | 'BTC' | 'ADA'
	currentValue: number | { value: number; percentage: number }
	incValue: number
	weekData: number[]
}

export const WatchItem: React.FC<WachItemProps> = ({ name, currentValue, incValue, weekData }) => {
	const getFullname = React.useCallback(() => {
		return (Object.entries(coinAbbreviation).find(([key, value]) => key === name) || [])[0]
	}, [name])

	const priceFormat = React.useCallback(() => {
		return `$${(isObject(currentValue) ? currentValue.value : currentValue)
			.toFixed(2)
			.toLocaleString()}`
	}, [currentValue])

	const getPercentage = React.useCallback(() => {
		const value = isObject(currentValue) ? currentValue.percentage : 0
		const sign = Math.sign(value)
		const color = sign > 0 ? 'success' : sign < 0 ? 'error' : 'primary'
		const signMark = sign > 0 ? '+' : ''
		return (
			<Text color={color}>
				<b>{`${signMark}${value.toLocaleString()}%`}</b>
			</Text>
		)
	}, [currentValue])

	const getIncreaseValue = React.useCallback(() => {
		const sign = Math.sign(incValue)
		const signMark = sign > 0 ? '+' : sign < 0 ? '-' : ''
		const color = sign > 0 ? 'success' : sign < 0 ? 'error' : 'primary'

		return <Label color={color}>{`${signMark}$${Math.abs(incValue).toLocaleString()}`}</Label>
	}, [incValue])

	return (
		<Card>
			<Box sx={{ p: 3 }}>
				<Box display="flex" alignItems="center">
					<AvatarWrapper>
						<img
							alt="BTC"
							src={`/static/images/placeholders/logo/${coinAbbreviation[name]}.png`}
						/>
					</AvatarWrapper>
					<Box>
						<Typography variant="h4" noWrap>
							{coinAbbreviation[name]}
						</Typography>
						<Typography variant="subtitle1" noWrap>
							{getFullname()}
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
						{priceFormat()}
					</Typography>
					{getPercentage()}
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
					}}>
					{getIncreaseValue()}
					<Typography variant="body2" color="text.secondary" sx={{ pl: 1 }}>
						last 24h
					</Typography>
				</Box>
			</Box>
			<Box height={130} sx={{ ml: -1.5 }}>
				<WatchListColumn1ChartWrapper
					data={weekData}
					labels={[
						'Monday',
						'Tueday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
						'Sunday',
					]}
				/>
			</Box>
		</Card>
	)
}
