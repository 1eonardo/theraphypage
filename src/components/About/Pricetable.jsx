import React from 'react';
import './about.css';

const pricetable = () => {
  return (
    
    <div className="pricing-table">
            
        {/* Cards here */}
        <div className="grid">
        <div className="box basic">
            <div className="price"><b className='price1'>$90 </b> <span className='sesion'>/ session</span> </div>
            <div className="title">Therapist Details</div>
            <div className="therapist">Doctor House</div>
            <div className="experience">7 years of experience</div>
            <div className='btnpricecont'>
            <a href='/' className='btnprice'>View Therapist</a>
            </div>
        </div>
        <div className="box mainCard">
            <div className="price"><b className='price1'>$95 </b> <span className='sesion'>/ session</span> </div>
            <div className="title">Therapist Details</div>
            <div className="therapist">Doctor Strange</div>
            <div className="experience">8 years of experience</div>
            <div className='btnpricecont'>
            <a href='/' className='btnprice'>View Therapist</a>
            </div>
        </div>
        <div className="box ninja">
            <div className="price"><b className='price1'>$70 </b> <span className='sesion'>/ session</span> </div>
            <div className="title">Therapist Details</div>
            <div className="therapist">Doctor Milagro</div>
            <div className="experience">5 years of experience</div>
            <div className='btnpricecont'>
            <a href='/' className='btnprice'>View Therapist</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default pricetable