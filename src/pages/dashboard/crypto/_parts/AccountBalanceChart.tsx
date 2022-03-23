import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useTheme } from '@mui/material'

interface AccountBalanceChartProps {
	data: ReactChartJS.Props.doughnut['data']
}

export const AccountBalanceChart: React.FC<AccountBalanceChartProps> = ({ data: dataProp }) => {
	const theme = useTheme()

	const data = {
		datasets: dataProp.datasets.map((dataset) => ({
			...dataset,
			borderWidth: 10,
			borderColor: theme.colors.alpha.white[100],
			hoverBorderColor: theme.colors.alpha.white[30],
		})),
		labels: dataProp.labels,
	}

	// Parameters<typeof Doughnut>[0]['options']
	const options: ReactChartJS.Options.doughnut = {
		responsive: true,
		maintainAspectRatio: false,
		animation: false,
		cutout: '60%',
		layout: {
			padding: 0,
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
				caretSize: 6,
				displayColors: false,
				mode: 'nearest',
				intersect: true,
				padding: {
					top: 8,
					bottom: 8,
					left: 16,
					right: 16,
				},
				borderWidth: 2,
				bodySpacing: 10,
				borderColor: theme.colors.alpha.black[30],
				backgroundColor: theme.palette.common.white,
				titleColor: theme.palette.common.black,
				bodyColor: theme.palette.common.black,
				footerColor: theme.palette.common.black,
				callbacks: {
					label(tooltipItem) {
						const label = tooltipItem.dataset.label
						const value = tooltipItem.dataset.data

						return `${label}: ${value}%`
					},
				},
			},
		},
	}

	return <Doughnut data={data} options={options} />
}
