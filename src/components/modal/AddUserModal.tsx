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
	FormGroup,
	Grid,
	TextField,
} from '@mui/material'

// types
import type { ModalProps } from '@lib/modal'
import type { SubmitHandler } from 'react-hook-form'

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

const AddUserModal: React.FC<AddUserModalProps> = ({ onClose }) => {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<AddUserFormData>({
		/** submit 하기전 유효성 검사를 실행하는 시점, default: 'onSubmit'  */
		mode: 'onTouched',
		/** submit 이후 오류가 있는 항목에 대해서 다시 휴효성 검사할 경우에 대한 시점, default: 'onChange' */
		reValidateMode: 'onChange',
		resolver: yupResolver(AddUserModalScheme),
		defaultValues: {
			id: '',
			name: '',
			tel: '',
			etc: '',
			crd: '',
		},
	})

	const onSubmit: SubmitHandler<AddUserFormData> = React.useCallback((data) => {
		console.log('전송 정보 확인 : ', data)
	}, [])

	return (
		<Dialog onClose={onClose} open>
			<DialogTitle>사용자 추가하기</DialogTitle>
			<Divider />
			<Box component="form" sx={{ p: 3 }} onSubmit={handleSubmit(onSubmit)}>
				<Grid container direction="column">
					<Grid item>
						<FormGroup>
							<Controller
								control={control}
								name="crd"
								render={({ field }) => (
									<TextField
										{...field}
										label="생성일자"
										error={!!errors.crd?.message}
										helperText={errors.crd?.message || ' '}
									/>
								)}
							/>
						</FormGroup>
						<FormGroup>
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
						</FormGroup>
						<FormGroup>
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
						</FormGroup>
						<FormGroup>
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
						</FormGroup>
						<FormGroup>
							<Controller
								control={control}
								name="etc"
								render={({ field }) => (
									<TextField
										{...field}
										label="휴대폰 번호"
										error={!!errors.etc?.message}
										helperText={errors.etc?.message || ' '}
									/>
								)}
							/>
						</FormGroup>
					</Grid>
					<Grid item>
						<Button type="submit" variant="contained">
							추가
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Dialog>
	)
}

export default AddUserModal
