import http from '@fetch/http'
import type { AxiosResponse } from 'axios'

/**
 * @description
 * 사용자 정보 리스트
 */

declare global {
	namespace GetUserList {
		type Res = Promise<
			AxiosResponse<
				{
					_id: string
					id: string
					name: string
					tel: string
					etc: string
					crd: string
				}[],
				undefined
			>
		>
	}
}

/**
 *
 * @param { GetUserList.Params } params
 * @return { Promise<AxiosResponse<SetLogin.Res, any>> }
 */
export async function getUserList() {
	const res = await http.get<null, GetUserList.Res>('/user')
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
export async function createUser(data: CreateUser.Params) {
	console.log('data', data)
	return await http.post<CreateUser.Params, CreateUser.Res>('/user', { ...data })
}

/**
 * @description
 * 사용자 상세 정보
 */

declare global {
	namespace GetUserDetail {
		interface Params {
			userPrivateId: string
		}

		type Res = AxiosResponse<{
			_id: string
			id: string
			name: string
			tel: string
			etc: string
			crd: string
		}>
	}
}

/**
 *
 * @param { GetUserDetail.Params } params
 * @return {Promise<AxiosResponse<CreateUser.Res, any>>}
 */
export async function getUserDetail(params: GetUserDetail.Params) {
	const res = await http.get<null, GetUserDetail.Res>(`/user/${params.userPrivateId}`)
	return res.data
}

/**
 * @description
 * 사용자 정보 업데이트
 */

declare global {
	namespace SetUserDetailUpdate {
		interface Params {
			userPrivateId: string
			data: {
				id: string
				name: string
				tel: string
				etc: string
				crd: string
			}
		}

		type Res = undefined
	}
}

/**
 *
 * @param { SetUserDetailUpdate.Params } params
 * @return {Promise<AxiosResponse<CreateUser.Res, any>>}
 */
export async function setUserDetailUpdate(params: SetUserDetailUpdate.Params) {
	return await http.put<SetUserDetailUpdate.Params, SetUserDetailUpdate.Res>(
		`/user/${params.userPrivateId}`,
		{ data: params.data },
	)
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

		type Res = undefined
	}
}

/**
 *
 * @param { DeleteUserDetail.Params } params
 * @return {Promise<AxiosResponse<DeleteUserDetail.Res, any>>}
 */
export async function deleteUserDetail(params: DeleteUserDetail.Params) {
	return await http.delete<DeleteUserDetail.Params, DeleteUserDetail.Res>(
		`/user/${params.userPrivateId}`,
	)
}
