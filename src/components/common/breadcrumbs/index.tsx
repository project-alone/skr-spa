import { Breadcrumbs as UiBreadcrumbs } from '@components/common/ui'
import { Bookmark } from '@components/common/breadcrumbs/Bookmark'
import { Current } from '@components/common/breadcrumbs/Current'
import { Linkage } from '@components/common/breadcrumbs/Linkage'
import { IconChevron } from '@components/common/ui/Icons'

// types
import type { To } from 'react-router-dom'

export interface BreadcrumbsProps {
	list: (
		| {
				menu: string
				type: 'bookmark' | 'current'
		  }
		| {
				menu: string
				type: 'linkage'
				to: To
		  }
	)[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ list }) => {
	return (
		<UiBreadcrumbs separator={<IconChevron />} aria-label="breadcrumb">
			{list.map((title, idx) => {
				switch (title.type) {
					case 'bookmark':
						return <Bookmark menu={title.menu} />
					case 'current':
						return <Current menu={title.menu} />
					case 'linkage':
						return <Linkage menu={title.menu} to={title.to} />
				}
			})}
		</UiBreadcrumbs>
	)
}
