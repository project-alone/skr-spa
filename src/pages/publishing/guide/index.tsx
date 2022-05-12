import React from 'react'
import { Box, Typography, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

// common component
import { DataGrid, SelectVariants } from '@components/common'

//guide
import { Typo } from '@pages/publishing/guide/_parts/Typo'
import { PageTit } from '@pages/publishing/guide/_parts/title/PageTit'
import { SubTit } from '@pages/publishing/guide/_parts/title/SubTit'
import { TableTit } from '@pages/publishing/guide/_parts/title/TableTit'
import { SectionTit } from '@pages/publishing/guide/_parts/title/SectionTit'
import { ListGuide as List } from '@pages/publishing/guide/_parts/List'
import {
	BtnSize,
	BtnIcon,
	BtnVariation,
	BtnDisabled,
	GroupBtn,
} from '@pages/publishing/guide/_parts/Btn'
import {
	InputLabelPositionTop,
	InputLabelPositionLeft,
	InputHiddenLabel,
	SelectLabelPositionTop,
	SelectLabelPositionLeft,
	CheckBox,
	CheckBoxWithLabel,
	CheckBoxGroup,
	DefaultRadio,
	RadioWithLabel,
	GroupRadio,
} from '@pages/publishing/guide/_parts/Form'
import { Badge } from '@pages/publishing/guide/_parts/Badge'
import { GuideTitle, GuideSubTitle, GuideKeyword } from '@styles/publishingGuide'

// types
import type { TabListProps } from '@mui/lab'

const Guide = () => {
	const [value, setValue] = React.useState('1')

	const handleChange: TabListProps['onChange'] = React.useCallback((event, newValue) => {
		setValue(newValue)
	}, [])

	return (
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<Typography variant="h1" mt={3}>
				공통 컴포넌트
			</Typography>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange} aria-label="common compoenents guide tabs">
						<Tab label="Typography" value="1" />
						<Tab label="Badge" value="2" />
						<Tab label="Button" value="3" />
						<Tab label="Form" value="4" />
						<Tab label="List" value="5" />
						<Tab label="DataGrid" value="6" />
					</TabList>
				</Box>
				<TabPanel value="1">
					<GuideTitle>Typography</GuideTitle>
					<Typo />
					<GuideTitle mt={5}>Page Title</GuideTitle>
					<PageTit />
					<GuideTitle mt={5}>Sub Title</GuideTitle>
					<SubTit />
					<GuideTitle mt={5}>Table Title</GuideTitle>
					<TableTit />
					<GuideTitle mt={5}>Section Title</GuideTitle>
					<SectionTit />
				</TabPanel>
				<TabPanel value="2">
					<Badge />
				</TabPanel>
				<TabPanel value="3">
					<GuideTitle>Button Size</GuideTitle>
					<BtnSize />
					<GuideTitle>Button Icon </GuideTitle>
					<GuideSubTitle pb={8}>단일 아이콘 버튼, 마크업 유의 바람</GuideSubTitle>
					<BtnIcon />
					<GuideTitle mt={4}>Button Variants</GuideTitle>
					<BtnVariation />
					<GuideTitle mt={4}>Button Disabled</GuideTitle>
					<GuideSubTitle pb={8}>disabled porperty로 제어 유의 바람</GuideSubTitle>
					<BtnDisabled />
					<GuideTitle>Button Group</GuideTitle>
					<GuideSubTitle pb={8}>마크업 상이 유의 바람</GuideSubTitle>
					<GroupBtn />
				</TabPanel>
				<TabPanel value="4">
					<SelectVariants />
					<GuideTitle>Input</GuideTitle>
					<GuideSubTitle pb={8}>Label Position : Top</GuideSubTitle>
					<InputLabelPositionTop />
					<GuideSubTitle mt={40}>Label Position : Left</GuideSubTitle>
					<GuideKeyword pb={20}>styledComponents : DefaultTextField</GuideKeyword>
					<InputLabelPositionLeft />
					<GuideSubTitle pb={8} mt={40}>
						Label Hidden
					</GuideSubTitle>
					<InputHiddenLabel />
					<GuideTitle mt={40}>Select</GuideTitle>
					<GuideSubTitle pb={8}>Label Position : Top</GuideSubTitle>
					<SelectLabelPositionTop />
					<GuideSubTitle mt={40} pb={8}>
						Label Position : Left
					</GuideSubTitle>
					<SelectLabelPositionLeft />
					<GuideTitle mt={40}>Checkbox</GuideTitle>
					<GuideSubTitle pb={8}>Label Hidden</GuideSubTitle>
					<CheckBox />
					<GuideSubTitle mt={40} pb={8}>
						Label Position : Left
					</GuideSubTitle>
					<CheckBoxWithLabel />
					<GuideSubTitle mt={40} pb={8}>
						Checkbox Group
					</GuideSubTitle>
					<CheckBoxGroup />
					<GuideTitle mt={40}>Radio</GuideTitle>
					<GuideSubTitle pb={8}>Label Hidden</GuideSubTitle>
					<DefaultRadio />
					<GuideSubTitle mt={40} pb={8}>
						Label Position : Left
					</GuideSubTitle>
					<RadioWithLabel />
					<GuideSubTitle mt={40} pb={8}>
						Radio Group
					</GuideSubTitle>
					<GroupRadio />
					{/* <MuiSelect /> */}
				</TabPanel>
				<TabPanel value="5">
					<List />
				</TabPanel>
				<TabPanel value="6">
					{/* <GridExample /> */}
					<DataGrid sx={{ mt: 2 }} />
				</TabPanel>
			</TabContext>
		</Box>
	)
}

export default Guide
