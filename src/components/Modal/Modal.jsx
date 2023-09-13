import { useEffect } from 'react';

import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { RemoveScroll } from 'react-remove-scroll';
import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => e.code === 'Escape' && onClose();

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => e.currentTarget === e.target && onClose();

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <RemoveScroll>
        <Content>{children}</Content>
      </RemoveScroll>
    </Backdrop>,
    modalRoot,
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
