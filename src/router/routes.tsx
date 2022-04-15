import { /* RouterGuard, */ SidebarLayout, BaseLayout } from '@components/layout'
import { Navigate } from 'react-router-dom'
import KeepAlive from 'react-activation'
import { Pages as Page } from '@router/pages'
import type { RouteObject } from 'react-router-dom'

/**
 * @description
 * <Sidebar/>에서 공통으로 사용하기 위해 path를 명확하게 같는 route 객체는 별도로 관리
 */

export const exampleRoutes: RouteObject[] = [
	{
		path: 'example',
		element: <SidebarLayout />,
		children: [
			{ path: 'home', element: <Page.Home /> },
			{ path: 'login', element: <Page.Login /> },
			{
				path: 'counter',
				element: (
					<KeepAlive name="counter">
						<Page.Counter />
					</KeepAlive>
				),
			},
			{ path: 'grid', element: <Page.Grid /> },
			{ path: 'formwithhookform', element: <Page.FormWithHookform /> },
			{ path: 'signup', element: <Page.SignUp /> },
			{ path: 'tabnavigation', element: <Page.TabNavigation /> },
			{ path: 'notification', element: <Page.Notification /> },
		],
	},
]

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
		path: '/',
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
						path: '',
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
	...exampleRoutes,
	{
		path: 'dashboards',
		element: <SidebarLayout />,
		children: [
			{
				path: '',
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
				path: '',
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
						path: '',
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
				path: '',
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
