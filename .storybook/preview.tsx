import React from 'react'
import ThemeProvider from '@theme/ThemeProvider'
import { CssBaseline } from '@mui/material'

export default {
	parameters: {
		layout: 'centered',
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: '#fff',
	},
	decorators: [
		(Story: React.FC) => (
			<>
				<ThemeProvider>
					<CssBaseline />
					<Story />
				</ThemeProvider>
			</>
		),
	],
}
