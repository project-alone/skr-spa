import Helmet from 'react-helmet'
import { Form, Input, Checkbox, Button, Layout } from 'antd'
import { get } from 'lodash-es'
import { Navigate, useLocation } from 'react-router-dom'
import { shallowEqual, useAppDispatch, useAppSelector } from '@lib/hooks'
import { fakeLogin, selectIsLogin } from '@store/slices/auth'
import type { FormProps } from 'antd/lib/form'
import type { PageProps } from '@router/routes'

interface LoginFormValues {
	email: string
	password: string
	remember: boolean
}

const LoginPage: React.FC<PageProps> = ({ title }) => {
	const isLogin = useAppSelector(selectIsLogin, shallowEqual)
	const dispatch = useAppDispatch()
	const location = useLocation()
	let from = '/home'

	if (location.state) {
		from = get(location.state, ['from', 'pathname'], '/home')
	}

	const onFinish = (values: LoginFormValues) => {
		console.log('Success:', values)
		/**
		 * @event action login
		 * login({
		 *      username: 'john',
		 *      password: 'changeme111',
		 * })
		 */
		dispatch(fakeLogin(true))
	}

	const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	if (isLogin) {
		return <Navigate replace to={from} />
	}

	return (
		<>
			<Helmet>{title && <title>{title}</title>}</Helmet>
			<Layout.Content
				style={{
					padding: '50px',
					backgroundColor: '#fff',
					minHeight: '100%',
				}}>
				<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					initialValues={{
						remember: true,
						email: 'test@test.com',
						password: '121212',
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off">
					<Form.Item
						label="이메일"
						name="email"
						rules={[
							{
								required: true,
								message: '이메일을 입력해주세요!',
							},
						]}>
						<Input placeholder="test@test.com" />
					</Form.Item>

					<Form.Item
						label="비밀번호"
						name="password"
						rules={[
							{
								required: true,
								message: '비밀번호를 입력해주세요!',
							},
						]}>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="remember"
						valuePropName="checked"
						wrapperCol={{ offset: 8, span: 16 }}>
						<Checkbox>기억하기</Checkbox>
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							로그인
						</Button>
					</Form.Item>
				</Form>
			</Layout.Content>
		</>
	)
}

export default LoginPage
