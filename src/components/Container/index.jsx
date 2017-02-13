import React, { PropTypes } from 'react';
import './styles.scss';

const Container = ({children}) => <div className="Container">{children}</div>;

Container.propTypes = {
  children: PropTypes.element.isRequired
};

export default Container;
