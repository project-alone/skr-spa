import React from 'react'
import { Chip } from '@components/common/ui'
import { IconCloseCircle } from '@components/common/ui/Icons'

// types
import { ChipProps } from '@components/common/ui'

interface BadgeProps {
	label: string
	onDelete?: ChipProps['onDelete']
}

const Badge: React.FC<BadgeProps> = ({ label, onDelete }) => {
	const handleDelete: ChipProps['onDelete'] = React.useCallback(
		(event) => {
			typeof onDelete === 'function' && onDelete(event)
		},
		[onDelete],
	)

	return (
		<Chip
			label={label}
			variant="result"
			deleteIcon={<IconCloseCircle />}
			onDelete={handleDelete}
		/>
	)
}

export default Badge
