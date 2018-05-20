import React from 'react';
import Header from './Header';
import Game from './Game';

export default function Layout(props){
  return (
  <div>
    <Header />
    <main role='main'>
      <Game />
    </main>
  </div>
)};
