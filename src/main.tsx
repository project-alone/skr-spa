// external
import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'

// internal
import { store, createPersistor } from '@store/index'
import { ModalProvider } from '@lib/modal'
import { MaterialUIControllerProvider } from '@context/mui'

// components
import { Loading } from '@components/common'
import App from './App'

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
		<ReduxProvider store={store}>
			<PersistGate loading={<Loading />} persistor={persistor}>
				<ModalProvider>
					<BrowserRouter>
						<MaterialUIControllerProvider>
							<App />
						</MaterialUIControllerProvider>
					</BrowserRouter>
				</ModalProvider>
			</PersistGate>
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)
