import loadable from '@loadable/component'
import { SuspenseLoader } from '@components/common'

import type { DefaultComponent } from '@loadable/component'
import type { LoadableComponent } from '@loadable/component'

/**
 * @description
 * 로딩 HOC
 * loadable component 사용으로 suspense의 기능 대체
 */
function withLoading<Props>(loadFn: (props: Props) => Promise<DefaultComponent<Props>>) {
	return loadable(loadFn, {
		fallback: <SuspenseLoader />,
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
	SignUp = 'SignUp',
	Notification = 'Notification',
	Overview = 'Overview',
	Crypto = 'Crypto',
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
	FormWithHookform = 'FormWithHookform',
	TabNavigation = 'TabNavigation',
}

export const Pages: Record<
	keyof typeof PageNames,
	LoadableComponent<PageProps> | (() => JSX.Element)
> = {
	// antd example
	Home: withLoading(() => import('@pages/Home')),
	Login: withLoading(() => import('@pages/Login')),
	NotFound: withLoading(() => import('@pages/NotFound')),
	Counter: withLoading(() => import('@pages/example/Counter')),
	Grid: withLoading(() => import('@pages/example/Grid')),
	FormWithHookform: withLoading(() => import('@pages/example/Forms')),
	SignUp: withLoading(() => import('@pages/example/signup')),
	TabNavigation: withLoading(() => import('@pages/example/tabnavigation')),
	Notification: withLoading(() => import('@pages/example/notification')),

	// Pages
	Overview: withLoading(() => import('@pages/overview')),

	// Dashboards
	Crypto: withLoading(() => import('@pages/dashboard/crypto')),

	// Applications
	// Messenger: withLoading(() => import('@pages/applications/Messenger')),
	Transactions: withLoading(() => import('@pages/applications/transactions')),
	UserProfile: withLoading(() => import('@pages/applications/users/profile')),
	UserSettings: withLoading(() => import('@pages/applications/users/settings')),

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
