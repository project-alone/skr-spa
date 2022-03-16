import React from 'react'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Logo } from '@components/common'
import { Layout, Row, Col, Avatar, Button } from 'antd'
import { useAppDispatch } from '@hooks/index'
import { fakeLogin } from '@store/slices/auth'

const { Header } = Layout

// interface Props {}

export const AppHeader: React.FC = () => {
	const dispatch = useAppDispatch()

	const logout = React.useCallback(() => {
		dispatch(fakeLogin(false))
	}, [dispatch])

	return (
		<Header>
			<Row justify="space-between">
				<Col span={4}>
					<Logo />
				</Col>
				<Col span={4}>
					<Avatar size="large" icon={<UserOutlined />} />
					<span style={{ color: '#fff', paddingLeft: '10px' }}>관리자</span>
					<Button type="link" danger icon={<LogoutOutlined />} onClick={logout}>
						logout
					</Button>
				</Col>
			</Row>
		</Header>
	)
}
