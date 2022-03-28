import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'

interface CheckboxGroupProps {
	options: FormItem[]
	name?: string
	value: string[]
	onChange: (...args: unknown[]) => void
}

export const CheckboxGroup = React.forwardRef<JSX.Element, CheckboxGroupProps>(
	({ options, onChange, value, ...rest }, ref) => {
		const handleCheck = (checkedValue: string) => {
			const newList = value.includes(checkedValue)
				? value.filter((item: string) => item !== checkedValue)
				: [...(value ?? []), checkedValue]
			onChange(newList)
		}

		return (
			<>
				{options.map((item, index) => (
					<FormControlLabel
						ref={ref}
						key={`fruits${index}`}
						label={item.label}
						onChange={() => handleCheck(item.value)}
						control={<Checkbox />}
					/>
				))}
			</>
		)
	},
)
CheckboxGroup.displayName = 'CheckboxGroup'
