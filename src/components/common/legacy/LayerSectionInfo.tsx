import { Grid } from '@components/common/ui'
import { omit } from 'lodash-es'

type LayerSectionInfoProps = {}

export const LayerSectionInfo: React.FC<LayerSectionInfoProps> = ({ children, ...rest }) => {
	return (
		<Grid
			container
			spacing={15}
			alignItems="center"
			{...omit(rest, ['container', 'spacing', 'alignItems'])}>
			{children}
		</Grid>
	)
}
