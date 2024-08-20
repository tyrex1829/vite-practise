import React from "react";
import AddTodo from "./AddTodo";
import { Provider } from "react-redux";
import { store } from "../app/store";
import FetchTodos from "./FetchTodos";

function TodoList() {
  return (
    <div className="flex flex-col justify-center pt-24 px-12 gap-24">
      <Provider store={store}>
        <AddTodo />
        <FetchTodos />
      </Provider>
    </div>
  );
}

export default TodoList;
