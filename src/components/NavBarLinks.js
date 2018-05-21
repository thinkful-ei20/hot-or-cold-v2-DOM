import React from 'react';
import {connect} from 'react-redux';
import {resetGame, toggleInfoModal} from '../actions/index';


export function NavBarLinks(props){
  return (
  <ul className='clearfix'>
    <li>
      <a className='what' href='#what' aria-label='How to Play' onClick={() => 
      props.dispatch(toggleInfoModal(!props.modalView))}>About This Game</a>
    </li>
    <li>
      <a className='new' href='#new' aria-label='Start a new game' onClick={() => 
        props.dispatch(resetGame(Math.floor(Math.random()*100) + 1))}>+ New Game</a> 
    </li>
  </ul>
)};

const mapStateToProps = state => ({
  modalView: state.modalView
});

export default connect(mapStateToProps)(NavBarLinks);
