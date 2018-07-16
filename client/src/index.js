import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './components/Main/Main';
import Login from './components/auth/Login/Login';
import Signup from './components/auth/Apply/Apply';

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
     <App>
       <Route path="/" exact component={Main} />
       <Route path="/login" component={Login} />
       <Route path="/signup" component={Signup} />
     </App>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
