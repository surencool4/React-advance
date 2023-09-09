import React, { useState } from "react";

const CallBack = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState({ getColor });
  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };

  return (
    <input
      type="text"
      id="input"
      aria-label="input"
      onChange={handleChange}
      value={activeColor}
    />
  );
};

export default CallBack;
