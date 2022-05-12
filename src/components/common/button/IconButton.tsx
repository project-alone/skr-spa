import { styled, IconButton as MuiIconButton } from '@mui/material'
import colorSystem from '@styles/theme/colorSystem'

// types
import type { IconButtonProps as MuiIconButtonProps } from '@mui/material'

interface IconButtonProps extends MuiIconButtonProps {
	variant?: 'outlined'
}

export const IconButton = styled(MuiIconButton)<IconButtonProps>(
	({ variant }) => {
		return variant === 'outlined'
			? {
					border: '1px solid',
			  }
			: {}
	},
	({ variant, color }) => {
		return variant === 'outlined' && color === 'primary'
			? {
					backgroundColor: colorSystem.white,
					borderColor: colorSystem.primary.b700,
					'&:hover, &:active': {
						backgroundColor: colorSystem.bg.b300,
						borderColor: colorSystem.primary.b700,
					},
					svg: {
						'& path': {
							fill: colorSystem.primary.b700,
						},
					},
			  }
			: {}
	},
)
