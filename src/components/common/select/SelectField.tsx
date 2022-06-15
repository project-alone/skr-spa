import React, { useMemo } from 'react'
import { Select, FormControl, InputLabel } from '@components/common/ui'
import { Placeholder } from '@styles/common'
import { Options } from '@components/common/select/Options'
import { IconChevronDown } from '@components/common/ui/Icons'

// types
import type { MenuProps, SelectProps } from '@mui/material'

/**
 * @note DefaultSelectField: basic props 추가
 * SelectLabelHidden: label props를 사용하지 않으면 hidden 처리
 */

interface SelectFieldProps {
	/** form id */
	id: string
	/** form label */
	label: string
	/** label 숨김 처리 여부 */
	hiddenLabel?: boolean
	/** <Menu/> 컴포넌트에 들어가 props */
	style: Partial<MenuProps>
	/** 활성화 여부 */
	disabled: boolean
	/** option value 리스트 */
	option: string[]
	/** option 에서의 icon 사용 여부 */
	isIcon?: boolean
	/** 필수 여부 */
	required?: boolean
	/** DefaultSelectField 로 사용할 지 여부 */
	basic?: boolean
}

export const SelectField: React.FC<SelectFieldProps> = ({
	id,
	label,
	style,
	disabled,
	option,
	isIcon,
	required,
	basic,
}) => {
	const [selectItem, setSelectItem] = React.useState('')

	const handleChange: SelectProps['onChange'] = React.useCallback((event) => {
		setSelectItem(event.target.value as string)
	}, [])

	const renderValue: SelectProps['renderValue'] = React.useCallback((value: unknown) => {
		return (value === '' ? <Placeholder>선택</Placeholder> : value) as React.ReactNode
	}, [])

	return (
		<FormControl basic={basic} variant="standard" sx={{ width: '100%' }}>
			{label && (
				<InputLabel id={id} required={required}>
					{label}
				</InputLabel>
			)}
			<Select
				labelId={id}
				value={selectItem}
				IconComponent={() => <IconChevronDown />}
				displayEmpty
				onChange={handleChange}
				renderValue={renderValue}
				MenuProps={style}
				disabled={disabled}>
				<Options list={option} icon={isIcon} />
			</Select>
		</FormControl>
	)
}
