import React from 'react'

import './description.css';
import img1 from '../../Assets/yoga.jpg';

const Description = () => {
  return (
    <div className="second_about">
        <div className='imgcontainer'>
            <img className='imgcompany' src={img1} alt="" />
        </div>
        <div id="companydesc">
            <h2 className="titlecompany">MyHealth Can help You</h2>
            <p className='descrive'>Myhealth can help anyone improve their quality 
            of life through yoga teachers.</p>
            <p className='descrive'>Yoga also helps both the body and mind,
             improving flexibility, strength, and physical balance. 
             Through regular practice, stress is reduced and mental 
             calmness is promoted, cultivating a deep connection 
             between the mind and body. </p>
        </div>
    </div>
  )
}

export default Description