import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { FavoritesContextProvider } from './store/favorites-context'

ReactDOM.render(
	<FavoritesContextProvider>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</FavoritesContextProvider>,
	document.getElementById('root'),
)
