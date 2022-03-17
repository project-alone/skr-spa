import React from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import { AliveScope } from 'react-activation'
import routes from '@router/routes'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import ThemeProvider from '@theme/ThemeProvider'
import { CssBaseline } from '@mui/material'

const App: React.FC = () => {
	const location = useLocation()
	const content = useRoutes(routes, location)

	React.useEffect(() => {
		console.log('[loading] ::: 끝')
	})

	console.log('[loading] ::: 시작')

	return (
		<ThemeProvider>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<CssBaseline />
				<AliveScope>{content}</AliveScope>
			</LocalizationProvider>
		</ThemeProvider>
	)
}

export default App
