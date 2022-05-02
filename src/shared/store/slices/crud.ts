import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CrudAPI from '@fetch/crud'

export interface CrudState {
	status: 'pending' | 'fulfilled' | 'rejected'
	userList: GetUserList.Res
	userDetail: GetUserDetail.Res
}

const initialState: CrudState = {
	status: 'pending',
	userList: [],
	userDetail: {
		_id: '',
		id: '',
		name: '',
		etc: '',
		tel: '',
		crd: '',
	},
}

/** @description 사용자 정보 리스트 */
export const getUserList = createAsyncThunk<GetUserList.Res>(
	'crud/userlist',
	async (params, thunkAPI) => {
		try {
			return await CrudAPI.getUserList()
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	},
)

/** @description 사용자 상세 정보 */
export const getUserDetail = createAsyncThunk<GetUserDetail.Res, GetUserDetail.Params>(
	'crud/userdetail',
	async (params, thunkAPI) => {
		try {
			return await CrudAPI.getUserDetail(params)
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	},
)

/** @description 사용자 상세 정보를 갱신 */
export const setUserDetailUpdate = createAsyncThunk<
	SetUserDetailUpdate.Res,
	SetUserDetailUpdate.Params
>('crud/userdetail', async (params, thunkAPI) => {
	try {
		return await CrudAPI.setUserDetailUpdate(params)
	} catch (error) {
		return thunkAPI.rejectWithValue(error)
	}
})

/** @description 사용자 생성 */
export const createUser = createAsyncThunk<CreateUser.Res, CreateUser.Params>(
	'crud/userdetail',
	async (params, thunkAPI) => {
		try {
			return await CrudAPI.createUser(params)
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	},
)

/** @description 사용자 삭제 */
export const deleteUserDetail = createAsyncThunk<DeleteUserDetail.Res, DeleteUserDetail.Params>(
	'crud/userdetail',
	async (params, thunkAPI) => {
		try {
			return await CrudAPI.deleteUserDetail(params)
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	},
)

export const crudSlice = createSlice({
	name: 'crud',
	initialState,
	reducers: {
		// reducerFn(state, action: PayloadAction<boolean>) {
	},
	extraReducers: (builder) => {
		builder
			// 사용자 리스트
			.addCase(getUserList.pending, (state) => {
				state.status = 'pending'
			})
			.addCase(getUserList.fulfilled, (state, action) => {
				state.status = 'fulfilled'
				state.userList = action.payload
			})
			.addCase(getUserList.rejected, (state) => {
				state.status = 'rejected'
			})
			// 사용자 상세 정보
			.addCase(getUserDetail.pending, (state) => {
				state.status = 'pending'
			})
			.addCase(getUserDetail.fulfilled, (state, action) => {
				state.status = 'fulfilled'
				state.userDetail = action.payload
			})
			.addCase(getUserDetail.rejected, (state) => {
				state.status = 'rejected'
			})
	},
})

export const actions = {
	getUserList,
	getUserDetail,
}

export default crudSlice.reducer
