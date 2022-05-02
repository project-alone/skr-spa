import React from 'react'
import ReactDOM from 'react-dom'
import { ModalDispatchContext, ModalStateContext } from '@lib/modal/context'
import { disableScroll } from '@lib/utils'
import { omit } from 'lodash-es'

export interface ModalProps {
	onClose?(): void
	onSubmit?(...args: unknown[]): Promise<void>
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
				const onClose = () => {
					close(Component)
				}
				const handleSubmit = async (...args: unknown[]) => {
					if (props) {
						typeof props.onSubmit === 'function' && (await props.onSubmit(...args))
						onClose()
					}
				}

				const restProps = {
					open: true,
					onClose: onClose,
					onSubmit: handleSubmit,
					...omit(props, 'onSubmit'),
				}

				return (
					element &&
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					ReactDOM.createPortal(<Component key={index} {...restProps} />, element)
				)
			})}
		</>
	)
}
