import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { images} from '../../constants';


import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans"> पत्ता - पेट्रोलपंप जवळ, अंजनगाव, सोलापूर</p>
        <p className="p__opensans">अजिंक्य पाटील - 7709094948</p>
        <p className="p__opensans">मुकुंद पाटील - 9561303999</p>
        <p className="p__opensans">गजानन कुरपाळ - 8329450118</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">" संपूर्ण कुटुंबाला आनंद देण्यासाठी ताजे आणि स्वादिष्ट पारंपारिक अन्न."</p>
        <img src={images.spoon} alt="" className='spoon__img' style={{marginTop:15}} />
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        
        <p className="p__opensans" >सोमवार ते रविवार <br />सकाळी ०७.०० ते रात्री १०.००</p>
      
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© copyright 2023 Hotel Ashirwad | All rights reserved | Designed by Anil Gaikwad (Evolve Web Solapur) |
</p>
    </div>
  </div>
);

export default Footer;
