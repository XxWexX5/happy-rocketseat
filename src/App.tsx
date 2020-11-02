import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css';
import './styles/pages/landing.css';

import logo from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="Happy" />

        <main className="main">
          <h1 className="title">Leve felicidade para o mundo</h1>
          <p className="text">Visite organatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong className="location-title">Rio do Sul</strong>
          <span className="location-text">Santa Catarina</span>
        </div>

        <a href="#" className="enter-app">
          <FiArrowRight size="26" color="rgba(0, 0, 0, .6)" />
        </a>
      </div>
    </div>
  );
}

export default App;
