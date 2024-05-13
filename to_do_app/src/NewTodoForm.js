import React, { useState } from "react";

function NewTodoForm({ addTodo }) {
  const initialState = {
    text: "",
  };
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  function handleSumbit(e) {
    e.preventDefault();
    addTodo(formData);
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSumbit}>
      <input
        id="text"
        name="text"
        type="text"
        placeholder="type in your task"
        value={formData.text}
        onChange={handleChange}
      ></input>
      <button>Add task</button>
    </form>
  );
}

export default NewTodoForm;
