import React from 'react';
import {shallow} from 'enzyme';
import NavBar from '../components/NavBar';

describe('<NavBar />', () => {
  it('Renders without crashing', ()=>{
    shallow(<NavBar />);
  });
});
