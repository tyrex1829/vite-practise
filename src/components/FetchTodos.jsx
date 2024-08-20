import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";

export default function FetchTodos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="flex flex-col gap-10 justify-center mx-14">
      {todos.map((i) => (
        <li
          className="flex justify-between items-center text-2xl font-semibold text-slate-400"
          key={i.id}
        >
          <span>{i.text}</span>
          <div className="flex gap-3">
            <button
              onClick={() => {
                const valueToUpdate = prompt(
                  "Original Text : " +
                    i.text +
                    "\nIf you want to change it, enter the new text below."
                );
                if (valueToUpdate !== null && valueToUpdate.trim() !== "") {
                  dispatch(updateTodo({ id: i.id, text: valueToUpdate }));
                }
              }}
              className=" border-2 hover:bg-rose-700 border-rose-600 py-4 px-8 rounded-md text-slate-200"
            >
              <FontAwesomeIcon icon={faPencil} />
            </button>
            <button
              onClick={() => {
                dispatch(deleteTodo(i.id));
              }}
              className="bg-rose-600 hover:bg-rose-700 py-4 px-8 rounded-md text-slate-200"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
