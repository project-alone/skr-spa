import { List as MuiList, ListItem as MuiListItem, ListItemIcon, ListItemText } from '@mui/material'
import { IconButton } from '@components/common'

// icons
import { ReactComponent as IconChevron } from '@static/images/icons/chevron-forward.svg'
import { ReactComponent as IconDownload } from '@static/images/icons/download.svg'
import { ReactComponent as IconBookmark } from '@static/images/icons/bookmark.svg'
import { ReactComponent as IconDocAttach } from '@static/images/icons/document-attach.svg'
import { ReactComponent as IconDocText } from '@static/images/icons/document-text.svg'

// types
import type { ListItemProps as MuiListItemProps } from '@mui/material'

const Icons = {
	bookmark: IconBookmark,
	docAttach: IconDocAttach,
	docText: IconDocText,
	default: IconBookmark,
	secondaryAction: {
		bookmark: IconChevron,
		docAttach: IconDownload,
		docText: IconDownload,
		default: IconChevron,
	},
}

interface ListItemProps extends MuiListItemProps {
	title: string
	icon: React.ReactNode
	secondaryActionIcon: React.ReactNode
}
const ListItem: React.FC<ListItemProps> = ({ title, secondaryActionIcon, icon }) => {
	return (
		<MuiListItem
			secondaryAction={
				<IconButton edge="end" aria-label="chevron">
					{secondaryActionIcon}
				</IconButton>
			}>
			<ListItemIcon>{icon}</ListItemIcon>
			<ListItemText primary={title} />
		</MuiListItem>
	)
}

export interface ListProps {
	listData: {
		type?: 'bookmark' | 'docAttach' | 'docText'
		title: string
	}[]
}

export const List: React.FC<ListProps> = ({ listData }) => {
	return (
		<MuiList>
			{listData.map(({ title, type }, idx) => {
				const Icon = type ? Icons[type] : Icons.default
				const SecondaryActionIcon = type
					? Icons.secondaryAction[type]
					: Icons.secondaryAction.default

				return (
					<ListItem
						title={title}
						icon={<Icon />}
						secondaryActionIcon={<SecondaryActionIcon />}
					/>
				)
			})}
		</MuiList>
	)
}
