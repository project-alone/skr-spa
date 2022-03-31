import React from 'react'
import KeepAlive from 'react-activation'
import { Box, MenuItem, MenuList, Toolbar, Typography } from '@mui/material'

const Paragraph: React.FC<{ title: string }> = ({ title, children }) => {
	return (
		<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
			<Typography variant="h1">메뉴</Typography>
			{children}
			<Typography paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
				elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
				hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
				velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
				Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
				quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
				fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
				lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at
				consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
				faucibus et molestie ac.
			</Typography>
			<Typography paragraph>
				Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget
				nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat
				ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
				volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at
				quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus
				viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
				Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et.
				Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod
				elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
				Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
			</Typography>
			<Typography paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni alias quo error
				pariatur consequatur, esse facere deserunt et modi. Ad beatae, tenetur possimus
				officia dolores vitae temporibus totam maxime placeat.
			</Typography>
		</Box>
	)
}

const Pages: { [key: string]: React.FC } = {
	One: () => {
		return <Paragraph title="One" />
	},
	Two: () => {
		return <Paragraph title="Two" />
	},
	Three: () => {
		return <Paragraph title="Three" />
	},
	Four: () => {
		return <Paragraph title="Four" />
	},
	Five: () => {
		return <Paragraph title="Five" />
	},
	Six: () => {
		return <Paragraph title="Six" />
	},
	Seven: () => {
		return <Paragraph title="Seven" />
	},
	Eight: () => {
		return <Paragraph title="Eight" />
	},
	Nine: () => {
		return <Paragraph title="Nine" />
	},
	Ten: () => {
		return <Paragraph title="Ten" />
	},
}

interface TabState {
	tabs: string[]
	components: JSX.Element | null
	// { [key: string]: JSX.Element }[]
}
type TabAction =
	| { type: 'add'; name: string; component: JSX.Element }
	| { type: 'remove'; name: string }

const tabInitialState: TabState = {
	tabs: [],
	components: null,
}

const tabReducer: React.Reducer<TabState, TabAction> = (prevState, action) => {
	let state = { ...prevState }

	switch (action.type) {
		case 'add': {
			state = {
				tabs: [...state.tabs, action.name],
				components: action.component,
			}
			return state
		}
		case 'remove': {
			state = {
				...state,
				tabs: state.tabs.filter((item) => item !== action.name),
			}
			return state
		}
		default: {
			return state
		}
	}
}

const TabNavigationExample: React.FC = () => {
	const [state, dispatch] = React.useReducer(tabReducer, tabInitialState)

	const addTab = React.useCallback((name: string) => {
		dispatch({ type: 'add', name })
	}, [])

	return (
		<Box sx={{ display: 'flex', position: 'relative' }}>
			<MenuList>
				<MenuItem onClick={addTab('One')}>One</MenuItem>
				<MenuItem onClick={}>Two</MenuItem>
				<MenuItem onClick={}>Three</MenuItem>
				<MenuItem onClick={}>Four</MenuItem>
				<MenuItem onClick={}>Five</MenuItem>
				<MenuItem onClick={}>Six</MenuItem>
				<MenuItem onClick={}>Seven</MenuItem>
				<MenuItem onClick={}>Eight</MenuItem>
				<MenuItem onClick={}>Nine</MenuItem>
				<MenuItem onClick={}>Ten</MenuItem>
			</MenuList>
			{state.components}
		</Box>
	)
}

export default TabNavigationExample
