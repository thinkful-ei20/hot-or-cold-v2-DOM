import React from 'react';
import {shallow} from 'enzyme';
import Layout from '../components/Layout';

describe('<Layout />', () => {
  it('Renders without crashing', () => {
    shallow(<Layout />);
  });
});
