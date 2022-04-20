import { Box, Pagination } from '@mui/material'
import {
	DataGridPro,
	GridCallbackDetails,
	GridRowScrollEndParams,
	koKR,
	MuiEvent,
} from '@mui/x-data-grid-pro'
import { GridLoading } from '@pages/example/board/_parts/GridLoading'
import React from 'react'
import type { DataGridProProps } from '@mui/x-data-grid-pro'

type DataGridDefaultProps = Omit<DataGridProProps, 'rows' | 'columns'>

export type ComputedDataGridProps = Omit<
	DataGridProProps,
	| 'components'
	| 'componentsProps'
	| 'autoHeight'
	| 'localeText'
	| 'rowsPerPageOptions'
	| 'paginationMode'
> & {
	onChangePagination?: (page: number) => void
	onRowsScrollEnd?: (
		params: GridRowScrollEndParams,
		event: MuiEvent<Record<string, unknown>>,
		details: GridCallbackDetails,
	) => void
}

export const CustomDataGrid: React.FC<ComputedDataGridProps> = ({
	onChangePagination = () => {
		/** nothing */
	},
	onRowsScrollEnd = () => {
		/** nothing */
	},
	pagination,
	...restProps
}) => {
	const combinedProps = React.useMemo(() => {
		const count = Math.ceil((restProps.rowCount as number) / (restProps.pageSize as number))

		const computeProps: DataGridDefaultProps = {
			localeText: koKR.components.MuiDataGrid.defaultProps.localeText,
			rowsPerPageOptions: [10, 25, 50, 100],
			paginationMode: 'server',
		}

		const paginationProps = pagination
			? {
					autoHeight: true,
					pagination,
					components: {
						Pagination: Pagination,
					},
					componentsProps: {
						pagination: {
							count,
							page: restProps.page,
							onChange: (event: React.ChangeEvent<unknown>, changedPage: number) => {
								onChangePagination(changedPage)
							},
						},
					},
			  }
			: {
					onRowsScrollEnd,
			  }

		return {
			...computeProps,
			...restProps,
			...paginationProps,
		}
	}, [onChangePagination, onRowsScrollEnd, pagination, restProps])

	return (
		<Box style={{ width: '100%', height: 550, position: 'relative' }}>
			<GridLoading loading={!!restProps.loading} />
			<DataGridPro {...combinedProps} />
		</Box>
	)
}
