'use client';
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ModalOverlay, Maindiv, ModalContent } from './style';

interface Props {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  width?: number;
  position?: 'center' | 'right';
}

const defaultProps = {
  position: 'center',
  open: false,
};

const ModalCustom = ({ children, open, onClose, ...props }: Props & typeof defaultProps) => {
  const [loaded, setLoaded] = useState(false);
  console.log('loaded', loaded)

  const close = useCallback(() => {
    setLoaded(false);
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const modalLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    modalLoad();
    if (!open) setLoaded(false);
  }, [open]);

  return (
    <>
      {open && (
        <>
          <ModalOverlay isOpen={open} onClick={close}></ModalOverlay>
          <Maindiv>
            <ModalContent
              // onLoad={modalLoad}
              style={{ transform: loaded ? `translate(-50%,-50%) scale(1)` : `translate(-50%,-50%) scale(0)` }}
              isWidth={props?.width}>
              {children}
            </ModalContent>
          </Maindiv>
        </>
      )}
    </>
  );
};

ModalCustom.propTypes = {
  position: PropTypes.oneOf(['center', 'right']),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  width: PropTypes.number,
};

ModalCustom.defaultProps = defaultProps;

export default ModalCustom;
