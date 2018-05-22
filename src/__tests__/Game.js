import React from 'react';
import {shallow} from 'enzyme';
import Game from '../components/Game';
import store from '../store';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game store={store}/>);
  });
});