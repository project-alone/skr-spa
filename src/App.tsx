import React from 'react'

// for router
import { useLocation, useRoutes } from 'react-router-dom'
import { AliveScope } from 'react-activation'
import routes from '@router/routes'
import { ErrorBoundary } from 'react-error-boundary'

// for Material UI
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import ThemeProvider from '@theme/ThemeProvider'
import { CssBaseline } from '@mui/material'

// for test
import { ErrorFallbackComponent, ErrorTest } from '@components/example/ErrorTest'

const App: React.FC = () => {
	const location = useLocation()
	const content = useRoutes(routes, location)
	const [errorRefresh, setErrorRefresh] = React.useState(false)

	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallbackComponent}
			onReset={() => setErrorRefresh(false)}>
			<ThemeProvider>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<CssBaseline />
					{/* TEST: Start */}
					<button type="button" onClick={() => setErrorRefresh(true)}>
						effect error
					</button>
					{errorRefresh ? <ErrorTest /> : null}
					{/* TEST: Finish */}
					<AliveScope>{content}</AliveScope>
				</LocalizationProvider>
			</ThemeProvider>
		</ErrorBoundary>
	)
}

export default App
