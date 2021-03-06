import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'

// Setting redux-thunk
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import allReducer from './redux/reducers'
import ReduxThunk from 'redux-thunk'

const globalState = createStore(allReducer, applyMiddleware(ReduxThunk))

ReactDOM.render(
  <Provider store={globalState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)