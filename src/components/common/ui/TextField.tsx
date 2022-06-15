import { styled, TextField as MuiTextField } from '@mui/material'

// types
import type { TextFieldProps as MuiTextFieldProps, CSSObject } from '@mui/material'

type TextFieldProps = MuiTextFieldProps & {
	position: 'left' | 'top' | 'hidden'
}

const TextFieldStyled = styled(MuiTextField)<TextFieldProps>(({ theme, position }) => {
	const style: { [key in 'left' | 'top' | 'hidden']: CSSObject } = {
		left: {
			'&.MuiFormControl-root': {
				flexDirection: 'row',
				position: 'relative',
				alignItems: 'center',
			},
			'& .MuiInputLabel-root': {
				display: 'inline',
				Width: '120px',
				flex: '0 0 120px',
			},
			'& .MuiInput-root': {
				width: 'calc(100% - 120px)',
				flex: '0 0 calc(100% - 120px)',
			},
			'& .MuiFormHelperText-root': {
				position: 'absolute',
				left: '120px',
				bottom: '-18px',
			},
		},
		top: {},
		hidden: {},
	}

	return style[position]
})

const TextField: React.VFC<TextFieldProps> = ({ ...rest }) => {
	return <TextFieldStyled {...rest} />
}
