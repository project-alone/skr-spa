import React from 'react'
import type { LoadableComponent } from '@loadable/component'

export type ModalDispatch = {
	open(Component: ModalState['Component'], props: ModalState['props']): void
	close(Component: ModalState['Component']): void
}

export interface ModalState {
	Component: LoadableComponent<{ [key: string]: unknown }>
	props: { [key: string]: unknown }
}

export const ModalDispatchContext = React.createContext<ModalDispatch>({
	open: () => {
		/** nothing */
	},
	close: () => {
		/** nothing */
	},
})
export const ModalStateContext = React.createContext<ModalState[]>([])
