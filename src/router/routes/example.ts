import { createElement } from 'react'
import { DefaultLayout } from '@components/layout'
import { withLoading } from '@lib/utils'

// types
import type { RouteObject } from 'react-router-dom'

// antd example
const Home = withLoading(() => import('@pages/Home'))
const Login = withLoading(() => import('@pages/example/login'))
const Counter = withLoading(() => import('@pages/example/counter'))
const FormWithHookform = withLoading(() => import('@pages/example/formwithhookform'))
const SignUp = withLoading(() => import('@pages/example/signup'))
const TabNavigation = withLoading(() => import('@pages/example/tabnavigation'))
const Notification = withLoading(() => import('@pages/example/notification'))
const BoardPagination = withLoading(() => import('@pages/example/board/pagination'))
const BoardInfinite = withLoading(() => import('@pages/example/board/infinite'))

// CRUD Sample
const Crud = withLoading(() => import('@pages/example/crud'))
const CrudSlice = withLoading(() => import('@pages/example/crudslice'))

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
