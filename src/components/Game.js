import React from 'react';
import GameForm from './GameForm';
import '../styles/game.css';

export default () => {
  return(
    <section className='game'>
      <h2 id='feeback'>Make Your Guess!</h2>
      <GameForm />
    </section>
  );
}
