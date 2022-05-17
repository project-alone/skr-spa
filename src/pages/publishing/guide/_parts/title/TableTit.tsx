import { Grid, Box, Typography, Button, Stack } from '@mui/material'
import { TableTitle } from '@components/common/Title'
import { CodeArea } from '@styles/publishingGuide'
import { ReactComponent as IconExcel } from '@static/images/icons/excel.svg'

const tableTitleData = {
	title: '고객정보',
	desc: '12,340',
}

export const TableTit = () => {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<TableTitle {...tableTitleData}>
						<Button color="excel" variant="contained" endIcon={<IconExcel />}>
							엑셀다운로드
						</Button>
					</TableTitle>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<TableTitle title="고객정보" desc="12,340">
							<Button color="excel" variant="contained" endIcon={<IconExcel />}>
								엑셀다운로드
							</Button>
						</TableTitle>
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
