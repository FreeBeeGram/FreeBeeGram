import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './components/Main/Main';
import Login from './components/auth/Login/Login';
import Signup from './components/auth/Apply/Apply';

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers'

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
     <App>
       <Route path="/" exact component={Main} />
       <Route path="/login" component={Login} />
       <Route path="/signup" component={Signup} />
     </App>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
