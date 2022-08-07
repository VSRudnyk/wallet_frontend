import { useEffect } from 'react';
import { ModalOverlay, ModalContent } from './TransactionModal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const TransactionModal = ({ onClose, child }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  return createPortal(
    <ModalOverlay>
      <ModalContent>{child}</ModalContent>
    </ModalOverlay>,
    modalRoot
  );
};

export default TransactionModal;
