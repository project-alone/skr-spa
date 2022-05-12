import { lazy, createElement } from 'react'
import { DefaultLayout } from '@components/layout'
import { Navigate } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

// Components
const Buttons = lazy(() => import('@pages/components/Buttons'))
const Modals = lazy(() => import('@pages/components/Modals'))
const Accordions = lazy(() => import('@pages/components/Accordions'))
const Tabs = lazy(() => import('@pages/components/Tabs'))
const Badges = lazy(() => import('@pages/components/Badges'))
const Tooltips = lazy(() => import('@pages/components/Tooltips'))
const Avatars = lazy(() => import('@pages/components/Avatars'))
const Cards = lazy(() => import('@pages/components/Cards'))
const Forms = lazy(() => import('@pages/components/Forms'))

export const componentRoutes: RouteObject = {
	path: 'components',
	element: createElement(DefaultLayout),
	children: [
		{
			path: '',
			element: createElement(Navigate, { to: '/components/buttons', replace: true }),
		},
		{ path: 'buttons', element: createElement(Buttons) },
		{ path: 'modals', element: createElement(Modals) },
		{ path: 'accordions', element: createElement(Accordions) },
		{ path: 'tabs', element: createElement(Tabs) },
		{ path: 'badges', element: createElement(Badges) },
		{ path: 'tooltips', element: createElement(Tooltips) },
		{ path: 'avatars', element: createElement(Avatars) },
		{ path: 'cards', element: createElement(Cards) },
		{ path: 'forms', element: createElement(Forms) },
	],
}
