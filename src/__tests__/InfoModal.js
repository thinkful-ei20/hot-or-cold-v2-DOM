import React from 'react';
import {shallow} from 'enzyme';
import InfoModal from '../components/InfoModal';
import store from '../store';

describe('<InfoModal />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoModal store={store} />);
  });
});