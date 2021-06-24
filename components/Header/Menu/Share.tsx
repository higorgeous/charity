import { useState } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import Modal from 'react-modal';

import { Icon } from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Share = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    offset: [0, 15]
  });
  return (
    <>
      <Icon aria-label="Share" type="button" className="mobile-hide" ref={setTriggerRef} onClick={openModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18">
          <g fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2">
            <path d="m4 8s-.997 0-1 0c-.933 0-2 .767-2 1.7v5.3c0 .933 1.067 2 2 2h10c.933 0 2-1.067 2-2v-5c0-.933-1.067-2-2-2-.003 0-1 0-1 0" />
            <path d="m8 1.5v10.5" />
            <path d="m4.5 4.5 3.5-3.5 3.5 3.5" />
          </g>
        </svg>
      </Icon>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: 'tooltip-container' })}
        >
          Share
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        Share
      </Modal>
    </>
  );
};

export default Share;