import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
	Box,
	Typography,
	Container,
	Divider,
	OutlinedInput,
	IconButton,
	Tooltip,
	FormControl,
	InputAdornment,
	Button,
	FormHelperText,
	styled,
} from '@mui/material'
import {
	Facebook as FacebookIcon,
	Twitter as TwitterIcon,
	Instagram as InstagramIcon,
	MailTwoTone as MailTwoToneIcon,
} from '@mui/icons-material'
import { LogoSign } from '@components/common'

const MainContent = styled(Box)(
	() => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,
)

const TypographyH1 = styled(Typography)(
	({ theme }) => `
  font-size: ${theme.typography.pxToRem(75)};
`,
)

const TypographyH3 = styled(Typography)(
	({ theme }) => `
  color: ${theme.colors.alpha.black[50]};
`,
)

const OutlinedInputWrapper = styled(OutlinedInput)(
	({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`,
)

const ButtonNotify = styled(Button)(
	({ theme }) => `
    margin-right: -${theme.spacing(1)};
`,
)

interface TimeLeftType {
	days: number
	hours: number
	minutes: number
	seconds: number
}

function StatusComingSoon() {
	const calculateTimeLeft = () => {
		const difference = +new Date(`2022`) - +new Date()
		let timeLeft: TimeLeftType

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			}
		} else {
			timeLeft = {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			}
		}

		return timeLeft
	}

	const [timeLeft, setTimeLeft] = React.useState<TimeLeftType>(calculateTimeLeft())

	React.useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)
	})

	const timerComponents: React.ReactNode[] = []

	Object.keys(timeLeft).forEach((interval) => {
		const typedInterval = interval as keyof TimeLeftType
		if (!timeLeft[typedInterval]) {
			return
		}

		timerComponents.push(
			<Box textAlign="center" px={3}>
				<TypographyH1 variant="h1">{timeLeft[typedInterval]}</TypographyH1>
				<TypographyH3 variant="h3">{interval}</TypographyH3>
			</Box>,
		)
	})

	return (
		<>
			<Helmet>
				<title>Status - Coming Soon</title>
			</Helmet>
			<MainContent>
				<Container maxWidth="md">
					<LogoSign />
					<Box textAlign="center" mb={3}>
						<Container maxWidth="xs">
							<Typography variant="h1" sx={{ mt: 4, mb: 2 }}>
								Coming Soon
							</Typography>
							<Typography
								variant="h3"
								color="text.secondary"
								fontWeight="normal"
								sx={{ mb: 4 }}>
								We're working on implementing the last features before our launch!
							</Typography>
						</Container>
						<img
							alt="Coming Soon"
							height={200}
							src="/static/images/status/coming-soon.svg"
						/>
					</Box>

					<Box display="flex" justifyContent="center">
						{timerComponents.length ? timerComponents : <>Time's up!</>}
					</Box>

					<Container maxWidth="sm">
						<Box sx={{ textAlign: 'center', p: 4 }}>
							<FormControl variant="outlined" fullWidth>
								<OutlinedInputWrapper
									type="text"
									placeholder="Enter your email address here..."
									endAdornment={
										<InputAdornment position="end">
											<ButtonNotify variant="contained" size="small">
												Notify Me
											</ButtonNotify>
										</InputAdornment>
									}
									startAdornment={
										<InputAdornment position="start">
											<MailTwoToneIcon />
										</InputAdornment>
									}
								/>
								<FormHelperText>
									We'll email you once our website is launched!
								</FormHelperText>
							</FormControl>
							<Divider sx={{ my: 4 }} />
							<Box sx={{ textAlign: 'center' }}>
								<Tooltip arrow placement="top" title="Facebook">
									<IconButton color="primary">
										<FacebookIcon />
									</IconButton>
								</Tooltip>
								<Tooltip arrow placement="top" title="Twitter">
									<IconButton color="primary">
										<TwitterIcon />
									</IconButton>
								</Tooltip>
								<Tooltip arrow placement="top" title="Instagram">
									<IconButton color="primary">
										<InstagramIcon />
									</IconButton>
								</Tooltip>
							</Box>
						</Box>
					</Container>
				</Container>
			</MainContent>
		</>
	)
}

export default StatusComingSoon
