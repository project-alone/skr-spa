import React from 'react'
import { Box, Typography, Breadcrumbs } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactComponent as IconChevron } from '../../assets/images/icons/chevron-forward.svg'

const LyPageTitle = styled(Box)({
	display: 'flex',
	width: '100%',
	justifyContent: 'space-between',
	alignItems: 'flex-end',
	paddingBottom: '25px',
})

interface PageTitleProps {
	title: string
	breadCrumbs: string[]
}

const typographyColorProps = [undefined, 'text.grey.600', 'text.primary']

export const PageTitle: React.FC<PageTitleProps> = ({ title, breadCrumbs }) => {
	return (
		<LyPageTitle>
			<Typography variant="h3">{title}</Typography>
			<Breadcrumbs separator={<IconChevron />} aria-label="breadcrumb">
				{breadCrumbs.map((item, index) => (
					<Typography color={typographyColorProps[index]}>{item}</Typography>
				))}
				{/* <Typography>{breadCrumbs.depth1}</Typography>
				<Typography color="text.grey.600">{breadCrumbs.depth2}</Typography>
				<Typography color="text.primary">{breadCrumbs.depth3}</Typography> */}
			</Breadcrumbs>
		</LyPageTitle>
	)
}
