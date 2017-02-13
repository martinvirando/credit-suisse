import React, { PropTypes } from 'react';
import OrderItem from '../OrderItem';
import { uncamelCase } from '../../utils';
import './styles.scss';

const Orders = ({items, titles}) => {
  return (
    <table className="Orders">
      <thead>
        <tr>
          {titles.map(title => <th key={title}>{uncamelCase(title)}</th>)}
          <th>Count</th>
        </tr>
      </thead>
      <tbody>{items.map((order, idx) => <OrderItem item={order} titles={titles} key={`order-${idx}`}/>)}</tbody>
    </table>
  )
};

Orders.propTypes = {
  // These are objects as they are immutable objects.
  items: PropTypes.object.isRequired,
  titles: PropTypes.array.isRequired
};

export default Orders;
