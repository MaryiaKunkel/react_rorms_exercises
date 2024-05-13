import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", function () {
  render(<NewBoxForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("should update the form data state according to the changes", function () {
  const { getByLabelText } = render(<NewBoxForm />);
  const colorInput = getByLabelText("Background color:");
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");

  fireEvent.change(colorInput, { target: { value: "red" } });
  fireEvent.change(widthInput, { target: { value: "150px" } });
  fireEvent.change(heightInput, { target: { value: "250px" } });

  expect(colorInput.value).toBe("red");
  expect(widthInput.value).toBe("150px");
  expect(heightInput.value).toBe("250px");
});

it("should call addBox function when sumbit", function () {
  const addBoxMock = jest.fn();
  const { getByLabelText } = render(<NewBoxForm addBox={addBoxMock} />);
  const colorInput = getByLabelText("Background color:");
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const button = getByClassName("button");

  fireEvent.change(colorInput, { target: { value: "red" } });
  fireEvent.change(widthInput, { target: { value: "150px" } });
  fireEvent.change(heightInput, { target: { value: "250px" } });
  fireEvent.click(button);

  expect(addBoxMock).toHaveBeenCalledWith({
    color: "red",
    width: "100px",
    height: "100px",
  });
});
