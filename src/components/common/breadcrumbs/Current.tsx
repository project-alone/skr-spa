import { Typography } from '@components/common/ui'

export const Current: React.VFC<{ menu: string }> = ({ menu }) => {
	return (
		<div>
			<Typography variant="h2" color="grey.900">
				{menu}
			</Typography>
		</div>
	)
}
