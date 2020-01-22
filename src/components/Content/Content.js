import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Entry from './Entry';
import Session from './Session';

const Content = () => (
  <Switch>
    <Route path="/" exact>
      <Entry />
    </Route>

    <Route path="/session/:sharekey/:mode?">
      <Session />
    </Route>

    <Redirect to="/" />
  </Switch>
);

export default Content;
