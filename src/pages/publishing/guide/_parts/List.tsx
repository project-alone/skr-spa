import { Grid, Box } from '@mui/material'
import { List } from '@components/common'
import { CodeArea } from '@styles/publishingGuide'

// types
import { ListProps } from '@components/common'

const data: ListProps['listData'] = [
	{
		type: 'bookmark',
		title: '즐겨찾기 메뉴 2',
	},
	{
		type: 'docAttach',
		title: '다운로드 양식 2',
	},
	{
		type: 'docText',
		title: '다운로드 메뉴얼 2',
	},
]
export const ListGuide: React.FC = () => {
	return (
		<Grid container spacing={2} mt={2}>
			<Grid item xs={8}>
				<List listData={data} />
			</Grid>
			<Grid item xs={4}>
				<CodeArea>
					{`// data 선언 
const data = [
    { type: "bookmark", title: "즐겨찾기 메뉴 2" },				
    { type: "docAttach", title: "다운로드 양식 2" },
    { type: "docText", title: "다운로드 메뉴얼 2",}
]

<MuiList listData={data} />                        
                    `}
				</CodeArea>
			</Grid>
		</Grid>
	)
}
