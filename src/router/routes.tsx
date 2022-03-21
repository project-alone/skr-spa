import React from 'react'
import loadable from '@loadable/component'
import { /* RouterGuard, */ SidebarLayout, BaseLayout } from '@components/layout'
// import { SuspenseLoader } from '@components/common'
import { Navigate } from 'react-router-dom'
// import KeepAlive from 'react-activation'

import type { DefaultComponent } from '@loadable/component'
import type { LoadableComponent } from '@loadable/component'
import type { RouteObject } from 'react-router-dom'

/**
 * @description
 * 로딩 HOC
 * loadable component 사용으로 suspense의 기능 대체
 */
function withLoading<Props>(loadFn: (props: Props) => Promise<DefaultComponent<Props>>) {
	return loadable(loadFn, {
		// fallback: <Loading />,
	})
}

export interface PageProps {
	title?: string
}

export enum PageNames {
	Home = 'index',
	Login = 'Login',
	NotFound = 'NotFound',
	Counter = 'Counter',
	Grid = 'Grid',
	Modal = 'Modal',
	// Forms = 'Forms',
	Overview = 'Overview',
	Crypto = 'Crypto',
	// Messenger = 'Messenger',
	Transactions = 'Transactions',
	UserProfile = 'UserProfile',
	UserSettings = 'UserSettings',
	Buttons = 'Buttons',
	Modals = 'Modals',
	Accordions = 'Accordions',
	Tabs = 'Tabs',
	Badges = 'Badges',
	Tooltips = 'Tooltips',
	Avatars = 'Avatars',
	Cards = 'Cards',
	Forms = 'Forms',
	Status404 = 'Status404',
	Status500 = 'Status500',
	StatusComingSoon = 'StatusComingSoon',
	StatusMaintenance = 'StatusMaintenance',
}

const Page: Record<keyof typeof PageNames, LoadableComponent<PageProps>> = {
	// antd example
	Home: withLoading(() => import('@pages/Home')),
	Login: withLoading(() => import('@pages/Login')),
	NotFound: withLoading(() => import('@pages/NotFound')),
	Counter: withLoading(() => import('@pages/example/Counter')),
	Grid: withLoading(() => import('@pages/example/Grid')),
	Modal: withLoading(() => import('@pages/example/Modal')),
	// Forms: withLoading(() => import('@pages/example/Forms')),
	// Pages
	Overview: withLoading(() => import('@pages/Overview')),

	// Dashboards
	Crypto: withLoading(() => import('@pages/dashboard/Crypto')),

	// Applications
	// Messenger: withLoading(() => import('@pages/applications/Messenger')),
	Transactions: withLoading(() => import('@pages/applications/Transactions')),
	UserProfile: withLoading(() => import('@pages/applications/users/Profile')),
	UserSettings: withLoading(() => import('@pages/applications/users/Settings')),

	// Components
	Buttons: withLoading(() => import('@pages/components/Buttons')),
	Modals: withLoading(() => import('@pages/components/Modals')),
	Accordions: withLoading(() => import('@pages/components/Accordions')),
	Tabs: withLoading(() => import('@pages/components/Tabs')),
	Badges: withLoading(() => import('@pages/components/Badges')),
	Tooltips: withLoading(() => import('@pages/components/Tooltips')),
	Avatars: withLoading(() => import('@pages/components/Avatars')),
	Cards: withLoading(() => import('@pages/components/Cards')),
	Forms: withLoading(() => import('@pages/components/Forms')),

	// Status
	Status404: withLoading(() => import('@pages/status/Status404')),
	Status500: withLoading(() => import('@pages/status/Status500')),
	StatusComingSoon: withLoading(() => import('@pages/status/ComingSoon')),
	StatusMaintenance: withLoading(() => import('@pages/status/Maintenance')),
}

/**
 * @description
 * <Sidebar/>에서 공통으로 사용하기 위해 path를 명확하게 같는 route 객체는 별도로 관리
 */

