import { Helmet } from 'react-helmet-async'
import { get } from 'lodash-es'
import { Navigate, useLocation } from 'react-router-dom'
import { shallowEqual, useAppDispatch, useAppSelector } from '@hooks/index'
import { fakeLogin, selectIsLogin } from '@store/slices/auth'

// import { Form, Input, Checkbox, Button, Layout } from 'antd'
// import type { FormProps } from 'antd/lib/form'
import {
	Avatar,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Paper,
	TextField,
	Typography,
} from '@mui/material'
import { Link, LockOutlined } from '@mui/icons-material'

interface LoginFormValues {
	email: string
	password: string
	remember: boolean
}

const LoginPage: React.FC = ({}) => {
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

	// const onFinishFailed = (errorInfo) => {
	// 	console.log('Failed:', errorInfo)
	// }

	// if (isLogin) {
	// 	return <Navigate replace to={from} />
	// }

	return (
		<>
			<Helmet>
				<title>Login Form</title>
			</Helmet>
			<Grid>
				<Paper
					elevation={10}
					style={{
						padding: 20,
						height: '70vh',
						width: 280,
						margin: '20px auto',
					}}>
					<Grid justifyContent="center">
						<Avatar style={{ backgroundColor: '#1bbd7e' }}>
							<LockOutlined />
						</Avatar>
						<h2>Sign In</h2>
					</Grid>
					<TextField label="Username" placeholder="Enter username" fullWidth required />
					<TextField
						label="Password"
						placeholder="Enter password"
						type="password"
						fullWidth
						required
					/>
					<FormControlLabel
						control={<Checkbox name="checkedB" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						color="primary"
						variant="contained"
						style={{ margin: '8px 0' }}
						fullWidth>
						Sign in
					</Button>
					<Typography>
						<Link href="#">Forgot password ?</Link>
					</Typography>
					<Typography>
						{' '}
						Do you have an account ?<Link href="#">Sign Up</Link>
					</Typography>
				</Paper>
			</Grid>
		</>
	)
}

export default LoginPage
