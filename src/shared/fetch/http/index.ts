import axios from 'axios'

const http = axios.create({
	baseURL: import.meta.env.VITE_PUBLIC_API_URL,
	withCredentials: true,
})

http.interceptors.request.use(
	(requestConfig) => {
		return requestConfig
	},
	(error) => {
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
