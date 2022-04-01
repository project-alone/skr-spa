import React from 'react'
import KeepAlive from 'react-activation'
import {
	Box,
	Button,
	Container,
	Grid,
	IconButton,
	MenuItem,
	MenuList,
	Tab,
	Tabs,
	Typography,
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'

const Paragraph: React.FC<{ title: string }> = ({ title, children }) => {
	return (
		<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
			<Typography variant="h1">{title}</Typography>
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
	components: React.FC | null
	// { [key: string]: JSX.Element }[]
}
type TabAction =
	| { type: 'add'; name: string; component: React.FC }
	| { type: 'remove'; name: string }

const tabInitialState: TabState = {
	tabs: [],
	components: null,
}

const tabReducer: React.Reducer<TabState, TabAction> = (prevState, action) => {
	let state = { ...prevState }

	switch (action.type) {
		case 'add': {
			console.log('add reducer')
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

/**
 * @description
 * hooks
 */
const useTabNavigation = () => {
	const [state, dispatch] = React.useReducer(tabReducer, tabInitialState)

	const add = React.useCallback((name: string) => {
		dispatch({ type: 'add', name, component: Pages[name] })
	}, [])

	const remove = React.useCallback((name: string) => {
		dispatch({ type: 'remove', name })
	}, [])

	return { add, remove, ...state }
}

const TabList: React.FC<{ tabs: string[] }> = ({ tabs }) => {
	const [tabValue, setTabValue] = React.useState('0')

	const handleTab = React.useCallback((event: React.SyntheticEvent, newValue: string) => {
		setTabValue(newValue)
	}, [])

	const handleClose = React.useCallback((event: React.MouseEvent, index: number) => {
		event.stopPropagation()
		console.log(index)
	}, [])

	return (
		<Box width="100%">
			<Tabs value={tabValue} variant="scrollable" scrollButtons onChange={handleTab}>
				{tabs.map((tabName, index) => (
					<Tab
						key={`tab-list-${index}`}
						iconPosition="end"
						label={
							<>
								{tabName}
								<IconButton
									onClick={(event: React.MouseEvent) => handleClose(event, index)}
									component={CloseIcon}
								/>
							</>
						}
					/>
				))}
			</Tabs>
		</Box>
	)
}

const MenuButton: React.FC<{ name: string; onClick: (name: string) => void }> = ({
	children,
	name,
	onClick,
}) => {
	const handleClick = React.useCallback(() => {
		onClick(name)
	}, [name, onClick])

	return (
		<MenuItem component={Button} color="secondary" onClick={handleClick}>
			{children}
		</MenuItem>
	)
}

const TabNavigationExample: React.FC = () => {
	const { add, components: Page, tabs } = useTabNavigation()

	const addTab = React.useCallback(
		(name: string) => {
			add(name)
		},
		[add],
	)

	React.useEffect(() => {
		console.log(tabs)
	}, [tabs])

	return (
		<Container maxWidth="lg" sx={{ mt: 3 }}>
			<Grid container direction="row">
				{/* Page link list */}
				<Grid item md={2}>
					<MenuList>
						{[
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
						].map((item, index) => (
							<MenuButton key={`menu-button-${index}`} name={item} onClick={addTab}>
								{item}
							</MenuButton>
						))}
					</MenuList>
				</Grid>
				{/* Tab UI area */}
				<Grid item md={10} width="100%">
					{/* Tab button list */}
					<TabList tabs={tabs} />
					{/* Page view */}
					{Page && <Page />}
				</Grid>
			</Grid>
		</Container>
	)
}

export default TabNavigationExample
