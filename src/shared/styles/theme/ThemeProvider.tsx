import React from 'react'
import { ThemeProvider } from '@mui/material'
import { themeCreator } from '@styles/theme/base'
import { StylesProvider } from '@mui/styles'

export const ThemeContext = React.createContext((themeName: string): void => {
	/** nothing */
})

const ThemeProviderWrapper: React.FC = ({ children }) => {
	const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme'
	const [themeName, _setThemeName] = React.useState(curThemeName)
	const theme = themeCreator(themeName)

	const setThemeName = React.useCallback((themeName: string): void => {
		localStorage.setItem('appTheme', themeName)
		_setThemeName(themeName)
	}, [])

	return (
		<StylesProvider injectFirst>
			<ThemeContext.Provider value={setThemeName}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
				{children}
			</ThemeContext.Provider>
		</StylesProvider>
	)
}

export default ThemeProviderWrapper
