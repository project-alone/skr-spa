import React from 'react'
import KeepAlive from 'react-activation'

type Pages = { [key: string]: React.FC }

const pages: Pages = {}

interface TabPanelProps {
	activeIndex: string
	tabs: string[]
}

const TabPanels: React.FC<TabPanelProps> = ({ children, activeIndex }) => {
	return (
		<React.Fragment>
			{Object.entries(pages).map(
				([name, Component]) =>
					activeIndex === name && (
						<KeepAlive key={`tabnavigation-panels-${name}`} name={name}>
							<Component />
						</KeepAlive>
					),
			)}
		</React.Fragment>
	)
}

export const createPanels = (recievedPages: Pages) => {
	// pages = recievedPages
	return { TabPanels }
}
