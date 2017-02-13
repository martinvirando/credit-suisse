import React, { PropTypes } from 'react';
import moment from 'moment';
import Column from '../Column';
import './styles.scss';

const OrderItem = ({item, titles}) => {
  return (
    <tr className="OrderItem">
      {titles.map((title, i) => {
        return <Column key={`title-${i}`}>{item.get(title)}</Column>
      })}
      <td>{item.get('count')}</td>
    </tr>
  );
};

OrderItem.propTypes = {
  item: PropTypes.object,
  titles: PropTypes.array
};

export default OrderItem;
