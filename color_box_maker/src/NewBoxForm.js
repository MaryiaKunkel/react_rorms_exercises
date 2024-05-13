import React, { useState } from "react";

function NewBoxForm({ addBox }) {
  const initialState = {
    color: "",
    width: "",
    height: "",
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
    addBox(formData);
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="color">Background color:</label>
      <input
        id="color"
        name="color"
        type="text"
        placeholder="e.g. red"
        value={formData.color}
        onChange={handleChange}
      ></input>
      <br />

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        type="text"
        placeholder="e.g. 100px"
        value={formData.width}
        onChange={handleChange}
      ></input>
      <br />

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        type="text"
        placeholder="e.g. 100px"
        value={formData.height}
        onChange={handleChange}
      ></input>
      <br />

      <button className="button">Add box</button>
    </form>
  );
}

export default NewBoxForm;
