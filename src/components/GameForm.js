import React from 'react';
import '../styles/gameform.css';

export default () => {
  return (
    <form>
      <input type='text' name='userGuess' id='userGuess' className='text' maxlength='3' autocomplete='off' placeholder='Enter your Guess' required='' />
      <input type='submit' id='guessButton' className='button' name='submit' value='Guess' />
    </form>
  )
}
