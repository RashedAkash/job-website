import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/h1.jpg';
import img2 from '../../assets/h2.jpg';
import img3 from '../../assets/h3.jpg';
import img4 from '../../assets/h4.jpg';
const Banner = () => {
  return (
    <div>
        <Carousel>
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                    
                </div>
                
            </Carousel>
    </div>
  );
};

export default Banner;