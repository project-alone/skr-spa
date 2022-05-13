import { createElement } from 'react'
import { DefaultLayout } from '@components/layout'
import { withLoading } from '@lib/utils'
// import { Navigate } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

// Components
const Sample = withLoading(() => import('@pages/publishing/sample'))
const UserManage = withLoading(() => import('@pages/publishing/usermanage'))
const Guide = withLoading(() => import('@pages/publishing/guide'))
const UserInquiry = withLoading(() => import('@pages/publishing/userinquiry'))
const TaskManage = withLoading(() => import('@pages/publishing/taskmanager'))
const TaskRegister = withLoading(() => import('@pages/publishing/taskregister'))

export const publishingRoutes: RouteObject = {
	path: 'publishing',
	element: createElement(DefaultLayout),
	children: [
		{
			index: true,
			element: createElement(Guide),
		},
		{
			path: 'sample',
			index: true,
			element: createElement(Sample),
		},
		{
			path: 'member',
			element: createElement(UserManage),
		},
		{
			path: 'member-inquiry',
			element: createElement(UserInquiry),
		},
		{
			path: 'task-manage',
			element: createElement(TaskManage),
		},
		{
			path: 'task-register',
			element: createElement(TaskRegister),
		},
	],
}
