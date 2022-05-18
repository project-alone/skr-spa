import React from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { AliveScope } from 'react-activation'
import routes from '@root/router'
import { PublishingFab } from '@components/publishingGuide/FloatingButton'

// @mui style
import { Box, CssBaseline } from '@mui/material'

// for test
import { ErrorFallbackComponent, ErrorTest as ErrorOccurrence } from '@components/example/ErrorTest'

/** @deprecated */
const ErrorTest: React.FC<{ onRefresh: () => void; error: boolean }> = ({ onRefresh, error }) => {
	return (
		<Box sx={{ position: 'fixed', top: 0, left: 0 }}>
			<button type="button" onClick={onRefresh}>
				effect error
			</button>
			{error ? <ErrorOccurrence /> : null}
		</Box>
	)
}

const App: React.FC = () => {
	const location = useLocation()
	const content = useRoutes(routes, location)
	const [error, setError] = React.useState(false)

	const handleReset = React.useCallback(() => setError(false), [])

	return (
		<ErrorBoundary FallbackComponent={ErrorFallbackComponent} onReset={handleReset}>
			<ErrorTest error={error} onRefresh={setError as () => void} />
			<CssBaseline />
			<AliveScope>{content}</AliveScope>
			<PublishingFab />
		</ErrorBoundary>
	)
}

export default App
