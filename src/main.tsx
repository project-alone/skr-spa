// external
import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// internal
import { store, createPersistor } from '@store/index'
import { ModalProvider } from '@lib/modal'
import { SidebarProvider } from '@context/Sidebar'

// components
import { Loading } from '@components/common'
import App from './App'

// styles
import 'nprogress/nprogress.css'

// using env variables
console.log(import.meta.env)

/**
 * ReduxProvider: redux store 사용 가능 범위
 * PersistGate: redux-persist
 * ModalProvider: modal 사용 가능 범위
 */

const persistor = createPersistor(store)

render(
	<React.StrictMode>
		<HelmetProvider>
			<ReduxProvider store={store}>
				<PersistGate loading={<Loading />} persistor={persistor}>
					<ModalProvider>
						<SidebarProvider>
							<BrowserRouter>
								<App />
							</BrowserRouter>
						</SidebarProvider>
					</ModalProvider>
				</PersistGate>
			</ReduxProvider>
		</HelmetProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)
