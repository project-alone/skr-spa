import React from 'react'
import { FormControl, InputLabel, ListItemIcon, ListItemText, Select } from '@mui/material'
import { SelectCombo, Placeholder } from '@styles/common'

// icon
import { ReactComponent as IconArrow } from '@static/images/icons/chevron-down.svg'
import { ReactComponent as IconOption } from '@static/images/icons/options.svg'

// types
import type { SelectInputProps } from '@mui/material/Select/SelectInput'
// import type { MenuItemProps } from '@mui/material'

interface SelectFieldProps {
	/** form label */
	label: string
	/** @mui style object */
	style: object
	/** 활성 / 비활성 */
	disabled?: boolean
	/** option list */
	option: string[]
	/** 아이콘 사용 여부 */
	isIcon?: boolean
}

export const SelectField: React.FC<SelectFieldProps> = ({
	isIcon,
	label,
	option,
	style,
	disabled = false,
}) => {
	const [selectItem, setSelectItem] = React.useState<string>('')
	const handleChange: SelectInputProps<string>['onChange'] = React.useCallback((event) => {
		setSelectItem(event.target.value)
	}, [])

	return (
		<FormControl variant="standard" sx={{ width: '100%' }}>
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
		</FormControl>
	)
}
