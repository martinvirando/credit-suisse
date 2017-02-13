/* eslint react/jsx-filename-extension: 0, no-unused-expressions: 0 */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import immutable from 'immutable';

import OrderItem from './';

const data = immutable.fromJS({
  deliveryCountry: 'Germany',
  manufacturer: 'Denzil Jeans',
  gender: 'Female',
  style: 'Relaxed',
  color: 'Dark Blue',
  count: 14,
  orderDate: '2016-03-20T00:00:00.000Z',
  size: 12,
});

const titles = ['deliveryCountry', 'manufacturer', 'gender', 'style', 'color', 'size'];

describe('<OrderItem />', () => {
  const wrapper = mount(<OrderItem item={data} titles={titles} />);
  it('should have 7 columns', () => {
    expect(wrapper.find('td').length).to.equal(7);
    expect(wrapper.find('td').at(6).text()).to.equal(String(data.get('count')));
  });
});

