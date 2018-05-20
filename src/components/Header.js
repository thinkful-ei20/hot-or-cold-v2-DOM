import React from 'react';
import NavBar from './NavBar';
import InfoModal from './InfoModal';
import '../styles/header.css'

export default function Header(props){
  return (
  <header>
      <NavBar />
      <InfoModal />
      <h1>HOT or COLD</h1>
  </header>
)};
