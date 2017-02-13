import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dashboard from './Dashboard';
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
)(Dashboard);
