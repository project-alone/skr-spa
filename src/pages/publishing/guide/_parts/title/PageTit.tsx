import React from 'react'
import { styled, Grid, Box, Stack, Button } from '@mui/material'
import { PageTitle } from '@components/common/Title'
import { CodeArea } from '@styles/publishingGuide'

// types
import type { To } from 'react-router-dom'

export interface TitleDataItem {
	type: 'bookmark' | 'current' | 'plain'
	active?: boolean
	path?: To
	menu: string
}

export const PageTit = () => {
	const [titleData] = React.useState<TitleDataItem[]>([
		{
			type: 'plain',
			path: '/',
			menu: '즐겨찾기 메뉴 1',
		},
		{
			type: 'plain',
			path: '/',
			menu: '다운로드 양식 1',
		},
		{
			type: 'bookmark',
			menu: '다운로드 메뉴얼 1',
			active: true,
		},
	])

	return (
		<>
			<Grid container spacing={2} mt={2}>
				<Grid item xs={8}>
					<PageTitle titleData={titleData}>
						<Stack direction="row" spacing={8}>
							<Button color="primary" variant="contained">
								Button
							</Button>
							<Button color="primary" variant="contained">
								Button
							</Button>
							<Button color="primary" variant="contained">
								Button
							</Button>
						</Stack>
					</PageTitle>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<PageTitle titleData={titleData}>
							<Stack direction="row" spacing={8}>
								<Button color="primary" variant="contained">
									Button
								</Button>
								<Button color="primary" variant="contained">
									Button
								</Button>
							</Stack>
						</PageTitle>
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}