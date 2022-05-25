import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Collection from '@app/pages/Collection';
import Details from '@app/pages/Details';
import Home from '@app/pages/Home';
import MyNFTs from '@app/pages/MyNFTs';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/my-nfts" component={MyNFTs} />
      <Route path="/collection" component={Collection} />
      <Route path="/details/:id" component={Details} />
      <Route path="/" component={Home} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
