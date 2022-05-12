// icons
import { ReactComponent as IconArrowUp } from '@static/images/icons/arrow-up.svg'
import { ReactComponent as IconArrowDown } from '@static/images/icons/arrow-down.svg'
import { ReactComponent as IconFilter } from '@static/images/icons/filter.svg'

const SortedDescendingIcon = () => <IconArrowDown className="icon" />
const SortedAscendingIcon = () => <IconArrowUp className="icon" />
const ColumnMenuIcon = () => <IconFilter className="icon" />

export {
	SortedDescendingIcon as SortedDescending,
	SortedAscendingIcon as SortedAscending,
	ColumnMenuIcon as ColumnMenu,
}
