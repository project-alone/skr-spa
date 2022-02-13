import React from 'react'
import ReactDOM from 'react-dom'
import { ModalDispatchContext, ModalStateContext } from '@lib/modal/context'
import { disableScroll } from '@lib/utils'

export const Modals: React.FC<{ selector?: string }> = ({ selector = '#modal-container' }) => {
	const openedModals = React.useContext(ModalStateContext)
	const { close } = React.useContext(ModalDispatchContext)
	const element = document.querySelector(selector) as HTMLDivElement

	React.useEffect(() => {
		if (openedModals.length) {
			disableScroll.on()
		} else {
			disableScroll.off()
		}
	})

	return (
		<>
			{openedModals.map((modal, index) => {
				const { Component, props } = modal
				const { onSubmit, ...restProps } = props
				const onClose = () => {
					close(Component)
				}
				const handleSubmit = async () => {
					typeof onSubmit === 'function' && (await onSubmit())
				}

				return (
					element &&
					ReactDOM.createPortal(
						<Component
							{...restProps}
							key={index}
							onClose={onClose}
							onSubmit={handleSubmit}
						/>,
						element,
					)
				)
			})}
		</>
	)
}
