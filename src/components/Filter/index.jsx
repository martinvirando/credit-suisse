import React, { PropTypes } from 'react';
import { uncamelCase } from '../../utils';
import moment from 'moment';
import './styles.scss';

const Filter = ({data, onChange}) => {
  const name = data.get('name');
  const filters = data.get('filters');
  return (
    <div key={name} className="Filter">
      <p className="Filter__name">
        {uncamelCase(name)}
      </p>
      <select onChange={e => onChange({ name, value: e.target.value})}>
        <option value="">All</option>
        {filters.map(filter => {
          if (name === 'orderDate') {
            filter = moment(filter).format('MMMM Do YYYY');
          }
          return <option key={filter} value={filter}>{filter}</option>
        })}
      </select>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default Filter;
