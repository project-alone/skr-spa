import { lazy } from '@loadable/component'
import { AppLayout } from '@components/layout'
import { RouterGuard } from '@components/layout'
import KeepAlive from 'react-activation'
import type { LoadableComponent } from '@loadable/component'
import type { RouteObject } from 'react-router-dom'

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
	Forms = 'Forms',
}

const Page: Record<keyof typeof PageNames, LoadableComponent<PageProps>> = {
	Home: lazy((props) => import('@pages/Home')),
	Login: lazy((props) => import('@pages/Login')),
	NotFound: lazy((props) => import('@pages/NotFound')),
	Counter: lazy((props) => import('@pages/example/Counter')),
	Grid: lazy((props) => import('@pages/example/Grid')),
	Modal: lazy((props) => import('@pages/example/Modal')),
	Forms: lazy((props) => import('@pages/example/Forms')),
}

/**
 * @description
 * <Sidebar/>에서 공통으로 사용하기 위해 path를 명확하게 같는 route 객체는 별도로 관리
 */
export const routeSidebar: RouteObject[] = [
	{
		path: 'example',
		children: [
			{
				path: 'counter',
				element: (
					<KeepAlive name="counter">
						<Page.Counter />
					</KeepAlive>
				),
			},
			{ path: 'grid', element: <Page.Grid /> },
			{ path: 'modal', element: <Page.Modal /> },
			{ path: 'forms', element: <Page.Forms /> },
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
const routes: RouteObject[] = [
	// 로그인 여부에 관계없이 접근 가능
	{ index: true, element: <Page.Login /> },
	/*
        아래 부터는 <RouterGuard/>가 <Outlet/>을 렌더할 때 로그인 여부를 판단해 
        <Nvigate/>를 이용해 redirect 합니다.
    */
	{
		path: '/',
		element: <RouterGuard />,
		children: [
			{
				element: <AppLayout />,
				children: [
					...routeSidebar,
					{ path: 'home', element: <Page.Home /> },
					{ path: '*', element: <Page.NotFound /> },
				],
			},
		],
	},
]

export default routes
