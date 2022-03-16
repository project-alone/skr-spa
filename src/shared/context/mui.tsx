import React from 'react'
import { merge } from 'lodash-es'

/** MUI Context */
const MUI = React.createContext({})
MUI.displayName = 'MaterialUIContext'

/** action types */
const MINI_SIDENAV = 'MINI_SIDENAV'
const TRANSPARENT_SIDENAV = 'TRANSPARENT_SIDENAV'
const WHITE_SIDENAV = 'WHITE_SIDENAV'
const SIDENAV_COLOR = 'SIDENAV_COLOR'
const TRANSPARENT_NAVBAR = 'TRANSPARENT_NAVBAR'
const FIXED_NAVBAR = 'FIXED_NAVBAR'
const OPEN_CONFIGURATOR = 'OPEN_CONFIGURATOR'
const DIRECTION = 'DIRECTION'
const LAYOUT = 'LAYOUT'
const DARKMODE = 'DARKMODE'

export const Actiontypes = {
	MINI_SIDENAV,
	TRANSPARENT_SIDENAV,
	WHITE_SIDENAV,
	SIDENAV_COLOR,
	TRANSPARENT_NAVBAR,
	FIXED_NAVBAR,
	OPEN_CONFIGURATOR,
	DIRECTION,
	LAYOUT,
	DARKMODE,
}

interface MUIState {
	miniSidenav: boolean
	transparentSidenav: boolean
	whiteSidenav: boolean
	sidenavColor: 'info' | 'primary' | 'dark' | 'info' | 'success' | 'warning' | 'error'
	transparentNavbar: boolean
	fixedNavbar: boolean
	openConfigurator: boolean
	direction: 'ltr' | 'rtl'
	layout: 'dashboard' | 'page'
	darkMode: boolean
}

type Actions =
	| { type: 'MINI_SIDENAV'; value: MUIState['miniSidenav'] }
	| { type: 'TRANSPARENT_SIDENAV'; value: MUIState['transparentSidenav'] }
	| { type: 'WHITE_SIDENAV'; value: MUIState['whiteSidenav'] }
	| { type: 'SIDENAV_COLOR'; value: MUIState['sidenavColor'] }
	| { type: 'TRANSPARENT_NAVBAR'; value: MUIState['transparentNavbar'] }
	| { type: 'FIXED_NAVBAR'; value: MUIState['fixedNavbar'] }
	| { type: 'OPEN_CONFIGURATOR'; value: MUIState['openConfigurator'] }
	| { type: 'DIRECTION'; value: MUIState['direction'] }
	| { type: 'LAYOUT'; value: MUIState['layout'] }
	| { type: 'DARKMODE'; value: MUIState['darkMode'] }

/** reduce */
const reducer: React.Reducer<MUIState, Actions> = (state, action) => {
	switch (action.type) {
		case MINI_SIDENAV: {
			return merge(state, { miniSidenav: action.value })
		}
		case TRANSPARENT_SIDENAV: {
			return merge(state, { transparentSidenav: action.value })
		}
		case WHITE_SIDENAV: {
			return merge(state, { whiteSidenav: action.value })
		}
		case SIDENAV_COLOR: {
			return merge(state, { sidenavColor: action.value })
		}
		case TRANSPARENT_NAVBAR: {
			return merge(state, { transparentNavbar: action.value })
		}
		case FIXED_NAVBAR: {
			return merge(state, { fixedNavbar: action.value })
		}
		case OPEN_CONFIGURATOR: {
			return merge(state, { openConfigurator: action.value })
		}
		case DIRECTION: {
			return merge(state, { direction: action.value })
		}
		case LAYOUT: {
			return merge(state, { layout: action.value })
		}
		case DARKMODE: {
			return merge(state, { darkMode: action.value })
		}
		default: {
			throw new Error(`Unhandled action type: ${action['type']}`)
		}
	}
}

/** Provider */
export const MaterialUIControllerProvider: React.FC = ({ children }) => {
	const initialState: MUIState = {
		miniSidenav: false,
		transparentSidenav: false,
		whiteSidenav: false,
		sidenavColor: 'info',
		transparentNavbar: true,
		fixedNavbar: true,
		openConfigurator: false,
		direction: 'ltr',
		layout: 'dashboard',
		darkMode: false,
	}

	const [controller, dispatch] = React.useReducer<typeof reducer>(reducer, initialState)

	const value = React.useMemo(() => [controller, dispatch], [controller, dispatch])

	return <MUI.Provider value={value}>{children}</MUI.Provider>
}

/** context hooks */
export const useMaterialUIController = () => {
	const context = React.useContext(MUI)

	if (!context) {
		throw new Error(
			'useMaterialUIController should be used inside the MaterialUIControllerProvider.',
		)
	}

	return context
}

interface ContextDispatch<V = boolean> {
	(dispatch: React.Dispatch<Parameters<typeof reducer>[1]>, value: V): void
}

// Context module dispatch functions
export const setMiniSidenav: ContextDispatch = (dispatch, value) =>
	dispatch({ type: MINI_SIDENAV, value })
export const setTransparentSidenav: ContextDispatch = (dispatch, value) =>
	dispatch({ type: TRANSPARENT_SIDENAV, value })
export const setWhiteSidenav: ContextDispatch = (dispatch, value) =>
	dispatch({ type: WHITE_SIDENAV, value })
export const setSidenavColor: ContextDispatch<MUIState['sidenavColor']> = (dispatch, value) =>
	dispatch({ type: SIDENAV_COLOR, value })
export const setTransparentNavbar: ContextDispatch = (dispatch, value) =>
	dispatch({ type: TRANSPARENT_NAVBAR, value })
export const setFixedNavbar: ContextDispatch = (dispatch, value) =>
	dispatch({ type: FIXED_NAVBAR, value })
export const setOpenConfigurator: ContextDispatch = (dispatch, value) =>
	dispatch({ type: OPEN_CONFIGURATOR, value })
export const setDirection: ContextDispatch<MUIState['direction']> = (dispatch, value) =>
	dispatch({ type: DIRECTION, value })
export const setLayout: ContextDispatch<MUIState['layout']> = (dispatch, value) =>
	dispatch({ type: LAYOUT, value })
export const setDarkMode: ContextDispatch = (dispatch, value) => dispatch({ type: DARKMODE, value })
