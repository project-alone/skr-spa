import React from 'react'
import { useModal } from '@lib/modal'
import modal from '@components/modal'

export const useAlert = () => {
	const { openModal } = useModal()

	const alert = React.useCallback(
		(message: string) => {
			openModal(modal.AlertModal, {
				message,
			})
		},
		[openModal],
	)

	const confirm = React.useCallback(
		(message: string, onVerify: () => void) => {
			openModal(modal.AlertModal, {
				message,
				onVerify,
			})
		},
		[openModal],
	)

	return {
		alert,
		confirm,
	}
}
