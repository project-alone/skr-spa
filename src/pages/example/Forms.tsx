import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { DevTool } from '@hookform/devtools'
import { omit } from 'lodash-es'
import { signUpScheme } from '@lib/validate/signUp'
import moment, { Moment } from 'moment'
import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	FormGroup,
	Input,
	Select,
	TextField,
} from '@mui/material'
import { DatePicker } from '@mui/lab'
import { CheckboxGroup } from '@components/form'
import type { ControllerRenderProps } from 'react-hook-form'

import type { FormItemData } from '@components/form'

type SignUpFormData = {
	userId: string
	password: string
	term: boolean
	fruits: string[]
	animals: string
	alphabet: string
	date: string | null
}

const Message: React.FC<{ message: string }> = ({ message }) => {
	return <strong style={{ color: 'red' }}>{message}</strong>
}
// const renderFormItemToArray = (
// 	list: FormItemData[],
// 	Component: typeof Select.Option | typeof Radio,
// ) => {
// 	return list.map(({ value, label }, index) => (
// 		<Component key={`${value}-${index}`} value={value}>
// 			{label}
// 		</Component>
// 	))
// }

const FormsPage: React.FC = () => {
	const [checkboxValues] = React.useState<FormItemData[]>([
		{ label: '사과', value: 'apple' },
		{ label: '오렌지', value: 'orange' },
		{ label: '바나나', value: 'banana' },
		{ label: '딸기', value: 'strawberry' },
	])
	const [selectOptions] = React.useState<FormItemData[]>([
		{ value: 'lion', label: '사자' },
		{ value: 'rabbit', label: '토끼' },
		{ value: 'monkey', label: '원숭이' },
		{ value: 'cow', label: '젖소' },
		{ value: 'tiger', label: '호랑이' },
	])
	const [radioGroup] = React.useState<FormItemData[]>([
		{ label: 'a', value: 'a' },
		{ label: 'b', value: 'b' },
		{ label: 'c', value: 'c' },
		{ label: 'd', value: 'd' },
		{ label: 'e', value: 'e' },
	])
	const {
		handleSubmit,
		formState: { errors },
		control,
		getValues,
	} = useForm<SignUpFormData>({
		mode: 'onBlur',
		resolver: signUpScheme,
		defaultValues: {
			term: false,
			fruits: [],
			userId: '',
			password: '',
			animals: '',
			alphabet: '',
			date: '',
		},
	})

	const onSubmit: React.FormEventHandler = handleSubmit((data) => {
		console.log('submit data : ', data)
	})

	console.log('values', getValues())

	const handleCheck = (field: ControllerRenderProps<SignUpFormData, 'fruits'>, value: string) => {
		const newIds = field.value?.includes(value)
			? field.value?.filter((id) => id !== value)
			: [...(field.value ?? []), value]
		field.onChange(newIds)
	}

	return (
		<Box component="form" onSubmit={onSubmit}>
			<FormGroup>
				<Controller
					control={control}
					name="userId"
					render={({ field }) => <Input placeholder="이메일" type="text" {...field} />}
				/>
				<ErrorMessage errors={errors} name="userId" render={Message} />
			</FormGroup>
			<Divider />
			<FormGroup>
				<Controller
					control={control}
					name="password"
					render={({ field }) => (
						<Input placeholder="비밀번호" type="password" {...field} />
					)}
				/>
				<ErrorMessage errors={errors} name="password" render={Message} />
			</FormGroup>
			<Divider />
			<FormGroup>
				<Controller
					control={control}
					name="term"
					render={({ field }) => (
						<FormControlLabel label="저장여부" control={<Checkbox {...field} />} />
					)}
				/>
			</FormGroup>
			<FormGroup>
				<Controller
					control={control}
					name="fruits"
					render={({ field }) => (
						<>
							{checkboxValues.map((item, index) => (
								<FormControlLabel
									key={`fruits${index}`}
									label={item.label}
									onChange={() => handleCheck(field, item.value)}
									control={<Checkbox />}
								/>
							))}
						</>
					)}
				/>
				<ErrorMessage errors={errors} name="fruits" render={Message} />
			</FormGroup>

			{/* <div>
				<Controller
					control={control}
					name="animals"
					render={({ field }) => (
						<Select placeholder="동물 선택" {...field}>
							{renderFormItemToArray(selectOptions, Select.Option)}
						</Select>
					)}
				/>
				<ErrorMessage errors={errors} name="animals" render={Message} />
			</div> */}

			{/* <div>
				<Controller
					control={control}
					name="alphabet"
					render={({ field }) => (
						<Radio.Group {...field}>
							{renderFormItemToArray(radioGroup, Radio)}
						</Radio.Group>
					)}
				/>
				<ErrorMessage errors={errors} name="alphabet" render={Message} />
			</div> */}

			<FormGroup>
				<Controller
					control={control}
					name="date"
					render={({ field }) => (
						<DatePicker
							{...field}
							renderInput={(params) => <TextField {...params} />}
						/>
					)}
				/>
			</FormGroup>

			<div style={{ marginTop: '50px' }}>
				<Button variant="contained" type="submit">
					submit
				</Button>
			</div>

			<DevTool control={control} />
		</Box>
	)
}

export default FormsPage
