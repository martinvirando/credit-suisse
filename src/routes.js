/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Dashboard, NotFound } from './containers';

export default (store) => { // eslint-disable-line
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
