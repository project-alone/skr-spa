import React from 'react'
import { Button, Grid, MenuItem, MenuList } from '@mui/material'

/**
 * @deprecated
 */
const MenuButton: React.FC<{
	children: React.ReactNode
	name: string
	onClick: (name: string) => void
}> = ({ children, name, onClick }) => {
	const handleClick = React.useCallback(() => {
		onClick(name)
	}, [name, onClick])

	return (
		<MenuItem component={Button} color="secondary" onClick={handleClick}>
			{children}
		</MenuItem>
	)
}
const MenuButtonItem = React.memo(MenuButton)

/**
 * @deprecated
 */
const Menu: React.FC<{ onAdd: (name: string) => void }> = ({ onAdd }) => {
	const [pageList] = React.useState([
		'One',
		'Two',
		'Three',
		'Four',
		'Five',
		'Six',
		'Seven',
		'Eight',
		'Nine',
		'Ten',
	])
	const addTab = React.useCallback(
		(name: string) => {
			onAdd(name)
		},
		[onAdd],
	)

	return (
		<Grid item md={2}>
			<MenuList>
				{pageList.map((item, index) => (
					<MenuButtonItem key={`menu-button-${index}`} name={item} onClick={addTab}>
						{item}
					</MenuButtonItem>
				))}
			</MenuList>
		</Grid>
	)
}
const MenuExample = React.memo(Menu)

export default MenuExample
