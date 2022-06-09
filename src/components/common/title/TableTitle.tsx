import { Typography, Stack } from '@components/common/ui'
import {
	TableTitleWrap,
	TableTitleArea,
	TableTitleDescription,
} from '@components/common/title/Title.styled'

interface TableTitleProps {
	title: string
	count?: number
}

export const TableTitle: React.FC<TableTitleProps> = ({ count, title, children }) => {
	return (
		<TableTitleWrap>
			<TableTitleArea>
				<Typography variant="h4">{title}</Typography>
				{count && (
					<TableTitleDescription variant="b1">
						{count}
						<span>건</span>
					</TableTitleDescription>
				)}
			</TableTitleArea>
			<Stack direction="row" spacing={5}>
				{children}
			</Stack>
		</TableTitleWrap>
	)
}
