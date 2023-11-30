import React from 'react'
import { Button as UiButton, Typography } from '@components/common/ui'
import { Menu, Wrap, Button, List, Item, Option } from '@components/common/legacy/Mdi.styled'
import * as Icons from '@components/common/ui/Icons'

interface MdiProps {
	tabData: {
		label: string
		active: boolean
	}[]
}

export const Mdi: React.FC<MdiProps> = ({ tabData }) => {
	return (
		<Wrap>
			<List>
				<Item active={false}>
					<Button>
						<Icons.IconHome />
					</Button>
				</Item>
				{tabData.map((tab, idx) => {
					return (
						<Item active={tab.active} key={idx}>
							<Menu>
								<Button>
									<Icons.IconLockClosed />
								</Button>
								<Typography variant="bt">{tab.label}</Typography>
							</Menu>
							<Button>
								<Icons.IconClose />
							</Button>
						</Item>
					)
				})}
			</List>
			<Option>
				<UiButton color="function" variant="contained" startIcon={<Icons.IconTime />}>
					최근 접속
				</UiButton>
				<Item active={false}>
					<Button>
						<Icons.IconOption />
					</Button>
				</Item>
			</Option>
		</Wrap>
	)
}
