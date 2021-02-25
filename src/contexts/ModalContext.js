import { createContext, useContext, useState, useRef } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const modalRef = useRef();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModalOverlay = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <ModalContext.Provider
      value={{ showModal, openModal, closeModal, modalRef, closeModalOverlay }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within an ModalProvider');
  }

  return context;
}

export { useModal, ModalProvider };
