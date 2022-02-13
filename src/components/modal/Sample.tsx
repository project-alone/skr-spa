import React from 'react'
import styled from 'styled-components'

// style
const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);

	.modal-area {
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

export interface PortalProps {
	onClose?(result?: boolean): void
}

const SampleModal: React.FC<PortalProps> = ({ children, onClose }) => {
	const close = React.useCallback(() => {
		typeof onClose === 'function' && onClose()
	}, [onClose])

	return (
		<Modal>
			<div className="modal-area">
				{children}
				<button type="button" onClick={close}>
					close
				</button>
			</div>
		</Modal>
	)
}

export default SampleModal
