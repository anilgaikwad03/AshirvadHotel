import React from 'react';

import { images} from '../../constants';
import {SubHeading, MenuItem} from '../../components';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {

const scrollRef = React.useRef(null);

const scroll = (direction) => {
  const {current} = scrollRef;

  if(direction === 'left') {
    current.scrollLeft -= 300;
  }
  else{
    current.scrollLeft += 300;
  }

}

return (
  <div className='app__gallery flex__center'>
    <div className="app__gallery-content">
      <SubHeading title="हॉटेल" />
      <h1 className="headtext__cormorant">आशीर्वाद</h1>
      <p className="p__opensans" style={{color:'#AAA', marginTop:'2rem'}}>
      खरोखरच अनोखा अनुभव घेण्यासाठी तुमचा खाजगी कार्यक्रम किंवा हॉटेल आशीर्वाद येथे ग्रुप लंच/डिनर बुक करा. आशीर्वाद त्यांच्या ग्राहकांना विविध सेवा पुरवते जसे - अन्न, कार्यक्रम, वाढदिवस साजरा करण्याचे ठिकाण, वाहतूक सेवा, बाईक आणि कार वॉशिंग सेवा.
      </p>

      <button type='buttton' className='custom__button'>Contact</button>
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) =>(
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="images" />
                {/* <BsInstagram className='gallery__image-icon'/> */}
              </div>
          ))}
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
);
}

export default Gallery;
