import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { store, createPersistor } from '@store/index'
import { ModalProvider } from '@lib/modal'
import { Loading } from '@components/common'
import App from './App'

import 'antd/lib/style/default.css'

// using env variables
console.log(import.meta.env)

/**
 * ReduxProvider: redux store 사용 가능 범위
 * PersistGate: redux-persist
 * ModalProvider: modal 사용 가능 범위
 */

const persistor = createPersistor(store)

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<PersistGate loading={<Loading />} persistor={persistor}>
				<ModalProvider>
					<Suspense fallback={<Loading />}>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</Suspense>
				</ModalProvider>
			</PersistGate>
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)
