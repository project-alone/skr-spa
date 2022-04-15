import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { users } from '@store/slices/users'

import { Button, Container, Grid } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { PageTitle, PageTitleWrapper } from '@components/common'

import type { GridColumns } from '@mui/x-data-grid'

const HomePage: React.FC = () => {
	const dispatch = useAppDispatch()
	const userList = useAppSelector((state) => {
		const user = state.users.user
		return user ?? []
	})
	const [columns] = React.useState<GridColumns>([
		{ field: 'id' },
		{ field: 'title' },
		{ field: 'client' },
		{ field: 'area' },
		{ field: 'country' },
		{
			field: 'contact',
			renderCell(contact) {
				return <a href="javascript;">{contact.value}</a>
			},
		},
		{ field: 'assignee' },
	])

	const getUser = async () => {
		// console.log(users())
		await dispatch(users())
	}

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
					<Button color="primary" onClick={getUser}>
						회원 정보 불러오기
					</Button>
					<DataGrid columns={columns} rows={userList} />
				</Grid>
			</Container>
		</>
	)
}

export default HomePage
