import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SnackbarProvider } from "notistack";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <SnackbarProvider maxSnack={3} preventDuplicate>
               <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

