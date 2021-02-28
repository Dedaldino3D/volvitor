import React, {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

import {
  Container,
  ModalContainer,
  ModalBody,
  ModalFooter,
  CloseModal,
  ModalHeader,
} from "./styles";

// import "./styles.css";

const modalElement = document.getElementById("modal-root");

function Modal(
  {
    isVisible,
    title,
    children,
    footer,
    onClose,
    fade = false,
    defaultOpened = false,
  },
  ref
) {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen || isVisible ? (
      <Container>
        <ModalContainer>
          <ModalHeader title={title}>
            {title && <h3>{title}</h3>}
            <CloseModal onClick={onClose}>
              <FaTimes />
            </CloseModal>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContainer>
      </Container>
    ) : null,
    modalElement
  );
}

export default forwardRef(Modal);
