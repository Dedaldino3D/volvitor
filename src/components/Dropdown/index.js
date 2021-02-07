import React, { useEffect, useState, useRef } from "react";

import "./styles";

const Dropdown = (props) => {
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
    if (ref.current && !ref.curret.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="drop-container" ref={ref}>
      <button onClick={handleButtonClick}>=</button>
      {/* {props.trigger} */}
      <div className="dropdown">
        <ul>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
