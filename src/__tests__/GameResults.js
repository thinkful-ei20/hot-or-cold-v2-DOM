import React from 'react';
import {shallow} from 'enzyme';
import GameResults from '../components/GameResults';
import store from '../store';

describe('<GameResults />', () => {
  it('Renders without crashing', () => {
    shallow(<GameResults store={store} />);
  });
});