import { expect } from 'chai';
import { unique, getFilters, uncamelCase, filterItems } from './';

describe('utils', () => {
  // Unique
  describe('unique: should remove duplicates from arrays', () => {
    it('should an array and return a new array without dupes', () => {
      const test = ['item', 'item', 'item', 'item2'];
      expect(unique(test).length).to.equal(2);
      expect(unique(test)[0]).to.equal('item');
      expect(unique(test)[1]).to.equal('item2');
    });
  });

  describe('getFilters: Takes all the values and keys and creates the filters for the sidebar.', () => {
    const data = [{
      name: 'test1',
      key: 'test2',
    }];

    it('should take all the values from the keys as filters and assign the key as the name.', () => {
      expect(getFilters(data)).to.eql([
        { name: 'name', filters: ['test1'] },
        { name: 'key', filters: ['test2'] },
      ]);
    });
  });

  describe('uncamelCase: Takes a camel case string and splits and uppercases the first letter', () => {
    it('should turn camel case into UI friendly code', () => {
      const str = 'testString';
      expect(uncamelCase(str)).to.equal('Test String');
    });
  });

  describe('filterItems: Takes all the orders and filters them based on user selection', () => {
    const filters = [{ name: 'name', value: 'Test Name' }, { name: 'size', value: '14' }];
    const items = [
      {
        name: 'Test Name',
        size: 14,
      },
      {
        name: 'Not Valid',
        size: 14,
      },
    ];
    it('should filter', () => {
      expect(filterItems(filters, items).length).to.equal(1);
      expect(filterItems(filters, items)[0]).to.eql(items[0]);
      expect(filterItems(filters, items)[0].size).to.equal(14);
    });
  });
});
