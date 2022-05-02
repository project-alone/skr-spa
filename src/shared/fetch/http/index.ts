import axios from 'axios'
// import { store } from '@store/index'

const http = axios.create({
	baseURL: '/',
	withCredentials: true,
})

http.interceptors.request.use(
	(requestConfig) => {
		return requestConfig
	},
	(error) => {
		// store.dispatch(action({ type: 'loading' }))
		// store.dispatch(action({ type: 'error' }))
		// store.dispatch(action({ type: 'fulfiled' }))
		// error 객체가 맞지만 static property들이 존재하므로 오류된 원인을 분석할 수 있습니다.
		return error
	},
)

http.interceptors.response.use(
	(responseConfig) => {
		return responseConfig
	},
	(error) => {
		// error 객체가 맞지만 static property들이 존재하므로 오류된 원인을 분석할 수 있습니다.
		return error
	},
)

export default http
