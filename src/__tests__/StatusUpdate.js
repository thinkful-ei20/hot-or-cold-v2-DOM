import React from 'react';
import {shallow} from 'enzyme';
import StatusUpdate from '../components/StatusUpdate';
import store from '../store';

describe('<StatusUpdate />', ()=>{
  it('Renders without crashing', ()=>{
    shallow(<StatusUpdate store={store}/>);
  });
});