import React from 'react';
import {connect} from 'react-redux';
import '../styles/gameform.css';
import {getGuess} from '../actions/index';


export class GameForm extends React.Component {
  onGuessing(event) {
    event.preventDefault();
    this.props.dispatch(getGuess(this.userGuess));
    this.userGuess = '';
    document.getElementById('userGuess').value = '';
    document.getElementById('userGuess').focus();
  }
  render() {
    return(
      <form onSubmit={e => this.onGuessing(e)}>
        <input  type='text' 
                name='userGuess' 
                id='userGuess' 
                className='text' 
                maxLength='3' 
                autoComplete='off' 
                placeholder='Enter your Guess' 
                required
                onChange={event => (this.userGuess = event.target.value)} />
        <input  type='submit' 
                id='guessButton' 
                className='button' 
                name='submit' 
                value='Guess' />
      </form>
    );
  }
  
}

export default connect()(GameForm);
