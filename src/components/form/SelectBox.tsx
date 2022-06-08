import React from 'react'
import { styled, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'

// types
import type { SelectProps, SelectChangeEvent } from '@mui/material'

interface SelectBoxProps extends SelectProps {
	options: FormItem[]
	label: string
	name?: string
	value: string
	error?: boolean
	errorMessage?: string
	onChange?: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void
}

export const SelectBox = React.forwardRef<JSX.Element, SelectBoxProps>(
	({ options, name, label, error = false, errorMessage, ...rest }, ref) => {
		return (
			<FormControl error={!!error} fullWidth={rest.fullWidth}>
				<InputLabel id={rest.labelId}>{label}</InputLabel>
				<Select {...rest} label={label} ref={ref}>
					{options.map((item, index) => (
						<MenuItem key={`${rest.id}-key-${index}`} value={item.value}>
							{item.label}
						</MenuItem>
					))}
				</Select>
				<FormHelperText>{errorMessage}</FormHelperText>
			</FormControl>
		)
	},
)
SelectBox.displayName = 'SelectBox'
