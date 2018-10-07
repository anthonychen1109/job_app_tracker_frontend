import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reducer from './reducers/root_reducer';

import Home from './components/home/home';

const store = createStore(reducer)

const routes = (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'));
