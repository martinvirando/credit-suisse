import _ from 'underscore';

export const unique = arr => [...new Set(arr)];

export const pluckAndRemoveDups = (arr, type) => {
  const items = arr.map(item => item[type]);
  return unique(items);
};

export const getFilters = (arr) => {
  // Get the keys of each object...
  const keys = unique(_.flatten(arr.map(item => Object.keys(item))));
  // Once we have the keys we need to build an object with all their filters...
  return keys.reduce((filters, key) => {
    if (key === 'count' || key === 'orderDate') return filters;
    // Pluck all the filters and make sure there's no dupes.
    const items = unique(_.pluck(arr, key));
    filters.push({ name: key, filters: items });
    return filters;
  }, []);
};

export const uncamelCase = str =>
  str.replace(/([A-Z])/g, ' $1')
     .replace(/^./, replaced => replaced.toUpperCase());

export const filterItems = (filters, items) => {
  const obj = {};
  filters.forEach((filter) => {
    let { value } = filter;
    if (filter.name === 'size') {
      value = Number(value);
    }
    obj[filter.name] = value;
  });
  return _.where(items, obj);
};
