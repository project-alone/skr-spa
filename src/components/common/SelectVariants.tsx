import React from 'react'
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

// types
import type { SelectProps } from '@mui/material'

export const SelectVariants: React.FC = () => {
	const [age, setAge] = React.useState('')

	const handleChange: SelectProps['onChange'] = React.useCallback((event) => {
		setAge(event.target.value)
	}, [])

	return (
		<div>
			<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={age}
					onChange={handleChange}
					label="Age">
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
			<FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
				<Select
					labelId="demo-simple-select-filled-label"
					id="demo-simple-select-filled"
					value={age}
					onChange={handleChange}>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}
