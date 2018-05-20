import React from 'react';
import {connect} from 'react-redux';
import {resetGame} from '../actions/index';


export function NavBarLinks(props){
  return (
  
  <ul className='clearfix'>
    <li>
      <a className='what' href='#'>What ?</a>
    </li>
    <li>
      <a className='new' href='#' onClick={() => 
        props.dispatch(resetGame(Math.floor(Math.random()*100) + 1))}>+ New Game</a> 
    </li>
  </ul>
)};

export default connect()(NavBarLinks);
