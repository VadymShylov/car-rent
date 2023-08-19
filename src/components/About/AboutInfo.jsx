import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const AboutInfo = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LOREM IPSUM DOLOR SIT AMET CONSECTETUR </h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
            architecto quos! Dolor eaque culpa deserunt facere quos. Sapiente
            quidem amet rerum sit mollitia excepturi. Beatae animi impedit,
            laboriosam amet quasi minima cupiditate dolore ad, unde voluptatem
            perferendis atque natus? Commodi sunt dolor, inventore, doloribus
            vero aliquid ex velit nihil architecto maiores voluptas, neque
            nostrum numquam placeat animi nesciunt? Eum porro, harum et quis
            voluptatibus natus eveniet. Qui optio ratione alias laborum non
            officia cum est mollitia totam minima, quasi harum labore, fugiat
            molestias ad omnis facere quos? Sapiente accusamus corrupti non.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae!
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center ">
          <p className="pt-2">RENT and GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">
            <a href="tel:+380730000000">RENT NOW AND SAVE</a>
          </p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-4">
            <label>From</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <div className="flex flex-col my-4">
            <label>To</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default AboutInfo;
