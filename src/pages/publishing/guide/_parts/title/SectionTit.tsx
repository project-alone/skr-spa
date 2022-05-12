import { styled, Grid, Box, Typography } from '@mui/material'
import { SectionTitle } from '@components/common'

const CodeBox = styled(Box)(({ theme }) => ({
	backgroundColor: `${theme.palette.grey[700]}`,
	color: `${theme.palette.grey[0]}`,
	padding: '10px',
	borderRadius: '4px',
}))
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
					<CodeBox>
						&lt;SectionTitle <b>title="섹션별 타이틀"</b>/&gt;
					</CodeBox>
				</Grid>
			</Grid>
			<ConditionTitle mt={4}>제목에 부가적인 설명이 있는 경우</ConditionTitle>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<SectionTitle title="섹션별 타이틀" caption="(계약번호: 111111111111)" />
				</Grid>
				<Grid item xs={4}>
					<CodeBox>
						&lt;SectionTitle <br />
						<b>
							&nbsp;title="섹션별 타이틀"
							<br />
							&nbsp;caption="(계약번호: 111111111111)"
						</b>
						<br />
						/&gt;
					</CodeBox>
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
					<CodeBox>
						&lt;SectionTitle <br />
						<b>
							&nbsp;title="섹션별 타이틀"
							<br />
							&nbsp;btn=&#123;&#123; name: "버튼이름", color: "default", style:
							"contained"
						</b>
						&#125;&#125;
						<br />
						/&gt;
					</CodeBox>
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
					<CodeBox>
						&lt;SectionTitle <br />
						<b>
							&nbsp;title="페이지 타이틀"
							<br />
							&nbsp;caption="(계약번호: 111111111111)"
							<br />
							&nbsp;btn=&#123;&#123; name: "버튼이름", color: "default", style:
							"outlined"
						</b>
						&#125;&#125;
						<br />
						/&gt;
					</CodeBox>
				</Grid>
			</Grid>
		</>
	)
}
