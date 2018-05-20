import React from 'react';
import {connect} from 'react-redux';
import '../styles/gameform.css';
import {getGuess} from '../actions/index';


export class GameForm extends React.Component {
  onGuessing(event) {
    event.preventDefault();
    this.props.dispatch(getGuess(this.userGuess)); this.userGuess = '';
    document.getElementById('userGuess').value = '';
    document.getElementById('userGuess').focus();
  }
  render() {
    const display = {
      display: this.props.feedback==='You got it!' ? 'none' : 'block'
    }
    return(
      <form onSubmit={e => this.onGuessing(e)}>
        <input  type='number' 
                name='userGuess' 
                id='userGuess' 
                className='text' 
                min='1'
                max='100'
                autoComplete='off' 
                placeholder='Enter your Guess' 
                required
                onChange={event => (this.userGuess = event.target.value)}
                style={display} />
        <input  type='submit' 
                id='guessButton' 
                className='button' 
                name='submit' 
                value='Guess'
                style={display} />
      </form>
    );
  }
  
}

const mapStateToProps = state => ({
  feedback: state.feedback
});

export default connect(mapStateToProps)(GameForm);
