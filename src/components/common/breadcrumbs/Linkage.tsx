import { Typography } from '@components/common/ui'
import { Link } from 'react-router-dom'

// types
import type { To } from 'react-router-dom'

export const Linkage: React.VFC<{ menu: string; to: To }> = ({ to, menu }) => {
	return (
		<Link to={to}>
			<Typography variant="h3" color="grey.600">
				{menu}
			</Typography>
		</Link>
	)
}
