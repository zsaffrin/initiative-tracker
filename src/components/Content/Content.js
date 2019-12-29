import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ContentHome from './ContentHome';
import Entry from './Entry'

const Content = () => (
  <Switch>
    <Route path="/" exact>
      <Entry />
    </Route>
  </Switch>
);

export default Content;
