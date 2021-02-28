import React, { useEffect, useState, useRef } from "react";

import "./styles.css";

export const DropdownItem = ({ children }) => (
  <li className="dropdown-item">{children}</li>
);

export const Dropdown = ({ children, trigger: ButtonComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="drop-container" ref={ref}>
      <ButtonComponent onClick={handleButtonClick} />
      {isOpen && (
        <div className="dropdown">
          <ul>{children}</ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
