import React from 'react'
import { DataGridPro, GridRowsProp, GridColDef } from '@mui/x-data-grid-pro'
import { CustomPagination } from '@components/common/table/CustomPagination'
import * as Icons from '@components/common/table/Icons'

// types
import type { DataGridProProps } from '@mui/x-data-grid-pro'

const rows: GridRowsProp = [
	{
		id: 1,
		col1: 'Body',
		col2: 'Body',
		col3: 'Body',
		col4: 'Body',
		col5: 'Body',
		col6: 'Body',
		col7: 'Body',
		col8: 'Body',
	},
	{
		id: 2,
		col1: '',
		col2: '',
		col3: '',
		col4: '',
		col5: '',
		col6: '',
		col7: '',
		col8: '',
	},
	{ id: 3, col1: 'MUI', col2: 'is Amazing' },
	{ id: 4, col1: 'MUI', col2: 'is Amazing' },
	{ id: 5, col1: 'MUI', col2: 'is Amazing' },
	{ id: 6, col1: 'MUI', col2: 'is Amazing' },
	{ id: 7, col1: 'MUI', col2: 'is Amazing' },
	{ id: 8, col1: 'MUI', col2: 'is Amazing' },
]

const columns: GridColDef[] = [
	{ field: 'col1', headerName: 'Header', flex: 1 },
	{ field: 'col2', headerName: 'Header', flex: 1 },
	{ field: 'col3', headerName: 'Header', flex: 1 },
	{ field: 'col4', headerName: 'Header', flex: 1 },
	{ field: 'col5', headerName: 'Header', flex: 1 },
	{ field: 'col6', headerName: 'Header', flex: 1 },
	{ field: 'col7', headerName: 'Header', flex: 1 },
	{ field: 'col8', headerName: 'Header', flex: 1 },
]

type DataGridProps = Omit<DataGridProProps, 'rows' | 'columns'>

export const DataGrid: React.FC<DataGridProps> = () => {
	const [pageSize, setPageSize] = React.useState(5)

	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGridPro
				pageSize={pageSize}
				onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
				rowsPerPageOptions={[5, 10, 20]}
				rows={rows}
				columns={columns}
				components={{
					Footer: CustomPagination,
					ColumnSortedDescendingIcon: Icons.SortedDescending,
					ColumnSortedAscendingIcon: Icons.SortedAscending,
					ColumnMenuIcon: Icons.ColumnMenu,
				}}
				checkboxSelection
			/>
		</div>
	)
}
