import React from 'react'
import {
	Typography,
	IconButton,
	ToggleButton,
	ButtonGroup,
	Stack,
	Collapse,
	Divider,
} from '@components/common/ui'
import {
	SubTitleWrap,
	SubTitleArea,
	SubTitleDescription,
} from '@components/common/title/Title.styled'
import { IconChevronDown, IconInfo } from '@components/common/ui/Icons'

export interface SubTitleProps {
	titleData: {
		title: string
		desc?: string
		toggle?: boolean
		tooltip?: boolean
	}
	buttonGroup?: React.ReactNode
}

export const SubTitle: React.FC<SubTitleProps> = ({ titleData, buttonGroup, children }) => {
	const [selected, setSelected] = React.useState(false)

	const toggleSelect = React.useCallback(() => {
		setSelected(!selected)
	}, [])

	return (
		<>
			<SubTitleWrap>
				<SubTitleArea>
					<Typography variant="h4">{titleData.title}</Typography>
					{/* isDescription */}
					{titleData.desc && (
						<SubTitleDescription variant="b1">{titleData.desc}</SubTitleDescription>
					)}
				</SubTitleArea>
				<Stack direction="row" spacing={8}>
					{/* 0512 이슈 */}
					{/* Button Children to custom */}
					{buttonGroup}
					{/* Optional Button */}
					{/* isToggle */}
					{titleData.toggle && (
						<ToggleButton
							value="check"
							selected={selected}
							onChange={toggleSelect}
							// checked={selected}
						>
							<IconChevronDown
								style={selected ? { transform: 'scaleY(-1)' } : undefined}
							/>
						</ToggleButton>
					)}
					{/* isTooltip */}
					{titleData.tooltip && (
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
								onChange={toggleSelect}
								// checked={selected}
							>
								<IconChevronDown
									style={selected ? { transform: 'scaleY(-1)' } : undefined}
								/>
							</ToggleButton>
						</ButtonGroup>
					)}
				</Stack>
			</SubTitleWrap>
			{titleData.toggle && (
				<Collapse in={selected}>
					<Divider variant="section15" />
					{/* Collapse Children to custom */}
					{children}
				</Collapse>
			)}
		</>
	)
}