// export const routeSidebar: RouteObject[] = [
// 	{
// 		path: 'example',
// 		children: [
// 			{
// 				path: 'counter',
// 				element: (
// 					<KeepAlive name="counter">
// 						<Page.Counter />
// 					</KeepAlive>
// 				),
// 			},
// 			{ path: 'grid', element: <Page.Grid /> },
// 			{ path: 'modal', element: <Page.Modal /> },
// 			{ path: 'forms', element: <Page.Forms /> },
// 		],
// 	},
// ]

/**
 * @description
 * 상단에 {@link PageProps} interface에 따른 props를 넘겨 줄수 있습니다.
 *
 * @example
 * <Page.Home title="안녕하세요" />
 */
// const routes: RouteObject[] = [
// 	// 로그인 여부에 관계없이 접근 가능
// 	{ index: true, element: <Page.Login /> },
// 	/*
//         아래 부터는 <RouterGuard/>가 <Outlet/>을 렌더할 때 로그인 여부를 판단해
//         <Nvigate/>를 이용해 redirect 합니다.
//     */
// 	{
// 		path: '/',
// 		element: <RouterGuard />,
// 		children: [
// 			{
// 				element: <AppLayout />,
// 				children: [
// 					...routeSidebar,
// 					{ path: 'home', element: <Page.Home /> },
// 					{ path: '*', element: <Page.NotFound /> },
// 				],
// 			},
// 		],
// 	},
// ]

const routes: RouteObject[] = [
	{
		path: '*',
		element: <BaseLayout />,
		children: [
			{
				path: '/',
				element: <Page.Overview />,
			},
			{
				path: 'overview',
				element: <Navigate to="/" replace />,
			},
			{
				path: 'status',
				children: [
					{
						path: '/',
						element: <Navigate to="404" replace />,
					},
					{
						path: '404',
						element: <Page.Status404 />,
					},
					{
						path: '500',
						element: <Page.Status500 />,
					},
					{
						path: 'maintenance',
						element: <Page.StatusMaintenance />,
					},
					{
						path: 'coming-soon',
						element: <Page.StatusComingSoon />,
					},
				],
			},
			{
				path: '*',
				element: <Page.Status404 />,
			},
		],
	},
	{
		path: 'dashboards',
		element: <SidebarLayout />,
		children: [
			{
				path: '/',
				element: <Navigate to="/dashboards/crypto" replace />,
			},
			{
				path: 'crypto',
				element: <Page.Crypto />,
			},
			// {
			// 	path: 'messenger',
			// 	element: <Page.Messenger />,
			// },
		],
	},
	{
		path: 'management',
		element: <SidebarLayout />,
		children: [
			{
				path: '/',
				element: <Navigate to="/management/transactions" replace />,
			},
			{
				path: 'transactions',
				element: <Page.Transactions />,
			},
			{
				path: 'profile',
				children: [
					{
						path: '/',
						element: <Navigate to="details" replace />,
					},
					{
						path: 'details',
						element: <Page.UserProfile />,
					},
					{
						path: 'settings',
						element: <Page.UserSettings />,
					},
				],
			},
		],
	},
	{
		path: 'components',
		element: <SidebarLayout />,
		children: [
			{
				path: '/',
				element: <Navigate to="/components/buttons" replace />,
			},
			{
				path: 'buttons',
				element: <Page.Buttons />,
			},
			{
				path: 'modals',
				element: <Page.Modals />,
			},
			{
				path: 'accordions',
				element: <Page.Accordions />,
			},
			{
				path: 'tabs',
				element: <Page.Tabs />,
			},
			{
				path: 'badges',
				element: <Page.Badges />,
			},
			{
				path: 'tooltips',
				element: <Page.Tooltips />,
			},
			{
				path: 'avatars',
				element: <Page.Avatars />,
			},
			{
				path: 'cards',
				element: <Page.Cards />,
			},
			{
				path: 'forms',
				element: <Page.Forms />,
			},
		],
	},
]

export default routes
