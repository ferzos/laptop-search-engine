import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        {/* DEFINE ROUTE BELOW */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  app
);
registerServiceWorker();
