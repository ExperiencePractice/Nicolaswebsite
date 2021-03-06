import React from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
  return (
    <div className='contact'>
      <Navigation />
      <div className='contactContent'>
        <div className='header'></div>
          <div className='contactBox'>
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className='fas fa-map-marker-alt'></i>
                <span>Paris</span>
              </li>
              <li>
                <i className='fas fa-envelope'></i>
                <span>burtznicolas@yahoo.fr</span>
              </li>
            </ul>
          </div>
        
      </div>
    </div>
  );
};

export default Contact;

