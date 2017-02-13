import React from 'react';
import {
  Orders,
  Container,
  Sidebar,
  Filter,
  SortByFilter
} from '../../components';

const Dashboard = ({actions, orders}) => {
  const filters = orders.get('filters');
  const titles = filters.toJS().map(title => title.name);
  const items = orders.get('orders');
  return (
    <div className="Dashboard">
      <div className="Dashboard__items">
        <Sidebar>
          {filters.map(filter => (
            <Filter
              data={filter}
              key={filter.get('name')}
              onChange={actions.filterItems} />
          ))}
        </Sidebar>
        <Container>
          {items.size ? <Orders items={items} titles={titles} /> : <h1>No Results</h1>}
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
