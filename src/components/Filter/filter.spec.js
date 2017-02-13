/* eslint react/jsx-filename-extension: 0, no-unused-expressions: 0 */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import immutable from 'immutable';

import Filter from './';

const data = immutable.fromJS({
  name: 'camelTest',
  filters: ['name1', 'name2', 'name3', 'name4'],
});

describe('<Filter />', () => {
  const onChange = sinon.spy();
  const wrapper = shallow(<Filter data={data} onChange={onChange} />);

  it('should have the correct title without camel case', () => {
    expect(wrapper.find('.Filter__name').text()).to.equal('Camel Test');
  });

  it('should return the value on change.', () => {
    expect(onChange.calledOnce).to.be.false;
    wrapper.find('select').simulate('change', { target: { value: 'test' } });
    expect(onChange.calledWith({ name: 'camelTest', value: 'test' })).to.be.true;
  });

  it('should have 5 options inlucing the all option', () => {
    expect(wrapper.find('select option').length).to.equal(5);
  });
});

