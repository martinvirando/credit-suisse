import React, { PropTypes } from 'react';
import './styles.scss';

const Column = ({children}) => <td className="Column">{children}</td>

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default Column;