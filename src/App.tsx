/* eslint-disable react/jsx-key */
import React from 'react'

// for router
import { useLocation, useRoutes } from 'react-router-dom'
import { AliveScope } from 'react-activation'
import routes from '@router/routes'
import { ErrorBoundary } from 'react-error-boundary'

// for test
import { ErrorFallbackComponent, ErrorTest as ErrorOccurrence } from '@components/example/ErrorTest'

/** @deprecated */
const ErrorTest: React.FC<{ onRefresh: () => void; error: boolean }> = ({ onRefresh, error }) => {
	return (
		<>
			<button type="button" onClick={onRefresh}>
				effect error
			</button>
			{error ? <ErrorOccurrence /> : null}
		</>
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
			<AliveScope>{content}</AliveScope>
		</ErrorBoundary>
	)
}

export default App
