import React from 'react'
import { Outlet } from 'react-router-dom'
import { Backdrop, Box, CircularProgress, styled } from '@mui/material'

import { Sidebar } from '@components/layout/SidebarLayout/Sidebar'
import { Header } from '@components/layout/SidebarLayout/Header'
import { Footer } from '@root/components/common'
import { shallowEqual, useAppSelector } from '@hooks/index'

// interface SidebarLayoutProps {
// }

const MainWrapper = styled(Box)(
	({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        
        @media (min-width: 1280px) {
            padding-left: 280px;
        }
`,
)

const MainContent = styled(Box)(
	({ theme }) => `
        margin-top: 88px;
        flex: 1 1 auto;
        overflow: auto;
`,
)

export const SidebarLayout: React.FC = () => {
	const { loading } = useAppSelector(
		(state) => ({
			loading: state.ui.loading,
		}),
		shallowEqual,
	)

	return (
		<>
			<Sidebar />
			<MainWrapper>
				<Header />
				<MainContent>
					<Outlet />
				</MainContent>
			</MainWrapper>
			<Footer />
			<Backdrop open={loading} sx={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</>
	)
}
