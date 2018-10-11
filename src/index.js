import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducer from './reducers/root_reducer';
import 'semantic-ui-css/semantic.min.css';

import Home from './components/home/home';
import Profile from './components/profile/profile';

const store = createStore(reducer, applyMiddleware(thunk))

const routes = (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/profiles/:id' component={Profile} />
      </Switch>
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'));
