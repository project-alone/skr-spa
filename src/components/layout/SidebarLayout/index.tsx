import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, styled } from '@mui/material'

import { Sidebar } from '@components/layout/SidebarLayout/Sidebar'
import { Header } from '@components/layout/SidebarLayout/Header'

// interface SidebarLayoutProps {
// }

const MainWrapper = styled(Box)(
	({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            padding-left: ${theme.sidebar.width};
        }
`,
)

const MainContent = styled(Box)(
	({ theme }) => `
        margin-top: ${theme.header.height};
        flex: 1 1 auto;
        overflow: auto;
`,
)

export const SidebarLayout: React.FC = () => {
	return (
		<>
			<Sidebar />
			<MainWrapper>
				<Header />
				<MainContent>
					<Outlet />
				</MainContent>
			</MainWrapper>
		</>
	)
}
