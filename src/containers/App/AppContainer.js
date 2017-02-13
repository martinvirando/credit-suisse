import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './App';
import ordersActions from '../../actions/orders.actions';

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ordersActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
