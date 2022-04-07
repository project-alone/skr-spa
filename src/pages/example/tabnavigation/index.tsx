import React from 'react'

// MUI
import { Container, Grid } from '@mui/material'

// hooks
import { useTabNavigation } from '@lib/tabNavigation'

// components
import { Pages } from '@pages/example/tabnavigation/_parts/Pages'
import Menu from '@pages/example/tabnavigation/_parts/Menu'

/**
 * TabPanels를 생성하는 함수를 만들어야 한다.
 */

const TabNavigationExample: React.FC = () => {
	const { state, dispatch } = useTabNavigation()

	return (
		<Container maxWidth="lg" sx={{ mt: 3 }}>
			<Grid container direction="row">
				{/* Page link list */}
				<Menu onAdd={dispatch.add} />
				{/* Tab UI area */}
				<Grid item md={10} width="100%">
					{/* <TabList
						tabs={state.tabs}
						value={state.currentName}
						onActive={dispatch.active}
						onClose={dispatch.remove}
					/>
					<TabPanels tabs={state.tabs} activeIndex={state.currentName} /> */}
				</Grid>
			</Grid>
		</Container>
	)
}

export default React.memo(TabNavigationExample)
