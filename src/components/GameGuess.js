import React from 'react';
import {connect} from 'react-redux';

export function GameGuess(props){
  return(
  <p>Guess #<span id="count">{props.guessCount}</span>!</p>
)};

const mapStateToProps = state => ({
  guessCount: state.guesses.length
})

export default connect(mapStateToProps)(GameGuess);