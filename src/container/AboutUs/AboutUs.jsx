import React from 'react';

import {images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about-us" className='spoon__img' />
        <p className="p__opensans">आशिर्वाद हॉटेलमध्ये आपले स्वागत आहे. उबदार, मैत्रीपूर्ण सेवा प्रदान करण्यात आणि सर्वांसाठी तोंडाला पाणी आणणारे पाककलेचा आनंद तयार करण्यात आम्हाला अभिमान वाटतो. आम्ही फक्त आमचे अन्न साधे ठेवून ते खास बनवण्याचा प्रयत्न करतो !!! <br /> <br />आशिर्वाद हॉटेलमध्ये आम्ही आमच्या पाककृतींसह खरोखर अद्वितीय आहोत आणि आम्ही आमच्या तयारीमध्ये सर्वोत्तम आणि उच्च दर्जाचे शुद्ध पदार्थ आणि ताज्या भाज्या वापरतो हे सांगण्याची गरज नाही. आम्ही आमच्या स्वयंपाकघर आणि आवारात स्वच्छतेच्या उच्च मानकांचा सराव करतो. आमच्या पाहुण्यांना उत्तम जेवणाचा अनुभव देण्यासाठी आम्ही वचनबद्ध आहोत. <br /> <br />लोकांना आरोग्यदायी दर्जाच्या तयारीत स्ट्रीट फूड हवे आहे हे समजून आम्ही आता आशीर्वाद येथे पुरी भाजी, वडा पाव, भजी आणि मिसळ पाव पदार्थ बनवायला सुरुवात केली आहे.</p>
        <button type='button'  className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about-us" className='spoon__img' />
        <p className="p__opensans">आशिर्वाद हॉटेलमध्ये आपले स्वागत आहे. उबदार, मैत्रीपूर्ण सेवा प्रदान करण्यात आणि सर्वांसाठी तोंडाला पाणी आणणारे पाककलेचा आनंद तयार करण्यात आम्हाला अभिमान वाटतो. आम्ही फक्त आमचे अन्न साधे ठेवून ते खास बनवण्याचा प्रयत्न करतो !!! <br /> <br />आशिर्वाद हॉटेलमध्ये आम्ही आमच्या पाककृतींसह खरोखर अद्वितीय आहोत आणि आम्ही आमच्या तयारीमध्ये सर्वोत्तम आणि उच्च दर्जाचे शुद्ध पदार्थ आणि ताज्या भाज्या वापरतो हे सांगण्याची गरज नाही. आम्ही आमच्या स्वयंपाकघर आणि आवारात स्वच्छतेच्या उच्च मानकांचा सराव करतो. आमच्या पाहुण्यांना उत्तम जेवणाचा अनुभव देण्यासाठी आम्ही वचनबद्ध आहोत. <br /> <br />लोकांना आरोग्यदायी दर्जाच्या तयारीत स्ट्रीट फूड हवे आहे हे समजून आम्ही आता आशीर्वाद येथे पुरी भाजी, वडा पाव, भजी आणि मिसळ पाव पदार्थ बनवायला सुरुवात केली आहे.</p>
        <button type='button'  className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
