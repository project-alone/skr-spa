import React from 'react'
import { useAppSelector, shallowEqual, useAppDispatch } from '@hooks/index'
import {
	getUserDetail as getUserDetailAction,
	getUserList as getUserListAction,
	createUser as createUserAction,
	setUserDetailUpdate as setUserDetailUpdateAction,
	deleteUserDetail as deleteUserDetailAction,
} from '@store/slices/crud'

export const useCrud = () => {
	const { userDetail, userList } = useAppSelector(
		(state) => ({
			userList: state.crud.userList,
			userDetail: state.crud.userDetail,
		}),
		shallowEqual,
	)
	const dispatch = useAppDispatch()

	const getUserDetail = React.useCallback(
		async (params) => {
			await dispatch(getUserDetailAction(params))
		},
		[dispatch],
	)

	const getUserList = React.useCallback(async () => {
		await dispatch(getUserListAction())
	}, [dispatch])

	const createUser = React.useCallback(
		async (params) => {
			await dispatch(createUserAction(params))
		},
		[dispatch],
	)

	const setUserDetailUpdate = React.useCallback(
		async (params) => {
			await dispatch(setUserDetailUpdateAction(params))
		},
		[dispatch],
	)

	const deleteUserDetail = React.useCallback(
		async (params) => {
			await dispatch(deleteUserDetailAction(params))
		},
		[dispatch],
	)

	return {
		userDetail,
		userList,
		getUserDetail,
		getUserList,
		createUser,
		setUserDetailUpdate,
		deleteUserDetail,
	}
}
