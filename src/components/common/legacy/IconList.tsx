import React from 'react'
import { ListItemIcon, ListItemText, IconButton } from '@components/common/ui'
// 공용 컴포넌트로 wrapping 되어 있지 않음
import { List, ListItem } from '@mui/material'
import * as Icons from '@components/common/ui/Icons'

/**
 * @note MuiList -> IconList 로 변경
 */

interface IconListProps {
	listData: {
		type: 'bookmark' | 'docAttach' | 'docText'
		title: string
	}[]
}

export const IconList: React.VFC<IconListProps> = ({ listData }) => {
	const actionIcons = React.useMemo(() => {
		return {
			bookmark: <Icons.IconChevron />,
			docAttach: <Icons.IconDownload />,
			docText: <Icons.IconDownload />,
			basic: <Icons.IconChevron />,
		}
	}, [])

	const listItemIcons = React.useMemo(() => {
		return {
			bookmark: <Icons.IconBookmark />,
			docAttach: <Icons.IconDocAttach />,
			docText: <Icons.IconDocText />,
			basic: <Icons.IconBookmark />,
		}
	}, [])

	return (
		<List>
			{listData.map((item, index) => (
				<ListItem
					key={`list-item-${index}`}
					secondaryAction={
						<IconButton edge="end" aria-label="chevron">
							{actionIcons[item.type]}
						</IconButton>
					}>
					<ListItemIcon>{listItemIcons[item.type]}</ListItemIcon>
					<ListItemText primary={item.title} />
				</ListItem>
			))}
		</List>
	)
}
