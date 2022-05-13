import { styled, Grid, Box, Stack, Divider, TextField, InputAdornment } from '@mui/material'
import { Mdi, Section, DataGrid, IconButton } from '@components/common'
import { PageTitle, SubTitle } from '@components/common/Title'
import { DefaultTextField, LayoutStyled } from '@styles/common'
// iconst
import { ReactComponent as IconChevronForward } from '@static/images/icons/chevron-forward.svg'
import { ReactComponent as IconChevronBack } from '@static/images/icons/chevron-back.svg'
import { ReactComponent as IconSearch } from '@static/images/icons/search.svg'

// types
import type { TitleDataItem } from '@pages/publishing/guide/_parts/title/PageTit'

const tabData = [
	{ type: 'home', label: 'Home', active: false },
	{ label: '직무관리', active: true },
]
const TitleDefault = {
	title: '직무상세',
	toggle: false,
	tooltip: false,
}
const TransferStyled = {
	Container: styled(Box)(() => ({
		// position: "relative",
	})),
	Wrap: styled(Grid)(() => ({
		minHeight: '381px',
	})),
	BtnWrap: styled(Box)(() => ({
		position: 'absolute',
		top: '179px',
		left: '50%',
		transform: 'translateX(-50%)',
		width: '24px',
	})),
	Btn: styled(IconButton)(() => ({
		'&:first-of-type': {
			marginBottom: '15px',
		},
	})),
}
const titleData: TitleDataItem[] = [
	{
		type: 'plain',
		path: '/',
		menu: '기준정보',
	},
	{
		type: 'bookmark',
		menu: '직무등록',
		active: true,
	},
]

const TaskRegisterPage: React.FC = () => {
	return (
		<>
			<Mdi tabData={tabData} />
			<LayoutStyled.Page>
				<PageTitle titleData={titleData}></PageTitle>
				<Stack spacing={30}>
					<Section variant="default">
						<SubTitle {...TitleDefault} />
						<Box pt={15} pb={15}>
							<Divider />
						</Box>
						<Grid container rowSpacing={16} columnSpacing={15}>
							<Grid item xs={3}>
								<DefaultTextField
									label="직무명"
									placeholder="직무명"
									value="차정영업"
								/>
							</Grid>
							<Grid item xs={3}>
								<DefaultTextField
									label="사용여부"
									placeholder="사용여부"
									value="사용여부"
								/>
							</Grid>
							<Grid item xs={12}>
								<DefaultTextField
									label="직무설명"
									placeholder="직무설명"
									value="직무설명을 위한 공간"
								/>
							</Grid>
						</Grid>
					</Section>
					<Section variant="default">
						<TransferStyled.Container>
							<Grid container columnSpacing={64}>
								<TransferStyled.Wrap item xs={6}>
									권한설정
									<Divider />
									<DataGrid />
								</TransferStyled.Wrap>
								<TransferStyled.Wrap item xs={6}>
									권한선택
									<Divider />
									<TextField
										hiddenLabel
										fullWidth
										placeholder="검색할 권한을 입력해주세요"
										defaultValue=""
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<IconButton color="function">
														<IconSearch />
													</IconButton>
												</InputAdornment>
											),
										}}
									/>
									<DataGrid />
								</TransferStyled.Wrap>
							</Grid>
							<TransferStyled.BtnWrap>
								<TransferStyled.Btn
									color="function"
									variant="outlined"
									size="small">
									<IconChevronForward />
								</TransferStyled.Btn>
								<TransferStyled.Btn
									color="function"
									variant="outlined"
									size="small">
									<IconChevronBack />
								</TransferStyled.Btn>
							</TransferStyled.BtnWrap>
						</TransferStyled.Container>
					</Section>
				</Stack>
			</LayoutStyled.Page>
		</>
	)
}

export default TaskRegisterPage
