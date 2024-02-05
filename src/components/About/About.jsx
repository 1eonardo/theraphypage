import React from 'react';
import './about.css';
import Pricetable from './Pricetable';



const about = () => {
  return (
    <div className="about_container">
      <div className="about_first">
        <p className="about_prom">DECEMBER PROMOTION</p>
        <h1 className="about_title">HIRE THERAPESTS</h1>
        <p className="about_description">
          Get the best of both worlds. Experience the benefits of our infrared
          sauna and cold <br />
          plunge. Choose your therapy below!
        </p>
      </div>

      <Pricetable />
    </div>
  );
};

export default about;
