import React from 'react'
import { Button, Typography } from '@mui/material'
import * as MdiStyled from '@components/common/mdi/style'

// icons
import { ReactComponent as IconHome } from '@static/images/icons/home.svg'
import { ReactComponent as IconClose } from '@static/images/icons/close.svg'
import { ReactComponent as IconLockClosed } from '@static/images/icons/lock-closed.svg'
import { ReactComponent as IconOption } from '@static/images/icons/options.svg'
import { ReactComponent as IconTime } from '@static/images/icons/time.svg'

interface MdiProps {
	tabData: {
		active?: boolean
		label: string
	}[]
}

export const Mdi: React.FC<MdiProps> = ({ tabData }) => {
	return (
		<MdiStyled.Wrap>
			<MdiStyled.List>
				<MdiStyled.Item>
					<MdiStyled.Button>
						<IconHome />
					</MdiStyled.Button>
				</MdiStyled.Item>
				{tabData.map((tab, idx) => (
					<MdiStyled.Item key={idx} active={tab.active ? true : false}>
						<MdiStyled.Menu>
							<MdiStyled.Button>
								<IconLockClosed />
							</MdiStyled.Button>
							<Typography variant="bt">{tab.label}</Typography>
						</MdiStyled.Menu>
						<MdiStyled.Button>
							<IconClose />
						</MdiStyled.Button>
					</MdiStyled.Item>
				))}
			</MdiStyled.List>
			<MdiStyled.Option>
				<Button color="function" variant="contained" startIcon={<IconTime />}>
					최근 접속
				</Button>
				<MdiStyled.Item>
					<MdiStyled.Button>
						<IconOption />
					</MdiStyled.Button>
				</MdiStyled.Item>
			</MdiStyled.Option>
		</MdiStyled.Wrap>
	)
}
