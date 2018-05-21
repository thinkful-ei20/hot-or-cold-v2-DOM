import React from 'react';
import Feedback from './Feedback';
import GameForm from './GameForm';
import GameResults from './GameResults';
import GameGuess from './GameGuess';
import StatusUpdate from './StatusUpdate';

import '../styles/game.css';


export default function Game(props){
  return(
  <section aria-label='Game Section' aria-describedby='feedback' className='game'>
    <Feedback />
    <GameForm />
    <GameGuess />
    <GameResults />
    <StatusUpdate />
  </section>
)};