import React from 'react';
import car1 from '../../assets/pic/car1.jpg';
import car2 from '../../assets/pic/car2.jpg';
import car3 from '../../assets/pic/car3.jpg';
import car4 from '../../assets/pic/car4.jpg';
import car5 from '../../assets/pic/car5.jpg';

const About = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>About Us</h1>
      <p className="py-4">Lorem ipsum dolor sit amet.</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={car4}
          alt="car"
        />
        <img className="w-full h-full object-cover" src={car1} alt="car" />
        <img className="w-full h-full object-cover" src={car3} alt="car" />
        <img className="w-full h-full object-cover" src={car2} alt="car" />
        <img className="w-full h-full object-cover" src={car5} alt="car" />
      </div>
    </div>
  );
};

export default About;
