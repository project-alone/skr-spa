import React from 'react'
import { Line } from 'react-chartjs-2'
import { alpha, useTheme } from '@mui/material'
import { Chart } from 'chart.js'
import useEffectOnce from '@hooks/useEffectOnce'
import { Input } from 'antd'

interface WatchListColumn1ChartProps {
	data: number[]
	labels: string[]
}

export const WatchListColumn1Chart: React.FC<WatchListColumn1ChartProps> = ({
	data: dataProp,
	labels,
}) => {
	const theme = useTheme()
	const ref = React.useRef<Chart<'line'>>()
	const [data, setData] = React.useState<ReactChartJS.Props.line['data']>({
		datasets: [
			{
				data: [],
				borderWidth: 1,
				borderColor: theme.colors.primary.main,
				pointBorderWidth: 0,
				pointRadius: 0,
				pointHoverRadius: 0,
			},
		],
		labels,
	})

	const getDataWithCanvas = React.useCallback(() => {
		const chart = ref.current as Chart<'line'>
		const ctx = chart.canvas.getContext('2d') as CanvasRenderingContext2D
		const primaryGradient = ctx.createLinearGradient(6, 6, 6, 150)

		primaryGradient.addColorStop(0, alpha(theme.colors.primary.light, 0.8))
		primaryGradient.addColorStop(0.8, theme.colors.alpha.white[10])
		primaryGradient.addColorStop(1, theme.colors.alpha.white[100])

		setData({
			datasets: [
				{
					data: dataProp,
					borderWidth: 1,
					backgroundColor: primaryGradient,
					borderColor: theme.colors.primary.main,
					pointBorderWidth: 0,
					pointRadius: 0,
					pointHoverRadius: 0,
				},
			],
			labels,
		})

		chart.update()
	}, [
		dataProp,
		labels,
		theme.colors.alpha.white,
		theme.colors.primary.light,
		theme.colors.primary.main,
	])

	useEffectOnce(() => {
		getDataWithCanvas()
	})

	return (
		<Line
			ref={ref}
			data={data}
			options={{
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
					padding: 0,
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
			}}
		/>
	)
}
