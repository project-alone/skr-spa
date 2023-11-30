import React from 'react'
import { Checkbox, FormControlLabel, type FormControlLabelProps } from '@mui/material'

interface CheckboxGroupProps {
	options: FormItem[]
	name: string
	value: string[]
	onChange: (...args: unknown[]) => void
}

export const CheckboxGroup = React.forwardRef<JSX.Element, CheckboxGroupProps>(
	({ options, onChange, value, name, ...rest }, ref) => {
		const handleCheck: FormControlLabelProps['onChange'] = (event, check) => {
			const checkedValue = (event.target as HTMLInputElement).value
			const newList = value.some((item) => item === checkedValue)
				? value.filter((item) => item !== checkedValue)
				: [...(value ?? []), checkedValue]
			onChange(newList)
		}

		return (
			<>
				{options.map((item, index) => (
					<FormControlLabel
						ref={ref}
						key={`${name}${index}`}
						name={`${name}[${index}]`}
						label={item.label}
						value={item.value}
						onChange={handleCheck}
						control={<Checkbox />}
					/>
				))}
			</>
		)
	},
)
CheckboxGroup.displayName = 'CheckboxGroup'
