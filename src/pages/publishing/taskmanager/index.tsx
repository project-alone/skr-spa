import React from 'react'
import { styled, Grid, TextField, Stack, Divider, Pagination, Box, Button } from '@mui/material'
import { Mdi, Section, SelectField, SelectLabelHidden } from '@components/common'
import { PageTitle, TableTitle } from '@components/common/Title'
import { LayoutStyled } from '@styles/common'
import {
	DataGridPro,
	gridPageCountSelector,
	gridPageSelector,
	useGridApiContext,
	useGridSelector,
} from '@mui/x-data-grid-pro'

// icons
import { ReactComponent as IconArrowUp } from '@static/images/icons/arrow-up.svg'
import { ReactComponent as IconArrowDown } from '@static/images/icons/arrow-down.svg'
import { ReactComponent as IconFilter } from '@static/images/icons/filter.svg'

// types
import type { GridColumns } from '@mui/x-data-grid-pro'
import type { TitleDataItem } from '@pages/publishing/guide/_parts/title/PageTit'

const tabData = [
	{ type: 'home', label: 'Home', active: false },
	{ label: '직무관리', active: true },
]
const defaultData = {
	label: '사용여부',
	// select combo box 너비 지정
	style: { PaperProps: { style: { minWidth: 290, maxHeight: 160, height: 'auto' } } },
	option: ['전체'],
	disabled: false,
	isIcon: false,
}
const titleData: TitleDataItem[] = [
	{
		type: 'plain',
		path: '/',
		menu: '기준정보',
	},
	{
		type: 'bookmark',
		menu: '직무조회',
		active: true,
	},
]
const tableTitleData = {
	title: '직무조회 목록',
	desc: '12,340',
}

const FooterStyled = {
	Wrap: styled('div')(({ theme }) => ({
		display: 'flex',
		width: '100%',
		height: '44px',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderTop: `1px solid ${theme.palette.border[500]}`,
	})),
	Option: styled('div')(({ theme }) => ({
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		gap: '20px',
	})),
	Select: styled('div')(({ theme }) => ({
		width: '103px',
	})),
	Count: styled('div')(({ theme }) => ({
		color: ` ${theme.palette.primary.main}`,
	})),
}

const rows = [
	{
		id: 1,
		col1: '00001111111',
		col2: '차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관',
		col3: '차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다',
		col4: 'badge',
		col5: '홍길동',
		col6: '2022-04-01 12:00:30',
		col7: 'btn',
	},
	{
		id: 1,
		col1: '00001111111',
		col2: '차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관',
		col3: '차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다',
		col4: 'badge',
		col5: '홍길동',
		col6: '2022-04-01 12:00:30',
		col7: 'btn',
	},
	{
		id: 1,
		col1: '00001111111',
		col2: '차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관',
		col3: '차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다',
		col4: 'badge',
		col5: '홍길동',
		col6: '2022-04-01 12:00:30',
		col7: 'btn',
	},
	{
		id: 1,
		col1: '00001111111',
		col2: '차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관',
		col3: '차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다',
		col4: 'badge',
		col5: '홍길동',
		col6: '2022-04-01 12:00:30',
		col7: 'btn',
	},
	{
		id: 1,
		col1: '00001111111',
		col2: '차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관',
		col3: '차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다',
		col4: 'badge',
		col5: '홍길동',
		col6: '2022-04-01 12:00:30',
		col7: 'btn',
	},
	{
		id: 1,
		col1: '00001111111',
		col2: '차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관',
		col3: '차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다',
		col4: 'badge',
		col5: '홍길동',
		col6: '2022-04-01 12:00:30',
		col7: 'btn',
	},
]

const columns: GridColumns = [
	{ field: 'col1', headerName: '직무ID', width: 140, headerAlign: 'center', align: 'center' },
	{ field: 'col2', headerName: '직무명', width: 176, headerAlign: 'center', align: 'center' },
	{ field: 'col3', headerName: '직무설명', flex: 1, headerAlign: 'center', align: 'center' },
	{ field: 'col4', headerName: '사용여부', width: 118, headerAlign: 'center', align: 'center' },
	{ field: 'col5', headerName: '입력사용자', width: 140, headerAlign: 'center', align: 'center' },
	{
		field: 'col6',
		headerName: '최종 수정일',
		width: 176,
		headerAlign: 'center',
		align: 'center',
	},
	{ field: 'col7', headerName: ' ', width: 40, headerAlign: 'center', align: 'center' },
	// { field: "col7", headerName: "", flex: 1 },
]

const CustomPagination: React.FC = () => {
	const selectRowsPer = {
		style: {
			PaperProps: {
				style: {
					width: 103,
				},
			},
		},
		option: ['5건 보기', '10건 보기', '20건 보기'],
		disabled: false,
		isIcon: false,
		label: '',
	}
	const apiRef = useGridApiContext()
	const page = useGridSelector(apiRef, gridPageSelector)
	const pageCount = useGridSelector(apiRef, gridPageCountSelector)

	return (
		<FooterStyled.Wrap>
			<FooterStyled.Option>
				<FooterStyled.Select>
					<SelectLabelHidden {...selectRowsPer} />
				</FooterStyled.Select>
				<Pagination
					color="primary"
					count={pageCount}
					page={page + 1}
					onChange={(event, value) => apiRef.current.setPage(value - 1)}
					showFirstButton
					showLastButton
					size="small"
				/>
			</FooterStyled.Option>
		</FooterStyled.Wrap>
	)
}
export const SortedDescendingIcon: React.FC = () => {
	return <IconArrowDown className="icon" />
}
export const SortedAscendingIcon: React.FC = () => {
	return <IconArrowUp className="icon" />
}
export const ColumnMenuIcon: React.FC = () => {
	return <IconFilter className="icon" />
}

const MuiGridTable: React.FC = () => {
	const [pageSize, setPageSize] = React.useState(5)
	const DataGridStyle = styled(Box)(({ theme }) => ({
		width: '100%',
		height: '284px',
	}))

	return (
		<DataGridStyle>
			<DataGridPro
				pageSize={pageSize}
				onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
				rowsPerPageOptions={[5, 10, 20]}
				rows={rows}
				columns={columns}
				components={{
					Footer: CustomPagination,
					ColumnSortedDescendingIcon: SortedDescendingIcon,
					ColumnSortedAscendingIcon: SortedAscendingIcon,
					ColumnMenuIcon: ColumnMenuIcon,
				}}
			/>
		</DataGridStyle>
	)
}

const TaskManagePage: React.FC = () => {
	return (
		<>
			<Mdi tabData={tabData} />
			<LayoutStyled.Page>
				<PageTitle titleData={titleData}></PageTitle>
				<Stack spacing={30}>
					<Section variant="search">
						<Grid container columnSpacing={20}>
							<Grid item xs={3}>
								<SelectField {...defaultData} />
							</Grid>
							<Grid item xs={9}>
								<TextField label="직무명" placeholder="직무명" />
							</Grid>
						</Grid>
					</Section>
					<Section variant="data">
						<Box pb={10}>
							<TableTitle {...tableTitleData}>
								<Button color="primary" variant="contained">
									직무등록
								</Button>
							</TableTitle>
						</Box>
						<Box pt={15} pb={15}>
							<Divider sx={{ pt: 30 }} />
						</Box>
						<Grid container>
							<Grid item xs={12}>
								<MuiGridTable />
							</Grid>
						</Grid>
					</Section>
				</Stack>
			</LayoutStyled.Page>
		</>
	)
}

export default TaskManagePage
