import _ from 'underscore';
import immuatable, { fromJS } from 'immutable';
import { getFilters, filterItems } from '../utils';
import orders from '../../stub/orders.json';

const initialState = immuatable.fromJS({
  fetchedInitialData: false,
  selectedFilters: [],
  orders: _.sortBy(orders, 'count').reverse(),
  filters: getFilters(orders),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_ITEMS': {
      const { filter } = action;

      /*
        This here dicates what filters are stored in the state.
      */
      const newState = state.updateIn(['selectedFilters'], (arr) => {
        const index = arr.findIndex(item => item.name === filter.name);
        // If the filter name does not already exist then we need to add it.
        if (!arr.size || index === -1) {
          return arr.push(filter);
        }
        // If the filter has no value then reset back to all.
        if (!filter.value) {
          return arr.delete(index);
        }
        return arr.update(index, () => filter);
      });

      // I took the filters and now need to get the correct items that match...
      const selected = newState.get('selectedFilters').toJS();
      let items;
      if (selected.length) {
        items = filterItems(selected, orders);
      } else {
        items = orders;
      }
      const ordered = _.sortBy(items, 'count').reverse();
      return newState.set('orders', fromJS(ordered));
    }

    default: {
      return state;
    }

  }
};
