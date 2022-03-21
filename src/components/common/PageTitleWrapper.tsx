import React from 'react'
import { Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const PageTitle = styled(Box)(
	({ theme }) => `
        padding: ${theme.spacing(4, 0)};
`,
)

// interface PageTitleWrapperProps {
// 	/** nothing */
// }

export const PageTitleWrapper: React.FC = ({ children }) => {
	return (
		<>
			<PageTitle>
				<Container maxWidth="lg">{children}</Container>
			</PageTitle>
		</>
	)
}
