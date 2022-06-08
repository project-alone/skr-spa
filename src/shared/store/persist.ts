/**
 * @reference https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
 */

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// types
import type { Reducer, Store } from '@reduxjs/toolkit'
import type { PersistConfig } from 'redux-persist'
import type { IState } from '@store/slices'

const persistConfig: PersistConfig<IState> = {
	key: import.meta.env.VITE_REDUX_PERSIST_CACHE_KEY, // key명은 dotenv 변수 설정 파일에서 변경/적용 후 사용
	version: 1,
	storage,
}

export const actionTypes = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
export const createPersistor = (store: Store) => persistStore(store)
export const createPersistedReducer = (slice: Reducer<IState>) =>
	persistReducer(persistConfig, slice)
