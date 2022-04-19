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

export function computeProps(): DataGridDefaultProps {
	const props: DataGridDefaultProps = {
		autoHeight: true,
		localeText: koKR.components.MuiDataGrid.defaultProps.localeText,
		rowsPerPageOptions: [10],
		paginationMode: 'server',
	}
	return props
}

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

		const paginationProps = pagination
			? {
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
			...computeProps(),
			...restProps,
			...paginationProps,
		}
	}, [onChangePagination, pagination, restProps])

	return (
		<Box sx={{ width: '100%', minHeight: 550, position: 'relative' }}>
			<GridLoading loading={!!restProps.loading} />
			<DataGridPro {...combinedProps} />
		</Box>
	)
}
