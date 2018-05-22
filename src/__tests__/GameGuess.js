import React from 'react';
import {shallow} from 'enzyme';
import GameGuess from '../components/GameGuess';
import store from '../store';

describe('<GameGuess />', ()=>{
  it('Renders without crashing', ()=>{
    shallow(<GameGuess store={store}/>);
  });
});