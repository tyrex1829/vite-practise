import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: 1, text: "Create more Todo List" }],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
  },
});

export const { addTodo } = todoSlice.action;

export default todoSlice.reducer;
