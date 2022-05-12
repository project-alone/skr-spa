import React from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

// types
import type { TabListProps } from '@mui/lab'

interface TabsProps {
	onChange?: (newValue: string) => void
}

export const Tabs: React.FC<TabsProps> = ({ onChange }) => {
	const [value, setValue] = React.useState('1')

	const handleChange: TabListProps['onChange'] = React.useCallback((event, newValue) => {
		setValue(newValue)
		typeof onChange === 'function' && onChange(newValue)
	}, [])

	return (
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange} aria-label="lab API tabs example">
						<Tab label="Item One" value="1" />
						<Tab label="Item Two" value="2" />
						<Tab label="Item Three" value="3" />
					</TabList>
				</Box>
				<TabPanel value="1">Item One</TabPanel>
				<TabPanel value="2">Item Two</TabPanel>
				<TabPanel value="3">Item Three</TabPanel>
			</TabContext>
		</Box>
	)
}
