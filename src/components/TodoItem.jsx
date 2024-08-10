import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa"; // Font Awesome Icons

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center border border-gray-700 rounded-lg px-4 py-2 mb-3 shadow-md transition-all duration-300 ${
        todo.completed ? "bg-gray-700" : "bg-gray-800"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer mr-3"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg px-2 py-1 text-white ${
          isTodoEditable ? "border-gray-600" : "border-transparent"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="ml-3 text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? <FaSave /> : <FaEdit />}
      </button>
      <button
        className="ml-3 text-red-500 hover:text-red-400 transition-colors duration-300"
        onClick={() => deleteTodo(todo.id)}
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default TodoItem;
