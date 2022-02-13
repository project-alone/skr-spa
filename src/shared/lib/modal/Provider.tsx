import React from 'react'
import { ModalDispatchContext, ModalStateContext } from '@lib/modal/context'
import { Modals } from '@lib/modal/Modal'
import type { ModalState, ModalDispatch } from '@lib/modal/context'

export const ModalProvider: React.FC = ({ children }) => {
	// state
	const [openModals, setOpenModals] = React.useState<ModalState[]>([])

	// methods
	const open = React.useCallback<ModalDispatch['open']>((Component, props) => {
		setOpenModals((modals) => {
			return [...modals, { Component, props }]
		})
	}, [])
	const close = React.useCallback<ModalDispatch['close']>((Component) => {
		setOpenModals((modals) => {
			return modals.filter((modal) => {
				return modal.Component !== Component
			})
		})
	}, [])
	const dispatch = { open, close }

	return (
		<ModalStateContext.Provider value={openModals}>
			<ModalDispatchContext.Provider value={dispatch}>
				{children}
				<Modals />
			</ModalDispatchContext.Provider>
		</ModalStateContext.Provider>
	)
}
