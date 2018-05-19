import React from 'react';
import GameForm from './GameForm';
import GameResults from './GameResults';
import GameGuess from './GameGuess';

import '../styles/game.css';

export default () => (
  <section className='game'>
    <h2 id='feeback'>Make Your Guess!</h2>
    <GameForm />
    <GameGuess />
    <GameResults />
  </section>
);