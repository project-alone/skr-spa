import { createElement } from 'react'
import { DefaultLayout } from '@components/layout'
import { Navigate } from 'react-router-dom'
import { withLoading } from '@lib/utils'

import type { RouteObject } from 'react-router-dom'

// Components
const Buttons = withLoading(() => import('@pages/components/Buttons'))
const Modals = withLoading(() => import('@pages/components/Modals'))
const Accordions = withLoading(() => import('@pages/components/Accordions'))
const Tabs = withLoading(() => import('@pages/components/Tabs'))
const Badges = withLoading(() => import('@pages/components/Badges'))
const Tooltips = withLoading(() => import('@pages/components/Tooltips'))
const Avatars = withLoading(() => import('@pages/components/Avatars'))
const Cards = withLoading(() => import('@pages/components/Cards'))
const Forms = withLoading(() => import('@pages/components/Forms'))

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
