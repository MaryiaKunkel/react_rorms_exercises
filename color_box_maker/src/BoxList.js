import React, { useState } from "react";
import Box from "./Box";
import { v4 as uuidv4 } from "uuid";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuidv4() }]);
  };

  const deleteBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, color, height, width }) => (
          <Box
            id={id}
            color={color}
            width={width}
            height={height}
            onDelete={deleteBox}
          />
        ))}
      </div>
    </div>
  );
}

export default BoxList;
