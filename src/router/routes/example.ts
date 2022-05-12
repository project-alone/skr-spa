import { lazy, createElement } from 'react'
import { DefaultLayout } from '@components/layout'
// import { withLoading } from '@lib/utils'

// types
import { RouteObject } from 'react-router-dom'

// antd example
const Home = lazy(() => import('@pages/Home'))
const Login = lazy(() => import('@pages/example/login'))
const Counter = lazy(() => import('@pages/example/counter'))
const FormWithHookform = lazy(() => import('@pages/example/formwithhookform'))
const SignUp = lazy(() => import('@pages/example/signup'))
const TabNavigation = lazy(() => import('@pages/example/tabnavigation'))
const Notification = lazy(() => import('@pages/example/notification'))
const BoardPagination = lazy(() => import('@pages/example/board/pagination'))
const BoardInfinite = lazy(() => import('@pages/example/board/infinite'))

// CRUD Sample
const Crud = lazy(() => import('@pages/example/crud'))
const CrudSlice = lazy(() => import('@pages/example/crudslice'))

export const exampleRoutes: RouteObject = {
	path: 'example',
	element: createElement(DefaultLayout),
	children: [
		{ path: 'home', element: createElement(Home) },
		{ path: 'login', element: createElement(Login) },
		{ path: 'counter', element: createElement(Counter) },
		{ path: 'formwithhookform', element: createElement(FormWithHookform) },
		{ path: 'signup', element: createElement(SignUp) },
		{ path: 'tabnavigation', element: createElement(TabNavigation) },
		{ path: 'notification', element: createElement(Notification) },
		{
			path: 'board',
			children: [
				{ path: 'pagination', element: createElement(BoardPagination) },
				{ path: 'infinite', element: createElement(BoardInfinite) },
			],
		},
		{
			path: 'crud',
			element: createElement(Crud),
		},
		{
			path: 'crudslice',
			element: createElement(CrudSlice),
		},
	],
}
