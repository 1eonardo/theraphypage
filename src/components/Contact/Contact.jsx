import React from 'react'
import './contact.css';
import img1 from '../../Assets/mail.png';
import img2 from '../../Assets/call.png';

const Contact = () => {
  return (
    <div id='contact'>  
        <div className='contact-container'>
            <div className="form-container">
                <div className="contact-form">
                    <h1 className='titlecontact'>CONTACT DETAILS</h1>
                    <h2 className='subtitlecontact'>San Francisco</h2>
                    <p className='descp'>2425 Chestnut St, San Francisco, CA 94123.</p>
                    
                    <a className='btnMail' href="/therapists">
                        <img className='btn1' src={img1} alt="" /> info@MyHealth.com
                    </a>
                    <a className='btnCall' href="/therapists">
                        <img className='btn1' src={img2} alt="" /> (01) 555-0707
                    </a>
                </div>
            </div>

            <div className="map">
                <iframe title="place" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.18160012334!2d-122.52000197122138!3d37.75767131436719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20California%2C%20EE.%20UU.!5e0!3m2!1ses!2sni!4v1703004681095!5m2!1ses!2sni" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Contact