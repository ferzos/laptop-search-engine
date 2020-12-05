import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import Landing from './pages/landing';
import Search from './pages/search';
import Result from './pages/result';
import About from './pages/about';
import Maintenance from './pages/maintenance';

const app = document.getElementById('app');

const isMaintenance = true;

ReactDOM.render(
  <Provider store={store}>
    {isMaintenance ? (
      <Maintenance />
    ) : (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/cari" component={Search} />
          <Route exact path="/hasil" component={Result} />
          <Route exact path="/tentang" component={About} />
        </Switch>
      </BrowserRouter>
    )}
  </Provider>,
  app
);
registerServiceWorker();
