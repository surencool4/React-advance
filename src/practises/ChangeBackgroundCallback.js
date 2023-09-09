import React, { useState } from "react";
import CallBack from "../components/CallBack";

const ChangeBackgroundCallback = () => {
  const [UiColor, setUIColor] = useState(null);
  //callback function
  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className="App">
      <div
        className="App_color_container"
        style={{ background: `${UiColor}` }}
      ></div>
      <CallBack getColor={getColor} />
    </div>
  );
};

export default ChangeBackgroundCallback;
