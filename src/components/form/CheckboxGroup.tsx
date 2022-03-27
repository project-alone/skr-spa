import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { Controller } from 'react-hook-form'

export type FormItemData = { label: string; value: string }

interface CheckboxGroupProps {
	options: FormItemData[]
	name: string
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, ...rest }) => {
	return (
		<div></div>
		// <FormGroup>
		// 	{options.map((item) => (
		// 		<Controller
		// 			key={`form-group-checkbox-${item.label}`}
		// 			control={control}
		// 			type="checkbox"
		// 			name={`form-group-checkbox-${item.label}`}
		//             render=({fiel})
		//         />
		// 			<FormControlLabel control={<Checkbox />} label={item.label} />
		// 	))}
		// </FormGroup>
	)
}
