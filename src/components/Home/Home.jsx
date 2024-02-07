import React from 'react';
import "./homeStyle.css";
import img1 from '../../Assets/slowlife.jpg';

const Home = () => {
  return (
    <div className="background">
        <img src={img1} alt="img" className="backimg" />
        
        <div className="home_text">
            <h1 className='home_title'>Feel extraordinary</h1>
            <p className='home_description'>Our legacy speaks through our healed clients</p>
            <a className='btnhome' href="/therapists">
                View Therapists
            </a>
        </div>
    </div>
  )
}

export default Home