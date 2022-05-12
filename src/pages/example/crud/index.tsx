import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Button, Container, Grid } from '@mui/material'
import {
	CustomDataGrid,
	PageTitle,
	PageTitleWrapper,
	createDataGridColumns,
} from '@root/components/ex'
import { useAppDispatch, useAsyncFn } from '@hooks/index'
import { useModal } from '@lib/modal'
import modal from '@components/modal'
import { setLoading } from '@store/slices/ui'

// fetch
import CrudAPI from '@fetch/crud'

// typs
import type { GridCallbackDetails, GridCellParams } from '@mui/x-data-grid-pro'

type CrudFetchActions =
	| {
			type: 'USER_LIST'
	  }
	| {
			type: 'DELETE_USER_DETAIL'
			userPrivateId: string
	  }

type PagePrepare = Record<'page' | 'size' | 'rowCount', number>

const CrudPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const { openModal } = useModal()
	const [pagePrepare, setPagePrepare] = React.useState<PagePrepare>({
		page: 1,
		size: 10,
		rowCount: 0,
	})

	const [{ loading, value /* error */ }, fetch] = useAsyncFn(
		async (action: CrudFetchActions) => {
			if (action.type === 'DELETE_USER_DETAIL') {
				await CrudAPI.deleteUserDetail({ userPrivateId: action.userPrivateId })
			}

			const res = await CrudAPI.getUserList()
			setPagePrepare((state) => ({ ...state, rowCount: res.length }))

			return res
		},
		[pagePrepare.page, pagePrepare.size],
	)

	/** @method handlePageChange - 페이지전환 시 실행 */
	const handlePageChange = React.useCallback((page: number, details: GridCallbackDetails) => {
		// setPagePrepare((state) => ({ ...state, page: page }))
	}, [])

	/**
	 * @method handlePageSizeChange - pageSize (설정된 페이지 당 row 갯수) 변경 시 실행
	 */
	const handlePageSizeChange = React.useCallback((size) => {
		// setPagePrepare((state) => ({ ...state, size }))
	}, [])

	/**
	 * @method handleAddUser 사용자 추가하기
	 */
	const handleAddUser = React.useCallback(() => {
		openModal(modal.AddUser, {
			onSubmit: async (params: CreateUser.Params) => {
				await CrudAPI.createUser(params)
				await fetch({ type: 'USER_LIST' })
			},
		})
	}, [fetch, openModal])

	/**
	 * @method handleCellDoubleClick cell을 double click 했을 떄 동작(사용자 상세보기 및 수정)
	 */
	const handleCellDoubleClick = React.useCallback(
		async (params: GridCellParams) => {
			try {
				dispatch(setLoading(true))
				const detail = await CrudAPI.getUserDetail(params.row._id)
				console.log(detail)
				openModal(modal.UserDetails, {
					onSubmit: async (param: SetUserDetailUpdate.Params) => {
						await CrudAPI.setUserDetailUpdate(param)
						await fetch({ type: 'USER_LIST' })
					},
					userInfo: detail,
				})
			} catch (error) {
				throw new Error(`${error}`)
			}
			dispatch(setLoading(false))
		},
		[dispatch, fetch, openModal],
	)

	const columns = React.useMemo(
		() =>
			createDataGridColumns([
				{ field: '_id', hide: true },
				{ field: 'id', headerName: '아이디', width: 120 },
				{ field: 'name', headerName: '성명', flex: 1 },
				{
					field: 'tel',
					headerName: '휴대폰번호',
					flex: 1,
				},
				{ field: 'etc', headerName: '직업', flex: 1 },
				{
					field: 'crd',
					headerName: '생성일자',
					flex: 1,
				},
				{
					field: 'delete',
					headerName: '삭제',
					renderCell(cell) {
						return (
							<Button
								variant="contained"
								onClick={() =>
									fetch({
										type: 'DELETE_USER_DETAIL',
										userPrivateId: cell.row._id,
									})
								}>
								삭제
							</Button>
						)
					},
				},
			]),
		[fetch],
	)

	/**
	 * @title Effects
	 */
	React.useEffect(() => {
		fetch({ type: 'USER_LIST' })
	}, [fetch])

	return (
		<>
			<Helmet>
				<title>CRUD - Example</title>
			</Helmet>
			<PageTitleWrapper>
				<PageTitle heading="CRUD" subHeading="CRUD 테스트 용 게시판" />
			</PageTitleWrapper>
			<Container maxWidth="lg">
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="stretch"
					spacing={3}>
					<Grid item>
						<Button variant="contained" onClick={handleAddUser}>
							사용자 추가
						</Button>
					</Grid>
					<Grid item xs={12}>
						<CustomDataGrid
							pagination
							columns={columns}
							loading={loading}
							page={pagePrepare.page}
							pageSize={pagePrepare.size}
							rowCount={pagePrepare.rowCount}
							rows={value ?? []}
							rowsPerPageOptions={[10, 25, 50]}
							onPageChange={handlePageChange}
							onPageSizeChange={handlePageSizeChange}
							onCellDoubleClick={handleCellDoubleClick}
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default CrudPage
