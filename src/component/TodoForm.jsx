import { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter a todo"
        />
        <button type="submit">add Todo</button>
      </form>
    </div>
  );
}
export default TodoForm;
