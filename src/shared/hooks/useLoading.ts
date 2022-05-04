import React from 'react'
import { useAppSelector, shallowEqual, useAppDispatch } from '@hooks/index'
import { setLoading as setLoadingAction } from '@store/slices/ui'

export const useLoading = () => {
	const { loading } = useAppSelector(
		(state) => ({
			loading: state.ui.loading,
		}),
		shallowEqual,
	)
	const dispatch = useAppDispatch()

	const setLoading = React.useCallback(
		(loading: boolean) => {
			dispatch(setLoadingAction(loading))
		},
		[dispatch],
	)

	return { loading, setLoading }
}
