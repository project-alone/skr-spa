import { combineReducers } from '@reduxjs/toolkit'
import CounterSlice from '@store/slices/counter'
import UserSlice from '@store/slices/users'
import AuthSlice from '@store/slices/auth'
import TabsSlice from '@store/slices/tabs'
import UiSlice from '@store/slices/ui'
import CrudSlice from '@store/slices/crud'
import type { CounterState } from '@store/slices/counter'
import type { UserState } from '@store/slices/users'
import type { AuthState } from '@store/slices/auth'
import type { TabsState } from '@store/slices/tabs'
import type { UiState } from '@store/slices/ui'
import type { CrudState } from '@store/slices/crud'

export interface IState {
	ui: UiState
	crud: CrudState
	counter: CounterState
	users: UserState
	auth: AuthState
	tabs: TabsState
}
const rootReducer = combineReducers({
	ui: UiSlice,
	crud: CrudSlice,
	counter: CounterSlice,
	users: UserSlice,
	auth: AuthSlice,
	tabs: TabsSlice,
})

export type ReducerType = ReturnType<typeof rootReducer>
export default rootReducer
