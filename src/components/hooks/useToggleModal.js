import { useState } from 'react';

export default function useToggleModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = (path = '/') => {
    setIsOpen(false);
    //  navigate(path);
  };

  const toggleModal = () => setIsOpen(isOpen => !isOpen);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setIsOpen(() => {
        closeModal();
      });
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setIsOpen(() => {
        closeModal();
      });
    }
  };

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    handleKeyDown,
    handleBackdropClick,
  };
}
