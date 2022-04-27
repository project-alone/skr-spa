import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Button, Container, Grid } from '@mui/material'
import {
	CustomDataGrid,
	PageTitle,
	PageTitleWrapper,
	createDataGridColumns,
} from '@components/common'
import useAsync from '@hooks/useAsync'
import { useModal } from '@lib/modal'
import modal from '@components/modal'

// typs
import type { GridCallbackDetails } from '@mui/x-data-grid-pro'

// fetch
import {
	getUserList,
	// getUserDetail,
	// createUser,
	deleteUserDetail,
	// setUserDetailUpdate,
} from '@fetch/crud'

const columns = createDataGridColumns([
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
		renderCell(deleteRow) {
			const handleDelete = async () => {
				await deleteUserDetail({ userPrivateId: deleteRow.row._id })
			}

			return (
				<Button variant="contained" onClick={handleDelete}>
					삭제
				</Button>
			)
		},
	},
])

type PagePrepare = Record<'page' | 'size' | 'rowCount', number>

const CrudPage: React.FC = () => {
	const [pagePrepare, setPagePrepare] = React.useState<PagePrepare>({
		page: 1,
		size: 10,
		rowCount: 0,
	})
	const { openModal } = useModal()

	const { loading, value /* error */ } = useAsync(async () => {
		const res = await getUserList()
		setPagePrepare((state) => ({ ...state, rowCount: res.length }))
		return res
	}, [pagePrepare.page, pagePrepare.size])

	/**
	 * @title 페이지 전환 시 실행
	 */
	const handlePageChange = React.useCallback((page: number, details: GridCallbackDetails) => {
		// setPagePrepare((state) => ({ ...state, page: page }))
	}, [])

	/**
	 * @title pageSize(설정된 페이지 당 row 갯수) 변경 시 실행
	 */
	const handlePageSizeChange = React.useCallback((size) => {
		// setPagePrepare((state) => ({ ...state, size }))
	}, [])

	/**
	 * @title 사용자 추가하기
	 */
	const handleAddUser = React.useCallback(() => {
		openModal(modal.AddUser)
	}, [openModal])

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
						{value && !!value.length && (
							<CustomDataGrid
								pagination
								columns={columns}
								loading={loading}
								page={pagePrepare.page}
								pageSize={pagePrepare.size}
								rowCount={pagePrepare.rowCount}
								rows={value}
								rowsPerPageOptions={[10, 25, 50]}
								onPageChange={handlePageChange}
								onPageSizeChange={handlePageSizeChange}
							/>
						)}
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default CrudPage
