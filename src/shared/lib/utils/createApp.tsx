/* eslint-disable react/jsx-key */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import ThemeProvider from '@theme/ThemeProvider'
import { ModalProvider } from '@lib/modal'
import { SidebarProvider } from '@context/Sidebar'
import { store, createPersistor } from '@store/index'
import { Loading } from '@components/common'
import { ComposeProvider } from '@lib/utils'

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

export const createApp = (element: React.ReactElement) => {
	ReactDOM.render(
		<ComposeProvider providers={providers}>{element}</ComposeProvider>,
		document.getElementById('root'),
	)
}
