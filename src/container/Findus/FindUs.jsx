import React from 'react';


import { images} from '../../constants';
import {SubHeading} from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title="Find us" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem'}}>Contact</h1>
      <div className="app__wrapper-content">
      <p className="p__opensans">Near Petrol Pump, Anjangaon, Solapur</p>
      <p className="p__cormorant" style={{color: '#DCCA87', margin: '2rem 0'}}>Opening hours</p>
      <p className="p__opensans">Mon - Sun : 07.00 AM - 10.00 PM</p>
      </div>
      <button className="custom__button" style={{marginTop:'2rem'}}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="contact" />
    </div>
  </div>
);

export default FindUs;
