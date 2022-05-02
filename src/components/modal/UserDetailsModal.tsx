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

interface UserDetailsModalProps extends ModalProps {
	userInfo: GetUserDetail.Res
}
interface AddUserFormData {
	id: string
	name: string
	tel: string
	etc: string
	crd: string
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ onClose, onSubmit, userInfo }) => {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<AddUserFormData>({
		mode: 'onTouched',
		reValidateMode: 'onChange',
		resolver: yupResolver(AddUserModalScheme),
		defaultValues: userInfo,
	})

	const handleSubmitFn: SubmitHandler<AddUserFormData> = React.useCallback(
		(data) => {
			typeof onSubmit === 'function' && onSubmit(data)
		},
		[onSubmit],
	)

	return (
		<Dialog onClose={onClose} open>
			<DialogTitle>사용자 상세정보 및 수정</DialogTitle>
			<Divider />
			<Box component="form" sx={{ p: 3 }} onSubmit={handleSubmit(handleSubmitFn)}>
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
										label="직업"
										error={!!errors.etc?.message}
										helperText={errors.etc?.message || ' '}
									/>
								)}
							/>
						</FormGroup>
					</Grid>
					<Grid display="flex" item justifyContent="space-between">
						<Button
							type="submit"
							variant="contained"
							color="warning"
							sx={{ width: '46%' }}>
							수정
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

export default UserDetailsModal
