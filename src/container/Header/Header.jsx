import React from 'react';

import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="संपूर्ण कुटुंबाला आनंद देण्यासाठी ताजे आणि स्वादिष्ट पारंपारिक अन्न."/>
      <h1 className='app__header-h1'>हॉटेल आशिर्वाद मध्ये आपले स्वागत आहे.</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>आम्ही विविध प्रकारचे खाद्यपदार्थ अनुभवणारे उत्तम जेवणाचे वातावरण देणारे एक मल्टी-क्युझिन हॉटेल आहोत.
                                                            सोबतच आशिर्वाद त्यांच्या ग्राहकांना विविध सेवा पुरवते जसे - वाढदिवस / कार्यक्रम साजरा करण्याचे ठिकाण, Transportation Services, बाईक आणि कार वॉशिंग सेवा.</p>
      <button type='button' className='custom__button'>मेनू</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
