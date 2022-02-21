import React from 'react'
import { MailOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { capitalize } from 'lodash-es'
import { Anchor } from '@components/common'
import { routeSidebar } from '@router/routes'

import type { MenuClickEventHandler } from 'rc-menu/lib/interface'

const { SubMenu, Item } = Menu

export const Sidebar: React.FC = (props) => {
	const onClickMenu: MenuClickEventHandler = (info) => {
		console.log('메뉴 클릭 정보', info)
	}

	return (
		<Menu
			onClick={onClickMenu}
			style={{ width: 256 }}
			// defaultSelectedKeys={['1']}
			defaultOpenKeys={['sub1']}
			mode="inline">
			{routeSidebar.map(({ path, children }) => {
				return (
					<SubMenu key={path} icon={<MailOutlined />} title={capitalize(path)}>
						{children?.map((child) => (
							<Item key={child.path}>
								<Anchor to={`${path}/${child.path}`}>
									{capitalize(child.path)}
								</Anchor>
							</Item>
						))}
					</SubMenu>
				)
			})}
		</Menu>
	)
}
