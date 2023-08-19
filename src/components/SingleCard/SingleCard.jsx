import HeartBtn from 'components/HeartBtn/HeartBtn';
import LearnMoreModal from 'components/LearnMoreModal/LearnMoreModal';

import React from 'react';

const SingleCard = ({ title, catalogs }) => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-[#3470ff] font-bold text-4xl text-center">{title}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {catalogs.map(catalog => (
          <div key={catalog.id} className="border shadow-lg  rounded-lg ">
            <div className="rounded-xl relative">
              <HeartBtn catalog={catalog} />
              <img
                src={catalog.img}
                alt={catalog.make}
                className="w-full h-[200px] object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-col ">
              <p className="text-[16px] font-medium leading-6 text-[#121417] pt-[14px]">
                {catalog.make}
                <span className="text-[#3470ff]"> {catalog.model}</span>,
                {catalog.year}
                <span> {catalog.rentalPrice}</span>
              </p>
              <p className="text-[12px] font-normal leading-[18px] text-black/50 py-[10px] max-w-[270px]">
                {catalog.address}|{catalog.rentalCompany}|{catalog.type}|
                {catalog.make}|{catalog.id}|{catalog.accessories}
              </p>
            </div>
            <LearnMoreModal catalog={catalog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCard;
