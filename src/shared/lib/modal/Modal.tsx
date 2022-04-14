import React from 'react'
import ReactDOM from 'react-dom'
import { ModalDispatchContext, ModalStateContext } from '@lib/modal/context'
import { disableScroll } from '@lib/utils'

export interface ModalProps {
	onClose?(): void
	onSubmit?(): Promise<void>
}

interface ModalsProps {
	selector?: string
}

export const Modals: React.FC<ModalsProps> = ({ selector = '#modal-container' }) => {
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
			{openedModals.map(({ Component, props }, index) => {
				const { onSubmit, ...restProps } = props
				const onClose = () => {
					close(Component)
				}
				const handleSubmit = async () => {
					typeof onSubmit === 'function' && (await onSubmit())
				}

				const componentProps = {
					onClose: onClose,
					onSubmit: handleSubmit,
				}

				return (
					element &&
					ReactDOM.createPortal(
						<Component key={index} {...restProps} {...componentProps} />,
						element,
					)
				)
			})}
		</>
	)
}
