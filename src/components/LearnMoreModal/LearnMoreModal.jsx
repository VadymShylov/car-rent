import Modal from 'components/Modal/Modal';

import useToggleModal from 'components/hooks/useToggleModal';
import React from 'react';

const LearnMoreModal = ({ catalog }) => {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();

  return (
    <div>
      <button
        type="button"
        onClick={openModal}
        className="text-sm font-semibold leading-5 text-white w-full bg-[#3470ff] justify-center items-center px-[99px] py-3 rounded "
      >
        Lern More
      </button>
      {isOpen && (
        <Modal
          closeModal={() => closeModal()}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <div className="flex flex-col w-full justify-evenly">
            <img
              src={catalog.img}
              alt={catalog.make}
              className="w-full h-[246px] object-cover rounded-xl"
            />
            <p className="text-[16px] font-medium leading-6 text-[#121417] pt-[14px]">
              {catalog.make}
              <span className="text-blue-600"> {catalog.model}</span>,
              {catalog.year}
            </p>

            <p className="text-[12px] font-normal leading-[18px] text-black/50 py-[10px] max-w-[270px]">
              {catalog.address}|{catalog.rentalCompany}|{catalog.type}|
              {catalog.make}|{catalog.id}|{catalog.accessories}
            </p>
            <p className="text-[14px] font-normal leading-5 text-[#121417]">
              {catalog.description}
            </p>
            <p className="text-[14px] font-medium leading-5 text-[#121417] mt-[24px]">
              Accessories and functionalities:
            </p>
            <ul className="flex">
              {catalog.accessories.map((accessorie, index) => (
                <li
                  key={index}
                  className="text-[12px] font-normal leading-[18px] text-black/50 max-w-[270px]"
                >
                  {accessorie} |
                </li>
              ))}
            </ul>
            <p className="text-[14px] font-medium leading-5 text-[#121417] mt-[10px]">
              Rental Conditions:
            </p>
            <div className="flex flex-col">
              <ul className="p-[5px] font-normal  ">
                <li className="text-[12px] font-normal leading-[18px] tracking-[-0.24px] items-end">
                  {catalog.rentalConditions}
                </li>
              </ul>
              <ul className="flex gap-[18px]">
                <li className="text-[12px] font-normal leading-[18px] tracking-[-0.24px]">
                  mileage:{catalog.mileage.toLocaleString('en-US')}
                </li>
                <li className="text-[12px] font-normal leading-[18px] tracking-[-0.24px]">
                  rentalPrice:{catalog.rentalPrice}
                </li>
              </ul>
            </div>
            <div className="mt-[32px] flex justify-start items-start ">
              <a
                href="tel:+380730000000"
                className=" text-[14px] font-semibold leading-5 bg-[#3470ff]  px-[50px] py-[12px] text-white  rounded  justify-start items-start "
              >
                Rental car
              </a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default LearnMoreModal;
