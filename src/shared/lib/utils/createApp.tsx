/* eslint-disable react/jsx-key */

// core
import React from 'react'
import ReactDOM from 'react-dom'

// providers
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import ThemeProvider from '@theme/ThemeProvider'
import { ModalProvider } from '@lib/modal'
import { ComposeProvider } from '@lib/utils'
import { SidebarProvider } from '@context/Sidebar'
/** @see https://iamhosseindhv.com/notistack/api */
import { SnackbarProvider } from 'notistack'

// date util
import AdapterDateFns from '@mui/lab/AdapterDateFns'

// store
import { store, createPersistor } from '@store/index'

// loading indecator
import { Loading } from '@components/common'

/**
 * StrictMode: 'react'의 잠재적 문재점 확인
 * HelmetProvider: 'head' 영역의 정보 관리 및 적용 범위
 * ReduxProvider: 'redux store' 사용 가능 범위
 * PersistGate: 'redux-persist'(localStorage)
 * ThemeProvider: '@mui'의 기본 Theme와 Custom된 Theme 적용
 * LocalizationProvider: '@mui' 지역화 모듈 적용
 * ModalProvider: 'modal' 사용 가능 범위
 * SibebarProvider: 'Sidebar context'의 사용 가능 범위
 * ErrorBoundary - 'react' component 범위에서의 오류 체크
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

const container =
	document.getElementById('root') ??
	(() => {
		const container = document.createElement('div')
		document.body.appendChild(container)

		return container
	})()

export const createApp = (element: React.ReactElement) => {
	ReactDOM.render(
		<ComposeProvider providers={providers}>
			<SnackbarProvider maxSnack={10}>{element}</SnackbarProvider>
		</ComposeProvider>,
		container,
	)
}
