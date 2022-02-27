import React from 'react';
import Navigation from '../components/Navigation';
import CV from '../librairie/CV.pdf'

const Home = () => {
  return (
    <div className='home'>
      <Navigation />
      <div className='homeContent'>
        <div className='content'>
          <h1> Nicolas BURTZ </h1>
          <h3> Un de mes principaux objectifs est de devenir un VRAI developeur WEB full stack !!</h3>
          <div className='pdf'>
<a href={CV} target={"blank"}> Télécharger CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

