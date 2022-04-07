import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { CloseButton } from '@lib/tabNavigation/components/CloseButton'

interface TabListProps {
	tabs: string[]
	value: string
	onActive(name: string): void
	onClose(name: string): void
}

/**
 * @title TabList
 * @description 탭 버튼의 리스트롤 출력하는 컴포넌트
 */
const TabListBase: React.FC<TabListProps> = ({ tabs, value, onActive, onClose }) => {
	const handleChange = React.useCallback(
		(event: React.SyntheticEvent, value: string) => {
			onActive(value)
		},
		[onActive],
	)

	return value === '' ? null : (
		<Box width="100%">
			<Tabs value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange}>
				{tabs.map((tabName, index) => (
					<Tab
						key={`tab-list-${index}`}
						component="div"
						iconPosition="end"
						value={tabName}
						label={<CloseButton tabName={tabName} onClose={onClose} />}
					/>
				))}
			</Tabs>
		</Box>
	)
}
export const TabList = React.memo(TabListBase)
