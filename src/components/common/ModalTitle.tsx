import React from 'react'
import { DialogTitle, IconButton, Divider } from '@components/common/ui'
import { IconClose } from '@components/common/ui/Icons'

// type
import type { DialogTitleProps } from '@components/common/ui'

interface ModalTitleProps extends DialogTitleProps {
	onClose?: React.MouseEventHandler<HTMLButtonElement>
}

export const ModalTitle: React.FC<ModalTitleProps> = ({ children, onClose, ...rest }) => {
	return (
		<React.Fragment>
			<DialogTitle sx={{ m: 0, p: 2 }} {...rest}>
				{children}
				{onClose && (
					<IconButton aria-label="close" onClick={onClose}>
						<IconClose />
					</IconButton>
				)}
			</DialogTitle>
			<Divider variant="section15" />
		</React.Fragment>
	)
}
