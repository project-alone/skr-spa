import { Typography, Grid, Box } from '@mui/material'
import { CodeArea } from '@styles/publishingGuide'

export const Typo: React.FC = () => {
	return (
		<>
			<Grid container spacing={2} mt={2}>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="h1">H1/Pretendard/Regular/24px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="h1"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="h2">H2/Pretendard/Semibold/18px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="h2"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="h3">H3/Pretendard/Medium/18px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="h3"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="h4">H4/Pretendard/Medium/16px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="h4"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="st1">ST1/Pretendard/Semibold/16px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="st1"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="st2">ST2/Pretendard/Semibold/14px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="st2"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="b1">B1/Pretendard/Regular/14px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="b1"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="b1">SB1/Pretendard/Medium/14px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="sb1"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="b2">B2/Pretendard/Regular/12px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="b2"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="sb2">SB2/Pretendard/Semibold/12px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="sb2"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="ct">CT/Pretendard/Light/12px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="ct"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="bt">BT/Pretendard/Medium/14px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="bt"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="ht">HT/Pretendard/Medium/10px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="ht"></Typography>
					</CodeArea>
				</Grid>
				<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography variant="label">HT/Pretendard/Medium/12px</Typography>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<Typography variant="label"></Typography>
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
