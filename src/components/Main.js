import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Grid from './Grid';
import NoMatch from './NoMatch';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Grid} />
    <Route component={NoMatch} />
  </Switch>
)

export default Main;