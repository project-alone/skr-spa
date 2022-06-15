import React from 'react'
import { Checkbox, FormGroup, FormControlLabel } from '@components/common/ui'

interface CheckboxGroupProps {
	list: {
		label: string
		disabled?: boolean
	}[]
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ list, ...rest }) => {
	const [checkItem, setCheckItem] = React.useState(true)
	// @ts-ignore
	const handleChange = (event: any) => {
		// setCheckItem(event.target.checked)
		console.log(event)
	}

	return (
		<FormGroup onChange={handleChange}>
			{list.map(({ label, disabled = false }, idx) => {
				return (
					<FormControlLabel
						control={<Checkbox />}
						label={`${label}${idx}`}
						disabled={disabled}
						key={idx}
						onChange={handleChange}
					/>
				)
			})}
		</FormGroup>
	)
}

export default CheckboxGroup
