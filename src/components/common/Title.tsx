import React from 'react'
import { Link } from 'react-router-dom'
import { styled, Typography, Breadcrumbs, ToggleButton, ButtonGroup, Stack } from '@mui/material'
import { IconButton } from '@components/common'

// icons
import { ReactComponent as IconBookmark } from '@static/images/icons/bookmark.svg'
import { ReactComponent as IconChevron } from '@static/images/icons/chevron-forward.svg'
import { ReactComponent as IconChevronDown } from '@static/images/icons/chevron-down.svg'
import { ReactComponent as IconInfo } from '@static/images/icons/information-circle.svg'

// types
import type { TitleDataItem } from '@pages/publishing/guide/_parts/title/PageTit'

const PageTitleStyled = {
	Wrap: styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: '16px',
	})),
	Item: styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		gap: '5px',
		'& button': {
			border: 'none',
			width: '20px',
			height: '20px',
			padding: 1,
			backgroundColor: 'transparent',
			cursor: 'pointer',
		},
	})),
	Button: styled('button')<{ active: boolean }>(({ theme, active }) =>
		active
			? {
					'& svg': {
						'& path': {
							fill: `${theme.palette.primary.main}`,
						},
					},
			  }
			: ``,
	),
}

interface BookmarkProps extends Pick<TitleDataItem, 'menu' | 'active'> {}

const Bookmark: React.FC<BookmarkProps> = ({ active = false, menu }) => {
	return (
		<PageTitleStyled.Item>
			<Typography variant="h2" color="grey.900">
				{menu}
			</Typography>
			<PageTitleStyled.Button active={active}>
				<IconBookmark />
			</PageTitleStyled.Button>
		</PageTitleStyled.Item>
	)
}

interface CurrentProps extends Pick<TitleDataItem, 'menu'> {}

const Current: React.FC<CurrentProps> = ({ menu }) => {
	return (
		<div>
			<Typography variant="h2" color="grey.900">
				{menu}
			</Typography>
		</div>
	)
}

interface PlainProps extends Required<Pick<TitleDataItem, 'path' | 'menu'>> {}

const Plain: React.FC<PlainProps> = ({ path, menu }) => {
	return (
		<Link to={path}>
			<Typography variant="h3" color="grey.600">
				{menu}
			</Typography>
		</Link>
	)
}

interface PageTitleProps {
	titleData: TitleDataItem[]
}

export const PageTitle: React.FC<PageTitleProps> = ({ titleData, children, ...rest }) => {
	return (
		<PageTitleStyled.Wrap>
			<Breadcrumbs separator={<IconChevron />} aria-label="breadcrumb">
				{titleData.map(({ menu, active, type, path }, idx) => {
					{
						type === 'bookmark' && <Bookmark menu={menu} active={active} />
					}
					{
						type === 'current' && <Current menu={menu} />
					}
					{
						;(!type || type === 'plain') && <Plain path={path || ''} menu={menu} />
					}
				})}
			</Breadcrumbs>
			{children}
		</PageTitleStyled.Wrap>
	)
}

const SubTitleStyled = {
	Wrap: styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '0 20px',
	})),
	Title: styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		gap: '5px',
		'&:before': {
			content: "''",
			display: 'inline-block',
			width: '6px',
			height: '6px',
			clear: 'both',
			backgroundColor: `${theme.palette.primary.bright}`,
			borderRadius: 1,
		},
	})),
	Desc: styled(Typography)(({ theme }) => ({
		color: `${theme.palette.grey[600]}`,
	})),
	Toggle: styled(IconChevronDown)<{ selected: boolean }>(({ theme, selected }) =>
		selected
			? {
					transform: 'scaleY(-1)',
			  }
			: ``,
	),
}

interface SubTitleProps {
	desc?: string
	title: string
	toggle: boolean
	tooltip?: boolean
}

export const SubTitle: React.FC<SubTitleProps> = ({ desc, title, toggle, tooltip, children }) => {
	const [selected, setSelected] = React.useState(false)

	const handleToggle = React.useCallback(() => {
		setSelected(!selected)
	}, [])

	return (
		<SubTitleStyled.Wrap>
			<SubTitleStyled.Title>
				<Typography variant="h4">{title}</Typography>
				{desc && <SubTitleStyled.Desc variant="b1">{desc}</SubTitleStyled.Desc>}
			</SubTitleStyled.Title>
			<Stack direction="row" spacing={5}>
				{children}
				<ButtonGroup variant="outlined" size="small">
					{toggle && (
						<IconButton color="sub">
							<IconInfo />
						</IconButton>
					)}
					{tooltip && (
						<ToggleButton value="check" selected={selected} onChange={handleToggle}>
							<SubTitleStyled.Toggle selected={selected} />
						</ToggleButton>
					)}
				</ButtonGroup>
			</Stack>
		</SubTitleStyled.Wrap>
	)
}

const TableTitleStyled = {
	Wrap: styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	})),
	Title: styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		gap: '5px',
		'&:before': {
			content: "''",
			display: 'inline-block',
			width: '6px',
			height: '6px',
			clear: 'both',
			backgroundColor: `${theme.palette.primary.bright}`,
			borderRadius: 1,
		},
	})),
	Desc: styled(Typography)(({ theme }) => ({
		color: `${theme.palette.grey[600]}`,
	})),
}

interface TableTitleProps {
	desc?: string
	title: string
}
export const TableTitle: React.FC<TableTitleProps> = ({ desc, title, children }) => {
	return (
		<TableTitleStyled.Wrap>
			<TableTitleStyled.Title>
				<Typography variant="h4">{title}</Typography>
				{desc && (
					<TableTitleStyled.Desc variant="b1">
						{desc}
						<span>건</span>
					</TableTitleStyled.Desc>
				)}
			</TableTitleStyled.Title>
			<Stack direction="row" spacing={5}>
				{children}
			</Stack>
		</TableTitleStyled.Wrap>
	)
}
