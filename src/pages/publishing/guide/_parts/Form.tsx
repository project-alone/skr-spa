import React from 'react'
import {
	Grid,
	Box,
	Typography,
	Stack,
	TextField,
	InputAdornment,
	Checkbox,
	FormGroup,
	FormControlLabel,
	Radio,
	RadioGroup,
} from '@mui/material'
import { DefaultTextField } from '@styles/common'
import { CodeArea, FlexBox } from '@styles/publishingGuide'
import { SelectField, DefaultSelectField } from '@components/common'

// icons
import { ReactComponent as Accessibility } from '@static/images/icons/accessibility.svg'

// types
import type { FormControlLabelProps, RadioProps, RadioGroupProps } from '@mui/material'

export const InputLabelPositionTop: React.FC = () => {
	return (
		<>
			<Grid container spacing={40}>
				<Grid item xs={6}>
					<Stack direction="row" spacing={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Default
							</Typography>
							<TextField label="Label Text" placeholder="Placeholder" />
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Focused
							</Typography>
							<TextField
								label="Label Text"
								placeholder="Placeholder"
								value="Input"
								focused
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Required
							</Typography>
							<TextField
								label="Label Text"
								placeholder="Placeholder"
								defaultValue="Input"
								required
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Read Only
							</Typography>
							<TextField
								label="Label Text"
								placeholder="Placeholder"
								value="Input"
								InputProps={{
									readOnly: true,
								}}
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Disabled
							</Typography>
							<TextField label="Label Text" placeholder="Placeholder" disabled />
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Error
							</Typography>
							<TextField
								error
								label="Label Text"
								defaultValue="Input"
								helperText="Alret Message."
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Success
							</Typography>
							<TextField
								color="success"
								label="Label Text"
								defaultValue="Input"
								helperText="Alret Message."
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Error Disabled
							</Typography>
							<TextField
								error
								label="Label Text"
								defaultValue="Input"
								helperText="Alret Message."
								disabled
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Success Disabled
							</Typography>
							<TextField
								color="success"
								label="Label Text"
								defaultValue="Input"
								helperText="Alret Message."
								disabled
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Unit
							</Typography>
							<TextField
								fullWidth
								label="Label Text"
								placeholder="Placeholder"
								defaultValue="Input"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">Unit</InputAdornment>
									),
								}}
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Icon
							</Typography>
							<TextField
								label="Label Text"
								placeholder="Placeholder"
								defaultValue="Input"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Accessibility />
										</InputAdornment>
									),
								}}
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Unit Disabled
							</Typography>
							<TextField
								label="Label Text"
								placeholder="Placeholder"
								defaultValue="Input"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">Unit</InputAdornment>
									),
								}}
								disabled
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Icon Disabled
							</Typography>
							<TextField
								label="Label Text"
								placeholder="Placeholder"
								defaultValue="Input"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Accessibility />
										</InputAdornment>
									),
								}}
								disabled
							/>
						</FlexBox>
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<CodeArea>
						// Default
						<TextField label="Label Text" placeholder="Placeholder" value="Input" />
						// Focused
						<TextField
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
							focused
						/>
						// Required
						<TextField
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
							required
						/>
						// Read Only // porperty 사용 유의
						<TextField
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
							InputProps={{ readOnly: true }}
						/>
						// Disabled
						<TextField
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
							disabled
						/>
						// Error
						<TextField
							error
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
						/>
						// Success
						<TextField
							color="success"
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
						/>
						// Unit
						<TextField
							error
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
						/>
						// Icon
						<TextField
							color="success"
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
						/>
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
export const InputLabelPositionLeft = () => {
	return (
		<>
			<Grid container spacing={40}>
				<Grid item xs={6}>
					<Stack direction="row" spacing={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Default
							</Typography>
							<DefaultTextField label="Label Text" placeholder="Placeholder" />
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={30}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Focused
							</Typography>
							<DefaultTextField
								label="Label Text"
								placeholder="Placeholder"
								value="Input"
								focused
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Required
							</Typography>
							<DefaultTextField
								label="Label Text"
								placeholder="Placeholder"
								defaultValue="Input"
								required
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={30}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Read Only
							</Typography>
							<DefaultTextField
								label="Label Text"
								placeholder="Placeholder"
								value="Input"
								InputProps={{
									readOnly: true,
								}}
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Disabled
							</Typography>
							<DefaultTextField
								label="Label Text"
								placeholder="Placeholder"
								disabled
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={30}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Error
							</Typography>
							<DefaultTextField
								error
								label="Label Text"
								defaultValue="Input"
								helperText="Alret Message."
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Success
							</Typography>
							<DefaultTextField
								color="success"
								label="Label Text"
								defaultValue="Input"
								helperText="Alret Message."
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={30}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Error Disabled
							</Typography>
							<DefaultTextField
								error
								label="Label Text"
								defaultValue="Input"
								helperText="Alret Message."
								disabled
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Success Disabled
							</Typography>
							<DefaultTextField
								color="success"
								label="Label Text"
								defaultValue="Input"
								helperText="Alret Message."
								disabled
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={30}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Unit
							</Typography>
							<DefaultTextField
								fullWidth
								label="Label Text"
								placeholder="Placeholder"
								defaultValue="Input"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">Unit</InputAdornment>
									),
								}}
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Icon
							</Typography>
							<DefaultTextField
								label="Label Text"
								placeholder="Placeholder"
								defaultValue="Input"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Accessibility />
										</InputAdornment>
									),
								}}
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={30}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Unit Disabled
							</Typography>
							<DefaultTextField
								label="Label Text"
								placeholder="Placeholder"
								defaultValue="Input"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">Unit</InputAdornment>
									),
								}}
								disabled
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Icon Disabled
							</Typography>
							<DefaultTextField
								label="Label Text"
								placeholder="Placeholder"
								defaultValue="Input"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Accessibility />
										</InputAdornment>
									),
								}}
								disabled
							/>
						</FlexBox>
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<CodeArea>
						// Default
						<DefaultTextField
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
						/>
						// Focused
						<DefaultTextField
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
							focused
						/>
						// Required
						<DefaultTextField
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
							required
						/>
						// Read Only // porperty 사용 유의
						<DefaultTextField
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
							InputProps={{ readOnly: true }}
						/>
						// Disabled
						<DefaultTextField
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
							disabled
						/>
						// Error
						<DefaultTextField
							error
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
						/>
						// Success
						<DefaultTextField
							color="success"
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
						/>
						// Unit
						<DefaultTextField
							error
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
						/>
						// Icon
						<DefaultTextField
							color="success"
							label="Label Text"
							placeholder="Placeholder"
							value="Input"
						/>
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
export const InputHiddenLabel = () => {
	return (
		<>
			<Grid container spacing={40}>
				<Grid item xs={6}>
					<Stack direction="row" spacing={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Default
							</Typography>
							<TextField hiddenLabel placeholder="Placeholder" />
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Focused
							</Typography>
							<TextField
								hiddenLabel
								placeholder="Placeholder"
								value="Input"
								focused
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Required
							</Typography>
							<TextField
								hiddenLabel
								placeholder="Placeholder"
								defaultValue="Input"
								required
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Read Only
							</Typography>
							<TextField
								hiddenLabel
								placeholder="Placeholder"
								value="Input"
								InputProps={{
									readOnly: true,
								}}
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Disabled
							</Typography>
							<TextField hiddenLabel placeholder="Placeholder" disabled />
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Error
							</Typography>
							<TextField
								error
								hiddenLabel
								defaultValue="Input"
								helperText="Alret Message."
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Success
							</Typography>
							<TextField
								color="success"
								hiddenLabel
								defaultValue="Input"
								helperText="Alret Message."
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Error Disabled
							</Typography>
							<TextField
								error
								hiddenLabel
								defaultValue="Input"
								helperText="Alret Message."
								disabled
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Success Disabled
							</Typography>
							<TextField
								color="success"
								hiddenLabel
								defaultValue="Input"
								helperText="Alret Message."
								disabled
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Unit
							</Typography>
							<TextField
								fullWidth
								hiddenLabel
								placeholder="Placeholder"
								defaultValue="Input"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">Unit</InputAdornment>
									),
								}}
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Icon
							</Typography>
							<TextField
								hiddenLabel
								placeholder="Placeholder"
								defaultValue="Input"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Accessibility />
										</InputAdornment>
									),
								}}
							/>
						</FlexBox>
					</Stack>
					<Stack direction="row" spacing={20} mt={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Unit Disabled
							</Typography>
							<TextField
								hiddenLabel
								placeholder="Placeholder"
								defaultValue="Input"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">Unit</InputAdornment>
									),
								}}
								disabled
							/>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Icon Disabled
							</Typography>
							<TextField
								hiddenLabel
								placeholder="Placeholder"
								defaultValue="Input"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Accessibility />
										</InputAdornment>
									),
								}}
								disabled
							/>
						</FlexBox>
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<CodeArea>
						// add hiddenLabel property // *<br />
						// *<br />
						// example
						<TextField hiddenLabel placeholder="Placeholder" value="Input" />
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}

