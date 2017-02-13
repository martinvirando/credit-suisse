import React from 'react';

import './App.scss';

const App = ({children, orders, actions}) => <div className="app">{children}</div>;

App.propTypes = {
  children: React.PropTypes.any
};

export default App;