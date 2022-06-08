import { TextareaAutosize as MuiTextareaAutosize } from '@mui/material'

// types
import type { TextareaAutosizeProps } from '@mui/material'

export const TextArea: React.VFC<TextareaAutosizeProps> = ({
	maxRows = 5,
	placeholder = '내용을 입력해주세요.',
	...rest
}) => {
	return <MuiTextareaAutosize maxRows={maxRows} placeholder={placeholder} {...rest} />
}
