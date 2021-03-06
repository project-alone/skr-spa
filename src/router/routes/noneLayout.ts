import { createElement } from 'react'
import { Navigate } from 'react-router-dom'
import { DefaultLayout } from '@components/layout'
import type { RouteObject } from 'react-router-dom'
import { withLoading } from '@lib/utils'

// Status
const Status404 = withLoading(() => import('@pages/status/Status404'))
const Status500 = withLoading(() => import('@pages/status/Status500'))
const StatusMaintenance = withLoading(() => import('@pages/status/Maintenance'))

export const noneLayoutRoutes: RouteObject = {
	path: '/',
	element: createElement(DefaultLayout),
	children: [
		{
			path: '',
			element: createElement(Navigate, { to: '/example/home', replace: true }),
		},
		{
			path: 'status',
			children: [
				{ path: '', element: createElement(Navigate, { to: '404', replace: true }) },
				{ path: '404', element: createElement(Status404) },
				{ path: '500', element: createElement(Status500) },
				{ path: 'maintenance', element: createElement(StatusMaintenance) },
			],
		},
		{ path: '*', element: createElement(Status404) },
	],
}
