import React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import {
	Box,
	Button,
	Dialog,
	DialogTitle,
	Divider,
	FormControl,
	FormGroup,
	FormHelperText,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material'

// types
import type { ModalProps } from '@lib/modal'
import type { SubmitHandler } from 'react-hook-form'
import { SelectBox } from '../form'

const AddUserModalScheme = yup.object({
	id: yup.string().required('아이디를 입력해주세요.'),
	name: yup.string().required('성명을 입력해주세요.'),
	tel: yup.string().required('휴대폰번호를 입력해주세요.'),
	etc: yup.string().required('직업을 입력해주세요.'),
	crd: yup.string().required('생성일자를 입력해주세요.'),
})

type AddUserModalProps = ModalProps
interface AddUserFormData {
	id: string
	name: string
	tel: string
	etc: string
	crd: string
}

const AddUserModal: React.FC<AddUserModalProps> = ({ onClose, onSubmit }) => {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<AddUserFormData>({
		mode: 'onTouched',
		reValidateMode: 'onChange',
		resolver: yupResolver(AddUserModalScheme),
		defaultValues: {
			id: '',
			name: '',
			tel: '',
			etc: '',
			crd: new Date().toISOString(),
		},
	})

	const handleSubmitFn: SubmitHandler<AddUserFormData> = React.useCallback(
		(data) => {
			console.log('handleSubmitFn', data)
			typeof onSubmit === 'function' && onSubmit(data)
		},
		[onSubmit],
	)

	return (
		<Dialog onClose={onClose} open>
			<DialogTitle>사용자 추가하기</DialogTitle>
			<Divider />
			<Box component="form" sx={{ p: 3 }} onSubmit={handleSubmit(handleSubmitFn)}>
				<Grid container direction="column">
					<Grid item>
						<Controller
							control={control}
							name="crd"
							render={({ field }) => (
								<TextField
									{...field}
									label="생성일자"
									InputProps={{ readOnly: true }}
									error={!!errors.crd?.message}
									helperText={errors.crd?.message || ' '}
								/>
							)}
						/>
						<Controller
							control={control}
							name="id"
							render={({ field }) => (
								<TextField
									{...field}
									label="아이디"
									error={!!errors.id?.message}
									helperText={errors.id?.message || ' '}
								/>
							)}
						/>
						<Controller
							control={control}
							name="name"
							render={({ field }) => (
								<TextField
									{...field}
									label="성명"
									error={!!errors.name?.message}
									helperText={errors.name?.message || ' '}
								/>
							)}
						/>
						<Controller
							control={control}
							name="tel"
							render={({ field }) => (
								<TextField
									{...field}
									label="휴대폰 번호"
									error={!!errors.tel?.message}
									helperText={errors.tel?.message || ' '}
								/>
							)}
						/>
						<Controller
							control={control}
							name="etc"
							render={({ field }) => (
								<SelectBox
									{...field}
									fullWidth
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									label="직업"
									options={[
										{ value: 'farmer', label: '농부' },
										{ value: 'singer', label: '가수' },
										{ value: 'designer', label: '디자이너' },
									]}
									error={!!errors.etc?.message}
									errorMessage={errors.etc?.message}
								/>
							)}
						/>
					</Grid>
					<Grid display="flex" item justifyContent="space-between">
						<Button
							type="submit"
							variant="contained"
							color="warning"
							sx={{ width: '46%' }}>
							추가
						</Button>
						<Button
							type="button"
							variant="contained"
							sx={{ width: '46%' }}
							onClick={onClose}>
							닫기
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Dialog>
	)
}

export default AddUserModal
