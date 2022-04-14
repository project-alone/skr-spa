/* eslint-disable react/jsx-key */
// styles
import 'nprogress/nprogress.css'

// external
import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import ThemeProvider from '@theme/ThemeProvider'
import { CssBaseline } from '@mui/material'

// internal
import { store, createPersistor } from '@store/index'
import { ModalProvider } from '@lib/modal'
import { SidebarProvider } from '@context/Sidebar'
import { ComposeProvider } from '@lib/utils'
import '@lib/utils/chart'

// components
import { Loading } from '@components/common'

import App from './App'

// using env variables
console.log(import.meta.env)

/**
 * HelmetProvider: head 영역의 정보 관리 및 적용 범위
 * ReduxProvider: redux store 사용 가능 범위
 * PersistGate: redux-persist(localStorage)
 * ModalProvider: modal 사용 가능 범위
 * SibebarProvider: Sidebar context의 사용 가능 범위
 * TODO: ErrorBoundary - react component 범위에서의 오류 체크
 */

const persistor = createPersistor(store)
const providers = [
	<React.StrictMode />,
	<HelmetProvider />,
	<ReduxProvider store={store} />,
	<PersistGate loading={<Loading />} persistor={persistor} />,
	<ThemeProvider />,
	<LocalizationProvider dateAdapter={AdapterDateFns} />,
	<SidebarProvider />,
	<ModalProvider />,
	<BrowserRouter />,
]

render(
	<ComposeProvider providers={providers}>
		<CssBaseline />
		<App />
	</ComposeProvider>,
	document.getElementById('root'),
)
