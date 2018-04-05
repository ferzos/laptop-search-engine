import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import Landing from './pages/Landing';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* DEFINE ROUTE BELOW */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  app
);
registerServiceWorker();
