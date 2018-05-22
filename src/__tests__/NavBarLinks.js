import React from 'react';
import {shallow} from 'enzyme';
import NavBarLinks from '../components/NavBarLinks';
import store from '../store';

describe('<NavBarLinks />', ()=>{
  it('Renders without crashing', ()=>{
    shallow(<NavBarLinks store={store}/>);
  });
});