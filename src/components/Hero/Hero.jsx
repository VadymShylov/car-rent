import React from 'react';
import carVideo from '../../assets/car.mp4';

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={carVideo}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover "
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/50"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>Lorem, ipsum dolor.</h1>
        <h2 className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
