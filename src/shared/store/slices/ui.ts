import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '@store/index'

export interface UiState {
	loading: boolean
}

const initialState: UiState = {
	loading: false,
}

export const UiSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setLoading(state, action: PayloadAction<boolean>) {
			state.loading = action.payload
		},
	},
})

export const { setLoading } = UiSlice.actions

export default UiSlice.reducer
