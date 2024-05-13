import React from "react";

function Box({ id, color, width, height, onDelete }) {
  const boxStyle = {
    backgroundColor: color,
    width: width,
    height: height,
  };

  return (
    <div>
      <div data-testid="box" style={boxStyle}></div>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
}

export default Box;
