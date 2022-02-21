import { useLocation, useRoutes } from 'react-router-dom'
import routes from '@router/routes'
import { AliveScope } from 'react-activation'

const App: React.FC = () => {
	const location = useLocation()
	const element = useRoutes(routes, location)

	return <AliveScope>{element}</AliveScope>
}

export default App
