import { styled, Grid, Box, Typography } from '@mui/material'
import { SectionTitle } from '@components/common'
import { CodeArea } from '@styles/publishingGuide'

const ConditionTitle = styled(Typography)(
	({ theme }) => `
  font-size: 1.142rem;
  font-weight: 700;
  color: ${theme.palette.primary.light400}
`,
)

export const SectionTit = () => {
	return (
		<>
			<ConditionTitle mt={4}>기본</ConditionTitle>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<SectionTitle title="섹션별 타이틀" />
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<SectionTitle title="섹션별 타이틀" />
					</CodeArea>
				</Grid>
			</Grid>
			<ConditionTitle mt={4}>제목에 부가적인 설명이 있는 경우</ConditionTitle>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<SectionTitle title="섹션별 타이틀" caption="(계약번호: 111111111111)" />
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<SectionTitle title="섹션별 타이틀" caption="(계약번호: 111111111111)" />
					</CodeArea>
				</Grid>
			</Grid>
			<ConditionTitle mt={4}>제목에 버튼이 있는 경우</ConditionTitle>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<SectionTitle
						title="섹션별 타이틀"
						btn={{
							name: '버튼이름',
							color: 'default',
							style: 'contained',
						}}
					/>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<SectionTitle
							title="섹션별 타이틀"
							btn={{ name: '버튼이름', color: 'default', style: 'contained' }}
						/>
					</CodeArea>
				</Grid>
			</Grid>
			<ConditionTitle mt={4}>제목에 부가적인 설명과 버튼이 있는 경우</ConditionTitle>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<SectionTitle
						title="섹션별 타이틀"
						caption="(계약번호: 111111111111)"
						btn={{
							name: '버튼이름',
							color: 'default',
							style: 'outlined',
						}}
					/>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<SectionTitle
							title="페이지 타이틀"
							caption="(계약번호: 111111111111)"
							btn={{ name: '버튼이름', color: 'default', style: 'outlined' }}
						/>
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
