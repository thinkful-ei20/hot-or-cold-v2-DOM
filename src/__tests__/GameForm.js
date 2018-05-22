import React from 'react';
import {shallow} from 'enzyme';
import GameForm from '../components/GameForm';
import store from '../store';

describe('<GameForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GameForm store={store} />);
  });
});