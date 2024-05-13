import React from "react";

function Todo({ id, onDelete, text }) {
  return (
    <div>
      <div data-testid="task">{text}</div>
      <button data-testid="delete" onClick={() => onDelete(id)}>
        X
      </button>
    </div>
  );
}

export default Todo;
