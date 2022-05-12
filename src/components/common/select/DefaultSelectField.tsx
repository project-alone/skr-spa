import React from 'react'
import { InputLabel, ListItemIcon, ListItemText, Select } from '@mui/material'
import { Placeholder, SelectCombo, DefaultFormControl } from '@styles/common'

// icon
import { ReactComponent as IconArrow } from '@static/images/icons/chevron-down.svg'
import { ReactComponent as IconOption } from '@static/images/icons/options.svg'

// type
import type { SelectInputProps } from '@mui/material/Select/SelectInput'

interface SelectFieldProps {
	label: string
	style: object
	disabled?: boolean
	option: string[]
	isIcon?: boolean
}

export const DefaultSelectField: React.FC<SelectFieldProps> = ({
	isIcon,
	label,
	style,
	disabled = false,
	option,
}) => {
	const [selectItem, setSelectItem] = React.useState('')
	const handleChange: SelectInputProps<string>['onChange'] = React.useCallback((event) => {
		setSelectItem(event.target.value)
	}, [])

	return (
		<DefaultFormControl variant="standard" sx={{ width: '100%' }}>
			<InputLabel id="sample">{label}</InputLabel>
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
		</DefaultFormControl>
	)
}
