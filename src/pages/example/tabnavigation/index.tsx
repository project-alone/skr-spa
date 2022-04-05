import React from 'react'
import { Box, Button, Container, Grid, IconButton, Tab, Tabs } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import KeepAlive, { useAliveController } from 'react-activation'
import { useLabelState } from '@hooks/useLabelState'
import { useTabNavigation } from '@pages/example/tabnavigation/_parts/useTabNavigation'
import { Pages } from '@pages/example/tabnavigation/_parts/Pages'
import Menu from '@pages/example/tabnavigation/_parts/Menu'

interface TabPanelProps {
	activeIndex: number
	tabs: string[]
}

const TabPanels: React.FC<TabPanelProps> = ({ children, activeIndex }) => {
	return (
		<React.Fragment>
			{Object.entries(Pages).map(
				([name, Component], index) =>
					activeIndex === index && (
						<KeepAlive key={`tabnavigation-panels-${index}`} name={name}>
							<Component />
						</KeepAlive>
					),
			)}
		</React.Fragment>
	)
}

interface TabListProps {
	tabs: string[]
	value: number
	onActive(index: number): void
	onClose(name: string): void
}

/**
 * @title TabList
 * @description 탭 버튼의 리스트롤 출력하는 컴포넌트
 */
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

	return value < 0 ? null : (
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

const TabNavigationExample: React.FC = () => {
	const { add, state, active, remove } = useTabNavigation()
	const { drop, getCachingNodes } = useAliveController()

	const onClose = React.useCallback(
		(name: string) => {
			console.log('onClose', name)
			drop(name)
			remove(name)
			active(state.tabs.length - 2)
		},
		[active, drop, remove, state.tabs.length],
	)

	React.useEffect(() => {
		console.log('getCachingNodes', getCachingNodes())
	}, [])

	return (
		<Container maxWidth="lg" sx={{ mt: 3 }}>
			<Grid container direction="row">
				{/* Page link list */}
				<Menu onAdd={add} />
				{/* Tab UI area */}
				<Grid item md={10} width="100%">
					<TabList
						tabs={state.tabs}
						value={state.index}
						onActive={active}
						onClose={onClose}
					/>
					<TabPanels tabs={state.tabs} activeIndex={state.index} />
				</Grid>
			</Grid>
		</Container>
	)
}

export default React.memo(TabNavigationExample)
