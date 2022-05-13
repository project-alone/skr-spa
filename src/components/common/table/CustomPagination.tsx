import React from 'react'
import { Pagination, styled, Typography } from '@mui/material'
import {
	gridPageCountSelector,
	gridPageSelector,
	useGridApiContext,
	useGridSelector,
} from '@mui/x-data-grid-pro'
import { SelectLabelHidden } from '@components/common'

const FooterWrap = styled('div')(({ theme }) => ({
	display: 'flex',
	width: '100%',
	height: '44px',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderTop: `1px solid ${theme.palette.border[500]}`,
}))
const FooterOption = styled('div')(({ theme }) => ({
	flex: 1,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	gap: '20px',
}))
const FooterSelect = styled('div')(({ theme }) => ({
	width: '103px',
}))
const FooterCount = styled('span')(({ theme }) => ({
	color: ` ${theme.palette.primary.main}`,
}))

export const CustomPagination: React.FC = () => {
	const apiRef = useGridApiContext()
	const page = useGridSelector(apiRef, gridPageSelector)
	const pageCount = useGridSelector(apiRef, gridPageCountSelector)

	const handleChangePagination = React.useCallback(
		(event, value) => {
			apiRef.current.setPage(value - 1)
		},
		[apiRef],
	)

	return (
		<FooterWrap>
			<Typography variant="b2">
				<FooterCount>0</FooterCount>
				<span>건 선택됨</span>
			</Typography>
			<FooterOption>
				<FooterSelect>
					<SelectLabelHidden
						label="mui-list-count"
						style={{
							PaperProps: {
								style: {
									width: 103,
								},
							},
						}}
						option={['5건 보기', '10건 보기', '20건 보기']}
						isIcon={false}
					/>
				</FooterSelect>
				<Pagination
					color="primary"
					count={pageCount}
					page={page + 1}
					onChange={handleChangePagination}
					showFirstButton
					showLastButton
					size="small"
				/>
			</FooterOption>
		</FooterWrap>
	)
}
