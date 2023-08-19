import Hero from 'components/Hero/Hero';
import React from 'react';
import carVideo from '../../assets/car.mp4';
import About from 'components/About/About';
import AboutInfo from 'components/About/AboutInfo';
import Slider from 'components/Slider/Slider';
import { SliderData } from 'components/sliderData/sliderData';
const HomePage = () => {
  return (
    <div>
      <Hero video={carVideo} />
      <About />
        <AboutInfo />
        <Slider  slides={SliderData}/>
    </div>
  );
};

export default HomePage;
