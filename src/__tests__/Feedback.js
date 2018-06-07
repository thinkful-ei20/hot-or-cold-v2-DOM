import React from 'react';
import {shallow} from 'enzyme';
import Feedback from '../components/Feedback';
import store from '../store';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback store={store} />);
  });
});