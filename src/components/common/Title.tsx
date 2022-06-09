import {
	Typography,
	Breadcrumbs,
	IconButton,
	ToggleButton,
	ButtonGroup,
	Stack,
	Collapse,
	Divider,
	Chip,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { IconChevron, IconBookmark } from '@components/common/ui/Icons'

import {
	PageTitleWrap,
	PageTitleItem,
	SubTitleWrap,
	SubTitleArea,
} from '@components/common/title/Title.styled'

export const PageTitle = ({ titleData, children, ...rest }) => {
	const [selected, setSelected] = React.useState(false)

	return (
		<PageTitleWrap>
			<Breadcrumbs separator={<IconChevron />} aria-label="breadcrumb">
				{titleData.map((title, idx) => {
					switch (title.type) {
						case 'bookmark':
							return (
								<PageTitleItem>
									<Typography variant="h2" color="grey.900">
										{title.menu}
									</Typography>
									<ToggleButton
										color="standard"
										value="check"
										selected={selected}
										onChange={() => {
											setSelected(!selected)
										}}>
										<IconBookmark />
									</ToggleButton>
								</PageTitleItem>
							)
							break
						case 'current':
							return (
								<div key={idx}>
									<Typography variant="h2" color="grey.900">
										{title.menu}
									</Typography>
								</div>
							)
							break
						default:
							return (
								<Link to={title.path} key={idx}>
									<Typography variant="h3" color="grey.600">
										{title.menu}
									</Typography>
								</Link>
							)
							break
					}
				})}
			</Breadcrumbs>
			{children}
		</PageTitleWrap>
	)
}

export const SubTitle = ({ titleData, buttonGroup, children }) => {
	const subTit = SubTitleStyle()
	const [selected, setSelected] = React.useState(false)

	return (
		<>
			<div className={subTit.wrap}>
				<div className={subTit.title}>
					<Typography variant="h4">{titleData.title}</Typography>
					{/* isDescription */}
					{titleData.desc && (
						<Typography variant="b1" className={subTit.desc}>
							{titleData.desc}
						</Typography>
					)}
				</div>
				<Stack direction="row" spacing={8}>
					{/* 0512 이슈 */}
					{/* Button Children to custom */}
					{buttonGroup}
					{/* Optional Button */}
					{/* isToggle */}
					{titleData.toggle && !titleData.tooltip && (
						<ToggleButton
							value="check"
							selected={selected}
							onChange={() => {
								setSelected(!selected)
							}}
							checked={selected}>
							<IconChevronDown className={!selected ? null : subTit.toggle} />
						</ToggleButton>
					)}
					{/* isTooltip */}
					{!titleData.toggle && titleData.tooltip && (
						<IconButton color="primaryOutlined">
							<IconInfo />
						</IconButton>
					)}
					{/* all */}
					{titleData.toggle && titleData.tooltip && (
						<ButtonGroup variant="outlined">
							<IconButton color="sub">
								<IconInfo />
							</IconButton>
							<ToggleButton
								value="check"
								selected={selected}
								onChange={() => {
									setSelected(!selected)
								}}
								checked={selected}>
								<IconChevronDown className={!selected ? null : subTit.toggle} />
							</ToggleButton>
						</ButtonGroup>
					)}
				</Stack>
			</div>
			{titleData.toggle && (
				<Collapse in={selected}>
					<Divider variants="section15" />
					{/* Collapse Children to custom */}
					{children}
				</Collapse>
			)}
		</>
	)
}
export const TableTitle = ({ titleData, children }) => {
	const tableTit = TableTitleStyle()
	let Desc
	if (titleData.desc.isShow) {
		Desc = (
			<Typography variant="b1" className={tableTit.desc}>
				{titleData.desc.content}
				<span>건</span>
			</Typography>
		)
	}
	return (
		<div className={tableTit.wrap}>
			<div className={tableTit.title}>
				<Typography variant="h4">{titleData.title}</Typography>
				{Desc}
			</div>
			<Stack direction="row" spacing={5}>
				{children}
			</Stack>
		</div>
	)
}
export const SectionTitle = ({ titleData, children }) => {
	return (
		<LySectionTitle>
			<LySectionContent>
				{/* is Badge */}
				{titleData.badge && (
					<Chip
						color={titleData.badge.color}
						variant={titleData.badge.variant}
						label={titleData.badge.title}
						mr={5}
					/>
				)}
				<Typography variant="h3" color="grey.900">
					{titleData.title}
				</Typography>
				{/* is Description */}
				{titleData.desc && (
					<Typography variant="ct" color="grey.600">
						{titleData.desc}
					</Typography>
				)}
			</LySectionContent>
			<Stack direction="row" spacing={5}>
				{children}
			</Stack>
		</LySectionTitle>
	)
}

//
PageTitle.propTypes = {
	children: PropTypes.node,
	titleData: PropTypes.array,
}
SubTitle.propTypes = {
	children: PropTypes.node,
	titleData: PropTypes.object,
	buttonGroup: PropTypes.element,
}
TableTitle.propTypes = {
	children: PropTypes.node,
	titleData: PropTypes.object,
}
