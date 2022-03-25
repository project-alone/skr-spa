import { Line } from 'react-chartjs-2'
import { useTheme } from '@mui/material'

interface WatchListRowChartProps {
	data: number[]
	labels: string[]
}

export const RowChart: React.FC<WatchListRowChartProps> = ({ data: dataProp, labels, ...rest }) => {
	const theme = useTheme()

	const data: ReactChartJS.Props.line['data'] = {
		datasets: [
			{
				data: dataProp,
				borderWidth: 3,
				backgroundColor: 'transparent',
				borderColor: theme.colors.primary.main,
				pointBorderWidth: 0,
				pointRadius: 0,
				pointHoverRadius: 0,
			},
		],
		labels,
	}

	const options: ReactChartJS.Options.line = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
				mode: 'nearest',
				intersect: false,
				caretSize: 6,
				displayColors: false,
				padding: {
					top: 8,
					bottom: 8,
					left: 16,
					right: 16,
				},
				borderWidth: 4,
				borderColor: theme.palette.common.black,
				backgroundColor: theme.palette.common.black,
				titleColor: theme.palette.common.white,
				bodyColor: theme.palette.common.white,
				footerColor: theme.palette.common.white,
				callbacks: {
					label: (tooltipItem) => {
						return `Price: $${tooltipItem.label}`
					},
				},
			},
		},
		layout: {
			padding: 5,
		},
		scales: {
			xAxes: {
				grid: {
					display: false,
					drawBorder: false,
				},
				ticks: {
					display: false,
				},
			},
			yAxes: {
				grid: {
					display: false,
				},
				ticks: {
					display: false,
				},
			},
		},
	}

	return (
		<div {...rest}>
			<Line data={data} options={options} />
		</div>
	)
}
