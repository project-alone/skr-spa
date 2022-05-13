import React from 'react'
import { Grid, TextField, Stack, Button } from '@mui/material'
import { Mdi, Section, SelectField } from '@components/common'
import { PageTitle, TableTitle } from '@components/common/Title'
import { LayoutStyled } from '@styles/common'

// icons
import { ReactComponent as IconPencil } from '@static/images/icons/pencil.svg'
import { ReactComponent as IconExcel } from '@static/images/icons/excel.svg'

// types
import type { TitleDataItem } from '@pages/publishing/guide/_parts/title/PageTit'

const tabData = [
	{ type: 'home', label: 'Home', active: false },
	{ label: '사용자조회', active: true },
]
const titleData: TitleDataItem[] = [
	{
		type: 'plain',
		path: '/',
		menu: '사용자',
	},
	{
		type: 'bookmark',
		menu: '사용자조회',
		active: true,
	},
]
const tableTitleData = {
	title: '고객정보',
	desc: '12,340',
}
const defaultData = {
	label: '사용자구분',
	// select combo box 너비 지정
	style: { PaperProps: { style: { minWidth: 290, maxHeight: 160, height: 'auto' } } },
	option: ['전체', '일반사용자', '채널사용자', '시스템관리자'],
	disabled: false,
	isIcon: false,
}

const UserInquiryPage: React.FC = () => {
	return (
		<>
			<Mdi tabData={tabData} />
			<LayoutStyled.Page>
				<PageTitle titleData={titleData}>
					<Stack direction="row" spacing={8}>
						<Button color="primary" variant="contained" endIcon={<IconPencil />}>
							등록
						</Button>
					</Stack>
				</PageTitle>
				<Section variant="search">
					<Grid container spacing={20}>
						<Grid item xs={3}>
							<TextField label="로그인ID" placeholder="로그인ID 입력" />
						</Grid>
						<Grid item xs={3}>
							<TextField label="사번" placeholder="사번 입력" />
						</Grid>
						<Grid item xs={3}>
							<TextField label="사용자명" placeholder="사용자명 입력" />
						</Grid>
						<Grid item xs={3}>
							<SelectField {...defaultData} />
						</Grid>
					</Grid>
				</Section>
				<Section variant="data">
					<TableTitle {...tableTitleData}>
						<Button color="excel" variant="contained" endIcon={<IconExcel />}>
							엑셀다운로드
						</Button>
					</TableTitle>
				</Section>
			</LayoutStyled.Page>
		</>
	)
}

export default UserInquiryPage
