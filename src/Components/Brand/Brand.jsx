import Marquee from "react-fast-marquee";
import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
import brand5 from '../../assets/brand5.png'
import brand6 from '../../assets/brand6.png'

const Brand = () => {
  return (
    <div>
       <Marquee>
        <div className="bg-blue-900 py-4 gap-2 flex">
          <img src={brand1} alt="" />
    <img src={brand2} alt="" />
    <img src={brand3} alt="" />
    <img src={brand4} alt="" />
    <img src={brand5} alt="" />
    <img src={brand6} alt="" />
    </div>
  </Marquee>
    </div>
  );
};

export default Brand;