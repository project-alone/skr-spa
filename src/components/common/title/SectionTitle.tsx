import { Typography, Stack, Chip } from '@components/common/ui'
import { LayerSectionContent, LayerSectionTitle } from '@components/common/title/Title.styled'

// type
import type { ChipProps } from '@mui/material'

interface SectionTitleProps {
	desc?: string
	title: string
	badge?: Pick<ChipProps, 'color' | 'variant' | 'label'>
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ desc, title, badge, children }) => {
	return (
		<LayerSectionTitle>
			<LayerSectionContent>
				{/* is Badge */}
				{badge && <Chip {...badge} sx={{ mr: 5 }} />}
				<Typography variant="h3" color="grey.900">
					{title}
				</Typography>
				{/* is Description */}
				{desc && (
					<Typography variant="ct" color="grey.600">
						{desc}
					</Typography>
				)}
			</LayerSectionContent>
			<Stack direction="row" spacing={5}>
				{children}
			</Stack>
		</LayerSectionTitle>
	)
}
