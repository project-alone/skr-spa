import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { Box, Drawer, Hidden, styled } from '@mui/material'
import { SidebarContext } from '@context/Sidebar'
import { Logo } from '@components/common'
import SidebarMenu from '@components/layout/SidebarLayout/Sidebar/SidebarMenu'

const SidebarWrapper = styled(Box)(
	({ theme }) => `
        width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        box-shadow: ${theme.sidebar.boxShadow};
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            position: fixed;
            z-index: 10;
            border-top-right-radius: ${theme.general.borderRadius};
            border-bottom-right-radius: ${theme.general.borderRadius};
        }
`,
)

const TopSection = styled(Box)(
	({ theme }) => `
        display: flex;
        height: 88px;
        align-items: center;
        margin: 0 ${theme.spacing(2)} ${theme.spacing(2)};
        border-bottom: ${theme.sidebar.dividerBg} solid 1px;
`,
)

export const Sidebar: React.FC = () => {
	const { sidebarToggle, toggleSidebar } = React.useContext(SidebarContext)
	const closeSidebar = () => toggleSidebar()

	return (
		<>
			<Hidden lgDown>
				<SidebarWrapper>
					<Scrollbars autoHide>
						<TopSection>
							<Logo />
						</TopSection>
						<SidebarMenu />
					</Scrollbars>
				</SidebarWrapper>
			</Hidden>
			<Hidden lgUp>
				<Drawer
					anchor="left"
					open={sidebarToggle}
					onClose={closeSidebar}
					variant="temporary"
					elevation={9}>
					<SidebarWrapper>
						<Scrollbars autoHide>
							<TopSection>
								<Logo />
							</TopSection>
							<SidebarMenu />
						</Scrollbars>
					</SidebarWrapper>
				</Drawer>
			</Hidden>
		</>
	)
}
