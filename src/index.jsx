import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContextProvider';

import store from './store';

import App from './App';

import './index.css';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(store.getState());

root.render(
	<Provider store={store}>
		<AuthContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AuthContextProvider>
	</Provider>
);
