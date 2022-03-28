import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { DevTool } from '@hookform/devtools'
import { signUpScheme } from '@lib/validate/signUp'
import {
	Box,
	Button,
	Card,
	CardContent,
	Checkbox,
	Container,
	Divider,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	Grid,
	Input,
	TextField,
} from '@mui/material'
import { AddTwoTone as AddTwoToneIcon } from '@mui/icons-material'
import { DatePicker } from '@mui/lab'
import { CheckboxGroup, RadioButtons, SelectBox } from '@components/form'
import { PageHeader, PageTitleWrapper } from '@components/common'

type SignUpFormData = {
	userId: string
	password: string
	term: boolean
	fruits: string[]
	animals: string
	alphabet: string
	date: string | null
}

const FormsPage: React.FC = () => {
	const [checkboxValues] = React.useState<FormItem[]>([
		{ label: '사과', value: 'apple' },
		{ label: '오렌지', value: 'orange' },
		{ label: '바나나', value: 'banana' },
		{ label: '딸기', value: 'strawberry' },
	])
	const [selectOptions] = React.useState<FormItem[]>([
		{ value: 'lion', label: '사자' },
		{ value: 'rabbit', label: '토끼' },
		{ value: 'monkey', label: '원숭이' },
		{ value: 'cow', label: '젖소' },
		{ value: 'tiger', label: '호랑이' },
	])
	const [radioGroup] = React.useState<FormItem[]>([
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
	} = useForm<SignUpFormData>({
		/** submit 하기전 유효성 검사를 실행하는 시점, default: 'onSubmit'  */
		mode: 'onTouched',
		/** submit 이후 오류가 있는 항목에 대해서 다시 휴효성 검사할 경우에 대한 시점, default: 'onChange' */
		reValidateMode: 'onChange',
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

	const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
		console.log('submit data : ', data)
	}

	return (
		<>
			<Helmet>
				<title>Form example - Examples</title>
			</Helmet>
			<PageTitleWrapper>
				<PageHeader title="Form example" subtitle="This is the Form Example" />
			</PageTitleWrapper>
			<Container maxWidth="lg">
				<CardContent>
					<Box component="form" onSubmit={handleSubmit(onSubmit)}>
						<FormGroup>
							<Controller
								control={control}
								name="userId"
								render={({ field }) => (
									<TextField
										{...field}
										placeholder="이메일"
										error={!!errors.userId?.message}
										helperText={errors.userId?.message || ' '}
									/>
								)}
							/>
						</FormGroup>
						<FormGroup>
							<Controller
								control={control}
								name="password"
								render={({ field }) => (
									<TextField
										{...field}
										placeholder="비밀번호"
										type="password"
										error={!!errors.password?.message}
										helperText={errors.password?.message || ' '}
									/>
								)}
							/>
						</FormGroup>
						<Divider />
						<FormGroup>
							<Controller
								control={control}
								name="term"
								render={({ field }) => (
									<FormControlLabel
										label="저장여부"
										control={<Checkbox {...field} />}
									/>
								)}
							/>
							<FormHelperText error={!!errors.term?.message} variant="filled">
								{errors.term?.message || ''}
							</FormHelperText>
						</FormGroup>
						<FormGroup row>
							<Controller
								control={control}
								name="fruits"
								render={({ field }) => (
									<CheckboxGroup options={checkboxValues} {...field} />
								)}
							/>
							{/* <FormHelperText errors={errors.fruits.length} /> */}
						</FormGroup>
						<FormGroup>
							<Controller
								control={control}
								name="animals"
								render={({ field }) => (
									<SelectBox label="animals" options={selectOptions} {...field} />
								)}
							/>
							{/* <ErrorMessage errors={errors} name="animals" render={Message} /> */}
						</FormGroup>
						<FormGroup>
							<Controller
								control={control}
								name="alphabet"
								render={({ field }) => (
									<RadioButtons row options={radioGroup} {...field} />
								)}
							/>
							{/* <ErrorMessage errors={errors} name="alphabet" render={Message} /> */}
						</FormGroup>

						<FormGroup>
							<Controller
								control={control}
								name="date"
								render={({ field }) => (
									<DatePicker
										{...field}
										renderInput={(props) => <TextField {...props} />}
									/>
								)}
							/>
						</FormGroup>

						<div style={{ marginTop: '50px' }}>
							<Button variant="contained" type="submit">
								submit
							</Button>
						</div>
					</Box>
				</CardContent>
				<DevTool control={control} />
			</Container>
		</>
	)
}

export default FormsPage
