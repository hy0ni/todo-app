import { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      return;
    }

    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto p-4 mt-[20vh] bg-white rounded-lg shadow-md">
      <form
        onSubmit={handleSubmit}
        className="mb-4 flex items-center justify-center space-x-2"
      >
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter a todo"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          +
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 bg-gray-100 rounded-md shadow-sm"
          >
            <span className="text-gray-800">{todo.text}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="ml-4 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoForm;
