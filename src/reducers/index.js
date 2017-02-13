import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ordersState from './orders-state';

module.exports = combineReducers({
  routing: routerReducer,
  orders: ordersState,
});
