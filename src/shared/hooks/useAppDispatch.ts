import { useDispatch } from 'react-redux'
import { store } from '@store/index'

/** useDispatch의 타입 */
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
