import React from "react";

function Todo({ id, onDelete, text }) {
  return (
    <div>
      <div>{text}</div>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
}

export default Todo;
