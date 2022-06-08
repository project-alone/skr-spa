import { styled } from '@mui/material'

export const Wrap = styled('div')(({ theme }) => ({
	padding: '15px 50px 0',
	width: 'calc(100vw - 65px)',
	height: '57px',
	display: 'flex',
	boxSizing: 'border-box',
	borderBottom: `1px solid ${theme.palette.border[700]}`,
}))

export const List = styled('ul')(({ theme }) => ({
	display: 'flex',
	flex: 1,
	gap: '8px',
}))

export const Menu = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '6px',
}))

export const Option = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
}))

export const Button = styled('button')(({ theme }) => ({
	border: 'none',
	width: '18px',
	height: '18px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: 0,
	backgroundColor: 'transparent',
	cursor: 'pointer',
}))

export const Item = styled('li')<{ active: boolean }>(
	({ theme, active }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'spaceBetween',
		padding: '11px 12px',
		minWidth: '42px',
		height: '42px',
		boxSizing: 'border-box',
		border: `1px solid ${theme.palette.border[700]}`,
		borderBottom: 'none',
		borderRadius: '5px 5px 0 0',
		gap: '20px ',
		color: `${theme.palette.grey[400]}`,
		cursor: 'pointer',
	}),
	({ theme, active }) =>
		active
			? {
					// active
					backgroundColor: `${theme.palette.background[700]}`,
					'& $menu': {
						'& $button': {
							'& svg': {
								'& path': {
									fill: `${theme.palette.grey[900]}`,
								},
							},
						},
					},
			  }
			: {
					// non-active
					'& $menu': {
						display: 'flex',
						alignItems: 'center',
						gap: '6px',
					},
					'&:hover': {
						backgroundColor: `${theme.palette.background[700]}`,
						color: `${theme.palette.grey[900]}`,
						'& $menu': {
							'& $button': {
								'& svg': {
									'& path': {
										fill: `${theme.palette.grey[900]}`,
									},
								},
							},
						},
					},
					'&.is-active': {
						backgroundColor: `${theme.palette.background[700]}`,
						color: `${theme.palette.grey[900]}`,
						'& $menu': {
							'& $button': {
								'& svg': {
									'& path': {
										fill: `${theme.palette.grey[900]}`,
									},
								},
							},
						},
					},
			  },
)

// export const ItemActive = styled('li')(({ theme }) => ({
// 	display: 'flex',
// 	alignItems: 'center',
// 	justifyContent: 'spaceBetween',
// 	padding: '11px 12px',
// 	minWidth: '42px',
// 	height: '42px',
// 	boxSizing: 'border-box',
// 	border: `1px solid ${theme.palette.border[700]}`,
// 	borderBottom: 'none',
// 	borderRadius: '5px 5px 0 0',
// 	gap: '20px ',
// 	color: `${theme.palette.grey[900]}`,
// 	cursor: 'pointer',
// 	backgroundColor: `${theme.palette.background[700]}`,
// 	'& $menu': {
// 		'& $button': {
// 			'& svg': {
// 				'& path': {
// 					fill: `${theme.palette.grey[900]}`,
// 				},
// 			},
// 		},
// 	},
// }))
