import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Button, Container, Grid } from '@mui/material'
import {
	CustomDataGrid,
	PageTitle,
	PageTitleWrapper,
	createDataGridColumns,
} from '@root/components/ex'
import { useCrud } from '@hooks/index'
import { useModal } from '@lib/modal'
import modal from '@components/modal'

// typs
import type { GridCallbackDetails, GridCellParams } from '@mui/x-data-grid-pro'

type PagePrepare = Record<'page' | 'size' | 'rowCount', number>

const CrudPage: React.FC = () => {
	const { openModal } = useModal()
	const {
		createUser,
		getUserList,
		getUserDetail,
		setUserDetailUpdate,
		deleteUserDetail,
		userDetail,
		userList,
	} = useCrud()
	const [pagePrepare /* setPagePrepare */] = React.useState<PagePrepare>({
		page: 1,
		size: 10,
		rowCount: 0,
	})

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

	/** @method handleUserDetailUpdate */
	const handleUserDetailUpdate = React.useCallback(
		async (param: SetUserDetailUpdate.Params) => {
			await setUserDetailUpdate(param)
			await getUserList()
		},
		[getUserList, setUserDetailUpdate],
	)

	/** @method handleDeleteUser */
	const handleDeleteUser = React.useCallback(
		async (_id) => {
			await deleteUserDetail(_id)
			await getUserList()
		},
		[deleteUserDetail, getUserList],
	)

	/** @method handleAddUser */
	const handleAddUser = React.useCallback(
		async (params: CreateUser.Params) => {
			await createUser(params)
			await getUserList()
		},
		[createUser, getUserList],
	)

	/** @method handleOpenAddUser 사용자 추가하기 모달 */
	const handleOpenAddUser = React.useCallback(() => {
		openModal(modal.AddUser, {
			onSubmit: handleAddUser,
		})
	}, [handleAddUser, openModal])

	/**
	 * @method handleCellDoubleClick cell을 double click 했을 떄 동작(사용자 상세보기 및 수정)
	 */
	const handleCellDoubleClick = React.useCallback(
		async (params: GridCellParams) => {
			await getUserDetail(params.row._id)
			openModal(modal.UserDetails, {
				onSubmit: handleUserDetailUpdate,
				userInfo: userDetail ?? {
					id: '',
					name: '',
					crd: '',
					etc: '',
					_id: '',
					tel: '',
				},
			})
		},
		[getUserDetail, handleUserDetailUpdate, openModal, userDetail],
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
						const onClick = () => handleDeleteUser(cell.row._id)
						return (
							<Button variant="contained" onClick={onClick}>
								삭제
							</Button>
						)
					},
				},
			]),
		[handleDeleteUser],
	)

	/** @description Effects */
	React.useEffect(() => {
		getUserList()
	}, [getUserList])

	React.useEffect(() => {
		console.log('#####', userDetail)
	}, [userDetail])

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
						<Button variant="contained" onClick={handleOpenAddUser}>
							사용자 추가
						</Button>
					</Grid>
					<Grid item xs={12}>
						<CustomDataGrid
							pagination
							columns={columns}
							loading={false}
							page={pagePrepare.page}
							pageSize={pagePrepare.size}
							rowCount={pagePrepare.rowCount}
							rows={userList ?? []}
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
