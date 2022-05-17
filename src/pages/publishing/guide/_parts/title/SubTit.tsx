import { Grid, Typography, Button, Stack } from '@mui/material'
import { SubTitle } from '@components/common/Title'
import { CodeArea } from '@styles/publishingGuide'

const TitleDefault = {
	title: '고객정보',
	toggle: false,
	tooltip: false,
}
const TitleToggle = {
	title: '고객정보',
	toggle: true,
	tooltip: false,
}
const TitleTooltip = {
	title: '고객정보',
	toggle: false,
	tooltip: true,
}
const TitleOption = {
	title: '고객정보',
	toggle: true,
	tooltip: true,
}
const TitleDesc = {
	title: '고객정보',
	desc: '(계약번호: 111111111111)',
	toggle: false,
	tooltip: false,
}
const TitleToggleDesc = {
	title: '고객정보',
	desc: '(계약번호: 111111111111)',
	toggle: true,
	tooltip: false,
}
const TitleTooltipDesc = {
	title: '고객정보',
	desc: '(계약번호: 111111111111)',
	toggle: false,
	tooltip: true,
}
const TitleOptionDesc = {
	title: '고객정보',
	desc: '(계약번호: 111111111111)',
	toggle: true,
	tooltip: true,
}

const Test = () => {
	return (
		<div className="wow">
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aliquam!</p>
		</div>
	)
}

export const SubTit = () => {
	return (
		<>
			<Typography variant="h3" pb={12}>
				Default
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<SubTitle {...TitleDefault} />
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<SubTitle title="고객정보" toggle={false} tooltip={false} />
					</CodeArea>
				</Grid>
			</Grid>
			<Typography variant="h3" pb={12}>
				Toggle
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={8}>
					<SubTitle {...TitleToggle} />
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<SubTitle title="고객정보" toggle={true} tooltip={false} />
					</CodeArea>
				</Grid>
			</Grid>
			<Typography variant="h3" pb={12}>
				Tooltip
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={8}>
					<SubTitle {...TitleTooltip} />
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<SubTitle title="고객정보" toggle={false} tooltip={true} />
					</CodeArea>
				</Grid>
			</Grid>
			<Typography variant="h3" pb={12}>
				Toggle & Tooltip
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={8}>
					<SubTitle {...TitleOption} />
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<SubTitle title="고객정보" toggle={true} tooltip={true} />
					</CodeArea>
				</Grid>
			</Grid>
			<Typography variant="h3" pb={12}>
				Button
			</Typography>

			<Grid container spacing={2} pb={20}>
				<Grid item xs={8}>
					<Stack spacing={20}>
						<SubTitle {...TitleToggle}>
							<Button color="primary" variant="outlined">
								Button
							</Button>
						</SubTitle>
						<SubTitle {...TitleOption}>
							<Button color="primary" variant="outlined">
								Button
							</Button>
						</SubTitle>
					</Stack>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						<SubTitle title="고객정보" toggle={true} tooltip={false}>
							<Button color="primary" variant="outlined">
								Button
							</Button>
						</SubTitle>

						<SubTitle title="고객정보" toggle={true} tooltip={false}>
							<Button color="primary" variant="outlined">
								Button
							</Button>
						</SubTitle>
					</CodeArea>
				</Grid>
			</Grid>
			<Typography variant="h3" pb={12}>
				Description
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Stack spacing={20}>
						<SubTitle {...TitleDesc} />
						<SubTitle {...TitleToggleDesc} />
						<SubTitle {...TitleTooltipDesc} />
						<SubTitle {...TitleOptionDesc} />
						<SubTitle {...TitleDesc}>
							<Button color="primary" variant="outlined">
								Button
							</Button>
						</SubTitle>
						<SubTitle {...TitleToggleDesc}>
							<Button color="primary" variant="outlined">
								Button
							</Button>
						</SubTitle>
					</Stack>
				</Grid>
				<Grid item xs={4}>
					<CodeArea>
						{`<SubTitle {...TitleDesc} />
<SubTitle {...TitleToggleDesc} />
<SubTitle {...TitleTooltipDesc} />
<SubTitle {...TitleOptionDesc} />
<SubTitle {...TitleDesc}>
  <Button color="primary" variant="outlined">Button</Button>
</SubTitle>
<SubTitle {...TitleToggleDesc}>
  <Button color="primary" variant="outlined">Button</Button>
</SubTitle>`}
					</CodeArea>
				</Grid>
			</Grid>
		</>
	)
}
