import React from 'react'
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
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { useAliveController } from 'react-activation'
import { useTabNavigation } from '@pages/example/tabnavigation/_parts/useTabNavigation'

interface TabListProps {
	tabs: string[]
	value: number
	onActive(index: number): void
	onClose(name: string): void
}
const TabList: React.FC<TabListProps> = ({ tabs, value, onActive, onClose }) => {
	const handleTab = React.useCallback(
		(event: React.SyntheticEvent, index: number) => {
			console.log(event, index)
			onActive(index)
		},
		[onActive],
	)

	const handleClose = React.useCallback(
		(event: React.MouseEvent, name: string) => {
			event.stopPropagation()
			onClose(name)
		},
		[onClose],
	)

	return (
		<Box width="100%">
			<Tabs value={value} variant="scrollable" scrollButtons="auto" onChange={handleTab}>
				{tabs.map((tabName, index) => (
					<Tab
						key={`tab-list-${index}`}
						component="div"
						iconPosition="end"
						label={
							<span>
								{tabName}
								<IconButton
									onClick={(event: React.MouseEvent) =>
										handleClose(event, tabName)
									}
									size="small">
									<CloseIcon />
								</IconButton>
							</span>
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
	const { add, components: Page, tabs, active, remove } = useTabNavigation()
	const { drop, dropScope, clear, refresh, refreshScope, getCachingNodes } = useAliveController()
	const [activeTab, setActiveTab] = React.useState(0)

	const addTab = React.useCallback(
		(name: string) => {
			add(name)
			setActiveTab(tabs.length)
		},
		[add, tabs.length],
	)

	const onActive = React.useCallback(
		(index: number) => {
			setActiveTab(index)
			active(index)
		},
		[active],
	)

	const onClose = React.useCallback(
		(name: string) => {
			remove(name)
			setActiveTab(tabs.length - 2)
			drop(name)
		},
		[drop, remove, tabs.length],
	)

	return (
		<Container maxWidth="lg" sx={{ mt: 3 }}>
			{console.log('getCachingNodes', getCachingNodes())}
			<Grid item>
				<Button onClick={() => drop('One')}>drop One</Button>
			</Grid>
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
					<TabList tabs={tabs} value={activeTab} onActive={onActive} onClose={onClose} />
					{/* Page view */}
					{Page && <Page />}
				</Grid>
			</Grid>
		</Container>
	)
}

export default TabNavigationExample
