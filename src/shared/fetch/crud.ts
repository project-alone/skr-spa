import http from '@fetch/http'
import { omit } from 'lodash-es'

/**
 * @description
 * 사용자 정보 리스트
 */

declare global {
	namespace GetUserList {
		type Res = {
			_id: string
			id: string
			name: string
			tel: string
			etc: string
			crd: string
		}[]
	}
}

async function getUserList() {
	const res = await http.get<GetUserList.Res>('/user')
	return res.data
}

/**
 * @description
 * 사용자 등록
 */

declare global {
	namespace CreateUser {
		interface Params {
			id: string
			name: string
			tel: string
			etc: string
			crd: string
		}

		interface Res {
			_id: string
			id: string
			name: string
			tel: string
			etc: string
			crd: string
		}
	}
}

/**
 *
 * @param { CreateUser.Params } data
 * @return {Promise<AxiosResponse<CreateUser.Res, any>>}
 */
async function createUser(data: CreateUser.Params) {
	const res = await http.post<CreateUser.Res>('/user', { ...data })
	return res.data
}

/**
 * @description
 * 사용자 상세 정보
 */

declare global {
	namespace GetUserDetail {
		type Params = string

		interface Res {
			_id: string
			id: string
			name: string
			tel: string
			etc: string
			crd: string
		}
	}
}

/**
 *
 * @param { GetUserDetail.Params } params
 * @return { CreateUser.Res }
 */
async function getUserDetail(params: GetUserDetail.Params) {
	const res = await http.get<GetUserDetail.Res>(`/user/${params}`)
	return res.data
}

/**
 * @description
 * 사용자 정보 업데이트
 */

declare global {
	namespace SetUserDetailUpdate {
		interface Params {
			_id: string
			id: string
			name: string
			tel: string
			etc: string
			crd: string
		}

		type Res = Record<string, unknown>
	}
}

/**
 *
 * @param { SetUserDetailUpdate.Params } params
 * @return { CreateUser.Res }
 */
async function setUserDetailUpdate(params: SetUserDetailUpdate.Params) {
	const res = await http.put<SetUserDetailUpdate.Res>(`/user/${params._id}`, {
		...omit(params, '_id'),
	})
	return res.data
}

/**
 * @description
 * 사용자 정보 삭제
 */

declare global {
	namespace DeleteUserDetail {
		interface Params {
			userPrivateId: string
		}

		type Res = Record<string, unknown>
	}
}

/**
 *
 * @param { DeleteUserDetail.Params } params
 * @return { DeleteUserDetail.Res }
 */
async function deleteUserDetail(params: DeleteUserDetail.Params) {
	const res = await http.delete<DeleteUserDetail.Res>(`/user/${params.userPrivateId}`)
	return res.data
}

const CrudAPI = {
	getUserList,
	getUserDetail,
	setUserDetailUpdate,
	createUser,
	deleteUserDetail,
}

export default CrudAPI
