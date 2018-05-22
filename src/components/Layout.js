import React from 'react';
import Header from './Header';
import Game from './Game';
import Footer from './Footer';

export default function Layout(props){
  return [
    <Header />,
    <main role='main'>
      <Game />
    </main>,
    <Footer />
  ]
};
