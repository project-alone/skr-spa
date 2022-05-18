import { styled, Box, Typography } from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import reactElementToJSXString from 'react-element-to-jsx-string'
import React from 'react'

export const CodeArea: React.FC = ({ children }) => {
	console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', {
		isValidElement: React.isValidElement(children),
		children,
		isArray: Array.isArray(children),
	})
	return (
		<SyntaxHighlighter language="typescript" style={atomOneDark}>
			{reactElementToJSXString(<React.Fragment>{children}</React.Fragment>)}
		</SyntaxHighlighter>
	)
}

export const ConditionTitle = styled(Typography)(
	({ theme }) => `
  font-size: 1.2rem;
  font-weight: 500;
  color:  ${theme.palette.grey[900]}
`,
)

export const FlexBox = styled(Box)(({ theme }) => ({
	flex: 1,
}))

export const GuideTitle = styled(Typography)(
	({ theme }) => `
  font-size: 1.8125rem;
  font-weight: 600;
  color: ${theme.palette.grey[900]}
`,
)

export const GuideSubTitle = styled(Typography)(
	({ theme }) => `
  font-size: 1.2rem;
  font-weight: 600;
  color: ${theme.palette.grey[700]}
`,
)

export const GuideKeyword = styled(Typography)(
	({ theme }) => `
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.palette.error.main}
`,
)
