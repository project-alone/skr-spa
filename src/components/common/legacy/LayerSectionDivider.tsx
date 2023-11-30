import React from 'react'
import {
	LayerContainer,
	GridItemSticky,
} from '@components/common/legacy/LayerSectionDivider.styled'

// type LayerSectionDividerProps = {}

export const LayerSectionDivider: React.FC = ({ children }) => {
	return (
		<LayerContainer>
			{React.Children.toArray(children).map((child, index) =>
				index === 0 ? children : <GridItemSticky>{child}</GridItemSticky>,
			)}
		</LayerContainer>
	)
}
