import loadable from '@loadable/component'
import type { DefaultComponent } from '@loadable/component'
import { SuspenseLoader } from '@components/ex/SuspenseLoader'

export const withLoading = (loadFn: () => Promise<DefaultComponent<Record<string, unknown>>>) => {
	return loadable(loadFn, {
		fallback: <SuspenseLoader />,
	})
}
