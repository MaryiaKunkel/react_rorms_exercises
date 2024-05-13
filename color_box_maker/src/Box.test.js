import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", function () {
  render(<Box />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

const onDeleteMock = jest.fn();

it("renders with correct styles", () => {
  const { getByTestId } = render(
    <Box
      id="1"
      color="red"
      width="100px"
      height="100px"
      onDelete={onDeleteMock}
    />
  );

  const box = getByTestId("box");
  expect(box).toBeInTheDocument();
  expect(box).toHaveStyle("width: 100px;");
});

it("triggers onDelete when delete button is clicked", () => {
  const { getByTestId, getByText } = render(
    <Box id="1" color="red" width="100px" height="100px" onDelete />
  );
  const deleteButton = getByText("X");
  fireEvent.click(deleteButton);
  expect(onDeleteMock).toHaveBeenCalledWith("1");
});