export const SelectLabelPositionTop = () => {
	const defaultSelect = {
		label: 'Label Text',
		style: {
			PaperProps: {
				style: {
					width: 444,
				},
			},
		},
		option: ['현대자동차', '기아자동차', '쉐보레', '렉서스', '도요타', '포르쉐'],
		disabled: false,
		isIcon: false,
	}
	const iconSelect = {
		label: 'Label Text',
		style: {
			PaperProps: {
				style: {
					width: 444,
				},
			},
		},
		option: ['현대자동차', '기아자동차', '쉐보레', '렉서스', '도요타', '포르쉐'],
		disabled: false,
		isIcon: true,
	}
	const disabledDefaultSelect = {
		label: 'Label Text',
		style: {
			PaperProps: {
				style: {
					width: 444,
				},
			},
		},
		option: ['현대자동차', '기아자동차', '쉐보레', '렉서스', '도요타', '포르쉐'],
		disabled: true,
		isIcon: false,
	}
	const disabledIconSelect = {
		label: 'Label Text',
		style: {
			PaperProps: {
				style: {
					width: 444,
				},
			},
		},
		option: ['현대자동차', '기아자동차', '쉐보레', '렉서스', '도요타', '포르쉐'],
		disabled: true,
		isIcon: true,
	}
	return (
		<>
			<Grid container spacing={40}>
				<Grid item xs={6}>
					<Stack spacing={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Default
							</Typography>
							<Box sx={{ width: '444px' }}>
								<SelectField {...defaultSelect} />
							</Box>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Icon
							</Typography>
							<Box sx={{ width: '444px' }}>
								<SelectField {...iconSelect} />
							</Box>
						</FlexBox>

						<FlexBox>
							<Typography variant="st2" pb={12}>
								Disabled
							</Typography>
							<Box sx={{ width: '444px' }}>
								<SelectField {...disabledDefaultSelect} />
							</Box>
							<Box sx={{ width: '444px', marginTop: '20px' }}>
								<SelectField {...disabledIconSelect} />
							</Box>
						</FlexBox>
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<CodeArea>
						// Default
						<SelectField
							label="Label Text" // select combo box 너비 지정
							style={{ PaperProps: { style: { width: 444 } } }}
							option={[
								'현대자동차',
								'기아자동차',
								'쉐보레',
								'렉서스',
								'도요타',
								'포르쉐',
							]}
							disabled={false}
							isIcon={false}
						/>
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
export const SelectLabelPositionLeft = () => {
	const defaultSelect = {
		label: 'Label Text',
		style: {
			PaperProps: {
				style: {
					width: 324,
				},
			},
		},
		option: ['현대자동차', '기아자동차', '쉐보레', '렉서스', '도요타', '포르쉐'],
		disabled: false,
		isIcon: false,
	}
	const iconSelect = {
		label: 'Label Text',
		style: {
			PaperProps: {
				style: {
					width: 324,
				},
			},
		},
		option: ['현대자동차', '기아자동차', '쉐보레', '렉서스', '도요타', '포르쉐'],
		disabled: false,
		isIcon: true,
	}
	const disabledDefaultSelect = {
		label: 'Label Text',
		style: {
			PaperProps: {
				style: {
					width: 324,
				},
			},
		},
		option: ['현대자동차', '기아자동차', '쉐보레', '렉서스', '도요타', '포르쉐'],
		disabled: true,
		isIcon: false,
	}
	const disabledIconSelect = {
		label: 'Label Text',
		style: {
			PaperProps: {
				style: {
					width: 324,
				},
			},
		},
		option: ['현대자동차', '기아자동차', '쉐보레', '렉서스', '도요타', '포르쉐'],
		disabled: true,
		isIcon: true,
	}
	return (
		<>
			<Grid container spacing={40}>
				<Grid item xs={6}>
					<Stack spacing={20}>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Default
							</Typography>
							<Box sx={{ width: '444px' }}>
								<DefaultSelectField {...defaultSelect} />
							</Box>
						</FlexBox>
						<FlexBox>
							<Typography variant="st2" pb={12}>
								Icon
							</Typography>
							<Box sx={{ width: '444px' }}>
								<DefaultSelectField {...iconSelect} />
							</Box>
						</FlexBox>

						<FlexBox>
							<Typography variant="st2" pb={12}>
								Disabled
							</Typography>
							<Box sx={{ width: '444px' }}>
								<DefaultSelectField {...disabledDefaultSelect} />
							</Box>
							<Box sx={{ width: '444px', marginTop: '20px' }}>
								<DefaultSelectField {...disabledIconSelect} />
							</Box>
						</FlexBox>
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<CodeArea>
						// Default
						<DefaultSelectField
							label="Label Text"
							// select combo box 너비 지정
							style={{ PaperProps: { style: { width: 444 } } }}
							option={[
								'현대자동차',
								'기아자동차',
								'쉐보레',
								'렉서스',
								'도요타',
								'포르쉐',
							]}
							disabled={false}
							isIcon={false}
						/>
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export const CheckBox = () => {
	return (
		<>
			<Grid container spacing={40}>
				<Grid item xs={6}>
					<Stack spacing={20}>
						<Box>
							<Typography variant="st2" pb={12}>
								Default
							</Typography>
							<Checkbox {...label} />
						</Box>
						<Box>
							<Typography variant="st2" pb={12}>
								Checked
							</Typography>
							<Checkbox {...label} checked />
						</Box>
						<Box>
							<Typography variant="st2" pb={12}>
								Disabled
							</Typography>

							<Checkbox {...label} disabled />
						</Box>
						<Box>
							<Typography variant="st2" pb={12}>
								Disabled Checked
							</Typography>

							<Checkbox {...label} disabled checked />
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<CodeArea>
						// Default
						<Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }} />
						// Checked
						<Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }} checked />
						// Disabled
						<Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }} disabled />
						// Checked Disabled
						<Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }} disabled checked />
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
export const CheckBoxWithLabel = () => {
	return (
		<>
			<Grid container spacing={40}>
				<Grid item xs={6}>
					<Stack spacing={20}>
						<Box>
							<Typography variant="st2" pb={12}>
								Default
							</Typography>
							<FormControlLabel control={<Checkbox />} label="Label Text" />
						</Box>
						<Box>
							<Typography variant="st2" pb={12}>
								Checked
							</Typography>
							<FormControlLabel control={<Checkbox checked />} label="Label Text" />
						</Box>
						<Box>
							<Typography variant="st2" pb={12}>
								Disabled
							</Typography>

							<FormControlLabel disabled control={<Checkbox />} label="Label Text" />
						</Box>
						<Box>
							<Typography variant="st2" pb={12}>
								Disabled Checked
							</Typography>

							<FormControlLabel
								disabled
								checked
								control={<Checkbox />}
								label="Label Text"
							/>
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<CodeArea>
						// InputProps={{ 'aria-label': 'Checkbox demo' }}
						// Default
						<FormControlLabel control={<Checkbox />} label="Label Text" />
						// Checked
						<FormControlLabel control={<Checkbox checked />} label="Label Text" />
						// Disabled
						<FormControlLabel control={<Checkbox disabled />} label="Label Text" />
						// Checked Disabled
						<FormControlLabel
							control={<Checkbox disabled checked />}
							label="Label Text"
						/>
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
const checkBoxData = [
	{ label: 'Label Text', checkItem: true, disabled: false },
	{ label: 'Label Text', checkItem: true, disabled: false },
	{ label: 'Label Text', checkItem: true, disabled: false },
	{ label: 'Label Text', checkItem: true, disabled: false },
	{ label: 'Label Text', checkItem: true, disabled: false },
]
export const CheckBoxGroup = () => {
	const [checkItem, setCheckItem] = React.useState(true)

	const handleChange: FormControlLabelProps['onChange'] = React.useCallback((event) => {
		setCheckItem((event.target as HTMLInputElement).checked)
	}, [])

	return (
		<>
			<Grid container spacing={40}>
				<Grid item xs={6}>
					<FormGroup>
						{checkBoxData.map((item, idx) => (
							<FormControlLabel
								control={<Checkbox />}
								label={item.label + idx}
								disabled={item.disabled}
								key={idx}
								onChange={handleChange}
							/>
						))}
					</FormGroup>
				</Grid>
				<Grid item xs={6}>
					<CodeArea>
						{`const [checkItem, setCheckItem] = React.useState(false);
    const handleChange = (event) => {
        setCheckItem(event.target.checked);
    }
	const checkBoxData = [
        { label: "Label Text", checkItem: false, disabled: false},
        { label: "Label Text", checkItem: false, disabled: false},
        { label: "Label Text", checkItem: false, disabled: false},
        { label: "Label Text", checkItem: false, disabled: false},
        { label: "Label Text", checkItem: false, disabled: false},
    ]

    // Default					
    <FormGroup>
        { checkBoxData.map((item, idx) => (
            <FormControlLabel
                control={<Checkbox />}
                label={\`\${item.label}\${idx}\`}
                disabled={item.disabled}
                key={idx}
                handleChange={handleChange}
            />
        )}
    </FormGroup>
                        `}
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
export const DefaultRadio = () => {
	const [selectedValue, setSelectedValue] = React.useState('a')

	const handleChange: RadioProps['onChange'] = React.useCallback((event) => {
		setSelectedValue(event.target.value)
	}, [])

	return (
		<>
			<Grid container spacing={40}>
				<Grid item xs={6}>
					<Stack spacing={20}>
						<Box>
							<Typography variant="st2" pb={12}>
								Default
							</Typography>

							<Radio
								checked={selectedValue === 'b'}
								onChange={handleChange}
								value="b"
								name="radio-buttons"
								inputProps={{ 'aria-label': 'B' }}
							/>
						</Box>

						<Box>
							<Typography variant="st2" pb={12}>
								Disabled
							</Typography>
							<Radio
								checked={selectedValue === 'c'}
								onChange={handleChange}
								value="c"
								name="radio-buttons"
								inputProps={{ 'aria-label': 'C' }}
								disabled
							/>
						</Box>
						<Box>
							<Typography variant="st2" pb={12}>
								Disabled Checked
							</Typography>

							<Radio
								checked={selectedValue === 'a'}
								onChange={handleChange}
								value="a"
								name="radio-buttons"
								inputProps={{ 'aria-label': 'A' }}
								disabled
							/>
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<CodeArea>
						{`const [ value, setValue]= React.useState("a");
const handleChange = (event) => {
    setValue(event.target.value);
};

// Default
<Radio
    checked={selectedValue === "c"}
    onChange={handleChange}
    value="c"
    name="radio-buttons"
    inputProps={{ "aria-label": "c" }}
/>

// Selected
<Radio 
    checked={selectedValue === "a"}
    onChange={handleChange}
    value="a"
    name="radio-buttons"
    inputProps={{ "aria-label": "a" }}
/>

// Disabled
<Radio
    checked={selectedValue === "b"}
    onChange={handleChange}
    value="b"
    name="radio-buttons"
    inputProps={{ "aria-label": "b" }}
    disabled
/>

// Selected Disabled
<Radio
    checked={selectedValue === "a"}
    onChange={handleChange}
    value="a"
    name="radio-buttons"
    inputProps={{ "aria-label": "a" }}
    disabled
/>
                        `}
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
const radioData1 = [
	{ label: 'Label Text', disabled: false },
	{ label: 'Label Text', disabled: false },
]
const radioData2 = [
	{ label: 'Label Text', disabled: true },
	{ label: 'Label Text', disabled: true },
]
export const RadioWithLabel = () => {
	const [value, setValue] = React.useState('0')

	const handleChange: RadioGroupProps['onChange'] = React.useCallback((event) => {
		setValue(event.target.value)
	}, [])

	return (
		<>
			<Grid container spacing={40}>
				<Grid item xs={6}>
					<Stack spacing={20}>
						<Box>
							<Typography variant="st2" pb={12}>
								Default , Selected
							</Typography>
							<RadioGroup name="radioGroup" value={value} onChange={handleChange}>
								{radioData1.map((item, idx) => (
									<FormControlLabel
										value={idx}
										control={<Radio />}
										label={item.label}
										disabled={item.disabled}
										key={idx}
									/>
								))}
							</RadioGroup>
						</Box>

						<Box>
							<Typography variant="st2" pb={12}>
								Disabled , Selected
							</Typography>
							<RadioGroup name="radioGroup" value={value} onChange={handleChange}>
								{radioData2.map((item, idx) => {
									return (
										<FormControlLabel
											value={idx}
											control={<Radio />}
											label={item.label}
											disabled={item.disabled}
											key={idx}
										/>
									)
								})}
							</RadioGroup>
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<CodeArea>
						{`const radioData1 = [
    { label: "Label Text", disabled: false },
    { label: "Label Text", disabled: false },
];
     
const [ value, setValue]= React.useState("0");
const handleChange = (event) => {    
    setValue(event.target.value);
};  

// Default    
<RadioGroup 
    name="radioGroup"
    value={value}
    onChange={handleChange}>
    { radioData1.map((item, idx) => (
        <FormControlLabel
            value={idx}
            control={<Radio />}
            label={item.label}
            disabled={item.disabled}
            key={idx}
        />
    ))}
</RadioGroup>
                        `}
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
const radioDataGroup = [
	{ label: 'Label Text', disabled: false },
	{ label: 'Label Text', disabled: false },
	{ label: 'Label Text', disabled: false },
	{ label: 'Label Text', disabled: false },
	{ label: 'Label Text', disabled: false },
]
export const GroupRadio = () => {
	const [value, setValue] = React.useState('0')

	const handleChange: RadioGroupProps['onChange'] = React.useCallback((event) => {
		setValue(event.target.value)
	}, [])

	return (
		<>
			<Grid container spacing={40}>
				<Grid item xs={6}>
					<Stack spacing={20}>
						<Box>
							<RadioGroup name="radioGroup" value={value} onChange={handleChange}>
								{radioDataGroup.map((item, idx) => {
									return (
										<FormControlLabel
											value={idx}
											control={<Radio />}
											label={item.label}
											disabled={item.disabled}
											key={idx}
										/>
									)
								})}
							</RadioGroup>
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<CodeArea>
						{`const radioDataGroup = [
    { label: "Label Text", disabled: false },
    { label: "Label Text", disabled: false
    { label: "Label Text", disabled: false
    { label: "Label Text", disabled: false
    { label: "Label Text", disabled: false },
];

const [ value, setValue]= React.useState("0");
const handleChange = (event) => {						
    setValue(event.target.value);					
};

// Default						
<RadioGroup
    name="radioGroup" value={value}
    onChange={handleChange}>					
    { radioDataGroup.map((item, idx) => (
        <FormControlLabel
            value={idx}
            control={<Radio />} label={item.label}
			disabled={item.disabled}
            key={idx}
        />
    ))}
</RadioGroup>
                        `}
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
