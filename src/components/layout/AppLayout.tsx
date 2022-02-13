import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyle from '@styles/global'
import { Sidebar, AppHeader, AppFooter } from '@components/layout'
import { Layout } from 'antd'

const { Sider, Content } = Layout

const OutletContents: React.FC = ({ children }) => {
	return (
		<Layout>
			<Content style={{ padding: '50px' }}>{children}</Content>
			<AppFooter />
		</Layout>
	)
}

export const AppLayout: React.FC = (props) => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<GlobalStyle />
			<AppHeader />
			<Layout>
				<Sider width="auto" style={{ backgroundColor: '#fff' }}>
					<Sidebar />
				</Sider>
				<OutletContents>
					<Outlet />
				</OutletContents>
			</Layout>
		</Layout>
	)
}
