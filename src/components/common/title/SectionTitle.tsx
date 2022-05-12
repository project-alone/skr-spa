import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { ButtonProps } from '@mui/material'

const LySectionTitle = styled(Box)({
	display: 'flex',
	width: '100%',
	height: '52px',
	justifyContent: 'space-between',
	alignItems: 'center',
})

interface SectionTitleProps {
	// type?: 'isCaption' | 'isButton' | 'isAll'
	title: string
	btn?: {
		color: ButtonProps['color']
		style: ButtonProps['variant']
		name: string
	}
	caption?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, btn, caption }) => {
	return (
		<LySectionTitle>
			<Typography variant="h4" color="grey.900">
				{title}
				{caption && (
					<Typography variant="b1" color="grey.600" pl={1}>
						{caption}
					</Typography>
				)}
			</Typography>
			{btn && (
				<Button color={btn.color} variant={btn.style}>
					{btn.name}
				</Button>
			)}
		</LySectionTitle>
	)
}
