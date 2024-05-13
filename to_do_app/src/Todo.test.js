import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function () {
  render(<Todo />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

const onDeleteMock = jest.fn();

it("triggers onDelete when delete button is clicked", () => {
  const { getByTestId } = render(
    <Todo id="1" text="do dishes" onDelete={onDeleteMock} />
  );

  const deleteButton = getByTestId("delete");
  fireEvent.click(deleteButton);
  expect(onDeleteMock).toHaveBeenCalledWith("1");
});
