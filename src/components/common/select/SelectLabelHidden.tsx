import React from 'react'
import { FormControl, ListItemIcon, ListItemText, Select } from '@mui/material'
import { Placeholder, SelectCombo } from '@styles/common'

// icon
import { ReactComponent as IconArrow } from '@static/images/icons/chevron-down.svg'
import { ReactComponent as IconOption } from '@static/images/icons/options.svg'

import type { SelectInputProps } from '@mui/material/Select/SelectInput'

interface SelectFieldProps {
	label: string
	style: object
	disabled?: boolean
	option: string[]
	isIcon?: boolean
}

export const SelectLabelHidden: React.FC<SelectFieldProps> = ({
	isIcon,
	style,
	disabled = false,
	option,
}) => {
	const [selectItem, setSelectItem] = React.useState('')
	const handleChange: SelectInputProps<string>['onChange'] = (event) => {
		setSelectItem(event.target.value)
	}
	return (
		<FormControl variant="standard" sx={{ width: '100%' }}>
			<Select
				labelId="sample"
				value={selectItem}
				IconComponent={() => <IconArrow />}
				displayEmpty
				onChange={handleChange}
				renderValue={selectItem !== '' ? undefined : () => <Placeholder>선택</Placeholder>}
				MenuProps={style}
				disabled={disabled}>
				{option.map((item, index) => (
					<SelectCombo key={index} value={item}>
						{isIcon && (
							<ListItemIcon>
								<IconOption />
							</ListItemIcon>
						)}
						<ListItemText>{item}</ListItemText>
					</SelectCombo>
				))}
			</Select>
		</FormControl>
	)
}
