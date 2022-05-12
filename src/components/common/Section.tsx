import React from 'react'
import { styled, Paper, Grid } from '@mui/material'
import { IconButton } from '@components/common'

// types
import { PaperProps } from '@mui/material'

// icons
import { ReactComponent as IconSearch } from '@static/images/icons/search.svg'

const SectionStyle = styled(Paper)(({ theme }) => ({
	position: 'relative',
	height: 'auto',
	padding: '30px',
	margin: 0,
	border: 'none',
	borderRadius: `${theme.shape.borderRadius}px`,
	boxShadow: `${theme.shadows[2]}`,
	'&.section': {
		'&-default': {
			padding: '30px',
		},
		'&-data': {
			padding: '30px 30px 25px 30px',
		},
	},
}))

interface SectionProps extends PaperProps {
	className?: string
	variant?: 'default' | 'search' | 'data'
}

export const Section: React.FC<SectionProps> = ({ className = '', variant, children, ...rest }) => {
	return (
		<SectionStyle className={'section-' + variant} {...rest}>
			{children}
			{variant === 'search' && (
				<Grid container justifyContent="flex-end" pt={18}>
					<Grid item>
						<IconButton color="primary">
							<IconSearch />
						</IconButton>
					</Grid>
				</Grid>
			)}
		</SectionStyle>
	)
}
