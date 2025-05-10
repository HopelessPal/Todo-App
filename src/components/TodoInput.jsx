import { useState } from "react";

function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTodo(input);
      setInput(""); // Clear input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="What needs to be done?"
      />
      <button
        type="submit"
        className="w-full mt-3 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoInput;
