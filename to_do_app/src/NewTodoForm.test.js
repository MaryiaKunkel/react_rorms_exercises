import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function () {
  render(<NewTodoForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("should update the form data state according to the changes", function () {
  const { getByPlaceholderText } = render(<NewTodoForm />);
  const input = getByPlaceholderText("type in your task");

  fireEvent.change(input, { target: { value: "do dishes" } });

  expect(input.value).toBe("do dishes");
});

it("should call addTodo function when sumbit", function () {
  const addTodoMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <NewTodoForm addTodo={addTodoMock} />
  );
  const input = getByPlaceholderText("type in your task");
  const button = getByText("Add task");

  fireEvent.change(input, { target: { value: "do dishes" } });
  fireEvent.click(button);

  expect(addTodoMock).toHaveBeenCalledWith({
    text: "do dishes",
  });
});
