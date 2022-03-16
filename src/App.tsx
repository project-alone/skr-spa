import React from 'react'
import { Routes, Route, useLocation, useRoutes } from 'react-router-dom'
import { AliveScope } from 'react-activation'
import routes from '@router/routes'

// mui components
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Icon from '@mui/material/Icon'
import MDBox from '@components/ui/MDBox'

import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import type { EmotionCache } from '@emotion/cache'
import rtlPlugin from 'stylis-plugin-rtl'
import { setMiniSidenav, setOpenConfigurator, useMaterialUIController } from '@context/mui'

// Material Dashboard 2 React Dark Mode themes
import themeDark from 'assets/theme-dark'
import themeDarkRTL from 'assets/theme-dark/theme-rtl'
import Sidenav from '@styles/theme/components/sidenav'

const App: React.FC = () => {
	const [controller, dispatch] = useMaterialUIController()
	const {
		miniSidenav,
		direction,
		layout,
		openConfigurator,
		sidenavColor,
		transparentSidenav,
		whiteSidenav,
		darkMode,
	} = controller
	const [onMouseEnter, setOnMouseEnter] = React.useState(false)
	const [rtlCache, setRtlCache] = React.useState<EmotionCache>()
	const { pathname } = useLocation()

	// Cache for the rtl
	React.useMemo(() => {
		const cacheRtl = createCache({
			key: 'rtl',
			stylisPlugins: [rtlPlugin],
		})

		setRtlCache(cacheRtl)
	}, [])

	// Open sidenav when mouse enter on mini sidenav
	const handleOnMouseEnter = () => {
		if (miniSidenav && !onMouseEnter) {
			setMiniSidenav(dispatch, false)
			setOnMouseEnter(true)
		}
	}

	// Close sidenav when mouse leave mini sidenav
	const handleOnMouseLeave = () => {
		if (onMouseEnter) {
			setMiniSidenav(dispatch, true)
			setOnMouseEnter(false)
		}
	}

	// Change the openConfigurator state
	const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator)

	// Setting the dir attribute for the body element
	React.useEffect(() => {
		document.body.setAttribute('dir', direction)
	}, [direction])

	// Setting page scroll to 0 when changing the route
	React.useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement && (document.scrollingElement.scrollTop = 0)
	}, [pathname])

	const getRoutes = (allRoutes) =>
		allRoutes.map((route) => {
			if (route.collapse) {
				return getRoutes(route.collapse)
			}

			if (route.route) {
				return <Route exact path={route.route} element={route.component} key={route.key} />
			}

			return null
		})

	const configsButton = (
		<MDBox
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="3.25rem"
			height="3.25rem"
			bgColor="white"
			shadow="sm"
			borderRadius="50%"
			position="fixed"
			right="2rem"
			bottom="2rem"
			zIndex={99}
			color="dark"
			sx={{ cursor: 'pointer' }}
			onClick={handleConfiguratorOpen}>
			<Icon fontSize="small" color="inherit">
				settings
			</Icon>
		</MDBox>
	)

	// return (
	// 	<AliveScope>
	// 		<MDBox />
	// 		{element}
	// 	</AliveScope>
	// )

	return direction === 'rtl' ? (
		rtlCache && (
			<CacheProvider value={rtlCache}>
				<ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
					<CssBaseline />
					{layout === 'dashboard' && (
						<>
							<Sidenav
								color={sidenavColor}
								brand={
									(transparentSidenav && !darkMode) || whiteSidenav
										? brandDark
										: brandWhite
								}
								brandName="Material Dashboard 2"
								routes={routes}
								onMouseEnter={handleOnMouseEnter}
								onMouseLeave={handleOnMouseLeave}
							/>
							<Configurator />
							{configsButton}
						</>
					)}
					{layout === 'vr' && <Configurator />}
					<Routes>
						{getRoutes(routes)}
						<Route path="*" element={<Navigate to="/dashboard" />} />
					</Routes>
				</ThemeProvider>
			</CacheProvider>
		)
	) : (
		<ThemeProvider theme={darkMode ? themeDark : theme}>
			<CssBaseline />
			{layout === 'dashboard' && (
				<>
					<Sidenav
						color={sidenavColor}
						brand={
							(transparentSidenav && !darkMode) || whiteSidenav
								? brandDark
								: brandWhite
						}
						brandName="Material Dashboard 2"
						routes={routes}
						onMouseEnter={handleOnMouseEnter}
						onMouseLeave={handleOnMouseLeave}
					/>
					<Configurator />
					{configsButton}
				</>
			)}
			{layout === 'vr' && <Configurator />}
			<Routes>
				{getRoutes(routes)}
				<Route path="*" element={<Navigate to="/dashboard" />} />
			</Routes>
		</ThemeProvider>
	)
}

export default App
