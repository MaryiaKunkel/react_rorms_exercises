import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", function () {
  const { queryByText, getByPlaceholderText, getByTestId } = render(
    <TodoList />
  );
  expect(queryByText("X")).not.toBeInTheDocument();

  const input = getByPlaceholderText("type in your task");

  fireEvent.change(input, { target: { value: "do dishes" } });

  const button = queryByText("Add task");
  fireEvent.click(button);

  const task = getByTestId("task");
  expect(task).toBeInTheDocument();
  expect(queryByText("X")).toBeInTheDocument();
});
