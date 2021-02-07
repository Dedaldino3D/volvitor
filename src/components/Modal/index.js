import React, {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
} from "react";
import { createPortal } from "react-dom";

import "./styles.css";

const modalElement = document.getElementById("modal-root");

function Modal(
  { isVisible, title, children, footer, fade = false, defaultOpened = false },
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
      if (event.keyCode === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen || isVisible ? (
      <div className="modal-container">
        <div className={`modal ${fade ? "modal-fade" : ""}`}>
          <div
            className="modal-header"
            style={title && { borderBottom: "1px solid #dadcdd" }}
          >
            {title && <h3>{title}</h3>}
            <span
              role="button"
              aria-label="close"
              className="modal-closer"
              onClick={close}
            >
              x
            </span>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">{footer}</div>
        </div>
      </div>
    ) : null,
    modalElement
  );
}

export default forwardRef(Modal);
