import React from 'react'
import loadable from '@loadable/component'
import KeepAlive from 'react-activation'
import { AppLayout, RouterGuard } from '@components/layout'
import { Navigate } from 'react-router-dom'
import { BaseLayout, SidebarLayout } from '@components/layouts'
import { Loading } from '@components/common'

import type { DefaultComponent } from '@loadable/component'
import type { LoadableComponent } from '@loadable/component'
import type { PartialRouteObject } from 'react-router'
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
	Forms = 'Forms',
}

const Page: Record<keyof typeof PageNames, LoadableComponent<PageProps>> = {
	Home: withLoading((props) => import('@pages/Home')),
	Login: withLoading((props) => import('@pages/Login')),
	NotFound: withLoading((props) => import('@pages/NotFound')),
	Counter: withLoading((props) => import('@pages/example/Counter')),
	Grid: withLoading((props) => import('@pages/example/Grid')),
	Modal: withLoading((props) => import('@pages/example/Modal')),
	Forms: withLoading((props) => import('@pages/example/Forms')),
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
