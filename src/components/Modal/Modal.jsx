import React, { useEffect } from 'react';

import { createPortal } from 'react-dom';
import { IoIosClose } from 'react-icons/io';
// import { ButtonIcon, ModalBackdrop, ModalContent } from './ModalFormStyled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({
  children = '',
  handleKeyDown = () => {},
  handleBackdropClick = () => {},
  closeModal = () => {},
}) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <div
      className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black/20 transition-opacity ease-in duration-500 opacity-[1] visible p-[15px] z-[1000]"
      onClick={handleBackdropClick}
    >
      <div className="flex flex-col items-center justify-center h-[740px] w-[641px] px-10 py-10  bg-slate-50 rounded-lg relative shadow-gray-50">
        <button
          className="absolute top-5 right-5 w-[20px] height-[20px] border-0 m-0 p-0 cursor-pointer"
          type="button"
          onClick={closeModal}
          aria-label="close modal"
        >
          <IoIosClose
            className="w-[20px] h-[20px] relative"
            // style={{ width: '20px', height: '20px', position: 'relative' }}
          />
        </button>

        {children}
      </div>
    </div>,
    modalRoot
  );
}
