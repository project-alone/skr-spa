import { combineReducers } from '@reduxjs/toolkit'
import CounterReducer from '@store/slices/counter'
import type { CounterState } from '@store/slices/counter'
import UserSlice from '@store/slices/users'
import type { UserState } from '@store/slices/users'
import AuthSlice from '@store/slices/auth'
import type { AuthState } from '@store/slices/auth'

export interface IState {
	counter: CounterState
	users: UserState
	auth: AuthState
}
const rootReducer = combineReducers({
	counter: CounterReducer,
	users: UserSlice,
	auth: AuthSlice,
})

export type ReducerType = ReturnType<typeof rootReducer>
export default rootReducer
