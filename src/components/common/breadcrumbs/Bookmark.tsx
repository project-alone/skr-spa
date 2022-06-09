import React from 'react'
import { PageTitleItem } from '@components/common/title/Title.styled'
import { Typography, ToggleButton } from '@components/common/ui'
import { IconBookmark } from '@components/common/ui/Icons'

export const Bookmark: React.VFC<{ menu: string }> = ({ menu }) => {
	const [selected, setSelected] = React.useState(false)

	return (
		<PageTitleItem>
			<Typography variant="h2" color="grey.900">
				{menu}
			</Typography>
			<ToggleButton
				color="standard"
				value="check"
				selected={selected}
				onChange={() => setSelected(!selected)}>
				<IconBookmark />
			</ToggleButton>
		</PageTitleItem>
	)
}
