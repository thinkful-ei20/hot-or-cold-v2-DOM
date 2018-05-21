import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  feedback: state.feedback, guessCount: state.guesses.length
});

export const Feedback = props => {
  const num = props.guessCount; let tryAgain;
  console.log(props.guessCount);
  if(num!==0){
    tryAgain = <span className='visuallyHidden'>Try another guess.</span>;
  }
  return(
  <h2 guesscount={num} 
      id='feedback' 
      role='status' 
      aria-live='assertive' 
      aria-atomic='true'>{props.feedback} {tryAgain}</h2>
)}

export default connect(mapStateToProps)(Feedback);