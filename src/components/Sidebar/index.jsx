import React, {PropTypes} from 'react';
import './styles.scss';

const Sidebar = ({children}) => {
  return <aside className="Sidebar">{children}</aside>;
};

Sidebar.propTypes = {
  children: PropTypes.object.isRequired
};

export default Sidebar;
