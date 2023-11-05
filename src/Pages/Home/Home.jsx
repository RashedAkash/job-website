import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Brand from '../../Components/Brand/Brand';
import Price from '../../Components/Price/Price';
import Featured from '../../Components/Featured/Featured';

const Home = () => {
  return (
    <div>
      <Banner />
      <Featured />
      <Price />
      <Brand />
    </div>
  );
};

export default Home;