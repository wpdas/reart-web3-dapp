import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '@app/pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
