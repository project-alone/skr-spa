import { styled } from '@mui/material'

const Wrap = styled('div')(({ theme }) => ({
	padding: '15px 50px 0',
	width: 'calc(100vw - 65px)',
	height: '57px',
	display: 'flex',
	boxSizing: 'border-box',
	borderBottom: `1px solid ${theme.palette.border[700]}`,
}))

const List = styled('ul')(({ theme }) => ({
	display: 'flex',
	flex: 1,
	gap: '8px',
}))

interface ItemProps {
	/** @default false */
	active?: boolean
}

const Item = styled('li')<ItemProps>(
	({ theme, active = false }) => ({
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
		color: `${active ? theme.palette.grey[900] : theme.palette.grey[400]}`,
		cursor: 'pointer',
		backgroundColor: `${active ? theme.palette.background[700] : 'transparent'}`,
		'& $menu': active
			? {
					'& $button': {
						'& svg': {
							'& path': {
								fill: `${theme.palette.grey[900]}`,
							},
						},
					},
			  }
			: {
					display: 'flex',
					alignItems: 'center',
					gap: '6px',
			  },
	}),
	({ active, theme }) => {
		return active
			? {}
			: {
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
			  }
	},
)

const Menu = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '6px',
}))

const Option = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
}))

const Button = styled('button')(({ theme }) => ({
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

export { Wrap, List, Item, Menu, Option, Button }
