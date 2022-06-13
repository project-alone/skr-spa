import React from 'react'
import { ListItemIcon, ListItemText } from '@components/common/ui'
import { SelectCombo } from '@styles/common'
import { IconOption } from '@components/common/ui/Icons'

interface OptionsProps {
	icon?: boolean
	list: string[]
}

export const Options: React.VFC<OptionsProps> = ({ list, icon }) => {
	return (
		<React.Fragment>
			{list.map((item, index) => (
				<SelectCombo key={index} value={item}>
					{icon && (
						<ListItemIcon>
							<IconOption />
						</ListItemIcon>
					)}
					<ListItemText>{item}</ListItemText>
				</SelectCombo>
			))}
		</React.Fragment>
	)
}
