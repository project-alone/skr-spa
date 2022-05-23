/* eslint-disable react/jsx-key */

// core
import React from 'react'
import ReactDOM from 'react-dom'
import { collate } from 'react-collate'

// providers
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import ThemeProvider from '@theme/ThemeProvider'
import { ModalProvider } from '@lib/modal'
import { SidebarProvider } from '@context/Sidebar'
/** @see https://iamhosseindhv.com/notistack/api */
import { SnackbarProvider } from 'notistack'

// date util
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { ko } from 'date-fns/locale'
// store
import { store, createPersistor } from '@store/index'

// loading indecator
import { Loading } from '@root/components/ex'

const persistor = createPersistor(store)

interface ProviderProps {
	store: typeof store
	loading: JSX.Element
	persistor: typeof persistor
	dateAdapter: AdapterDateFns
	maxSnack: number
}

export const Provider = collate<ProviderProps>()
	// StrictMode: 'react'의 잠재적 문재점 확인
	.add(({ children }) => <React.StrictMode>{children}</React.StrictMode>)
	// HelmetProvider: 'head' 영역의 정보 관리 및 적용 범위
	.add(({ children }) => <HelmetProvider>{children}</HelmetProvider>)
	// ReduxProvider: 'redux store' 사용 가능 범위
	.add(({ store, children }) => <ReduxProvider store={store}>{children}</ReduxProvider>)
	// PersistGate: 'redux-persist'(localStorage)
	.add(({ loading, persistor, children }) => (
		<PersistGate loading={loading} persistor={persistor}>
			{children}
		</PersistGate>
	))
	// ThemeProvider: '@mui'의 기본 Theme와 Custom된 Theme 적용
	.add(({ children }) => <ThemeProvider>{children}</ThemeProvider>)
	// LocalizationProvider: '@mui' 지역화 모듈 적용
	.add(({ children }) => (
		<LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>
	))
	.add(({ children }) => <BrowserRouter>{children}</BrowserRouter>)
	// SibebarProvider: 'Sidebar context'의 사용 가능 범위
	.add(({ children }) => <SidebarProvider>{children}</SidebarProvider>)
	// ModalProvider: 'modal' 사용 가능 범위
	.add(({ children }) => <ModalProvider>{children}</ModalProvider>)
	.add(({ maxSnack, children }) => (
		<SnackbarProvider maxSnack={maxSnack}>{children}</SnackbarProvider>
	))
	.build()

const container = (id: string) => {
	return (
		document.getElementById(id) ??
		(() => {
			const container = document.createElement('div')
			container.id = 'root'
			document.body.appendChild(container)

			return container
		})()
	)
}

export const createApp = (element: React.ReactElement, containerId?: string) => {
	ReactDOM.render(
		<Provider
			store={store}
			loading={<Loading />}
			persistor={persistor}
			dateAdapter={new AdapterDateFns({ locale: ko })}
			maxSnack={10}>
			{element}
		</Provider>,
		container(containerId || 'root'),
	)
}
