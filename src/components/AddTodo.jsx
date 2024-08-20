import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onAddingTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form className="flex gap-6 justify-center" onSubmit={onAddingTodo}>
        <input
          className="bg-slate-200 py-4 w-3/4 rounded-md shadow-md hover:bg-slate-300 font-medium text-2xl"
          type="text"
          value={input}
          placeholder="Add new Todo..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="bg-rose-600 hover:bg-rose-700 py-4 px-8 rounded-md shadow-md text-slate-200"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
