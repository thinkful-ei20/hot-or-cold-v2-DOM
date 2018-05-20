import React from 'react';
import Feedback from './Feedback';
import GameForm from './GameForm';
import GameResults from './GameResults';
import GameGuess from './GameGuess';

import '../styles/game.css';

export default function Game(props){
  return(
  <section className='game'>
    <Feedback />
    <GameForm />
    <GameGuess />
    <GameResults />
  </section>
)};