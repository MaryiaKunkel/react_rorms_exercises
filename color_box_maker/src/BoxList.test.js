import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
  const { queryByText, getByLabelText } = render(<BoxList />);
  expect(queryByText("X")).not.toBeInTheDocument();

  const color = getByLabelText("Background color:");
  const width = getByLabelText("Width:");
  const height = getByLabelText("Height:");

  fireEvent.change(color, { target: { value: "red" } });
  fireEvent.change(width, { target: { value: "230px" } });
  fireEvent.change(height, { target: { value: "290px" } });

  const button = queryByText("Add box");
  fireEvent.click(button);

  const box = getByTestId("box");
  expect(box).toBeInTheDocument();
  expect(box).toHaveStyle("background-color: red;");
  expect(queryByText("X")).toBeInTheDocument();
});
