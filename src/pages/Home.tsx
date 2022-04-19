import React from 'react'
import { Helmet } from 'react-helmet-async'

import { Backdrop, Box, CircularProgress, Container, Grid, Pagination, styled } from '@mui/material'
import { DataGrid, DataGridProps, koKR } from '@mui/x-data-grid'
import { PageTitle, PageTitleWrapper } from '@components/common'

import useAsync from '@hooks/useAsync'
import { setTest } from '@root/shared/fetch/test'

import type { GridColumns, GridCallbackDetails } from '@mui/x-data-grid'

// const StyledDataGrid = styled(DataGrid)((theme) => `

// `)

const CustomPagination: React.FC = (props) => {
	console.log(props)
	return <Pagination count={10} showFirstButton showLastButton />
}

const GridLoading: React.FC<{ loading: boolean }> = ({ loading = false }) => {
	return (
		<Backdrop open={loading} sx={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
			<CircularProgress color="inherit" />
		</Backdrop>
	)
}

const CustomDataGrid: React.FC<DataGridProps> = (props) => {
	return (
		<Box sx={{ width: '100%', minHeight: 550, position: 'relative' }}>
			<GridLoading loading={!!props.loading} />
			<DataGrid {...props} />
		</Box>
	)
}

const HomePage: React.FC = () => {
	const [columns] = React.useState<GridColumns>([
		{ field: 'country' },
		{ field: 'established', width: 120 },
		{ field: 'head_quaters', flex: 1 },
		{
			field: 'logo',
			flex: 1,
			renderCell(logo) {
				return <img alt="이미지" style={{ width: '100px' }} src={logo.value} />
			},
		},
		{ field: 'name', flex: 1 },
		{ field: 'slogan', flex: 1 },
		{
			field: 'website',
			flex: 1,
			renderCell(website) {
				return <a href="javascript;">{website.value}</a>
			},
		},
	])

	const [pagePrepare, setPagePrepare] = React.useState<
		Record<'page' | 'size' | 'rowCount', number>
	>({
		page: 0,
		size: 10,
		rowCount: 0,
	})
	const { loading, value, error } = useAsync(async () => {
		const res = await setTest({ page: pagePrepare.page + 1, size: pagePrepare.size })
		setPagePrepare((state) => ({ ...state, rowCount: res.rowCount }))

		return res
	}, [pagePrepare.page, pagePrepare.size])

	const handlePageChange = React.useCallback((page: number, details: GridCallbackDetails) => {
		console.log(page, details)
		setPagePrepare((state) => ({ ...state, page }))
	}, [])

	return (
		<>
			<Helmet>
				<title>Buttons - Components</title>
			</Helmet>
			<PageTitleWrapper>
				<PageTitle
					heading="Index"
					subHeading="examples for data-table"
					docs="https://material-ui.com/components/buttons/"
				/>
			</PageTitleWrapper>
			<Container maxWidth="lg">
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="stretch"
					spacing={3}>
					<Grid item width="100%">
						<CustomDataGrid
							loading={loading}
							components={{
								Pagination: Pagination,
							}}
							componentsProps={{
								pagination: {
									count: Math.ceil(pagePrepare.rowCount / pagePrepare.size),
									page: pagePrepare.page,
									onChange: (event: React.ChangeEvent<unknown>, page: number) => {
										setPagePrepare((state) => ({ ...state, page }))
									},
								},
							}}
							autoHeight
							localeText={koKR.components.MuiDataGrid.defaultProps.localeText}
							page={pagePrepare.page}
							pageSize={pagePrepare.size}
							rowCount={pagePrepare.rowCount}
							columns={columns}
							rows={value?.list || []}
							onPageChange={handlePageChange}
							rowsPerPageOptions={[10]}
							paginationMode="server"
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default HomePage
