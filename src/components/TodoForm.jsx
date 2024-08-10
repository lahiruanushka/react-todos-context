import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { FaPlus } from "react-icons/fa"; // Font Awesome Plus Icon

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex mb-4">
      <input
        type="text"
        placeholder="Write a new task..."
        className="w-full border border-gray-700 rounded-l-lg px-4 py-2 outline-none bg-gray-800 text-white shadow-md focus:border-blue-500"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-4 py-2 bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default TodoForm;
