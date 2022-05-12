import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

// types
import type { ButtonProps } from '@mui/material'

const LySubTitle = styled(Box)({
	display: 'flex',
	width: '100%',
	height: '52px',
	justifyContent: 'space-between',
	alignItems: 'center',
})
const SubTit = styled(Box)(({ theme }) => ({
	paddingLeft: '11px',
	position: 'relative',
	'& :before': {
		content: "''",
		display: 'inline-block',
		width: '6px',
		height: '6px',
		clear: 'both',
		// FIXME: light300 프로퍼티가 없음
		// backgroundColor: `${theme.palette.primary.light300}`,
		position: 'absolute',
		left: 0,
		top: '50%',
		transform: 'translateY(-50%)',
	},
}))

interface SectionTitleProps {
	// type
	title: string
	btn?: {
		color: ButtonProps['color']
		style: ButtonProps['variant']
		name: string
	}
}

export const SubTitle: React.FC<SectionTitleProps> = ({ title, btn }) => {
	return (
		<LySubTitle>
			<SubTit>
				<Typography variant="st1">{title}</Typography>
			</SubTit>
			{btn && (
				<Button color={btn.color} variant={btn.style}>
					{btn.name}
				</Button>
			)}
		</LySubTitle>
	)
}
